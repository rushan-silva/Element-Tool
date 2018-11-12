import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Danger from "components/Typography/Danger.jsx";
import Success from "components/Typography/Success.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  tableUpgradeWrapper: {
    display: "block",
    width: "100%",
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
    MsOverflowStyle: "-ms-autohiding-scrollbar"
  },
  table: {
    width: "100%",
    maxWidth: "100%",
    marginBottom: "1rem",
    backgroundColor: "transparent",
    borderCollapse: "collapse",
    display: "table",
    borderSpacing: "2px",
    borderColor: "grey",
    "& thdead tr th": {
      fontSize: "1.063rem",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontWeight: "300",
      borderTopWidth: "0",
      borderBottom: "1px solid rgba(0, 0, 0, 0.06)",
      textAlign: "inherit"
    },
    "& tbody tr td": {
      padding: "12px 8px",
      verticalAlign: "middle",
      borderTop: "1px solid rgba(0, 0, 0, 0.06)"
    },
    "& td, & th": {
      display: "table-cell"
    }
  },
  center: {
    textAlign: "center"
  }
};

function UpgradeToPro(props) {
  const { classes } = props;
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader color="success">
            <h4 className={classes.cardTitleWhite}>Element Package Upgrade</h4>
            <p className={classes.cardCategoryWhite}>
              Are you looking for more features? Please check our Gold Version
              of Element.
            </p>
          </CardHeader>
          <CardBody>
            <div className={classes.tableUpgradeWrapper}>
              <table className={classes.table}>
                <thead>
                  <tr>
                    <th />
                    <th className={classes.center}>Silver</th>
                    <th className={classes.center}>Gold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Pages Monitored</td>
                    <td className={classes.center}>5</td>
                    <td className={classes.center}>10</td>
                  </tr>
                  <tr>
                    <td>Simultaneously Monitored Posts</td>
                    <td className={classes.center}>10</td>
                    <td className={classes.center}>Unlimited</td>
                  </tr>
                  <tr>
                    <td>Maximum Days to be Monitored</td>
                    <td className={classes.center}>10</td>
                    <td className={classes.center}>15</td>
                  </tr>
                  <tr>
                    <td>Statixtical Detail Report</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Email Lister</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Social Media Platform Collaboration</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td>Posts Sharing through Element</td>
                    <td className={classes.center}>
                      <Danger>
                        <Close />
                      </Danger>
                    </td>
                    <td className={classes.center}>
                      <Success>
                        <Check />
                      </Success>
                    </td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}></td>
                    <td className={classes.center}>Just $60</td>
                  </tr>
                  <tr>
                    <td />
                    <td className={classes.center}>
                      <Button round disabled>
                        Current Package
                      </Button>
                    </td>
                    <td className={classes.center}>
                      <Button round color="success" href="#">
                        Upgrade to Gold
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(styles)(UpgradeToPro);
