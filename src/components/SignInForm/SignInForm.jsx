import FormInput from '../FormInput/FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { Buttons } from './SignInForm.styles';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('Wrong password!');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log(err);
      }
      console.log(err);
    }
  };
  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sing in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <Buttons>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </Buttons>
      </form>
    </div>
  );
};

export default SignInForm;
