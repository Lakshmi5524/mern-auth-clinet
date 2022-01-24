import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import Main from './components/Main';
import EmailVerify from './components/EmailVerify';

function App() {
  const user=localStorage.getItem("token")
  return (
    <BrowserRouter>
    <Routes>
     
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact  element={<Signup />} />
			 <Route path="/login" exact element={<Login />} /> 
			 <Route path="/" element={<Navigate replace to="/login" />} />  
       <Route path="/user/:id/verify/:token"element={<EmailVerify />}/>
      </Routes>
		</BrowserRouter>
  );
}

export default App;
