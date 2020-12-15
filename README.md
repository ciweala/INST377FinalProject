# GenEd.io

This project is meant to make finding a suitable class easier at University of Maryland, College Park. We offer you the ability to search for classes based on keywords, rather than course IDs. You can search for topics that you may be interested in, such as "American history" or "Weather." We place emphasis on the number of Open Seats available in each Section, so you know if it is able to fill up soon. 

Our target browser is Google Chrome on Laptops and Computers. Mobile devices are also supported.

## Heroku Link
[Click Me to Open!](https://guarded-earth-10598.herokuapp.com/final-project/)

## Manuals
[Click Me for User Manual!](#user-manual)


[Click Me for Developer Manual!](#developer-manual)

## User Manual
GenEd.io acts as a search engine specifically for courses available at University of Maryland College Park. When you search for a course, you are able to search for one of the four things. You can search for a general topic, such as "Weather," a department, such as "African American Studies", a department ID, such as "AASP", or a specifc course, such as "INST377." Doing any of these actions will return matches based on what you typed, and will display a list containing the course ID, the course name, the GenEds the course gives, the semester the course is held, the description of the course, the sections of the course, the professor(s) teaching, and the number of open and total seats available. 

## Developer Manual
To develop this app, we used a [JSON file](https://raw.githubusercontent.com/umdio/umdio-data/master/courses/data/202008.json) of UMD course data provided by [umd.io](https://umd.io/). We used [Node.js](https://nodejs.org/en/) to run our the application on our server and use [Heroku](https://signup.heroku.com/t/platform?c=70130000001xDpdAAE&gclid=CjwKCAiAt9z-BRBCEiwA_bWv-PoML7gKD3xYsHy-EpEdJcMaX74H16W8ozOh3RnKFBF1s5FJFg1OrxoCFHEQAvD_BwE) to get the front end to the user. The GET request gets the data from the JSON file, the POST request awaits the data, and the PUT requests gets the current user ID. Our CSS is developed using [Bulma.io](https://bulma.io/) class names. Current bugs include not being able to search on GenEds and having the local host being unresponsive at times. 