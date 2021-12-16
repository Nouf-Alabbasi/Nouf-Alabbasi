console.log("linked")
var myVar;
// window.ZipcodeHelp= ZipcodeHelp;

window.onload =  function() {Allfunc()};

	function Allfunc() {
		// document.getElementById("loader").style.display  = "none";
		// document.getElementById("mainpage").style.display = "block";
		// document.getElementById("demo").style.opacity='1';
		// document.getElementById("projTitle").style.opacity='1';
	  myVar = setTimeout(showPage, 3000);
	}

	function showPage() {
	  // document.getElementById("titola").style.fontSize = "meduim";
	  document.getElementById("loader").style.display  = "none";
	  document.getElementById("mainpage").style.display = "block";
		  pagecontent()
	}
	function pagecontent() {
		document.getElementById("demo").style.opacity='1';
		document.getElementById("projTitle").style.opacity='1';
		
	}

	  // myVar = setTimeout(showPage, 3000);
	  function ZipcodeHelp() {
		// document.getElementById("stickmain").onclick(function(){
			document.getElementById("footer").style.height = "100px"
		};

