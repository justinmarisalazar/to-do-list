import React, { Component } from 'react'

export class CreateTask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task: ''
        }
    }

    changeHandler = e => {
        this.setState({ task: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.createTask(this.state.task);
        this.setState({ task: '' });
    }
    
    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input
                    type="text"
                    placeholder="Enter task"
                    value={this.state.task}
                    onChange={this.changeHandler}
                    autoFocus
                />
                <button type="submit" className="add">Add Task</button>
            </form>
        )
    }
}

export default CreateTask
