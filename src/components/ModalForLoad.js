import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/ModalForLoad.css'


class ModalForLoad extends Component {
    state = {
        src: "http://placehold.it/180",
        description: "",
        userName: "scottiks",
        avatar: "https://instagram.fiev11-1.fna.fbcdn.net/vp/549876cbc042095110b1164cbb199d2f/5DBFA20E/t51.2885-19/s150x150/12224270_492808044225665_324893768_a.jpg?_nc_ht=instagram.fiev11-1.fna.fbcdn.net"
    }
    
    reviewIMG = () => {
        var preview = document.getElementById('blah');
        var file = document.querySelector('input[type=file]').files[0];
        var reader = new FileReader();
        reader.onload = () => {

            this.setState({
                src: reader.result
            });

        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
    }

    onChange = (e) => this.setState({ description: e.target.value });
    onClick = () => {
        this.props.addTodo(this.state);
        this.props.close();
    }
    render() {
        return (
            <div id="myModal" class="modal">
                <div className="modal-content">
                    <div className="modal-user" >
                        <img className="user_icon" src={this.state.avatar}></img>
                        <p className="userName">
                            {this.state.userName}
                        </p>
                    </div>
                    <div className="input_form">
                        <input type="file" id="image_uploads" name="image_uploads" onChange={() => this.reviewIMG()} accept=".jpg, .jpeg, .png" multiple></input>
                        <img id="blah" src={this.state.src} alt="your image" />
                        <textarea type="text"
                            className="input_text"
                            name="description"
                            placeholder="Додайте опис..."
                            value={this.state.description}
                            onChange={this.onChange}
                        ></textarea>
                        <button onClick={this.onClick} className = "button5">Опублікувати</button>
                    </div>
                    <span className="close" onClick={this.props.close} >&times;</span>
                </div>
            </div>
        )
    }
}

export default ModalForLoad