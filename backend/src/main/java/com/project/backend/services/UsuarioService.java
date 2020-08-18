package com.project.backend.services;

import com.project.backend.exceptions.DefaultException;
import com.project.backend.models.Usuario;
import com.project.backend.repositories.UsuarioRepository;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UsuarioService implements UserDetailsService {

    private final UsuarioRepository usuarioRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = usuarioRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("Login não encontrado."));

        return User.builder().username(usuario.getUsername()).password(usuario.getPassword()).roles("USER").build();
    }

    public void save(Usuario usuario) throws Exception {
        boolean exists = usuarioRepository.existsByUsername(usuario.getUsername());

        if (exists) {
            throw new DefaultException("Usuário já cadastrado.");
        }

        usuarioRepository.save(usuario);
    }

}