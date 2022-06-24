import React from 'react';
import './Home.css';

import placeholder from '../sliderPhotos/placeholder.jpg';
import placeholder2 from '../sliderPhotos/placeholder2.jpg';
import placeholder3 from '../sliderPhotos/placeholder3.jpg';
import placeholder4 from '../sliderPhotos/placeholder4.jpeg';

import NavBar from '../components/NavBar';
import Button from '../components/Button';
import Slider from '../components/Slider';
import Footer from '../components/Footer';


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

function Home() {
    return (
        <div>
            <NavBar activeHome/>
            <div className='landing-screen'>
                <div className='info-container'>
                    <h1>Summer</h1><h1 className='last-name'>Burgess</h1>
                    <h2>Web Designer and Game Developer</h2>
                    <div className='button-container'>
                        <Button border link='/portfolio' label='Portfolio'/>
                        <Button link='/contact' label='Contact Me'/>
                    </div>
                </div>
                <div className='carousel-container'>
                    <Slider slides={ImageData}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}


export default Home;