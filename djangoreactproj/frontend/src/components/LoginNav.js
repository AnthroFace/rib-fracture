import React from 'react';
import PropTypes from 'prop-types';
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./../App.css";
import "./../text.css";


function LoginNav(props) {
  const logged_out_nav = (
    <div>
       <div style ={{      left: "45%",
      top: "5%",
      transform: "translate(0%, 42%)"  , position : "fixed"}}>
      <Box borderTop={0} borderBottom={0} >
        <img
          variant="h1"
          component="h2"
          height="200"
          src="/images/AnthrofaceLogo1.png"
          alt=""
        />
      </Box>
      </div>
    <div style ={{      left: "45%",
      top: "40%",
      transform: "translate(0%, 0%)"  , position : "absolute"}}>
    <div className = "buttons" style = {{padding : "0px 0px 0px 0px"}}>
      <div  style ={{padding : "5px"}}>
          <Button 
              style={{
                color: "#963A2F",
                backgroundColor: "#fffee9",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              onClick={() => props.display_form('login')}
            >
              Login
            </Button>
      </div>
      <div  style ={{padding : "5px"}}>
            <Button 
              style={{
                // borderRadius: 35,
                color: "#963A2F",
                backgroundColor: "#fffee9",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              onClick={() => props.display_form('signup')}
            >
              Sign Up
            </Button>
      </div>
      {/* <div  style ={{padding : "5px"}}>
            <Button 
              style={{
                // borderRadius: 35,
                color: "#963A2F",
                backgroundColor: "#fffee9",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              onClick={() => props.display_form('signup')}
            >
              Sign Up
            </Button>
      </div> */}
       {/* <div  style ={{padding : "5px"}}>
            <Button 
              style={{
                // borderRadius: 35,
                color: "#963A2F",
                backgroundColor: "#fffee9",
                padding: "18px 36px",
                fontSize: "15px",
              }}
              variant="contained"
              size="large"
              onClick={() => props.display_form('adminlogin')}
            >
              Admin
            </Button>
      </div> */}

    </div>
    </div>
     </div>
  );

  const logged_in_nav = (
    <div  style ={{textAlign: "right", padding: "5px"}}>
    <Button 
      style={{
        // borderRadius: 35,
        color: "#963A2F",
        backgroundColor: "#fffee9",
        padding: "12px 20px",
        fontSize: "10px",
      }}
      variant="contained"
      size="large"
      onClick={props.handle_logout}
    >
      Logout
    </Button>
  </div>
  );
  return <div>{props.logged_in ? logged_in_nav : logged_out_nav}</div>;
}



LoginNav.propTypes = {
  logged_in: PropTypes.bool.isRequired,
  display_form: PropTypes.func.isRequired,
  handle_login: PropTypes.func.isRequired,
  handle_logout: PropTypes.func.isRequired
};


export default LoginNav;
/*     <li onClick={() => props.display_form('login')}>Login</li>
      <li onClick={() => props.display_form('signup')}>Sign Up</li>*/