import React from 'react';

const WithLogging = (WrappedComponent) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component has been mounted.');
    }

    componentWillUnmount() {
      console.log('Component will be unmounted.');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default WithLogging;
