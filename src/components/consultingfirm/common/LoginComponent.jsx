// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../security/AuthContext';

// import constants from '../api/constants.js'

// function LoginComponent() {
//     const [username, setUsername] = useState('user1');

//     const [password, setPassword] = useState('');

//     const [showErrorMessage, setShowErrorMessage] = useState(false);

//     const navigate = useNavigate();

//     const authContext = useAuth();

//     console.log(authContext);

//     function handlerUsernameChange(event) {
//         console.log(event.target.value);
//         setUsername(event.target.value);
//     }

//     function handlerPasswordChange(event) {
//         setPassword(event.target.value);
//     }

//     function handleSubmit() {
//         console.log(username);
//         console.log(password);

//         if (authContext.login(username, password)) {
//             setShowErrorMessage(false);
//             navigate(`/welcome/${username}`);
//         } else {
//             setShowErrorMessage(true);
//         }
//     }

//     return (
//         <div className="Login">

//             {showErrorMessage && <div className="errorMessage">Authencation Failed. Please check your credentials.</div>}

//             <div className="LoginForm">
//                 <div>
//                     <label>User Name</label>
//                     <input type="text" name="username" value={username} onChange={handlerUsernameChange} />
//                 </div>
//                 <div>
//                     <label>Password</label>
//                     <input type="password" name="password" value={password} onChange={handlerPasswordChange} />
//                 </div>
//                 <div>
//                     <button type="button" name="login" onClick={handleSubmit}>Login</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default LoginComponent