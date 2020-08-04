import React from 'react';
import ReactDOM from 'react-dom';
import Tasks from './Tasks';
import TaskForm from './TaskForm';

class App extends React.Component {
  state = {
    tasks:[
      {id:1, nom:'Ranger sa chambre'},
      {id:2, nom:'Faire des courses'}
    ],
  }

  handleAdd = task => {
    const tasks = [...this.state.tasks];
    tasks.push(task);

    this.setState({ tasks })
  }

  handleDelete = id =>{
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex((client) => client.id === id);
    tasks.splice(index,1);

    this.setState({tasks:tasks})
  }

  render(){
    return (
      <div className="App">
       <h1>Liste de tâches</h1>
       <ul>
         { this.state.tasks.map((task) => <Tasks detailsTask={task} deleteTask={this.handleDelete} key={task.id}/>)}
       </ul>
        <TaskForm onTaskAdd={this.handleAdd}/>
      </div>
    );
  }
}

ReactDOM.render(<App/> ,document.getElementById('root'));