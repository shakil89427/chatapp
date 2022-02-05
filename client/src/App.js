import "./App.css";
import useAuth from "./AuthProvider/useAuth";
import Join from "./Components/Join";
import Send from "./Components/Send";

function App() {
  const { show } = useAuth();

  return (
    <div className="App">
      <div className="main-div">{show ? <Send /> : <Join />}</div>
    </div>
  );
}

export default App;
