package kz.aa.studentApp.repository;

import kz.aa.studentApp.model.University;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UniversityRepository extends JpaRepository<University, Long> {
}
