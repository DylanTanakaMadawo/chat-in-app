import React, { useState } from 'react'
import axios from 'axios'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObect = { 'Project-ID' : 'd7aab84e-9c73-40bb-9e07-9baeda703058' , 'User-Name' : username, 'User-Secret' : password }

        try {
            // username | password => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', {headers: authObect });

            //works out -> logged in now
            //want to store new credentials to the local storage so that you dont have to login everytime
             localStorage.setItem('username', username);
             localStorage.setItem('password', password);

             window.location.reload();

        } catch (error) {
            //error -> try with new username ...
            setError('Oops, Incorrect Username or Password. Try Again.')
            setUsername('')
            setPassword('')
        }
    }
    return (
        <div className='wrapper'>
            <div className="form">
                <h1 className="title">ChatIn</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className='input'
                        placeholder='Username'
                        required
                    />
                    <input 
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='input'
                        placeholder='Password'
                        required
                    />
                    <div>
                        <button type='submit' className='button'>
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
