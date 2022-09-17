import React from 'react';
import './_about.scss';
import Draggable from 'react-draggable';

import DevLottie from './fanlottie';
import FanLottie from './devlottie';
import PostLottie from './postlottie';
import ProdLottie from './prodlottie';
import TrueLottie from './truelottie';

class About extends React.Component {
	render() {
		return (
			<div className='about'>
			<div className='ourstory'>
					<img src='/images/about/ourstory.svg' alt='our story' />
					<div className='fallingbricks'>
						<Draggable>
							<div className='brick'>
								<p>CREATIVE</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>STRATEGY</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>BRANDING</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>WRITING</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>SCRIPTING</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>FILM</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>PHOTO</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>DESIGN</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>POST</p>
							</div>
						</Draggable>
						<Draggable>
							<div className='brick'>
								<p>ANIMATION</p>
							</div>
						</Draggable>
					</div>
				</div>

				<h2 className='about__heading'>
					BIG IN JAPAN IS AN experimental <span class='orange'>m</span>
					<span class='pink'>u</span>
					<span class='blue'>l</span>
					<span class='green'>t</span>
					<span class='red'>i</span>-disciplinary studio based in BROOKLYN, NY.
					Founded in 2017 by PATRICE LIGHTER, JOE ACCARDI.
				</h2>
				<div className='about__hero'>
					<img src='/images/about/70sphoto.svg' alt='70s Vibe' />
					<p className='about_description'>
						Inspired by rock bands of the late 70s who were initially written
						off by the Western market, but experienced wild success in the
						foreign, more fervent fandoms of Japan — we believe in true fandom
						over mass appeal. We exist to uncover and champion your brand’s
						unique narrative truth, because we find that knowing the why behind
						a project consistently leads to the most meaningful executions. Our
						approach begins with us becoming your biggest fans, and usually ends
						with you becoming ours.
					</p>
				</div>
				<div className='process'>
					<img src='/images/about/ourprocess.svg' alt='Our Process' />
					<div className='processcards__section'>
						<div className='processcards' id='fangirl'>
							<div className='circle'>1</div>
							<FanLottie />
							<p>
								This is the discovery stage, where we bring the art of
								conversation to your plans, dreams, and needs. These exploratory
								talks help us to find the narrative truth at the core of your
								brand and imagine the medium and scale for your message.
								<br />
								<br />
								We build an emotionscape for your brand and your specific
								project: a set of ideas that will apply to every piece of your
								brand story, from naming, to visuals, content and beyond..
							</p>
						</div>
						<div className='processcards' id='dev'>
							<div className='circle'>2</div>

							<DevLottie />
							<p>
								Once we’ve fangirled, we fan out, and develop a plan for your
								needs, recommending the best creatives to work in-house with us,
								for you. <br />
								<br />
								This is where you get excited. We present a step-by-step
								actionable process and strategy to help you make moves.
								<br />
								<br /> From references and creative direction, to workshops and
								storyboarding, we align on the BIG picture, so that you can feel
								solid and we can get work.
							</p>
						</div>
						<div className='processcards' id='prod'>
							<div className='circle'>3</div>

							<ProdLottie />
							<p>
								This is where the magic happens. Our process is detailed and
								calibrated, so you can watch your truth come to life.
							</p>
							<div className='listcontainer'>
								<div className='list'>
									Creative <br />
									Strategy
									<br /> Branding
									<br /> Writing
									<br /> Scripting
								</div>
								<div className='list'>
									Film <br />
									Photo
									<br /> Design
									<br /> Post
									<br /> Animation
								</div>
							</div>
						</div>
						<div className='processcards' id='post'>
							<div className='circle'>4</div>

							<PostLottie />
							<p>
								Post-production is an art, and we put as much into polishing and
								refining as we do into developing and creating. Once your
								project is perfected, we have the BIG reveal.{' '}
							</p>
						</div>
						<div className='processcards' id='true'>
							<div className='circle'>5</div>

							<TrueLottie />
							<p>
								This is where we regularly meet to continue to grow your vision
								and develop new strategies and tools to foster your brand
								evolution.
								<br />
								<br /> We provide ongoing creative direction, social strategy,
								and tech support as you go from BIG to bigger so we can even pop
								on to help with seasonal production.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
