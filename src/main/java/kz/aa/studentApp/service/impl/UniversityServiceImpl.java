package kz.aa.studentApp.service.impl;

import kz.aa.studentApp.model.University;
import kz.aa.studentApp.service.UniversityService;
import kz.aa.studentApp.service.base.BaseServiceImpl;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UniversityServiceImpl extends BaseServiceImpl<University, Long> implements UniversityService {
}
