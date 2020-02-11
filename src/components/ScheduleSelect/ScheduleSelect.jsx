import React from "react";
import s from "./ScheduleSelect.module.css";
import FromWhere from "./FromWhere/FromWhere";
import Destination from "./Destination/Destination";

const ScheduleSelect = (props) => {
    return (
        <div className={s.scheduleSelect}>
            <FromWhere/>
            <Destination/>
        </div>
    )
};

export default ScheduleSelect;