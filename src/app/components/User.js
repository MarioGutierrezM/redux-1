import React, { Component } from "react";

export class User extends Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xl-12">
                        <h1>The user page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <p>User name: {this.props.username}</p>
                    </div>
                </div>
            </div>
        )
    }
}