# _Doctor Locator_

#### _Web application using APIs., 2/07/20_

#### By _**Hristo Dzhambov**_

## Description

This webpage allows users to input their symptom and find doctors in their area.

## _Setup/Installation Requirements_

1. _Cloning_
  * _You can clone this repository to your desktop by opening your terminal and entering the prompt "cd desktop" followed by pressing the enter(return) key. Then type "$ git clone https://github.com/dzhambov/doctor-lookup" and press enter(return) again. This should create a folder on your desctop with the Doctor Lookup project to which you can navigate to using "$ cd doctor-lookup". Once in the folder you can open the project by typing "code ."_

2. _Downloading_
  * _In a web browswer navigate to https://github.com/dzhambov/doctor-lookup_
  * _Click the green "Clone or download" button and selct "Download ZIP"_
  * _Open the file and double click the "index.html" file to open the page!_
  * _Once cloned/downloaded, to run and make changes, in the terminal simply run **$ npm install** to download necessary dependencies_
  * _Run **$ npm run build** to create your dist folder with a bundle.js file_

3. _Onbtaining API KEY_

  * _Obtain API key from https://developer.betterdoctor.com/_
  * _Create .env file in the root directory of doctor-lookup_
  * _Add the API key to .env file (```API_KEY = <your API key here>```)_
  * _**IT IS IMPORTANT** that you add .env file to .gitignore file_ 
  * _The API key will now be referenced within the doctor-service.js file using the following syntax: ```${process.env.API_KEY}```_
  * _Lastly, run **$ npm run start** to run the application_

4. _GitHub Pages_
  * _You may also view the page by [clicking here](https://github.com/dzhambov/doctor-lookup)._

## Specifications

| Behavior | Input | Output |
|:----|:-----|:-----|
| The user is able to input a symptom | High fever | Recieves a list of doctors|
| The user is able to search a doctor by name | Dr. Smith | Returns results for Dr.Smith |
| The webpage displays doctor's info  | Symptom/ Dr's name | The user recieves doctor's fuul name, address, phone number, webpage, and if the doctor recieves new patients |
| The webpage displays and error message  | API call is different than 200 OK| "There was an error locatin a doctor. Please try again!" |
| The webpage returns a message that doctor was not found | API returns empty | "There was no doctor matching your criteria found. Please try different search!" |



## Technologies Used

To create this webpage I used the following progmas:
* _Git_ 
* _HTML_
* _CSS_
* _JavaScript_
* _jQuery_
* _Webpack_
* _npm_
* _API_


### Legal
This software is produced under the MIT license. <br/>
Copyright &copy; 2020 **_Hristo Dzhambov_**