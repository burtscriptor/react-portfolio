import '../styles/Landing.css'
const Landing = ({ setShow }) => {

    setInterval(() => {
        setShow(true)
    }, 6000);

    return (
        <div className="parent-css">
            <div className="child-css">
                <img src="/GroseValley.jpg"></img>
              
                <div className="spot" >
                </div>
            </div>
        </div>
    );
};

export default Landing;