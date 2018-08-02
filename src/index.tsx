import React from 'react';
import { get } from 'lodash';

export default (
  Component,
  onLoad,
  inProgress,
  message,
  Loader
) =>
  class extends React.Component {
    componentWillMount() {
      if (typeof onLoad === 'function') {
        onLoad(this.props);
      } else {
        get(this.props, onLoad, () => { })();
      }
    }

    render() {
      const isInProgress = (typeof inProgress === 'function') ?
        inProgress(this.props) :
        get(this.props, inProgress, false);

      if (isInProgress) {
        if (Loader) { return <Loader />; }
        return <div>{message}</div>
      }

      return (
        <Component
          {...this.props}
          {...this.state}
        />
      );
    }
  };
