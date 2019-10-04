package kz.aa.studentApp.service.impl;

import kz.aa.studentApp.model.Student;
import kz.aa.studentApp.repository.StudentRepository;
import kz.aa.studentApp.service.StudentService;
import kz.aa.studentApp.service.base.BaseServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class StudentServiceImpl extends BaseServiceImpl<Student, Long> implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public void deleteById(Long id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Student findByIinLike(String iin) {
        return studentRepository.findByIinIsLike(iin);
    }
}
