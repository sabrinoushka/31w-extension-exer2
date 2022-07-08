(function(){

    let elmBoite__modale
    let elmBoite__X
    let elmCover

    function creer_boite_modale(){
        elmCover = document.createElement('div')  
        elmBoite__modale = document.createElement('div')
        elmBoite__X = document.createElement('button')
        elmBoite__modale.appendChild(elmBoite__X)
        elmBoite__X.classList.add('boite__X')
        elmBoite__X.innerHTML = "X"
        elmBoite__modale.classList.add('boite__modale')
        elmBody = document.querySelector('body') 
        elmBody.appendChild(elmCover)
        elmBody.appendChild(elmBoite__modale)
    }

    creer_boite_modale();   
    
    document.querySelectorAll('.boite__modale')
    let elmOK = document.querySelector('#mon_bouton')

    elmOK.addEventListener('mousedown', function(){
        console.log('Bravo le script fonctionne')
        elmBoite__modale.classList.add('boite__modale__ouvrir') 
        elmCover.classList.add('dark')    
        console.log(elmBoite__modale.classList)
        afficherMessage();
    })

    elmBoite__X.addEventListener('mousedown', function(){
        elmBoite__modale.classList.remove('boite__modale__ouvrir');        
        console.log(elmBoite__modale.classList);
        elmCover.classList.remove('dark');
        conteneurMessage.innerHTML = ''
        elmBoite__modale.removeChild(conteneurMessage)
        
    })

    function afficherMessage(){
        let sectionArticle
        let titre
        sectionArticle = document.querySelector('.site__main')
        //console.log(sectionArticle)
        titre = sectionArticle.querySelector('h2').innerHTML
        //console.log(titre) 
        conteneurMessage = document.createElement('div')
        elmBoite__modale.appendChild(conteneurMessage)
        conteneurMessage.classList.add('conteneur__message')
        //console.log(conteneurMessage)
        let message = `
                        L'inscription au cours ${titre} est déjà ouverte!
                      `
        conteneurMessage.insertAdjacentHTML('afterbegin', message)

    }

})()