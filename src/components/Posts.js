import React, {Component} from 'react'
import Postitem from './Postitem'
import PropTypes from 'prop-types'

class Posts extends Component {
    render(){
        return this.props.todos.map((todo)=>(
            <div>
                <Postitem key={todo.id} todo={todo} delTodo={this.props.delTodo} />
            </div>
        ));
    }
}

export default Posts