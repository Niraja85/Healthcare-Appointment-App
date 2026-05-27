import Card from "./Card";
import "./Appointment.css";

function Appointment({ patient, date, time, onView, isSelected }) {
  return (
    <li className={isSelected ? "active" : ""}>
      <Card>
        <h3>{patient}</h3>

        <p>Date: {date}</p>

        <p>Time: {time}</p>

        <button onClick={() => onView(patient)}>
          View
        </button>
      </Card>
    </li>
  );
}

export default Appointment;