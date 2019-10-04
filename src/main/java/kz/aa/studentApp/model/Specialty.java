package kz.aa.studentApp.model;

import kz.aa.studentApp.model.base.BaseEntity;
import lombok.Data;

import javax.persistence.Entity;

@Entity
@Data
public class Specialty extends BaseEntity {
    private String title;
    private String code;
}
