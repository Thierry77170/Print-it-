const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector('.arrow .arrow_left');
const rightArrow = document.querySelector('.arrow .arrow_right');
let image = document.querySelector('.banner-img');
let indexImg = 0;

leftArrow.addEventListener('click', function (event) {
	indexImg--;
	console.log(indexImg);

	if (indexImg < 0) {
		indexImg = slides.length - 1;
	}

	image.src = '../assets/images/slideshow/' +  slides[indexImg].image;
	console.log('arrow left');
})

rightArrow.addEventListener('click', function (event) {
	indexImg++;
	console.log(indexImg);

	if (indexImg > 3) {
		indexImg = 0;
	}

	image.src = '../assets/images/slideshow/' + slides[indexImg].image;
	console.log('arrow right');
})


