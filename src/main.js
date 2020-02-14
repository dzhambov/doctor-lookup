import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Doctor } from './../src/doctor-service.js'

$(document).ready(function() {
  $("#locator").submit(function(event) {
    event.preventDefault();
    const name = $("#symptoms").val();
    $("#symptoms").val("");

    asyncApiCall();

    async function asyncApiCall() {
      try {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&${name}user_location=37.773%2C-122.413&skip=0&limit=10&${process.env.API_KEY}`);
        let jsonifiedResponse;
        if (response.ok && response.status == 200) {
          jsonifiedResponse = await response.json();
        } else {
          jsonifiedResponse = false;
        }
        getElements(jsonifiedResponse);
      } catch {
        getElements(false);
      }
    }



    
  });
});