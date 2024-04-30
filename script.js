let index = 0;

function TrocaCor(){
    let color = ["red","pink","blue","black","orange","yellow","purple"];
    
    document.getElementsByTagName("body")[0].style.background = color[index++];
    if(index > color.length - 1){
        index = 0;
    }
}