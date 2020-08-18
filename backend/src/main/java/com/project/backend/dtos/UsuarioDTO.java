package com.project.backend.dtos;

import javax.validation.constraints.NotEmpty;

import com.project.backend.models.Usuario;

import lombok.Setter;

@Setter
public class UsuarioDTO {

    @NotEmpty(message = "{campo.login.obrigatorio}")
    private String username;

    @NotEmpty(message = "{campo.senha.obrigatorio}")
    private String password;

    public Usuario convertToEntity() {
        return new Usuario(username, password);
    }
}