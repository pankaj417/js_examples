function api(s) {
  return new Promise(resolve => setTimeout(() => resolve([
   s+'a',
   s+'b',
  ]), 0));
}



var searchBox = document.querySelector('#search-box');
var searchResultBox = document.querySelector('#box');
var requestStatus = 'done';
var mainMethod = function() {
	var setTimeoutVar;
  return function callSearch(e) {
    clearTimeout(setTimeoutVar);
    setTimeoutVar = setTimeout(doSearch.bind(null, e), 200);
  }
}
var mainMethodObj = new mainMethod();
searchBox.addEventListener('keyup', function(e) {
	mainMethodObj(e);
})
function doSearch(e) {
		if(requestStatus === 'done') {
  	requestStatus = 'pending';
  	var value = e.target.value;
    console.log(value)
    api(value).then((data)=>{
      console.log(data.length)
      var resultList = '';
      for(var i=0; i<data.length; i++) {
        resultList+='<div>'+data[i]+'</div>' 
      }
     searchResultBox.innerHTML= resultList;
     requestStatus = 'done';
    })
  }
}


<div>
  <input class="search-box" id="search-box" type="text" name="search-box" value=""/>
  <div class="box" id="box">
  
  </div>
</div>

.search-box {
  height:50px;
  width:300px;
  font-size:25px;
}
.box {
  width:300px;
}