import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const onLogin = e => {
    e.preventDefault();

    router.push('/dashboard');
  };

  return (
    <>
      <input placeholder="User Name" />
      <input placeholder="Password" />
      <button type="button" onClick={onLogin}>
        Log In
      </button>
    </>
  );
};

export default Login;
