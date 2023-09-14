import React from 'react';

const Contact = () => {

    return (
        <div className='contact-component card mx-auto mb-5' id='contact' style={{ "width": "600px" }}>
            <h1 className='card-title'>Contact</h1>
            <form className='contact-form card-body'>
                <div className="form-floating mb-3">
                    <input id='form-name' type="text" className='form-control' />
                    <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input id='form-email' type="email" className='form-control' />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea className='form-control' style={{ "height": "100px" }} />
                    <label htmlFor="message">Message</label>
                </div>
                <div className="mb-3 text-center">
                    <button className='btn btn-secondary' type="submit" >Send</button>
                </div>
            </form>
        </div>
    )
}

export default Contact