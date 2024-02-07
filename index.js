
//All srevices
let allServices=[
    {
        name:"short cut",
        description:["A haircut starting from short hair"],
        price:20,
        picture:"images/chicken.jpg",
    },

    {
        name:"long cut",
        description:["A haircut starting from long hair"],
        price:28,
        picture:"images/chicken.jpg",
    },

    {
        name:"long cut",
        description:["A haircut starting from long hair"],
        price:28,
        picture:"images/chicken.jpg",
    },
    {
        name:"long cut",
        description:["A haircut starting from long hair"],
        price:28,
        picture:"images/chicken.jpg",
    },


];


//All barbers
let allBarbers=[
    {
        name:"short cut",
        description:["A haircut starting from short hair"],
        picture:"images/chicken.jpg",
    },

    {
        name:"long cut",
        description:["A haircut starting from long hair"],
        picture:"images/chicken.jpg",
    },

    {
        name:"long cut",
        description:["A haircut starting from long hair"],
        picture:"images/chicken.jpg",
    },
    {
        name:"long cut",
        description:["A haircut starting from long hair"],
        picture:"images/chicken.jpg",
    },

];

// Render service cards
function renderServiceCards() {
    let servicesContainer = document.getElementById("services");
    let serviceRow = document.createElement("div");
    serviceRow.classList.add("row");

    // Assuming each card has a maximum width of 300px
    let cardWidth = 300;

    // Calculate the number of columns based on the width of each card
    let numCols = Math.floor(window.innerWidth / cardWidth);

    for(let i = 0; i < allServices.length; i++) {
        const serviceColumn = document.createElement("div");
        serviceColumn.classList.add("col-md-4-"+Math.floor(12/numCols));

        const card = createServiceCard(allServices[i]);
        serviceColumn.appendChild(card);
        serviceRow.appendChild(serviceColumn);
    }

    servicesContainer.appendChild(serviceRow);
}

// Create a service card element
function createServiceCard(service) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = service.picture;
    img.alt = 'Card image';

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h4');
    title.classList.add('card-title');
    title.textContent = service.name;

    const text = document.createElement('p');
    text.classList.add('card-text');
    text.textContent = '$' + service.price.toFixed(2);

    const link = document.createElement('a');
    link.href = '#appointment';
    link.classList.add('btn', 'btn-primary');
    link.textContent = 'Choose service';

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(link);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

window.addEventListener("DOMContentLoaded", renderServiceCards);


function submitAppointment() {
    // Your form submission logic goes here

    // Clear the form
    document.getElementById("appointmentForm").reset();

    // Show the confirmation modal
    $('#confirmationModal').modal('show');
  }

  // Reset the form when the modal is hidden
  $('#confirmationModal').on('hidden.bs.modal', function () {
    document.getElementById("appointmentForm").reset();
  });