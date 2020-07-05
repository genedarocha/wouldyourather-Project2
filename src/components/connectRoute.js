  /*      File Name   : ConectRoutejs
          Date        : 30th June 2020
          Description : This is the routes.js component file which routes to all the other files for the app. 
  */
 import React from "react";

 // connectRoute.js
export default function connectRoute(WrappedComponent) {
  return class extends React.Component {
    shouldComponentUpdate(nextProps) {
      return nextProps.location !== this.props.location;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
 
 

