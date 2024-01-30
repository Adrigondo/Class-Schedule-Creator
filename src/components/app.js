import React from 'react';

import './app.css'
import ScheduleCreator from './ScheduleCreator/ScheduleCreator';
import TestPlayground from './TestPlayground';
import CourseCard from './CoursesManagement/CoursesList/CourseCard/CourseCard';

// enableMapSet(); // Immer

export default class App extends React.Component {
    render(){
        return(
            <div className="page">
                <div>
                    <TestPlayground></TestPlayground>
                </div>
                <div className="page__content">
                    <ScheduleCreator/>
                </div>
            </div>
        );
    }
}
