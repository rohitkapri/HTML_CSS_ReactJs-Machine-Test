import React,{useState} from 'react'
import ReusableHeader from './sub_component/ReusableHeader'
import './Register.css'

const Register = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        password: ''
      });
    
      const [errors, setErrors] = useState({});
    
      // Function to handle input changes
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // Validation function
      const validate = () => {
        let newErrors = {};
    
        if (!formData.first_name) {
          newErrors.first_name = 'First Name is required';
        }
    
        if (!formData.last_name) {
          newErrors.last_name = 'Last Name is required';
        }
    
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Email is not valid';
        }
    
        if (!formData.phone_number) {
          newErrors.phone_number = 'Phone Number is required';
        } else if (!/^\d{10}$/.test(formData.phone_number)) {
          newErrors.phone_number = 'Phone Number must be 10 digits';
        }
    
        if (!formData.password) {
          newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
          newErrors.password = 'Password must be at least 8 characters';
        }
    
        return newErrors;
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
    
        if (Object.keys(validationErrors).length === 0) {
          console.log(formData); // Log form data to console
          setErrors({});
        } else {
          setErrors(validationErrors);
        }
      };
    
  return (
    <>
      <ReusableHeader Title={"Ready to take a free trial?"}/>
      <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <h2>Sign up for a free account</h2>

        <div>
          <input
            type="text"
            name="first_name"
            placeholder="First name"
            value={formData.first_name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="text"
            name="last_name"
            placeholder="Last name"
            value={formData.last_name}
            onChange={handleChange}
            className="input-field"
          />
          {errors.first_name && <p className="error-text">{errors.first_name}</p>}
          {errors.last_name && <p className="error-text">{errors.last_name}</p>}
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
          <input
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={formData.phone_number}
            onChange={handleChange}
            className="input-field"
          />
          {errors.phone_number && <p className="error-text">{errors.phone_number}</p>}
        </div>


        <div>
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            className="input-field full-width-input"
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>

    </>
  )
}

export default Register
