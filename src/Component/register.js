import React, {useState} from 'react';
import {Alert, Button, Form, Card} from 'react-bootstrap';
import Login from './login';
import './Style.css';

const Register = () => {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [flag, setFlag] = useState(false);
const [login, setLogin] = useState(true);


function handleSubmit(e) {
    e.preventDefault();

    if(!username || !password) {
        setFlag(true);
    }

    else{
        setFlag(false);
        localStorage.setItem('Username', JSON.stringify(username));
        localStorage.setItem('Password', JSON.stringify(password));
        console.log("Saved in Local Storage")
        setLogin(!login);
    }
}

// function handleClick() {
//   setLogin(!login);
// }


    return (
        <div>
        {login ? (
            <Card style={{width:'400px', margin: '40px auto', padding:'40px'}}>
            <Form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group' style={{padding:'10px 40px', textAlign:'left'}}>
                <lable>Username</lable>
                <input
                    type="text"
                    className='form-contol'
                    placeholder='Name'
                    onChange={(event)=> setUsername(event.target.value)}/>
            </div>
            <div className='form-group' style={{padding:'10px 40px', textAlign:'left'}}>
                <lable>Password</lable>
                <input
                    type="Password"
                    className='form-contol'
                    placeholder='Password'
                    onChange={(event)=> setPassword(event.target.value)}/>
            </div>
<Button type='submit' className='btn btn-dark'>Register</Button>

<p>Already Registered {" "} login in?</p>

{flag && (
    <Alert color="primary" variant='danger'>
        Please fill each field
    </Alert>
)}

            </Form>
            </Card>
            ):(
                <Login/>
            )}
        </div>
    );
};

export default Register;