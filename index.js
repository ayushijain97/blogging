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
    const response = await fetch("http://localhost:3000/blog", {
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
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const renderPage = () => {
  const markup = `
            <div class="content_details">
                <div class="content_body">
                    <h2>Lorem ipsum dolor sit amet consectetur,</h2>
                    <p class="content_paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio voluptate voluptas,.</p>
                    <ul class="content__tags">
                        <li class="content__list content__date">Apr 3</li>
                        <li class="content__list content__time">min</li>
                        <li class="content__list  content__topic">Technology</li>
                    </ul>
                </div>
                <img src="images/background.jpeg" alt="" class="content_image"/>
            </div>`;
          document.querySelector(".content__partition").insertAdjacentHTML("afterbegin",markup);
}
window.addEventListener("load", renderPage);
document.querySelector(".formBtn").addEventListener("click", createBlog);

