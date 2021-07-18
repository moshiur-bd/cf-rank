import OrgsList from "./OrgsList";
import CommonLayout from "./CommonLayout"
import {UrlInfo, SameUrl} from "../lib/UrlInfo"
import React from 'react'
const BSMRSTU_ORG_URL = `https://codeforces.com/ratings/organization/3403`

class OrgsListLayout extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return !SameUrl(nextProps, this.props)
    }

    render() {
        console.log("con-layout-rendering", this.props)

        return (
            <div>
                <CommonLayout key="con-list-layout" {...this.props}  {...UrlInfo(this.props)}>
                    <OrgsList key="con-list" {...this.props} {...UrlInfo(this.props)}></OrgsList>
                </CommonLayout>
            </div>
        );
    }
};

export default OrgsListLayout