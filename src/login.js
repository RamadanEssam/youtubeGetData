import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = '405821062491-hnk3mcga4fjobenstderiem592dmuhj2.apps.googleusercontent.com';

function Login() {


    const onSuccess = (res) => {
        console.log('success:', res);
    };
    const onFailure = (err) => {
        console.log('failed:', err);
    };
    return (
        <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    );













}
export default Login;


