import logo from './assets/logo.png'; 
import PersonalList from './components/PersonalList';

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <div className="rgb-glow"></div>
        <img src={logo} alt="React Logo" />
      </div>
      <h1>CV Application</h1>
      <PersonalList />
    </div>
  );
}

export default App;
