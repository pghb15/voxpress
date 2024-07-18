package com.demo.arq.infrastructure.integrationevents.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.demo.arq.domain.mapper.BaseMapper;
import com.demo.arq.domain.model.Pecera;
import com.demo.arq.infrastructure.integrationevents.dto.PeceraInputEventDto;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PeceraToPeceraInputEventDtoMapper extends BaseMapper<Pecera, PeceraInputEventDto> {

}
