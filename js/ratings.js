function fill_list(items)
{
    console.log(items);
    var news = document.querySelector(".rating-list");
    for(var i = 0; i < items.length; i++) {
        var card = document.createElement("div")
        card.classList.add("card");
        var col1 = document.createElement("div")
        col1.classList.add("rating-sys-stars");
        col1.classList.add("col-md-3");


        var img = document.createElement('img')
        img.src = "images/placeholder-avatar.jpg"

        
        for (var j = 0; j < parseInt(items[i].rating); j++)
        {
            var star = document.createElement("label");
            star.innerHTML = '★';
            col1.appendChild(star);
        }
        for (var j = 0; j < 5 - parseInt(items[i].rating); j++)
        {
            var star = document.createElement("label");
            star.classList.add('unselected')
            star.innerHTML = '★';
            col1.appendChild(star);
        }

        var col2 = document.createElement("div")
        col2.classList.add("rating-sys");
        col2.classList.add("col-md-6");

        var h4 = document.createElement("h4");
        h4.innerHTML = "Unknown User #" + Math.floor(Math.random() * 9999);
        var p = document.createElement("p");
        p.innerHTML = items[i].review;
        col2.appendChild(h4);
        col2.appendChild(p);

        card.appendChild(img);
        card.appendChild(col2);
        card.appendChild(col1);


        news.appendChild(card);
    }
}

async function get_rating_list()
{
    const res = await fetch("https://mateo295.pythonanywhere.com/get-ratings")
    if (!res.ok)
    {
        console.error("There was an error:", res.statusText);
        return;
    }
    const data = await res.json();
    //console.log(data.ratings);
    fill_list(data.ratings);
}

get_rating_list();
