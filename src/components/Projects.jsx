import React from 'react';
import valveFinderEx from '../static/images/valveFinderExample.png';
import tvShowsExample from '../static/images/tvShowsExample.png';
import ticTacToeEx from '../static/images/ticTacToeExample.png';
import flaskIcon from '../static/images/icons8-flask.svg';
import pythonIcon from '../static/images/icons8-python.svg';
import mySqlIcon from '../static/images/icons8-mysql-100.png';
import javaIcon from '../static/images/icons8-java.svg';
import springIcon from '../static/images/icons8-spring-boot.svg';
import reactIcon from '../static/images/icons8-react.svg';

const Projects = () => {

    // const handleScroll = (e) => {
    //     const container = e.target;
    //     const scrollDistance = e.deltaY;
    //     container.scrollTo({
    //         top: 0,
    //         left: container.scrollLeft + scrollDistance,
    //         behavior: 'smooth'
    //     });
    // }

    return (
        <div className='projects-component' id='projects'>
            <h1 className='display-2 p-5'>Projects</h1>
            <div className="project-examples-container">
                <div className="dummy-example mx-5 p-5"></div>
                <div className="example mx-5 p-4">
                    <div className="project">
                        <a href="https://valvefinder.kelsey-bowen.com/"><img src={valveFinderEx} alt="projectExample1" height="400px" /></a>
                    </div>
                    <div className="icons">
                        <img src={pythonIcon} alt="python icon" height="100px" className='mx-3' />
                        <img src={flaskIcon} alt="flask icon" height="100px" className='mx-3' />
                        <img src={mySqlIcon} alt="mysql icon" height="100px" className='mx-3' />
                    </div>
                </div>
                <div className="example mx-5 p-4">
                    <div className="project">
                        <img src={tvShowsExample} alt="projectExample2" height="400px" />
                    </div>
                    <div className="icons">
                        <img src={javaIcon} alt="java icon" height="100px" className='mx-3' />
                        <img src={springIcon} alt="spring boot icon" height="100px" className='mx-3' />
                        <img src={mySqlIcon} alt="mysql icon" height="100px" className='mx-3' />
                    </div>
                </div>
                <div className="example mx-5 p-4">
                    <div className="project">
                        <img src={ticTacToeEx} alt="projectExample3" height="400px" />
                    </div>
                    <div className="icons">
                        <img src={reactIcon} alt="react icon" height="100px" className='mx-3' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects