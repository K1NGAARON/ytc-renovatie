const reviewsContent = [
    {
        name: 'Cindy P',
        body: "Yannick is iemand die ons vertrouwen had gewonnen vanaf ons eerste gesprek. Zijn planning was feilloos, en ook als er een probleem ontstond, ging hij op zoek naar een oplossing. Hij wist ook dat we wat geld wilden uitsparen door mee te helpen, zelf dingen te doen. Wanneer dit mogelijk was, sprak hij ons daar ook over aan. Tip: als je iets zelf wilt doen, zorg dan wel dat je zelf echt ook kennis hebt van zaken. Communicatie is key. Hij is een heel eerlijk man en de mensen, met wie hij samenwerkt zijn ook één voor één toppers. We kregen alleen maar positieve feedback van omstaanders.",
    },
    {
        name: "Koen V",
        body: "Yannick is een professional waarop je kan rekenen. De vooropgestelde planning werd heel stipt uitgevoerd en opgevolgd. Bij mogelijke problemen die opduiken in een renovatie denkt Yannick mee om een oplossing te vinden. Hij is vriendelijk, steeds bereid om uitleg en advies te geven en heeft heel veel ervaring en vakkennis. Een absolute aanrader!",
    },
    {
        name: "Frederik D",
        body: "Zeer goeie ervaring: - veel vakkennis, heel professioneel - stipt, doet wat hij belooft - correct qua prijs - denkt mee om onvoorziene problemen op te lossen En het allerbelangrijkste: goed en proper werk!",
    },
    {
        name: "Carine",
        body: "Ik ben zeer tevreden over de renovatiewerken van mijn badkamer. Yannick was van zijn woord, de werken werden steeds stipt uitgevoerd. Ook de opkuis was in orde.",
    },
    {
        name: "Harald",
        body: "Wij zijn zeer tevreden over de renovatiewerken van onze badkamer. Yannick is duidelijk een man met liefde en passie voor zijn vak en dat is heel goed merkbaar. Hij denkt bovendien ook mee aan haalbare oplossingen voor de klant en staat steeds ter beschikking voor uitleg en advies. Bij onverwachte moeilijkheden steunt hij de klant ten volle en bewandelt hij alle pistes om een pasklare oplossing te bieden! Yannick coördineert bovendien alle werkzaamheden en maakt zelf de afspraken met de loodgieter, elektricien en andere vakmensen die hielpen aan de realisatie van onze nieuwe badkamer. Zo worden de werken op een zeer vlotte en efficiënte manier tot een goed einde gebracht. We zijn blij dat we Yannick hebben leren kennen en bij werken in de toekomst zullen we niet aarzelen om opnieuw beroep te doen op zijn uitstekend vakmanschap, toewijding en jarenlange ervaring! Oprechte dank aan Yannick voor het geleverde werk! Harald",
    },
    {
        name: "Jan",
        body: "Terras piekfijn in orde afgewerkt",
    },
    {
        name: "Eveline L",
        body: "Betrouwbaar, punctueel en altijd bereid om uitleg te geven of mee te denken, dat is hoe wij Yannick hebben leren kennen na meerdere renovaties. We ontvingen steevast een uitgebreide offerte en kregen altijd goed advies. Dankzij Yannick hadden wij geen verbouwzorgen. Hij coördineerde onze binnenhuiswerken (volledige renovatie gelijkvloers) zodat alles netjes na elkaar uitgevoerd werd zonder wekenlange pauzes tussendoor. Wanneer hij start, ben je er zeker van dat het project op korte termijn afgewerkt wordt. Ook de aanleg van onze oprit is een knap staaltje vakwerk geworden waar we enorm gelukkig mee zijn. Yannick is een echte stielman met veel liefde voor zijn vak en jarenlange ervaring. De mensen waarmee hij samenwerkt leveren steeds uitstekend werk. We zijn ongelooflijk blij dat we hem hebben leren kennen en raden hem met veel plezier aan.",
    },
    {
        name: "Lieselot V",
        body: "Heel betrouwbaar. De werken zijn heel goed uitgevoerd . Een man van zijn woord. Alles perfect zoals wij het willen. Zoekt ook mee naar betaalbare oplossingen !!! Als wij terug iemand nodig hebben dan twijfel ik geen seconde om Yannick te contacteren!!!!",
    },
    {
        name: "Pieter",
        body: "Onze renovatie bestond uit meerdere facetten: uitbreken vloeren en plafonds, nieuwe chappe en isolatie, nieuwe elektriciteit, leidingen, deuren en ramen, plamuren, etc. Vanaf offertefase was Yannick al zeer correct. Uitgebreide en gedetailleerde offerte, waarbij hij meedenkt over de beste oplossingen. Na akkoord offerte gedetailleerde timing die tot in de puntjes gevolgd wordt. De meerdere partners waar Yannick mee werkt zijn 1 voor 1 ook echte vakmensen waar je op kan rekenen. YTC kunnen we zeer sterk aanbevelen! Betrouwbaar, zeer nette werker, stipt en correct, etc.",
    },
    {
        name: "Christelle S",
        body: "Zeer punctueel, werken goed opgevolgd, prijs kwaliteit goed, nette en correcte uitvoering",
    },
    {
        name: "Anouchka",
        body: "Super content van alle uitgevoerde werken! Yannick voerde bij mij verschillende werken uit. Het startte met het vernieuwen van de badkamervloer daarna nam hij de oprit, trap naar de voordeur en de inkom voor zijn rekening. Daarna werd de riolering aangepakt en als laatste de terras in de tuin. Dit in verschillende fases. Ik zou nooit verder werken laten uitvoeren als de eerste werken niet in orde waren! Hij is een man van zijn woord, informeert over wat, wanneer en hoe. Hij vertelt je in begrijpbare taal over problemen die hij ondervindt tijdens de werken, zoekt naar een oplossing en informeert over extra kostprijs die dit met zich meebrengt. Hij is een man die voor en met zijn klant denkt. Hij kent zijn vak en is een Pietje precies. Yannick, dikke Merci door jou had ik geen zorgen over de werken. Anouchka",
    },
    {
        name: "Isabelle V",
        body: "Een man van zijn woord. Is altijd bereidt voor te luisteren naar de client en beantwoord de vragen. Alles wordt nauwkeurig opgevolgd, zeer ervaren mensen.Super team. Heel het plaatje klopt. Als er nog werken zal uitgevoerd worden zal ik steeds opnieuw beroep doen op Yannick en zijn team. Bedankt voor het mooie werk.",
    },
    {
        name: "Jean D",
        body: "Tevreden! Ja, zeer tevreden over het geleverde werk. Yannick kent zijn vak, hij is van zijn woord en weet de verschillende beroepen te coördineren. Zijn advies werd ook zeer gewaardeerd en hij is erg vriendelijk. Heel erg bedankt voor alles 👍👍👍👍",
    },
    // {
    //     name: "",
    //     body: "",
    // },
    // {
    //     name: "",
    //     body: "",
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