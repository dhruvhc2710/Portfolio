import Typewriter from "./Script";

const App = () => {
  return (
    <div>
      <h1>
        Welcome to <Typewriter text="My React App" delay={100} />
      </h1>
    </div>
  );
};

export default App;