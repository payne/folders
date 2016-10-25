IMHO this output is worth capturing; since I am learning.

```
Cicero:folders mpayne$ ember install emberfire
Could not start watchman; falling back to NodeWatcher for file system events.
Visit http://ember-cli.com/user-guide/#watchman for more info.
Installed packages for tooling via npm.
installing emberfire
  create app/adapters/application.js
  install bower package firebase
  cached https://github.com/firebase/firebase-bower.git#3.4.1
  new version for https://github.com/firebase/firebase-bower.git#^3.0.0
  resolved https://github.com/firebase/firebase-bower.git#3.5.2
Installed browser packages via Bower.

EmberFire installed.

CONFIGURATION REQUIRED

Please update config/environment.js with your firebase settings. You can find these at https://console.firebase.google.com/ by clicking the [Add Firebase to your web app] button on the project overview panel.

Example:

// config/environment.js
var ENV = {
  locationType: 'auto',
  // ...
  firebase: {
    apiKey: 'xyz',
    authDomain: 'YOUR-FIREBASE-APP.firebaseapp.com',
    databaseURL: 'https://YOUR-FIREBASE-APP.firebaseio.com',
    storageBucket: 'YOUR-FIREBASE-APP.appspot.com',
  },


  // if using ember-cli-content-security-policy
  contentSecurityPolicy: {
    'script-src': "'self' 'unsafe-eval' apis.google.com",
    'frame-src': "'self' https://*.firebaseapp.com",
    'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
  },


Installed addon package.
```
