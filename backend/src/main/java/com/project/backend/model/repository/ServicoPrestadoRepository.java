package com.project.backend.model.repository;

import java.util.List;

import com.project.backend.model.entity.ServicoPrestado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer> {

    @Query("SELECT s FROM ServicoPrestamo s JOIN s.cliente c WHERE UPPER(c.nome) LIKE UPPER(:nome) AND MONTH(s.data) = :mes")
    List<ServicoPrestado> findAllByNomeClienteAndMes(@Param("nome") String nome, @Param("mes") Integer mes);

}