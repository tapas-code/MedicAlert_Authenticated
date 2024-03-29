import React from "react";

const Left = () => {
    return (
        <>
            <p className="h--font fw-medium ">
                <span className="text-nowrap" style={{color:'#ff5050'}}>Peace of mind</span>
                <br />
                <span className="secondary--color">
                    in every
                    <br /> moment.
                </span>
            </p>
            <p className=" fw-medium lh-sm">
                24/7 lifesaving protection,
                <span className="fw-normal fst-italic">
                    right when you need it.
                </span>
                Confidence and safety,
                <span className="fw-normal fst-italic">always.</span>
            </p>
            <button className="min-w-50 align-self-start bg--secondary text-white rounded-5 py-2 px-4 secondary--color font--small fw-medium">
                Get Protected
            </button>
        </>
    );
};

export default Left;
