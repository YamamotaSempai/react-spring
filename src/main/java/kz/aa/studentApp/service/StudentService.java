package kz.aa.studentApp.service;

import kz.aa.studentApp.model.Student;
import kz.aa.studentApp.service.base.BaseService;

public interface StudentService extends BaseService<Student, Long> {
    void deleteById(Long id);
    Student findByIinLike(String iin);
}
