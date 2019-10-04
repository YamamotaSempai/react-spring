package kz.aa.studentApp.rest;

import kz.aa.studentApp.model.Student;
import kz.aa.studentApp.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

@RestController
public class StudentController {

    @Autowired
    private StudentService studentService;

    @RequestMapping(value = "/getStudents", method = RequestMethod.GET, produces = "application/json")
    public List getStudents() {
        return studentService.findAll();
    }

    @RequestMapping(value = "/deleteStudent/{id}", method = RequestMethod.GET, produces = "application/json")
    public String deleteStudent(@PathVariable Long id, HttpServletResponse response) {
        studentService.deleteById(id);
        response.setStatus(HttpServletResponse.SC_OK);
        return "ok";
    }

    @PostMapping(value = "/saveStudent", consumes = "application/json", produces = "application/json")
    public void createStudent(@RequestBody Student student) {
        Student consilienceStudent;
        if (student.getId() != null) {
            studentService.saveOrUpdate(student);
        } else {
            consilienceStudent = studentService.findByIinLike(student.getIin());
            if (consilienceStudent == null)
                studentService.saveOrUpdate(student);
        }
    }
}
