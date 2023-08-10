require("./login");
require("./phonenumber");

import '../css/input.css';

import '../css/style.css';

import 'jquery';

import 'jquery-ui/ui/widgets/datepicker';

import '@fortawesome/fontawesome-free';

import 'jquery-ui/dist/themes/base/jquery-ui.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import 'inputmask';



document.addEventListener("DOMContentLoaded", () => {
    const createButton = document.getElementById("create");

    loadAndPopulateTable();

  
    createButton.addEventListener("click", () => {
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const phoneNumber = document.getElementById("phone").value;
      const birthday = document.getElementById("birthday").value;
  
      createPerson(firstName, lastName, phoneNumber, birthday);

      loadAndPopulateTable();

    });
  });
  
  function createPerson(firstName, lastName, phoneNumber, birthday) {
    const id = Date.now();
  
    const person = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      birthday: birthday,
      id: id,
    };

    const existingData = getPersons();
    existingData.push(person);
  
    document.cookie = `clientsData=${JSON.stringify(existingData)}; expires=Thu, 18 Dec 2023 12:00:00 UTC; path=/`;
  
  }
  

  function loadAndPopulateTable() {
    const table = document.getElementById("myTable");
    const people = getPersons();
    const button = $("<button>").text("Edit").addClass("btn-edit bg-blue-500 rounded-md text-white");   
    const button2 = $("<button>").text("Delete").addClass("btn-delete text-white ml-2 rounded-md bg-red-400");

    const rows = people.map(person => `<tr><td>${person.firstName}</td><td>${person.lastName}</td><td>${person.phoneNumber}</td><td>${person.birthday}</td></tr>`).join('')
    $(rows).after(button);
    $(rows).after(button2);

    table.innerHTML = `<thead class="text-cyan-900"><tr class="py-3 border-b border-b-gray-100"><th>First Name</th><th>Last Name</th><th>Phone Number</th><th>Birthday</th></tr></thead>${rows}`;

  }


  function getPersons() {
    const cookies = document.cookie.split('; ');
  
    for (const cookie of cookies) {
      const [key, value] = cookie.split('=');
      if (key === 'clientsData') {
        return JSON.parse(value);
      }
    }
  
    return [];
  }
  
// function updatePerson(id, firstName, lastName, phoneNumber, birthday){};

// function deletePerson(id){};


