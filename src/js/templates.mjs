export function parkInfoTemplate(info) {
    return `<a href="/" class="hero_banner_title">${info.name}</a>
    <p class="hero_banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`; 
}

export function mediaTemplateCard(info) {
    return `<div class="media-card">
    <img src="${info.image}"/>
    <h1>${info.name}</h1>
    <h2>${info.description}</h2>
    </div>
    `;
}

export function footerTemplate(info) {
    const voice = getPhoneNumber(info.contacts.phoneNumbers);

    return `<section class="contact">
    <h1>CONTACT INFO</h1>
    <h2>Phone:</h2>
    <p>${voice}</p>
    <img src="https://byui-cse.github.io/wdd231-course/images/topo_pattern.png"/>
    </section>
    `;
}

function getPhoneNumber(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}
