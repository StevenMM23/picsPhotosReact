import axios from "axios";

const searchImages = async (term) => {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID l5y3SK88QeBv4qP3zJvqRlUF9DL4uNZSnYj_BsW-Z70",
      },
      params: {
        query: term,
      },
    });

    return response.data.results;
  } catch (error) {
    throw new Error("An error ocurred");
  }
};

export default searchImages;
