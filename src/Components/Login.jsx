import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
    
        const formData = {
            email: email,
            password: password
        };
    
        axios.post('http://127.0.0.1:8000/api/accounts/login/', formData)
            .then(response => {
                console.log('Login successful:', response.data);
                alert('Login successful.');
                navigate('/')
            })
            .catch(error => {
                console.error('Login error:', error.response.data);
                alert('Login failed: ' + error.response.data.error);
            });
    };


    const gotosignup = () => {
        navigate('/signup');
    };

    return (
        <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: '15px' }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">LOG-IN</h2>

                                    <form onSubmit={handleLogin}>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="email">Your Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control form-control-lg"
                                                name='email'
                                                onChange={(e) => setEmail(e.target.value)}
                                                value={email}
                                            />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="password">Password</label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control form-control-lg"
                                                name='password'
                                                onChange={(e) => setPassword(e.target.value)}
                                                value={password}
                                            />
                                        </div>

                                        <div className="d-flex justify-content-center">
                                            <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                                                LOG-IN
                                            </button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">
                                            Not Have an account? <Link to="/" onClick={gotosignup} className="fw-bold text-body"><u>Create a New Account here</u></Link>
                                        </p>
                                    </form>
                                    {message && <p>{message}</p>}
                                    {token && <p>{token}</p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;
