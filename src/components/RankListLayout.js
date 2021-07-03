import RankList from "./RankList";
import CommonLayout from "./CommonLayout"
import React from 'react'

const BSMRSTU_ORG_URL = `https://codeforces.com/ratings/organization/3403`

class RankListLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { url: BSMRSTU_ORG_URL, contestID: 1541 };
    }

    updateStateVars(props) {
        try {
            this.setState({
                url: props.location.search.match(`url=(.+)`)[1],
                contestID: props.match.params.contestID
            })
        }
        catch (e) {
            console.log("error setting rank-list-layout state", e)
        }
        console.log("con-layout-state", this.state)
    }

    stateChangedLah(props) {
        try {
            if (this.state.url !== props.location.search.match(`url=(.+)`)[1] || this.state.contestID !== props.match.params.contestID) {
                return true
            }
            return false
        }
        catch (e) {
            return true
        }
    }

    componentDidMount() {
        this.updateStateVars(this.props)
    }

    shouldComponentUpdate(nextProps, nextState) {
        // debugger
        if (this.stateChangedLah(nextProps)) {
            this.updateStateVars(nextProps)
            return true
        }
        return false
    }


    render() {
        console.log("rank-layout-rendering", this.props)
        return (
            <div>
                <CommonLayout key={"rank-list-layout" + this.state.url + this.state.contestID} {...this.props} url={this.state.url} contestID={this.state.contestID}>
                    <RankList key={"rank-list-" + this.state.url + this.state.contestID} {...this.props} url={this.state.url} contestID={this.state.contestID} ></RankList>
                </CommonLayout>
            </div>
        );
    }
};

export default RankListLayout