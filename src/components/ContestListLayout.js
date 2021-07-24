import ContestList from "./ContestList";
import CommonLayout from "./CommonLayout"
import {UrlInfo, SameUrl} from "../lib/UrlInfo"
import React from 'react'

class ContestListLayout extends React.Component {
    shouldComponentUpdate(nextProps, nextState){
        return !SameUrl(nextProps, this.props)
    }
    render() {
        return (
            <div>
                <CommonLayout key="con-list-layout" {...this.props}  {...UrlInfo(this.props)}>
                    <ContestList key="con-list" {...this.props} {...UrlInfo(this.props)}></ContestList>
                </CommonLayout>
            </div>
        );
    }
};

export default ContestListLayout