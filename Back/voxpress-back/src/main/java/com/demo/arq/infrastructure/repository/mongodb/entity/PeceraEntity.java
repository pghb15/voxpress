package com.demo.arq.infrastructure.repository.mongodb.entity;

import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.extern.jackson.Jacksonized;

@Data
@Builder
@Jacksonized
@NoArgsConstructor
@AllArgsConstructor
@Document("PECERAS")
public class PeceraEntity {
	@Id
    String id;
    String value;
    ValueObjectEntity valueObject;
    boolean eliminado;
}
