// create your App component here
import {useEffect, useState} from "react";

export default function App(){
    const [dogPicture, setDogPicture] = useState(null);

useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => setDogPicture(data.message) )   
}, [])


return(
    <div>

      {dogPicture ? (
        <img src={dogPicture} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}

    </div>
)
}