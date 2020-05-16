# vuegram

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Firebase config/scripts
The core Firebase JS SDK is always required and must be listed first

```
<script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-app.js"></script>
```

 TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries
```
<script src="https://www.gstatic.com/firebasejs/7.14.3/firebase-analytics.js"></script>
```


```
<script>
  // Your web app's Firebase configuration
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>
```

