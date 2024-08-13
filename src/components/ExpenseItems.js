
import "./ExpenseItem.css";

export default function ExpenseItem(prop) {
    return (
        <div className="expense-item">
            <div>{prop.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{prop.title}</h2>
                <div className="expense-item__price">${prop.title}</div>
            </div>
            <div className="expense-item__location">{prop.location}</div>
        </div>
    );
}

