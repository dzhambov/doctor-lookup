export class Doctor {
  async getDoctorByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      // console.log(jsonifiedResponse);
      return jsonifiedResponse;
      
    } catch(error) {
      console.error("There was an error locatin a doctor. Please try again!" + error.message);
    }
  }
}