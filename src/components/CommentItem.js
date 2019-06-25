import React, { Component } from 'react'
import PropTypes from 'prop-types'

class CommentItem extends Component {
    render() {
        return (
            <div className = "CommentItem">
            <p><span  style={{fontWeight: "600"}}>{this.props.comentator}</span> {this.props.comment}</p>
            <span className="comment_like" aria-label="Подобається"></span>
            </div>
        );
    }
}

export default CommentItem