import React, { useState } from 'react';
import * as Yup from 'yup'; // Import Yup for form validation

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const schema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  });
  
  const validateField = async (name, value) => {
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    } catch (error) {
      setErrors(prevErrors => ({ ...prevErrors, [name]: error.message }));
    }
  };
  
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    await validateField(name, value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await schema.validate(formData, { abortEarly: false });
      // Simulate API call with a delay
      setTimeout(() => {
        setLoading(false);
        setSuccessMessage('Registration successful!');
      }, 2000);
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach(fieldError => {
        validationErrors[fieldError.path] = fieldError.message;
      });
      setErrors(validationErrors);
      setLoading(false);
    }
  };
  
  return (
    <div>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error-message">{errors.firstName}</span>}
        </div>
        <div>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error-message">{errors.lastName}</span>}
        </div>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </form>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default UserRegistrationForm;