function changeReviews() {
    const reviews = [
        {
            name: 'Kim',
            review: 'Ik ben super tevreden over hoe Thomas mijn 2 bovenverdiepingen heeft gerenoveerd. Hij denkt mee over mogelijke oplossingen, hij levert kwaliteit en de communicatie liep altijd vlot. Sowieso zal hij de rest van mijn huis in de toekomst mogen aanpakken!!',
        },
        {
            name: 'Gery',
            review: 'Samenwerken met ARPV was super! De firma heeft onze zolder geïsoleerd en afgewerkt tot een mooie relaxruimte. Tevens heeft hij onze verwarming nagezien en verbeterd en de regenwatervoorziening aangepast. Er was hierbij steeds een vlotte communicatie en een duidelijke en correcte prijsofferte en prijssetting. De afgesproken timing werd gevolgd. Ook de afwerking is prima. Thomas gaf goede suggesties, steeds met aandacht voor kwaliteit én prijsbewust. Hij was heel betrokken bij ons hele project. En op en top vriendelijk!',
        },
        {
            name: 'Yoshi',
            review: 'Wij werkten samen met ARPV voor een totaalrenovatie van onze woning. Vanaf de ruwbouw tot de afwerking van de ruimtes werden alle werken met veel verantwoordelijkheid en oog voor detail uitgevoerd. Naast de werken zelf konden we ook steeds terecht bij ARPV voor vragen of goede ideeën omtrent afwerking en opbouw. Kortom een aannemer die mee helpt werken en denken aan het eindresultaat. 1000x bedankt voor wat je ons gezin gegeven hebt :) Geen vaarwel, maar een tot ziens!',
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