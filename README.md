Front-end has been completed with four basic pages (Home/About/Gallery/Contact). Using React component system and the React Router functionality the front-end is able to change pages seamlessly and without page reloads being triggered. Briefly touched on hooks as well such as useHistory, useEffect (need to spend some more time to better understand hooks).
The back-end is a small python Flask file that handles the POST requests from the ReactJS front-end and sends out the email based on the information filled in on the form. First version used Flask-Mail to achieve the functionality of sending the email but was later revised to use SendGrid (a middleware service) because the only potentially exposed secret would be the API key which is far more secure than having your email credentials potentially exposed as would be the case with Flask-Mail.

I also use Firebase's Firestore and storage capabilities for the gallery page, the website queries the Firebase project to access images and place them on the page. Firebase was chosen over Amazon's S3 buckets because of its simplicity of setup and because you can host the images in the storage functionality of Firebase and add necssary data/tags for each image in the Firestore collection, additionally you can (as is done here) setup the query to the collection to trigger based on changes to the collection. Another factor in this choice was made because I did not need to have the capability to upload images directly from the website to the collection (ala Instagram) and this was a simple configuration.

The hosting is done through a 3rd party hosting company, I wanted to finish this project up at this stage and move on to working on other things so I decided to change the scope from including server-side work and hosting on my own through apps like Heroku or github pages.

See the website here:  [Hosted Website](pheonixlandscaping.ca)

Current issues: (On the TO-DO list)
-SendGrid is not receiving the requests from the deployed back-end (works from the development build on localhost). 
-Additionally, mobile view (from my cellphone) has issues on some pages where the contents overflow. 

I will continue to work on this project as time allows but this has allowed me to explore front-end development from development to deployment and get a glimpse of the process. 



OLD README:
This is a WIP currently, the project was started as a way to actively learn ReactJS (a front-end javascript framework) as well as learn and utilize Python Flask (a back-end framework).

Currently working on the front-end by learning and utilizing the component system that React offers, once the basic functionality of the website is implemented I will move on to working with the back-end. After back-end work I will move forward with hosting and server-side work, likely with NGINX, and attempt to host on a cloud based platform such as AWS. Following these steps I will return to add more pages & functionality to the web site.
