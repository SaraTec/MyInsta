
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../css/ModalForLoad.css'


class ModalShowMore extends Component {
    state = {
        src: "http://placehold.it/180",
        description: "",
        userName: "scottiks",
        avatar: "https://instagram.fiev11-1.fna.fbcdn.net/vp/549876cbc042095110b1164cbb199d2f/5DBFA20E/t51.2885-19/s150x150/12224270_492808044225665_324893768_a.jpg?_nc_ht=instagram.fiev11-1.fna.fbcdn.net"
    }
    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                </div>
            </div>
        )
    }
}

export default ModalShowMore