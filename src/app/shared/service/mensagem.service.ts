import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemService {

  constructor(private toastService: ToastrService) { }

  exibir_sucesso = (mensagem: string, titulo?: string) => {
    this.toastService.success(mensagem, titulo)
  }

  exibir_erro = (mensagem: string, titulo?: string) => {
    this.toastService.error(mensagem, titulo)
  }

  exibir_aviso = (mensagem: string, titulo?: string) => {
    this.toastService.warning(mensagem, titulo)
  }

  exibir_info = (mensagem: string, titulo?: string) => {
    this.toastService.info(mensagem, titulo)
  }

}
