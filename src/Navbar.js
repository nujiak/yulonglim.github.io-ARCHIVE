import React from "react";  

export default function Navbar() {
    return (
        <nav>
            <h2 className="nav--header">Lim Yu Long</h2>
            <div className="links">
            <a className= "nav--linkedIn" href="https://www.linkedin.com/in/yulong-lim/" target={"_blank"}>LinkedIn</a>
            <a className= "nav--github" href="https://github.com/yulonglim" target={"_blank"}>Github</a>
            </div>
        </nav>
    )
}