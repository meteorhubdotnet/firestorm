# Firestorm

A rapid development framework for Meteor with Blaze and Iron Router.

### Installation - Step 1/3: Create Your Meteor Project

```
meteor create --blaze my-project-name-goes-here
cd my-project-name-goes-here
```

### Installation - Step 2/3: Install the firestorm meteor package and its dependencies
```
meteor npm install simpl-schema
meteor add meteorhubdotnet:firestorm
```

### Installation - Step 3/3: Install Firestorm CLI and set up your project
```
sudo npm i -g firestorm-cli
sudo npm link
fsinit
```
And remove these lines from package.json
```
"mainModule": {
  "client": "client/main.js",
  "server": "server/main.js"
},
```

### Creating pages
```
fspage fileName pageName [pageTitle] [pagePath]
```

Creating components
```
fscomp fileName componentName
```

Creating collections and models
```
fscoll fileName collectionName collectionClassName modelClassName
```

### Assumptions

Is this package right for your project? Here are the main assumptions 
I made when developing:

* You want to use Blaze for templating
* You need routing
* You need a user login system
* You need database
* You want to develop in a modular way
* You do not expect high traffic to this project
* You do not handle sensitive customer information beyond the login credentials

### Roadmap

* Auto update package.json on fsinit
* Add flag to create 'less' or 'sass' files instead of css
