onload = () =>{
        document.body.classList.remove("container");
};

var click = document.querySelector('.click')
var button = document.querySelector('#button')
var card = document.getElementById('main')
var background = document.querySelector('.night');
var mTrack = document.getElementById('main-track')
var sTrack = document.getElementById('sound-track')
click.onclick = function() {
        card.style.display = 'unset'
        click.style.display = 'none'
        button.style.display = 'none'
        setTimeout(() => {
                typewriter()
                sTrack.volume = 1;
        }, 4000);
        setTimeout(() => {
                sTrack.play()

        },2000)
        mTrack.volume = 0.5;
background.onclick =function() {
        card.style.display = 'none'
        click.style.display = 'unset'
        button.style.display = 'unset'

        mTrack.volume = 1
        sTrack.pause()
}
}
var aText = new Array(
        "Hé lu Thư",
        "Chúc m 20/10 vui vẻ",
        "Có nhiều niềm vui hơn và luôn xinh đẹp trong mắt mọi người",
        "20/10 vui vẻ nha",
    );
    var iSpeed = 50;  
    var iIndex = 0;  
    var iArrLength = aText[0].length; 
    var iScrollAt = 20;  
     
    var iTextPos = 0; 
    var sContents = ''; 
    var iRow; 
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typing-text");
     
     while (iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 600);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
