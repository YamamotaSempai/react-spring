package kz.aa.studentApp.rest;

import kz.aa.studentApp.service.SpecialtyService;
import kz.aa.studentApp.service.UniversityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class DictionaryController {

    @Autowired
    private UniversityService universityService;

    @Autowired
    private SpecialtyService specialtyService;

    @RequestMapping(value = "/getUniversities", method = RequestMethod.GET, produces = "application/json")
    public List getUniversities() {
        return universityService.findAll();
    }

    @RequestMapping(value = "/getSpecialties", method = RequestMethod.GET, produces = "application/json")
    public List getSpecialties() {
        return specialtyService.findAll();
    }
}
