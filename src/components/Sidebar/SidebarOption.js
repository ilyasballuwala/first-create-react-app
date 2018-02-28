import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarOption = (props) => (
	<li className={`al-sidebar-list-item ${props.isactive}`} key={props.key}>
		<NavLink className="al-sidebar-list-link" to={props.linkpath} activeClassName="active" exact={true}>
			<i className={`fa fa-${props.linkicon}`}></i>
			<span>{props.label}</span>
		</NavLink>
	</li>
);

export default SidebarOption;