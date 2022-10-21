import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FaGoogle,FaGithub,FaFacebook,FaTwitter,FaTwitch,FaWhatsapp } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import BrandCarusel from "./BrandCarusel";
const RightSideNav = () => {


  const{providerLogin} = useContext(AuthContext)

  const googleProvider = new GoogleAuthProvider()

  const handelGoogleSignin =()=>{
    providerLogin(googleProvider)
    .then(res=>{
      const user = res.user;
      console.log(user);
    }).catch(error=>{
      console.error(error)
    })
  }



  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handelGoogleSignin} variant="outline-primary"><FaGoogle/> Log In With Google</Button>
        <Button variant="outline-info"><FaGithub/> Log In With Github</Button>
      </ButtonGroup>
        <div className="mt-4">
            <h5>Find us on:</h5>
            <ListGroup>
      <ListGroup.Item className="mb-3"><FaFacebook/> FaceBook</ListGroup.Item>
      <ListGroup.Item className="mb-3"><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item className="mb-3"><FaWhatsapp/> Whatsapp</ListGroup.Item>
      <ListGroup.Item className="mb-3"><FaTwitch/> Twitch</ListGroup.Item>
    </ListGroup>
    <div>
        <BrandCarusel/>
    </div>
        </div>
    </div>
  );
};

export default RightSideNav;
