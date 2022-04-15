const hexArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];

function flipper(){    
    let hex = '#';
    for( let i=0; i<6; i++){
        let random = Math.floor( Math.random() * (15 + 1));
        hex += hexArray[random];
    }
    document.querySelector('.color-flipper')
            .style.backgroundColor = hex;
    document.getElementById('colorFlipperBgc')
            .innerText = hex;    
};
