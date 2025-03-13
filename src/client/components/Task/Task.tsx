class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.task.title || '',
            description: props.task.description || '',
            assignedEmployee: props.task.assignedEmployee || '',
            dueDate: props.task.dueDate || '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        // Logic to handle task submission
    };

    render() {
        return (
            <div className="task">
                <h3>{this.state.title}</h3>
                <p>{this.state.description}</p>
                <p>Assigned to: {this.state.assignedEmployee}</p>
                <p>Due Date: {this.state.dueDate}</p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="Task Title"
                    />
                    <textarea
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Task Description"
                    />
                    <input
                        type="text"
                        name="assignedEmployee"
                        value={this.state.assignedEmployee}
                        onChange={this.handleChange}
                        placeholder="Assigned Employee"
                    />
                    <input
                        type="date"
                        name="dueDate"
                        value={this.state.dueDate}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Save Task</button>
                </form>
            </div>
        );
    }
}

export default Task;