import React, { Component } from "react";
import BlueCheck from "../../src/blueCheck.png"
import logo from "../../src/logo.png";

export default class Sketch extends Component {
    render() {
        return <div style={{ display: "flex", margin: "20vh auto 20vh", border: "solid lightgray 1px", width: "50vw", padding: "3vh 10vw 3vh 2vw", overflow: "auto" }}>
            <div style={{ flex: 1 }} >
            <img className="logo" src={logo}></img>
            </div>
            <div style={{ flexFlow: "column wrap", flex: 5 }}>
              <div>
                <span className="header">
                How much time do you plan to spend taking Acne courses
                and lessons?
                </span>
              </div>
              <ul style={{margin: "1em 0 1em 0"}}>
                <li><span className="tab"/>About an hour a day.</li>
                <li><span className="tab" />More than 1 hour per day.</li>
                <li><span className="tab" />1 to 3 hours per week.</li>
                <li><span className="tab" />I don’t plan to train regularly.</li>
              </ul>
              <div className="grayline"></div>
              <div style={{ flexDirection: "row", marginTop: "2vh" }}>
                <div className="button">Next Question</div>
                <div className="button">Done</div>
              </div>
            </div>
          </div>;
    }
}

