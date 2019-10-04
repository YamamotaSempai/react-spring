package kz.aa.studentApp.component;

import kz.aa.studentApp.model.Specialty;
import kz.aa.studentApp.model.University;
import kz.aa.studentApp.repository.SpecialtyRepository;
import kz.aa.studentApp.repository.UniversityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ComponentTest implements CommandLineRunner {

    @Autowired
    private UniversityRepository universityRepository;

    @Autowired
    private SpecialtyRepository specialtyRepository;

    public void run(String... strings) {
        Specialty specialty = new Specialty();
        specialty.setCode("B100123");
        specialty.setTitle("Информатика");

        Specialty specialty1 = new Specialty();
        specialty1.setCode("A123123");
        specialty1.setTitle("ВТИПО");
        this.specialtyRepository.save(specialty);
        this.specialtyRepository.save(specialty1);

        University university = new University();
        university.setAddress("Kobilandi");
        university.setTitle("KGU univer");
        University university1 = new University();
        university1.setAddress("Kobilandi123");
        university1.setTitle("ENU univer");
        universityRepository.save(university);
        universityRepository.save(university1);
    }
}