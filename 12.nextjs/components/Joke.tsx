async function getJoke() {
    await new Promise((resolve) => setTimeout(resolve, 5000));
  
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke",
      {
        cache: "no-store",
      }
    );
  
    return res.json();
  }
  
  export default async function Joke() {
    const joke = await getJoke();
  
    return (
      <div className="bg-white p-5 rounded shadow">
        <h2>{joke.setup}</h2>
        <p>{joke.punchline}</p>
      </div>
    );
  }