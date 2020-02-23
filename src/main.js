import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/doctor-service.js';


$(document).ready(function() {
  $("#info").submit(function(event) {
    event.preventDefault();
    const name = $("#docInfo").val();
    $("#docInfo").val("");
    console.log(name);
    
    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctorByName(name);
      getElements(response);
    })();
    
    function getElements(response) {
      let docArr = [];
      console.log(response);
      if (response === false) {
        $(".result").text("There was an error locatin a doctor. Please try again!");
      } else if (response.data.length === 0) {
        $("#noResult").text("There was no doctor matching your criteria found. Please try different search!");
      } else if (response.data.length > 0) {
        response.data.forEach(function(doc) {
          docArr.push(response);
          $("#doctorInformation").prepend(`<li> Doctor's Name: ${doc.profile.title} ${doc.profile.first_name} ${doc.profile.last_name} <br> Accepts New Patients: ${doc.practices[0].accepts_new_patients} <br> Address: ${doc.practices[0].visit_address.street} <br> ${doc.practices[0].visit_address.city}, ${doc.practices[0].visit_address.state}, ${doc.practices[0].visit_address.zip} <br> Phone: ${doc.practices[0].phones[0].number} <br> <a href="${doc.practices[0].website}"> Website: </a> </li>`);
        });
        
      }
    } 
  });
});