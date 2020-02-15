import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { DoctorInfo } from './../src/doctor-service.js';
import { UserSymptom } from './../src/doctor-service.js';

$(document).ready(function() {
  $("#userSympt").submit(function(event) {
    event.preventDefault();
    const sympt = $("#symptoms").val();
    $("#symptoms").val("");

    (async () => {
      let userSymptom = new UserSymptom();
      const response1 = await userSymptom.getUserBySymptom(sympt);
      getElements(response1);
    })();
    
    function getElements(response1) {
      if (response1 === false) {
        $("#result").prepend("There was an error locatin a doctor. Please try again!")
        
      }
    }

    $("#showName").prepend(`<li> ${name}  </li>`);
    
  });
});


$(document).ready(function() {
  $("#info").submit(function(event) {
    event.preventDefault();
    const name = $("#docInfo").val();
    $("#docInfo").val("");

    (async () => {
      let doctorInfo = new DoctorInfo();
      const response2 = await doctorInfo.getDoctorByName(name);
    //   getElements(response2);
    })();
    
    // function getElements(response1) {
    //   if (response1) {

    //   }
    // }

    // $("#showName").prepend(`<li> ${name}  </li>`)
    
  });
  });