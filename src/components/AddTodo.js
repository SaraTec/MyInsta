import React, { Component } from 'react'
import '../css/Input.css'
export class AddTodo extends Component {
    state = {
        title: ""
    }

    onSubmit = (e)=> {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ""
        });
    }

    onChange =(e)=>this.setState({title:e.target.value});
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                    className="input_text"
                    name="title"
                    placeholder="Додавте подію..."
                    value = {this.state.title}
                    onChange={this.onChange}
                >
                </input>
                <button type="submit" className="btn">Submit</button>
            </form>
        )
    }
}

export default AddTodo
