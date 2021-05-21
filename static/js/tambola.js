$(document).ready(function()
{
  var numbers = [];
  var numlen = 90;
  for(let i = 1 ; i <= 90 ; i++)
  numbers.push(i) ;
    $(".board").hide();
    $("#start").click(function()
    {
        $(".board").show();
        $("#start").hide(); 
    });
    $("#gennum").click(function()
    {
      if(numlen == 0)
      {
        alert("Game OVER! :)") ;
      }
      else
      {
        var ind = Math.floor(Math.random() * numlen);
        var n = numbers[ind];
        numbers[ind] = numbers[numlen - 1];
        numlen-- ;
        document.getElementById("num").innerHTML = n ;
        if(n & 1)
        {
          if(((n - 1) / 10) & 1)
          document.getElementById("n" + n).style.backgroundColor = "blue" ;
          else 
          document.getElementById("n" + n).style.backgroundColor = "pink";
        }
        else 
        {
          if(((n - 1) / 10) & 1)
          document.getElementById("n" + n).style.backgroundColor = "pink";
          else 
          document.getElementById("n" + n).style.backgroundColor = "blue";
        }
      }
    });
    $("#clr").click(function()
    {
      for(let i = 1 ; i <= 90 ; i++)
      numbers[i - 1] = i ;
      numlen = 90 ;
      document.getElementById("num").innerHTML = 0 ;
      for(let i = 1 ; i <= 90 ; i++)
      document.getElementById("n" + i).style.backgroundColor = "white";
    });
});