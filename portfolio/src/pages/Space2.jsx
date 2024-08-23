import '../styles/SpaceTwo.css'

const SpaceTwo = () => {
    return (
        <main className="spaceTwo">
            <div className="spaceTwoHeader">
                <h2>Learning opportunities</h2>
            </div>
            <div className="spaceTwoContent">
                <div className="spaceTwoBox first">
                    <h3>Frontend</h3>
                    <p> Intreprating documentation on google-react-maps and setting up APIkeys on Google Cloud Console</p>
                    <p> Handling errors and data loading using multiple booleans to decide elements to be rendered</p>
                </div>

                <div className="spaceTwoBox second">
                    <h3>Backend</h3>
                    <p>Tried to deploy on Heroku but ran into a "Mixed content" error - this is a secruity issue</p>
                    <p>Because the openNotify API uses HTTP and Heroku uses HTTPS</p>
                </div>

                <div className="spaceTwoBox third">
                    <h3>Fullstack</h3>
                    <p>To solve this wrote a proxy server to make the API call and serve the data to the front-end</p>
                    <p>This maintained a secure connection throughout the request response cycle and a work around "Mixed content" error</p>
                </div>


            </div>
        </main>
    );
};

export default SpaceTwo;