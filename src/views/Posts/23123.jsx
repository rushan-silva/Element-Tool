import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import Post from "components/Post/Post.jsx";
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";
import image from "assets/img/sidebar.jpg";
import logo from "assets/img/Element.png";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(0,0,0,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#000000"
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
  }
};

const route = [{ path: "/app/posts" }];

this.handleDrawerToggle = () => {
  this.setState({ mobileOpen: !this.state.mobileOpen });
};

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false
    };
  }
  render() {
  const { classes, ...rest } = this.props;
  return (
    <div>
      <Sidebar
        routes={route}
        logoText={"ELEMENT"}
        logo={logo}
        image={image}
        handleDrawerToggle={this.handleDrawerToggle}
        open={this.state.mobileOpen}
        color="green"
        {...rest}
      />
    <Header />
    <GridContainer>
      <GridItem xs={1} sm={1} md={12}>
        <Card style={{ marginTop: "10px" }}>
          {/* <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>Simple Table</h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader> */}
          <CardBody>
            {/* <Card color="success">
              <img className={classes.img} src={like} alt="..." />
            </Card> */}
            {/* <div
              style={{
                height: "100px",
                width: "100px",
                borderColor: "#6E9934",
                borderWidth: "10px"
              }}
            > */}
            <Card>
              {/* <CardHeader color="success" tile>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src="https://scontent.xx.fbcdn.net/v/t1.0-9/s720x720/42134420_318956912240750_139234967061266432_o.jpg?_nc_cat=102&oh=09a0c6e55f5ee2f71549f108fe855887&oe=5C234497"
                />
              </CardHeader>
              <CardAvatar tile>
                <a href="https://www.facebook.com/foodiestoressl/">
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/42058479_318463248956783_193607427667525632_n.jpg?_nc_cat=101&oh=5278f288dd0ab74a14a0aebe4016e47f&oe=5C613023"
                    alt="..."
                  />
                </a>
              </CardAvatar>
              <CardBody>
                <h3 style={{ textAlign: "center", fontWeight: "bold", color: "#6E9934",  marginBlockStart: "0", marginBlockEnd: "0" }}>
                  <a>Foodie Stores</a>
                </h3>
              </CardBody> */}
              <Post />
            </Card>
            {/* </div> */}
            {/* <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Country", "City", "Salary"]}
              tableData={[
                ["Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
                ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
                ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
                ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"]
              ]}
            /> */}
          </CardBody>
        </Card>
      </GridItem>
      {/* <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              BLA BLA BLA LLLJFGEWHJFGWEJEFJEEFGJGFJHSDGF
            </h4>
            <p className={classes.cardCategoryWhite}>
              Here is a subtitle for this table
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "Name", "Country", "City", "Salary"]}
              tableData={[
                ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
                ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
                ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
                [
                  "4",
                  "Philip Chaney",
                  "$38,735",
                  "Korea, South",
                  "Overland Park"
                ],
                [
                  "5",
                  "Doris Greene",
                  "$63,542",
                  "Malawi",
                  "Feldkirchen in Kärnten"
                ],
                ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem> */}
    </GridContainer>
    <Footer />
    </div>
  );
}
}

export default withStyles(styles)(Posts);
