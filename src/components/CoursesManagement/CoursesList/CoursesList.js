import produce from "immer";
import React from "react";
import CourseRow from "./CourseRow/CourseRow";
import CoursesListAddCourseButton from "./CourseRow/CoursesListAddCourseButton";

import "./CoursesList.css";
import { useCurrentState, useSchedule, useScheduleDispatch } from "../../ScheduleCreator/ScheduleCreator";

const CoursesList=()=>{
    const scheduleDispatch = useScheduleDispatch();
    const { courses } = useCurrentState();
    
    const onAddCourse = () => {
        scheduleDispatch({
            task: 'addCourse',
        });
    }
    
    return (
        <div className="courses-list">
            { RenderRows(courses) }
            <CoursesListAddCourseButton
                onClick={()=>onAddCourse()}
            />
        </div>
    );
}
const RenderRows = (courses) => {
    const scheduleDispatch = useScheduleDispatch();
    const onCourseChangeOutHistory = (index,field,value) => {
        scheduleDispatch({
            task: 'courseChangeOutHistory',
            index: index,
            field: field,
            value: value,
        });
    }
    const onCourseChange = (index,field,value) => {
        scheduleDispatch({
            task: 'courseChange',
            index: index,
            field: field,
            value: value,
        });
    }
    const onRemoveCourse = (index) => {
        scheduleDispatch({
            task: 'removeCourse',
            index: index,
        });
    }
    
    const rows=courses.map((row,index)=>{
        return <CourseRow
            {...row}
            key={index}
            onCourseChangeOutHistory={(field,value)=>onCourseChangeOutHistory(index,field,value)}
            onCourseChange={(field,value)=>onCourseChange(index,field,value)}
            onRemoveCourse={()=>onRemoveCourse(index)}
        />
    })
    return rows;
}
export default CoursesList;