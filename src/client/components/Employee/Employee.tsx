import React from 'react';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name || '',
            role: props.role || ''
        };
    }

    render() {
        return (
            <div className="employee">
                <h3>{this.state.name}</h3>
                <p>Role: {this.state.role}</p>
            </div>
        );
    }
}

export default Employee;