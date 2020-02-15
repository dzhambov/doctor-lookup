export class DoctorInfo {
  async getDoctorByName(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);  
      console.log(response);
      
      let jsonifiedResponse; 
      if (response.ok && response.status == 200) {
      } else {
        jsonifiedResponse = await response.json();
        jsonifiedResponse = false;
      }  
      return jsonifiedResponse;    
    } catch {
      return false;
    }
  }
}

export class UserSymptom {
  async getUserBySymptom(sympt) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${sympt}&location=or-portland&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`);
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