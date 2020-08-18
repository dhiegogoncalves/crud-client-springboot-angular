package com.project.backend.controllers;

import javax.validation.Valid;

import com.project.backend.dtos.UsuarioDTO;
import com.project.backend.models.Usuario;
import com.project.backend.services.UsuarioService;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/usuarios")
@RequiredArgsConstructor
public class UsuarioController {

    private final UsuarioService usuarioService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody @Valid UsuarioDTO usuarioDTO) {
        Usuario usuario = usuarioDTO.convertToEntity();

        try {
            usuarioService.save(usuario);
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, e.getMessage());
        }
    }
}