import React from "react";

class BeachIndexItem extends React.Component {
  render() {
    return(
      <li>{this.props.bench.description} - </li>
    )
  }
}
export default BeachIndexItem;
