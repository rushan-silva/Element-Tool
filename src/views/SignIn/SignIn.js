import React, { Component } from "react";
import PropTypes from "prop-types";
import FacebookProvider, { Login } from "react-facebook";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Service from "../../services/auth";
import Typography from "@material-ui/core/Typography";
import "./signIn.css";
import Image from "../../images/signin.png";
import { Link } from "react-router-dom";
import ErrorAlert from "../../components/AlertBars/AlertBarError";
import { withRouter } from "react-router";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
      popErrorAlert: false,
      errorMsg: "Invalid Credentials Entered"
    };
  }

  handleChange = key => event => {
    const promise = new Promise(resolve => {
      this.setState({ [key]: event.target.value });
      resolve(true);
    });

    promise.then(resolve => {
      if (resolve) {
        if (!this.checkErrors()) {
          this.setState({ enableSubmit: true });
        } else {
          this.setState({ enableSubmit: false });
        }
      }
    });
  };

  checkErrors = () => {
    if (this.state.email === "" || this.state.password === "") {
      return true;
    } else {
      return false;
    }
  };

  setCookie = (cName, cValue, exDays) => {
    let d = new Date();
    d.setTime(d.getTime() + exDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
  };

  handleSubmit = data => {
    const userObj = {
      email: this.state.email,
      password: this.state.password,
      facebookAccessToken: data.tokenDetail.accessToken
    };

    Service.LogIn(userObj)
      .then(response => {
        if (response.success) {
          this.setCookie("session_id", response.data.accessToken, 10);
          this.setCookie("user_id", response.data.userId, 10);
          this.setCookie(
            "facebookAccessToken",
            response.data.facebookAccessToken,
            10
          );
          const {
            history: { push }
          } = this.props;

          push("app/dashboard");
        } else {
          this.setState({ popErrorAlert: true });
        }
      })
      .catch(err => {
        console.log("err: ", err);
      });
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
        <CssBaseline />
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
          <div className="Layout">
            <Paper className="Paper">
              <Avatar className="Avatar">
                <LockIcon />
              </Avatar>
              <Typography variant="headline">Sign in</Typography>
              <form className="Form">
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="email">Email Address</InputLabel>
                  <Input
                    id="email"
                    name="email"
                    autoComplete="email"
                    onChange={this.handleChange("email")}
                    autoFocus
                  />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    color="#6E9934"
                    name="password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={this.handleChange("password")}
                  />
                </FormControl>
                <FacebookProvider appId="247872615946957">
                  <Login
                    scope="email"
                    onResponse={this.handleSubmit}
                    // onError={this.handleError}
                  >
                    <Button
                      type="submit"
                      fullWidth
                      variant="raised"
                      color="primary"
                      className="Submit"
                      style={{ marginTop: "20px" }}
                      disabled={!this.state.enableSubmit}
                    >
                      Sign in
                    </Button>
                  </Login>
                </FacebookProvider>
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.87)"
                  }}
                >
                  <Button style={{ marginLeft: "135px", marginTop: "20px" }}>
                    Sign Up
                  </Button>
                </Link>
                <div style={{ marginLeft: "95px", marginTop: "20px" }}>
                  <a className="text" href="/">
                    Forgot your password?
                  </a>
                </div>
              </form>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

SignIn.propTypes = {
  history: PropTypes.any
};

export default SignIn;
