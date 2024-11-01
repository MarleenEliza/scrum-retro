import { useState } from 'react';
import { generateFakeJWT, validateFakeJWT } from 'utils/jwtUtils';
import { useAuthContext } from 'context/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * Hook that mocks BE JWT validation. Normally one would get a JWT from BE and then validate it.
 * In this small scale app, I will simply generate a random ID.
 */
export const useMockJWT = () => {
    const navigate = useNavigate();
    const { setToken } = useAuthContext();
    const [error, setError] = useState<string | null>(null);

    const initiateLogin = () => {
        const token = generateFakeJWT();
        localStorage.setItem('token', token);
        setToken(token);
        console.log(`mock token is set with ${token}`)

        // Navigate to home page after login
        navigate('/');

    };

    const validateLogin = () => {
        const token = localStorage.getItem('token');
        if (token && validateFakeJWT(token)) {
            setToken(token);
        } else {
            setError('Invalid token');
        }
    };

    return { initiateLogin, validateLogin, error };
};
