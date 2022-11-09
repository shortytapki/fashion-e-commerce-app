import SignUpForm from '../../components/SignUpForm/SignUpForm';
import SignInForm from '../../components/SignInForm/SignInForm';
import { AuthForm } from './Auth.styles.jsx';

const Auth = () => {
  return (
    <AuthForm>
      <SignInForm />
      <SignUpForm />
    </AuthForm>
  );
};

export default Auth;
