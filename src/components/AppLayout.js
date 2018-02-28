import React, { Component } from 'react';
import Header from '../components/Header';

class AppLayout extends Component{
    
    state = {
        idToken: null, // Token indicating user is logged in
        user: null, // Full user for that logged in user, if exists
    }

    render(){
        return(
            <div>
                <main className=''>
                <Header />
                    <div className="al-main">
                        <div className="al-content">
                            {this.props.children}
                        </div>
                    </div>
        
                    <footer className="al-footer clearfix">
                        <div className="al-footer-right">Created with <i className="ion-heart"></i></div>
                        <div className="al-footer-main clearfix">
                        <div className="al-copy">React Webpack Skeleton</div>
                        <ul className="al-share clearfix">
                            <li><i className="socicon socicon-facebook"></i></li>
                            <li><i className="socicon socicon-twitter"></i></li>
                            <li><i className="socicon socicon-google"></i></li>
                            <li><i className="socicon socicon-github"></i></li>
                        </ul>
                        </div>
                    </footer>
                </main>
            </div>
        );
    }
}

export default AppLayout;