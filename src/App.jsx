import "./App.css";
import Layout from "./components/Layout";
import { MyMenu } from "./context/MyContext";

function App() {
  return (
    <>
      <MyMenu>
        <Layout />
      </MyMenu>
    </>
  );
}

export default App;
