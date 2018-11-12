import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../Common/EmotionBarChart.css";
import Prototypes from "prop-types";
import { connect } from "react-redux";
import { fetchSuccessData } from "../../actions/successRateAction";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import { VictoryPie, VictoryTheme, VictoryTooltip } from "victory";

import { bugs, website, server } from "variables/general.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import avatar from "assets/img/sidebar.jpg";
import like from "assets/img/like.png";
import love from "assets/img/love.png";
import haha from "assets/img/haha.png";
import wow from "assets/img/wow.png";
import sad from "assets/img/sad.png";
import angry from "assets/img/angry.png";

class SuccessRate extends Component {
  state = {
    metric1: 100,
    metric2: 100,
    emotionColor: "#6E9934",
    statsColor: "#6E9934"
  };

  componentWillMount() {
    // this.props.fetchSuccessData();
  }

  componentDidMount() {
    if (this.props.successRate) {
      if (this.props.successRate.Emotions === "0") {
        this.setState({ emotionColor: "red" });
      } else if (this.props.successRate.Emotions === "1") {
        this.setState({ emotionColor: "orange" });
      } else if (this.props.successRate.Emotions === "2") {
        this.setState({ emotionColor: "green" });
      }

      if (this.props.successRate.Statistics === "0") {
        this.setState({ statsColor: "red" });
      } else if (this.props.successRate.Statistics === "1") {
        this.setState({ statsColor: "orange" });
      } else if (this.props.successRate.Statistics === "2") {
        this.setState({ statsColor: "green" });
      }
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className="root">
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>
                  Predicted Success of the Post
                </h4>
              </CardHeader>
              <CardBody>
                <div>
                  <div
                    style={{
                      height: "200px",
                      float: "left",
                      marginLeft: "8px"
                    }}
                  >
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "0 auto"
                      }}
                    >
                      <VictoryPie
                        padAngle={0}
                        labelComponent={<VictoryTooltip />}
                        innerRadius={60}
                        width={200}
                        height={200}
                        data={[
                          {
                            key: "",
                            y: this.state.metric1,
                            label: this.state.metric1 + "%"
                          },
                          {
                            key: "",
                            y: 100 - this.state.metric1,
                            label: 100 - this.state.metric1 + "%"
                          }
                        ]}
                        colorScale={[this.state.statsColor, "#d8d4d4"]}
                      />
                    </div>
                    <h6 style={{ textAlign: "center", color: "#666666" }}>
                      Based on Post Details
                    </h6>
                  </div>
                  <div
                    style={{
                      height: "200px",
                      float: "left",
                      width: "150px",
                      marginLeft: "30px"
                    }}
                  >
                    <div
                      style={{
                        width: "150px",
                        height: "150px",
                        margin: "0 auto"
                      }}
                    >
                      <VictoryPie
                        padAngle={0}
                        labelComponent={<VictoryTooltip />}
                        innerRadius={60}
                        width={200}
                        height={200}
                        data={[
                          {
                            key: "Success",
                            y: this.state.metric2,
                            label: this.state.metric2 + "%"
                          },
                          {
                            key: "Success",
                            y: 100 - this.state.metric2,
                            label: 100 - this.state.metric2 + "%"
                          }
                        ]}
                        colorScale={[this.state.emotionColor, "#d8d4d4"]}
                        paddingLeft="10px"
                      />
                    </div>
                    <h6
                      style={{
                        textAlign: "center",
                        color: "#666666",
                        width: "167px"
                      }}
                    >
                      Based on Emotion Analysis
                    </h6>
                  </div>
                  <div
                    style={{
                      height: "200px",
                      float: "right",
                      width: "150px"
                    }}
                  >
                    <div>
                      <hr
                        style={{
                          width: "28px",
                          borderColor: "red",
                          float: "right",
                          marginTop: "11px"
                        }}
                      />
                      <span style={{ marginLeft: "10px" }}>Unsuccessful</span>
                    </div>
                    <div>
                      <hr
                        style={{
                          width: "28px",
                          borderColor: "orange",
                          float: "right",
                          marginTop: "11px"
                        }}
                      />
                      <span style={{ marginLeft: "10px" }}>Average</span>
                    </div>
                    <div>
                      <hr
                        style={{
                          width: "28px",
                          borderColor: "green",
                          float: "right",
                          marginTop: "11px"
                        }}
                      />
                      <span style={{ marginLeft: "10px" }}>Successful</span>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              {/* <CardHeader color="success">
                <h4 className={classes.cardTitleWhite}>Predicted Success of the Post</h4>
              </CardHeader> */}
              <CardBody>
                {/* <CardAvatar> */}
                {/* <a href="#pablo" onClick={e => e.preventDefault()}> */}
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "60px",
                      height: "87px",
                      paddingRight: "35px"
                    }}
                  >
                    <img
                      style={{
                        width: "60px",
                        height: "87px",
                        paddingRight: "30px"
                      }}
                      src={like}
                      alt="..."
                    />
                    <b>
                      <p style={{ textAlign: "center" }}>10</p>
                    </b>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "87px",
                      paddingRight: "35px"
                    }}
                  >
                    <img
                      style={{
                        width: "60px",
                        height: "87px",
                        paddingRight: "30px"
                      }}
                      src={love}
                      alt="..."
                    />{" "}
                    <b>
                      <p style={{ textAlign: "center" }}>5</p>
                    </b>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "87px",
                      paddingRight: "35px"
                    }}
                  >
                    <img
                      style={{
                        width: "60px",
                        height: "87px",
                        paddingRight: "30px"
                      }}
                      src={haha}
                      alt="..."
                    />
                    <b>
                      <p style={{ textAlign: "center" }}>0</p>
                    </b>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "87px",
                      paddingRight: "35px"
                    }}
                  >
                    <img
                      style={{
                        width: "60px",
                        height: "87px",
                        paddingRight: "30px"
                      }}
                      src={wow}
                      alt="..."
                    />
                    <b>
                      <p style={{ textAlign: "center" }}>3</p>
                    </b>
                  </div>
                  <div
                    style={{
                      width: "60px",
                      height: "87px",
                      paddingRight: "30px"
                    }}
                  >
                    <img
                      style={{
                        width: "60px",
                        height: "87px",
                        paddingRight: "30px"
                      }}
                      src={sad}
                      alt="..."
                    />
                    <b>
                      <p style={{ textAlign: "center" }}>0</p>
                    </b>
                  </div>
                  <div style={{ width: "60px", height: "87px" }}>
                    <img
                      style={{ width: "60px", height: "87px" }}
                      src={angry}
                      alt="..."
                    />
                    <b>
                      <p style={{ textAlign: "center" }}>0</p>
                    </b>
                  </div>
                </div>
                {/* </a> */}
                {/* </CardAvatar> */}
                <div style={{ paddingTop: "50px" }}>
                  <p style={{ color: "#aaa9ad", float: "left" }}>
                    Overall Shares - <b style={{ color: "#000000" }}>0</b>
                  </p>
                  <p style={{ color: "#aaa9ad", float: "right" }}>
                    Overall Comments - <b style={{ color: "#000000" }}>15</b>
                  </p>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

SuccessRate.propTypes = {
  fetchSuccessData: Prototypes.func.isRequied,
  successData: Prototypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  successRate: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  successData: state.success.item
});

export default connect(
  mapStateToProps,
  { fetchSuccessData }
)(withStyles(dashboardStyle)(SuccessRate));
