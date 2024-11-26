import axios from 'axios';
import { authenticationResponse, userCredentials } from './auth.models';
import AuthForm from './AuthForm';
import { useContext, useState } from 'react';

import { getClaims, saveToken } from './handleJWT';
import AuthenticationContext from './AuthenticationContext';

import { ApiEndpoints } from '../util/endpoints';
import DisplayErrors from '../util/DisplayErrors';
import { useNavigate } from 'react-router-dom';

export default function Login(){

    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const history = useNavigate();

    async function login(credentials: userCredentials){
        try {
            setErrors([]);
            const response = await axios
            .post<authenticationResponse>(`${ApiEndpoints.account}/login`, credentials);
            saveToken(response.data);
            update(getClaims());
            history.push('/');
        }
        catch (error){
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <h3>Login</h3>
            <DisplayErrors errors={errors} />
            <AuthForm model={{email: '', password: ''}}
             onSubmit={async values => await login(values)}
            />
        </>
    )
}