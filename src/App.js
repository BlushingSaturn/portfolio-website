import './App.css';

import placeholder from './sliderPhotos/placeholder.jpg'
import placeholder2 from './sliderPhotos/placeholder2.jpg'
import placeholder3 from './sliderPhotos/placeholder3.jpg'
import placeholder4 from './sliderPhotos/placeholder4.jpeg'

import NavBar from './components/NavBar';
import Button from './components/Button';
import Slider from './components/Slider';

const ImageData = [
  {
    image:
      placeholder,
  },
  {
    image:
      placeholder2,
  },
  {
    image:
      placeholder3,
  },
  {
    image:
      placeholder4,
  },
];

function App() {
  return (
    <div>
      <NavBar activeHome/>
      <div className="landing-screen">
        <div className='info-container'>
          <h1>Summer</h1><h1 className="last-name">Burgess</h1>
          <h2>Web Designer and Game Developer</h2>
          <div className="button-container">
            <Button border link='https://google.com' label='Portfolio'/>
            <Button link='https://google.com' label='Contact Me'/>
          </div>
        </div>
        <div className='carousel-container'>
          <Slider slides={ImageData} autoPlay={2}/>
        </div>
      </div>
    </div>
  );
}

export default App;
