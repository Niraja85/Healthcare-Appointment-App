function Appointment ({patient, date, time}) {
    return (
        <li>
            <h3>{patient}</h3>
            <p>{date}</p>
            <p>{time}</p>
        </li>
    );
}

export default Appointment;