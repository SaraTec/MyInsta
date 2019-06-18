import React, {Component} from 'react'
import Todoitem from './Todoitem'
import PropTypes from 'prop-types'

class Todos extends Component {
    render(){
        return this.props.todos.map((todo)=>(
            <h3>
                <Todoitem key={todo.id} todo={todo} delTodo={this.props.delTodo} />
            </h3>
        ));
    }
}

export default Todos