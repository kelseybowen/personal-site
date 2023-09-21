import React from 'react'

const Skills = () => {

    return (
        <div className='skills-component' id='skills'>
            <h1 className='display-2 mb-5'>Skills</h1>
            <div className="mt-4 mx-auto">
                <div className="row mx-auto">
                    <button disabled className='skill mx-auto'>Python</button>
                    <button disabled className='skill mx-auto'>React</button>
                    <button disabled className='mx-auto skill'>SQL</button>
                    <button disabled className='mx-auto skill'>Flask</button>
                </div>
                <div className="row mx-auto">
                    <button disabled className='skill mx-auto'>Javascript</button>
                    <button disabled className='mx-auto skill'>Kubernetes</button>
                    <button disabled className='mx-auto skill'>Docker</button>
                    <button disabled className='mx-auto skill'>Git</button>
                </div>
                <div className="row mx-auto">
                    <button disabled className='mx-auto skill'>HTML5</button>
                    <button disabled className='mx-auto skill'>CSS3</button>
                    <button disabled className='skill mx-auto'>Java</button>
                    <button disabled className='mx-auto skill'>Spring</button>
                </div>
            </div>
            {/* <div className='about-component mt-5 col-lg-10 mx-auto' id='about'>
                <h1 className='display-2 mt-5'>About Me</h1>
                <p className='about-text mt-4'>I love to write code to solve problems. I am driven by a desire to figure things out, find creative solutions and learn something new every day.</p>
                <p className='about-text mt-4'>5 years into my career as a Registered Nurse, I realized I wanted to make a drastic shift toward software development.</p>
                <p className="about-text mt-4">My years as a nurse were foundational to who I am today.</p>
                <p className="about-text mt-4">Collaborating with diverse teams taught me a lot about how to work with others.</p>
                <p className="about-text mt-4">I learned how to communicate and ask thoughtful questions.</p>
                <p className="about-text mt-4">I learned to do a lot with a little and to optimize for efficiency, but also to stay flexible and adapt to changing priorities.</p>
                <p className="about-text mt-4">I learned to ask for help when I needed it, and always be the first to jump in to help someone else.</p>
                <p className='about-text mt-4'>Ultimately, it was my desire to tackle new challenges and engage my brain in a different way that led me to step away from nursing.</p>
                <p className="about-text mt-4">My unconventional road to the software industry gives me unique perspective that I'm eager to share.</p>
                <p className="about-text mt-4">Let's connect!</p>
            </div> */}
        </div>
    )
}

export default Skills