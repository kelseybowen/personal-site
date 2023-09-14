import React, { useEffect, useRef } from 'react';
import profilePhoto from '../static/images/kb_photo_square.jpg';
import anime from 'animejs';

const Intro = () => {

    const arrowRef = useRef(null);
    const animateArrow = () => {
        const arrow = arrowRef.current;
        anime({
            targets: arrow,
            translateY: 50,
            duration: 2000,
            loop: true,
            easing: "easeInOutQuad", // Easing function for smooth animation
            direction: 'alternate',
            // complete: animateArrow, // Repeat the animation infinitely
        });
    };
    useEffect(() => {
        animateArrow();
    }, []);

    return (
        <div id='intro'>
            <div>
                <h1 className="display-1 p-5">Hi, I'm Kelsey</h1>
                <div className="photo">
                    <img src={profilePhoto} alt="kelsey bowen" height="400px" width="400px" />
                </div>
            </div>
            <div className="p-4">

            </div>
            <div className='mt-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-double-down" ref={arrowRef} viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </div>
        </div>
    )
}

export default Intro