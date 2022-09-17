import React, { useState, useEffect } from 'react';
import './_giftshop.scss';
import { NavLink } from 'react-router-dom';
import { LottieInteractive } from 'lottie-interactive'
import GiftshopLottie from './giftshoplottie';


export default class Giftshop extends React.Component {
	render() {
		return (
			<div class='giftshop__section'>
				<img
					class='giftshop__checker'
					src='./images/giftshop-checker.svg'
					alt='giftshop-checker'
				/>
				<div class='giftshop__bottomhero'>
					<img
						class='giftshop__logoimg'
						src='./images/hero.svg'
						style={{
							zIndex: '10',
						}}
						alt='hero'
					/>
					<div class='giftshop__linetop'></div>
					<NavLink to='/store'>
					<GiftshopLottie />
					</NavLink>
					<div class='giftshop__linebottom'></div>
				</div>
			</div>
		);
	}
}
