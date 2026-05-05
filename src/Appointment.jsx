function Appointment ({patient, date, time}) {
    return (
        <li style={{ marginBottom: "10px" }}>
            <h3>{patient}</h3>
            <p>{date}</p>
            <p>{time}</p>

            <button onClick={() => alert("Viewing Appointment")}>View</button>
        </li>
    );
}

export default Appointment;