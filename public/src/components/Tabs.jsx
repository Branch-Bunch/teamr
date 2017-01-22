import React from 'react'
import { Tabs, Tab } from 'react-bootsrap'
import

const Tabs = ({ title, onClick }) => (
  <Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
    <Tab eventKey={1} title="Individual">Tab 1 content</Tab>
    <Tab eventKey={2} title="Group">Tab 2 content</Tab>
  </Tabs>
    );
);

getInitialState() {
  return {
    key: 1
  };
},

handleSelect(key) {
  alert('selected ' + key);
  this.setState({key});
},
