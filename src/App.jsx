import "./App.css";

function App() {
  return (
    <>
      <p>VITE ENV: {import.meta.env.VITE_ENV}</p>
      <p>SECRET KEY: {import.meta.env.VITE_SECRET_KEY}</p>
    </>
  );
}

export default App;
