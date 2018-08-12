$(function () {
	// SITE HEADER
	// ==About Me Link Scroll==
	$('.aboutme').smoothScroll({
		speed: 700,
		easing: 'swing'
	});
	// ==Primary Nav Responsive==
	$('.hamburger').click(function () {
		$('.menu').slideDown(200).toggleClass('show');
	});

	$('.exit-link').click(function () {
		$('.menu').slideUp(200).toggleClass('show');
	});
	// HOME PAGE HEADER
	// ==Hero Image==
	$('.hero__gallery').flickity({
		autoPlay: true,
		pauseAutoPlayOnHover: false,
		freeScroll: true,
		prevNextButtons: false,
		pageDots: false,
		accessibility: true
	});
	// ABOUT ME
	$('.titles__instructor__button').click(function () {
		$('.image--open').fadeOut(1500).removeClass('image--open');
		$('.titles__instructor__image').fadeIn(1500).addClass('image--open');
		$('.text--open').fadeOut(1500).removeClass('text--open');
		$('.titles__instructor__text').fadeIn(1500).addClass('text--open');
	});

	$('.titles__performer__button').click(function () {
		$('.image--open').fadeOut(1500).removeClass('image--open');
		$('.titles__performer__image').fadeIn(1500).addClass('image--open');
		$('.text--open').fadeOut(1500).removeClass('text--open');
		$('.titles__performer__text').fadeIn(1500).addClass('text--open');
	});

	$('.titles__ceo__button').click(function () {
		$('.image--open').fadeOut(1500).removeClass('image--open');
		$('.titles__ceo__image').fadeIn(1500).addClass('image--open');
		$('.text--open').fadeOut(1500).removeClass('text--open');
		$('.titles__ceo__text').fadeIn(1500).addClass('text--open');
	});
	// GALLERY SECTION
	$('.captionsplits').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figuresplits').addClass('image-scale');
		$('.exit-link__gallerysplits').removeClass('show');
		$('.splits').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerysplits').click(function () {
		$('.exit-link__gallerysplits').addClass('show');
		$('.figuresplits').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.splits').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionsonhpoint').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figuresonhpoint').addClass('image-scale');
		$('.exit-link__gallerysonhpoint').removeClass('show');
		$('.sonhpoint').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerysonhpoint').click(function () {
		$('.exit-link__gallerysonhpoint').addClass('show');
		$('.figuresonhpoint').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.sonhpoint').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionsox').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figuresox').addClass('image-scale');
		$('.exit-link__gallerysox').removeClass('show');
		$('.sox').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerysox').click(function () {
		$('.exit-link__gallerysox').addClass('show');
		$('.figuresox').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.sox').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionpbandj').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figurepbandj').addClass('image-scale');
		$('.exit-link__gallerypbandj').removeClass('show');
		$('.pbandj').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerypbandj').click(function () {
		$('.exit-link__gallerypbandj').addClass('show');
		$('.figurepbandj').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.pbandj').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captiongreenglasses').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figuregreenglasses').addClass('image-scale');
		$('.exit-link__gallerygreenglasses').removeClass('show');
		$('.greenglasses').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerygreenglasses').click(function () {
		$('.exit-link__gallerygreenglasses').addClass('show');
		$('.figuregreenglasses').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.greenglasses').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionallfours').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figureallfours').addClass('image-scale');
		$('.exit-link__galleryallfours').removeClass('show');
		$('.allfours').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__galleryallfours').click(function () {
		$('.exit-link__galleryallfours').addClass('show');
		$('.figureallfours').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.allfours').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionashley').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figureashley').addClass('image-scale');
		$('.exit-link__galleryashley').removeClass('show');
		$('.ashley').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__galleryashley').click(function () {
		$('.exit-link__galleryashley').addClass('show');
		$('.figureashley').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.ashley').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionbowtie').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figurebowtie').addClass('image-scale');
		$('.exit-link__gallerybowtie').removeClass('show');
		$('.bowtie').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerybowtie').click(function () {
		$('.exit-link__gallerybowtie').addClass('show');
		$('.figurebowtie').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.bowtie').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionclaudiajump').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figureclaudiajump').addClass('image-scale');
		$('.exit-link__galleryclaudiajump').removeClass('show');
		$('.claudiajump').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__galleryclaudiajump').click(function () {
		$('.exit-link__galleryclaudiajump').addClass('show');
		$('.figureclaudiajump').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.claudiajump').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionfoamring').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figurefoamring').addClass('image-scale');
		$('.exit-link__galleryfoamring').removeClass('show');
		$('.foamring').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__galleryfoamring').click(function () {
		$('.exit-link__galleryfoamring').addClass('show');
		$('.figurefoamring').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.foamring').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captiongoofyglasses').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figuregoofyglasses').addClass('image-scale');
		$('.exit-link__gallerygoofyglasses').removeClass('show');
		$('.goofyglasses').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerygoofyglasses').click(function () {
		$('.exit-link__gallerygoofyglasses').addClass('show');
		$('.figuregoofyglasses').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.goofyglasses').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionleojasperme').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figureleojasperme').addClass('image-scale');
		$('.exit-link__galleryleojasperme').removeClass('show');
		$('.leojasperme').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__galleryleojasperme').click(function () {
		$('.exit-link__galleryleojasperme').addClass('show');
		$('.figureleojasperme').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.leojasperme').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionmiranda').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figuremiranda').addClass('image-scale');
		$('.exit-link__gallerymiranda').removeClass('show');
		$('.miranda').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerymiranda').click(function () {
		$('.exit-link__gallerymiranda').addClass('show');
		$('.figuremiranda').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.miranda').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionskyreach').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figureskyreach').addClass('image-scale');
		$('.exit-link__galleryskyreach').removeClass('show');
		$('.skyreach').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__galleryskyreach').click(function () {
		$('.exit-link__galleryskyreach').addClass('show');
		$('.figureskyreach').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.skyreach').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});

	$('.captionsoxperform').click(function () {
		$('.gallery__figcaption').addClass('caption-hide');
		$('.figuresoxperform').addClass('image-scale');
		$('.exit-link__gallerysoxperform').removeClass('show');
		$('.soxperform').addClass('image-border');
		$('.gallery__body').addClass('dim');
	});

	$('.exit-link__gallerysoxperform').click(function () {
		$('.exit-link__gallerysoxperform').addClass('show');
		$('.figuresoxperform').removeClass('image-scale');
		$('.gallery__figcaption').removeClass('caption-hide');
		$('.soxperform').removeClass('image-border');
		$('.gallery__body').removeClass('dim');
	});
	// UNDER CONSTRUCTION
	$(document).click(function () {
		$('.construction__image-container').effect('shake');
	});
});	