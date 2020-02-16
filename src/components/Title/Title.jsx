import React from "react";
import s from "./Title.module.css";

const Title = (props) => {
    return (
        <div className={s.Title}>
            <h3>
                    {props.name}
            </h3>
        </div>
    )
};

export default Title;