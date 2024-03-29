import React,{useState} from 'react'


//design
import { TextField,
        InputAdornment,
         IconButton,
        OutlinedInput,
         FormControl,
        InputLabel,
         Button, } from '@mui/material';
         import VisibilityIcon from '@mui/icons-material/Visibility';
         import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Login = () => {
    //from satates
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div  className= "container mt-5 col-10 col-sm-8 col-md-6 col-lg-5">
            <div className='text-center mb-5 alert alert-primary'>
                <label htmlFor=''className='h2'>Log in</label>
            </div>
            <div className='form-group'>
                <TextField size='small' variant='outlined' className='form-control' label='Email'
                  value={email}
                  onChange={(e)  => setEmail(e.target.value)} />

            </div>
            <div className='form-group'>

            <FormControl size= "small" className="form-control" variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
            label="Password" 
            type={showPassword ? "text" : "password"}
            endAdornment={<InputAdornment>
            <IconButton edge= "end" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? ( <VisibilityIcon /> ) : (<VisibilityOffIcon />) }
              
               
            </IconButton>
            </InputAdornment>
            
            }
            />
            
               
        </FormControl>

            </div>

            <div className='text-center mt-4'>
                <Button variant='contained' disabled= {!email || !password}>Submit

                </Button>
                
            </div>
            
        </div>
    )
}

export default Login
