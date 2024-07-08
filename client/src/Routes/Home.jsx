import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import oneimg from '../images/1.jpg'
import twoimg from '../images/2.jpg'
import threeimg from '../images/3.jpg'
import aboutimg from '../images/about.jpg'
import teams1img from '../images/teams1.jpg'
import teams2img from '../images/teams2.jpg'
import teams3img from '../images/teams3.jpg'
import teams4img from '../images/teams4.jpg'
import teamb1img from '../images/teamb1.jpg'
import teamb2img from '../images/teamb2.jpg'
import teamb3img from '../images/teamb3.jpg'
import teamb4img from '../images/teamb4.jpg'
import g1img from '../images/g1.jpg'
import g2img from '../images/g2.jpg'
import g3img from '../images/g3.jpg'
import g4img from '../images/g4.jpg'
import g5img from '../images/g5.jpg'
import g6img from '../images/g6.jpg'
import g7img from '../images/g7.jpg'
import g8img from '../images/g8.jpg'
import g9img from '../images/g9.jpg'
import g10img from '../images/g10.jpg'
import c1img from '../images/c1.jpg'
import c2img from '../images/c2.jpg'
import c3img from '../images/c3.jpg'
import c4img from '../images/c4.jpg'
import r1img from '../images/r1.jpg'
import r2img from '../images/r2.jpg'
import r3img from '../images/r3.jpg'
import r4img from '../images/r4.jpg'

const Home = () => {
	let prevteam = 1

	const changeTeam = x => {
		document.getElementById('team' + prevteam).style.display = 'none'
		document.getElementById('team' + x).style.display = 'flex'
		prevteam = x
	}

	const showImg = x => {
		let imgDiv = document.getElementById('imgveiw')
		let img = document.getElementById('imgveiw_img')
		let body = document.getElementById('body')

		body.style.height = '100vh'
		body.style.overflow = 'hidden'

		if (x === 1) img.src = g1img
		else if (x === 2) img.src = g2img
		else if (x === 3) img.src = g3img
		else if (x === 4) img.src = g4img
		else if (x === 5) img.src = g5img
		else if (x === 6) img.src = g6img
		else if (x === 7) img.src = g7img
		else if (x === 8) img.src = g8img
		else if (x === 9) img.src = g9img
		else if (x === 10) img.src = g10img

		imgDiv.style.display = 'block'

		imgDiv.scrollIntoView()
	}

	const closeImg = () => {
		let imgDiv = document.getElementById('imgveiw')
		let body = document.getElementById('body')
		let gallery = document.getElementById('gallery')

		body.style.height = ''
		body.style.overflow = ''

		imgDiv.style.display = 'none'

		gallery.scrollIntoView()
	}

	return (
		<React.Fragment>
			{/* Navbar component */}
			<nav className='navbar navbar-dark navbar-expand-md bg-dark'>
				<div className='container'>
					<a className='navbar-brand' href='#'>
						<h1>B-Hotel</h1>
					</a>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarTogglerDemo02'
						aria-controls='navbarTogglerDemo02'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarTogglerDemo02'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0 right'>
							<li className='nav-item hoverBig'>
								<a className='nav-link active rounded-1 px-2 px-1' href='#carouselExampleIndicators'>
									HOME
								</a>
							</li>
							<li className='nav-item hoverBig'>
								<a className='nav-link active rounded-1 px-2 px-1' href='#AboutUs'>
									ABOUT
								</a>
							</li>
							<li className='nav-item hoverBig'>
								<a className='nav-link active rounded-1 px-2 px-1' href='#team'>
									TEAM
								</a>
							</li>
							<li className='nav-item hoverBig'>
								<a className='nav-link active rounded-1 px-2 px-1' href='#gallery'>
									GALLERY
								</a>
							</li>
							<li className='nav-item hoverBig'>
								<a className='nav-link active rounded-1 px-2 px-1' href='#room'>
									ROOM
								</a>
							</li>
							<li className='nav-item hoverBig'>
								<a className='nav-link active rounded-1 px-2 px-1' href='#contact'>
									CONTACT US
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* Navbar component end */}
			{/* Carousal Compoenent start */}
			<div id='carouselExampleIndicators' className='carousel slide carousel-fade' data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='1'
						aria-label='Slide 2'></button>
					<button
						type='button'
						data-bs-target='#carouselExampleIndicators'
						data-bs-slide-to='2'
						aria-label='Slide 3'></button>
				</div>
				<div className='carousel-inner'>
					<div className='carousel-item active'>
						<img src={oneimg} className='d-block w-100' />
					</div>
					<div className='carousel-item'>
						<img src={twoimg} className='d-block w-100' />
					</div>
					<div className='carousel-item'>
						<img src={threeimg} className='d-block w-100' />
					</div>
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide='prev'>
					<span className='carousel-control-prev-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next'
					type='button'
					data-bs-target='#carouselExampleIndicators'
					data-bs-slide='next'>
					<span className='carousel-control-next-icon' aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
			<div className='carousalUpperHeader text-center container' style={{ width: '80vw' }}>
				<h1 className='lastText my-3'>The Marker Hotel</h1>
				<h3 className='text-white my-2'>STAY WITH FRIENDS AND FAMILY</h3>
				<p className='lastText my-1'>WELCOME TO OUR HOTEL</p>
			</div>
			{/* Carousel component end */}
			{/* Experience Component start */}
			<div className='container mt-5 fw-bold exp'>
				<div className='text-center row mx-auto my-5 py-2'>
					<h2>EXPERIENCE A GOOD STAY, ENJOY FANTASTIC OFFERS</h2>
					<h5 className='fw-bold lastText'>FIND OUR FRIENDLY WELCOMING RECEPTION</h5>
				</div>
				<div className='my-5 row mx-auto container-fluid text-center'>
					<div className='section col-lg-3 col-sm-6 bg-lightblack shadow-sm py-2'>
						<i className='fa fa-bed fa-5x p-4 border-bottom border-warning border-5' aria-hidden='true'></i>
						<p className='mt-4'>MASTER BEDROOMS</p>
					</div>
					<div className='section col-lg-3 col-sm-6 bg-lightblack shadow-sm py-2'>
						<i
							className='fa fa-building fa-5x p-4 border-bottom border-warning border-5'
							aria-hidden='true'></i>
						<p className='mt-4'>SEA VIEW BALCONY</p>
					</div>
					<div className='section col-lg-3 col-sm-6 bg-lightblack shadow-sm py-2'>
						<i
							className='fa fa-coffee fa-5x p-4 border-bottom border-warning border-5'
							aria-hidden='true'></i>
						<p className='mt-4'>LARGE CAFE</p>
					</div>
					<div className='section col-lg-3 col-sm-6 bg-lightblack shadow-sm py-2'>
						<i
							className='fa fa-wifi fa-5x p-4 border-bottom border-warning border-5'
							aria-hidden='true'></i>
						<p className='mt-4'>WIFI COVERAGE</p>
					</div>
				</div>
			</div>
			{/* Experience Component End */}
			{/* About Us Component Start */}
			<div className='aboutus' id='AboutUs'>
				<div style={{ margin: '10px 12%', width: '76%' }} className='container text-center'>
					<h1 className='my-5 fw-light'>About Our B-HOTEL</h1>
					<p className='text-secondary'>
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.Sed tempus vestibulum
						lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus ullamcorper, nisl nulla suscipit
						ligula, at imperdiet urna
					</p>
					<div>
						<img src={aboutimg} alt='about' className='w-100' />
					</div>
				</div>
			</div>
			{/* About Us Component End */}
			{/* Services Component Start */}
			<div className='services'>
				<div className='container text-center py-5'>
					<h1 className='serivcesTitle'>Our Services</h1>
					<div className='row'>
						<div className='col-sm-12 col-md-6'>
							<div className='card'>
								<i className='fa fa-credit-card fa-4x lastText' aria-hidden='true'></i>
								<div className='card-body'>
									<h5 className='card-title'>Stay First, Pay After!</h5>
									<p className='card-text text-start'>
										Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
										saepe eveniet ut et voluptates.
									</p>
									<p className='text-start mx-3'>
										<i className='fa fa-check lastText' aria-hidden='true'></i>
										Decorated room, proper air conditioned
									</p>
									<p className='text-start mx-3'>
										<i className='fa fa-check lastText' aria-hidden='true'></i>
										Private balcony
									</p>
								</div>
							</div>
						</div>
						<div className='col-sm-12 col-md-6'>
							<div className='card'>
								<i className='fa fa-clock fa-4x lastText' aria-hidden='true'></i>
								<div className='card-body'>
									<h5 className='card-title'>24 Hour Restaurant</h5>
									<p className='card-text text-start'>
										Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
										saepe eveniet ut et voluptates.
									</p>
									<p className='text-start mx-3'>
										<i className='fa fa-check lastText' aria-hidden='true'></i>
										24 hours room service
									</p>
									<p className='text-start mx-3'>
										<i className='fa fa-check lastText' aria-hidden='true'></i>
										24-hour Concierge service
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Services Component End */}
			{/* Team Component Start */}
			<div className='team container' id='team'>
				<div className='w-75 text-center mx-auto'>
					<h1 className='fw-normal firstText my-5'>Meet Our Team</h1>
					<div className='row w-100 text-center'>
						<img
							onClick={() => changeTeam(1)}
							className='img-circle ti col-3'
							src={teams1img}
							alt='teamone'
						/>
						<img
							onClick={() => changeTeam(2)}
							className='img-circle ti col-3'
							src={teams2img}
							alt='teamone'
						/>
						<img
							onClick={() => changeTeam(3)}
							className='img-circle ti col-3'
							src={teams3img}
							alt='teamone'
						/>
						<img
							onClick={() => changeTeam(4)}
							className='img-circle ti col-3'
							src={teams4img}
							alt='teamone'
						/>
					</div>
				</div>
				<div className='container my-5 w-75'>
					<div className='row team-div' id='team1'>
						<img src={teamb1img} className='col-12 col-sm-12 col-md-5 col-lg-4' />
						<div className='col-12 col-sm-12 col-md-7 col-lg-8 py-5'>
							<h3>Lucas Jimenez</h3>
							<p className='text-secondary'>MANAGER</p>
							<p className='my-3 thirdText'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum
								dolor.
							</p>

							<i className='secondText mx-1 fa-brands fa-facebook-square fa-2x'></i>
							<i className='text-primary mx-1 fa-brands fa-twitter-square fa-2x'></i>
							<i className='text-danger mx-1 fa-brands fa-google-plus-square fa-2x'></i>
							<i className='thirdText mx-1 fa-brands fa-linkedin fa-2x'></i>
						</div>
					</div>
					<div className='row team-div' id='team2'>
						<img src={teamb2img} className='col-12 col-sm-12 col-md-5 col-lg-4' />
						<div className='col-12 col-sm-12 col-md-7 col-lg-8 py-5'>
							<h3>Sarah Connor</h3>
							<p className='text-secondary'>RECEPTIONIST</p>
							<p className='my-3 thirdText'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum
								dolor.
							</p>

							<i className='secondText mx-1 fa-brands fa-facebook-square fa-2x'></i>
							<i className='text-primary mx-1 fa-brands fa-twitter-square fa-2x'></i>
							<i className='text-danger mx-1 fa-brands fa-google-plus-square fa-2x'></i>
							<i className='thirdText mx-1 fa-brands fa-linkedin fa-2x'></i>
						</div>
					</div>
					<div className='row team-div' id='team3'>
						<img src={teamb3img} className='col-12 col-sm-12 col-md-5 col-lg-4' />
						<div className='col-12 col-sm-12 col-md-7 col-lg-8 py-5'>
							<h3>Ivan Simpson</h3>
							<p className='text-secondary'>MANAGER</p>
							<p className='my-3 thirdText'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum
								dolor.
							</p>

							<i className='secondText mx-1 fa-brands fa-facebook-square fa-2x'></i>
							<i className='text-primary mx-1 fa-brands fa-twitter-square fa-2x'></i>
							<i className='text-danger mx-1 fa-brands fa-google-plus-square fa-2x'></i>
							<i className='thirdText mx-1 fa-brands fa-linkedin fa-2x'></i>
						</div>
					</div>
					<div className='row team-div' id='team4'>
						<img src={teamb4img} className='col-12 col-sm-12 col-md-5 col-lg-4' />
						<div className='col-12 col-sm-12 col-md-7 col-lg-8 py-5'>
							<h3>Marc Gutierrez</h3>
							<p className='text-secondary'>RECEPTIONIST</p>
							<p className='my-3 thirdText'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Lorem ipsum
								dolor.
							</p>

							<i className='secondText mx-1 fa-brands fa-facebook-square fa-2x'></i>
							<i className='text-primary mx-1 fa-brands fa-twitter-square fa-2x'></i>
							<i className='text-danger mx-1 fa-brands fa-google-plus-square fa-2x'></i>
							<i className='thirdText mx-1 fa-brands fa-linkedin fa-2x'></i>
						</div>
					</div>
				</div>
			</div>
			{/* Team Component End */}
			{/* Galery Component Start */}
			<div className='gallery w-100 text-center' id='gallery'>
				<h1 className='fw-normal firstText my-5'>Our Gallery</h1>
				<div className='mx-auto row g-0'>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(1)}>
						<img src={g1img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(2)}>
						<img src={g2img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(3)}>
						<img src={g3img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(4)}>
						<img src={g4img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(5)}>
						<img src={g5img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(6)}>
						<img src={g6img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(7)}>
						<img src={g7img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(8)}>
						<img src={g8img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(9)}>
						<img src={g9img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(10)}>
						<img src={g10img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(1)}>
						<img src={g1img} />
					</div>
					<div className='col-6 col-sm-6 col-md-3 col-lg-3 col-xl-3 hoverBig' onClick={() => showImg(4)}>
						<img src={g4img} />
					</div>
				</div>
				<div id='imgveiw'>
					<button onClick={closeImg}>
						<h1>X</h1>
					</button>
					<img src={g4img} id='imgveiw_img' />
				</div>
			</div>
			{/* Galery Component End */}
			{/* Testimonial Component Start */}
			<div
				id='carouselTestimonial'
				className='carousel slide carousel-slide bgfirst text-white'
				data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					<button
						type='button'
						data-bs-target='#carouselTestimonial'
						data-bs-slide-to='0'
						className='active'
						aria-current='true'
						aria-label='Slide 1'></button>
					<button
						type='button'
						data-bs-target='#carouselTestimonial'
						data-bs-slide-to='1'
						aria-label='Slide 2'></button>
					<button
						type='button'
						data-bs-target='#carouselTestimonial'
						data-bs-slide-to='2'
						aria-label='Slide 3'></button>
					<button
						type='button'
						data-bs-target='#carouselTestimonial'
						data-bs-slide-to='3'
						aria-label='Slide 4'></button>
				</div>
				<div className='carousel-inner container'>
					<div className='carousel-item active'>
						<div className='container mx-auto my-5 px-1 px-sm-1 px-md-3 px-lg-4 px-xl-5 row'>
							<div className='col-12 col-md-6'>
								<img src={c1img} className='w-100' />
							</div>
							<div className='col-12 col-md-6 testimonialtext'>
								<h4 className='mt-3 lastText'>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									Worth to come again
								</h4>
								<p className='text-start my-4 mx-2'>
									Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus
									ullamcorper, nisl nulla suscipit ligula, at imperdiet urna.{' '}
								</p>
								<h5 className='text-end mt-5'>Julia Rose</h5>
								<p className='text-end p2'>Germany</p>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
						<div className='row container mx-auto my-5 px-1 px-sm-1 px-md-3 px-lg-4 px-xl-5'>
							<div className='col-12 col-md-6'>
								<img src={c2img} className='w-100' />
							</div>
							<div className='col-12 col-md-6 testimonialtext'>
								<h4 className='mt-3 lastText'>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa-regular fa-star' aria-hidden='true'></i>
									Worth to come again
								</h4>
								<p className='text-start my-4 mx-2'>
									Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus
									ullamcorper, nisl nulla suscipit ligula, at imperdiet urna.{' '}
								</p>
								<h5 className='text-end mt-5'>Jahnatan Smith</h5>
								<p className='text-end p2'>United States</p>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
						<div className='row container mx-auto my-5 px-1 px-sm-1 px-md-3 px-lg-4 px-xl-5'>
							<div className='col-12 col-md-6'>
								<img src={c3img} className='w-100' />
							</div>
							<div className='col-12 col-md-6 testimonialtext'>
								<h4 className='mt-3 lastText'>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa fa-star' aria-hidden='true'></i>
									<i className='fa-regular fa-star' aria-hidden='true'></i>
									Worth to come again
								</h4>
								<p className='text-start my-4 mx-2'>
									Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus
									ullamcorper, nisl nulla suscipit ligula, at imperdiet urna.{' '}
								</p>
								<h5 className='text-end mt-5'>Rosalind Cloer</h5>
								<p className='text-end p2'>Italy</p>
							</div>
						</div>
					</div>
					<div className='carousel-item'>
						<div className='row container mx-auto my-5 px-1 px-sm-1 px-md-3 px-lg-4 px-xl-5'>
							<div className='col-12 col-md-6'>
								<img src={c4img} className='w-100' />
							</div>
							<div className='col-12 col-md-6 testimonialtext'>
								<h4 className='mt-3 lastText'>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-solid fa-star'></i>
									<i className='fa-regular fa-star'></i>
									<i className='fa-regular fa-star'></i>
									Worth to come again
								</h4>
								<p className='text-start my-4 mx-2'>
									Sed tempus vestibulum lacus blandit faucibus. Nunc imperdiet, diam nec rhoncus
									ullamcorper, nisl nulla suscipit ligula, at imperdiet urna.{' '}
								</p>
								<h5 className='text-end mt-5'>Amie Bublitz</h5>
								<p className='text-end p2'>Switzerland</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Testimonial Component End */}
			{/* Room Component Start */}
			<div className='rooms container text-center' id='room' style={{ margin: '100px auto' }}>
				<h1 className='fw-normal firstText my-5'>Rooms And Rates</h1>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-6 col-lg-3 shadow-sm py-1'>
						<img src={r1img} alt='room1' className='w-100' style={{ height: '300px' }} />
						<h5
							className='bgfirst text-white py-2 c_help'
							data-bs-toggle='collapse'
							href='#roominfo1'
							role='button'
							aria-expanded='false'
							aria-controls='roominfo1'>
							Deluxe Room
						</h5>
						<div className='m-3'>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-regular fa-star'></i>
						</div>
						<div id='roominfo1' className='collapse text-start roomInfo'>
							<ul>
								<li>Breakfast for 2 Persons WiFi & Cable TV DVD Player & Films (On request)</li>
								<li>
									1 Large Mineral Water 1.5 Liter Tea & Green Tea (Electric Kettle) Safety Vault
									(inside the room)
								</li>
								<li>70 Facilities in the NIGHT 100 Facilities in the DAY</li>
								<li>Area: 290 Sq. Ft Balcony: Yes View: Beach Front View</li>
								<li>Bathroom: 01 Shower: Yes</li>
								<li>Sitting: Sofa Chair Dining: No</li>
							</ul>
						</div>
						<div className='row container'>
							<h4 className='col-7 mt-1'>25,000 PKR</h4>
							<Link to={'/reservation/deluxe'}>
								<button className='col-5 bglast btn btn-warning'>book now</button>
							</Link>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-3 shadow-sm py-1'>
						<img src={r2img} alt='room1' className='w-100' style={{ height: '300px' }} />
						<h5
							className='bgfirst text-white py-2 c_help'
							data-bs-toggle='collapse'
							href='#roominfo2'
							role='button'
							aria-expanded='false'
							aria-controls='roominfo2'>
							Luxury Room
						</h5>
						<div className='m-3'>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-regular fa-star'></i>
						</div>
						<div id='roominfo2' className='collapse text-start roomInfo'>
							<ul>
								<li>Breakfast for 3 Persons WiFi & Cable TV DVD Player & Films (On request)</li>
								<li>
									1 Large Mineral Water 1.5 Liter Tea & Green Tea (Electric Kettle) Safety Vault
									(inside the room)
								</li>
								<li>70 Facilities in the NIGHT 100 Facilities in the DAY</li>
								<li>Area: 450/408/438 Sq. Ft Balcony: No View: Garden View</li>
								<li>Bathroom: 01 Shower: Yes</li>
								<li>Sitting: Lounge Dining: No</li>
							</ul>
						</div>
						<div className='row container'>
							<h4 className='col-7 mt-1'>15,000 PKR</h4>
							<Link to='/reservation/luxury'>
								<button className='col-5 bglast btn btn-warning'>book now</button>
							</Link>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-3 shadow-sm py-1'>
						<img src={r3img} alt='room1' className='w-100' style={{ height: '300px' }} />
						<h5
							className='bgfirst text-white py-2 c_help'
							data-bs-toggle='collapse'
							href='#roominfo3'
							role='button'
							aria-expanded='false'
							aria-controls='roominfo3'>
							Guest House
						</h5>
						<div className='m-3'>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-regular fa-star'></i>
							<i className='fa-regular fa-star'></i>
						</div>
						<div id='roominfo3' className='collapse text-start roomInfo'>
							<ul>
								<li>Breakfast for 4 Persons WiFi & Cable TV DVD Player & Films (On request)</li>
								<li>
									1 Large Mineral Water 1.5 Liter Tea & Green Tea (Electric Kettle) Safety Vault
									(inside the room)
								</li>
								<li>70 Facilities in the NIGHT 100 Facilities in the DAY</li>
								<li>Area: 725 Sq. Ft Balcony: No View: Garden View</li>
								<li>Bathroom: 02 Shower: Yes Bathtub: Yes</li>
								<li>Sitting: Lounge Dining: No</li>
							</ul>
						</div>
						<div className='row container'>
							<h4 className='col-7 mt-1'>10,000 PKR</h4>
							<Link to='/reservation/guest'>
								<button className='col-5 bglast btn btn-warning'>book now</button>
							</Link>
						</div>
					</div>
					<div className='col-12 col-sm-12 col-md-6 col-lg-3 shadow-sm py-1'>
						<img src={r4img} alt='room1' className='w-100' style={{ height: '300px' }} />
						<h5
							className='bgfirst text-white py-2 c_help'
							data-bs-toggle='collapse'
							href='#roominfo4'
							role='button'
							aria-expanded='false'
							aria-controls='roominfo4'>
							Single Room
						</h5>
						<div className='m-3'>
							<i className='fa-solid fa-star'></i>
							<i className='fa-solid fa-star'></i>
							<i className='fa-regular fa-star'></i>
							<i className='fa-regular fa-star'></i>
							<i className='fa-regular fa-star'></i>
						</div>
						<div id='roominfo4' className='collapse text-start roomInfo'>
							<ul>
								<li>Breakfast for 6 Persons WiFi & Cable TV DVD Player & Films (On request)</li>
								<li>
									1 Large Mineral Water 1.5 Liter Tea & Green Tea (Electric Kettle) Safety Vault
									(inside the room)
								</li>
								<li>70 Facilities in the NIGHT 100 Facilities in the DAY</li>
								<li>Area: 1152 Sq. Ft Balcony: Yes View: Garden View</li>
								<li>Bathroom: 02 Shower: Yes Bathtub: Yes</li>
								<li>Sitting: Lounge Dining: Yes</li>
							</ul>
						</div>
						<div className='row container'>
							<h4 className='col-7 mt-1'>5,000 PKR</h4>
							<Link to='/reservation/single'>
								<button className='col-5 btn btn-warning bglast'>book now</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* Room Component End */}
			{/* Footer Component Start */}
			<footer style={{ padding: '10vh 50px', paddingBottom: '0vh' }} id='contact'>
				<div className='container mx-auto'>
					<div className='p-5' style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
						<h1 className='text-white text-center'>Connect With Us</h1>
						<h6 className='mt-3 lastText py-3'>
							Phone : <span className='text-white'> +92 347 8590567</span>
						</h6>
						<h6 className='mt-3 lastText pt-1 pb-2'>
							Email : <span className='text-white'> info@bhotel.com</span>
						</h6>
						<h6 className='mt-3 lastText pt-2 pb-2'>
							Address :{' '}
							<span className='text-white'> Thandi Sarak State Life 3 and 4 floor SZABIST Hyderabad</span>
						</h6>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.7668004813886!2d68.33416131484923!3d25.37913098381189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c7082ef4223ad%3A0xb85f7c325c5d854c!2sSZABIST%20Hyderabad%20Campus!5e0!3m2!1sen!2s!4v1653045173934!5m2!1sen!2s'
							style={{ width: '100%', height: '300px' }}
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'></iframe>
					</div>
				</div>
			</footer>
			{/* Footer Component End */}
		</React.Fragment>
	)
}

export default Home
