import React from 'react'

const Skills = () => {

    return (
        <div className='skills-component' id='skills'>
            <h1>Skills</h1>
            <div className="mt-4 grid">
                <div className="row">
                    <div className='col m-2'>
                        <button className='btn disabled skill'>Python</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>Javascript</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>React</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>Java</button>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-2'>
                        <button className='btn disabled skill'>Flask</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>SQL</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>HTML5</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>CSS3</button>
                    </div>
                </div>
                <div className="row">
                    <div className='col m-2'>
                        <button className='btn disabled skill'>Git</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>Docker</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>Spring</button>
                    </div>
                    <div className='col m-2'>
                        <button className='btn disabled skill'>MongoDB</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills