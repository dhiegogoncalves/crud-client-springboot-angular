import { Component, OnInit } from '@angular/core';

import { ServicoPrestadoSearchDTO } from './servico-prestado-search';
import { ServicosPrestadosService } from './../servicos-prestados.service';

@Component({
  selector: 'app-servicos-prestados-list',
  templateUrl: './servicos-prestados-list.component.html',
  styleUrls: ['./servicos-prestados-list.component.css'],
})
export class ServicosPrestadosListComponent implements OnInit {
  nome = '';
  mes: string = null;
  meses: number[];

  message: string;

  servicosPrestados: ServicoPrestadoSearchDTO[];

  constructor(private servicosPrestadosService: ServicosPrestadosService) {
    this.meses = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  }

  ngOnInit(): void {}

  onSearch(): void {
    this.message = null;

    this.servicosPrestadosService
      .getAllByNomeAndMes(this.nome, !!this.mes ? this.mes : '')
      .subscribe(
        (servicosPrestados) => {
          this.servicosPrestados = servicosPrestados;
          if (this.servicosPrestados.length <= 0) {
            this.message = 'Nenhum registro encontrado';
          }
        },
        (error) => console.log(error)
      );
  }
}
