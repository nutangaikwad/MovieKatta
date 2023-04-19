import React,{useEffect} from 'react'
import { TextField,Button } from "@mui/material"
import { useFormik } from 'formik'

import * as Yup from 'yup';
import { async } from '@firebase/util';
import axios from 'axios';

const Signup = ({openSignUpModal,handleClose,setShowMessage}) => {


    const validation = Yup.object({
      
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Password is required'),
    })
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validation,
        onSubmit:async (values) => {
            try{
                const data = await axios.post("http://43.204.198.19/api/v1/user/login",values).then((res)=>{
                 console.log(res.data)
                 localStorage.setItem("user",JSON.stringify(res.data))
                 handleClose()
                 setShowMessage({
                    message: "User Logged In  Successfully",
                    visible: true,
                    type: "success",
                  });

                }).catch(()=>{
                    setShowMessage({
                        message: "Something went wrong",
                        visible: true,
                        type: "error",
                      });                })
            }catch{
                
            }
        },
    })
    return (
        <div>
            <div><h2 style={{ textAlign: 'center' }}> Login </h2></div>
            <form onSubmit={formik.handleSubmit}>

               
                
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
                              <Button  type='submit' variant="contained" fullWidth>Submit</Button>
            </form>
            <h6 className='mt-3 text-center text-primary ' onClick={()=>{handleClose() ;openSignUpModal()}}><u>Sign up for hotpot?</u></h6>
        </div>

    )
}

export default Signup
