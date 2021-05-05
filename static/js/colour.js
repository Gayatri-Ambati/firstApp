var body = document.body, 
    r = document.querySelector('#red'),
    g = document.querySelector('#green'),
    b = document.querySelector('#blue'),
    rgb= document.querySelector('#rgb'),
    outputR = document.querySelector('#red1'),
    outputG = document.querySelector('#green1'),
    outputB = document.querySelector('#blue1'),
    hex = document.querySelector('#hexVal');
    copybutton = document.querySelector('#copy');
    console.log(r.value);

    function copyy(elementId)
    {
        var aux = document.createElement("input");
        aux.setAttribute("value", document.getElementById(elementId).innerHTML); 
        document.body.appendChild(aux);
        aux.select(); 
        document.execCommand("copy");
        document.body.removeChild(aux);
        alert("Copied to clipboard");
    }

    copybutton.addEventListener('click',function(){
        copyy('hexVal');
    });

    function setColor(){
        var r_hexVal = parseInt(r.value, 10).toString(16),
            g_hexVal = parseInt(g.value, 10).toString(16),
            b_hexVal = parseInt(b.value, 10).toString(16),
            hexVal = "#" + pad(r_hexVal) + pad(g_hexVal) + pad(b_hexVal);
        rgb.style.backgroundColor = hexVal; 
        hexx=hexVal;
        hex.value = hexx;
      }
      function pad(n){
        return (n.length<2) ? "0"+n : n;
      }

      r.addEventListener('change', function() {
        setColor();
        outputR.value = r.value;
      }, false);
       
      r.addEventListener('input', function() {
        setColor();
        outputR.value = r.value;
      }, false);
       
      g.addEventListener('change', function() {
        setColor();
        outputG.value = g.value;
      }, false);
       
      g.addEventListener('input', function() {
        setColor();
        outputG.value = g.value;
      }, false);
       
      b.addEventListener('change', function() {
        setColor();
        outputB.value = b.value;
      }, false);
       
      b.addEventListener('input', function() {
        setColor();
        outputB.value = b.value;
      }, false);