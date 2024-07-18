package com.demo.arq.test.kafka;

import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.demo.arq.infrastructure.integrationevents.dto.PeceraEventDto;
import com.demo.arq.test.util.ConsumerLatch;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class ConsumerDeletedPeceraEventTestService extends ConsumerLatch<PeceraEventDto> {
	
	@KafkaListener(
			topics = "${custom.topic.pecera.deleted}", 
			groupId = "${spring.kafka.consumer.group-id-test}", 
			containerFactory = "containerFactory")
	public void receive(ConsumerRecord<String, PeceraEventDto> consumerRecord) {
		log.debug("receive");
		this.consumeMsg(consumerRecord);
	}

}