import spritePath from "../images/sprite.symbol.svg";

export function parkInfoTemplate(info) {
    return `<a href="/" class="hero_banner_title">${info.name}</a>
    <p class="hero_banner_subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
    </p>`; 
}

// home page
export function mediaTemplateCard(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name} class="media-card-img"/>
    <h1>${info.name}</h1>
    </a>
    <h2>${info.description}</h2>
    </div>
    `;
}

export function alertTemplate(alert) {
    let alertType = "";
    switch (alert.category) {
        case "Park Closure":
            alertType = "closure";
            break;
        default:
            alertType = alert.category.toLowerCase();
    }
    return `<li class="alert">
        <svg class="icon icon_alert" focusable="false" aria-hidden="true">
            <use href="${spritePath}#alert-${alertType}"></use>
        </svg>
        <div class="alert_info">
        <h3 class="alert-${alertType}">${alert.title}</h3>
        <p>${alert.description}</p>
        </div>
        </li>
    `;
}

//conditions 
export function visitorCenterTemplate(info) {
    return `<li class="visitor-center">
    <h3><a href="visitor-center.html?id=${info.id}">${info.name}</a></h3>
    <p>${info.description}</p>
    <p>${info.directionsInfo}</p>
    </li>`;
}

export function activitiesTemplate(activities) {
    return activities.map((activity) => `<li>${activity.name}</li>`).join("");
}


// footer
export function footerTemplate(info) {
    const voice = getPhoneNumber(info.contacts.phoneNumbers);

    return `
    <h1>CONTACT INFO</h1>
    <h2>Phone:</h2>
    <p>${voice}</p>
    `;
}

function getPhoneNumber(numbers) {
    const voice = numbers.find((number) => number.type === "Voice");
    return voice.phoneNumber;
}

// visitor center 
export function iconTemplate(iconId) {
    return `<svg class="icon" role="presentation" focusable="false">
              <use
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="/images/sprite.symbol.svg#${iconId}"
              ></use>
            </svg>`;
  }

export function vcDetailsTemplate(elementId, summaryText, iconId, content) {
    return `<details name="vc-details" id="${elementId}">
            <summary>
              ${iconTemplate(iconId)}
              ${summaryText}
            </summary>
            ${content}
          </details>`;
  }

export function vcTitleTemplate(text) {
    return `${iconTemplate("ranger-station")} ${text}`;
}

export function vcInfoTemplate(data) {
    const image = data.images[0];
    console.log(image);
    return `<figure>
    <img src="${image.url}" alt="${image.altText}"/>
    <figcaption>${image.caption} <span>${image.credit}</span></figcaption>
    <figure>
    <p>${data.description}</p>`;
}

export function listTemplate(data, contentTemplate) {
    const html = data.map(contentTemplate);
    return `<ul>${html.join("")}</ul>`;
}

function vcAddressTemplate(data) {
    return `<section> 
            <h3>${data.type} Address</h3>
            <address>
                ${data.line1}<br />
                ${data.city}, ${data.stateCode} ${data.postalCode}
            </address>    
            </section>`;
}

export function vcAddressesListTemplate(data) {
    const physical = data.find((address) => address.type === "Physical");
    const mailing = data.find((address) => address.type === "Mailing");
    let html = vcAddressTemplate(physical);
    if (mailing) {
      html += vcAddressTemplate(mailing);
    }
    return html;
  }

export function vcAmenityTemplate(data) {
    return `<li>${data}</li>`;
}

export function vcDirectionsTemplate(data) {
    return `<p>${data}</p>`;
}

export function vcContactsTemplate(data) {
    return `<section class="vc-contact__email">
    <h3>Email Address</h3>
    <a href="email:${data.emailAddresses[0].emailAddress}">Send this visitor center an email</a>
  </section>
  <section class="vc-contact__phone">
    <h3>Phone numbers</h3>
    <a href="tel:+1${data.phoneNumbers[0].phoneNumber}">${data.phoneNumbers[0].phoneNumber}</a>
  </section>`;
}

export function vcImageTemplate(data) {
    return `<li><img src="${data.url}" alt="${data.altText}" ><li>`;
}
