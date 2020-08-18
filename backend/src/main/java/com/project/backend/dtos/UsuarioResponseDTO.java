package com.project.backend.dtos;

import com.project.backend.models.Usuario;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor(access = AccessLevel.PRIVATE)
@Getter
public class UsuarioResponseDTO {

    private String username;

    public static UsuarioResponseDTO convertToDTO(Usuario usuario) {
        return new UsuarioResponseDTO(usuario.getUsername());
    }
}