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
// p1


// in html
// create button el
// set id attribute

// windows .add event
// save button location as var

// on click
// call change cat

// prevent default
// new func change cat
// fetches new cat img
// changes src of img to new cat

// p2

// html
// add 2 buttons, up , down
// add text default 0

// on click get text,
// new func
// change to num,
// inc text to -- or ++
// change text on html

// go back to change cat, if new cat button clicked, reset upvotes to 0

// p3

// in html
// add an add comment button, and text field
// create ul for all comments

// on click call add comment

// new func, add comment
// get text field val
// create new li
// change li val to text field
// add to ul

// bonus delete

// go back add button for each li
// add id for each li

// on click call delete comment(id of comment)

// new func, delet comment
// go in ul and delete li element
// based on id



window.onload = () => { getCat() }
