//Designed and implemented a React form that collects user input for name, email and password. Validates using Regex.

import React from "react";

class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };

    // Bind methods
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate() {
    const errors = {};

    // Name validation
    if (!this.state.name) {
      errors.name = "Name is required";
    } else if (!/^[A-Za-z ]{3,}$/.test(this.state.name)) {
      errors.name = "Name must contain at least 3 letters";
    }

    // Email validation (RegEx)
    if (!this.state.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(this.state.email)) {
      errors.email = "Email is invalid";
    }

    // Password validation
    if (!this.state.password) {
      errors.password = "Password is required";
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(this.state.password)) {
      errors.password = "Password must be at least 8 characters with letters & numbers";
    }

    this.setState({ errors });
    return Object.keys(errors).length === 0;
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validate()) {
      alert("Form submitted successfully!");
      this.setState({
        name: "",
        email: "",
        password: "",
        errors: {}
      });
    }
  }

  render() {
    const { name, email, password, errors } = this.state;

    return (
      <div className="form-container">
        <h1>Registration Form</h1>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={this.handleChange}
          />
          <div className="error">{errors.name}</div>

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <div className="error">{errors.email}</div>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange}
          />
          <div className="error">{errors.password}</div>

          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegistrationForm;