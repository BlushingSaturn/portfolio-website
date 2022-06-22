import './App.css';


import NavBar from './components/NavBar';
import Button from './components/Button';

function App() {
  return (
    <div>
      <NavBar activeHome/>
      <div className="landing-screen">
        <div className='info-container'>
          <h1>Summer Burgess</h1>
          <h2>Web Designer and Game Developer</h2>
          <div className="button-container">
            <Button border link='https://google.com' label='Portfolio'/>
            <Button link='https://google.com' label='Contact Me'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
