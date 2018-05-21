var book1 = {
    name:"",
    img:"",
    links:{
        0:{
            text:"link1",
            url:"link1"
        },
        1:{
            text:"link2",
            url:"link2"
        }
    }
}
var book2 = {
    name:"",
    img:""
}
var book3 = {
    name:"",
    img:"",
    descricao,
    // link:{
    //     text:"",
    //     url:""
    // }
    links:{
        0:{
            text:"",
            url:""
        },
        1:{
            text:"",
            url:""
        }
    }
}



class Library{
    constructor(){
        this.books = [book1,book2,book3];
        this.Load(book1);
    }
    Load(book){
        jQuery.each(book.links,function(i,v){
            console.log(i);
        });
    }
}

var library = new Library();