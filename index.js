
//All srevices
let allServices=[
    {
        name:"short cut",
        description:["A short haircut"],
        price:20,
        picture:"images/shorthair.jpg",
    },

    {
        name:"medium cut",
        description:["A medium haircut"],
        price:24,
        picture:"images/medhair.jpg",
    },

    {
        name:"long cut",
        description:["A long haircut"],
        price:28,
        picture:"images/longhair.jpg",
    },
    {
        name:"Dye Hair",
        description:["A service to dye hair"],
        price:32,
        picture:"images/dyedhair.jpg",
    },


];


//All barbers
let allBarbers=[
    {
        name:"Adrian Hayes",
        description:["Barber specializing in Men's cuts"],
        picture:"images/barberA.jpg",
    },

    {
        name:"Gavin Thompson",
        description:["Barber specializing in dying hair"],
        picture:"images/barberB.png",
    },

    {
        name:"Ethan Marshall",
        description:["Barber specializing in styling long hair"],
        picture:"images/barberC.jpeg",
    },
    {
        name:"Marcus Rodriguez",
        description:["Barber specializing in women's cuts"],
        picture:"images/barberD.jpg",
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

        const card = createServiceCard(allServices[i], i);
        serviceColumn.appendChild(card);
        serviceRow.appendChild(serviceColumn);
    }

    servicesContainer.appendChild(serviceRow);
}

// Create a service card element
function createServiceCard(service, i) {
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
    link.href = '#barbers';
    link.classList.add('btn', 'btn-primary');
    link.textContent = 'Choose service';
    link.id= "service-button-" + i;

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    cardBody.appendChild(link);

    card.appendChild(img);
    card.appendChild(cardBody);

    return card;
}

window.addEventListener("DOMContentLoaded", renderServiceCards);


$(document).ready(function() {
    function appointmentDetails(val) {
        let appointmentContainer = document.getElementById("serviceBlock");
        str = "service: " + allServices[val].name;
        appointmentContainer.setAttribute("value", str);
    }
    function barberDetails(val) {
        let appointmentContainer = document.getElementById("barberBlock");
        str = "barber: " + allBarbers[val].name;
        appointmentContainer.setAttribute("value", str);
    }
  
    $('#barb1').click(function() {
        barberDetails(0);
    })

    $('#barb2').click(function() {
        barberDetails(1);
    })

    $('#barb3').click(function() {
        barberDetails(2);
    })

    $('#service-button-0').click(function() {
        appointmentDetails(0);
    })
    $('#service-button-1').click(function() {
        appointmentDetails(1);
    })
    $('#service-button-2').click(function() {
        appointmentDetails(2);
    })
    $('#service-button-3').click(function() {
        appointmentDetails(3);
    })
  })

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