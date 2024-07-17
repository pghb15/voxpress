package com.linkedin.demo.springboot.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.linkedin.demo.springboot.entities.Voicemail;

@Repository
public interface VoicemailRepository extends MongoRepository<Voicemail,String>{
	List<Voicemail> findByType(String type);
}
