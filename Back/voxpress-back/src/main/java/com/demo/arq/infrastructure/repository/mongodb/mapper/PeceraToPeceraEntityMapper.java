package com.demo.arq.infrastructure.repository.mongodb.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import com.demo.arq.domain.mapper.BaseMapper;
import com.demo.arq.domain.model.Pecera;
import com.demo.arq.infrastructure.repository.mongodb.entity.PeceraEntity;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface PeceraToPeceraEntityMapper extends BaseMapper<Pecera, PeceraEntity> {

}
