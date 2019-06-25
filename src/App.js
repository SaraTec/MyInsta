import React, { Component } from 'react'
import Posts from './components/Posts'
import './css/App.css'
import './components/Header'
import Header from './components/Header';
import ModalForLoad from './components/ModalForLoad';
import uuid from 'uuid';
import { DataLoad, DataDelete, DataPost } from './Data';
class App extends Component {
    state = {
        todos: [],
        loadpost: false
    }
    componentDidMount=()=>{
        this.loadAll();       
        //this.addTodo(newData);
    }
    loadAll = async () => {
        let data = await DataLoad();
        data.sort(function (a, b) {
            return new Date(b.createdAt) - new Date(a.createdAt);;
        });
        this.setState({ todos: data });
    }
    delTodo = async (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] })
        await DataDelete(id);
    }
    addTodo = async (propsa) => {
        let newdata = new Date()
        var payload = {
            avatar:
                propsa.avatar,
            createdAt:
            newdata,
            description:
                propsa.description,
            imageUrl:
                propsa.src,
            likes:
                0,
            userName:
                propsa.userName,
            comments: new Array()
        };
        var newData = JSON.stringify(payload);
        try{
        await DataPost(newData); }
        catch(error){alert("Введіть зображення меншого розміру")}
        this.loadAll();
    }
    showMoadmodal =()=>{       
        this.setState({loadpost: !this.state.loadpost});
    }
    render() {
        return (
            <div className="App">
                <div className="conntainer">
                    <Header />
                    {this.state.loadpost ? <ModalForLoad close = {this.showMoadmodal}   addTodo={this.addTodo}/>: null}  
                    {this.state.loadpost ? <ModalForLoad close = {this.showMoadmodal}   addTodo={this.addTodo}/>: null}                  
                    <button onClick={() => this.showMoadmodal()} className="load">
                        <span aria-label="Параметри"></span>
                    </button>
                    <div className="polotno">
                        <Posts todos={this.state.todos} delTodo={this.delTodo} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App