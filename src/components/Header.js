import React from 'react'
import '../css/Header.css'
function Header() {
    return (
        <header>
            <div class="main_header">
                <div class="part1">
                    <span class="icon" aria-label="Instagram">
                    </span>
                    <div class="SvO5t">
                    </div>
                    <div class="cq2ai">
                        <span class="intagram" aria-label="Instagram">
                        </span>
                    </div>
                </div>
                <div class="part2">
                    <span class="lupa">
                    </span><span class="TqC_a">Пошук</span>
                </div>
                <div class="part3">
                    <div>
                        <span class="item1"></span>
                        <span class="item2"></span>
                        <span class="item3"></span>
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
