import  LoginButton from "./login"
import  LogoutButton from "./logout"
import  {  useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = '405821062491-hnk3mcga4fjobenstderiem592dmuhj2.apps.googleusercontent.com';

function App() {
    
    useEffect(() => {
        function start()  {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            });
        };
        gapi.load('client:auth2', start);
    });

    
    return (
        <div className='App'>
            <h2>React Google Login</h2>
           <LoginButton/>
           <LogoutButton/>
            
        </div>
    );
}
export default App;