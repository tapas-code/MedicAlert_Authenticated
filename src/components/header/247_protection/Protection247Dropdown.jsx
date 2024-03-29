import React, { useState } from "react";
import { Nav, Collapse, Fade } from "react-bootstrap";

const Protection247Dropdown = () => {
    const [open, setOpen] = useState(false);
    const [transitionDuration, setTransitionDuration] = useState(300);

    const handleMouseEnter = () => {
        setOpen(true);
        setTransitionDuration(300);
    }

    const handleMouseLeave = () => {
        setOpen(false);
        setTransitionDuration(0);
    }

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-controls="protection-247-text"
            aria-expanded={open}
            className=" hover--div">
            <Nav.Link className="hover--link position-relative">
                24/7 Protection
            </Nav.Link>

            <Collapse in={open} timeout={transitionDuration}>
                <div
                    id="protection-247-text"
                    className=" bg-white hover--body position-absolute rounded-bottom-3">
                    <p className="fs-6 fw-medium pt-4 px-3 ">Renew Plan</p>
                    <p className="fs-6 fw-medium px-3 ">Compare Plan</p>
                </div>
            </Collapse>
        </div>
    );
};

export default Protection247Dropdown;
