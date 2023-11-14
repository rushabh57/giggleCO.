
var body = document.body;
         

// Select the logo element
var logo = document.querySelector('.inner-logo');




gsap.registerPlugin(Flip);

   const upLine = document.querySelector('.upper_line');
   const lowLine = document.querySelector('.lower_line');
   const svgBox = document.querySelector('svg')
   const burgerMenu = document.querySelector('.burger');
   const overLay = document.querySelector('.overlay'); 

   let isClicked = false;


   var tl = gsap.timeline(
      {
         defaults: {
         duration: 1 , 
         ease: Back.easeOut.config(2) }
      })

   tl.paused(true); 

   svgBox.addEventListener('click' , () => {
   if(!isClicked)
   {
       
           upLine.classList.add('open_up');
           lowLine.classList.add('open_low');
           isClicked = true;
         //   body.style.overflowY = 'hidden';
     
         tl.to('.overlay' ,
         {
            clipPath: 'circle(135.1% at 94% 11%)'
         })
        tl.to('.menu-container' , 
           {
            opacity:1 , 
            y:'30px' , 
            stagger:0.1 }
            , "-=1")
            
            tl.to('body' , {
              overflowY:'hidden'
            }, '-=1.05')




            tl.play();
            
         }
         else
         {
            upLine.classList.remove('open_up');
            lowLine.classList.remove('open_low');
            isClicked = false;

        tl.reverse(1.2);
   }
   })





// Content Appearnce
 let cBox = gsap.utils.toArray(".C_box");
 let bigCBox = cBox[0];

document.querySelectorAll('.C_box').forEach((cBox) => {
    cBox.addEventListener('click' , (e) => changeGrid(cBox))
   //  cBox.target = console.log('cbox clicked');
 })

 function changeGrid(cBox) {
    if(cBox === bigCBox) return;
  

    let state = Flip.getState(cBox)
    
     bigCBox.dataset.grid = cBox.dataset.grid;
     cBox.dataset.grid = "img-1";
     bigCBox = cBox; 

    Flip.from(state, {
        absolute:true,
        ease:'power2',
        duration:1,
        delay:.1,
    });

   

 };



// ======================
// **********************
// Counts-container
// **********************
// ======================

gsap.to('#CounterOne' , {
   innerText:300,
   duration:1.2,
   snap:
   {
         innerText:10
      }
})
gsap.to('#CounterTwo' , {
   innerText:456,
   duration:1.2,
   snap:
   {
         innerText:10
       }
      })
      gsap.to('#CounterThree' , {
         innerText:466,
         duration:1.2,
         snap:
         {
            innerText:10
         }
})
// other way
// let CounterOne = document.querySelector('#CounterOne');

// let counter = {
   //    value:0
   // }
   
   // gsap.to(counter , 
   //    {value:10 , 
   //       onUpdate: () => 
   //       CounterOne.innerText = Math.round(counter.value)});
   // other way
   
   //  Counts-container

// ======================
// **********************
// Imgage heading gallery
// **********************
// ======================
   cBox.forEach(Heid => {
      const heading = Heid.querySelectorAll('.Cbox_inner_heading');
      Heid.addEventListener('mouseenter', headUp);
      Heid.addEventListener('mouseleave', headDown);

    function headUp() {
    gsap.to(heading , {
    y:25,
    ease:'power2',
    zIndex:1,
    opacity:1
    })
     }

    function headDown() {
    gsap.to(heading , {
    y:90,
    ease:'power2',
    zIndex:0,
    opacity:0
    })
     }   
   })

   
// ======================
// **********************
// Select the image container
// **********************
// ======================

// Loop through each image container
cBox.forEach(imgContainer => {
const img = imgContainer.querySelector('img');
imgContainer.addEventListener('mousemove', moveImage);
imgContainer.addEventListener('mouseleave' ,stableImage);


function moveImage(e) {
  const containerWidth = imgContainer.offsetWidth;
  const containerHeight = imgContainer.offsetHeight;

  const xPos = (e.offsetX - containerWidth / 2) / containerWidth;
  const yPos = (e.offsetY - containerHeight / 2) / containerHeight;
  let numPos = 2.5;

  gsap.to(img, {
    x: -xPos * numPos, 
    y: -yPos * numPos, 
    duration: 0.3,
    ease: 'power2.out' 
  });
}
  
function stableImage(e) {
  const containerWidth = imgContainer.offsetWidth;
  const containerHeight = imgContainer.offsetHeight;

  const xPos = (e.offsetX - containerWidth / 2) / containerWidth;
  const yPos = (e.offsetY - containerHeight / 2) / containerHeight;
  let numPos = 0;

  gsap.to(img, {
    x: -xPos * numPos, 
    y: -yPos * numPos, 
    duration: 0.3,
    ease: 'power2.out' 
  })
}
});








// ===============================================
// MOuse Move Img Move -------code------------
//    // Select the image container
// const imgContainers = document.querySelectorAll('.C_box');
// // Loop through each image container
// imgContainers.forEach(imgContainer => {
//    const img = imgContainer.querySelector('img');
// // Add event listener for mousemove event
// imgContainer.addEventListener('mousemove', moveImage);

// function moveImage(e) {
//   // Get the width and height of the image container
//   const containerWidth = imgContainer.offsetWidth;
//   const containerHeight = imgContainer.offsetHeight;

//   // Calculate the mouse position relative to the center of the container
//   const xPos = (e.offsetX - containerWidth / 2) / containerWidth;
//   const yPos = (e.offsetY - containerHeight / 2) / containerHeight;

//   // Use GSAP to animate the image's position
//   gsap.to(img, {
//     x: -xPos * 2, // Adjust the multiplier as needed for the desired effect
//     y: -yPos * 2, // Adjust the multiplier as needed for the desired effect
//     duration: 0.3,
//     ease: 'power2.out' // Experiment with different easing functions
//   });
// }
// });

// about us section
// round text code










