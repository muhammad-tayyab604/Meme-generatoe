const generateMemeBtn = document.querySelector(".meme-generator .generate-meme-btn");
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector(".meme-generator .meme-tittle");
const memeAuthor = document.querySelector(".meme-generator .meme-author");

const updateDetails = (url, title, author, nsfw) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = author;
}

const generateMeme = () => {
    fetch("https://meme-api.com/gimme").then((response) => response.json())
    .then((data) => {
        updateDetails(data.url, data.title, data.author, data.nsfw=true)
    });
};


generateMemeBtn.addEventListener("click", generateMeme)


