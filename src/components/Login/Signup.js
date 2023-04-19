import React,{useEffect} from 'react'
import { TextField,Button } from "@mui/material"
import { useFormik } from 'formik'

import * as Yup from 'yup';
import { async } from '@firebase/util';
import axios from 'axios';

const Signup = ({openLoginModal,handleClose,setShowMessage}) => {


    const validation = Yup.object({
        firstName: Yup.string()
            .required('Required'),
        lastName: Yup.string()
            .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Password is required'),
        passwordConfirm: Yup.string()
            .required('Required')
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: ""
        },
        validationSchema: validation,
        onSubmit:async (values) => {
            try{
                const data = await axios.post("http://43.204.198.19/api/v1/user/signup",values).then((res)=>{
                 console.log(res.data)
                 handleClose()
                 openLoginModal()
                 setShowMessage({
                    message: "User Registered Successfully",
                    visible: true,
                    type: "success",
                  });
                }).catch(()=>{
                    handleClose()
                    setShowMessage({
                        message: "Something went wrong",
                        visible: true,
                        type: "error",
                      });
                })
            }catch{

            }
        },
    })
    return (
        <div>
            <div><h2 style={{ textAlign: 'center' }}> Sign Up </h2></div>
            <form onSubmit={formik.handleSubmit}>

                <div className='mb-3'>
                    <TextField
                        id="outlined-basic"
                        label="First Name"
                        name='firstName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        variant="outlined"
                        fullWidth size='small' />

                    {formik.touched.firstName && formik.errors.firstName ? (
                        <div>{formik.errors.firstName}</div>
                    ) : null}

                </div>
                <div className='mb-3'>
                    <TextField
                     id="outlined-basic"
                     label="Last Name"
                     name="lastName"
                     variant="outlined"
                     fullWidth size='small' 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                    />

                    {formik.touched.lastName && formik.errors.lastName ? (
                        <div>{formik.errors.lastName}</div>
                    ) : null}

                </div>
                <div className='mb-3'>
                    <TextField 
                     id="outlined-basic" 
                     label="Email"
                     name='email'
                     variant="outlined"
                     fullWidth size='small' 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     />

                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}

                </div>
                <div className='mb-3'>
                    <TextField 
                     id="outlined-basic" 
                     label="Password"
                     name='password'
                     variant="outlined"
                     fullWidth size='small' 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     />

                    {formik.touched.password && formik.errors.password ? (
                        <div>{formik.errors.password}</div>
                    ) : null}

                </div>
                <div className='mb-3'>
                    <TextField 
                     id="outlined-basic" 
                     label="Confirm Password"
                     name='passwordConfirm'
                     variant="outlined"
                     fullWidth size='small' 
                     onChange={formik.handleChange}
                     onBlur={formik.handleBlur}
                     />

                    {formik.touched.passwordConfirm && formik.errors.passwordConfirm ? (
                        <div>{formik.errors.passwordConfirm}</div>
                    ) : null}

                </div>
                <Button  type='submit' variant="contained" fullWidth>Submit</Button>
                <h6 className='mt-3 text-center text-primary ' onClick={()=>{handleClose();openLoginModal()}}><u>Already have an account?</u></h6>

            </form>
        </div>

    )
}

export default Signup
