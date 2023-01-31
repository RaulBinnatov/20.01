
fetch('./test.json')
.then(resp =>resp.json())
.then(data =>{
    console.log(data);
    container.innerHTML +=''
    data.forEach(food =>{
        container.innerHTML +=`
        <div class="main_card">
        <h2>${food.name}</h2>
        <p>${food.info}.</p>
        <img src="${food.img}" > 

    </div>
`
    })
})