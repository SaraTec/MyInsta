import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Todoitem.css'
export class Todoitem extends Component {

    render() {        
        const { id, title } = this.props.todo;        
        var Class = '';
        if (this.props.todo.completed) Class += 'todoitem_checked';
        else Class += 'todoitem_unchecked'
        return (
            <div className={Class}>
                <p> <input 
                    type="checkbox" 
                    className="checkbox" 
                    onChange={() => this.props.markComplete(id)} 
                />
                {""}
                    {title}
                    <button onClick={() => this.props.delTodo(id)} className='btnStyle'><i class="fas fa-times"></i></button>
                </p>
            </div>
        )
    }
}



export default Todoitem
