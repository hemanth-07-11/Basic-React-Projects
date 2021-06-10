# Challenge 6 users list data

Challenge Link : https://github.com/code-corgi/challenge-6-list-users

### CHallenge completed . 


# Challenge: Display data from an API

Four our dating site we want to list singles in the area, so that visitors
can get to chose who they'd like to go out with and get in touch.

The data is found in this endpoint:
[https://randomuser.me/api/?results=20](https://randomuser.me/api/?results=20).

Most of the design is ready, but the data being shown right now is hardcoded,
and the current version has everything on the same file, which is a pretty crappy
way to use React.

## Procedure

**Requirements**, in no particular order.

Using your github account, fork this repo and clone it to your machine.
Use `npm start` to run the application locally using `webpack-dev-server`.

Add redux and create the reducers to add the users to the state.

Add isomorphic fetch polifyll and es6-promise to request data from the API.

Create a dumb component that renders every user.

Create a container component that fetches data from an API and displays it using
the dumb component.

Test your components and utility functions.

## Technical Tips

Check out the Readme that the React team put together as an intro [here](ReactIntro.md).

Learn about the
[Container Components Pattern](https://medium.com/@learnreact/container-components-c0e67432e005).

Learn about [React Redux](https://redux.js.org/docs/basics/UsageWithReact.html).

Check out [Isomorphic Fetch](https://www.npmjs.com/package/isomorphic-fetch).

## Notes

We expect this challenge to take just a few hours, if you get stuck reach out and we
can reasses, the most important part is not for it to be complete but also for us to be
able to see your coding styles and decisions. Be careful with the commits and
follow some of React best practices, like folder and file organization.

Check out the coding style and make sure the code passes the linter. `npm run lint`.
