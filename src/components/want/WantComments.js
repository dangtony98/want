import React from 'react';
import WantComment from './WantComment';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../../services/variables/variables';

export default ({ comments }) => {
    return (
        <div>
            {comments.map((comment) => (
                <WantComment 
                    comment={comment}
                    key={comment.id}
                />    
            ))}
        </div>
    );
}
