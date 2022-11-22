// Your code here
async function getCat() {
    try {
        const header = document.createElement("h1")
        header.innerText = "Kitten Pic"
        document.body.appendChild(header)
        const res = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await res.json()

        console.log(data[0].url)
        const url = data[0].url

        let catImage = document.createElement("img")
        catImage.setAttribute("src", url)
        document.body.appendChild(catImage)


   }
   catch (e) {
    console.log("no kitten pic")
   }
}


window.onload = () => { getCat() }
