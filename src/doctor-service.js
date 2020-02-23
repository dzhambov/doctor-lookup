export class Doctor {
  async getDoctorByName(query) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${query}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=20&user_key=${process.env.API_KEY}`);  
      console.log(response);
      
      let jsonifiedResponse; 
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }  
      return jsonifiedResponse;    
    } catch {
      return false;
    
    }
  }
}