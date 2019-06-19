import React, { Component } from 'react'
import Todos from './components/Todos'
import './css/App.css'
import './components/Header'
import Header from './components/Header';
import uuid from 'uuid';
import { DataLoad, DataDelete } from './Data';
class App extends Component {
    state = {
        todos: []
    }
    componentDidMount = async () => {
        let data = await DataLoad();
        data.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);;
        });
        this.setState({ todos: data });
    }
    delTodo = async(id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
        await DataDelete(id);
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
        }
    }
    render() {
        return (
            <div className="App">
                <div className="conntainer">
                    <Header />
                    <div className="polotno">
                        <Todos todos={this.state.todos} delTodo={this.delTodo} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App