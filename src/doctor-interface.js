import $ from 'jquery';
import { DoctorInfo } from './../src/doctor-service.js'
import { DoctorSymptom } from './../src/doctor-service.js'

$(document).ready(function() {
  $("#locator").submit(function(event) {
    event.preventDefault();
    const symptoms = $("#userSympt").val();
    $("#userSympt").val("");

  

    $("#showName").prepend(`<li> ${name} ${city} </li>`)
    
  });
});