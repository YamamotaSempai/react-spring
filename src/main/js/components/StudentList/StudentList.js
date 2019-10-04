import * as React from "react";
import Student from "../Student/Student";

class StudentList extends React.Component {

    render() {
        return (
            <table>
                <tbody>
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>ИИН</th>
                    <th>Опции</th>
                </tr>
                {this.props.students.length > 0 ? (
                    this.props.students.map(student => {
                        return (
                            <Student key={student.id} editRow={this.props.editRow} deleteRow={this.props.deleteRow} student={student}/>
                        )
                    })
                ) : (
                    <tr>
                        <td colSpan={5}>Нет студентов</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }
}

export default StudentList;