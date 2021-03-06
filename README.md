# React Certification 2020

## Introduction

Thank you for participating in the React Certification 2020 course! Here you'll find instructions for completing your certification.

## The challenge

The purpose of the challenge is for you to demonstrate your React skills. This is your chance to show off everything you've learned during the course and to earn your certification!!

The idea is that you build and deliver a **whole** React application on your own. We don't want to limit you by providing some "fill in the blanks" exercises, but instead request you to build it from scratch! We hope you find this exercise challenging and engaging.

The goal is to build a YouTube client app.

We've created a demo application: https://react-certification-2020.netlify.app/

> **NOTE:* Use `wizeline` as the username and `Rocks!` as the password to log in*

We won't share its source-code until after the certification is complete and all the participants deliver their own implementations (we don't want to bias your solution).

You should use this application just as a guide and as a trigger for your own ideas. It's not mandatory to reproduce the exact functionalities nor the same styling; this is **YOUR** project and you can be creative in the way you build it.

### Requirements

These are the main requirements we will evaluate from your deliverable:

- Use all that you've learned in the course:
  - Functional Components
    - React Hooks
    - Custom Hooks
  - State Management with React Context
  - Styled Components
  - React Router
    - Public and private routes
- Fetch results from YouTube API (keep reading for more details)
  - Search videos by name
- User Authentication (keep reading for more details)
- Unit Tests Coverage (~70%)

Try to keep the use of 3rd party libraries to the minimum, especially the ones related to the topics covered in the course.

E.g., you can use some CSS framework (such as Bootstrap) if that makes you feel more comfortable and move faster, but we will still want you to develop and deliver meaningful styled-components.

## Getting Started

We have provided some general React boilerplate in this repository.

The provided codebase is not directly related to the challenge topic, but you can use it as a guide for structuring your application. Feel free to add, remove, or change anything if you consider it necessary.

To get started, follow these steps:
- Fork this project.
- Create the YouTube API credential and configure the client SDK (more details below).
- Commit periodically.
- Have fun!

### YouTube API

In order to fetch videos from YouTube you need to create a new project using the Google console, and then create an API key for consuming the API.

**Step 1:** Follow the [YouTube API v3 getting-started guide](https://developers.google.com/youtube/v3/getting-started) to get your API credentials.

> **NOTE:* You only need to complete the steps 1, 2 and 3 in the guide to get your API_KEY*

**Step 2:** After configuring the API key, you can read the [YouTube JavaScript client getting-started documentation](https://github.com/google/google-api-javascript-client/blob/master/docs/start.md) to get examples about how to consume the API.


### Authentication with Mocked Login

Authentication is not directly covered on this course's topics; that's why we are not requesting you to integrate with a real authentication provider (such as Auth0, OAuth, etc.).

Instead, we want you to explore how to set up your application to handle this kind of requirement: sharing the logged-in user state, define public and private routes, display content based on the authenticated user, etc.

You can use this mocked-login function in your application; just provide in the UI a way to capture the username and password values, and then handle the success and error cases (e.g. create a React Context to provide your logged-in user to the rest of the application).

```javascript
// login.api.js

const mockedUser = {
  id: '123',
  name: 'Wizeline',
  avatarUrl: 'https://media.glassdoor.com/sqll/868055/wizeline-squarelogo-1473976610815.png',
};

export default async function loginApi(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'wizeline' && password === 'Rocks!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
}
```

## Deliverables

We provide the delivery dates so you can plan accordingly; please take this challenge seriously and try to make progress constantly.

It???s worth mentioning that you???ll ONLY get feedback from the review team for your first deliverable, so you will have a chance to fix or improve the code based on our suggestions.

For the final deliverable, we will provide some feedback to but there is no extra review date, so if you are struggling with something try to get some help beforehand with your peers or by using the academy-reactcert2020 slack channel.


### First Deliverable (due September 28th 23:59PM)

- Login
  - Implement the Mocked Login and store the logged-in user in a global accessible Context.

- Home View
  - Search and display videos using Youtube API.

- Video Details View
  - Display the selected video and its information.
  - Display a list of related videos.

- Favorite Videos
  - Allow users to mark videos as favorites.
  - Display the favorite videos on a private route.
  - Allow users to see the details of that video.

>**Important:* what???s listed in this deliverable is just for guidance and to help you distribute your workload; you can deliver more or fewer items if necessary.

### Final Deliverable (due October 5th 23:59PM)

- Finish any pending functionality or address any comment you receive from your previous deliverable.

- Style your views using styled-components; use any 3rd party CSS framework if necessary.

- Unit Testing
  - Create tests for your application
  - Coverage must be at least 70%


## Submitting the deliverables

For submitting your work, you should follow these steps:
1. Create a pull request with your code, targeting the master branch of the repository [react-certification-2020](https://github.com/wizelineacademy/react-certification-2020).
2. Deploy your application code to any hosting service (we suggest you use Netlify or any other free hosting provider you want to use like Firebase, etc.).
3. Fill out this form and provide the requested information: https://forms.gle/ePnLR2xNVc3M1HLu8

> **Important:* Don't forget to include any additional information that might be necessary for running your code (e.g. test user credentials, etc).

