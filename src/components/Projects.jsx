import React from 'react';
import crcEx from '../static/images/CRCExample.png';
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

    return (
        <div className='projects-component' id='projects'>
            <h1 className='display-2 mb-5'>Projects</h1>
            <div className="project-examples-container">
                <div className="dummy-example"></div>
                <div className="example mx-auto">
                    <div className="project live-project col-md-11">
                        <a href="https://www.carbonriverconsulting.com/"><img src={crcEx} id='crc-ex' alt="projectExample1" className='mt-2' /></a>
                    </div>
                    <div className="icons">
                        <img src={reactIcon} alt="react icon" height="100px" className='icon mx-auto' />
                    </div>
                </div>
                <div className="example mx-auto">
                    <div className="project col-md-11">
                        <img src={valveFinderEx} id='vf-ex' alt="projectExample2" className='mt-2' />
                    </div>
                    <div className="icons">
                        <img src={pythonIcon} alt="python icon" height="100px" className='icon mx-auto' />
                        <img src={flaskIcon} alt="flask icon" height="100px" className='icon mx-auto' />
                        <img src={mySqlIcon} alt="mysql icon" height="100px" className='icon mx-auto' />
                    </div>
                </div>
                <div className="example mx-auto">
                    <div className="project col-md-11">
                        <img src={tvShowsExample} id='tv-shows-ex' alt="projectExample2" />
                    </div>
                    <div className="icons">
                        <img src={javaIcon} alt="java icon" height="100px" className='icon mx-auto' />
                        <img src={springIcon} alt="spring boot icon" height="100px" className='icon mx-auto' />
                        <img src={mySqlIcon} alt="mysql icon" height="100px" className='icon mx-auto' />
                    </div>
                </div>
                <div className="example mx-auto">
                    <div className="project col-md-11">
                        <img src={ticTacToeEx} id='tic-tac-toe-ex' alt="projectExample3" />
                    </div>
                    <div className="icons">
                        <img src={reactIcon} alt="react icon" height="100px" className='icon mx-auto' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects