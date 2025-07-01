import React from 'react'
import "./Contact.css"

function Contact() {
  return (
    <div className='contact'>
         <form action="https://formspree.io/f/xanjvavk" method='POST'>
            <input type="text" placeholder='Enter Your Name..' name='username' required/>
            <input type="text" placeholder='Email' name='email' required />
            <textarea name="" placeholder='Message'></textarea>
            <button> Submit </button>
         </form>
    </div>
  )
}

export default Contact