import React from "react";
import s from './StopplaceItem.module.css';

const StopplaceItem = (props) => {
    return(
        <div className={s.StopplaceItem}>
            {props.name}
        </div>
    )
};

export default StopplaceItem;