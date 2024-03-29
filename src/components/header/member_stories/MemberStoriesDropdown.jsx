import React, { useState } from "react";
import { Nav, Collapse } from "react-bootstrap";
import ms_data from '../../../data/MemberStoriesData'

const MemberStoriesDropdown = () => {
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
            aria-controls="member-stories-text"
            aria-expanded={open}
            className=" hover--div">
            <Nav.Link className="hover--link position-relative">
                Member Stories
            </Nav.Link>

            <Collapse in={open} timeout={transitionDuration}>
                <div
                    id="member-stories-text"
                    className=" bg-white hover--body position-absolute rounded-bottom-3 pt-3">
                    {ms_data && ms_data.map(d => (<p key={d.id} className="fs-6 fw-medium px-3 lh-sm text-fade">{d.title}</p>))}
                </div>
            </Collapse>
        </div>
    );
};

export default MemberStoriesDropdown;
