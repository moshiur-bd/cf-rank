import RankList from "./RankList";
import CommonLayout from "./CommonLayout"
import React from 'react'

class RankListLayout extends React.Component {
    render() {
        return (
            <div>
                <CommonLayout key="rank-list-layout" {...this.props}>
                    <RankList {...this.props}></RankList>
                </CommonLayout>
            </div>
        );
    }
};

export default RankListLayout