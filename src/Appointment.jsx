import Card from "./Card";

function Appointment({ patient, date, time, onView }) {
  return (
    <li>
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