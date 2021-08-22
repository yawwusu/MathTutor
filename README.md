<!-- ![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png) -->

# Math Tutor

An online platform for students to practice Math questions to master concepts and prepare for their exams. Targetted particular for Ghanaian High School students.

## Motivation

Growing up, I benefitted greatly by practicing a lot of math question from The Misty Joe book - it had solved past questions. - By trying all the questions, I was thoroughly prepared for the exams and maths became fun for me.

While it was manual at that time, I would like others to have the same experience, but with the advantage of online resources - utilizing current state-of-the-art technologies to make learning more effective and fun.

## Tech Stack

**Client:**

- React and NextJS for Frontend
- TypeScript for Implementation
- Tailwind for CSS
- React Context API for user state management
- XState Form State management
- Testing with Cypress?

**Server:**

- NodeJS and Webpack for API
- Firebase and its services for database and authentication
- Deploy on Vercel

**UX/UI Design:**

- Figma for UI/UX designs

## Features

- User/Social Authentication (with Email, Google and Facebook)
- User Dashboard to track progress, analytics etc
- Subscription plan (tutor help or only materials)

## Pages

- Welcome Page: A friendly and descriptive page to welcome a user who is new to the page (before registration) and give them an idea of what we offer in the app.

- Registration/ Log-In Page: User will have to register to access dashboard. Once logged in, user should not need to log in again on the same device.

- User Dashboard: This will be the personal space of the user, where they can see their current progress, change their settings, and choose to practice more questions (whether by Year or by Topic)

- Workspace: A page where questions will be displayed for users to solve and answer. Answers should be marked and reported afterwards and recommendations based on the users performance given (maybe a modal might be helpful here).
  ![State Chart](https://github.com/yawwusu/MathTutor/blob/master/StateChart.png?raw=true)

- Settings Page: A page where the user can see and manage his/her current settings - subscription plan, profile details, possible dark/light mode etc.

## Data Flow Chart

![Flow Chart](https://github.com/yawwusu/MathTutor/blob/master/FlowChart.png?raw=true)

---

## Demo

Insert gif or link to demo

## Screenshots

![App Screenshot](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)

## Target Users

This project is used by the following target groups:

- High School Math students
- Students preparing for Retake Exams

## Contributing

Contributions are always welcome!

See `contributing.md` for ways to get started.

Please adhere to this project's `code of conduct`.

## Support

For support, email yaw@fake.com or join our community channel.

## Acknowledgements

- [Readme Driven Development](https://tom.preston-werner.com/2010/08/23/readme-driven-development.html)

## 🚀 About Me

- [@yawwusu](https://www.github.com/yawwusu)
  I'm a Ghanaian full stack developer residing in Italy. My hobbies are reading, listening to music and just hanging out and chatting with friends.

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://yaw-blog.vercel.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/)

## Notes (Cools Tools and Tricks)

- Readme.so to generate template for ReadMe
- Figma Flow Chart Primer in FigJam to generate template for flow chart
- Bootstrap a next-app with tailwind configured with `npx create-next-app -e with-tailwindcss [project-name]` or `yarn create next-app -e with-tailwindcss [project-name]`

## Next Steps

- Main Feature to focus on: Practice area - Questions and Feedback
- Setup tests for main components of app
- Extras: Iterate on and improve previous pages

## Work in Progress Journal

### Week 1

Did some research on:

- [Readme Driven Development](https://tom.preston-werner.com/2010/08/23/readme-driven-development.html)
- State Management:

### Week 2

Just started something! To get momentum going, I setup main pages - Welcome, Dashboard, Practice, Settings and Login and setup firebase and user authentication.
Everything is in Vanilla Javascript now, I plan to convert it to TypeScript next week.

- Also set up [my blog](https://yaw-blog.vercel.app) using Laurie Barth's [Build a developer blog with Gatsby](https://egghead.io/courses/build-a-developer-blog-with-gatsby-bd96) course on Egghead.

- I plan to try it out with Joel Hook's [blog template](https://github.com/joelhooks/next-typescript-tailwind-mdx-starter) later too

### Week 3

- Converted everything to TypeScript - reverted back to Vanilla JavaScript though to save time. TypeScript version is in branch TypeScript. (I watched 2 TypeScript beginner courses on egghead: [Up and Running with TypeScript](https://egghead.io/courses/up-and-running-with-typescript) by John Linqduist and [TypeScript: Tips and Tricks](https://egghead.io/courses/typescript-tips-and-tricks-20c4) by Kamran Ahmed and read [some articles](https://dev.to/waldo/next-js-typescript-tailwind-css-project-setup-4kcj) to setup TypeScript)

- Styled NavBar and Footer with Logo design in Figma, heroicon for user-avatar (thinking to use material-ui instead) and simple ul tags

- Read [an article](https://www.udacity.com/blog/2016/03/12-best-charting-libraries-for-web-developers.html) to decide on charting tool to use to represent data. I initially have chosen d3.js and i'm watching some courses on egghead by Ben Clinkinbeard - awesome course. (thinking to use Google Charts though if things get complicated)

- Useful links for chart:
  https://observablehq.com/d/d552880942332983
  https://www.pluralsight.com/guides/using-d3.js-inside-a-react-app
  (Common error) https://stackoverflow.com/questions/61670459/nodejs-must-use-import-to-load-es-module
  https://observablehq.com/@nhogs/svg-conic-gradient-simulation-in-progress-donut-chart

- FirebaseUI issues:
  -- Tried to use firebaseui to setup login page, but got "windows is undefined" error (https://frontend-digest.com/why-is-window-not-defined-in-nextjs-44daf7b4604e).
  -- Then I tried to set it up with react-firebaseui following (https://dev.to/menard_codes/next-js-sign-in-page-with-firebase-ui-and-firebase-auth-5375), but got "options of undefined" error.
  -- In the end, defaulted using my own buttons and firebase's inbuilt signin functions for the time being.

  - TO REVISIT:
    -- Individual progress charts for topics and years
    -- Add progress to use profile

## Week 4

#### Handled latex rendering with React Latex (which depends on Katex - the fastest rendering engine)

- https://theme-next.js.org/docs/third-party-services/math-equations#Numbering-and-Referring-Equations-in-MathJax
- https://github.com/harunurhan/react-latex-next
- https://katex.org/docs/libs.html

#### Question form

#### Managing form state with Xstate.

- Resources:
  [Kyle Shevlin's course on egghead]()
  [XState docs for React](https://xstate.js.org/docs/recipes/react.html#hooks)
  [David Kpiano's talk on CSSConf-Budapest](https://youtu.be/0cqeGeC98MA)

## Week 5

- Added more questions and ability to scroll through questions

- Hooked xstate to Question's form - but not working optimally (a lot of re-renders and controlled component not working) - I think xstate is not the best tool for this use case. I've saved what i did in the branch xstate
