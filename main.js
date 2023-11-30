
const HTTP_REQUEST = 'https://api.nasa.gov/planetary/apod?api_key='
const API_TOKEN = 'Y3VRCfZxmT12Bt2H78MG5nKylfyRYWDp6osPvoUr' 


const APOD = async() => {
    try {
        const res = await fetch(`${HTTP_REQUEST}${API_TOKEN}`)
        const data = await res.json()
        displayDATA(data)
        console.log(data)
    }
    catch (e) {
        console.log('Error fetching data')
    }
}

const displayDATA = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('image').src = data.hdurl
    document.getElementById('text').textContent = data.explanation
}

document.getElementById('btn').addEventListener('click', () => {
    let t2s = document.getElementById('text').textContent;
    const text2speech = new SpeechSynthesisUtterance(t2s);
    speechSynthesis.cancel(text2speech);
    speechSynthesis.speak(text2speech);
});

document.getElementById('Pbtn').addEventListener('click', () => {
    let t2s = document.getElementById('text').textContent;
    const text2speech = new SpeechSynthesisUtterance(t2s);
    speechSynthesis.pause(text2speech)
});

document.getElementById('Rbtn').addEventListener('click', () => {
    let t2s = document.getElementById('text').textContent;
    const text2speech = new SpeechSynthesisUtterance(t2s);
    speechSynthesis.resume(text2speech)
});
APOD()
