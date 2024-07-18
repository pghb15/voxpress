package com.demo.arq.infrastructure.integrationevents.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.demo.arq.application.port.output.PeceraProducerOutputPort;
import com.demo.arq.domain.model.Pecera;
import com.demo.arq.infrastructure.integrationevents.dto.PeceraEventDto;
import com.demo.arq.infrastructure.integrationevents.mapper.PeceraToPeceraEventDtoMapper;
import com.demo.arq.infrastructure.integrationevents.producer.ProducerPeceraEvent;

import jakarta.validation.Valid;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class PeceraProducerService implements PeceraProducerOutputPort {

	@Value("${custom.topic.pecera.posted}")
	private String topicPostedPecera;

	@Value("${custom.topic.pecera.modified}")
	private String topicModifiedPecera;

	@Value("${custom.topic.pecera.deleted}")
	private String topicDeletedPecera;

	@Autowired
	ProducerPeceraEvent producerPeceraEvent;

	@Autowired
	PeceraToPeceraEventDtoMapper peceraToPeceraEventDtoMapper;

	@Override
	public void eventoCreacionPecera(@Valid Pecera input) {
		log.debug("eventoCreacionPecera");

		PeceraEventDto eventoSalida = peceraToPeceraEventDtoMapper.fromInputToOutput(input);

		producerPeceraEvent.sendMessageAsynch(topicPostedPecera, eventoSalida);
	}

	@Override
	public void eventoModificacionPecera(@Valid Pecera input) {
		log.debug("eventoModificacionPecera");

		PeceraEventDto eventoSalida = peceraToPeceraEventDtoMapper.fromInputToOutput(input);

		producerPeceraEvent.sendMessageAsynch(topicModifiedPecera, eventoSalida);
	}

	@Override
	public void eventoEliminacionPecera(@Valid Pecera input) {
		log.debug("eventoEliminacionPecera");

		PeceraEventDto eventoSalida = peceraToPeceraEventDtoMapper.fromInputToOutput(input);

		producerPeceraEvent.sendMessageAsynch(topicDeletedPecera, eventoSalida);
	}

}
