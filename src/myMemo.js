import React from "react";

export const myMemo = (Component) => {
  return class NewComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
      const keys = Object.keys(this.props);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (this.props[key] !== nextProps[key]) return true;
      }
      return false;
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};
