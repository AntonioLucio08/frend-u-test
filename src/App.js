import { Button,TextField} from '@mui/material';
import './App.css';

function App() {
  return (
    <div>
        <nav className='navbar-login'> Frend-U</nav>
        <div className='navbar-items'>
          <h1 className='title-items'>AMINISTRACION</h1>
          <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        </div>
    </div>
  );
}

export default App;




