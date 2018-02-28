import React from 'react';
import SidebarOption from './SidebarOption';

class Sidebar extends React.Component{
	state = {
		navItems: [
			{ pathname: '/', label: 'Home', icon: 'home' },
			{ pathname: '/deals', label: 'Deals Management', icon: 'info' },
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