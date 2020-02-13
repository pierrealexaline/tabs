function tabs(tab_wrapper_id){
    let tabwrapper = document.getElementById(tab_wrapper_id);
    let tablinks = tabwrapper.getElementsByClassName('tablinks');
    let tabcontents = tabwrapper.getElementsByClassName('tabcontent'); 
    let i,j; 
    for (i = 0; i < tablinks.length; i++) { 
        tabcontents[i].style.display='none'; 
        if(tablinks[i].classList.contains("active")) { 
            tablinks[i].classList.remove("active");  
        }

        tablinks[i].addEventListener('click', function() { 
            for (j = 0; j < tabcontents.length; j++) {  
                tabcontents[j].style.display='none'; 
                if(tablinks[j].classList.contains("active")) { 
                    tablinks[j].classList.remove("active");  
                }
            } 
            this.classList.add('active');
            tabcontents[(this.id.replace('tabs', ''))-1].style.display='block';  
        });
    }
    tablinks[0].classList.add('active');
    tabcontents[0].style.display='block';  
} 