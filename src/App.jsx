import Header from "./Header";
import Greeting from "./Greeting";
import Appointment from "./Appointment";

function App() {

  function handleView(patientName) {
    console.log("Viewing appointment for", patientName);
  }

  return (
    <div>
      <Header />
      <Greeting />

      <h2>Appointments</h2>

      <ul>
        <Appointment
          patient="Niraja"
          date="20 April"
          time="10:00 AM"
          onView={handleView}
        />

        <Appointment
          patient="Abhishek"
          date="21 April"
          time="11:30 AM"
          onView={handleView}
        />
      </ul>
    </div>
  );
}

export default App;