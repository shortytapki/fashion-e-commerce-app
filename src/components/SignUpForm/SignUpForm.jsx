import { useState } from 'react';
import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import './SignUpForm.styles.jsx';
import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { SignUpContainer } from './SignUpForm.styles.jsx';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = formFields;
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    try {
      await createAuthUserWithEmailAndPassword(email, password, displayName);

      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use')
        alert('Email is already in use!');
      console.log('Error signing up a user with email and password:', error);
    }
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sing up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
