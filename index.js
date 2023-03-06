const jokeElement = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click',generateJoke);

generateJoke();

async function generateJoke()
{
    // call the icanhaz API
    const jokeResult = await fetch('https://icanhazdadjoke.com/',
    {
        headers: {
            'Accept': 'application/json'
        }
    });

    const joke = await jokeResult.json();

    // set the new joke
    jokeElement.innerHTML = joke.joke;
}