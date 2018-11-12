import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
// import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { connect } from "react-redux";
import { fetchSuggestionData } from "../../actions/suggestionAction";
import Prototypes from "prop-types";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Table from "components/Table/Table.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class SuggestionTbl extends Component {
  componentWillMount() {
    this.props.fetchSuggestionData();
  }

  render() {
    const { classes } = this.props;
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="success">
              <h4 className={classes.cardTitleWhite}>SUGGESTIONS</h4>
            </CardHeader>
            <CardBody>
              <Table tableData={this.props.suggestionsArr} />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

SuggestionTbl.propTypes = {
  fetchSuggestionData: Prototypes.func.isRequied,
  suggestionData: Prototypes.array.isRequired,
  classes: PropTypes.object.isRequired,
  suggestionsArr: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  suggestionData: state.suggestion.items
});

export default connect(
  mapStateToProps,
  { fetchSuggestionData }
)(withStyles(dashboardStyle)(SuggestionTbl));
