import React from "react";
import Select from 'react-select'
import s from "./FromWhere.module.css";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const FromWhere  = (props) => {
    return (
        <div className={s.fromWhere}>
            <Select options={options} />
        </div>
    )
};

export default FromWhere;