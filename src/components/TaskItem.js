import React, { Component } from 'react'

export class TaskItem extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task: this.props.taskItem.task,
             isEditing: false
        }
    }
    
    deleteHandler = () => {
        this.setState({ task: this.props.mainTasks[this.props.id + 1]
            ? this.props.mainTasks[this.props.id + 1].task
            : null});
        this.props.deleteTask(this.props.id);
    }

    changeHandler = e => {
        this.setState({ task: e.target.value });
    }

    setEditingState = isEditing => {
        this.setState({ isEditing: isEditing});
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.editTask(this.props.id, this.state.task);
        this.setEditingState(false);
    }

    toggleHandler = () => {
        this.props.toggleTask(this.props.id);
    }

    render() {
        return (
            <tr>
                {this.state.isEditing ? (
                    <>
                        <td>
                            <form onSubmit={this.submitHandler}>
                                <input value={this.state.task} onChange={this.changeHandler} autoFocus />
                            </form>
                        </td>
                        <td>
                            <button onClick={this.submitHandler} className="save">Save</button>
                            <button onClick={() => this.setEditingState(false)} className="back">Back</button>
                        </td>
                    </>
                ) : (
                    <>
                        <td onClick={this.toggleHandler} className="task">
                            <input type="checkbox" checked={this.props.taskItem.isCompleted} readOnly />
                            <span className={this.props.taskItem.isCompleted ? "done" : null}>
                                {this.props.taskItem.task}
                            </span>
                        </td>
                        <td>
                            <button onClick={() => this.setEditingState(true)} className="edit">Edit</button>
                            <button onClick={this.deleteHandler} className="delete">Delete</button>
                        </td>
                    </>
                )}
            </tr>
        )
    }
}

export default TaskItem
