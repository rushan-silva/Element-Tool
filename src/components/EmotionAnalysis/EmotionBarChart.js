import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "../Common/EmotionBarChart.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Prototypes from "prop-types";
import { connect } from "react-redux";
import { fetchEmotionData } from "../../actions/chartAction";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";
// import ChartistGraph from "react-chartist";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

import happy from "assets/img/happy.png";
// var delays2 = 80,
//   durations2 = 500;

class EmotionBarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchEmotionData();
  }

  render() {
    const { classes } = this.props;
    // const emailsSubscriptionChart = {
    //   data: {
    //     labels: [
    //       "Angry",
    //       "Fear",
    //       "Happy",
    //       "Guilt",
    //       "Sadness",
    //       "Shame",
    //       "Disgust"
    //     ],
    //     series: [[1208, 1398, 9800, 3908, 4800, 3800, 4300]]
    //   },
    //   options: {
    //     axisX: {
    //       showGrid: false
    //     },
    //     low: 0,
    //     high: 1000,
    //     chartPadding: {
    //       top: 0,
    //       right: 5,
    //       bottom: 0,
    //       left: 0
    //     }
    //   },
    //   responsiveOptions: [
    //     [
    //       "screen and (max-width: 640px)",
    //       {
    //         seriesBarDistance: 5,
    //         axisX: {
    //           labelInterpolationFnc: function(value) {
    //             return value[0];
    //           }
    //         }
    //       }
    //     ]
    //   ],
    //   animation: {
    //     draw: function(data) {
    //       if (data.type === "bar") {
    //         data.element.animate({
    //           opacity: {
    //             begin: (data.index + 1) * delays2,
    //             dur: durations2,
    //             from: 0,
    //             to: 1,
    //             easing: "ease"
    //           }
    //         });
    //       }
    //     }
    //   }
    // };
    return (
      // <div className="root">
      //   <h4
      //     style={{
      //       textIndent: 20,
      //       fontSize: 20,
      //       color: "blue",
      //       textAlign: "justify"
      //     }}
      //   >
      //     Emotion Analysis
      //   </h4>
      //   <Grid container spacing={22}>
      //     <Grid item xs={12} sm={6}>
      //       <Paper className="paperEmoition">
      //         <BarChart
      //           barCategoryGap={10}
      //           width={650}
      //           height={360}
      //           data={this.props.emotionData}
      //           layout="vertical"
      //           margin={{ top: 20, left: 20, bottom: 5 }}
      //         >
      //           <CartesianGrid strokeDasharray="3 3" />
      //           <XAxis type="number" />
      //           <YAxis type="category" dataKey="name" />
      //           <Tooltip />
      //           <Bar dataKey="count" fill="#8884d8" />
      //         </BarChart>
      //       </Paper>
      //     </Grid>
      //     <Grid item xs={12} sm={6}>
      //       <Paper className="paperEmoition">
      //         <div
      //           style={{ position: "relative", left: 120, top: 25, width: 400 }}
      //         >
      //           <TextField
      //             required
      //             id="outlined-required"
      //             label="Required"
      //             defaultValue=""
      //             className=""
      //             margin="normal"
      //             variant="outlined"
      //           />
      //           <Button
      //             variant="contained"
      //             size="large"
      //             color="primary"
      //             className=""
      //             style={{ position: "relative", left: 20 }}
      //           >
      //             Classify
      //           </Button>
      //         </div>
      //         <div
      //           style={{
      //             position: "relative",
      //             left: 120,
      //             top: 100,
      //             width: 400,
      //             height: 50
      //           }}
      //         >
      //           <text>
      //             <center>
      //               <span style={{ color: "blue" }}>
      //                 <strong>aaaaaa</strong>{" "}
      //               </span>
      //             </center>
      //           </text>
      //         </div>
      //       </Paper>
      //     </Grid>
      //   </Grid>
      // </div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>
                Emotion Analysis of Comments
              </h4>
            </CardHeader>
            <CardBody>
              <div>
                <div style={{ float: "left" }}>
                  <BarChart
                    barCategoryGap={10}
                    width={650}
                    height={360}
                    data={this.props.emotions}
                    layout="vertical"
                    margin={{ top: 20, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip />
                    <Bar dataKey="count" fill="#6E9934" />
                  </BarChart>
                </div>
                <div
                  style={{
                    float: "right",
                    width: "350px",
                    height: "350px",
                    justifyContent: "center"
                  }}
                >
                  <h3
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      paddingBottom: "30px",
                      color: "#666666"
                    }}
                  >
                    Overall Emotion
                  </h3>
                  <center>
                    <img
                      style={{ width: "150px", height: "150px" }}
                      src={happy}
                    />
                  </center>
                  <h4
                    style={{
                      fontStyle: "italic",
                      textAlign: "center",
                      color: "#666666"
                    }}
                  >
                    JOY
                  </h4>
                </div>
              </div>
              {/* <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              /> */}
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

EmotionBarChart.propTypes = {
  fetchEmotionData: Prototypes.func.isRequied,
  emotionData: Prototypes.array.isRequired,
  newData: Prototypes.object,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  emotionData: state.charts.items,
  newData: state.charts.item,
  data: state.common.data
});

export default connect(
  mapStateToProps,
  { fetchEmotionData }
)(withStyles(dashboardStyle)(EmotionBarChart));
