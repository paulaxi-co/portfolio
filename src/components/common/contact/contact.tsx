"use client"
import { RightArrowIcon } from "@/components/common/icons/right-arrow";
import { Title } from "@/components/common/text/title";
import { commonRepository } from "@/modules/common/repository";
import { IEmailDTO } from "@/server-only/models/email.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const scheme = z.object({
  email: z.string().email('Please enter a valid email address').nonempty('Please enter a valid email address'),
  message: z.string().nonempty('Please enter a message'),
  name: z.string().nonempty('Please enter your name')
})

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: '',
      message: '',
      name: ''
    },
    resolver: zodResolver(scheme)
  })
  const [snackState, setSnackState] = useState({ open: false, message: '' })

  const onSubmit = (data: IEmailDTO) => {
    setSnackState({message: 'Sending...', open: true});
    commonRepository.sendEmail(data).then(() => {
      setIsVisible(false);
      reset();
      setSnackState({ message: 'Message sent!', open: true });
    }).catch(() => {
      setSnackState({ message: 'There was an error sending your message :c', open: true })
    })
  }

  const showForm = () => {
    setIsVisible(true);
  }

  return (
    <>
      <section id="contact" className="mt-16 mb-20 flex w-full max-w-[800px] scroll-mt-28 flex-col items-center px-4 md:mt-[96px] md:mb-[128px]">
        <Title center>Let&#39;s chat</Title>
        <p className="w-full mt-4 text-center">
          Whether it’s about joining your team, collaborating on a project, or simply chatting about design, books, or movies — I’m always open to meaningful conversations (fries included).
        </p>
        <div className={`grid w-full transition-[grid-template-rows,opacity] duration-500 ${isVisible ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`} aria-hidden={!isVisible}>
          <div className="min-h-0 overflow-hidden">
            <div className="mt-6 flex w-full flex-col items-stretch gap-5 rounded-[24px] border border-primary-400 bg-[#faf8f5] p-5 sm:p-8">
              <TextField disabled={!isVisible} error={!!errors.name?.message} helperText={errors.name?.message} size="small" variant="standard" label="Name" {...register('name')} />
              <TextField disabled={!isVisible} error={!!errors.email?.message} helperText={errors.email?.message} type="email" variant="standard" label="Email" {...register('email')} />
              <TextField disabled={!isVisible} error={!!errors.message?.message} helperText={errors.message?.message} multiline minRows={3} maxRows={5} variant="standard" label="Message" {...register('message')} />
            </div>
          </div>
        </div>
        <div className="mt-[32px] group">
          <Button onClick={() => isVisible ? handleSubmit(onSubmit)() : showForm()} variant="contained">
            <span>Start conversation</span>
            <RightArrowIcon className="rotate-90 group-hover:rotate-45 transition ml-2" />
          </Button>
        </div>
      </section>
      <Snackbar
        open={snackState.open}
        onClose={() => setSnackState({ open: false, message: '' })}
        message={snackState.message}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      />
    </>
  );
}
