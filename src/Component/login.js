import React, {useState} from 'react';
import {Alert, Button, Form, Card} from 'react-bootstrap';
import Home from './home';
import './Style.css'

const Login = () => {
    const [usernamelog, setUsernamelog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let user = localStorage.getItem("Username").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");
    
        if(!usernamelog || !passwordlog) {
            setFlag(true);
            console.log("Empty")
        } else if (passwordlog !== pass || usernamelog !== user){
         setFlag(true)
        }
        
        else{
            setTimeout(() => {
                alert("welcome "  + user );
            }, 3000);
             setHome(!home);
            setFlag(false);
        }
    }

  return (
      <div>
 {home ? (
     <Card style={{width:'400px', margin: '40px auto', padding:'40px'}}>
        <Form onSubmit={handleLogin}>
            <h3>Login</h3>
            <div className='form-group' style={{padding:'10px 40px', textAlign:'left'}}>
                <lable>Username</lable>
                <input
                    type="text"
                    className='form-contol'
                    placeholder='Name'
                    onChange={(event)=> setUsernamelog(event.target.value)}/>
            </div>
            <div className='form-group' style={{padding:'10px 40px', textAlign:'left'}}>
                <lable>Password</lable>
                <input
                    type="Password"
                    className='form-contol'
                    placeholder='Password'
                    onChange={(event)=> setPasswordlog(event.target.value)}/>
            </div>
<Button type='submit' className='btn btn-primary'>Login</Button>

<p>Already Registered login in?</p>

{flag && (
    <Alert color="primary" variant='danger'>
       Please fill the accurate data 
    </Alert>
)}

            </Form>
            </Card>
            ):(
                <Home/>
            )}
            </div>
  );
};

export default Login;