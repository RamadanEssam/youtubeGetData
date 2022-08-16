import {GoogleLogin} from 'react-google-login';

const CLIENT_ID ='405821062491-hnk3mcga4fjobenstderiem592dmuhj2.apps.googleusercontent.com';

function Logout(){
     const onSuccess=(res)=>{
          console.log("logout success ",res);
     }
     

     return( 
        <div id='signOutButton'>
      <GoogleLogin
         clientId={CLIENT_ID}
         buttonText="Logout"
        onLogoutSuccess={onSuccess}
        />
</div>
 )
}
export default Logout;