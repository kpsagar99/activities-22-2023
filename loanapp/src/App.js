import logo from "./logo.svg";
import "./App.css";
import { Ribbon } from "./components/Ribbon";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";

function App() {
  return (
    <div>
      <Ribbon />
      <Registration />
    </div>
  );
}

export default App;
