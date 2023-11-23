function search() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('col-4');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

const stars=document.querySelectorAll('star');
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") :
            star.classList.remove("active");
        });
    });
});

