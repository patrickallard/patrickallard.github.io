import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    // const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const email = this.props.data.email;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              {/* <img
                className="profile-pic"
                src={profilepic}
                alt="Profile Pic"
              /> */}
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span> {city}, {state} </span>
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
