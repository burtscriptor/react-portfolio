import '../styles/ComTwo.css'

const ComTwo = () => {
    return (
        <main className="comTwo">
            <div className="comTwoHeader">
                <h2>Skill development & contribution</h2>
            </div>
            <div className="comTwoContent">
                <div className="comTwoBox first">
                    <h3>Frontend</h3>
                    <p>HTML, CSS, JavaScript</p>
                    <p>Trouble shooting someone elses code</p>
                </div>

                <div className="comTwoBox second">
                    <h3>Version control</h3>
                    <p>Using GitHub issues system</p>
                    <p>Branching, merging, pushing, pull requests</p>
                </div>

                <div className="comTwoBox third">
                    <h3>Backend</h3>
                    <p>Improving CI/CD using github actions</p>
                    <p>Editing .YML files</p>
                </div>


            </div>
        </main>
    );
};

export default ComTwo;