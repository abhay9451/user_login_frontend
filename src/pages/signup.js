import React,{useState} from 'react'


//design
import { TextField,
        InputAdornment,
         IconButton,
        OutlinedInput,
         FormControl,
        InputLabel,
         Button, 
        FormHelperText,} from '@mui/material';
         import VisibilityIcon from '@mui/icons-material/Visibility';
         import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
const Signup = () => {
    //from satates
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const[ConfirmPassword, setConfirmPassword ]  = useState("")

    //password validation
    let hasSixChar = password.length>=6;
    let hasLowerChar = /(.*[a-z].*)/.test(password);
    let hasUpperChar = /(.*[A-Z].*)/.test(password);
    let hasNumber = /(.*[0-9].*)/.test(password);
    let hasSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);
    return (
        <div  className= "container mt-5 col-10 col-sm-8 col-md-6 col-lg-5">
            <div className='text-center mb-5 alert alert-primary'>
                <label htmlFor=''className='h2'>Sign Up</label>
            </div>

            <div className='form-group'>
                <TextField size='small' variant='outlined' className='form-control' label='Username'
                  value={username}
                  onChange={(e)  => setUsername(e.target.value)} />

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
        {password && (
        <div className='ml-1' style={{columns : 3 } }>
            <div>
                <small className={hasSixChar ? "text-success" : "text-danger"}>
                    at least 6 characters
                </small>
            </div>
            <div>
                <small className={hasLowerChar ? "text-success" : "text-danger"}>
                    one lowercase letter
                </small>
            </div>
            <div>
                <small className={hasUpperChar ? "text-success" : "text-danger"}>
                    one upparcase latter
                </small>
            </div>
            <div>
                <small className={hasNumber ? "text-success" : "text-danger"}>
                    one number
                </small>
            </div>
            <div>
                <small className={hasSpecialChar ? "text-success" : "text-danger"}>
                   one special symbol
                </small>
            </div>
           
        </div>)}
            </div>
            <div className='form-group'>
                <TextField size='small' variant='outlined' className='form-control' 
                  label='ConfirmPassword'
                  type='password'
                  value={ConfirmPassword}
                  onChange={(e)  => setConfirmPassword(e.target.value)} 
                  />
                  {password && ConfirmPassword && (
                  <FormHelperText className='ml-1 mt-1'> 
                    {password == ConfirmPassword ?(<span className='text-success'> Password does match</span>)
                    :(<span className='text-danger'>Password doesn't match</span>)}
                    
                    
                  </FormHelperText>
                  )}     
            </div>
              
            <div className='text-center mt-4'>
                <Button variant='contained' disabled= {!username || !email || !password || !ConfirmPassword 
                || password !== ConfirmPassword
                || !hasSixChar || !hasLowerChar || !hasUpperChar ||!hasNumber || !hasSpecialChar}>Submit

                </Button>
                
            </div>
            
        </div>
    )
}

export default Signup
