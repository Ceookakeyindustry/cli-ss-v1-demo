/* ===========================
   StudentSync V1
   Made by Harjinder
===========================*/

// ----------------------------
// Scroll to Install Section
// ----------------------------

function scrollInstall() {

    document.getElementById("install").scrollIntoView({

        behavior: "smooth"

    });

}

// ----------------------------
// Copy Commands
// ----------------------------

function copyText(id) {

    const text = document.getElementById(id).innerText;

    navigator.clipboard.writeText(text);

    const button = document.querySelector(`#${id}`).nextElementSibling;

    button.innerHTML = "✓ Copied!";

    setTimeout(() => {

        button.innerHTML = "Copy";

    }, 1800);

}

// ----------------------------
// Reveal Animation
// ----------------------------

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section,.card,.feature-card,.hero")
.forEach(el=>observer.observe(el));


// ----------------------------
// Navbar Shadow
// ----------------------------

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>40){

        nav.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

    }

    else{

        nav.style.boxShadow="none";

    }

});


// ----------------------------
// Animated Terminal
// ----------------------------

const terminal=document.getElementById("terminal");

const terminalText=`$ python main.py

=========================
 STUDENT GRADE MANAGER
=========================

1. Add Student
2. View Students
3. Search Student
4. Edit Student
5. Delete Student
6. Exit

Choose an option...

`;

let i=0;

function typeTerminal(){

    if(i<terminalText.length){

        terminal.textContent+=terminalText.charAt(i);

        i++;

        setTimeout(typeTerminal,22);

    }

}

terminal.textContent="";

setTimeout(typeTerminal,600);


// ----------------------------
// Floating Cards
// ----------------------------

document.querySelectorAll(".card").forEach((card,index)=>{

    card.animate(

        [

            {

                transform:"translateY(0px)"

            },

            {

                transform:"translateY(-10px)"

            },

            {

                transform:"translateY(0px)"

            }

        ],

        {

            duration:3500+(index*350),

            iterations:Infinity

        }

    );

});


// ----------------------------
// Mouse Glow Effect
// ----------------------------

const glow=document.createElement("div");

glow.style.position="fixed";
glow.style.width="250px";
glow.style.height="250px";
glow.style.borderRadius="50%";
glow.style.pointerEvents="none";
glow.style.background="radial-gradient(circle,#58a6ff30,transparent 70%)";
glow.style.filter="blur(20px)";
glow.style.zIndex="-1";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

    glow.style.left=(e.clientX-125)+"px";

    glow.style.top=(e.clientY-125)+"px";

});


// ----------------------------
// Hero Title Animation
// ----------------------------

const heroTitle=document.querySelector(".hero h1");

heroTitle.animate(

    [

        {

            opacity:0,

            transform:"translateY(40px)"

        },

        {

            opacity:1,

            transform:"translateY(0)"

        }

    ],

    {

        duration:1200,

        fill:"forwards"

    }

);


// ----------------------------
// Button Hover Scale
// ----------------------------

document.querySelectorAll("button,a").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="scale(1.05)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="scale(1)";

    });

});


// ----------------------------
// Console Message
// ----------------------------

console.log(

"%cStudentSync Version 1",

"color:#58a6ff;font-size:24px;font-weight:bold"

);

console.log(

"%cMade by Harjinder",

"color:#3fb950;font-size:16px"

);
