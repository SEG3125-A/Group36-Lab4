
//All items
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