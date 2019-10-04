package kz.aa.studentApp.model;

import kz.aa.studentApp.model.base.BaseEntity;
import lombok.Data;

import javax.persistence.Entity;

@Data
@Entity
public class University extends BaseEntity {
    private String address;
    private String title;
}
