const myCarouselElement = document.querySelector('#carouselExampleIndicators')
const carouselone = new bootstrap.Carousel(myCarouselElement, {
	interval: 3000,
	wrap: true,
	ride: 'carousel',
})

const mySecondCarouselElement = document.querySelector('#carouselTestimonial')
const carouseltwo = new bootstrap.Carousel(mySecondCarouselElement, {
	interval: 3000,
	wrap: true,
	ride: 'carousel',
})
