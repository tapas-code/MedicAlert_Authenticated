import React from "react";
import { Container, Image } from "react-bootstrap";
import UserDenied from "../assets/svg/denied.svg";
import { useMediaQuery } from "react-responsive";

const Forbidden = () => {
    const isSmallScreen = useMediaQuery({ maxWidth: 991 });
    return (
        <>
            <Container
                fluid
                className={`vh-100 bg-white position-fixed top-0 d-flex justify-content-center  align-items-center ${isSmallScreen?'flex-column':'flex-row'}`}>
                <Image fluid src={UserDenied} alt="user denied" />
                <div className="d-flex flex-column justify-content-start align-items-center ">
                    <h1
                        style={{ fontSize: "12rem", marginTop: "-2.5rem" }}
                        className="fw-bold ">
                        403
                    </h1>
                    <h1
                        className=""
                        style={{ letterSpacing: ".5rem", marginTop: "-2rem" }}>
                        Forbidden
                    </h1>
                </div>
            </Container>
        </>
    );
};

export default Forbidden;
