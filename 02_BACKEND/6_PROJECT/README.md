
# Projects

## 1. Resume/Profile Create Web application

An online resume generator application will able to generate resume for students and professional based on their input data. We will have options of downloading the resume or hosting the resume on a particular URL (which user can share). Users will be able to choose between many Template designs for their resume. User data will be stored in database and can be edited later on.

- User Login (Social Logins)
- Saving user info using validated forms
- HTML/CSS based templates to design different style of resumes
- PDF generation of completed resume
- Providing link on online resume of a person (HTML version / PDF version)

## 2. Online Tic Tac Toe

Tic Tac Toe is quite ubiquitous popular game. We have a 3 x 3 grid with traditional cross and circle notation. However playing tic tac toe with a distant friend connected via social media is a dream come true. Here is the simple game  :

- Connect with Facebook/Google Login for user Identity. 
- Find all people logged in via Facebook on this application
- Challenge someone to play with you.
- Have a separate scorecard for each pair of users.
- show world leaderboard - where you can have your algorithms to show chart toppers - may be number or wins or win/lose ratio.
- UI should be simple and understandable. 
- Use of animation is preferable but should not be too much
- Mobile friendliness is required
- Sounds are optional but can add a lot to the game. 

## 3. E-commerce Application

An Amazon like store to find and buy things. The site will have to interface one for admin and other for general users :

User site features :
- User must be able to search product via name/ category etc.
- Each item will belong to atleast one category of items (like electronics)
- Each item will have some fields - name, price, description, image etc.
- User can sort items by any field - name , price etc.
- Cart will have features to add item, remove item, change item quantity, show total etc.
- User order will be saved in database.
- User can check details of their old orders.

Admin site features :
- Admin must login using a secret password.
- Admin panel should show you list of all available products with their available quanities.
- Admin can add new items to store or delete old items. You can optionally provide them access to edit item details.
- Admin can update quantity of any item.

## 4. Photogram


PhotoGram Project is a web app similar to instagram. Purpose of app is to store your photos in an album and add some filters. Users can login and browse their old photos, search them by name, sort using name/date added etc. They can also apply instagram style filters to their photos.

Features :

1. The user can sign up and create a new account. Check for email duplicate scenario and show an appropriate message if the same email is used for login.
2. The user can log in using the previous email/password combination. If email/pass is incorrect to show the appropriate error.
3. If the user successfully creates a new account take him to create a new post form - which will have fields photo, caption etc. Date will also be stored in database along with these information.
4. After submitting the above form user should automatically be redirected/routed to the photo Gallery page.
5. Gallery page should show all cards of logged in user. Only photos uploaded by the same user must be displayed.
6. If user login into existing account he must be redirected to Gallery page if he has 1 or more cards uploaded. If no cards are there he must be redirected to the same form as after signup.
7. Gallery page should also have a link to form page - using button - “Create new card”.
8. The user can also delete cards from gallery page by click on a cross Icon “X” which you can add to all cards in front-end.
9. To maintained loggedIn user use sessions and localStorage.

## 5.  Online Pokemon


PokeMon requires your help. Save them by picking the right ones. There are some good characters and there are the bad ones. Create a 8×8 Div to make a gameboard.

Game Rules (Offline)
1. Pikachu should appear at random places.
2. At the same time bad guy (giovanni) will also appear.
3. Pikachu and bad guy can’t be on same grid box.
4. You have to click Pikachu Grid to save it.
5. One correct click means +1
6. Consecutive 3 correct means +5 bonus also.
7. Wrong answer will mean a strike.
8. 3 strikes in continuation means “Game Over”
9. A total of 30 points mean Level Complete.
10. 1st Level will have Pikachu and Other Guy appearing for 2 second.
11. There will be a gap of 3 seconds in between next round.
12. With every increasing Level Pikachu and other will appear for lesser time. And gap of round will also be decreased after each Level.

Game Rules (Online)
1. All above rules will be applicable accept for their is no 'Game Over' and correct point is given to only the first person who click the pikachu.


## 6. Multi-User Chat Application

Multi-user chat will be a web application where users can chat privately or in group chat.

* Google Login and Custom Login for users
* User will see a whatapp web like interface on left hand side menu
* Multi user group chat (For all logged in users)
* File sharing and File upload
* Chat Room Should be accessed via name credentials ( later on social login)
* You can upload a picture in your profile
* You can change profile settings
* All online users should be shown in side pane
* click on a user to selectively chat with him/her
* Group chat should be visible to all 
* Provide theme color to user which will be used as there chat text also
* Allow #tag feature where one can tag a statement which be later searched on via a search box
* Search box should be able to search all text, usernames
* Time stamp must be visible in Chat (in form of time Ago)
* Chat should auto scroll to lowest part
* Use filters to filter out any blacklisted words
* Block user based on use of blacklisted words
* See the chat from where you have left
* only show last 100 messages and load old ones on demand via a scroll function.
* Use a sound directive for special characters


## 7. Medical Chatbot

Chat bots are the need of the time. With too much information overload and lots of application to interact with - humans need a way to interact with devices in more human way. Chat bots makes your life easy by putting up intelligent question, suggestions and making choice simple enough. We are designing a chat bot which may diagnose simple disease or common problem with health.

- Chatbot should be invoked as soon as you open the website
- Chatbot should provide few options for any questions you put up
- By navigation through choices you should be able to reach to final search results.
- Chat bot should start with category of malice you have and then dive into details of each
- You can categorize few common symptoms like headache, flus and food allergies.
- This app will not recommend any medicine but can recommend simple cure which are available in household.


## 8. Quiz / Online exam Application


Admin Panel

- Add a question 
- Edit a question 
- Remove question
- Change the order of questions(Move the questions up or down)
- Choose the type of answer for the question(short answer, long answer, MCQ etc.)
- Time limit for a question 
- Time limit for the test
- Negative marking
- Choose randomization of questions for adjacent systems
- Choose different question for different students(Set - A,B,C,D)
- Save the state of answers and auto submit at the end of test if the student has not submitted the test himself 
- Making test go live after editted  in private mode. 

Examinee side

- Login
- One question per page.
- Mark a question as “remind me” later
- Show overall progress which show attempted / unattempted questions.
- Timer showing the timing remains or time completed
- Submit paper at end of time automatically.
- Manual submit option.


## 9. Party/Trip Expense planner


This app can be used to manage expenses between friends who are planning an event/trip/party. This app will help in adding all expenses done by any individual. It will provide the report of who owes how much and money should be given to whom.

Features :

- Social login
- Creating a group of friends who have account on this app.
- Make a new event/trip (name of event)
- Adding entries of money given by individuals. (Who paid, for what, how much)
- Updating any old entry (but with having updated date shown and count of updated version)
- Deleting entry by confirmation of multiple users.
- Functionality to end the event - so no new entries can be made.
- Functionality to show who owes and who should get the money.
- Automating mails and messages to every member about how much they owe or will get at end of trip.


## 10. Map Based Spot Add/Search

* Create a spatial database for adding and searching your favorite place on map.
* You can take a city map via google map Api.
* Coordinates should be marked with extra information stored on your own database.
* One should be able to add points on map via clicking on map and filling a simple form.
* Form must contain name of place, description and category of place like (Cafe, restaurant etc.)
* Also you can represent you places with some icons on map.
* In Search Section, one must be able to search places according to category, distance from you,
name of the place etc.
* Results must be arranged according to relevance and then according to distance from you. For
e.g a direct name matching should be of higher priority to that of distance of that place. But in
case someone is searching by category names one should prefer to go by distance.
* In Search, If somebody click on a place they must get a small info box about the place.
* In Search, if somebody clicks on a place there must be a provision to get direction which must
redirect to google maps application for exact direction. Note : you don’t need to integrate google
maps in your application for this. Just redirect them in another tab or app.
* Only admin can edit place in the account, admin account should be kept secret.
* Search must be available to all people. However they can give feedback about the place but that
will only be visible after approved by admin.


## 11. Calendar Reminders App:

- Create a todo list application with a Nice UI 
- You can add/remove tasks etc.
- which should have task with given date and time
- Use system date and time pickers
- Each task will have some starting time which should integrate with your system calendar.(Google calendar)
- Whenever task is pending system will reminds you through calendar app or email or SMS (you can choose notification preferences)


## 12. Pomodoro App (Time Management) 

- Create a todo list styled task your perform daily like Reading, Jogging, cooking etc.
- Track every task in terms of pomodoro breaks ( 1break 25 min)
- After 4 short break take a long break
- Pomodoro Timer should be circular and it should raise and alarm after time is over.
- You can take a break and start pomodoro timer again on same task or differs task
- Your list will show how many pomodoro times you have given to each task

Refer to this URL 

https://zapier.com/blog/best-pomodoro-apps/

## 13. Popular content search engine and pinboard

- Use #hashtags to search content through many social apps like facebook, instagram, twitter, reddit etc.
- Sort by popularity
- Show different media into one list - images, videos, status etc.
- Bookmark content for making collections and pins
- You can save items in diff boards - sports, tech, weather, politics

## 14. Buy/Sell App

- Login
- Sign up - Ask for interested in buying or selling or both
- Messages/offers for buy
- Push notifications for any buy/ sell offer
- category of item
- negotiable / non negotiable
- send an offer
- mark as favorite


## 15. Table Booking system

When you visit a restaurant you have to book a table for people. If you book in advance, restaurant has to plan according to available options. 

- Choose restaurnt 
- Auto detect location and resturant nearby sorted by distance
- filter - number of persons, pure veg, cuisines, ratings etc.
- Book seats
- On restaurant side they will have a limited number of seats.
- Show how many seats are available now.
- If seats are over disable booking at restaurant
- Admin panel : Can login into restaurant and change number of seats available


## 16. Book Search Engine

- Login to account, 
- ratings,
- add/ edit / delete a review,
- the social reading graph
- recommendations of books
- Author’s information
- user’s information - 
- search book by title / ISBN / author
- read reviews of a book by providing its title / ISBN / author
- read/write comment for a book 
- Follow / unfollow an author
- Follow/ unfollow other users
- Find a group
- Join a particular group
- Create a new group
- Like / unlike a resource
- Add/ edit / delete a book shelf
- add /delete books to book shelf
- User’s read status- set status and get any user’s status



## 17. URL shortner App

- generator a short url 
- redirect to the main webpage
- track how many people visited that url
- how many clicked on the short url and navigated to the designated page
- which device they used - mobile / desktop
- optional - require a user to log in to view private url


## 18. Movie Recommendation based on IMDB rating

- search for movies by title 
- get all the episodes of any TV series.
- get year of release of a movie
- get rating of movie
- get movie by genre
- get movie by release year
- get movie by actors


## 19. Railway App (PNR checking & Live running status)

- login
- add my journey details (PNR)
- get current PNR status
- push notifications on day of journey
- set timing for reminder - a day before, an hour before etc.
- get train running live status by API

## 20. Blog Application

- Login
- Create a new blog - image, title, text content (rich text containing HTML based content)
- Use can see list of their own blogs and can delete any old blog.
- Show list of blogs in home page with card format.
- You can see your blogs and everyone else blog on home page
- Sort blogs by author, date created etc.
- Create category of blogs and classify blogs under a catgeory.
- Create option to share blog via social media.
- Create like feature for blog. A use can one like once for same blog.


## 21. Notes Application

- User can login
- Make a note making application similar to Google Keep.
- User can make a board in which they can add some notes. Boards are like study, watch, books etc.
- User can make text notes, add images and files attachements also.
- User can change card color according to priority of tasks (Red, yellow, green)
- User can update and delete cards.
- User can search cards with text search.

## 22. Currency Converter App

- Show a list of top currencies and countries sorted by their value for today.
- List of countries will be displayed with their flag icons. [Example UI Link](https://play.google.com/store/apps/details?id=com.easy.currency.extra.androary&hl=en)
- There should be two input "Current Currency" and "Exchange Currency". e.g Current Currecy as "INR" and Exchange Currency as "USD".
- Automatic conversion should be done on change of any change in Dropdown menus.
- You can reverse the currency options by simple click.
- Application should store old conversion records and create a simple list of it.


## 23. Appointment booking app

Appointment book app creates and event in which you can book slots. It can help a professional like doctor, interviewer to provide slots to other person in which they can visit. Calendly site is a good example of such an app

- User can login 
- Creates an event with name / description/ Date. Start and endtime.
- User chooses how long will be slots between start and end time. (10 mins).
- Final user saves the event setting and gets a URL.
- User shares the URL with all non logged in users.
- These user can only see Name of the event, date, start time/endtime and available slots.
- User books a slot by passing his email, name information.
- If a slot is booked that will be removed from available slot list and other users will not be able to book the same slot.
- If all slots are booked, users will be shown a message that no slot is available.

## 24. News application.

This news application will be something similar to google news and will pull news from major news channels and apis.

- News will be categoriesed according to tags  India, sports, world, movies etc.
- News can be bookmarked by user for later reading.
- User can search new according to their keywords.
- Database will store old news items and they will also be searchable.
- News will be sorted according to new to old.

## 25. Meme Genrator App

Make an advanced interface for creating memes! Allow the user to upload an image, write a caption, and build a meme with the Imgflip api. To take it to the next level, allow the user to share their meme on Twitter, Facebook, and other social platforms.

- User should upload a image of some restricted dimension (max width fixed)
- User can provide some caption to the image.
- Captions can be changed in font-size, font-color and orientation.
- Also one can move captions up or down in the image.
- Finally user can generate the meme and get a final URL.
- User can share the URL to other friends to show the meme.
- As an extra feature one can provide download image feature to user.


## 26. Tetris Game

Example : [Check this](https://github.com/skidding/flatris)


## 27. Break Journey App

It is easy to make travel booking for direct journey from one city to another. But in case you don't find direct flights, trains etc. You might have to break the journey and find trains from a intermediate station and change from their to get to end destination.

- User will provide start and end destination
- User will provide a intermediate city from where they can change.
- Interface will provide the connecting journey options on same date.
- Care must be taken in timings of arrival and departure - so that one can continue the journey.
