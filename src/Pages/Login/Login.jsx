import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useContext,useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Login = () => {
    const  [error , setError]= useState('')
    const {signIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const location= useLocation()
    const from =location.state?.from?.pathname|| '/'
    const handelLogIn=(e)=>{
            e.preventDefault()
        const form = e.target;
        const email=form.email.value;
        const password= form.password.value;

        signIn(email,password)
        .then(res=>{
            const user=res.user;
            console.log(user);
            setError('')
            form.reset()
            if(user.emailVerified){
              navigate(from, {replace:true})

            }else{
              toast.error('Your Email is not verified')
            }
        }).catch(error=>{
            console.error(error)
            setError(error.message)
        })
        
    }
    return (
        <Form onSubmit={handelLogIn}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Form.Text className='text-danger'>
      {error}
        </Form.Text>
      </Form>
    );
};

export default Login;