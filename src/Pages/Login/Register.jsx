
import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
const Register = () => {
  const [error, setError] = useState('')
    const {createUser,auth,verifyEmailUser}=useContext(AuthContext)

    const handelSumit=(e)=>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photoUrl = form.photourl.value;
        const email=form.email.value;
        const password= form.password.value;

        console.log(name,photoUrl,email,password);
        createUser(email,password)
        .then(res=>{
            const user = res.user;
            console.log(user);
            setError('')
            updateProfile(auth.currentUser, {
              displayName: name, photoURL: photoUrl
            }).then(() => {
              setError('')
            }).catch((error) => {
              setError(error.message)
            });
            handelEmailVerification()
            toast.success('Plesse Verify Your Email' )
        }).catch(error=>{
          console.error(error)
          setError(error.message)
        })
    }
    const handelEmailVerification =()=>{
      verifyEmailUser()
      .then(()=>{})
      .catch(error=>console.error(error))
    }
    return (
        <Form onSubmit={handelSumit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>PhotoURL</Form.Label>
          <Form.Control type="text" name='photourl' placeholder="Enter Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" 
        label={<>
        Accept <Link to='/trams'>Terms and Condition</Link>
        </>} />
      </Form.Group>
        <Button variant="primary" type="submit">
          Register
        </Button>
        <Form.Text className='text-danger'>
          {error}
        </Form.Text>
      </Form>
    );
};

export default Register;