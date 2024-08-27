import React, { useState, useEffect, useRef } from 'react';


const Welcome = ({ mainApp }) => {
    const [display, setDisplay] = useState(false);
    const [answer, setAnswer] = useState("");
    const [countDown, setCountDown] = useState([0,1,2,3]);
    const [displayCountDown, setDisplayCountDown] = useState("");
    const [visible, setVisible] = useState(false);
    const [largeCount, setLargeCount] = useState(false);
    const [timeUp, setTimeUp] = useState(false);
    const intervalRef = useRef(null);
    const [correct, setCorrect] = useState(0)

    const first = (
        <div className="welcome-child">
            <p className="fade-out">Welcome to my portfolio</p>
            <img className="fade-out" src="/sunglasses.png" alt="sunglasses" />
        </div>
    );

    const handleChange = (event) => {
        setAnswer(event.target.value);
    };

    useEffect(() => {
        if (display) {
            intervalRef.current = setInterval(() => {
                setCountDown(prevCountDown => {
                    const newCountDown = [...prevCountDown];
                    const d = newCountDown.pop();
                    setDisplayCountDown(d);
                    if(newCountDown.length === 3) {
                        setLargeCount(true)
                    }
                    if (newCountDown.length === 0) {
                        clearInterval(intervalRef.current);
                        setCorrect(2)
                        setTimeUp(true)
                        setVisible(true)
                        setInterval(() => {
                            mainApp()
                        }, 3000);
                    };
                    return newCountDown;
                });
            }, 1000);

            return () => clearInterval(intervalRef.current); // Clean up interval on component unmount
        }
    }, [display]);

    const second = (
        <div className="welcome-child-two">
            <div className="ontop">
            <p style={{ 'visibility': !largeCount ? "hidden" : "visible"}}>{displayCountDown}</p> 
            </div>
            <div className="small-countdown">
            <p style={{ "visibility": !timeUp && !largeCount ? "visible" : "hidden"}} >{displayCountDown}</p> 
            </div>
            <p>Can you guess this popular tourist destination?</p>
            <input 
                type="text" 
                value={answer}
                onChange={handleChange}
            />
            <div className="child-ofwelcome-child-two">
                <div className="image-correct">
                {/* {!visible ? */}
                <img src="/3sisters.jpg" alt="the three sisters" /> 
                {/* <p style={{ 'visibility': visible ? "visible" : "hidden" }}>{ timeUp ? "Times Up!" : "Correct!" }</p>  */}
                {/* } */}
                </div>
            </div>
        </div>
    );

    useEffect(() => {
        const checkAnswer = () => {
            const correctArray = [
                'blue mountains', 'the blue mountains', 
                'three sisters', '3 sisters', 
                'the three sisters', 'the 3 sisters'
            ];
            if (correctArray.includes(answer.toLowerCase()) && timeUp === false) {
                setInterval(() => {
                    mainApp()
                }, 2000 )
                setVisible(true)
                clearInterval(intervalRef.current)
                setCorrect(1)
            }
        };
        checkAnswer();
    }, [answer]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDisplay(true);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const correctAnswer = (
        <div className="welcome-child-two">
            <p>Well Done!</p>
        </div>
    );

    const timesUp = (
        <div className="welcome-child-two">
            <p>Times up!</p>
        </div>
    );


    return (
        <div className="welcome-parent">
          {correct !== 0 ? correct === 2 ? timesUp : correctAnswer : !display && correct === 0 ? first : second}
        </div>
    );
};

export default Welcome;
