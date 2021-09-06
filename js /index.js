
const limitBodySize = (body, limit = 120) => {
  const newTitle = [];
  if (body.length > limit) {
    body.split(" ").reduce((acc, cur) => {
      if (acc + cur.length <= limit) {
        newTitle.push(cur);
      }
      return acc + cur.length;
    }, 0);
    return `${newTitle.join(" ")}...`;
  }
  return body;
}; 
const renderPage = (blogs) => {
  console.log(blogs.createdAt);
  var createdAt = moment(blogs.createdAt);
  createdAt = moment(createdAt, "YYYYMMDD").fromNow();
  const markup = `
            <div class="content_details">
                <div class="content_body">
                    <h2>${blogs.blogTitle}</h2>
                    <p class="content_paragraph">${limitBodySize(blogs.inputData)}</p>
                    <ul class="content__tags">
                        <li class="content__list content__date"> ${createdAt}</li>
                        <li class="content__list content__time">${blogs.readTime} min</li>
                        <li class="content__list  content__topic">${blogs.contentTags}</li>
                    </ul>
                </div>
                <img src="images/background.jpeg" alt="" class="content_image"/>
            </div>`;
          document.querySelector(".content__partition").insertAdjacentHTML("beforeend",markup);
}
const loadPage = (data) => {
    data.forEach(renderPage);
}
const onloadPage = async() => {
    try {
      const result = await fetch("http://localhost:3000/getBlog?q="+ new Date().getTime())
      var data = await result.json();
      loadPage(data);
    }catch(error){
        console.log(error)
    }
}
window.addEventListener("load", onloadPage);


