import React, {Component} from 'react'
import Postitem from './Postitem'

class Posts extends Component {
    render(){
        return this.props.todos.map((todo, key)=>(
            <div key={key}>
                <Postitem  todo={todo} delTodo={this.props.delTodo} />
            </div>
        ));
    }
}

export default Posts