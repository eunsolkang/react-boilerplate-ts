import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

function AuthPage() {
    return (
        <div>
            <AuthTemplate>
                <AuthForm/>
            </AuthTemplate>
        </div>
    )
}

export default AuthPage;
