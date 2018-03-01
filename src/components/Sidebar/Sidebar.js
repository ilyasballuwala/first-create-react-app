import React from 'react';
import { withRR4, Nav, NavIcon, NavText } from 'react-sidenav';
import SidebarOption from './SidebarOption';

const SideNav = withRR4();

class Sidebar extends React.Component{
	state = {
		navItems: [
			{ pathname: 'dashboard', label: 'Dashboard', icon: 'home' },
			{ pathname: 'deals', label: 'Deals Management', icon: 'product-hunt', 
				submenuitems:[
					{ pathname: 'list', label: 'View Deals'},
					{ pathname: 'add', label: 'Add New Deal'}, 	
				] 
			},
			{ pathname: 'purchase-history', label: 'Purchase History', icon: 'credit-card' },
			{ pathname: 'earnings', label: 'Total Earnings', icon: 'dollar' },
			{ pathname: 'customers', label: 'Customer Listing', icon: 'users'},
			{ pathname: 'notifications', label: 'Notification Management', icon: 'exclamation-triangle' },
			{ pathname: 'cashback', label: 'Cashback', icon: 'suitcase' },
		],
	}

	render(){
		return(
			<aside className="al-sidebar">
			  <ul className="al-sidebar-list">	
				<SideNav 
					highlightColor='#fff' 
					highlightBgColor='#209e91'
					defaultSelected='dashboard'
				>      
				{
					this.state.navItems.map((element, index) => (
						<Nav id={element.pathname} className="al-sidebar-list-link">
							<NavIcon><i className={`fa fa-${element.icon}`}></i></NavIcon>    
							<NavText>{element.label}</NavText>
							{ element.submenuitems !== undefined && element.submenuitems.length > 0 && 
								element.submenuitems.map((subelement, subindex) => (
									<Nav id={subelement.pathname}>   
										<NavText>{subelement.label}</NavText>
									</Nav>	
								))	
							}
						</Nav>
					))
				}	
				</SideNav>
			  </ul>	
			</aside>
		);
	}
}

export default Sidebar;