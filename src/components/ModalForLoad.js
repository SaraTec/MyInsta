import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/ModalForLoad.css'

class ModalForLoad extends Component {

    render() {
        return (
            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close" onClick={this.props.close} >&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        )
    }
}

export default ModalForLoad