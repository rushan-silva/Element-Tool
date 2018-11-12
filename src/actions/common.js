import { FETCH_DATA } from "./types";
import StatsService from "../services/stats";

export const fetchData = () => dispatch => {
  StatsService.FetchData()
    .then(res => res.json())
    .then(data =>
      dispatch({
        type: FETCH_DATA,
        payload: data
      })
    );
};
