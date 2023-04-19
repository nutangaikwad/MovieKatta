import React,{useState,useEffect} from 'react'
import './Navbar.css'
import '../Login/Login.css'
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom'
import Search from '../Search/Search'
import Login from '../Login/Login'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { IconButton,Menu,MenuItem } from '@mui/material'
import Modal from '@mui/material/Modal';
import CustomizedSnackbars from '../Toast/Toast'
import Signup from '../Login/Signup'
const Navbar = () => {
  const [ auth, setAuth] = useState(localStorage.getItem('user')? true : false)
  const{category} = useParams()
  const [buttonPopup, setButtonPopup] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [otpPopup, setOtpPopup] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [showMessage, setShowMessage] = useState({
    message: "",
    visible: false,
    type: "success",
  });
  const [openLogin, setOpenLogin] = React.useState(false);
  const openLoginModal = () => setOpenLogin(true);
  const CloseLoginModal = () => setOpenLogin(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate()
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (e.target.value === "1234") {
        setOtpPopup(false);
        navigate("/");
      }
      else alert("enter valid")
    }
  }
  let user = JSON.parse(localStorage.getItem("user"))

  const checkIfLoggedIn = async () => {
    if (user) {
      setIsLoggedIn(true)    }
  };
  useEffect(() => {
    checkIfLoggedIn();
  }, [user]);

  const logOutUser = ()=>{
    localStorage.removeItem('user')
    setAuth(false)
    navigate('/')
  }
  const handleLogin = async (googleData)=>{
    // const res2 = await axios.post('http://localhost:7000/google/login',{
    // const res2 = await axios.post('https://hotstar-v.herokuapp.com/google/login',{
    //   token : googleData.tokenId
    // })
    // localStorage.setItem('user', JSON.stringify(res2.data))
    setAuth(true)
    setButtonPopup(false)
    navigate('/profile')
  }
  const handleFailure = (err)=>{
    // console.log({ failure : err})
    alert(`Login failed`)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const settings = ['Logout'];

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const Logout= () => {
    localStorage.clear()
    let user = JSON.parse(localStorage.getItem("userCredential"))
     if(!user){
      setIsLoggedIn(false)
     }
    handleCloseUserMenu()
  }
  return (
    <>
      <div className='nav'>
        <div className="nav-left">
          <div>
            <Link to="/">
              <p className='m-0'><b>HotPot</b></p>
              {/* <img
                className="disney-img"
                src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
                alt=""
                /> */}
            </Link>
          </div>
          <div className="dropdown">
            <Link className="link" to="/" >Home</Link>
          </div>
          <div className="dropdown">
            <Link className="link" to="/recent">Recent</Link>
          </div>
          <div className="dropdown">
            <Link className="link" to="/trending">Trending</Link>
          </div>
          <div className="small">
            <Link to="/movies">Movies</Link>
          </div>
        </div>
        <div className="nav-right">
          <Search />  
         {!isLoggedIn ? <div  onClick={openLoginModal}>
            Login
          </div>:
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt={user?.data?.user?.firstName} src="/static/images/avatar/2.jpg"  sx={{color:'purple'}}/>
        </IconButton>
        
          }       
        </div>
      </div>
      <div>
      
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Signup handleClose={handleClose} openLoginModal={openLoginModal} setShowMessage={setShowMessage}/>
               </Box>
      </Modal>
      <Modal
        open={openLogin}
        onClose={CloseLoginModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Login openSignUpModal={handleOpen} handleClose={CloseLoginModal} setShowMessage={setShowMessage}/>
               </Box>
      </Modal>
      <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={()=>{Logout()}}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
            {showMessage.visible && (
        <CustomizedSnackbars
          showMessage={showMessage}
          setShowMessage={setShowMessage}
        />
      )}
    </>
  )
}

export default Navbar
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0',
  boxShadow: 24,
  p: 3,
};