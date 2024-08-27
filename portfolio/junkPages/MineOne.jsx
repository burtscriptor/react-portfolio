import React, {useEffect, useState } from 'react';
import '../styles/MineOne.css';
import icon1 from '../assets/icons/github.png';
import icon2 from '../assets/icons/play-button.png';
import image1 from '../assets/minesweeper/gameBoard.png';

const MineOne = () => {
    const [tiles, setTiles] = useState([]);
    const [mine, setMine] = useState(false);
    const [animate, setAnimate] = useState(false);

    
    const handleClick = () => {
    setAnimate(true);
    setTimeout(() => {
        setMine(true);
        },1000);
    };

    const generateTiles = () =>{
    const tileArray = [];
            for(let i= 0; i < 45; i++) {
               if(i !== 22) {
                tileArray.push(<div className={`tile ${animate ? 'animate' : '' } `} key={i}></div>)
               } else {
                tileArray.push(<div className={`tile trigger ${animate ? 'animate' : '' } `} onClick={()=> handleClick()}></div> )
               }
            };
            setTiles([tileArray])
    };

    useEffect(()=>{
        generateTiles()
    }, [animate]);
    

    return (
        <>
           { !mine ? ( <main className="mine-parent"><div className="minefield"> {tiles} </div> </main>) : ( <>
            <main className="spaceOne mine-one">

                <div className="spaceOneContent for-mine">
                    <div className="spaceOneImageItem">
                        <img src={image1} alt="main screen"/>
                    </div>

                    <div className="spaceOneTextItem">

                        <div className="proHeader">
                            <h3>Minesweeper</h3>
                            <a href="https://github.com/burtscriptor/project1-minesweeper" target="_blank" rel="noopener noreferrer">
                            <img src={icon1} alt="Github icon" />
                            </a>
                            <a href="https://burtscriptor.github.io/project1-minesweeper/" target="_blank" rel="noopener noreferrer">
                            <img src={icon2} alt="Go to demo" />
                            </a>
                        </div>
                        <div className="spaceText">
                        <p>
         Problem solving and applicaton structure achieved by breaking the user jounrey 
         into sections: 
         global variables, event listeners, event handlers and functions.</p>
              
              </div>

              <div className="space-tabs">
                <p className="darkblue">HTML</p>
                <p className="blue">CSS</p>
                <p className="lblue">JavaScript</p>
                <p className="white">DOM</p>
           
              </div>

                    </div>
                </div>


            
        </main>
            </> )
                }
       </>
    );
};

export default MineOne;

//
// have a function inside useeffect that returns the same number as divs as the grid template
// and have a counter that adds a class number that relates to a different animation 
// have the middle div a spaecial id that gives it a different animation 
// that indicates to the user that this tile needs to be clicked
// sets someting to true that triggers the animation
// if such and such true then render tiles else render mine header etc