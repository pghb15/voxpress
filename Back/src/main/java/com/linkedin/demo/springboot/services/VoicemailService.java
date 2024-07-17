package com.linkedin.demo.springboot.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.linkedin.demo.springboot.entities.Voicemail;
import com.linkedin.demo.springboot.repositories.VoicemailRepository;

@Service
public class VoicemailService {
	
	@Autowired
	VoicemailRepository voicemailRepository;
	
	// function to create a new voicemail (Testing API purpose-Not implemented on the APP)
		public Voicemail createVoicemail(Voicemail voicemail) {
	        return voicemailRepository.save(voicemail);
	    }
	
	// function return a voicemail by id or null in case it doesn't exist
    public Voicemail getVoicemailBycontactId(String contactId) {
        return voicemailRepository.findById(contactId).orElse(null);
    }
    // function that retrieve all voicemails from database
    public List<Voicemail> getAllVoicemails() {
        return voicemailRepository.findAll();
    }
    // function that update an existing voicemail in database
    public Voicemail updateVoicemail(Voicemail voicemail) {
        return voicemailRepository.save(voicemail);
    }
    // function that remove a voicemail from database by it's id
    public void deleteVoicemail(String contactId) {
        voicemailRepository.deleteById(contactId);
    }
    
    // function to generate list of inbox, assigned and archived voicemails.
    public List<Voicemail> findByType(String type){
    	return voicemailRepository.findByType(type);
    }
}

