import RankList from "./RankList";
import CommonLayout from "./CommonLayout"
import React from 'react'
import { UrlInfo, SameUrl } from "../lib/UrlInfo"


const BSMRSTU_ORG_URL = `https://codeforces.com/ratings/organization/3403`

class RankListLayout extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !SameUrl(nextProps, this.props)
    }

    render() {
        console.log("rank-layout-rendering", this.props)
        const {url, contestID, handles} = UrlInfo(this.props) 
        return (
            <div>
                <CommonLayout key="rank-list-layout" {...this.props}  {...UrlInfo(this.props)}>
                    <RankList key={"rank-list" + url + contestID + handles} {...this.props} {...UrlInfo(this.props)}></RankList>
                </CommonLayout>
            </div>
        );
    }
};

export default RankListLayout