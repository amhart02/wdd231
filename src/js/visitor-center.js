import { setHeaderFooter } from "./setHeaderFooter.mjs";
import { getParkData, getParkVisitorCenterDetails } from "./parkService.mjs";
import { vcInfoTemplate, vcTitleTemplate, vcDetailsTemplate, vcAmenityTemplate, vcImageTemplate, listTemplate, vcAddressesListTemplate, vcDirectionsTemplate, vcContactsTemplate } from "./templates.mjs";

function getParam(param) {
    const search = location.search;
    const params = new URLSearchParams(search);
    return params.get(param);
}

function buildPage(data) {
    document.querySelector(".vc-name").innerHTML = vcTitleTemplate(data.name);
    document.querySelector(".vc-info").innerHTML = vcInfoTemplate(data);
    const details = document.querySelector(".vc-details-list");
    details.innerHTML = "";
    const addressHTML = vcAddressesListTemplate(data.addresses);
    details.insertAdjacentHTML("beforeend",
      vcDetailsTemplate(
        "vcAddresses",
        "Addresses",
        "heading-icon_map-pin",
        addressHTML
      )
    );
    details.insertAdjacentHTML("beforeend",
      vcDetailsTemplate(
        "vcDirections",
        "Directions",
        "directions",
        vcDirectionsTemplate(data.directionsInfo)
      )
    );
    const amenitiesHTML = listTemplate(data.amenities, vcAmenityTemplate);
    details.insertAdjacentHTML("beforeend",
      vcDetailsTemplate(
        "vcAmenities",
        "Amenities",
        "heading-icon_info",
        amenitiesHTML
      )
    );
    const contactHTML = vcContactsTemplate(data.contacts);
    details.insertAdjacentHTML("beforeend",
      vcDetailsTemplate("vcContacts", "Contacts", "phone", contactHTML)
    );
    const galleryHTML = listTemplate(data.images, vcImageTemplate);
    document.querySelector(".vc-gallery").insertAdjacentHTML("beforeend", galleryHTML);
  }
  

async function init() {
    const parkData = await getParkData();
    const id = getParam("id");
    const centerDetails = await getParkVisitorCenterDetails(id);    
    setHeaderFooter(parkData);
    buildPage(centerDetails);
}

init();
