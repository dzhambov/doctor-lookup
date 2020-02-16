import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './../src/doctor-service.js';
// import { UserSymptom } from './../src/doctor-service.js';

// $(document).ready(function() {
//   $("#userSympt").submit(function(event) {
//     event.preventDefault();
//     const sympt = $("#symptoms").val();
//     $("#symptoms").val("");
//     console.log(sympt);
    
//     (async () => {
//       let userSymptom = new UserSymptom();
//       const response1 = await userSymptom.getUserBySymptom(sympt);
//       getElements(response1);
//     })();
    
//     function getElements(response1) {
//       if (response1 === false) {
//         $("#result").prepend("There was an error locatin a doctor. Please try again!")
        
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
    // console.log(name);

    (async () => {
      let doctorInfo = new DoctorInfo();
      const response2 = await doctorInfo.getDoctorByName(name);
      getElements(response2);
    })();
    
    function getElements(response2) {
      let docArr = [];
      // let docNameArr = [];
      console.log(response2);
      if (response2 === false) {
        $("#result").text("There was an error locatin a doctor. Please try again!");
      } else if (response2.data.length === 0) {
        $("#noResult").text("There was no doctor matching your criteria found. Please try different search!");
      } else if (response2.data.length > 0) {
        // for (let i = 0; i <= response2.data.length; i++) {
        response2.data.forEach(function(doc) {
          docArr.push(response2);
            $("#showLastName").append(`<li> First Name:${doc.profile.first_name} <br> Last Name:${doc.profile.last_name} </li>`);
          })
         
          
        // }
      }
      // $("#result").append(docNameArr);
    } 
    });
  });