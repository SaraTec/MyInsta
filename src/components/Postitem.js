import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Postitem.css'
export class Postitem extends Component {

    render() {
        const { id, userName, imageUrl, avatar, likes, description,createdAt} = this.props.todo;
        let ago;
        let now = new Date();
        let was = new Date(createdAt);
        let veriable;
        if( (veriable =(now.getFullYear()-was.getFullYear()))!=0){
            ago = veriable.toString();  
            (ago == "1") ? ago+=" рік назад":ago+=" років назад";          
        }
        else if( (veriable =(now.getMonth()-was.getMonth()))!=0){
            ago = veriable.toString();  
            (ago == "1") ? ago+=" місяць назад":ago+=" місяців назад";          
        }else if((veriable =(now.getDay()-was.getDay()))!=0){
            ago = veriable.toString();
            ago == '1' ? ago+=" день назад":ago+=" днів назад";
        }
        else if((veriable =(now.getHours()-was.getHours()))!=0){
            ago = veriable.toString();
            ago == '1' ? ago+=" годину назад":ago+=" години назад";
        }
        else if((veriable =(now.getMinutes()-was.getMinutes()))!=0){
            ago = veriable.toString();
            ago == '1' ? ago+=" хвилину назад":ago+=" хвилини назад";
        }
        else {
            ago = "щойно"
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
                <div class="respons">
                    <button>
                        <span className="responsitem1"></span>
                    </button>
                    <button>
                        <span className="responsitem2"></span>
                    </button>
                    <button>
                        <span className="responsitem3"></span>
                    </button>
                    <button style = {{marginLeft: "440px"}}>
                        <span   className="responsitem4"></span>
                    </button>
                </div>
                <div className="likes">
                    <p>{likes} вподобань</p>
                </div>
                <div className="description">
                    <p><span style = {{fontWeight : '600'}}>{userName}</span> {description}</p>
                </div>
                <div className="time">
                    <p>{ago}</p>
                </div>
            </div >
        )
    }
}



export default Postitem
