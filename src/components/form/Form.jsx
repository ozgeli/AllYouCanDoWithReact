import React, { useState } from 'react'
import './form.scss';

const Form = () => {
  const [formData, setFormData] = useState({
    user_first_name:'',
    user_last_name:'',
    user_email:'',
    user_password:'',
    user_password_confirm:'',
  })

  const [formValid, setFormValid] = useState(false);
  const [fieldValidity, setFieldValidity] = useState({
    user_email: true, // Assuming fields are valid by default
    user_password: true,
    user_confirm_password: true,
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
  
    // Assume validation passes initially, then check specific cases
    let isValid = true;
  
    if (name === "user_email") {
      isValid = /\S+@\S+\.\S+/.test(value); // Simple email regex validation
    } else if (name === "user_password" || name === "user_confirm_password") {
      // Ensure both passwords are equal and at least 8 characters long
      isValid = value.length >= 8 && formData.user_password === formData.user_confirm_password;
    }
  
    // Update field validity based on the current field's validation
    setFieldValidity((prevValidity) => ({
      ...prevValidity,
      [name]: isValid,
    }));
  
    // Only update form data if the field is valid to avoid invalid data being stored
    if (isValid) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  
    // Call validateForm to update overall form validity
    validateForm();
  };
  

  const validateForm = () => {
    const isValid = formData.user_first_name && formData.user_last_name && /\S+@\S+\.\S+/.test(formData.user_email) &&
      formData.user_password && formData.user_password.length >= 8 && formData.user_password === formData.user_confirm_password;
  
    setFormValid(isValid);
  };
  
  // Call ValidateForm on evry input change event

  const handleBlur = () => {
    validateForm();
  }
  return (
    <div className="form-container">
        <h1 className="signUp-header">Sign Up Form</h1>
        <form className="signUp-form" onSubmit = {(e) => e.preventDefault()}>
            <div>
              {/* Inputs updated to include onChange and onBlur */}
            <label htmlFor="user_first_name">First Name</label>
            <input type="text" id="user_first_name" name="user_first_name" required onChange={handleInputChange} onBlur={handleBlur}/>
            </div>
            <div>
            <label htmlFor="user_last_name">Last  Name</label>
            <input type="text" id="user_last_name" name="user_last_name" required onChange={handleInputChange} onBlur={handleBlur}/>
            </div>
            <div>
            <label htmlFor="user_email">Email</label>
            <input type="email" id="user_email" name="user_email" required onChange={handleInputChange} onBlur={handleBlur} className={fieldValidity.user_email ? 'input-valid' : 'input-invalid'}/>
            </div>
            <div>
            <label htmlFor="user_password">Password</label>
            <input type="password" id="user_password" name="user_password" required minLength={6} onChange={handleInputChange} onBlur={handleBlur}/>  
            </div>
            <div>
            <label htmlFor="user_confirm_password">Confirm Password</label>
            <input type="password" id="user_confirm_password" name="user_confirm_ password" onChange={handleInputChange} onBlur={handleBlur}/>  
            </div>
            <div>
                <button type="submit" disabled={!formValid}>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default Form