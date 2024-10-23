# create a react app for windows

    npm install -g create-react-app
    npx create-react-app netflix_gpt
    cd my-app
    npm start

# remove the unnesssary code in the file

    remove the App.js code
    romove the logo
    remove the App.test.js file for now
    remove the App.css code and configure with the tailwind

# tailwind configure

    tailwindCSS> getting started > installation > framework guide > create-react-app
        npm install -D tailwindcss
        npx tailwindcss init
        configure tailwind
    add tailwind directives to css(index)

# Firebase Deployment

Get started
Project name
Enable the google analytics
create the project

Email & password login setup
click </> web
Register app
click the hosting

firebase sdk
npm install firebase
add configuration sdk in
utils > firebase.js file (to connect the project to the database)

add the firebase cli
npm install -g firebase-tools

firebase login

    PS C:\Users\shami\OneDrive\Documents\Developer files\NamasteReactNetflix_gpt\netflix_gpt> firebase login
    firebase : File C:\Users\shami\AppData\Roaming\npm\firebase.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see
    about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
    At line:1 char:1
    + firebase login
    + ~~~~~~~~
        + CategoryInfo          : SecurityError: (:) [], PSSecurityException
        + FullyQualifiedErrorId : UnauthorizedAccess

Error is resolved by
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser in powershell run as admin

firebase init

creating the firebase.json and .firebaserc automatically
select opitons
Are you ready to proceed? Yes
Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
Please select an option: Use an existing project

        What do you want to use as your public directory? build  (build) build folder is the place where the all the files cached and deployed for firebase (telling the firebase to use this folder)
        ? Configure as a single-page app (rewrite all urls to /index.html)? No
        ? Set up automatic builds and deploys with GitHub? No
        +  Wrote build/404.html
        +  Wrote build/index.html

run the project

npm run build > creates optimised build for the project

# Netflix gpt

create react app
configure tailwind
Header > with logo
Routing in app
Login > background and form
Sign Up
Sign In
Form validation
useRef
firebase setup
Deployment through fire base
create Signup user account
Implement the user Api
created redux store with user slice
fixed bugs : signup user display name and photo
navigation in the app
move static files in constants
register the app in TMDB and get the acess token
get the api from the TMDB now playing movie list
create a movie slice
add the movieSlice to the appstore
dispatch an action so that the data.results from fetch api will store in the movieSlice
filtered the movie trailer
made a customhook for useMovieTrailer,nowPlaying movies
updated store with data
planning for main and secondary container
fetch for trailer video
updated store with trailer video
embed the youtube make it autoplay and mute

# features

login/signup page
signup form

browse page(after login)
header
page with trailer background
movie name
play button and more info
movielist
