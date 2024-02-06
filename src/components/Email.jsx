import emailjs from '@emailjs/browser';
import '../styles/emailForm.css'

import { useRef } from 'react';
const EmailForm = () => {
        const form = useRef();
       
        const sendEmail = (e) => {
          e.preventDefault(); // prevents the page from reloading when you hit “Send”
       
          emailjs.sendForm('service_ole04mq', 'template_ljqirbv', form.current, 'Dtp3b-W6lC4GpWnRO')
            .then((result) => {
                alert('Message sent successfully!')
                // show the user a success message
            }, (error) => {
                alert('Error sending message!')
                console.log(error);
                // show the user an error
            });
        };
    return ( 
        <div className="email">
            <h1>LET'S CONNECT</h1>
            <div className="email-form">
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            </div>
        </div>
     );
}
 
export default EmailForm;