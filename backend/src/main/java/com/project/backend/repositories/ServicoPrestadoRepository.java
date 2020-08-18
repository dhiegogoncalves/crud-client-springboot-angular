package com.project.backend.repositories;

import java.util.List;

import com.project.backend.models.ServicoPrestado;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ServicoPrestadoRepository extends JpaRepository<ServicoPrestado, Integer> {

    @Query("SELECT s FROM ServicoPrestado s JOIN s.cliente c WHERE UPPER(c.nome) LIKE UPPER(:nome) AND MONTH(s.data) = :mes")
    List<ServicoPrestado> findAllByNomeClienteAndMes(@Param("nome") String nome, @Param("mes") Integer mes);

}