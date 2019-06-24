import React from 'react'
import '../css/Header.css'
function Header() {
    return (
        <header>
            <div className="main_header">
                <div className="part1">
                    <span className="icon" aria-label="Instagram">
                    </span>
                    <div className="SvO5t">
                    </div>
                    <div className="cq2ai">
                        <span className="intagram" aria-label="Instagram">
                        </span>
                    </div>
                </div>
                <div className="part2">
                    <span className="lupa">
                    </span><span className="TqC_a">Пошук</span>
                </div>
                <div className="part3">
                    <div>
                        <span className="item1"></span>
                        <span className="item2"></span>
                        <span className="item3"></span>
                    </div>
                </div>
            </div>
        </header>
    )
}

window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {     
        document.getElementsByClassName("main_header")[0].style.padding = "0px 20px 0px 20px";
        document.getElementsByClassName("main_header")[0].style.height = "51px";
        document.getElementsByClassName("SvO5t")[0].style.display = "none";
        document.getElementsByClassName("cq2ai")[0].style.display = "none";
    } else {
        document.getElementsByClassName("main_header")[0].style.padding = "26px 20px 26px 20px"
        document.getElementsByClassName("main_header")[0].style.height = "76px";
        document.getElementsByClassName("SvO5t")[0].style.display = "block";
        document.getElementsByClassName("cq2ai")[0].style.display = "block";
    }
}

export default Header;
