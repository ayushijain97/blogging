const createBlog = async(e) => {
    let inputData = document.querySelector(".form_inputField").value;
    // const today = new Date();
    // let month = today.toLocaleString("default", { month: "short" });
    // if (today.getFullYear)
    //   console.log(today.getDate() + " " + month + " " + today.getFullYear());
    
    e.preventDefault();
    try {
        const response = await fetch(
            "http://localhost:3000/blog",
             {
                method: "POST",
                headers: {
                    "Content-type": "application/JSON",
                },
                body: JSON.stringify({
                     inputData: inputData,
                }),
            }
        );
        const data = await response.text();
        // enter you logic when the fetch is successful
        console.log(data);
      } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
      }
 };
document.querySelector(".formBtn").addEventListener("click",createBlog);


