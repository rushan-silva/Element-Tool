import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import SuggestionExtract from "../../components/SuggestionExtract/SuggestionTable";
import EmotionAnalysis from "../../components/EmotionAnalysis/EmotionBarChart";
import SuccessRate from "../../components/SuccessRate/SuccessPrediction";
import "./Statistics.css";
import analysisAction from "../../actions/analysis";
// import Header from "../../components/Header/Header.jsx";
// import Footer from "components/Footer/Footer.jsx";
// import Sidebar from "../../components/Sidebar/Sidebar.jsx";

const items = [
  { name: "Sadness", count: 0 },
  { name: "Fear", count: 0 },
  { name: "Joy", count: 2 },
  { name: "Guilt", count: 0 },
  { name: "Anger", count: 0 },
  { name: "Shame", count: 0 },
  { name: "Disgust", count: 0 }
];

class Statistics extends Component {
  timer = null;
  constructor(props) {
    super(props);
    this.state = {
      emotions: {},
      successRate: {},
      suggestions: [],
      emotionsData: [
        { name: "Sadness", count: 0 },
        { name: "Fear", count: 0 },
        { name: "Joy", count: 0 },
        { name: "Guilt", count: 0 },
        { name: "Anger", count: 0 },
        { name: "Shame", count: 0 },
        { name: "Disgust", count: 0 }
      ],
      suggestionsArr: [["", ""]],
      completed: 0
    };
  }

  getCookie = cName => {
    let name = cName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  componentWillMount() {
    console.log("in here"); //eslint-disable-line

    const userId = this.getCookie("user_id");
    const facebookAccessToken = this.getCookie("facebookAccessToken");

    const requestObj = {
      userId,
      facebookAccessToken,
      pageUrl: "https://www.facebook.com/foodiestoressl/",
      pageId: "foodiestoressl",
      postId: "315719342564507_318957702240671"
    };

    this.props.fetchAnalysisData(requestObj);
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.fetchingAnalysisDataSuccessful &&
      this.props.fetchingAnalysisDataSuccessful !==
        nextProps.fetchingAnalysisDataSuccessful
    ) {
      this.generateEmotionsList(nextProps.analysisData.emotions);
      this.generateSuggestionsList(nextProps.analysisData.suggestions);
      this.setState({
        emotions: nextProps.analysisData.emotions,
        successRate: nextProps.analysisData.successRate,
        suggestions: nextProps.analysisData.suggestions
      });
    }
  }

  generateEmotionsList = emotions => {
    let items = this.state.emotionsData;
    let count = 0;
    items.map(obj => {
      count += 1;
      obj.count = emotions[obj.name.toLocaleLowerCase()];
    });

    if (count === 7) {
      this.setState({ emotionsData: items });
    }
  };

  generateSuggestionsList = suggestions => {
    let suggestionsArr = [];
    suggestions.map((val, ind) => {
      const arr = [val.suggestion, `in ${val.count} reviews`];
      suggestionsArr.push(arr);

      if (ind === suggestions.length - 1) {
        this.setState({ suggestionsArr });
      }
    });
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    return (
      <div>
        {this.props.fetchingAnalysisData &&
        !this.props.fetchingAnalysisDataSuccessful ? (
          <CircularProgress
            style={{ margin: "200px", marginLeft: "450px", color: "#6E9934" }}
            color="secondary"
            variant="determinate"
            size={200}
            value={this.state.completed}
          />
        ) : (
          <div /*style={{ backgroundColor: "#FFFFFF" }}*/>
            <div>
              <SuccessRate successRate={this.state.successRate} />
            </div>
            <div>
              <EmotionAnalysis emotions={this.state.emotionsData} />
            </div>
            <div>
              <SuggestionExtract suggestionsArr={this.state.suggestionsArr} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

Statistics.propTypes = {
  fetchAnalysisData: PropTypes.func.isRequired,
  analysisData: PropTypes.object.isRequired,
  fetchingAnalysisDataSuccessful: PropTypes.bool.isRequired,
  fetchingAnalysisData: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    fetchingAnalysisData: state.analysis.fetchingAnalysisData,
    fetchingAnalysisDataSuccessful:
      state.analysis.fetchingAnalysisDataSuccessful,
    fetchingAnalysisDataFailed: state.analysis.fetchingAnalysisDataFailed,
    analysisData: state.analysis.analysisData
  };
}

function bindActions(dispatch) {
  return {
    fetchAnalysisData: pageData =>
      dispatch(analysisAction.fetchAnalysisData(pageData))
  };
}

export default connect(
  mapStateToProps,
  bindActions
)(Statistics);
