import React from "react";
import { Link } from "react-router-dom";

const HeaderCont = () => {
    return (
        <header id="header" className="header__wrap">
            <div className="header__inner">
                <h1>
                    <Link to="/">NALL MEOK</Link>
                </h1>

                <div id="hambuger__menu" className="hambuger__menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default HeaderCont;
