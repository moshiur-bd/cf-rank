import ContestList from "./ContestList";
import CommonLayout from "./CommonLayout"
import React from 'react'
const BSMRSTU_ORG_URL = `https://codeforces.com/ratings/organization/3403`

class ContestListLayout extends React.Component {
    constructor(props) {
        super(props);
    }

    urlAndContestID(props){
        return {
            url: props.location.search.match(`url=(.+)`)[1],
            contestID : props.match.params.contestID
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        var p1 = this.urlAndContestID(nextProps)
        var p2 = this.urlAndContestID(this.props)
        if (p1 !== null && p2 !== null && p1.url === p2.url && p1.contestID === p2.contestID){
            return false
        }
        return true
    }

    render() {
        console.log("con-layout-rendering", this.props)

        return (
            <div>
                <CommonLayout key="con-list-layout" {...this.props}  {...this.urlAndContestID(this.props)}>
                    <ContestList key="con-list" {...this.props} {...this.urlAndContestID(this.props)}></ContestList>
                </CommonLayout>
            </div>
        );
    }
};

export default ContestListLayout