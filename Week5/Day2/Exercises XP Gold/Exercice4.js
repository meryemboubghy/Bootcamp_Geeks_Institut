const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  const [users, posts, albums] = await Promise.all(
    urls.map((url) => fetch(url).then((resp) => resp.json()))
  );
  console.log("users", users);
  console.log("posta", posts);
  console.log("albums", albums);
};

getData();
// version Modifiee :
const getData2 = async function () {
  try {
    const responses = await Promise.all(
      urls.map(async (url) => {
        const resp = await fetch(url);
        return await resp.json();
      })
    );
    const [users, posts, albums] = responses;
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log("oooooops");
  }
};

getData2();
