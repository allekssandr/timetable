import React from 'react';
import './App.css';
import ScheduleSelect from "./components/ScheduleSelect/ScheduleSelect";
import ScheduleView from "./components/ScheduleView/ScheduleView";

function App() {
    return (
        <div className="App">
            <ScheduleSelect/>
            <ScheduleView/>
        </div>
    );
}

export default App;
