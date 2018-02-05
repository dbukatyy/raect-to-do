import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import Task from './components/Task';
import tasks from './task';
import Form from './components/Form';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: tasks
    };

    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.nextId = this.nextId.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleStatusChange(id) {
    let tasks = this.state.tasks.map( task => {

      if (task.id === id) {
        task.completed = !task.completed;
      }

      return task;
    });

    this.setState({
      tasks
    })
  }

  deleteTask(id) {
    let tasks = this.state.tasks.filter( task => task.id !== id);

    this.setState({
      tasks
    })
  }

  addTask(title) {
      let task = {
        title,
        id: this.nextId(),
        completed: false
      };

      let tasks = [...this.state.tasks, task];

      this.setState({tasks});
  }

  nextId() {
    this._nextId = this._nextId || 4;
    return this._nextId++;
  }

  handleEdit(id, title) {
    let tasks = this.state.tasks.map((task) => {
      if (task.id === id) {
        task.title = title;
      }

      return task
    })

    this.setState({ tasks });
  }

  render() {
    return (
      <main>

        <Title title='список задач' task={this.state.tasks}/>

        
        <section className="task-list">
          {this.state.tasks.map((task) => 
            <Task 
              key={task.id} 
              id={task.id} 
              task={task.title} 
              completed={task.completed}
              onDeleteTask={this.deleteTask}
              onStatusChange={this.handleStatusChange}
              onEdit={this.handleEdit}/>)
          }
        </section>
        
        <Form onAdd={this.addTask}/>

      </main>
    );
  }
}


export default App;
