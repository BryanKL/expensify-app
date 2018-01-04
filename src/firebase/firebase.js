import * as firebase from 'firebase';
import { setTimeout } from 'timers';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export  { firebase, googleAuthProvider, database as default};

//   database.ref('expenses').on('child_removed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//   });

//   database.ref('expenses').on('child_changed', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

//     database.ref('expenses').on('child_added', (snapshot) => {
//         console.log(snapshot.key, snapshot.val());
//     });

//   database.ref('expenses')
//   .once('value').then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });
//       console.log(expenses);
//   });


//   database.ref('expenses')
//   .on('value', (snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//       });
//       console.log(expenses);
//   });

//   setTimeout(() => {
//       database.ref('expenses/-L1vKILfkPfaWeuUypL7/amount').set(20);
//   }, 3000);

//   database.ref('expenses').push({
//       description: '',
//       note: '',
//       amount: 0,
//       createdAt: 0
//     });

//   database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 423184192
//     });




  ////////////////////////////
  // testing below
  ////////////////////////////

// const onvalueChange = (snapshot) => {
//     console.log(snapshot.val());
//   };

//   database.ref().on('value', onvalueChange)

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`)
// });

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 3000);

//   setTimeout(() => {
//     database.ref().off('value', onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(40);
//   }, 10500);

//   database.ref().once('value').then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e)=>{
//     console.log('Error fetching data', e)
//   })

//   database.ref().set({
//       name: 'BryanWhiz',
//       age: 26,
//       stressLevel: 6,
//       job: {
//           title: 'Software Developer',
//           company: 'Google'
//       },
//       location: {
//           city: 'New York',
//           country: 'United States'
//       }
//   }).then(() => {
//     console.log('Data is saved!');
//   }).catch((e) => {
//     console.log('This failed', e)
//   });

//   database.ref().set('This is my data');

// database.ref('age').set(27);
// database.ref('location/city').set('Boston');

// database.ref('/attributes').set({
//     height: 180,
//     weight: 70
// }).then(() => {
//     console.log('Data is saved for 2nd set!');
// }).catch((e) => {
//     console.log('This failed for the 2nd set', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null);

// database.ref('isSingle').remove().then(() => {
//     console.log('Data was removed');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });