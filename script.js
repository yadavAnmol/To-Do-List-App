// Use localStorage to persist data
let words = JSON.parse(localStorage.getItem("words")) || [];

function saveWords() {
  localStorage.setItem("words", JSON.stringify(words));
}

function addWord() {
  const input = document.getElementById("wordInput");
  const value = input.value.trim();

  if (value) {
    words.push(value);
    saveWords();
    input.value = "";
    alert("Word added!");
  } else {
    alert("Please enter a word.");
  }
}

function addWordFromEdit() {
  const input = document.getElementById("newWord");
  const value = input.value.trim();

  if (value) {
    words.push(value);
    saveWords();
    input.value = "";
    alert("New word added!");
  } else {
    alert("Please enter a word to add.");
  }
}

function removeWord() {
  const input = document.getElementById("wordRemove");
  const value = input.value.trim();

  const index = words.indexOf(value);
  if (index > -1) {
    words.splice(index, 1);
    saveWords();
    alert("Word removed!");
  } else {
    alert("Word not found!");
  }
  input.value = "";
}

function displayWords() {
  const output = document.getElementById("output");
  if (words.length > 0) {
    output.innerText = words.join(", ");
  } else {
    output.innerText = "No words added yet.";
  }
}

function goToEditPage() {
  window.location.href = "edit.html";
}

function goToShowPage() {
  window.location.href = "show.html";
}

function back() {
  window.location.href = "index.html";
}

function goToExitPage(){
  localStorage.removeItem("words");

  words = [];

  alert("All tasks cleared!");
  window.location.href = "index.html";
}
