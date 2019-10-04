import React from 'react';
import CreatingStudent from "../InputData/CreatingStudent";


class Modal extends React.Component {
    render() {
        // Render nothing if the "show" prop is false
        if (!this.props.show) {
            return null;
        }

        return (
            <div className="backdrop" style={{
                position: 'fixed',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: 'rgba(0,0,0,0.3)',
                padding: 50
            }}>
                <div className="modal" style={{
                    backgroundColor: '#fff',
                    borderRadius: 5,
                    maxWidth: 500,
                    minHeight: 300,
                    margin: '0 auto',
                    padding: 30
                }}>
                    <CreatingStudent specialties={this.props.specialties} universities={this.props.universities} model={this.props.model} handleChange={this.props.handleChange} createStudent={this.props.createStudent}/>
                    <div className="footer">
                        <button onClick={this.props.onClose}>
                            Закрыть
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;