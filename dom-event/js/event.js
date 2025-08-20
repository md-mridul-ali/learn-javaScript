function makeYellow()
        {
            document.body.style.backgroundColor='yellow';
        }
function makeRed()
        {
            document.body.style.backgroundColor='red';
        }

// get element by id and set onclick

const btnMakeBlue=document.getElementById('btn-make-blue');
        btnMakeBlue.onclick=function makeBlue()
        {
            document.body.style.backgroundColor='blue';
        }

// different version
const btnMakePurple=document.getElementById('btn-make-purple');
        btnMakePurple.onclick= makePurple;
        function makePurple()
        {
            document.body.style.backgroundColor='purple';
        }