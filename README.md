# Level Up

[My Notes](notes.md)

Level up is a web application designed to help users learn and master new skills. 

> [!NOTE]
> This is a template for your startup application. You must modify this `README.md` file for each phase of your development. You only need to fill in the section for each deliverable when that deliverable is submitted in Canvas. Without completing the section for a deliverable, the TA will not know what to look for when grading your submission. Feel free to add additional information to each deliverable description, but make sure you at least have the list of rubric items and a description of what you did for each item.

> [!NOTE]
> If you are not familiar with Markdown then you should review the [documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) before continuing.

## 🚀 Specification Deliverable

> [!NOTE]
> Fill in this sections as the submission artifact for this deliverable. You can refer to this [example](https://github.com/webprogramming260/startup-example/blob/main/README.md) for inspiration.

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown
- [x] A concise and compelling elevator pitch
- [x] Description of key features
- [x] Description of how you will use each technology
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references.

### Elevator pitch

Have you ever wanted to learn a new skill but just didn't know where to start? Have you ever worked so hard to learn something but just kept getting it wrong? Level up is the app for you! Level up allows you to chat with other users, share video links, ask for help, and offer suggestions to improve your skill set in a variety of categories!

### Design

![Design image](Images/webprogramming260startup-example%20An%20example%20start%20up%20project.png)

This is a sample drawing of what the application might look like. 

<!-- >```mermaid
sequenceDiagram
    actor You
    actor Website
    You->>Website: Replace this with your design 
```-->

### Key features

- Secure login over HTTPS
- Display of different skills categories
- Ability to select from a range of categories 
- Opens a live chat with other users for selected category
- Ability to send links to videos in that category 
- Other users chats diplayed in real time 
- Chats are stored 

### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Used for structure and organization, 3 HTML pages. One for login, one for the category selection, and one for the chat. 
- **CSS** - Used for a physically appealing style that uses good colors and use of space. 
- **React** - Used for login, selection of categories, and opening/using different chats.
- **Service** - Used for login and sending and receiving chats. 
- **DB/Login** - Store user info and chat history.
- **WebSocket** - As users use the chat, chats show up for all other users as notification as well as in chat.  

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://startup.levelupskills.click).
I rented a server from AWS EC2, I purchased a domain name from AWS Route 53, I used caddy for the certificates and got everything set up and working. 

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I created five html pages for each part of my application. 
- [x] **Proper HTML element usage** - I showed proper use of different html tags.
- [x] **Links** - I have links between all of the pages in my application.
- [x] **Text** - I have textual context describing what the application is and each part of it.
- [x] **3rd party API placeholder** - I have a placeholder to call a 3rd party for images/quote.
- [x] **Images** - My html matches my application images. I also have a placeholder image in my about page. 
- [x] **Login placeholder** - I have a placeholder for users to login on the home page.
- [x] **DB data placeholder** - Data will be stored in the messages page where placeholders were displayed.
- [x] **WebSocket placeholder** - Chats placeholder for real time communication.

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Visually appealing colors and layout. No overflowing elements.** - I styled my web app, adding colors and layout to make it visually appealing and easy to use. 
- [x] **Use of a CSS framework** - I implemented bootstrap for the login and sign up buttons. 
- [x] **All visual elements styled using CSS** - I styled all of my elements using css. 
- [x] **Responsive to window resizing using flexbox and/or grid display** - my web page is responsive to resizing the window. 
- [x] **Use of a imported font** - I imported 3 different fonts to use on my web app. 
- [x] **Use of different types of selectors including element, class, ID, and pseudo selectors** - I used different types of selectors in my css design. 

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - I bundled using vite. 
- [x] **Components** - I created and used react components.
- [x] **Router** - I used the router and routes to make my app react.

## 🚀 React part 2: Reactivity deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - I made my app fully functional and mocked out the things to be completed later.
- [x] **Hooks** - I used hooks to make my app reactive. 

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - I included the node.js and express service 
- [x] **Static middleware for frontend** - I included the middleware for my frontend code. 
- [x] **Calls to third party endpoints** - I included a call to a third party endpoint for quotes. 
- [x] **Backend service endpoints** - I did not complete this part of the deliverable.
- [x] **Frontend calls service endpoints** - I added fetch calls to the service endpoints in the frontend. 
- [x] **Supports registration, login, logout, and restricted endpoint** - I included parts that support login, signup, logout, and restricted. 

## 🚀 DB deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Stores data in MongoDB** - my app stores messages for the chats in mongodb
- [x] **Stores credentials in MongoDB** - my app stores user credentials in mongodb

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Backend listens for WebSocket connection** - my backend listens for websocket connection in peerProxy.js.
- [x] **Frontend makes WebSocket connection** - my frontend makes websocket connections in intellectual.jsx and physical.jsx. 
- [x] **Data sent over WebSocket connection** - my data sends over websocket connections in the chats and with users.
- [x] **WebSocket data displayed** - the websocket data is displayed as messages and in the user sidebar.
- [x] **Application is fully functional** - my application is fully functional!!!
