const task3Element = document.getElementById('task-3');

task3Element.addEventListener('click', myAlert)
function myAlert(){
    alert('Coucou !')
}

function mySecondAlert(name){
    alert(name)
}

function myThirdAlert(firstName, secondName, lastName){
    alert(`${firstName} ${secondName} ${lastName}`)
}

mySecondAlert('Laurent');

myThirdAlert('Laurent', 'François', 'Sauzet')
