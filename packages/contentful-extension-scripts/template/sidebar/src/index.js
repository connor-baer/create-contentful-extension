import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Button } from '@contentful/forma-36-react-components';
import './index.css';
import '@contentful/forma-36-react-components/dist/styles.css';
import { init } from 'contentful-ui-extensions-sdk';

class App extends React.Component {
  static propTypes = {
    sdk: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();
  }

  render = () => {
    return (
      <Button buttonType="positive" isFullWidth={true}>
        Click on me!
      </Button>
    );
  };
}

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('root'));
});
