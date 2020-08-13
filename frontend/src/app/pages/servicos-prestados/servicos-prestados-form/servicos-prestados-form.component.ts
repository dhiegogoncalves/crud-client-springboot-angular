import { ClientesService } from './../../clientes/clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicos-prestados-form',
  templateUrl: './servicos-prestados-form.component.html',
  styleUrls: ['./servicos-prestados-form.component.css'],
})
export class ServicosPrestadosFormComponent implements OnInit {
  clientes: Cliente[];

  constructor(private clientesService: ClientesService) {}

  ngOnInit(): void {
    this.clientesService.getAllClientes().subscribe(
      (clientes) => (this.clientes = clientes),
      (error) => console.log(error)
    );
  }
}
