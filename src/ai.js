var AI = {
  show: function(){
    var mu = "<div class='fadeBox'> <div class='spinner'> </div> </div>";
    document.body.innerHTML += mu;
  },
  hide: function(){
    //$(".fadeBox").remove();
    document.getElementsByClassName("fadeBox")[0].remove();
  }
}
