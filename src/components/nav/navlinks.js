import '../nav/_nav.scss';
import React, { useState } from 'react';

const styles = {
	backgroundImage: "url('./images/mobile-checker.svg')",
	backgroundSize: 'cover',
	backgroundRepeat: 'noRepeat',
};

function NavLinks() {
	const [open, setOpen] = useState(false);
	return (
		<ul class='mobile-menu'>
			<li>
				<a href='/about'>ABOUT</a>
			</li>
			<li>
				<a href='work.html'>WORK</a>
			</li>
			<li>
				<a href='contact.html'>CONTACT</a>
			</li>
			<li>
				<a href='store.html'>STORE</a>
			</li>
			<li>
				<a href='cart.html'>CART</a>
			</li>
			<li class='mobilenav-bottom' style={styles}></li>
		</ul>
	);
}

export { NavLinks };
