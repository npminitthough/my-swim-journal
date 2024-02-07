import "./App.css";
import entries from "./data/entries.json";
import Entry from "./components/Entry/Entry";

function App() {
  return (
    <>
      <div>
        <h1 style={{ color: "darkorange", fontFamily: "Arial" }}>
          Learning how to swim
        </h1>
        {entries.map((entry) => {
          return <Entry {...entry} />;
        })}
      </div>
    </>
  );
}

export default App;
