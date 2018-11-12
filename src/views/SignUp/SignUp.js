import React, { Component } from "react";
import FacebookProvider, { Login } from "react-facebook";
import { Link } from "react-router-dom";
import { Input, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Icon from "@material-ui/core/Icon";
import CircularProgress from "@material-ui/core/CircularProgress";
// import Image from "../../images/signIn_wallpaper.jpg";
import GooglePlusIcon from "../../images/icons8-google-plus-26.png";
import TwitterIcon from "../../images/icons8-twitter-26.png";
import FbIcon from "../../images/facebook.png";
import Service from "../../services/auth";
import SuccessAlert from "../../components/AlertBars/AlertBarSuccess";
import ErrorAlert from "../../components/AlertBars/AlertBarError";
import "./SignUp.css";
import Image from "../../images/signin.png";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      email: "",
      password: "",
      confirmPassword: "",
      popSuccessAlert: false,
      popErrorAlert: false,
      loading: false,
      errorMsg: "",
      enableSubmit: false
    };
  }

  handleChange = key => event => {
    const promise = new Promise(resolve => {
      this.setState({ [key]: event.target.value });
      resolve(true);
    });

    promise.then(resolve => {
      if (resolve) {
        if (
          !this.checkErrors() &&
          this.state.confirmPassword === this.state.password
        ) {
          console.log("here");
          this.setState({ enableSubmit: true });
        } else {
          this.setState({ enableSubmit: false });
        }
      }
    });
  };

  checkErrors = () => {
    if (
      this.state.email === "" ||
      this.state.fname === "" ||
      this.state.lname === "" ||
      this.state.password === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleResponse = data => {
    console.log('data: ', data);
    this.setState({ loading: true });
    const userObj = {
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      password: this.state.password,
      facebookAccessToken: data.tokenDetail.accessToken
    };

    Service.SignUp(userObj)
      .then(response => {
        this.setState({ loading: false });
        if (response.success) {
          this.setState({ popSuccessAlert: true });
        }
      })
      .catch(err => {
        console.log("err: ", err);
      });
    // if (!this.checkErrors) {
    //     Service.SignUp(userObj).then(response => {
    //         this.setState({ loading: false });
    //         if (response.success) {
    //             this.setState({ popSuccessAlert: true });
    //         }
    //     }).catch(err => {
    //         console.log('err: ', err);
    //     });
    // } else {
    //     this.setState({ loading: false });
    //     this.setState({ popErrorAlert: true, errorMsg: 'Please fill all the required fields' });
    // }
  };

  handleError = error => {
    this.setState({ error });
  };

  closeSuccessAlertPopper = () => {
    this.setState({ popSuccessAlert: false });
  };

  closeErrorAlertPopper = () => {
    this.setState({ popErrorAlert: false });
  };

  render() {
    return (
      <div>
        <ErrorAlert
          close={this.closeErrorAlertPopper}
          open={this.state.popErrorAlert}
          message={this.state.errorMsg}
        />
        <SuccessAlert
          close={this.closeSuccessAlertPopper}
          open={this.state.popSuccessAlert}
          message="User has been created successfully"
        />
        <div
          style={{
            backgroundImage: `url(${Image})`,
            height: "100%",
            width: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
          }}
          className="Main"
        >
          <div id="login-box">
            <div className="left">
              <h1>Sign up</h1>

              <Input
                className="fieldStyle"
                type="text"
                name="fname"
                placeholder="First Name"
                onChange={this.handleChange("fname")}
              />
              <Input
                className="fieldStyle"
                type="text"
                name="lname"
                placeholder="Last Name"
                onChange={this.handleChange("lname")}
              />
              <Input
                className="fieldStyle"
                type="text"
                name="email"
                placeholder="Email"
                onChange={this.handleChange("email")}
              />
              <Input
                className="fieldStyle"
                type="password"
                name="password"
                placeholder="Password"
                onChange={this.handleChange("password")}
              />
              <Input
                className="fieldStyle"
                type="password"
                name="password2"
                placeholder="Retype password"
                onChange={this.handleChange("confirmPassword")}
              />

              <div style={{ display: "flex" }}>
                <div className="col-md-3">
                  <FacebookProvider appId="247872615946957">
                    <Login
                      scope="email"
                      onResponse={this.handleResponse}
                      onError={this.handleError}
                    >
                      <Button
                        className="submitBtn"
                        variant="outlined"
                        color="primary"
                        disabled={
                          this.state.loading || !this.state.enableSubmit
                        }
                        style={{ padding: "5px" }}
                      >
                        {this.state.loading ? (
                          <CircularProgress
                            size={20}
                            style={{ color: "green" }}
                          />
                        ) : null}
                        Sign Me Up
                      </Button>
                    </Login>
                  </FacebookProvider>
                </div>
                <div className="col-md-3" disabled={this.state.loading}>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      color: "rgba(0, 0, 0, 0.87)"
                    }}
                  >
                    <Button
                      variant="outlined"
                      className="submitBtn"
                      style={{ marginLeft: "5px" }}
                    >
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="right">
              <span className="loginwith">
                Sign in with
                <br />
                social network
              </span>

              <button
                className="social-signin facebook"
                style={{ paddingBottom: "7px" }}
              >
                <img
                  src={FbIcon}
                  style={{ position: "relative", left: "-20px", top: "5px" }}
                />
                Log in with facebook
              </button>
              <button
                className="social-signin twitter"
                style={{ paddingBottom: "7px" }}
              >
                <img
                  src={TwitterIcon}
                  style={{ position: "relative", left: "-20px", top: "5px" }}
                />
                Log in with Twitter
              </button>
              <button
                className="social-signin google"
                style={{ paddingBottom: "7px" }}
              >
                <img
                  src={GooglePlusIcon}
                  style={{ position: "relative", left: "-20px", top: "5px" }}
                />
                Log in with Google+
              </button>

              <IconButton>
                <img src={FbIcon} />
              </IconButton>
            </div>
            <div className="or">OR</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
