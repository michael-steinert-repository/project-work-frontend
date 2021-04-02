import React from 'react';
import UserMeetingCard from './UserMeetingCard';
import Typography from '@material-ui/core/Typography';

const UserMeetingCardList = (props) => {
    return (
        <div>
            {props.userMeetingList.length === 0 && <Typography variant="body1">Keine UserMeetings gefunden</Typography>}
            {props.userMeetingList.length > 0 && props.userMeetingList.map((userMeeting, index) => <UserMeetingCard key={index} userMeeting={userMeeting}/>)}
        </div>
    );
}

export default UserMeetingCardList;
