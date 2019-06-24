import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Postitem.css'
export class Postitem extends Component {
    state = {
        liked: false,
        saved: false
    }
    LikeIt = () =>{
        this.setState({liked: !this.state.liked});
    }
    SaveIt = () =>{
        this.setState({saved: !this.state.saved});
    }
    render() {
        const { id, userName, imageUrl, avatar, likes, description, createdAt } = this.props.todo;
        let ago;
        let now = new Date();
        let was = new Date(createdAt);
        let veriable;
        if ((veriable = (now.getFullYear() - was.getFullYear())) != 0) {
            ago = veriable.toString();
            (ago == "1") ? ago += " рік назад" : ago += " років назад";
        }
        else if ((veriable = (now.getMonth() - was.getMonth())) != 0) {
            ago = veriable.toString();
            (ago == "1") ? ago += " місяць назад" : ago += " місяців назад";
        } else if ((veriable = (now.getDate() - was.getDate())) != 0) {
            ago = veriable.toString();
            ago == '1' ? ago += " день назад" : ago += " днів назад";
        }
        else if ((veriable = (now.getHours() - was.getHours())) != 0) {
            ago = veriable.toString();
            ago == '1' ? ago += " годину назад" : ago += " години назад";
        }
        else if ((veriable = (now.getMinutes() - was.getMinutes())) != 0) {
            ago = veriable.toString();
            ago == '1' ? ago += " хвилину назад" : ago += " хвилини назад";
        }
        else {
            ago = "щойно"
        }

        //Клас для лайку
        let LikeClass;
        switch (this.state.liked) {
            case true: {
                LikeClass = "responsitem1v2"
                break
            }
            case false: {
                LikeClass = "responsitem1v1"
                break
            }
        }
        let SavedClass;
        switch (this.state.saved) {
            case true: {
                SavedClass = "responsitem4v2"
                break
            }
            case false: {
                SavedClass = "responsitem4v1"
                break
            }
        }
        return (

            <div className='post'>
                <div className='post_title'>
                    <div>
                        <img className="user_icon" src={avatar}></img>
                        <p className="userName">
                            {userName}
                        </p>
                    </div>
                    <button onClick={() => this.props.delTodo(id)} className='btnStyle'><i class="fas fa-ellipsis-h"></i></button>
                </div>
                <img className="post_img" src={imageUrl}></img>
                <div className="respons">
                    <button onClick = {this.LikeIt}>
                        <span className={LikeClass}></span>
                    </button>
                    <button>
                        <span className="responsitem2"></span>
                    </button>
                    <button>
                        <span className="responsitem3"></span>
                    </button>
                    <button onClick = {this.SaveIt} style={{ marginLeft: "440px" }}>
                        <span className={SavedClass}></span>
                    </button>
                </div>
                <div className="likes">
                    <p>{likes} вподобань</p>
                </div>
                <div className="description">
                    <p><span style={{ fontWeight: '600' }}>{userName}</span> {description}</p>
                </div>
                <div className="time">
                    <p>{ago}</p>
                </div>
            </div >
        )
    }
}



export default Postitem
