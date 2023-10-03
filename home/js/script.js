function changeReviews() {
    const reviews = [
        {
            name: 'Klant 1',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illum magnam. Adipisci obcaecati hic quaerat, molestias consequatur, ratione tempora tenetur officia neque suscipit earum iusto, consequuntur rem. Dolorem, cum!',
        },
        {
            name: 'Klant 2',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illum magnam. Adipisci obcaecati hic quaerat, molestias consequatur, ratione tempora tenetur officia neque suscipit earum iusto, consequuntur rem. Dolorem, cum!',
        },
        {
            name: 'Klant 3',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, illum magnam. Adipisci obcaecati hic quaerat, molestias consequatur, ratione tempora tenetur officia neque suscipit earum iusto, consequuntur rem. Dolorem, cum!',
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