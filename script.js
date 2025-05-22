const cmingUp = document.querySelectorAll(".cmingup");

cmingUp.forEach(clk => {
    clk.addEventListener("click", function(event){
        event.preventDefault();
        alert("Coming Soon..");
    });
});
