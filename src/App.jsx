import { useState } from "react";
import Header from "./Header";
import Greeting from "./Greeting";
import Appointment from "./Appointment";

function App() {
  const [ appointments, setAppointments] = useState([
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
  const totalAppointments = appointments.length;

  function handleView(patientName) {
    console.log("Viewing appointment for", patientName);
  }

  return (
    <div>
      <Header />
      <Greeting />

      <h2>Appointments</h2>
      <p>Total appointments: {totalAppointments}</p>

      <ul>
        {appointments.map((appt) => (
          <Appointment
            key={appt.id}
            patient={appt.patient}
            date={appt.date}
            time={appt.time}
            onView={handleView}
          />
        )
      )}
      </ul>
    </div>
  );
}

export default App;