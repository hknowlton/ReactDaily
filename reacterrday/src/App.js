import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var App = React.createClass({
    
    getInitialState: function() {
        return { mounted: false };
    },
    
    componentDidMount: function() {
        this.setState({ mounted: true });
    },
    
    handleSubmit: function(e) {
        this.setState({ mounted: false });
        e.preventDefault();
    },

    render: function() {
        var child;

        if(this.state.mounted) {
            child = (<Modal onSubmit={this.handleSubmit} />);
        }
        
        return(
            <div className="App">
                <ReactCSSTransitionGroup 
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                        {child}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});

export default App;
