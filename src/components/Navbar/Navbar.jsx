import React from "react";
import s from './Navbar.module.css';
import NavbarItem from "./NavbarItem/NavbarItem";

const Navbar = (props) => {

    const navList = [
        {id: 1, path: '/Stopplace', name: 'Список остаовок'},
        {id: 2, path: '/RouteBus', name: 'Список маршрутов'}
    ];

    return (
        <div className={s.Navbar}>
            {navList.map(item =>
                <NavbarItem key={item.id} path={item.path} name={item.name}/>)
            }
        </div>
    )
};

export default Navbar;