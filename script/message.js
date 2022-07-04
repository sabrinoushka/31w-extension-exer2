(function(){

    let elmBoite__modale
    let elmBoite__X

    function creer_boite_modale(){
        elmBoite__modale = document.createElement('div')
        elmBoite__X = document.createElement('button')
        elmBoite__modale.appendChild(elmBoite__X)
        elmBoite__X.classList.add('boite__X')
        elmBoite__X.innerHTML = "X"
        elmBoite__modale.classList.add('boite__modale')
        elmBody = document.querySelector('body')
        elmBody.appendChild(elmBoite__modale);   
        elmBoite__modale.insertAdjacentHTML("afterbegin", "ATTENTION!")
        elmBoite__modale.classList.add('message')    
    }

    creer_boite_modale();   
    
    document.querySelectorAll('.boite__modale')
    let elmOK = document.querySelector('#mon_bouton')

    elmOK.addEventListener('mousedown', function(){
        console.log('Bravo le script fonctionne')
        elmBoite__modale.classList.add('boite__modale__ouvrir')       
        console.log(elmBoite__modale.classList)
    })

    elmBoite__X.addEventListener('mousedown', function(){
        elmBoite__modale.classList.remove('boite__modale__ouvrir');
        console.log(elmBoite__modale.classList)
    })

})()