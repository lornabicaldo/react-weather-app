import React from "react";

export default function UpdatedDate(props) {
    let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ];
    let day = days[props.date.getDay()];
    let months = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    let month = months[props.date.getMonth()];
    let date = props.date.getDate();
    let year = props.date.getFullYear();
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return (
        <div className="date">
            {day} {date} {month}, {year} {hours}:{minutes}
        </div>
    );
}