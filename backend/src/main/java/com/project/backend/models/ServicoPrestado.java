package com.project.backend.models;

import java.math.BigDecimal;
import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class ServicoPrestado {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;

  private String descricao;

  @ManyToOne
  @JoinColumn(name = "cliente_id")
  private Cliente cliente;

  @Column
  @JsonFormat(pattern = "dd/MM/yyyy")
  private LocalDate data;

  @Column
  private BigDecimal preco;
}