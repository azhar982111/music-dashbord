import styles from "../css files/Login.module.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";

export default function Login() {

    // In order to login successfully please use the below credentials. I have used reqres api to validate the logi form.


    // eve.holt@reqres.in    -------- email
    // cityslicka            -------- password

    const initstate = {
        email: "",
        password: ""
    }

    // const [isAuth, setIsAuth] = useState(false)
    const [formData, setFormData] = useState(initstate)

    let navigate = useNavigate()

    function handleChange(e) {
        let { name, value } = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    function submit() {
            if (email != "" && password != "") {
                axios.post('https://reqres.in/api/login', formData)
                    .then(response => navigate("/home"))
                    .catch(error => alert("Enter correct credentials"));
            }
            else {
                alert("Enter all fields")
            }
    }

    const { email, password } = formData;

    return (
        <div className={styles.container}>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '35ch' },
                }}
                noValidate
                autoComplete="off"
                className={styles.formDiv}
            >
                <TextField required id="outlined-basic" type="email" name="email" value={email} onChange={handleChange} label="Email address" variant="outlined" />
                <TextField required id="outlined-basic" name="password" value={password} onChange={handleChange} label="Password" variant="outlined" />
            </Box>
            <Box>
                <Button onClick={submit} variant="contained">L O G I N</Button>
            </Box>
        </div>
    )
}