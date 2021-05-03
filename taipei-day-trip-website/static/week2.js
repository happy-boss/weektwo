
window.onload = function getData() {

    var req = new XMLHttpRequest();
    req.open("get", "/api/attractions?page=0");
    req.onload = function () {
        
        var data = JSON.parse(this.responseText);
        
        for(i=0;i<data.data.length;i++){
        var imagesUrl =data.data[i].images.split(",")
        // console.log(imagesUrl[1])
        var pictureName=data.data[i].name
        var pictureMrt=data.data[i].mrt
        var pictureCategory=data.data[i].category

            var bigbox=document.getElementById("bigbox");
            bigbox.classList.add("bigbox")
            var box=document.createElement("div")
            box.classList.add("box")
            var picture =document.createElement("img");
            // picture.src=imagesUrl[1];
            picture.src="http://"+imagesUrl[1].split("'")[1];
            picture.classList.add("picture");
            box.appendChild(picture);
            bigbox.append(box);
            //這裡創名字的文字
            let name=document.createElement("div");
            name.classList.add("name");
            name.appendChild(document.createTextNode(pictureName));
            box.appendChild(name);
            bigbox.appendChild(box);
            //這裡創放分類跟捷運站的箱子
            let textBox=document.createElement("div");
            textBox.classList.add("textBox");
            //這裡創捷運的文字
            let mrt=document.createElement("div");
            mrt.classList.add("mrt");
            mrt.appendChild(document.createTextNode(pictureMrt));
            //這裡創分類的文字
            let category=document.createElement("div");
            category.classList.add("category");
            category.appendChild(document.createTextNode(pictureCategory));

            textBox.appendChild(mrt);
            textBox.appendChild(category);
            console.log(textBox)
            box.appendChild(textBox);
            // console.log(textBox.appendChild(mrt))
            // bigbox.appendChild(box);
            
            // textBox.appendChild(category);
            // box.appendChild(category);
            // bigbox.appendChild(box);

           


        };
    };//onload 資料回傳可以方便弄資料
    req.send();//送出連線
};

