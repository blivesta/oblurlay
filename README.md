oblurlay
==================
oblurlay is implement a blur view of iOS7 style with css and jquery 

##Example
http://blivesta.github.io/oblurlay

##Setup
~~~ go
<link rel="stylesheet" href="dist/css/oblurlay.min.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="dist/js/oblurlay.min.js"></script>

<script>
 $(document).ready(function() {
   $('.oblurlay').oblurlay();
 });  
</script>

<div class="oblurlay">
  <div class="oblurlay-upper">   
    upper layer
  </div>
  <div class="oblurlay-contents">
    contents layer
  </div>
</div>

~~~

##License
Released under the MIT license.