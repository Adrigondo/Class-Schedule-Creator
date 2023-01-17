import React from 'react';
import Calendar from './Calendar/Calendar'

import './App.css'

// enableMapSet(); // Immer

export default class App extends React.Component {
    render(){
        return(
            <div className="page">
                <div className="page__content">
                    <Calendar/>
                </div>
            </div>
        );
    }
}
