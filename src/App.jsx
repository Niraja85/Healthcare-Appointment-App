import Header from "./Header";
import Greeting from "./Greeting";
import Appointment from "./Appointment";

function App() {
  return (
    <div>
      <h1>Healthcare App 🚀</h1>
      <Header />
      <Greeting />
      <h2>
        <ul>
          <Appointment
            patient="Niraja"
            date="20th April"
            time="11:00 am"
          />

          <Appointment
            patient="Abhishek Tripathi"
            date="25th April"
            time="12:00 pm"
          />
        </ul>
      </h2>
    </div>
  );
}

export default App;