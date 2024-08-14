import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card"

export default function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    function buttonClickHandler(event) {
        setTitle("New title");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <div className="expense-item__location">{props.location}</div>
            <button onClick={buttonClickHandler}>Change Title</button>
        </Card>
    );
}

