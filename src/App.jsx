import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>Welcome to this magical app made by me</h1>

      <div className="row">
        <img
          src="/luffy.webp"
          className="logo vite"
          alt="luffy"
          style={{ width: 500, height: 400 }}
        />
      </div>

      <form
        className="row"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <button type="submit">
          {" "}
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
            Click to see magic
          </a>{" "}
        </button>
      </form>
    </div>
  );
}

export default App;
