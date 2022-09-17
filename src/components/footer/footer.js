import React from 'react';
import '../footer/_footer.scss';


class Footer extends React.Component {
	render() {
		return (
			<footer>
				<div class='footer-div'>
					<h2 class='footer__subheading'>
						OBSESSED? <br />
						LET’S KEEP IN TOUCH
					</h2>
					<form action='/action_page.php'>
						<input
							type='text'
							id='fname'
							name='fname'
							value='Type your email here'
						/>
						<br />
						<input
							type='text'
							id='lname'
							name='lname'
							value='Type your name here'
						/>
						<br />
						<br />
						<input type='submit' value='SUBSCRIBE' />
					</form>
					<div id='line--footer'></div>
					<div class='footersection'>
						<h2 class='footer__subheading'>OR FOLLOW US ON</h2>
						<a href='https://www.instagram.com/biginjapan.nyc/' target='_blank'>
							<button id='instagram'>INSTAGRAM</button>
						</a>
						<a href='https://www.tiktok.com/biginjapan.nyc' target='_blank'>
							<button id='tiktok'>TIKTOK</button>
						</a>
					</div>
					<div class='line' id='line--footer'></div>
					<div class='footersection'>
						<h2 class='footer__subheading'>AND SAY “HI!” TO US BY</h2>
						<a href='mailto: studio@biginjapan.nyc'>
							<button id='email'>EMAIL</button>
						</a>
					</div>
					<div class='line' id='line-footer'></div>
					<p>
						We are actively working to provide a website that is accessible to
						all. By increasing the accessibility and usability of our site, we
						aim to adhere to available standards and guidelines. In the
						meantime, please contact us if you have difficulty accessing the
						Site. Art Direction by CUL DE SAC STUDIO
					</p>
				</div>
				
			</footer>
		);
	}
}

export default Footer;
