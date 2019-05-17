<div id="amzntrigger" style="display: block; visibility: visible;">
  <script>
      document.getElementById('amzntrigger').parentElement.removeAttribute('style')
      function amznadsTrigger(){
        var s2 = '<script src="//z-na.amazon-adsystem.com/widgets/onejs?MarketPlace=US"><\/script>';

        var x = document.getElementsByClassName('amznads');
          for (var i in x) {
          var data = x[i].getAttribute("data-amznads");
          var s1 = '<script type="text/javascript"> ' + data + '<\/script>';
          x[i].setAttribute('id', 'amznad1_' + i);
          document.write('<div id="amznad0_' + i + '">' + s1 + s2 + '</div>'); 
        }
      }
  amznadsTrigger();
  </script>
</div>
