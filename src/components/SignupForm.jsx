import React, { useState } from 'react';
import '../styles/App.css';

const App = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    gender: 'male',
    phoneNumber: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, gender, phoneNumber, password } = form;

    if (!name || !email || !phoneNumber || !password) {
      return 'All fields are mandatory.';
    }

    if (!/^[a-zA-Z0-9 ]+$/.test(name)) {
      return 'Name is not alphanumeric.';
    }

    if (!email.includes('@')) {
      return 'Email must contain @.';
    }

    if (!['male', 'female', 'other'].includes(gender.toLowerCase())) {
      return 'Please identify as male, female or others.';
    }

    if (!/^\d+$/.test(phoneNumber)) {
      return 'Phone Number must contain only numbers.';
    }

    if (password.length < 6) {
      return 'Password must contain atleast 6 letters.';
    }

    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setMessage(error);
    } else {
      const username = form.email.split('@')[0];
      setMessage(`Hello ${username}`);
    }
  };

  return (
    <div id="main">
      <form onSubmit={handleSubmit}>
        <input
          data-testid="name"
          type="text"
          name="name"
          placeholder="Enter your name"
          value={form.name}
          onChange={handleChange}
        /><br />

        <input
          data-testid="email"
          type="text"
          name="email"
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        /><br />

        <select
          data-testid="gender"
          name="gender"
          value={form.gender}
          onChange={handleChange}
        >
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="other">other</option>
        </select><br />

        <input
          data-testid="phoneNumber"
          type="text"
          name="phoneNumber"
          placeholder="Enter your phone number"
          value={form.phoneNumber}
          onChange={handleChange}
        /><br />

        <input
          data-testid="password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        /><br />

        <button data-testid="submit" type="submit">Submit</button>
      </form>

      {/* Output message */}
      {message && <span>{message}</span>}
    </div>
  );
};

export default App;
