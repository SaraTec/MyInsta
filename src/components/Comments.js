import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'
import '../css/Comments.css'
class Comments extends Component {
    state = {
        comments: [],
        comentator: "scottiks",
        hidden: false
    }
    componentDidUpdate = (prevProps) => {
        if (this.props.comments != prevProps.comments) {
            this.setState({ comments: this.props.comments });
            this.setState({ hidden: this.props.hidden });
        }
    }
    openModal = () =>
    {
        alert("сука")
    }
    render() {
        let max_length;
        if (this.state.hidden == true && this.state.comments.length > 2) {
            max_length = 2;
        }
        else
            max_length = this.state.comments.length;
        let all_comments = this.state.comments.slice(this.state.comments.length-max_length, this.state.comments.length).map((comment) => (
            <CommentItem comment={comment} comentator={this.state.comentator} />
        ));
        return (
            <div className="comments">
                {this.state.hidden == true && this.state.comments.length > 2 ? <button onClick={this.openModal}  className="show_more_comments">Переглянути всі коментарі: {this.state.comments.length}</button> : null}
                {all_comments}
            </div>
        )
    }
}
export default Comments