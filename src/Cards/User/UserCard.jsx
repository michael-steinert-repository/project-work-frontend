import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const UserCard = (props) => {
    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {props.user.username}
                </Typography>
                <Typography variant="body2" component="p">
                    {props.user.userRole}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default UserCard;
