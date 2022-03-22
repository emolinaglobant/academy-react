import { combineReducers } from "@reduxjs/toolkit";
import { rocketReducer, selectRocketReducer } from "./rocketsReducer";
import { launchReducer, selectLaunchReducer } from "./launchesReducer";
import { crewReducer, selectCrewReducer } from "./crewReducer";
import { roadsterReducer } from "./roadsterReducer";

const reducers = combineReducers({
  allRockets: rocketReducer,
  rocket: selectRocketReducer,
  allLaunches: launchReducer,
  launch: selectLaunchReducer,
  allAstronauts: crewReducer,
  astronaut: selectCrewReducer,
  roadster: roadsterReducer,
});

export default reducers;
