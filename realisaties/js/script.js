const content = [
    {
        title: "Digitale marketing campagne voor een boekhouder",
        tag: "advertising",
        body: "",
        img: "/portfolio/online-boekhouder/img/banner.jpg",
        url: "/portfolio/online-boekhouder/"
    },
    {
        title: "Hoe een nieuwe website voor meer leads zorgt",
        tag: "website=development",
        body: "",
        img: "/portfolio/sunday/img/banner.jpg",
        url: "/portfolio/sunday/"
    },
    // {
    //     title: "",
    //     tag: "",
    //     body: "",
    //     img: "/portfolio/",
    //     url: "/portfolio/"
    // },
];

function createCards(e) {
    const target = document.querySelector('#content');

    const cards = content.map(item => {

        return `
            <div class="item card ${item.tag}">
                <img src="${item.img}" alt="${item.title}">
                <div class="content">
                    <h3>
                        ${item.title}
                    </h3>
                    <p>
                        ${item.body}
                    </p>
                    <a href="${item.url}" class="btn">
                        Lees meer
                        <i class="fa-solid fa-angle-right"></i>
                    </a>
                </div>
            </div>
        `;
    }).join('');

    target.innerHTML = cards;
}

function filterContent(e) {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    $('.content .card').fadeOut();

    let activeFilter = $(this).attr('id');

    if (activeFilter === 'all') {
        $('.content .card').fadeIn();
    } else {
        $('.' + activeFilter).fadeIn();
    }
}

$(document).ready(function() {
    createCards();
    $('.filter-btn').click(filterContent);
});