import React, { Component } from 'react'
import Todos from './components/Todos'
import './css/App.css'
import './components/Header'
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import DataLoad from './Data';
class App extends Component {
    state = {
        todos: []
    }
    componentDidMount = async () => {
        let data = await DataLoad();
        console.log(data);
        this.setState({ todos: data });
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

            /*fetch('https://5b27755162e42b0014915662.mockapi.io/api/v1/posts').then(promise => { return promise.json(); })
                .then(json => {
                    data = json;
                    console.log(json);
                })*/
        }
    }
    render() {
        return (

            <div className="App">
                <div className="conntainer">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos todos={this.state.todos} delTodo={this.delTodo} />
                </div>
            </div>
        );
    }
}

export default App