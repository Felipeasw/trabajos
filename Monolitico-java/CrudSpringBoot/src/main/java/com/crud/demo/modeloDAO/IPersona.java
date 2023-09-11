package com.crud.demo.modeloDAO;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.crud.demo.modelo.Persona;

public interface IPersona extends CrudRepository<Persona, Integer>{

}
