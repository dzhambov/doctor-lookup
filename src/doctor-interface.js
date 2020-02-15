import $ from 'jquery';
import { DoctorInfo } from './../src/doctor-service.js'
import { UserSymptom } from './../src/doctor-service.js'

$(document).ready(function() {
  $("#userSympt").submit(function(event) {
    event.preventDefault();
    const sympt = $("#symptoms").val();
    $("#symptoms").val("");

    (async () => {
      let userSymptom = new UserSymptom();
      const response1 = await userSymptom.getUserBySymptom(symptoms);
      this.getElementsByClassName(response1);
    })();

    $("#showName").prepend(`<li> ${name} ${city} </li>`)
    
  });
});