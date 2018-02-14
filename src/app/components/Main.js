import React, { Component } from "react";

export class Main extends Component {
    render(){
        return (
            <div>
                <div className="row">
                    <div className="col-xl-12">
                        <h1>The Main page</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <button className="btn btn-primary" onClick={() => this.props.changeUsername('Anna')}>
                            Change the username
                        </button >
                    </div>
                </div>
            </div>
        )
    }
}