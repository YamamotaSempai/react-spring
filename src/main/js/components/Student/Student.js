import * as React from "react";

class Student extends React.Component{

    render() {
        const handleDeleteUser = id => {
            let answer = window.confirm('Вы уверены?');

            if (answer) {
                this.props.deleteRow(id);
            }
        };

        return (
            <tr>
                <td>{this.props.student.lastName}</td>
                <td>{this.props.student.firstName}</td>
                <td>{this.props.student.surname}</td>
                <td>{this.props.student.iin}</td>
                <td><button onClick={() => handleDeleteUser(this.props.student.id)}>Удалить</button></td>
                <td><button onClick={() => this.props.editRow(this.props.student.id)}>Редактировать</button></td>
            </tr>
        )
    }
}

export default Student;