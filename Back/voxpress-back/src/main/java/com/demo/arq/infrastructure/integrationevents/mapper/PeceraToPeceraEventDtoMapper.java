package com.demo.arq.infrastructure.integrationevents.mapper;

import org.mapstruct.Mapper;

import com.demo.arq.domain.mapper.BaseMapper;
import com.demo.arq.domain.model.Pecera;
import com.demo.arq.infrastructure.integrationevents.dto.PeceraEventDto;

@Mapper(componentModel = "spring")
public interface PeceraToPeceraEventDtoMapper extends BaseMapper<Pecera, PeceraEventDto> {

}
