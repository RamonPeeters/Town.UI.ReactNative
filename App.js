import { Component } from 'react';
import TownClient from './src/TownClient';


export default class App extends Component {
  constructor(properties) {
    super(properties);
    
    this.townClient = new TownClient();
    this.townClient.getScreenHandler().addUpdateListener(e => {
      this.setState({});
    });
  }

  render() {
    return this.townClient.getScreenHandler().getScreen();
  }
}
