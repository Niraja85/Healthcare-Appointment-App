import Card from "./Card";

function Appointment({ patient, date, time }) {
  return (
    <li>
      <Card>
        <h3>{patient}</h3>
        <p>Date: {date}</p>
        <p>Time: {time}</p>

        <button onClick={() => alert("Viewing appointment")}>
          View
        </button>
      </Card>
    </li>
  );
}

export default Appointment;