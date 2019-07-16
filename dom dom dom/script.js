document.forms['black_list'].addbtn.addEventListener('click', ()=>{
    event.preventDefault();
    let name = document.forms['black_list'].autor.value;
    let header = document.forms['black_list'].headero.value;
    let text = document.forms['black_list'].texto.value;
    let url = document.forms['black_list'].urlo.value;
    let date = new Date().toLocaleDateString();

    let obj = document.createElement('div');
    let cont = document.querySelector('.cont');

    let pheader = document.createElement('p');
    pheader.innerText = header;

    let pname = document.createElement('p');
    pname.innerText = name;

    obj.appendChild(pname);
    obj.appendChild(pheader);
    cont.appendChild(obj);


})
