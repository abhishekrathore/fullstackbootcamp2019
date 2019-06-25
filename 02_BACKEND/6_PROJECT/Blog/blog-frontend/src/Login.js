import React from 'react';


function Login(props){

    return (
        <div>
            <button onClick={props.googleLogin}>Login with Google</button>
        </div>
    )
}

export default Login;