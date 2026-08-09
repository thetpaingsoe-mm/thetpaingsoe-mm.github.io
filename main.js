//  Navigation Bar Function
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

// Add Shadow on Navigation Bar While Scrolling
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


// Typing Effect
var typingEffect = new Typed(".typedText", {
  strings: ["Pen-Tester", "Offensive Security", "Cyber Security"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


// Scroll Reval Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

// Home
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


// Project Box
sr.reveal('.project-box', { interval: 200 })

// Headings
sr.reveal('.top-header', {})

// SCROLL REVEAL LEFT_RIGHT ANIMATION

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



// Change Active Link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)

// translate features 

const myanButtonTag = document.querySelector(".myan");
const engButtonTag = document.querySelector(".eng");
const aboutNodeTag = document.querySelector(".aboutNode");
const introNodeTag = document.querySelector(".introNode");
const titleNodeTag = document.querySelector(".title");

myanButtonTag.addEventListener("click", () => {
  myanButtonTag.style.display = "none";
  engButtonTag.style.display = "block";
  titleNodeTag.innerHTML = "ကြိုဆိုပါတယ်";

  aboutNodeTag.innerHTML = `ကျွန်တော်ကတော့ Low-Level Security နဲ့ Systems Exploitation ကို အဓိကထား လေ့လာနေတဲ့ Security Researcher တစ်ယောက်ဖြစ်ပါတယ်။ Userland/Kernel Space Exploit Development၊ OS Internals၊ Memory Corruption Bugs နဲ့ Reverse Engineering ဘက်မှာ စမ်းသပ်လေ့လာရင်း Vulnerability Research field ထဲမှာ အောင်မြင်တိုးတက်ဖို့ ကြိုးစားနေသူတစ်ယောက်ပါ။`;

  introNodeTag.innerHTML = `C/C++၊ Assembly၊ Reverse Engineering နဲ့ Operating System Internals ကို အခြေခံပြီး Userland နှင့် Kernel (Ring 3 & Ring 0) Memory Corruption Vulnerabilities များကို Research ရေးသား test လုပ်နေသူ တစ်​ယောက်ပါ။ System-Level Security Mechanics Concepts များကို နားလည်ထားလျက်ရှိကာ Real-World Exploit Development နှင့် Vulnerability Research နယ်ပယ်သို့ ဦးတည် လုပ်ဆောင်နေပါတယ်။`
});


engButtonTag.addEventListener("click", () => {
  engButtonTag.style.display = "none";
  myanButtonTag.style.display = "block";
  titleNodeTag.innerHTML = "Welcome";

  aboutNodeTag.innerHTML = `I am an aspiring Security Researcher with a deep focus on Low-Level Systems
                            and Exploitation. My core interests lies in OS Internals, Memory Corruption Vulnerabilities,
                            Reverse Engineering, and developing exploits across both Userland and Kernel spaces. I am
                            passionate about breaking down complex systems to understand their inner workings and
                            advance in the field of Vulnerability Research.`;

  introNodeTag.innerHTML = `A dedicated Systems Security Researcher targeting both Userland and
                                Kernel-level (Ring 3 & Ring 0) exploitation. Leverages strong fundamentals in C/C++,
                                Assembly, and OS Internals to analyze memory corruption vulnerabilities and conduct
                                low-level reverse engineering with the goal of contributing to real-world vulnerability
                                research.`;
})


// Change Image Features

const img1Tag = document.querySelector(".img1");
const img2Tag = document.querySelector(".img2");
const img3Tag = document.querySelector(".img3");
const img4Tag = document.querySelector(".img4");

const changeImageTimer = () => {
  setTimeout(() => {
    img1Tag.style.display = "none";
    img2Tag.style.display = "block";
    img3Tag.style.display = "none";
    img4Tag.style.display = "none";
  }, 3000);
  setTimeout(() => {
    img1Tag.style.display = "none";
    img2Tag.style.display = "none";
    img3Tag.style.display = "block";
    img4Tag.style.display = "none";
  }, 6000);
  setTimeout(() => {
    img1Tag.style.display = "none";
    img2Tag.style.display = "none";
    img3Tag.style.display = "none";
    img4Tag.style.display = "block";
  }, 9000);
  setTimeout(() => {
    img1Tag.style.display = "block";
    img2Tag.style.display = "none";
    img3Tag.style.display = "none";
    img4Tag.style.display = "none";
  }, 12000);
}

print("hello")

changeImageTimer();
setInterval(changeImageTimer, 12000);

const imagesArray = ["images/photo_2025-03-24_23-59-33.jpg", "images/photo_2025-03-24_23-54-38.jpg", "images/photo_2025-03-24_23-57-33.jpg"]


const imageTag = document.querySelector(".img");
const originalImageSource = imageTag.src;
const btnnTag = document.querySelector(".blue-btn")

let contentImage = 0;
let changeImageFunction = () => {
  let imagesArrayProperties = imagesArray[contentImage];
  if (contentImage === 3) {
    imageTag.src = originalImageSource;
    contentImage = 0;
  }
  contentImage += 1;
  imageTag.src = imagesArrayProperties;
}


// change Color Features
const $ = (selector) => document.querySelector(selector);

// Select Text
const textTag1 = $(".tex1");
const textTag2 = $(".tex2");
const textTag3 = $(".tex3");
const textTag4 = $(".tex4");
const textTag5 = $(".tex5");
const textTag6 = $(".tex6");
const textTag7 = $(".tex7");
const textTag8 = $(".tex8");
const textTag9 = $(".tex9");
const textTag10 = $(".tex10");

// Select Box
const bsdTag1 = $(".bsd1");
const bsdTag2 = $(".bsd2");
const bsdTag3 = $(".bsd3");
const bsdTag4 = $(".bsd4");
const bsdTag5 = $(".bsd5");
const bsdTag6 = $(".bsd6");
const bsdTag7 = $(".bsd7");
const bsdTag8 = $(".bsd8");
const bsdTag9 = $(".bsd9");
const bsdTag10 = $(".bsd10");
const bsdTag11 = $(".bsd11");
const bsdTag12 = $(".bsd12");
const bsdTag13 = $(".bsd13");
const bsdTag14 = $(".bsd14");
const bsdTag15 = $(".bsd15");
const bsdTag16 = $(".bsd16");
const bsdTag17 = $(".bsd17");
const bsdTag18 = $(".bsd18");


//Change Color Features
const timerFeatures = () => {
  
  // 2s
  setTimeout(() => {


//change green text color
const greenColor = "rgb(77, 255, 0)";
[textTag1, textTag2, textTag3, textTag4, textTag5, textTag6, textTag7, textTag8, textTag9, textTag10]
  .forEach(tag => { if (tag?.style) tag.style.color = greenColor; });


[bsdTag2, bsdTag3, bsdTag4, bsdTag5, bsdTag11, bsdTag12, bsdTag13, bsdTag14, bsdTag16, bsdTag17, bsdTag18]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `0px 2px 5px 2px ${greenColor}`; });


[bsdTag6, bsdTag7, bsdTag8, bsdTag9, bsdTag10]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `1px 8px 10px 2px ${greenColor}`; });


if (bsdTag1?.style) {
  bsdTag1.style.boxShadow = `3px 2px 17px 3px ${greenColor}`;
  bsdTag1.style.backgroundColor = greenColor;
}

if (bsdTag15?.style) bsdTag15.style.backgroundColor = greenColor;


  }, 3000)



  // 4s
  setTimeout(() => {
   

    //change green text color
const blueColor = "rgb(0, 174, 255)";
[textTag1, textTag2, textTag3, textTag4, textTag5, textTag6, textTag7, textTag8, textTag9, textTag10]
  .forEach(tag => { if (tag?.style) tag.style.color = blueColor; });


[bsdTag2, bsdTag3, bsdTag4, bsdTag5, bsdTag11, bsdTag12, bsdTag13, bsdTag14, bsdTag16, bsdTag17, bsdTag18]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `0px 2px 5px 2px ${blueColor}`; });


[bsdTag6, bsdTag7, bsdTag8, bsdTag9, bsdTag10]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `1px 8px 10px 2px ${blueColor}`; });


if (bsdTag1?.style) {
  bsdTag1.style.boxShadow = `3px 2px 17px 3px ${blueColor}`;
  bsdTag1.style.backgroundColor = blueColor;
}

if (bsdTag15?.style) bsdTag15.style.backgroundColor = blueColor;


 
  }, 6000)



   setTimeout(() => {
   

    //change green text color
const yellowColor = "rgb(196, 196, 51)";
[textTag1, textTag2, textTag3, textTag4, textTag5, textTag6, textTag7, textTag8, textTag9, textTag10]
  .forEach(tag => { if (tag?.style) tag.style.color = yellowColor; });


[bsdTag2, bsdTag3, bsdTag4, bsdTag5, bsdTag11, bsdTag12, bsdTag13, bsdTag14, bsdTag16, bsdTag17, bsdTag18]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `0px 2px 5px 2px ${yellowColor}`; });


[bsdTag6, bsdTag7, bsdTag8, bsdTag9, bsdTag10]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `1px 8px 10px 2px ${yellowColor}`; });


if (bsdTag1?.style) {
  bsdTag1.style.boxShadow = `3px 2px 17px 3px ${yellowColor}`;
  bsdTag1.style.backgroundColor = yellowColor;
}

if (bsdTag15?.style) bsdTag15.style.backgroundColor = yellowColor;

 
  }, 9000)


  // 8s
 setTimeout(() => {
   

    //change green text color
const orangeColor = "rgb(238, 100, 50)";
[textTag1, textTag2, textTag3, textTag4, textTag5, textTag6, textTag7, textTag8, textTag9, textTag10]
  .forEach(tag => { if (tag?.style) tag.style.color = orangeColor; });


[bsdTag2, bsdTag3, bsdTag4, bsdTag5, bsdTag11, bsdTag12, bsdTag13, bsdTag14, bsdTag16, bsdTag17, bsdTag18]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `0px 2px 5px 2px ${orangeColor}`; });


[bsdTag6, bsdTag7, bsdTag8, bsdTag9, bsdTag10]
  .forEach(tag => { if (tag?.style) tag.style.boxShadow = `1px 8px 10px 2px ${orangeColor}`; });


if (bsdTag1?.style) {
  bsdTag1.style.boxShadow = `3px 2px 17px 3px ${orangeColor}`;
  bsdTag1.style.backgroundColor = orangeColor;
}

if (bsdTag15?.style) bsdTag15.style.backgroundColor = orangeColor;
 

  }, 12000)
}

timerFeatures();
setInterval(timerFeatures, 12000);

const inputTag = document.querySelector(".name");
const buttonTag = document.querySelector(".btni");
const values = inputTag.value;
const source = "Sorry" + values + " , I haven't implemented this yet.";
buttonTag.addEventListener("click", () => {
  alert(source);
})

print("hello world")
