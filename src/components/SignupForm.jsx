import React, { useRef, useState } from 'react';

const SignupForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const genderRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const gender = genderRef.current.value;
    const phone = phoneRef.current.value.trim();
    const password = passwordRef.current.value;

    // Validation
    if (!name || !email || !phone || !password) {
      setMessage('All fields are mandatory.');
    } else if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      setMessage('Name is not alphanumeric.');
    } else if (!email.includes('@')) {
      setMessage('Email must contain @.');
    } else if (!['male', 'female', 'other'].includes(gender.toLowerCase())) {
      setMessage('Please identify as male, female or others.');
    } else if (!/^[0-9]+$/.test(phone)) {
      setMessage('Phone Number must contain only numbers.');
    } else if (password.length < 6) {
      setMessage('Password must contain atleast 6 letters.');
    } else {
      // Success
      const username = email.split('@')[0];
      setMessage(`Hello ${username}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input data-testid="name" placeholder="Name" ref={nameRef} /><br />
        <input data-testid="email" placeholder="Email" ref={emailRef} /><br />
        <select data-testid="gender" defaultValue="male" ref={genderRef}>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select><br />
        <input data-testid="phoneNumber" placeholder="Phone Number" ref={phoneRef} /><br />
        <input data-testid="password" type="password" placeholder="Password" ref={passwordRef} /><br />
        <button data-testid="submit" type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
};

export default SignupForm;
