import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <div className="App-feed">
          <Post />
          <Post />
          <Post />
        </div>
      </header>
    </div>
  );
}

export default App;
