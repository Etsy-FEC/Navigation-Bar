import React, { Component } from "react";
import HoverModal from "./HoverModal";
import NavBar from "./NavBar";
import BarData from "./BarData";

class Bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTab: null,
      generate: BarData,
      insideHoverModal: false,
      insideNavBar: false
    };
  }

  onSelect(i) {
    this.setState({ currentTab: this.state.generate[i] });
  }

  onOutsideHoverModal() {
    Promise.resolve(this.setState({ insideHoverModal: false })).then(val => {
      if (!this.state.insideNavBar) {
        this.setState({ currentTab: null });
      }
    });
  }

  onOutsideNavBar(e) {
    Promise.resolve(this.setState({ insideNavBar: false })).then(val => {
      if (!this.state.insideHoverModal) {
        this.setState({ currentTab: null });
      }
    });
  }

  onInsideHoverModal() {
    this.setState({ insideHoverModal: true });
  }

  onInsideNavBar() {
    this.setState({ insideNavBar: true });
  }

  render() {
    if (this.state.currentTab === null) {
      return (
        <div>
          <NavBar
            onSelect={this.onSelect.bind(this)}
            onOutsideNavBar={this.onOutsideNavBar.bind(this)}
            onInsideNavBar={this.onInsideNavBar.bind(this)}
          />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar
            onSelect={this.onSelect.bind(this)}
            onOutsideNavBar={this.onOutsideNavBar.bind(this)}
            onInsideNavBar={this.onInsideNavBar.bind(this)}
          />
          {
            <HoverModal
              data={this.state.currentTab}
              onOutsideHoverModal={this.onOutsideHoverModal.bind(this)}
              onInsideHoverModal={this.onInsideHoverModal.bind(this)}
            />
          }
        </div>
      );
    }
  }
}

export default Bar;
