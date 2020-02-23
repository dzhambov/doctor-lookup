import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/doctor-service.js';
// import { UserSymptom } from './../src/doctor-service.js';

// $(document).ready(function() {
//   $("#userSympt").submit(function(event) {
//     event.preventDefault();
//     const sympt = $("#symptoms").val();
//     $("#symptoms").val("");
//     console.log(sympt);
    
//     (async () => {
//       let userSymptom = new UserSymptom();
//       const response1 = await doctor.getUserBySymptom(sympt);
//       getElements(response1);
//     })();
    
//     function getElements(response1) {
//       if (response1 === false) {
//         $("#result").prepend("There was an error locatin a doctor. Please try again!");
        
//       }
//     }

//     $("#showName").prepend(`<li> ${name}  </li>`);
    
//   });
// });


$(document).ready(function() {
  $("#info").submit(function(event) {
    event.preventDefault();
    const name = $("#docInfo").val();
    $("#docInfo").val("");
    console.log(name);
    
    (async () => {
      let doctor = new Doctor();
      const response2 = await doctor.getDoctorByName(name);
      getElements(response2);
    })();
    
    function getElements(response2) {
      let docArr = [];
      console.log(response2);
      if (response2 === false) {
        $(".result").text("There was an error locatin a doctor. Please try again!");
      } else if (response2.data.length === 0) {
        $("#noResult").text("There was no doctor matching your criteria found. Please try different search!");
      } else if (response2.data.length > 0) {
        response2.data.forEach(function(doc) {
          docArr.push(response2);
          $("#doctorInformation").prepend(`<li> Doctor's Name: ${doc.profile.title} ${doc.profile.first_name} ${doc.profile.last_name} <br> Accepts New Patients: ${doc.practices[0].accepts_new_patients} <br> Address: ${doc.practices[0].visit_address.street} <br> ${doc.practices[0].visit_address.city}, ${doc.practices[0].visit_address.state}, ${doc.practices[0].visit_address.zip} <br> Phone: ${doc.practices[0].phones[0].number}</li>`);
        });
        
      }
    } 
  });
});