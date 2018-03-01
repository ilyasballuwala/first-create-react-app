import React from 'react';
import SidebarOption from './SidebarOption';

class Sidebar extends React.Component{
	state = {
		navItems: [
			{ pathname: '/', label: 'Dashboard', icon: 'home' },
			{ pathname: '/deals', label: 'Deals Management', icon: 'product-hunt' },
			{ pathname: '/purchase-history', label: 'Purchase History', icon: 'credit-card' },
			{ pathname: '/earnings', label: 'Total Earnings', icon: 'dollar' },
			{ pathname: '/customers', label: 'Customer Listing', icon: 'users'},
			{ pathname: '/notifications', label: 'Notification Management', icon: 'exclamation-triangle' },
			{ pathname: '/cashback', label: 'Cashback', icon: 'suitcase' },
		],
	}

	render(){
		return(
			<aside className="al-sidebar">
				<ul className="al-sidebar-list">
				{
					this.state.navItems.map((element, index) => 
						<SidebarOption 
							label={element.label}
							linkpath={element.pathname}
							linkicon={element.icon}
							isactive=''
							key={index}
						/>
					)
				}
					
				</ul>
			</aside>
		);
	}
}

export default Sidebar;