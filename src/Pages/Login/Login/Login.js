import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Form } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';

import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Shared/Header/Header';
import initializeFirebaseAuthentication from '../Firebase/firebase.init';

initializeFirebaseAuthentication();

const auth = getAuth();

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState('');
    const [error, setError] = useState('');

    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_url = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                navigate.push(redirect_url);
            })
    }

    const toggleLogin = e => {
        setIsLogin(e.target.checked)
    }

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleSignUp = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password Must contain 2 upper case');
            return;
        }

        isLogin ? processLogin(email, password) : newSignup(email, password);

    }

    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
    }
    const newSignup = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');

            })
            .catch(error => {
                setError(error.message);
            })
    }



    return (
        <>
            <Header />
            <div className="App w-50 mx-auto">
                <Form onSubmit={handleSignUp} className="my-5">
                    <h3>Please {isLogin ? 'Sign In' : 'Sign Up'} </h3>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={toggleLogin} type="checkbox" label="Already sign up?" />
                    </Form.Group>
                    <div className="row mb-3 text-danger">{error}</div>

                    <Button className="btn btn-primary" variant="primary" type="submit">
                        Sign {isLogin ? 'In' : 'Up'}
                    </Button>
                </Form>
                <div>........Or........</div>
                <h3>Sign in with</h3>

                <button onClick={handleGoogleLogin} className="btn btn-success btn-outer-primary"><img src="https://img.icons8.com/color/96/000000/google-logo.png" alt="" /></button>

            </div>

        </>
    );
};

export default Login;
