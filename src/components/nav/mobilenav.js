import React, { useState } from 'react';
import '../nav/_nav.scss';
import { CgMenu } from 'react-icons/cg';
import { NavLinks } from './navlinks';
import Hamburger from 'hamburger-react';

// const styles = {
// 	backgroundImage: "url('./images/mobile-checker.svg')",
// 	backgroundSize: 'cover',
// 	backgroundRepeat: 'noRepeat',
// };

function MobileNav() {
	const [open, setOpen] = useState(false);
	return (
		<div class='mobile__nav'>
			<Hamburger rounded />
			<div class='mobile-menu'>
				{/* <!-- MOBILE NAV -->
			const [isOpen, setOpen] = useState(false)
			<div id='hamburger-icon'>
				<CgMenu className='Hamburger' onClick={() => setOpen(!open)} />
				{open && <NavLinks />}
			</div> */}
			</div>
		</div>
	);
}

export { MobileNav };
