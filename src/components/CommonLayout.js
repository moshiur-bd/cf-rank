import React from 'react'
import Navigation from "./Navigation";
import './css/CommonLayout.css'

class CommonLayout extends React.Component {
    render() {
        return (
            <div>
                <div className="layout-header">
                    <Navigation key={this.props.contestID+this.props.url} {...this.props} />
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
