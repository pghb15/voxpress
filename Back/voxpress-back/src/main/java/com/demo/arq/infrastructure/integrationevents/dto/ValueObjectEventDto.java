package com.demo.arq.infrastructure.integrationevents.dto;

import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Value
@Builder
@Jacksonized
public class ValueObjectEventDto {
	String value;
}
