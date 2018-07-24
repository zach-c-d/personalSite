window.onload = function(){
    console.log('up!');
    var currentProjects = document.getElementById("CurrentProjects");
    var resumePortfolio = document.getElementById("ResumePortfolio");
    

    currentProjects.addEventListener('click', 
    function(){
        console.log('hello!');
        currentProjects.classList.add("boxExpanded");
    }); 
    resumePortfolio.addEventListener('click', 
    function(){
        console.log('hello!');
    }); 
}

// let duh_body = document.querySelector('body');


