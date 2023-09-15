import React from 'react';
import valveFinderEx from '../static/images/Screenshot 2023-09-15 at 10.18.59 AM.png';
import flaskIcon from '../static/images/icons8-flask.svg';
import pythonIcon from '../static/images/icons8-python.svg';
import mySqlIcon from '../static/images/icons8-mysql-100.png';

const Projects = () => {

    return (
        <div className='projects-component' id='projects'>
            <h1 className='p-5'>Projects</h1>
            <div className="example">
                <div className="project">
                    <img src={valveFinderEx} alt="projectExample1" height="400px" />
                </div>
                <div className="icons">
                    <img src={pythonIcon} alt="flask icon" height="100px" className='mx-3'/>
                    <img src={flaskIcon} alt="flask icon" height="100px" className='mx-3'/>
                    <img src={mySqlIcon} alt="flask icon" height="100px" className='mx-3'/>
                </div>
            </div>
        </div>
    )
}

export default Projects