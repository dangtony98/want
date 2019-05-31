import React from 'react';
import WantComment from './WantComment';

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
