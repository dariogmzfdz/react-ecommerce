import { useState } from "react";
import "./Profile.css";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import Button2 from "@mui/material/Button";
import Modal from "react-bootstrap/Modal";
import LogOutButton from "../LogIn/LogOut.js";

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (isLoading) {
    return <div> Loading... </div>;
  }

  return (
    isAuthenticated && (
      <div>
        <Button2 onClick={handleShow}>
          <img className="profile-image" src={user.picture} alt="Profile" />
        </Button2>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={user.picture} alt="Profile" />
            <h1>{user.name}</h1>
            <p>{user.email}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              <LogOutButton />
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  );
};

export default Profile;
