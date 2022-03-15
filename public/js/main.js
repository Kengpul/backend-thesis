// const settingsForm = document.querySelector("#settingsForm");
//
// if (settingsForm) {
//   settingsForm.addEventListener('submit', (e) => {
//     // console.log("Submit")
//
//     try {
//       const userId = document.querySelector("#userId").value;
//       const firstname = document.querySelector("#firstname").value;
//       const username = document.querySelector("#username").value;
//       const password = document.querySelector("#password").value;
//       const data = {
//           username: username.value,
//           password: password.value,
//           firstname: firstname.value,
//       }
//       console.log(data);
//       fetch(`http://localhost:1000/${userId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           // 'Content-Type': 'application/x-www-form-urlencoded'
//         },
//         // body: JSON.stringify({
//         //   username: username.value,
//         //   password: password.value,
//         //   firstname: firstname.value,
//         // })
//         body: JSON.stringify(data)
//       })
//       console.log(data)
//     } catch (err) {
//         console.log(err)
//     }
//     e.preventDefault();
//   })
// }
