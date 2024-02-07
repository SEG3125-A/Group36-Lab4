
//All items
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