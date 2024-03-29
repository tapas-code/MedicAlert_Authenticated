import React, { useState } from "react";
import { Button, Offcanvas, Nav } from "react-bootstrap";
import SidebarCard from "./SidebarCard";
import MedicalIdSidebar from "./MedicalIdSidebar";
import Protection247Sidebar from "./Protection247Sidebar";
import MemberStoriesSidebar from "./MemberStoriesSidebar";

const MainSidebar = ({
    showOffcanvas,
    handleShowOffcanvas,
    handleCloseOffcanvas,
}) => {
    const [showMedicalIdOffcanvas, setShowMedicalIdOffcanvas] = useState(false);
    const [showProtection247Offcanvas, setShowProtection247Offcanvas] =
        useState(false);
    const [showMemberStoriesOffcanvas, setShowMemberStoriesOffcanvas] =
        useState(false);

    const handleShowMedicalIdOffcanvas = () => {
        handleCloseOffcanvas();
        setShowMedicalIdOffcanvas(true);
    };
    const handleShowProtection247Offcanvas = () => {
        handleCloseOffcanvas();
        setShowProtection247Offcanvas(true);
    };
    const handleShowMemberStoriesOffcanvas = () => {
        handleCloseOffcanvas();
        setShowMemberStoriesOffcanvas(true);
    };
    const handleCloseAllOffcanvas = () => {
        handleCloseOffcanvas();
        setShowMedicalIdOffcanvas(false);
        setShowProtection247Offcanvas(false);
        setShowMemberStoriesOffcanvas(false);
    };
    const goBackToParentOffcanvas = () => {
        handleShowOffcanvas();
        setShowMedicalIdOffcanvas(false);
        setShowProtection247Offcanvas(false);
        setShowMemberStoriesOffcanvas(false);
    };

    return (
        <>
            <Offcanvas
                show={showOffcanvas}
                onHide={handleCloseOffcanvas}
                placement="end"
                className="side--bar rounded-start-5">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title className=" font--medium">
                        Menu
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <h6
                        className="text-primary sidebar--header mb-3 fw-bold"
                        style={{ fontSize: ".7rem" }}>
                        EXPLORE
                    </h6>
                    <SidebarCard title={"How it Works"} />
                    <SidebarCard
                        title={"Medical IDs"}
                        handleClick={handleShowMedicalIdOffcanvas}
                    />
                    <SidebarCard
                        title={"24/7 Protection"}
                        handleClick={handleShowProtection247Offcanvas}
                    />
                    <SidebarCard
                        title={"Member Stories"}
                        handleClick={handleShowMemberStoriesOffcanvas}
                    />
                    <Button
                        className="w-100 rounded-5 mb-4 py-2 font--small fw-medium"
                        variant="outline-dark">
                        Donate ❤️
                    </Button>
                    <h6
                        className="text-primary font--small sidebar--header mb-3 mt-2 fw-bold"
                        style={{ fontSize: ".7rem" }}>
                        OUR STORY
                    </h6>
                    <Nav.Link className="fw-medium mb-4 font--medium">
                        Who We Are
                    </Nav.Link>
                    <Nav.Link className="fw-medium mb-4 font--medium">
                        Affiliates - Worldwide Locations
                    </Nav.Link>
                    <Nav.Link className="fw-medium mb-4 font--medium">
                        Partners
                    </Nav.Link>
                </Offcanvas.Body>
            </Offcanvas>

            {/* OFF CANVAS FOR MEDICAL ID'S  */}
            {showMedicalIdOffcanvas && (
                <MedicalIdSidebar
                    show={showMedicalIdOffcanvas}
                    onHide={handleCloseAllOffcanvas}
                    onBack={goBackToParentOffcanvas}
                />
            )}

            {/* OFF CANVAS FOR 24/7 PROTECTION  */}
            {showProtection247Offcanvas && (
                <Protection247Sidebar
                    show={showProtection247Offcanvas}
                    onHide={handleCloseAllOffcanvas}
                    onBack={goBackToParentOffcanvas}
                />
            )}

            {/* OFF CANVAS FOR MEMBER STORIES  */}
            {showMemberStoriesOffcanvas && (
                <MemberStoriesSidebar
                    show={showMemberStoriesOffcanvas}
                    onHide={handleCloseAllOffcanvas}
                    onBack={goBackToParentOffcanvas}
                />
            )}
        </>
    );
};

export default MainSidebar;
