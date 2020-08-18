package com.project.backend.repositories;

import java.util.Optional;

import com.project.backend.models.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

    Optional<Usuario> findByUsername(String username);

    boolean existsByUsername(String username);
}