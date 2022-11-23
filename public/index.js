// Your code here
async function getCat() {
    try {
        const header = document.createElement("h1")
        header.innerText = "Kitten Pic"
        document.body.appendChild(header)
        const res = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await res.json()

        const url = data[0].url

        let catImage = document.createElement("img")
        catImage.setAttribute("src", url)
        document.body.appendChild(catImage)


   }
   catch (e) {
    console.log("no kitten pic")
   }
}
async function changeCat(event) {
  event.preventDefault()
  const catImage = await fetch("https://api.thecatapi.com/v1/images/search")
  const data = await catImage.json()
  const url = data[0].url

  const imageLocation = document.body.querySelector("img")
  imageLocation.setAttribute("src", url)

  // reset votes
  const voteCount = document.getElementById("votes")
  voteCount.innerText = 0

  // reset comments
  const ol = document.getElementById('comments');
  const commentBox = document.getElementById('comment-field');
  ol.innerHTML = '';
  commentBox.value = '';

}

let commentId = 0;
function generateCommentId() {
  commentId++;
  return commentId;
}

// p1
function addVote() {
    const voteCount = document.getElementById("votes")
    let count = Number(voteCount.innerText)
    console.log(count)
    count++
    voteCount.innerText = count
}
function downVote() {
    const voteCount = document.getElementById("votes")
    let count = Number(voteCount.innerText)
    console.log(count)
    count--
    voteCount.innerText = count
}
function submitComment() {
  const commentBox = document.getElementById('comment-field');
  const input = commentBox.value;
  const ol = document.getElementById('comments');

  if (input) {
    let id = generateCommentId();

    const comment = document.createElement('li');
    comment.setAttribute('id', id);
    comment.innerText = input;

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', id);
    deleteButton.innerHTML = 'Delete';

    ol.append(comment, deleteButton);
  }
}
function deleteComment(id) {
  const comment = document.getElementById(id);
  console.log(comment);
  comment.remove();
  const button = document.getElementById(id);
  button.remove();
}


window.addEventListener('DOMContentLoaded', (event) => {
    const newCatbutton = document.getElementById('new-cat')
    newCatbutton.addEventListener("click", changeCat)

    const upVoteButton = document.getElementById("up")
    const downVoteButton = document.getElementById("down")


    upVoteButton.addEventListener("click", addVote)
    downVoteButton.addEventListener("click", downVote)

    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', submitComment);

    const ol = document.getElementById('comments');

    ol.addEventListener('click', event => {
      event.stopPropagation();
      let commentId = event.target.id;
      deleteComment(commentId);
    });
})

window.onload = () => { getCat() }
