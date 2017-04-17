oblurlay
==================
Implement a blur view of iOS style with css,svg and jquery

## Example
http://git.blivesta.com/oblurlay

## Setup
~~~ go
<link rel="stylesheet" href="dist/css/oblurlay.min.css">
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="dist/js/oblurlay.min.js"></script>

<script>
$(document).ready(function() {
  $('.oblurlay').oblurlay({
    'upper':'oblurlay-upper',
    'contents':'oblurlay-contents',
    'clone':'oblurlay-contents-clone',
    'svgBlur':30
  });
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

## Browsers
- chrome
- safari

## License
Released under the MIT license.