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
    componentDidMount() {
        this.loadAll();
        var payload = {
            avatar:
                "https://www.meme-arsenal.com/memes/25ad06e9d81092f0a210667ee88aeadb.jpg",
            createdAt:
                "2019-06-20T10:32:20.218Z",
            description:
                "ВОВА ХУЙ",
            imageUrl:
                "https://www.meme-arsenal.com/memes/25ad06e9d81092f0a210667ee88aeadb.jpg",
            likes:
                1000,
            userName:
                "БАКА"
        };
        var newData = JSON.stringify(payload);
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
    addTodo = async (newData) => {
        await DataPost(newData);
        // this.setState({ todos: [...this.state.todos, newData] });   
        console.log(newData);
        this.loadAll();
    }
    showMoadmodal =()=>{
        console.log(this.state.loadpost);        
        this.setState({loadpost: !this.state.loadpost});
    }
    render() {
        return (
            <div className="App">
                <div className="conntainer">
                    <Header />
                    {this.state.loadpost ? <ModalForLoad close = {this.showMoadmodal}/>: null}
                    <button onClick={() => this.showMoadmodal()} className="load">
                        <span aria-label="Параметри">
                        </span>
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