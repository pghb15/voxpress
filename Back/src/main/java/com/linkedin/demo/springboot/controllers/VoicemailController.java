package com.linkedin.demo.springboot.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.linkedin.demo.springboot.entities.Voicemail;
import com.linkedin.demo.springboot.services.VoicemailService;

@CrossOrigin(origins="*")
@RestController
@RequestMapping("/voicemail")
public class VoicemailController {
	
	@Autowired
	VoicemailService voicemailService;
			
	//Create new voicemail (for testing API purpose - Not implemented on the APP)
	@PostMapping(consumes =MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Voicemail> createVoicemail(@RequestBody Voicemail voicemail){
		Voicemail newVoicemail = voicemailService.createVoicemail(voicemail);
		return new ResponseEntity<Voicemail>(newVoicemail,HttpStatus.CREATED);
	}
	//Get voicemail by contactId
    @GetMapping(path="/{contactId}",produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Voicemail> getVoicemailByContactId(@PathVariable String contactId) {
    	Voicemail voicemailFound = voicemailService.getVoicemailBycontactId(contactId);
    	return new ResponseEntity<Voicemail>(voicemailFound,HttpStatus.OK);		
    }
    //Get all voicemails
    @GetMapping(produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<List<Voicemail>> getAllVoicemails() {
    	List<Voicemail> voicemailsList = voicemailService.getAllVoicemails();
    	return new ResponseEntity<List<Voicemail>>(voicemailsList,HttpStatus.OK);	
    }
    //Update voicemail
    @PutMapping(consumes =MediaType.APPLICATION_JSON_VALUE,produces =MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Voicemail> updateVoicemail(@RequestBody Voicemail voicemail) {
    	Voicemail voicemailUpdated = voicemailService.updateVoicemail(voicemail);
    	return new ResponseEntity<Voicemail>(voicemailUpdated,HttpStatus.ACCEPTED);	
    }
    //Delete voicemail
	@DeleteMapping(path="/{contactId}")
	public ResponseEntity<Object> deleteVoicemail(@PathVariable String contactId) {
		voicemailService.deleteVoicemail(contactId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	// To create two list of inbox and archived
	@GetMapping("/inbox")
	public List<Voicemail> getInboxVoicemails() {
		return voicemailService.findByType("inbox");
	}
	
	@GetMapping("/archived")
	public List<Voicemail> getArchivedVoicemails() {
		return voicemailService.findByType("archived");
	}
	
	@GetMapping("/assigned")
	public List<Voicemail> getAssignedVoicemails() {
		return voicemailService.findByType("assigned");
	}
	

}
