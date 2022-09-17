import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../nav/_nav.scss';
import { MobileNav } from './mobilenav';
import Hamburger from 'hamburger-react';


// function toggleMobileMenu(menu) {
// 	menu.classList.toggle('open');
// 	document.body.classList.toggle('lock-scroll');
// }

export default class Nav extends React.Component {
	render() {
		return (
			<header>
				{/* <MobileNav /> */}
				<NavLink to='/'>
					<div class='logo'>
						<img class='logo__img' src='./images/logo.svg' alt='logo' />
					</div>
				</NavLink>
				{/* <!-- DESKTOP NAV LINKS --> */}
				<nav>
					<ul class='navbuttons'>
						<li class='hide'>
							<NavLink
								to='/about'
								className={({ isActive }) =>
									isActive ? 'currentpage ' : 'otherpage'
								}>
								ABOUT
							</NavLink>
						</li>
						<li class='hide'>
							<NavLink
								to='/work'
								className={({ isActive }) =>
									isActive ? 'currentpage ' : 'otherpage'
								}>
								WORK
							</NavLink>
						</li>
						<li class='hide'>
							<NavLink
								to='/contact'
								className={({ isActive }) =>
									isActive ? 'currentpage ' : 'otherpage'
								}>
								CONTACT
							</NavLink>
						</li>
						<li id='ticker' class='hide'>
							<div class='marquee'>
								<div class='track'>
									<div class='content'>
										Heavy duty CREATIVE SERVICES • Heavy duty CREATIVE SERVICES
										• Heavy duty CREATIVE SERVICES • Heavy duty CREATIVE
										SERVICES • Heavy duty CREATIVE SERVICES • Heavy duty
										CREATIVE SERVICES •
									</div>
								</div>
							</div>
						</li>
						<li class='hide'>
							<NavLink
								to='/store'
								className={({ isActive }) =>
									isActive ? 'currentpage ' : 'otherpage'
								}>
								STORE
							</NavLink>
						</li>
						<li id='cart'>
							<a href='/cart'>CART</a>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}
