const reviewsContent = [
    {
        name: 'Steven & Inge',
        body: 'Bedankt voor de mooie afwerking van de badkamer. Wij zijn super tevreden!',
    },
    {
        name: 'Steven & Inge',
        body: 'Bedankt voor de mooie afwerking van de badkamer. Wij zijn super tevreden!',
    },
    {
        name: 'Steven & Inge',
        body: 'Bedankt voor de mooie afwerking van de badkamer. Wij zijn super tevreden!',
    },
    {
        name: 'Steven & Inge',
        body: 'Bedankt voor de mooie afwerking van de badkamer. Wij zijn super tevreden!',
    },
    // {
    //     name: '',
    //     body: '',
    // },
    // {
    //     name: '',
    //     body: '',
    // },
    // {
    //     name: '',
    //     body: '',
    // },
    // {
    //     name: '',
    //     body: '',
    // },
];

function createCards(e) {
    const target = document.querySelector('#reviews-wrapper');
    const cards = reviewsContent.map(item => {
        return `
            <div class="item">
                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <p class="author">
                    ${item.name}
                </p>
                <p class="body">
                    ${item.body}
                </p>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
};

$(document).ready(createCards);