//Question about how to get maximize stock gain from shorting  

// var price = [2,8,1,10,50,3];
// function maxProfit(price) {
// 	var maxProfit =-1;
// 	for(var i=0; i<price.length-1; i++) {
// 	 	var buy = price[i];
// 		for(var j=i+1; j<price.length; j++) {
// 			if (maxProfit===-1 || price[j]-buy>maxProfit) {
// 				maxProfit = price[j]-buy;
//             }
//     	}
//     }
// 	return maxProfit
// }

// console.log(maxProfit(price));

/**
* Greedy Algorithm (maximum daily profit from stock sale) - "let me see what my options are, first..."
*
* Overview:
* ---------
* By using Greedy Algorithms we can pass over the data once (O(n) time), storing values we find to be optimal, per our criteria, by
* comparing them to current values. We have to go over the entire set to do this, but we only have to do it once - yay!
* 
* From Wikipedia: "A greedy algorithm is an algorithm that follows the problem solving heuristic of making the locally optimal
* choice at each stage with the hope of finding a global optimum."
*
* NOTE: This is my take on an interview answer to question taken from: https://www.interviewcake.com/question/javascript/stock-price
*
* @param pricesArr {arr}
* @returns int
*/

// get max profit in one sale
function getMaxProfit(pricesArr) {
  // make sure we have at least 2 prices
  if (pricesArr.length < 2) {
      throw new Error('Getting a profit requires at least 2 prices');
  }
  
  // init our first possible "buy price" (minPrice)
  var minPrice = pricesArr[0]
  // init our first possible maxProfit
  // the first 2 values in our array that can derive a profit figure
  // subtract our first "sell" price from our first "buy" price
  var maxProfit = pricesArr[1] - pricesArr[0]
  // init minIndex for comparisons on where we last set our minPrice
  //var minIndex = 0
  
  // begin at 1, since we already have our first
  for (var i = 1, length = pricesArr.length; i < length; ++i) {  
    if (pricesArr[i] - minPrice > maxProfit) {
      maxProfit = pricesArr[i] - minPrice
    }
   
    // set new minPrice: if our current price is lower than our 
    // set minimum price of the day, then set the new minimum price
    // to equal that of the current price
    // NOTE: we check to eliminate the last price of day from being set, as the day is over
    if (pricesArr[i] < minPrice && i !== length - 1) {
      minPrice = pricesArr[i]
      //minIndex = i
    }
  }
  
  return maxProfit
}

// boo, bearish market!
var stockPricesYesterday = [18, 17, 13, 11, 5, 1];
getMaxProfit(stockPricesYesterday)

// get max profit in MULTIPLE sale
function stockBuySell(priceArray) {
	var listLength =  priceArray.length;
	if(listLength<2) {
    	throw new error('Getting a profit requires at least 2 prices') 
	}
	var solutionPairCount = 0
	var solution = [];
	var i=0;
	while(i<listLength-1) {
		// find local minima. note that limit is (listLength-2) as we are comparing present element to the next element.
		while((i<listLength-1) && (priceArray[i+1]<=priceArray[i])) {
			i++;
        }
		// if we reached the end break as no further solution possible
		if (i == listLength-1) break;
		
		// store the index of minima
		solution[solutionPairCount] = {};
		solution[solutionPairCount].buy = i++;

		// Find local maxima. Note that the limit is (listLength-1) as we are comparing to previoud element
		while((i<listLength) && (priceArray[i]>= priceArray[i-1])) {
			i++;
        }
		//store the index of maxima
		solution[solutionPairCount].sell = i-1;
		// Increment count of buy/sell pairs
		solutionPairCount++;
    }
	if(solutionPairCount==0) {
    	console.log("there is no day when buying the stock will make profitn")
	} else {
		for(var i = 0; i<solutionPairCount; i++) {
        	console.log('Buy on day ' + solution[i].buy +' at '+ priceArray[solution[i].buy]+ ' and Sell on day ' + solution[i].sell +' at '+ priceArray[solution[i].sell]);
		}
    }
	
}

stockBuySell([100, 180, 260, 310, 40, 535, 695, 60]);