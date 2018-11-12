import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    console.log('props: ', this.props);
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>content_copy</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Registered Pages</p>
                <h3 className={classes.cardTitle}>
                  1/5
                  {/* <small></small> */}
                </h3>
              </CardHeader>
              <CardFooter stats>
                {/* <div className={classes.stats}>
                   <Danger>
                    <Warning />
                  </Danger> 
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    4 more pages left
                  </a>
                </div> */}
                <div className={classes.stats}>
                  <Danger>
                    <Warning />
                  </Danger>
                  Only 4 More Pages!
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>attach_money</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Expenditure</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 2 Months
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Icon>thumb_up</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Overall Likes</p>
                <h3 className={classes.cardTitle}>75</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 2 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <Card>
              <CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Accessibility />
                </CardIcon>
                <p className={classes.cardCategory}>Overall Followers</p>
                <h3 className={classes.cardTitle}>45</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 2 Hours
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Like Count</h4>
                <p className={classes.cardCategory}>
                  <span className={classes.successText}>
                    <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                  </span>{" "}
                  increase today
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> updated 4 minutes ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card chart>
              <CardHeader color="success">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>View Count</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
         {/* <GridContainer>
           <GridItem xs={12} sm={12} md={6}>
         <CustomTabs
        //       title="Tasks:"
        //       headerColor="success"
        //       tabs={[
        //         {
        //           tabName: "Bugs",
        //           tabIcon: BugReport,
        //           tabContent: (
        //             <Tasks
        //               checkedIndexes={[0, 3]}
        //               tasksIndexes={[0, 1, 2, 3]}
        //               tasks={bugs}
        //             />
        //           )
        //         },
        //         {
        //           tabName: "Website",
        //           tabIcon: Code,
        //           tabContent: (
        //             <Tasks
        //               checkedIndexes={[0]}
        //               tasksIndexes={[0, 1]}
        //               tasks={website}
        //             />
        //           )
        //         },
        //         {
        //           tabName: "Server",
        //           tabIcon: Cloud,
        //           tabContent: (
        //             <Tasks
        //               checkedIndexes={[1]}
        //               tasksIndexes={[0, 1, 2]}
        //               tasks={server}
        //             />
        //           )
        //         }
        //       ]}
        //     />
        //   </GridItem>
        //   <GridItem xs={12} sm={12} md={6}>
        //     <Card>
        //       <CardHeader color="success">
        //         <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
        //         <p className={classes.cardCategoryWhite}>
        //           New employees on 15th September, 2018
        //         </p>
        //       </CardHeader>
        //       <CardBody>
        //         <Table
        //           tableHeaderColor="success"
        //           tableHead={["ID", "Name", "Status", "Country"]}
        //           tableData={[
        //             ["1", "Rushan Silva", "Active", "Sri Lanka"],
        //             ["2", "Kushali Withanage", "Active", "Sri Lanka"],
        //             ["3", "Hiruni Mirando", "Active", "Sri Lanka"],
        //             ["4", "Dimuthu Viduranga", "Inactive", "Sri Lanka"]
        //           ]}
        //         />
        //       </CardBody>
        //     </Card>
        //   </GridItem>
        // </GridContainer>*/}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
