import React, { Component } from "react";

class TaskForm extends Component {
    state = {
        newTask:''
    }

    handleChange = event => {
        this.setState({ newTask:event.currentTarget.value });
    }

    addNewTask = event => {
        event.preventDefault();
    
        const id = '_' + Math.random().toString(36).substr(2, 9);
        const nom = this.state.newTask;
        
        this.props.onTaskAdd({ id, nom });

        this.setState({ newTask:'' })
      }

    render(){    
        return(
            <form onSubmit={this.addNewTask}>
                <input placeholder="Ajouter une tâche" value={this.state.newTask} onChange={this.handleChange} />
                <button>Ajouter</button>
            </form>
        );
    }
}

export default TaskForm;