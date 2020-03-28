# Folio Website
![Built with VueJS](https://img.shields.io/badge/vue-2.2.4-green.svg)
![Latest Commit](https://img.shields.io/github/last-commit/dscbvppune/folio-web?style=plastic)

This project aims at making websites easier to manage. We at DSC BVP Pune noticed that many students or professionals either don't have a website or face difficulty maintaining one. We came up with a solution to make it accesssible for everyone to be able to manage and build a website with the help of a mobile app. The template used has been referrenced by [@dewanshrawat15's](https://github.com/dewanshrawat15) [dewanshrawat15.github.io](https://github.com/dewanshrawat15/dewanshrawat15.github.io)

## Features
- The Website is built completely using Vue.js, and the data is fetched from Firestore.
- Firestore is a real-time cloud-based database with updates data dynamically.
- This Website can be used as a template by any student or professional.
- Easy to maintain. Does not require any sort of technical experience.
- Firestore provides solutions for storage issues.

## Technology Stacks
- [VueJS](https://vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Firebase](https://firebase.google.com/)
- [Service Worker & PWA](https://www.npmjs.com/package/vue-pwa)
- [Workbox](https://developers.google.com/web/tools/workbox)

## Getting Started
- Fork [the repository](https://github.com/dscbvppune/folio-web/) and clone it locally.
- Install extra dependencies: ```npm install``` or ```yarn```
- Add the firebase configurations of your project [here](https://github.com/dscbvppune/folio-web/blob/master/src/firebase.js)
- Open [manifest.json](https://github.com/dscbvppune/folio-web/blob/master/public/manifest.json) file and update personal details accordingly.
- Open [index.html](https://github.com/dscbvppune/folio-web/blob/master/public/index.html) file and update:
  - meta description tag for search engines to display the given content
  - meta keywords tag for search engines to be able to rank the given page correctly
  - Script tag for Google Analytics to be able to see correct analysis.
- For running website locally: ```npm run serve``` or ```yarn serve```
- For the production: ```npm run build``` or ```yarn build``` and then a directory called ```dist``` will be created having the build files

## Setting up on Firebase

### Setting security rules on Firestore
Create a Firestore Database, and add the following security rules to the database, to add authentication for only specific people to be able to update details on Firestore:
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read;
      allow create, write, update, delete: if request.auth.token.email.matches("personalemailaddress[@]gmail[.]com");
    }
  }
}
```

### Setting security rules on Firebase Storage
Enable the Firebase Storage, and add the following security rules to the database, to add authentication for only specific people to be able to add / update media to the storage bucket:
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read;
      allow write, create, delete, update: if request.auth.token.email.matches("personalemailaddress[@]gmail[.]com");
    }
  }
}
```

### Deploying on Firebase
- Install Firebase CLI: ```npm i -g firebase-tools```
- Create Firebase account and login into Firebase CLI: ```firebase login```
- Open Terminal/Powershell in your directory.
- Now type firebase login command in your Terminal/Powershell.
- Type ```firebase init```
- Select the project by using the arrow keys.
- Then Select the Firebase Hosting by using the Spacebar and arrow key.
- Type ```dist```
- A ```firebase.json``` will be created.
- Run on localhost: ```firebase serve``` or ```npm run serve```
- Update ```firebase.json``` file
```
   {
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [ {
      "source": "**",
      "destination": "/index.html"
    } ],
     "headers": [ 
      {
        "source": "**/*.@(eot|otf|ttf|ttc|woff|font.css)",
        "headers": [ 
          {
            "key": "Access-Control-Allow-Origin",
            "value": "*"
          } 
        ]
      }, 
      {
        "source": "**/*.@(jpg|jpeg|gif|png)",
        "headers": [ {
          "key": "Cache-Control",
          "value": "max-age=31557600"
        } ]
      }
    ]
  }
}
```
- Build and deploy by running: ```firebase deploy``` or ```npm run deploy``` or ```yarn deploy```

## Contributing
Awesome! Contributions of all kinds are greatly appreciated. To help smoothen the process we have a few non-exhaustive guidelines to follow which should get you going in no time.

### Using GitHub Issues
- Feel free to use GitHub issues for questions, bug reports, and feature requests
- Use the search feature to check for an existing issue
- Include as much information as possible and provide any relevant resources (Eg. screenshots)
- For bug reports ensure you have a reproducible test case
  - A pull request with a breaking test would be super preferable here but isn't required

### Submitting a Pull Request
- Squash commits
- Lint your code with eslint (config provided)
- Include relevant test updates/additions

## Support
- If you have any issues, feel free to hit us up at [dscbvppune@gmail.com](mailto:dscbvppune@gmail.com)
- You can also put up queries on GitHub issues [here](https://github.com/dscbvppune/dsc/issues)

## License
The template [dewanshrawat15.github.io](https://github.com/dewanshrawat15/dewanshrawat15.github.io) used has been built by [Dewansh Rawat](https://dewanshrawat.tech).
