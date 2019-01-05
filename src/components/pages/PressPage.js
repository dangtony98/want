import React from 'react';
import NavigationBar from '../navigation/NavigationBar';
import ModalHandler from '../modal/ModalHandler';
import Footer from '../footer/Footer';

const AboutUsStyles = {
    jumbotron: {
        backgroundImage: 'linear-gradient(to top,rgba(0, 0, 0, 50%),rgba(0, 0, 0, 50%)), url(https://images.unsplash.com/photo-1526029964231-ca7fb5ed88af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3000&q=80)',
        backgroundSize: 'cover'
    }
}

export default () => {
    window.scrollTo(0, 0);
    return (
        <div className="information-page">   
            <ModalHandler />
            <NavigationBar />
            <div 
                style={AboutUsStyles.jumbotron}
                className="information-jumbotron"
            >
                <div className="information-jumbotron__box">
                    <h1 className="marg-b-sm">Lorem ipsum.</h1>
                    <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat...
                    </h3>
                </div>
            </div>
            <div className="information-section marg-t-m">
                <div className="information-box">
                    <h2 className="information-text">Announcements</h2>
                    <p className="information-text marg-t-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                    <p className="information-text marg-t-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                    <hr className="hr marg-t-m marg-b-m"></hr>
                    <h2 className="information-text">Media</h2>
                    <p className="information-text marg-t-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                    <p className="information-text marg-t-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        , sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat...
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
}