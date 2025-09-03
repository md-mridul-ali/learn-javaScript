const loadPost=()=>{
    const url="https://jsonplaceholder.typicode.com/posts";
    fetch(url)
    .then((res)=>res.json())
    // .then((json)=>console.log(json))
    // .then((json)=>displayPost(json))
    .then((data)=>{
        displayPost(data);
    })
};
const displayPost=(posts)=>{
    // for(let i=0; i<posts.length; i++)
    // {
    //     console.log(posts[i]);
    // }
    // for(let post of posts)
    // {
    //     console.log(post);
    // }
    // 1.get the container
    const postContainer=document.getElementById('post-container');
    postContainer.innerHTML="";
    // console.log(postContainer);
    posts.forEach((post)=>{
        // console.log(post.title);
        // 2.create html element
         const postCard=document.createElement("div");
         postCard.innerHTML=`
          
           <div class="post-card">
               <h2>${post.title}</h2>
               <p>${post.body}</p>
         </div>
         
         `;

        //  console.log(li);
        //  3.add li into container
        postContainer.appendChild(postCard);
        // console.log(post.id)
        // console.log(post.body)
    });
};
loadPost();