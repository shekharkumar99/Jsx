import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return <div className="ui container comments">
        <ApprovalCard>
        <CommentDetail author= "Sam" timeAgo="today at 5 pm" comment = "good post" avatar = {faker.image.avatar()}/>
        </ApprovalCard>
        <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="yesterday at 5 pm" comment ="nice one" avatar = {faker.image.avatar()}/>
        </ApprovalCard>
    </div>
};
ReactDOM.render(<App/>, document.querySelector('#root'));