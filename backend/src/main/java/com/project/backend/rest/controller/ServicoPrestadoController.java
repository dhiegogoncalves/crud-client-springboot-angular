package com.project.backend.rest.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import com.project.backend.model.entity.Cliente;
import com.project.backend.model.entity.ServicoPrestado;
import com.project.backend.model.repository.ClienteRepository;
import com.project.backend.model.repository.ServicoPrestadoRepository;
import com.project.backend.rest.dto.ServicoPrestadoDTO;
import com.project.backend.util.BigDecimalUtil;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/servicos-prestados")
@CrossOrigin("http://localhost:4200")
@RequiredArgsConstructor
public class ServicoPrestadoController {

  private final ServicoPrestadoRepository servicoPrestadoRepository;
  private final ClienteRepository clienteRepository;

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ServicoPrestado save(@RequestBody ServicoPrestadoDTO servicoPrestadoDTO) {
    LocalDate data = LocalDate.parse(servicoPrestadoDTO.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));

    Cliente cliente = clienteRepository.findById(servicoPrestadoDTO.getClienteId())
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

    ServicoPrestado servicoPrestado = new ServicoPrestado(null, servicoPrestadoDTO.getDescricao(), cliente,
        BigDecimalUtil.convert(servicoPrestadoDTO.getPreco()), data);

    return servicoPrestadoRepository.save(servicoPrestado);
  }

  @GetMapping
  public List<ServicoPrestado> search(@RequestParam(value = "nome", required = false, defaultValue = "") String nome,
      @RequestParam(value = "mes", required = false) Integer mes) {
    return servicoPrestadoRepository.findAllByNomeClienteAndMes("%" + nome + "%", mes);
  }

}