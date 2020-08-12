import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ClientesService } from './../clientes.service';
import { Cliente } from './../cliente';

@Component({
  selector: 'app-clientes-list',
  templateUrl: './clientes-list.component.html',
  styleUrls: ['./clientes-list.component.css'],
})
export class ClientesListComponent implements OnInit {
  clientes: Cliente[] = [];
  clienteSelectedDelete: Cliente;
  successMessage: string;
  errorMessage: string;

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllClientes();
  }

  getAllClientes(): void {
    this.clientesService.getAllClientes().subscribe(
      (clientes) => {
        this.clientes = clientes;
      },
      (error) => console.log(error)
    );
  }

  selectClienteDelete(cliente: Cliente): void {
    this.clienteSelectedDelete = cliente;
  }

  deleteCliente(): void {
    this.successMessage = null;
    this.errorMessage = null;

    this.clientesService.delete(this.clienteSelectedDelete).subscribe(
      (response) => {
        this.successMessage = 'Cliente deletado com sucesso!';
        this.clienteSelectedDelete = null;
        this.getAllClientes();
      },
      (error) => {
        this.errorMessage = 'Ocorreu um erro ao deletar o cliente.';
        console.log(error);
      }
    );
  }
}
