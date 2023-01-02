

# Lost and Found App Vancouver

<img src="https://res.cloudinary.com/vanarts-webdev/image/upload/v1672535776/Screenshot_2022-12-31_at_5.14.43_PM_g7htuf.png" height="500" />


 <a href="https://lost-and-found.sachigoto.me/">View Demo</a>
 
 <details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#technologies">Technologies</a>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#challenges">Challenges</a></li>
    <li><a href="#getting-started">Getting Started</a>
        <ul>
         <li><a href="#installation-with">Installation</a></li>
         <li><a href="#code-scaffolding">Code Scaffolding</a></li>
        <li><a href="#build">Build</a></li>
        <li><a href="#running-unit-tests">Running unit tests</a></li>
        <li><a href="#running-end-to-end-tests">Running end-to-end tests</a></li>
        <li><a href="#further-help> Further help </a> </li>
      </ul>
    </li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>
 

 
## About The Project
<img src="https://media.giphy.com/media/KUSzhGOqjj9lsgaOP8/giphy.gif" width="500" />

This lost and found web app is for reporting lost items. You can upload an image of a found item and edit the item after it’s posted. 
In this app, you can view posts (lost items), submit and edit posts, and deactivate posts once items are claimed.

## Technologies
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.3.
<div style="display:inline-flex;>
<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width="50" />
<img src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" width="50" />
<img src="https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png" width="50" />
<img src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" width="50" />
<img src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png" width="50" />
<img src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png" width="50" />
<img src="https://user-images.githubusercontent.com/25181517/192158956-48192682-23d5-4bfc-9dfb-6511ade346bc.png" width="50" />
<img src="https://user-images.githubusercontent.com/25181517/183890595-779a7e64-3f43-4634-bad2-eceef4e80268.png" width="50" />
<img src="https://cloudinary-res.cloudinary.com/image/upload/website/cloudinary_web_favicon.png" width="50" />
<img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" width="50" />
<img src="https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" width="50" />
</div>

<p>Images are stored in the cloud using Cloudinary. It provides an URL for each image so we only store the URLs in the database instead of image themselves. This significantly reduces the amount of data stored. 

We used MongoDB. One of the biggest reasons is MongoDB is easy to host with Heroku as well as connect to Cloudinary.</p>



## Features

<li>Add item form </li> 

<li>Edit item form </li>
          
<img src="https://media.giphy.com/media/BiJJi0ehHXjrp6p0n5/giphy.gif" width="500"/>

<li>On the edit item form, the current image will be updated in the form as soon as you select a different image</li>
<img src="https://media.giphy.com/media/NcgGFsthaGyqrIWBo6/giphy.gif" />

<li>Claim button - Clicking the claimed button will disable the item so that no one can claim the item again</li>

<h3>Features to implement in the future </h3>

<li>Login with Auth</li>
<li>Functionality for logged in users to post lost items</li>
<li>Edit only items linked to profile</li>
<li>Search bar</li>
<li>Categories</li>

## Challenges

<p>Passing Dataform and Databody with Angular to the server was one of the primary challenges. We discovered that we can append values with dataform so that we can pass dataform and databody together! </p>
<img width="300" alt="Screenshot 2022-12-31 at 7 15 03 PM" src="https://user-images.githubusercontent.com/70562492/210160084-591a4dc4-4735-4a11-b980-1b28ac231837.png">


## Getting Started

### Installation
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Credits

## License 


[Website](https://lost-and-found.sachigoto.me/)

