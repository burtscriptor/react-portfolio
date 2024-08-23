import React, {useEffect, useState } from 'react';
import '../styles/MineOne.css';

const MineOne = () => {
    const [tiles, setTiles] = useState([]);
    const [mine, setMine] = useState(false);
    const [animate, setAnimate] = useState(false);

    
    const handleClick = () => {
    setAnimate(true);
 
    };




    

    const generateTiles = () =>{
    const tileArray = [];
            for(let i= 0; i < 15; i++) {
               if(i !== 7) {
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
        <main className="mine">
           { !mine ? tiles : ( <>
            <div className="mineHeader">
                <h2>MineSweeper</h2>
            </div>

            <div className="mineContent">
                <div className="mineTextItem">

                </div>

                <div className="mineImageItem">

                </div>
            </div>
            </> )
                }
        </main>
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