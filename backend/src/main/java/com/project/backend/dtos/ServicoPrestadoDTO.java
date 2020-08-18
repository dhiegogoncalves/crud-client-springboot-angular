package com.project.backend.dtos;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServicoPrestadoDTO {

    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;

    @NotNull(message = "{campo.cliente.obrigatorio}")
    private Integer clienteId;

    @NotEmpty(message = "{campo.data.obrigatorio}")
    private String data;

    @NotEmpty(message = "{campo.preco.obrigatorio}")
    private String preco;
}