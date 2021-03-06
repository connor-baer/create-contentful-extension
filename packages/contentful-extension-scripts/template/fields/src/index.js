import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { TextInput } from '@contentful/forma-36-react-components';
import './index.css';
import '@contentful/forma-36-react-components/dist/styles.css';
import { init } from 'contentful-ui-extensions-sdk';

class App extends React.Component {
  static propTypes = {
    sdk: PropTypes.object.isRequired,
  };

  state = {
    value: this.props.sdk.field.getValue(),
  };

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();
  }

  onChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
    if (value) {
      this.props.sdk.field.setValue(value);
    } else {
      this.props.sdk.field.removeValue();
    }
  };

  render = () => {
    return (
      <TextInput
        width="large"
        type="text"
        id="my-field"
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  };
}

init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('root'));
});
