import React from 'react';
import { get } from 'lodash';

/**
 * This is a function.
 *
 * @param {Component} Component - React component
 * @param {Function} onLoad - Function to run when component is loaded
 * @param {Boolean} inProgress - Boolean key to determine if loading indicator should be displayed
 * @param {Component} Loader - Component to display while loading is true
 * @param {String} Message - Optional message to display if no loading component is passed
 *
 */

export default (
  Component,
  onLoad,
  inProgress,
  Loader,
  message,
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
