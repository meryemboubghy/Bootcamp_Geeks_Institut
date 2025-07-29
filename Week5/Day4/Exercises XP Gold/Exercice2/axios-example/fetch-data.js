import axios from "axios";
// Fetch data from a public API using axios

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export async function getPosts() {
  try {
    const response = await axios.get(apiUrl);
    // Afficher les donnees
    response.data.forEach((post) => {
      console.log(`The title of the post ${post.id} is: ${post.title}`);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
getPosts();
export default getPosts;
