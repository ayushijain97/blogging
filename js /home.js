function clearBodyField() {
  document.querySelector(".form_inputField").value = " ";
}
function clearTitleField() {
  document.querySelector(".formTitle").value = " ";
}
function readingTime() {
  const text = document.querySelector(".form_inputField").value;
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}
const createBlog = async (e) => {
  let inputData = document.querySelector(".form_inputField").value;
  const readTime = readingTime();
  const contentTags = document.getElementById("datalist").value;
  const blogTitle = document.querySelector(".formTitle").value;
  console.log(blogTitle);
  // const today = new Date();
  // let month = today.toLocaleString("default", { month: "short" });
  // if (today.getFullYear)
  //   console.log(today.getDate() + " " + month + " " + today.getFullYear());

  e.preventDefault();
  try {
    const response = await fetch("http://localhost:3000/postBlog", {
      method: "POST",
      headers: {
        "Content-type": "application/JSON",
      },
      body: JSON.stringify({
        inputData: inputData,
        readTime: readTime,
        contentTags: contentTags,
        blogTitle: blogTitle,
      }),
    });
    const data = await response.text();
    clearBodyField();
    clearTitleField();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

document.querySelector(".formBtn").addEventListener("click", createBlog);
