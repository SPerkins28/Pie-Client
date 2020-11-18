import {useState} from 'react';
import './Auth.css';

const Auth = (props) => {
    console.log(props);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    const handleSubmit = (event) => {
        //@ Stops browser from refreshing once form is submitted
        event.preventDefault();
        //@ sets up value of url dependant on if loging in or signing up
        const url = login ? 'http://localhost:4000/user/login' : 'http://localhost:4000/user/register';
        //@ Sets up the value of the data we are going to send to the url based on Login value
        const bodyObj = login ? {
            email: email,
            password: password
        } : {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(bodyObj)
        })
        .then(res => res.json())
        .then(data => login ? props.updateToken(data.token) : undefined)
    }

    const title = () => {
        return login ? 'Login' : 'Signup';
        //@ If login is true return string of 'login'. Else, return 'Signup'; 
    }

    const loginToggle = (event) => {
        event.preventDefault();
        setLogin(!login) //@ => set Login to be the opposite of its current value
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    const signUpFields = () => {
        return !login ? (
            <div>
                <label htmlFor="firstName">First Name</label>
                <br/>
                <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <br/>
                <input type="text" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
            </div>
        ) : null //@ if login comes back as false, display all of these things else, display none
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                {signUpFields()}
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="text" id="email" placeholder="email@email.com" value={email} onChange={(event) => {
                //@ two-way data binding. This builds a closed circuit to display and update an input field
                //@ The data comes in and changes the state variable via setEmail. The stat variable (email) is tied to the input field via the value attribute.
                    // console.log(event);
                    setEmail(event.target.value);
                }} />
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input type="password" id="password" value={password} onChange={(event) => {
                    // console.log(event);
                    setPassword(event.target.value)
                }} />
                <br/>
                <button onClick={loginToggle}>Login/Signup Toggle</button>
                <br/>
                <button type="submit">Submit User Data</button>
            </form>
        </div>
    );
};

export default Auth;

