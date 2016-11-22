import React, { PropTypes } from 'react';
import AppStore from '../stores/AppStore';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = AppStore.getApp();
        this._onChange = this._onChange.bind(this);
    }

    componentDidMount() {
        AppStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AppStore.removeChangeListener(this._onChange);
    }

    _onChange() {
        this.setState(AppStore.getApp());
    }

    render() {
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
}

export default App;
