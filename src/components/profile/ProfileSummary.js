import React from 'react';

export default ({ summary }) => {
    const applyCharacterLimit = (description, limit) => (`${description.substring(0, limit)}...`);

    return (
        <div className="profile-summary">
            <h4 className="content-heading">Profile Summary</h4>
            <div className="wrapper-flex">
                <img 
                    src={summary.photo} 
                    className="profile-summary__photo"
                />
                <div className="profile-summary__box">
                    <h2 className="profile-text">{summary.firstName}</h2>
                    <h4 className="profile-text marg-b-sm">{summary.shortDescription}</h4>
                    <hr className="hr"></hr>
                    <p className="profile-text marg-t-sm">{applyCharacterLimit(summary.description, 300)}</p>
                </div>
            </div>
        </div>
    );
}