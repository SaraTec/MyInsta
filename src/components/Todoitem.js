import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/Todoitem.css'
export class Todoitem extends Component {

    render() {
        const { id, userName, imageUrl, avatar, likes, description,createdAt} = this.props.todo;
        let ago;
        let now = new Date();
        let was = new Date(createdAt);
        let veriable;
        if( (veriable =(now.getMonth()-was.getMonth()))!=0){
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
                        <span class="responsitem1"></span>
                    </button>
                    <button>
                        <span class="responsitem2"></span>
                    </button>
                    <button>
                        <span class="responsitem3"></span>
                    </button>
                    <button style = {{marginLeft: "440px"}}>
                        <span   class="responsitem4"></span>
                    </button>
                </div>
                <div class="likes">
                    <p>{likes} вподобань</p>
                </div>
                <div class="description">
                    <p><span style = {{fontWeight : '600'}}>{userName}</span> {description}</p>
                </div>
                <div class="time">
                    <p>{ago}</p>
                </div>
            </div >
        )
    }
}



export default Todoitem
