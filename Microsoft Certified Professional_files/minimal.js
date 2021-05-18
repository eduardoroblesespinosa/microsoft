<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.2/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="./Microsoft Certified Professional_files/stratus-forms-1.55.js"></script>
<script type="text/javascript" src="./Microsoft Certified Professional_files/stratus-forms-data-SPServices-1.55.js"></script>

<div id="SFForm">
</div>

<script type="text/javascript">

	$(document).ready(function() {
		$("#SFForm").StratusFormsInitialize({
	          htmlForm: "./Microsoft Certified Professional_files/minimal.html",
		  queryStringVar: "formID",
	          listName: "minimal",
	          completefunc: function()
	          {
	          }
		});
	});

	function SubmitForm()
	{		
		$("#SFForm").StratusFormsSubmit({
	     	listName: "minimal",
        	completefunc: function(id) { 
  				alert("Save was successful. ID = " + id);
	  			window.location = window.location.pathname + "?formID=" + id; 
			}
    		});
	}

</script>
