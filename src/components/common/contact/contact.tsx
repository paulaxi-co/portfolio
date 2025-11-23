"use client"
import { RightArrowIcon } from "@/components/common/icons/right-arrow";
import { Title } from "@/components/common/text/title";
import { commonRepository } from "@/modules/common/repository";
import { IEmailDTO } from "@/server-only/models/email.dto";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Snackbar, TextField } from "@mui/material";
import { animate, createScope, Scope } from "animejs";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const scheme = z.object({
  email: z.string().email('Please enter a valid email address').nonempty('Please enter a valid email address'),
  message: z.string().nonempty('Please enter a message'),
  name: z.string().nonempty('Please enter your name')
})

export function Contact() {
  const scopeRef = useRef<Scope>(null);
  const root = useRef(null);
  const formRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState(0);
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
      scopeRef.current?.methods.disappear();
      setIsVisible(false);
      reset();
      setSnackState({ message: 'Message sent!', open: true });
    }).catch(() => {
      setSnackState({ message: 'There was an error sending you message :c', open: true })
    })
  }

  useLayoutEffect(() => {
    const form = formRef.current!;

    const rect = form.getBoundingClientRect();
    setMaxHeight(rect.height + 100);
  }, []);

  useEffect(() => {
    scopeRef.current = createScope({ root }).add((self) => {
      const form = formRef.current!;

      self?.add('appear', () => {
        animate(form, {
          height: maxHeight
        })
      })

      self?.add('disappear', () => {
        animate(form, {
          height: 0
        })
      })

    });

    return () => scopeRef.current?.revert();

  }, [maxHeight]);

  const showForm = () => {
    scopeRef.current?.methods.appear();
    setIsVisible(true);
  }

  return (
    <>
      <div id="contact" ref={root} className="w-full max-w-[800px] mt-[96px] mb-[128px] flex flex-col items-center px-4">
        <Title center>Let&#39;s chat</Title>
        <p className="w-full mt-4">
          Whether it’s about joining your team, collaborating on a project, or simply chatting about design, books, or movies — I’m always open to meaningful conversations (fries included).
        </p>
        <div ref={formRef} style={{ height: maxHeight ? 0 : 'auto' }} className="overflow-hidden w-full">
          <div className="flex flex-col items-stretch w-full gap-4 mt-4">
            <TextField error={!!errors.name?.message} helperText={errors.name?.message} size="small" variant="standard" label="Name" {...register('name')} />
            <TextField error={!!errors.email?.message} helperText={errors.email?.message} type="email" variant="standard" label="Email" {...register('email')} />
            <TextField error={!!errors.message?.message} helperText={errors.message?.message} multiline minRows={3} maxRows={3} variant="standard" label="Message" {...register('message')} />
          </div>
        </div>
        <div className="mt-[32px] group">
          <Button onClick={() => isVisible ? handleSubmit(onSubmit)() : showForm()} variant="contained">
            <span>Start conversation</span>
            <RightArrowIcon className="group-hover:-rotate-45 transition" />
          </Button>
        </div>
      </div>
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
