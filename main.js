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
    'Alo alo, nghe chứ', 
    'Chúc mừng sinh nhật nha',
    'Chúc mi tuổi mới thiệt vui nè',
    'Cầu tiền được tiền cầu tài được tài cầu tình được tình',
    '...',
    'Lộn rồi :))',
    'Nói chung là chúc mi sinh nhật vui vẻ',
    'Happy Birthday Tuyết Ngọc'
    );
    var iSpeed = 50; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  ' ';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typing-text");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
