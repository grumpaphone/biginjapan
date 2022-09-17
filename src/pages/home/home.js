import React from 'react';

class Home extends React.Component {
	render() {
		return (
			<main>
				<div className='parent_container'>
					<div className='video_container'>
						<video width='100%' autoPlay={true} muted playsInline>
							<source src='../bigreel.mp4' type='video/mp4' />
						</video>
					</div>
					<div className='hero_container'>
						<div class='hero'>
							<img class='hero__logo' src='./images/hero.svg' alt='hero' />

							<div id='keepscrolling'>
								<img
									id='keepscrolling__img'
									src='./images/scroll.svg'
									alt='scroll'
								/>
							</div>
						</div>
					</div>
				</div>

				<div class='info'>
					<h1 class='info__heading'>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BIG IN JAPAN IS A CREATIVE STUDIO IN
						NEW YORK CITY SPECIALIZING IN BRAND BUILDING AND FILM PRODUCTION. WE
						SEEK BOLD PARTNERS AND CHALLENGING PROJECTS THAT ‘PUSH THE
						BOUNDARIES OF WHAT’S POSSIBLE.’
					</h1>
				</div>
			</main>
		);
	}
}

export default Home;
