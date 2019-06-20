import React, {Component} from 'react'
import Postitem from './Postitem'
import PropTypes from 'prop-types'

class Posts extends Component {
    render(){
        return this.props.todos.map((todo)=>(
            <h3>
                <Postitem key={todo.id} todo={todo} delTodo={this.props.delTodo} />
            </h3>
        ));
    }
}

export default Posts