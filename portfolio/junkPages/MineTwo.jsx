import React, {useState, useEffect} from 'react';
import '../styles/MineTwo.css'
import image1 from '../assets/minesweeper/recussion.png';
import image4 from '../assets/minesweeper/currentTile.png';
import image2 from '../assets/minesweeper/makeField.png';
import image3 from '../assets/minesweeper/initField.png';
import image5 from '../assets/minesweeper/won.png';

const imageArray = [ image1, image2, image3, image4, image5 ];


const MineTwo = () => {
    const [index, setIndex] = useState(0);


    const switchImage =() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % imageArray.length);
        }, 3000);
        return()=> clearInterval(timer);
    }

    useEffect(() => {
        switchImage();
    }, []);



    return (
        <main className="mineTwo">
            <div className="mineTwoHeader">
                <h2>Learninng opportunities</h2>
            </div>
            <div className="mineTwoContent">
                <div className="mineTwoBox firstColor border">
                    
                    <p> Code hygiene and dry coding</p>
                    <p> Loops to create multiple
                    DOM elements and attach event listeners</p>
                    <p>Fundermentals of 
                    DOM manipulation and responding to user events</p>
                </div>

                <div className="mineTwoBox thirdColor border">
                    <p>Recursion</p>
                    <p>Using the spread operator</p>
                    <p>HTML, CSS and JavaScript</p>
                </div>

                <div className="mineTwoBox secondColor">
                   <img src={imageArray[index]} />
                </div>

                


            </div>
        </main>
    );
};

export default MineTwo;