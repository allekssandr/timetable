import React from "react";
import s from './NavbarItem.module.css';
import {NavLink} from "react-router-dom";

const NavbarItem = (props) => {
    return (
        <div className={s.NavbarItem}>
            <NavLink to={props.path} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
};

export default NavbarItem;
