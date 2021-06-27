import ContestList from "./ContestList";
import CommonLayout from "./CommonLayout"
import React from 'react'

class ContestListLayout extends React.Component {
    render() {
        return (
            <div>
                <CommonLayout key="rank-list-layout" {...this.props}>
                    <ContestList {...this.props}></ContestList>
                </CommonLayout>
            </div>
        );
    }
};

export default ContestListLayout