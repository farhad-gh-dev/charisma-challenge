![project screenshot](https://github.com/farhad-gh-dev/code-challenge/blob/main/public/project-screenshot.jpg)

This project was a coding challenge for Charisma.

## Start Guide

First, install the dependencies:

```bash
npm run install
# or
yarn install
```

Then, run the development server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech stack

React JS, Typescript, Redux Toolkit, Material UI

## Project Folder Structure

- In order to scale the application in the easiest and most maintainable way, I keep most of the code inside the features folder, which should contain different feature-based things. The idea is that you should be able to add or remove a feature and all of it's specific dependencies in a folder in features directory. a feature will contain everything form api calls to sub-components(the ones only used for this feature) and local hooks. This will allow you to keep functionalities scoped to a feature and not mix its declarations with shared things.
- In assets directory we have our images, fonts, videos, ...
- store directory contain our store settings, store hooks and shared slices

This was inspired by bulletproof-react repo in github.

    .
    ├─── public
    └─── src
        ├─── assets
        ├─── features
        └─── store
