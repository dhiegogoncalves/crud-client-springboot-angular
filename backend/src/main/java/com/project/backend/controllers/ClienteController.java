package com.project.backend.controllers;

import java.util.List;

import javax.validation.Valid;

import com.project.backend.models.Cliente;
import com.project.backend.repositories.ClienteRepository;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/clientes")
@RequiredArgsConstructor
public class ClienteController {

  private final ClienteRepository clienteRepository;

  @GetMapping
  public List<Cliente> getById() {
    return clienteRepository.findAll();
  }

  @GetMapping("{id}")
  public Cliente getById(@PathVariable Integer id) {
    return clienteRepository.findById(id)
        .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado."));
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public Cliente save(@RequestBody @Valid Cliente cliente) {
    return clienteRepository.save(cliente);
  }

  @PutMapping("{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void update(@PathVariable Integer id, @RequestBody @Valid Cliente updatedCliente) {
    clienteRepository.findById(id).map(cliente -> {
      updatedCliente.setId(cliente.getId());
      return clienteRepository.save(updatedCliente);
    }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado."));
  }

  @DeleteMapping("{id}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
  public void delete(@PathVariable Integer id) {
    clienteRepository.findById(id).map(cliente -> {
      clienteRepository.delete(cliente);
      return Void.TYPE;
    }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Cliente não encontrado."));
  }
}