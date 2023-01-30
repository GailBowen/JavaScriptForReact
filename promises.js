const blogPosts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
    {title: 'Post Three', body: 'This is post three'},
];

function getPosts() {
    setTimeout(() => {
        let output = '';

        blogPosts.forEach((post)=> {
            output += `<li>${post.title}</li>`
        });

        document.body.innerHTML = output;

    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            blogPosts.push(post);

            const error = false;
            
            if(!error){
                resolve();
            }
            else
            {
                reject('Error: something went wrong');
            }

           }, 2000);
    });
}

createPost({ title: 'Post The Fourth', body: 'I am the fourth one'})
.then(getPosts);