import './App.css';
import { useForm } from 'react-hook-form';
import { Routes,Route} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import NoPage from './pages/NoPage';
import Homepage from './pages/Homepage';

 
function App() {
  return(
    <div>
       <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signUp" element={<SignUpPage />} />
            <Route path="*" element={<NoPage />} />
       </Routes>
    </div>
  )
}

export default App;
