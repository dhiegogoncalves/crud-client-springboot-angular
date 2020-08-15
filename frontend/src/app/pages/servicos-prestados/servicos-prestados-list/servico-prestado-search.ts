import { ClienteDTO } from '../../clientes/cliente.dto';

export interface ServicoPrestadoSearchDTO {
  descricao: string;
  preco: string;
  data: string;
  cliente: ClienteDTO;
}
