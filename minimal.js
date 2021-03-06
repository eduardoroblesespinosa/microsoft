<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> 
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.SPServices/0.7.2/jquery.SPServices-0.7.2.min.js"></script> 

<script type="text/javascript" src="https://github.com/eduardoroblesespinosa/microsoft/blob/gh-pages/stratus-forms-1.4.js"></script>
<script type="text/javascript" src="https://github.com/eduardoroblesespinosa/microsoft/blob/gh-pages/stratus-forms-data-SPServices-1.4.js"></script>

<div id="SFForm">
	
</div>

<script type="text/javascript">

	$(document).ready(function() {
		$("#SFForm").StratusFormsInitialize({
	          htmlForm: "https://github.com/eduardoroblesespinosa/microsoft/blob/gh-pages/minimal.html",
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
