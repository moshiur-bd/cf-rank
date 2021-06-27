import React from 'react'
import Navigation from "./Navigation";
import './CommonLayout.css'

class CommonLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="layout-header">
                    <Navigation {...this.props}/>
                </div>
                <div className="App-Container">
                    {this.props.children}
                </div>
                <div className="footer">
                </div>
            </div>
        );
    }
};

export default CommonLayout
