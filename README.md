# lucky_lottos_and_lexicons
personal project
oh CRUD!:  (CREATE) user registration or login system so that users can create accounts and save their favorite lucky numbers or fortunes
(READ) user dashboard where users can view their saved lucky numbers, and fortunes
(UPDATE) users will be able to update their email and password
(DELETE) users can delete their account or saved lucky numbers


SYNOPSIS: In lou of the billon dollar powerball and pretty much 2020 thus-far, I figured everyone could use a litle more luck. My app will do just that.. 
I plan on  giving the user some options, they could answer questions about their day from which we could extract lucky numbers, or they could use a horescope api to give them numbers or they could have  a random number generator that will show up as a fortune cookie they could click on and it would crack open and reaveal lucky numbers and a small fortune as well (which they could save). I thought it would also be cool if either there was a lucky fact of the day  that displayed and also a link that allowed them to learn facts about luck superstitions and how people attain luck in other cultures. The numbers they saved could be stored and time staped per a time api and maybe give them the weather as well. Of course I'll also wish them luck lol.

Currently I am reworking this project the current version is able to produce random numbers when the button is pressed, however I've run out of API requests. What I learned after completing my objectives for the course it that 3rd party API requests can quickly accumulate and become an expense (I ran out of free keys while I was testing my project and using postman to troubeshoot. So I decided that instead of sending an axios request on the front end through react, that I would send the request through the back end (this safely hides the activity in the backend of the website and should also cut down on the requests) furthermore I would like to write the logic to date check the information before sending a request. The information changes monthly so I would have it store the date and information and when it was recieved then when a request is sent from the front end to the backend it would check the date and if the month is different send a request, if not provide the current data. So I will be working that as well as adding more functionality to my user. 
