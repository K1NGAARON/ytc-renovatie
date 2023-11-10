function changeReviews() {
    const reviews = [
        {
            name: "Lieselot V",
            review: "Heel betrouwbaar. De werken zijn heel goed uitgevoerd . Een man van zijn woord. Alles perfect zoals wij het willen. Zoekt ook mee naar betaalbare oplossingen !!! Als wij terug iemand nodig hebben dan twijfel ik geen seconde om Yannick te contacteren!!!!",
        },
        {
            name: "Carine",
            review: "Ik ben zeer tevreden over de renovatiewerken van mijn badkamer. Yannick was van zijn woord, de werken werden steeds stipt uitgevoerd. Ook de opkuis was in orde.",
        },
        {
            name: "Jean D",
            review: "Tevreden! Ja, zeer tevreden over het geleverde werk. Yannick kent zijn vak, hij is van zijn woord en weet de verschillende beroepen te coördineren. Zijn advies werd ook zeer gewaardeerd en hij is erg vriendelijk. Heel erg bedankt voor alles 👍👍👍👍",
        }
    ];

    $('.dot').removeClass('active');
    $(this).addClass('active');

    const dotIndex = $('.dot').index(this);
    const reviewContainer = $('.review-wrapper');

    reviewContainer.find('.review-author').text(reviews[dotIndex].name);
    reviewContainer.find('.review-body').text(reviews[dotIndex].review);
};

$('.dot').click(changeReviews);

document.addEventListener( 'DOMContentLoaded', function() {
    new Splide( '#gallery-slides', {
        perPage: 3,
        perMove: 1,
        breakpoints: {
            1000: {
                heightRatio: 0.5,
                perPage: 2,
            }
        },
        type: 'loop',
        speed: 3000,
    }).mount();
});