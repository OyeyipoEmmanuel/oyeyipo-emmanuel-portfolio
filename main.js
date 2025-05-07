const toggleNavIcon = document.getElementById("toggleNavIcon")
const mobileNavContent = document.getElementById("mobileNavContent")
const navLinks = document.querySelectorAll("#navLinks")
const nav = document.querySelector('nav')

const allSkillsBtn = document.getElementById("allSkillsBtn")
const langSkillsBtn = document.getElementById("langSkillsBtn")
const libSkillsBtn = document.getElementById("libSkillsBtn")
const toolSkillsBtn = document.getElementById("toolSkillsBtn")


allSkillsBtn.addEventListener('click', ()=>{
    allSkillsBtn.classList.add('purpleBgColor')
    langSkillsBtn.classList.remove('purpleBgColor')
    libSkillsBtn.classList.remove('purpleBgColor')
    toolSkillsBtn.classList.remove('purpleBgColor')
})

langSkillsBtn.addEventListener('click', ()=>{
    langSkillsBtn.classList.add('purpleBgColor')
    allSkillsBtn.classList.remove('purpleBgColor')
    libSkillsBtn.classList.remove('purpleBgColor')
    toolSkillsBtn.classList.remove('purpleBgColor')
})

libSkillsBtn.addEventListener('click', ()=>{
    libSkillsBtn.classList.add('purpleBgColor')
    langSkillsBtn.classList.remove('purpleBgColor')
    allSkillsBtn.classList.remove('purpleBgColor')
    toolSkillsBtn.classList.remove('purpleBgColor')
})

toolSkillsBtn.addEventListener('click', ()=>{
    toolSkillsBtn.classList.add('purpleBgColor')
    langSkillsBtn.classList.remove('purpleBgColor')
    libSkillsBtn.classList.remove('purpleBgColor')
    allSkillsBtn.classList.remove('purpleBgColor')
})



toggleNavIcon.classList.add("fa-bars")

toggleNavIcon.addEventListener('click', ()=>{
    mobileNavContent.classList.toggle("hidden")
    

    if(!toggleNavIcon.classList.contains("hidden")){  
        toggleNavIcon.classList.toggle("fa-xmark")
    }
})

navLinks.forEach(navLink =>{
    navLink.addEventListener('click',()=>{
        mobileNavContent.classList.add("hidden")
        toggleNavIcon.classList.remove("fa-xmark")
    })
})


window.addEventListener('scroll', ()=>{
    if(window.scrollY >=60){
        nav.classList.add('purpleBgColor')
    }else{
        nav.classList.remove('purpleBgColor')
    }
})

// window.addEventListener('load', ()=>{
//     setTimeout(()=>{
//         document.getElementById('content').classList.remove('hidden')
//         document.getElementById('loader').classList.add('hidden')

//         AOS.refresh()
//     }, 2000)
    
// })
    

