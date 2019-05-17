<script>
function MoveDiv() {
  var n = document.getElementsByClassName("amznads").length;
  
  var i;
  var fragment
  for (i = 0; i < n; i++) {
	fragment = document.createDocumentFragment();
	fragment.appendChild(document.getElementById('amznad0_'+i));
	document.getElementById('amznad1_'+i).appendChild(fragment);
  }
}
  MoveDiv();
</script>
