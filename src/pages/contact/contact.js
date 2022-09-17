import React from 'react';
import './_contact.scss';

class Contact extends React.Component {
	render() {
		return (
			<div className='contactpage'>
				<div class='box'>
					{' '}
					<img
						id='makecontactimg'
						src='./images/contact/makecontact.svg'
						style={{
							zIndex: '10',
						}}
					/>
				</div>

				<div className='contactpage__section'>
					<h2 class='contactpage__section__heading'>
						ARE YOU A BRAND? LOOKING FOR LOVE? <br />
						LET’S MAKE IT.
					</h2>
					<div className='contactpage__section__link'>
						<a href='mailto:studio@biginjapan.nyc?subject=Brand looking for love'>
							STUDIO@BIGINJAPAN.NYC
						</a>
					</div>
				</div>
				<div className='contactpage__section'>
					<h2 className='contactpage__section__heading'>
						ARE YOU A CREATIVE? HAVE A CRUSH ON US? <br />
						LET’S FLIRT.
					</h2>
					<div className='contactpage__section__link'>
						<a href='mailto:work@biginjapan.nyc?subject=Creative with a crush'>
							WORK@BIGINJAPAN.NYC
						</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
