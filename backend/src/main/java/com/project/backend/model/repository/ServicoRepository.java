package com.project.backend.model.repository;

import com.project.backend.model.entity.Servico;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicoRepository extends JpaRepository<Servico, Integer> {

}