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

    return (
        <div className='projects-component' id='projects'>
            <h1 className='display-2'>Projects</h1>
            <p className='about-text mb-5'>All projects deployed with Docker, Kubernetes and Azure</p>
            <div className="project-examples-container">
                <div className="dummy-example"></div>
                <div className="example mx-auto">
                    <div className="project col-md-11">
                        <a href="https://valvefinder.kelsey-bowen.com/"><img src={valveFinderEx} id='vf-ex' alt="projectExample1" className='mt-2' /></a>
                    </div>
                    <div className="icons">
                        <img src={pythonIcon} alt="python icon" height="100px" className='icon mx-auto' />
                        <img src={flaskIcon} alt="flask icon" height="100px" className='icon mx-auto' />
                        <img src={mySqlIcon} alt="mysql icon" height="100px" className='icon mx-auto' />
                    </div>
                </div>
                <div className="example mx-auto">
                    <div className="project col-md-11">
                        <a href="http://tvshows.kelsey-bowen.com/"><img src={tvShowsExample} id='tv-shows-ex' alt="projectExample2" /></a>
                    </div>
                    <div className="icons">
                        <img src={javaIcon} alt="java icon" height="100px" className='icon mx-auto' />
                        <img src={springIcon} alt="spring boot icon" height="100px" className='icon mx-auto' />
                        <img src={mySqlIcon} alt="mysql icon" height="100px" className='icon mx-auto' />
                    </div>
                </div>
                <div className="example mx-auto">
                    <div className="project col-md-11">
                        <a href="http://tic-tac-toe.kelsey-bowen.com/"><img src={ticTacToeEx} id='tic-tac-toe-ex' alt="projectExample3" /></a>
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