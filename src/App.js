import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Stopplace from "./components/Stopplace/Stopplace";
import {Route, BrowserRouter} from "react-router-dom";
import Header from './components/Header/Header'
import RouteBus from "./components/RouteBus/RouteBus";
import Footer from "./components/Footer/Footer";
import Title from "./components/Title/Title";

function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path = '/Stopplace' render={()=><Stopplace/>}/>
                    <Route path = '/RouteBus' render={()=><RouteBus/>}/>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
