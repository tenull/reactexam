import { useState } from "react";


const Subscription = () => {

    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    
      const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
          setError('Email is invalid');
        } else {
          setError(null);
        }
    
        setMessage(event.target.value);
      };
    
      const sendEmail = () => {
        fetch("https://demoapi.com/api/series/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: message }),
        })
          .then((res) => res.json())
          .then((data) => console.log('response here:',data));
          console.log('Email sent')
      };



    return ( 
        <div className="letter">
            <p>Subscripe to our newsletter</p>
            <input
        id="message"
        name="message"
        value={message}
        onChange={handleChange}
      />

      
           {error ? <button  onClick={sendEmail} disabled>submit</button> : <button >submit</button>}
        </div>
     );
}
 
export default Subscription;