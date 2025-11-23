import { IEmailDTO } from "@/server-only/models/email.dto";
import axios from "axios";

export const commonRepository = {

  sendEmail: async (dto: IEmailDTO) => {
    return axios.post('/api/contact', dto)
  }

}
