import { useState } from "react";
import Header from "./Header";
import Greeting from "./Greeting";
import Appointment from "./Appointment";

function App() {

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Niraja",
      date: "20 April",
      time: "10:00 AM",
    },
    {
      id: 2,
      patient: "Abhishek",
      date: "21 April",
      time: "11:30 AM",
    }
  ]);

  const [selectedPatient, setSelectedPatient] = useState("");

  const totalAppointments = appointments.length;

  function handleView(patientName) {
    setSelectedPatient(patientName);
  }

  return (
    <div>

      <Header />

      <Greeting />

      <h2>Appointments</h2>

      <p
        style={{
          color: totalAppointments > 0
            ? "green"
            : "red"
        }}
      >
        Total appointments: {totalAppointments}
      </p>

      <ul>
        {appointments.map((appt) => (
          <Appointment
            key={appt.id}
            patient={appt.patient}
            date={appt.date}
            time={appt.time}
            onView={handleView}
            isSelected={selectedPatient === appt.patient}
          />
        ))}
      </ul>

    </div>
  );
}

export default App;