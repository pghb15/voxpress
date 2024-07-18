package com.demo.arq.infrastructure.integrationevents.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Value
@Builder
@Jacksonized
public class PeceraInputEventDto {
	@NotNull
    String id;
	@NotNull
    String value;
}
