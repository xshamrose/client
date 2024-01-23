import React from "react";
import "../Home/Home.css";
import { useNavigate } from "react-router-dom";
// import Navbar from "../Navbar";
// import picture from "../../assets/Img/picture.svg";
// import drag from "../../assets/Img/dragdrop.png";
// import mobile from "../../assets/Img/mobile.png";
// import editor from "../../assets/Img/editor.png";
import Footer from "../Footer/Footer";
import loginimg from "../../assets/Img/signup.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* <Navbar /> */}
      {/* <div className="header">
        <div className="picture">
          <img alt="pic" src={picture} />
        </div>
        <div className="content">
          <h1>Form Revolution</h1>
          <p>
            Welcome to Form Revolution, where simplicity meets functionality in
            the world of form creation! Our innovative form builder empowers you
            to effortlessly design and customize forms tailored to your unique
            needs. Whether you're a business owner, a student, or anyone in
            between, our user-friendly platform ensures a seamless and intuitive
            experience. Say goodbye to complex coding and tedious form-building
            processes with form revolution, creating professional and
            interactive forms is as easy as a few clicks. Join us on the journey
            to streamline your data collection and elevate your online presence.
            Get started with Form Revolution and transform the way you build
            forms today!
          </p>
        </div>
      </div>
      <h1>
        <center>Features</center>
      </h1>

      <div className="build-total">
        <div className="build">
          <h3>Ultimate </h3>
          <span>
            <h2>Form Builder In</h2>{" "}
          </span>{" "}
          <span>
            <h1> Form Revolution</h1>
          </span>
        </div>
        <div className="icon-total">
          <div className="mobile">
            <img alt="responsive" src={mobile} />
            <p>
              Responsive & <br /> Mobile friendly
            </p>
          </div>
          <div className="drag">
            <img alt="drag" src={drag} />
            <p>
              Drag & Drop <br />
              Form Builder
            </p>
          </div>
          <div className="system">
            <img alt="editor" src={editor} />
            <p>
              Build-in <br />
              Style Editor
            </p>
          </div>
        </div>
      </div> */}
      <div className="container_overall">
        <div className="container_top">
          <img alt="Login_template" src={loginimg} className="login_img" />
          <div className="content">
            <div className="animation-container page-animation">
              <span className="word">Welcome to</span>
              <span className="word">Student portal</span>
              <span className="word"></span>
              <span className="word-log">Login to access your account</span>
            </div>
            <div className="group">
              <button
                onClick={() => {
                  navigate("/userportal");
                }}
              >
                Continue as Student
              </button>
              <button
                onClick={() => {
                  navigate("/Admin");
                }}
              >
                Continue as Admin
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
