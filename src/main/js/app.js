import StudentList from "./components/StudentList/StudentList";

import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom'
import Modal from "./components/Modal/Modal";
import CreatingStudent from "./components/InputData/CreatingStudent";
import FilterComponent from "./components/FilterComponent/FilterComponent";

const App = () => {

    const [students, setStudents] = useState({students: []});
    const [studentsFilter, setStudentsFilter] = useState({students: []});
    const [universityFilter, setUniversityFilter] = useState('');
    const [specialtyFilter, setSpecialtyFilter] = useState('');
    const [isOpen, setOpen] = useState(false);
    const [student, setStudent] = useState({});
    const [specialties, setSpecialties] = useState({specialties: []});
    const [universities, setUniversities] = useState({universities: []});

    function getStudents() {
        fetch('getStudents')
            .then(response => response.json())
            .then(result => {
                setStudents({students: result});
                setStudentsFilter({students: result});
            })
            .catch(e => console.log(e));
    }

    function getSpecialties() {
        fetch('getSpecialties')
            .then(response => response.json())
            .then(result => setSpecialties({specialties: result}))
            .catch(e => console.log(e));
    }

    function getUniversities() {
        fetch('getUniversities')
            .then(response => response.json())
            .then(result => setUniversities({universities: result}))
            .catch(e => console.log(e));
    }

    useEffect(() => {
        getStudents();
        getSpecialties();
        getUniversities();
    }, []);

    const toggleModal = () => {
        setStudent('');
        setOpen(!isOpen);
    };

    const deleteRow = id => {
        fetch('deleteStudent/' + id)
            .then(result => {
                if (result.status === 200)
                    setStudents(prevState => ({
                        students: prevState.students.filter(el => el.id !== id)
                    }));
            })
            .catch(e => console.log(e));
    };

    const editRow = id => {
        students.students.filter(el => el.id === id).map(value => {
            let idUniversity = String(value.university.id);
            let idSpecialty = String(value.specialty.id);
            setStudent({...value, university: idUniversity, specialty: idSpecialty})
        });
        console.log(student);
        setOpen(true);
    };

    function checkOptions() {
        universities.universities.forEach(value => {
            if (value.id === (+student.university)) {
                student.university = value;
                return;
            }
        });

        specialties.specialties.map(value => {
            if (value.id === (+student.specialty)) {
                student.specialty = value;
                return
            }
        });
    }

    const createStudent = () => {
        checkOptions();

        fetch('saveStudent', {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
            .then(result => {
                console.log(result);
                if (result.status === 200) {
                    getStudents();
                    setOpen(false);
                }
            })
            .catch(e => console.log(e));
    };

    const handleChange = e => {
        setStudent({...student, [e.target.name]: e.target.value});
    };

    const filterHandleChangeUniversity = e => {
        setStudents(studentsFilter);
        let value = e.target.value;
        setStudents(prevState => ({
            students: prevState.students.filter(el => el.university.id === (+value))
        }));
        setUniversityFilter(e.target.value);
    };

    const filterHandleChangeSpecialty = e => {
        setStudents(studentsFilter);
        let value = e.target.value;
        setStudents(prevState => ({
            students: prevState.students.filter(el => el.specialty.id === (+value))
        }));
        setSpecialtyFilter(e.target.value);
    };

    const resetFilter = () => {
        getStudents();
    };

    return (
        <div>
            <FilterComponent universities={universities} specialties={specialties} universityFilter={universityFilter}
                             specialtyFilter={specialtyFilter}
                             filterHandleChangeUniversity={filterHandleChangeUniversity}
                             filterHandleChangeSpecialty={filterHandleChangeSpecialty} resetFilter={resetFilter}/>
            <StudentList deleteRow={deleteRow} editRow={editRow} students={students.students}/>
            <button onClick={toggleModal}>
                Создать студента
            </button>

            <Modal universities={universities} specialties={specialties} show={isOpen} model={student}
                   handleChange={handleChange}
                   onClose={toggleModal} createStudent={createStudent}/>
        </div>
    )
};
export {App}

ReactDOM.render(
    <App/>,
    document.getElementById('react')
);