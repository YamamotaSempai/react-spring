package kz.aa.studentApp.repository;

import kz.aa.studentApp.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    Student findByIinIsLike(String iin);
}
