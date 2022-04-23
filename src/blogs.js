const blogList = [
    {title:"Mastering the art of console loging", 
    body: "Try always  to console.log(props) on the first line right after opening your functional component",
    image: "tip1.png",
    author: "Mario",
    id: 1},
    {
        title:"The two ways of destructuring props", 
        body: "You can either access it directly by calling props or use object distructuring to only extract the specific key:value pair you want. CHECK out the example", 
        image: "tip2.png",
        author: "Luigi", 
        id: 1
    },
        {
        title:"How to avoid erros with parentesis", 
        body: "Download the Prettier plug-in. Always double check the matching parentesis. Take special care when using methods inside the JSX tags :D", 
        image: "tip3.png",
        author: "Bowser", 
        id: 1
    },
    {
        title:"MOST IMPORTANT", 
        body: "DONT FORGET TO USE THE QUEUE", 
        author: "Peach",
        image: "tip4.png", 
        id: 1
        }
]

const main_title = "Welcome to our awesome props recap"

export {blogList, main_title};