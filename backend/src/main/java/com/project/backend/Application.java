package com.project.backend;

import com.project.backend.model.entity.Cliente;
import com.project.backend.model.repository.ClienteRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

	@Bean
	public CommandLineRunner run(@Autowired ClienteRepository clienteRepository) {
		return args -> {
			Cliente cliente = Cliente.builder().cpf("76007020029").nome("João").build();
			clienteRepository.save(cliente);
		};
	}

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}

}
