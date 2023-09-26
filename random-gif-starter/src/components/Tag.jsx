import axios from "axios";


export default function Tag() {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

  async function fetchData(){
      let data = await fetch(url);
      console.log(data);
  }

  fetchData();

  return <div>
    Tag
    </div>;
}
