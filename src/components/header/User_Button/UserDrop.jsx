import React, { useState } from "react";
import { Collapse, Image } from "react-bootstrap";
import UserImg from "../../../assets/images/face.jpg";
import { useKeycloak } from "@react-keycloak/web";

const UserDrop = ({ setShowOverlay }) => {
    const [open, setOpen] = useState(false);
    const [transitionDuration, setTransitionDuration] = useState(300);
    const {keycloak} = useKeycloak();

    const handleMouseEnter = () => {
        setOpen(true);
        setTransitionDuration(300);
        setShowOverlay && setShowOverlay(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
        setTransitionDuration(0);
        setShowOverlay && setShowOverlay(false);
    };

    const signOut = () => {
        keycloak.logout();
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-controls="user-dropdown"
            aria-expanded={open}
            className="user--div">
            <Image
                fluid
                src={UserImg}
                alt="user"
                width={32}
                className="rounded-circle border border-primary user--img"
            />

            <div className="position-relative">
                <Collapse
                    in={open}
                    timeout={transitionDuration}
                    className="position-absolute end-0">
                    <div
                        className="bg-white rounded-bottom-3 user--body pt-4"
                        id="user-dropdown"
                        style={{ width: "max-content" }}>
                        <p className="fs-6 fw-medium px-3">View Profile</p>
                        <p className="fs-6 fw-medium px-3" onClick={signOut}>
                            Sign Out
                        </p>
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default UserDrop;
