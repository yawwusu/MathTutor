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
- Testing with Cypress?
- XState or Redux Toolkit for State management?

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

- Settings Page: A page where the user can see and manage his/her current settings - subscription plan, profile details, possible dark/light mode etc.

- Workspace: A page where questions will be displayed for users to solve and answer. Answers should be marked and reported afterwards and recommendations based on the users performance given (maybe a modal might be helpful here).

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

- Configure and start using typescript throughout the project - use courses on Egghead (Beginner and Intermediate)
- Main Feature to focus on: Dashboard - Progress Bar/ Chart, Buttons to redirect to Questions Page, Login redirect to Dashboard
- Extras: Welcome and Login Pages
