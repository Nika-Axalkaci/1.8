//  TASK1

// function expo(num, pow, cb) {
//   if (pow === 0) {
//     cb(1);
//   } else {
//     expo(num, pow - 1, function (result) {
//       let calc = num * result;
//       cb(calc);
//     });
//   }
// }

// expo(5, 0, (result) => {
//   console.log(result);
// });

// task2

function createPost(title, id, body) {
  const p = document.createElement("p");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  p2.classList.add("p2");
  const div = document.createElement("div");
  p.innerText = id;
  p1.innerText = title;
  p2.innerText = body;
  div.classList.add("border");
  div.append(p, p1, p2);

  return div;
}

async function faData() {
  try {
    const rwData = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await rwData.json();
    data.forEach((u) => {
      const post = createPost(u.title, u.id, u.body);
      document.body.append(post);
    });
  } catch (error) {
    console.log(error);
  }
}
faData();

// Task3
async function deepCopyObject(obj) {
  return new Promise((resolve, reject) => {
    if (typeof obj !== "object" || obj === null) {
      reject(new Error("Invalid argument. Expected an object."));
    } else {
      try {
        const copy = JSON.parse(JSON.stringify(obj));
        resolve(copy);
      } catch (error) {
        reject(error);
      }
    }
  });
}
deepCopyObject()
  .then((copy) => {
    console.log(copy);
  })
  .catch((error) => {
    console.log(error);
  });
