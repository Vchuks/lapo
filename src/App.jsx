import "./App.css";
import Layout from "./components/Layout";
import { CardDetails, MyMenu } from "./context/MyContext";

function App() {
  return (
    <>
      <MyMenu>
        <CardDetails>
          <Layout />
        </CardDetails>
      </MyMenu>
    </>
  );
}

export default App;
