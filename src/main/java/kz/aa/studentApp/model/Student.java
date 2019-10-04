package kz.aa.studentApp.model;

import kz.aa.studentApp.model.base.BaseEntity;
import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Data
@Entity
public class Student extends BaseEntity {
    private String surname;
    private String firstName;
    private String lastName;
    private String iin;
    private String languageStudy;

    @ManyToOne
    @JoinColumn(name = "specialty_id")
    private Specialty specialty;

    @ManyToOne
    @JoinColumn(name = "university_id")
    private University university;
}
