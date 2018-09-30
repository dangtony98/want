import React from 'react';
import Post from '../post/Post';
import Filter from '../narrow/Filter';
import Sort from '../narrow/Sort';
import Want from '../want/Want';

const sampleWantList = [{
    firstName: 'John',
    timestamp: '5s',
    title: 'Buy and deliver groceries from Wegmans',
    pay: 20,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
}, {
    firstName: 'Mary',
    timestamp: '20s',
    title: 'Clean apartment',
    pay: 25,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
}, {
    firstName: 'Jane',
    timestamp: '1m',
    title: 'Tutor for CS2110',
    pay: 40,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
}, {
    firstName: 'Elon',
    timestamp: '3m',
    title: 'Drive to Walmart on Fri',
    pay: 15,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
}]

export default () => (
    <div className="home-content">
        <div className="home-content__left">
            <Post />
        </div>
        <div className="home-content__right">
            <h4 className="home-content__heading">Wants around You</h4>
            <Filter />
            <Sort />
            {sampleWantList.map((want) => (
                <Want
                    firstName={want.firstName}
                    timestamp={want.timestamp}
                    title={want.title}
                    pay={want.pay}
                    description={want.description} 
                />
            ))}
        </div>
    </div>
);
