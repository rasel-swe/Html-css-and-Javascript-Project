// const posts = [
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
//     {
//         title: 'Hello this is title 1',
//         body: 'This is body 1'
//     },
// ]

//Fetech data

const fetchData = async (config) =>{
    try{
        const response = await axios(config)
        return response.data
    } catch(error){
        throw Error("Data is not fetched!")
    }
    
  
  
}


const postsElement = document.querySelector(".posts")

const loadAllData = async () =>{
    const posts = await fetchData("https://jsonplaceholder.typicode.com/posts");
    posts.map((post) =>{
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
        <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>`
        postsElement.appendChild(postElement)
    })
}

loadAllData()