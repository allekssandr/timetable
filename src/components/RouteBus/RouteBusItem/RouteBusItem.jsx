import React from "react";
import s from './RouteBusItem.module.css';

const RouteBusItem = (props) => {
    return(
        <div className={s.RouteBusItem}>
            {props.name}
        </div>
    )
};

export default RouteBusItem;