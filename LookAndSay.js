<script type="text/javascript">
function LookAndSay(start, n) {
	var startString = start.toString();
    var startLength = startString.length;
	var lastNumber = '';
	var lastCount = 0;
	var outputString = '';
	if(startLength>0) {
	    for(var i = 0; i<startLength; i++) {
	    	if(i==0 || lastNumber == startString[i]) {
	    		lastCount++;
	    		lastNumber = startString[i];
	    	} else {
	    		outputString+=lastCount+''+lastNumber
	    		lastCount=1;
	    		lastNumber = startString[i];
	    	}
	    	if(i==startLength-1) {
    			outputString+=lastCount+lastNumber
    		}
	    }
	    if(n>1) {
	    	LookAndSay(outputString, n-1)
	    } else {
	    	console.log(outputString)
	    	return outputString
	    }
	}

}
LookAndSay(11, 2)
</script>
