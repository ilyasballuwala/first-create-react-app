import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';

class AppLayout extends Component{
    
    state = {
        idToken: null, // Token indicating user is logged in
        user: null, // Full user for that logged in user, if exists
    }

    render(){
        return(
            <div>
                <main className=''>
                <Sidebar />
                <Header />
                    <div className="al-main">
                        <div className="al-content">
                            {this.props.children}
                        </div>
                    </div>
                <Footer appName="Hyperlocal App For SAAS - Merchant" />                    
                </main>
            </div>
        );
    }
}

export default AppLayout;