import axios from 'axios';
import { authenticationResponse, userCredentials } from '../auth/auth.models';
import AuthForm from '../auth/AuthForm';
import { useContext, useState } from 'react';

import { getClaims, saveToken } from '../auth/handleJWT';
import AuthenticationContext from '../auth/AuthenticationContext';

import { ApiEndpoints } from '../util/endpoints';
import DisplayErrors from '../util/DisplayErrors';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
export default function LoginComponent(){

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
            const response = await axios
            .post<authenticationResponse>(`${ApiEndpoints.signUp}`, credentials)
            if(response.data.success){
            saveToken(response.data);
            
            update(getClaims());
            history('/');
            }
            else {
                setMessage(response.data.message)
            }
        
    }

    return (
        <>
            <h3>Register</h3>
            <DisplayErrors errors={errors} />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={login}
            >
              <Form className='login-password'>
                <div className="form-group">
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

                <div className="form-group">
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

                <div className="form-group login-button">
                  <div>
                    <button type="submit" className="btn btn-primary btn-block" >
                      
                      <span>Login</span>
                    </button>
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
        </>
    )
}