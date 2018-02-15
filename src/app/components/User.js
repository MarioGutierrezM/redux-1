import React from "react";

export const User = (props) => {
        return (
            <div>
                <div className="row">
                    <div className="col-xl-12">
                        <h1>The user page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <p>User name: {props.username}</p>
                    </div>
                </div>
            </div>
        );
};