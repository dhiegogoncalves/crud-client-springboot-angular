import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ClientesService } from './../clientes.service';
import { ClienteDTO } from '../cliente.dto';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css'],
})
export class ClientesFormComponent implements OnInit {
  cliente: ClienteDTO;
  success: boolean;
  errors: string[];
  clienteId: number;

  constructor(
    private clientesService: ClientesService,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new ClienteDTO();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.clienteId = params.id;
      if (this.clienteId) {
        this.clientesService.getClienteById(this.clienteId).subscribe(
          (cliente) => (this.cliente = cliente),
          (error) => console.log(error)
        );
      }
    });
  }

  onSubmit(): void {
    this.success = false;
    this.errors = [];

    if (this.clienteId) {
      this.clientesService.update(this.cliente).subscribe(
        (response) => {
          this.success = true;
        },
        (error) => (this.errors = error.error.errors)
      );
    } else {
      this.clientesService.save(this.cliente).subscribe(
        (cliente) => {
          this.cliente = cliente;
          this.success = true;
        },
        (error) => (this.errors = error.error.errors)
      );
    }
  }
}
