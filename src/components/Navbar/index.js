import React from "react";
import { NavContainer, NavMenu, MenuItem, MenuLink } from "./NavbarElements";

const Navbar = () => {
	return (
		<NavContainer>
			<NavMenu>
				<MenuItem>
					<MenuLink to="/">Home</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to="/graph">Graph</MenuLink>
				</MenuItem>
				<MenuItem>
					<MenuLink to="/calculator">Calculator</MenuLink>
				</MenuItem>
			</NavMenu>
		</NavContainer>
	);
};

export default Navbar;
