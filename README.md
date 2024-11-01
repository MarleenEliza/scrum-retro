# Scrum Retro

## Description

Prototype tool for remote scrum retro’s.

### Meta Goal

- Demonstrate working style
- Demonstrate coding skills

### App Goal

- Provide easy way for users to organize scrum retro's
- Reflect on What went well in the Sprint
- Reflect on what could be improved in the Sprint
- Decide what ideas will be implemented for improvement in next Sprint

## Functionality

- Add / Remove retro ticket to category
- Add / Remove category
- Vote / unvote for ticket
- Pasworldess login with magic link

### Tech stack

- TypeScript → chosen because of more robust, easier coding
- ReactJS → chosen for fast development due to many support and plugins being readily available. I am also most proficient with this framework compared to others.
- TailWind CSS → chosen to speed up development process whilst still being lightweight

## how to run

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Component structure

Following atomic design → main developer is used to and prefers this system. Provides nice overview and flexibility for future changes in plans.
https://bradfrost.com/blog/post/atomic-web-design/

## Version control and Code strcuture

### Repository / Branching rules

Following a common git branching model with **kebab-case**
https://nvie.com/posts/a-successful-git-branching-model/

Due to the small scale of this app, I will limit the branches to the below:

```bash
# What I will do for this app
/feature
/hotfix
/main

# what I would normally do
/feature
/hotfix
/release
/main
/develop
```

### Development flow

1. dev works on specifically named branch
2. dev pushes PR to be added to the main branch
3. PR gets reviewed and merged

## Thoughts

If this was a real project, I would ask / confirm a lot of things before even writing a single line of code. These are the things I would consider:

### Schedule

#### Questions

- What does the schedule look like? When will the BE be expected to be provided? When is the design expected to be provided? etc.
- In an internal meeting; how much leeway is there for schedule disruptions?

#### What I will assume for now

I give myself a time limit of 4 hours for coding.

### Team

#### Questions

- How many developers will be working on this project? I will assume 1 (me) for now, but if there are multiple developers I would propose a meeting with the tech lead and project manager all present to make sure we are on the same page

#### What I will assume for now

- 1 Developer (me)

### Target user

#### Questions

- Is this an app for internal use? For a client to handover? Inhouse app we will sell? Depending on the target user we might have to put more / less focus on UI etc.
- How many users do we expect will use this app at the same time? Since this is a small demo app, I won't implement a Back End, but normally one would need a server to store the scrum retro ticket data.
- Depending on who our client is, what do THEY specifically value as an organization / person? Maybe they care about branding and having everything look and feel a specific way in line with their already established brand. Maybe if it is an app we provide for sale, we should focus more on how to make sure we stand out from the current avaiable apps etc.
- What languages do our users speak? The coding challenge was in English so I am going to only implement English for now, but it might be nice to have multi-language support in the future.
- Concerning user accesibility; how important is this to the client? Should we be wary of users with a vision impairment or color blindness?

#### What I will assume for now

An internal app meant to be used for our development team in English. Hence,

- not a strong focus on UI
- focus on low cost, simplicity
- focus on asccesibility; contrasting color scheme with a minimum [contrast ratio of 4.5:1](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum)

### SEO & Accesibility

#### Questions

- How important is SEO in this application? Would it be perhaps wise to focus on this?
- How important is accesibility in this use case? I thrive to implement a website that can be accesed by almost any user (sight and hearing impaired), but depending on the budget and schedule this is not always feasible.

#### What I will assume for now

For now, I will implement basic SEO practices only:

- be wary of keyword usage
- correctly implement header tags
- Google Analytics tag for monitoring website performance
- adding ALT texts to images
- use informative meta tags

I will also implement basic accesibility practicies:

- be wary of ARIA labels

### Back End

#### Questions

- Will the API be provided by the client? If so, is it already done or can we be part of the process?
- This is dependent on the target user, but what kind of authentiction would be suitable? If it is an app we sell oAuth might be more suitable since users can easily acces it with their already exsisting Goolge account etc. If it is an internal product, we will likely prefer an internal server to ensure security.

#### What I will assume for now

No BE due to time limit, but I will implement

- a simple magic link with email for paswordless login
- a JSON file that serves as a mock for the API response

### Design

#### Questions

- Is there a certain design theme in mind? What about a color pallete or fonts?
- What will be the target devices and browsers? Should we support older versions of lets say Iphone 6 ? Am I even correct in assuming that this is an app meant for both phones and pcs?
- Does customizability matter in this project? If speed is improtant but UI is not, using a UI framework like Material UI can someitmes be a good solution.

#### What I will assume for now

- Focus on the current [main browsers](https://gs.statcounter.com/browser-market-share/), Google Chrome, Safari, Edge
- Mobile first approach since this is the most common. (So focus on flexbox, grid, very responsive CSS)
- Using tailWindCSS to for a utility-first approach to ensure responsiveness with minimal effort. I opted out of bigger libraries like Material UI in this case for I didn't think it was neccesary to provide such detailed UI.

### State management

#### Questions

- What is the presumed scale of this app? Does the scrum retro part interact with other parts of a bigger app for example? In that case we would likely need to add Redux to ensure a smoother application.

#### What I will assume for now

I will integrate a simple context based state managment due to the time limit and small scale of this application.

## Testing

### Accesibility

I always aim to adhere to the [WACG guidelines](https://www.w3.org/TR/WCAG21/) to ensure an accesible website for as many users as possiblie.
Check accesibility score with [accesibility chekcer](https://www.accessibilitychecker.org). In a production project, I would normally ask if it was possible to have a paid option, but I will keep things simple for now and aim for no critical issues on the accesibility checker.

### Browser compatibility

Normally I would do this more extensively, testing all devices and browsers in scope, but for this projecct I will keep it to a simple test in the 3 target browsers.

### Unit Testing

If there was communication with BE, I would normally write specific Client classes that would satisfy specific business needs. The structure of this would depend on the API and the businness needs, but it would look something like this. One Client would server 1 specific purpose.
Before writing the actual clients, I would write unit tests to go with them and have them reviewed by the team, so I can be sure of their functioning and that the functionality of the client meets the business needs.

These tests would be coded and run in Jest.

```bash
RetroScrumClient
AccountClient
```

### Intergration Testing

I will not implement that in this app due to the time limit and scale, but normally I would use end-to-end (E2E) testing tools like Cypress.

## Approach

1. write this README with thoughts and questions I would normally ask BEFORE coding.
2. Decide on Component Structure (see different docs file)
3. Decide on state management and types with simple `RetroScrumContext.tsx`
4. Code components according to atomic design
5. Code functionalities with focus on accesibility
6. Add simple UI with TailwindCSS
7. Test

## Future enhancements

- integrating real BE
- adding e2e testing
- adding more elborate accesibility testing
- adding a more specific UI
- adding multiple authentication methods
- adding more functionalities such as as setting a max number of votes, a more friendly ticket creation UI, adding labels to the tickets, adding automatic sorting by number of votes etc.
