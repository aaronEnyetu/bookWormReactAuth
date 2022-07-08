# Alchemy React Base Template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Use this template for all your "from scratch" deliverables. To start, simply run

- `npm install`
- `npm start`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


How to use demo code
0. Have a step by step plan
1. Folow your plan 
2. When something breaks, STOP.
3. Ask, what step is broken?
4. Debug for a bit (find undefined things, check for console errors, console.log stuff)
5. Ask, "How did Dani do this step?"
6. Open the demo code and answer that one question about that one step.
7. Close the demo code and return to step 4 with new knowledge


Plan
1. Make fake Page components for each page
2. Set up react router for the fake pages
3. Set up my supabase table and adding Cred to the .env
    - user_id has default value of autth.uid()
4. Set up RLS to protect rows so you can only see rows YOU CREATED
    - use the delete template as a starting point then choose ALL

"Auth" page
5. Set up the Auth Page forms
6. Set up the submit handler to sign in/sign up
    - write a signUp function in our fetch utils that takes email and password as arguments
    - pass email and password from state to signUp
    - log out user to double check it worked
7. protect our routes: if you are signed in, you shouldn't be allowed in the auth page. it should send you to the list page. Use a ternery in App.js. If there is a user in state, show the list page. If there is no user, show the auth page. The default state of user is client.auth.user(). That way if the user navigates to another page, losing state, we don't kick them back to auth when they return.
8. we will put the user in App.js state. However, that data lives in a child (AuthPage). We need to pass setUser down to the authpage so that it can set parent state.
9. We also add a logout button that conditionally renders in the header if there is a user in state.  


"Create" page
10. Make a form with a title, author, value, onChange, etc
11. Make a submit handler and log out the title and author just to confirm we can access form values
12. Make a createBook function in fetch-utils. it takes in a book object: { title, author }
13. in our submit handler, call create book, clear out the form, redirect the user to the books page

"List page
14. Make state for our data
15. Fetch our data in a use effect
16. map over the data in our JSX
17. Render a link to detail page for each item in the array


"Update" Page
18. Works just like the create page with three differences: update instead of create, add a delete button, and hydrate the form with pre-filled info
19. First, let's fetch the book. Get the id from the URL, make a getBookById function in fetch-utils, and grab the book on load in a useEffect
20. inject the book into state. Since the inputs are controlled, this will also update the inputs.
21. Write an updateBook function, in fetch-utils and call it (with id and book object) in UpdatePage.js on click
22. add a delete function in fetch-utils and call it on click in the UpdatePage