import React, { PropTypes, Component, useEffect } from "react";
import Navigator from "./homeStack";
import Server from './mongoDbServer';

const server = new Server(); //run server connect mongoDB
export default function App() {
  return <Navigator />;
}
