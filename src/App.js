import React, { Component } from 'react'
import Todos from './components/Todos'
import './css/App.css'
import './components/Header'
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
class App extends Component {
    state = {
        todos: []
    }
    markComplete = (id) => {

        let todo_state = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo;
        })
        this.setState(
            {
                todos: todo_state
            });
    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })

    }
    addTodo = (title) => {
        if (title !== "") {
            const newTodo = {
                id: uuid.v4(),
                title: title,
                completed: false
            }
            this.setState({ todos: [...this.state.todos, newTodo] });
        }
        else {
            alert("Заповніть поле")
        }
    }
    render() {
        return (

            <div className="App">
                <div className="conntainer">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
                </div>
            </div>
        );
    }
}

export default App