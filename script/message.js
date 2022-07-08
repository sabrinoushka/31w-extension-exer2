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
        elmBoite__X.innerHTML =`
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="41.756px" height="41.756px" viewBox="0 0 90 90" style="enable-background:new 0 0 41.756 41.756;"
        xml:space="preserve">
   <g>
       <path d="M27.948,20.878L40.291,8.536c1.953-1.953,1.953-5.119,0-7.071c-1.951-1.952-5.119-1.952-7.07,0L20.878,13.809L8.535,1.465
           c-1.951-1.952-5.119-1.952-7.07,0c-1.953,1.953-1.953,5.119,0,7.071l12.342,12.342L1.465,33.22c-1.953,1.953-1.953,5.119,0,7.071
           C2.44,41.268,3.721,41.755,5,41.755c1.278,0,2.56-0.487,3.535-1.464l12.343-12.342l12.343,12.343
           c0.976,0.977,2.256,1.464,3.535,1.464s2.56-0.487,3.535-1.464c1.953-1.953,1.953-5.119,0-7.071L27.948,20.878z"/>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   <g>
   </g>
   </svg>
                               `
        elmBoite__modale.classList.add('boite__modale')
        elmBody = document.querySelector('body') 
        elmBody.appendChild(elmCover)
        elmBody.appendChild(elmBoite__modale)
    }

    creer_boite_modale();   
    
    document.querySelectorAll('.boite__modale')
    let elmOK = document.querySelector('#mon_bouton')

    elmOK.addEventListener('mousedown', function(){
        //console.log('Bravo le script fonctionne')
        elmBoite__modale.classList.add('boite__modale__ouvrir')
        elmCover.classList.add('dark')    
        //console.log(elmBoite__modale.classList)
        afficherMessage();
    })

    elmBoite__X.addEventListener('mousedown', function(){
        elmBoite__modale.classList.remove('boite__modale__ouvrir');        
        //console.log(elmBoite__modale.classList);
        elmCover.classList.remove('dark')
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