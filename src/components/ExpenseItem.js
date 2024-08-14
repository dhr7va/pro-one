// Write your code here
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Card"

export default function ExpenseItem(props) {
    function buttonClickHandler(event) {
        console.log("Button Clicked!");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <div className="expense-item__location">{props.location}</div>
            <button onClick={buttonClickHandler}>Change Title</button>
        </Card>
    );
}

