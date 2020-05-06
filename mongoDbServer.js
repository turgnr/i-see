import React, { Component } from "react";
import { Text, View } from "react-native";

import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient,
} from "mongodb-stitch-react-native-sdk";

export default class Server extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      x: "",
      y: "",
      description: "",
    };
    this.run = this.run.bind(this);
    this.displayTodos = this.displayTodos.bind(this);
  }
  async run() {
    // Initialize the App Client
    this.client = await Stitch.initializeDefaultAppClient("i-see-upewz");
    const mongodb = this.client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    console.log("connect");
    this.db = mongodb.db("LOCATION");
    this.displayTodosOnLoad();
  }
  displayTodosOnLoad() {
    // Anonymously log in and display comments on load
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(this.displayTodos)
      .catch(console.error);
  }

  displayTodos() {
    // query the remote DB and update the component state
    this.db
      .collection("locations")
      .find({}, { limit: 10 })
      .asArray()
      .then((name) => {
        this.setState({ name });
        console.log(name);
      });
  }

  displayTodosOnLoad() {
    // Anonymously log in and display comments on load
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(this.displayTodos)
      .catch(console.error);
  }

  render() {
    this.run();
    return (
      <View>
        <Text>OK</Text>
      </View>
    );
  }
}
