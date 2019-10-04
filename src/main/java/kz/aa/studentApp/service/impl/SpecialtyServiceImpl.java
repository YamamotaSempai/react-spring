package kz.aa.studentApp.service.impl;

import kz.aa.studentApp.model.Specialty;
import kz.aa.studentApp.service.SpecialtyService;
import kz.aa.studentApp.service.base.BaseServiceImpl;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class SpecialtyServiceImpl extends BaseServiceImpl<Specialty, Long> implements SpecialtyService {
}
