import React from "react";

import {
  Stitch,
  AnonymousCredential,
  RemoteMongoClient,
} from "mongodb-stitch-react-native-sdk";

export default class Server extends React.Component {
  constructor() {
    super();
    this.connetMongoDB = this.connetMongoDB.bind(this);
    this.connetServerAnon = this.connetServerAnon.bind(this);
    this.displayLocaion = this.displayLocaion.bind(this);
    this.setLocaion = this.setLocaion.bind(this);
    this.connetMongoDB();
  }
  async connetMongoDB() {
    //connect to mongoDB database
    this.client = await Stitch.initializeAppClient("i-see-upewz");
    const mongodb = this.client.getServiceClient(
      RemoteMongoClient.factory,
      "mongodb-atlas"
    );
    console.log("connect");
    this.db = mongodb.db("LOCATION");
  }

  connetServerAnon() {
    this.client.auth
      .loginWithCredential(new AnonymousCredential())
      .then(() => this.displayLocaion())
      .catch(console.error);
  }
  displayLocaion() {
    //read all items from collection in monogoDB
    this.db
      .collection("locations")
      .find({}, { limit: 100 })
      .asArray()
      .then((locations) => {
        console.log(locations);
      });
  }

  setLocaion(Name, X, Y, Des, Type) {
    this.db
      .collection("locations")
      .insertOne({
        owner_id: this.client.auth.user.id,
        name: Name,
        x: X,
        y: Y,
        description: Des,
        type: Type,
      })
      .catch(console.error);
  }
}
