import React from 'react'
import { useEffect, useRef } from 'react'
import { useState } from 'react'
import './Questions.css'
import {Grid,Button,CardActions,Card,CardContent,TextField} from '@mui/material'
import QuestionCard from '../Cards/QuestionCard'
import {GetQuesionByMovies} from '../Api/index'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import CustomizedSnackbars from '../Toast/Toast'

export const Questions = ({row_title}) => {

  let user = JSON.parse(localStorage.getItem("user"))
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [postQuestion,setPostQuestion] = useState()

  const [showMessage, setShowMessage] = useState({
    message: "",
    visible: false,
    type: "success",
  });
  const checkIfLoggedIn = async () => {
    if (user) {
      setIsLoggedIn(true)    }
  };
  console.log("user",user?.data?.user)
  useEffect(() => {
    checkIfLoggedIn();
  }, [user]);
  const ref = useRef(null);

    const{id, category} = useParams()
    const [data, setData] = useState([])
    useEffect(() => { getData() }, [id])

    const getData = async () => {
      GetQuesionByMovies({id}).then((res)=>{
      setData(res?.data?.result)
    })
    }
    const PostQuestion = () => {
      if(!isLoggedIn){
        setShowMessage({
          message: "Please login first to post question",
          visible: true,
          type: "error",
        });
        return
      }
      let ans = {
        whichMovieId:id, 
        askedByWhichUser:user?.data?.user?._id,
        content:postQuestion,
        spoiler:"false"
      }
    
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*'
    };
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.post(
      `/api/v1/movies/${id}/postQues`,
      ans,headers
      ).then((res)=>{
      console.log(res)
      getData()
      setPostQuestion("")
      setShowMessage({
        message: "Quesiton Posted",
        visible: true,
        type: "success",
      });
    })
    }
  return (
    <>
          <h3 className="text-center mt-3 ">{row_title}</h3>
          <Grid xs={12} md={12} sx={{padding:0,margin:'20px 0px'}}>
              <Card sx={{  marginTop: '10px' }} style={{padding:"0px !important",textAlign:'left',boxShadow:`0 35px 50px 0px rgba(0, 0, 0, 0.2)`}}>

              <CardContent sx={{paddingBottom:'0px'}}>
                    <TextField
                    sx={{width:"100%"}}
                    id="outlined-multiline-flexible"
                    label="Write your Question"
                    multiline
                    minRows={3}
                    value={postQuestion}
                    maxRows={10}
                    onChange={(e)=>setPostQuestion(e.target.value)}
                  />                  </CardContent>
                  <CardActions sx={{display:"flex",alignItems:'right',justifyContent:'right', marginRight:'7px'}}>
                  <Button size="small"  type="submit" variant="contained" onClick={PostQuestion}>Post</Button>
                  </CardActions>
                </Card>
              </Grid> 
          {data?.map((el)=>
          <QuestionCard data={el} movieID = {id} userID={user?.data?.user?._id}/>
          )}
           {showMessage.visible && (
        <CustomizedSnackbars
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
      )}
    </>
  )
}
