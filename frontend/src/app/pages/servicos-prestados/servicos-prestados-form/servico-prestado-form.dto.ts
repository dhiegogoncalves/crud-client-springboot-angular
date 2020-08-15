export class ServicoPrestadoFormDTO {
  descricao: string;
  preco: string;
  data: string;
  clienteId: number;

  constructor() {
    this.clienteId = null;
  }
}
