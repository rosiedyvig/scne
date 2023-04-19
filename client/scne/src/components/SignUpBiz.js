import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import { createBusiness } from '../api-service';

const SignUpBiz = ({setBusinessState}) => {
    const [inputs, setInputs] = useState({ name: '', city: '', address: '', phone:'', email: '', password: '' });

    const handleChange = (event) => {
        setInputs({ ...inputs, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        createBusiness(inputs).then((newBusiness) => {
          setBusinessState((existingBusinesses) => [...existingBusinesses, newBusiness]);
        });  

        setInputs({ name: '', city: '', address: '', phone:'', email: '', password: '' });
    };

  return (
<>
      <div>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 2, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <TextField
            id="outlined-basic-name"
            label="NAME"
            variant="outlined"
            name="name"
            value={inputs.name}
            onChange={handleChange}
          />
          <InputLabel id="simple-select-label">CITY</InputLabel>
          <Select
            labelId="city-id"
            id="simple-select"
            value={inputs.city}
            label="CITY"
            name="city"
            onChange={handleChange}
          >
            <MenuItem value={'Barcelona'}>Barcelona</MenuItem>
          </Select>

          <TextField
            id="outlined-basic-address"
            label="ADDRESS"
            variant="outlined"
            name="address"
            value={inputs.address}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-phone"
            label="PHONE"
            variant="outlined"
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-email"
            label="EMAIL"
            variant="outlined"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
          <TextField
            id="outlined-basic-password"
            label="PASSWORD"
            variant="outlined"
            type="password"
            name="password"
            value={inputs.password}
            onChange={handleChange}
          />
          
          <Button type="submit" variant="outlined">
            CREATE
          </Button>
        </Box>
        
      </div>
    </>
  )
};


export default SignUpBiz;