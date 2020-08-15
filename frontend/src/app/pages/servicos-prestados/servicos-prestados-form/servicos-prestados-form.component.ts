import { Component, OnInit } from '@angular/core';

import { ServicoPrestadoFormDTO } from './servico-prestado-form.dto';
import { ClientesService } from './../../clientes/clientes.service';
import { ServicosPrestadosService } from './../servicos-prestados.service';
import { ClienteDTO } from '../../clientes/cliente.dto';

@Component({
  selector: 'app-servicos-prestados-form',
  templateUrl: './servicos-prestados-form.component.html',
  styleUrls: ['./servicos-prestados-form.component.css'],
})
export class ServicosPrestadosFormComponent implements OnInit {
  clientes: ClienteDTO[];
  servicoPrestado: ServicoPrestadoFormDTO;

  success: boolean;
  errors: string[];

  constructor(
    private clientesService: ClientesService,
    private servicosPrestadosService: ServicosPrestadosService
  ) {
    this.servicoPrestado = new ServicoPrestadoFormDTO();
  }

  ngOnInit(): void {
    this.clientesService.getAllClientes().subscribe(
      (clientes) => (this.clientes = clientes),
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    this.success = false;
    this.errors = [];

    this.servicosPrestadosService.save(this.servicoPrestado).subscribe(
      (servicoPrestado) => {
        this.success = true;
        this.servicoPrestado = new ServicoPrestadoFormDTO();
      },
      (error) => (this.errors = error.error.errors)
    );
  }
}
