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

const bubbleBoard = ['dot dot_selected', 'dot', 'dot', 'dot']




const leftArrow = document.querySelector('.arrow .arrow_left');
const rightArrow = document.querySelector('.arrow .arrow_right');
let image = document.querySelector('.banner-img');
let indexSlides = 0;
let texteSlide = document.querySelector('#banner p');


leftArrow.addEventListener('click', function (event) {
	indexSlides--;
	if (indexSlides < 0) {
		indexSlides = slides.length - 1;
	}
	console.log(indexSlides);
	image.src = 'https://thierry77170.github.io/Print-it-//assets/images/slideshow/' +  slides[indexSlides].image;
	
	texteSlide.innerHTML = slides[indexSlides].tagLine;

	updateBubbleBoard();
})

rightArrow.addEventListener('click', function (event) {
	indexSlides++;
	if (indexSlides > slides.length - 1) {
		indexSlides = 0;
	}
	console.log(indexSlides);
	image.src = 'https://thierry77170.github.io/Print-it-//assets/images/slideshow/' + slides[indexSlides].image;
	
	texteSlide.innerHTML = slides[indexSlides].tagLine;
	
	updateBubbleBoard();
})



function updateBubbleBoard() {
	const dots = document.querySelectorAll('.dot');
	console.log(dots);
	for (let i = 0; i < bubbleBoard.length; i++) {
		if (i === indexSlides) {
			dots[i].classList.add('dot_selected');
		} else {
			dots[i].classList.remove('dot_selected');
		}
	} 
	
}
