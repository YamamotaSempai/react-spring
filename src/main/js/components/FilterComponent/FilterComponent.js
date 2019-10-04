import React from 'react';

class FilterComponent extends React.Component {
    render() {
        return (
            <div>
                <label>
                    ВУЗ
                    <select name="university" value={this.props.universityFilter} onChange={this.props.filterHandleChangeUniversity}>
                        {this.props.universities.universities.map((value, index) =>
                            <option key={value.id} value={value.id}>{value.title}</option>
                        )}
                    </select>
                </label>
                <label>
                    Специальность
                    <select name="specialty" value={this.props.specialtyFilter} onChange={this.props.filterHandleChangeSpecialty}>
                        {this.props.specialties.specialties.map((value, index) =>
                            <option key={value.id} value={value.id}>{value.title}</option>
                        )}
                    </select>
                </label>
                <button onClick={this.props.resetFilter}>Сбросить</button>
            </div>
        )
    }
}

export default FilterComponent;