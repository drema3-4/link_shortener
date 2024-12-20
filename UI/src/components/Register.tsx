import axios from 'axios';
import { authenticationResponse, userCredentials } from '../auth/auth.models';
import { useContext, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

import { getClaims, saveToken } from '../auth/handleJWT';
import AuthenticationContext from '../auth/AuthenticationContext';

import { ApiEndpoints } from '../util/endpoints';
import DisplayErrors from '../util/DisplayErrors';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';

export default function LoginComponent() {

    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const history = useNavigate();
    const [message, setMessage] = useState<string>('');

    const initialValues: {
        email: string;
        password: string;
    } = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().required('This field is required!'),
        password: Yup.string().required('This field is required!'),
    });

    async function login(credentials: userCredentials){
        setErrors([]);
        const response = await axios.post<authenticationResponse>(`${ApiEndpoints.signUp}`, credentials)
        if(response.data.success){
            saveToken(response.data);

            update(getClaims());
            history('/login');
        }
        else {
            setMessage(response.data.message)
        }
    }

    return (
        <Row className='justify-content-center' style={{marginTop: '6em'}}>
            <Col xs={3} className='justify-content-center'>
                <h3>Register</h3>
                <DisplayErrors errors={errors} />
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={login}
                >
                    <Form className='login-password'>
                        <div className="form-group" >
                            <label className='form-group-item' htmlFor="email">Email:</label>
                            <Field name="email" type="text" className="form-control" />
                            <div className='alert-container'>
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="alert alert-danger errorMessage"
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{marginTop: '1em'}}>
                            <label className='form-group-item' htmlFor="password">Password: </label>
                            <Field name="password" type="password" className="form-control" />
                            <div className='alert-container'>
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="alert alert-danger errorMessage"
                                />
                            </div>
                        </div>

                        <div className="form-group login-button" style={{marginTop: '1em'}}>
                            <div>
                                <button type="submit" className="btn btn-primary btn-block" >
                                    <span>Register</span>
                                </button>
                            </div>
                            <div style={{marginTop: '1em', textAlign: 'center'}}>
                                <a href="/login"> Login </a>
                            </div>
                        </div>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                </Formik>
            </Col>
        </Row>
        
    )
}