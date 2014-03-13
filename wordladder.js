Stack = function(){
    var myStack = new Array()

    this.pop = function(){
        return myStack.pop()}

    this.push = function(itm){
        myStack.push(itm)}

    this.length = function(){
        return myStack.length}

    this.clone = function(){
        newStack = new Stack()
        for (var i=0;i<myStack.length;i++){
            newStack.push(myStack[i])
        }
        return newStack;
    }

    this.peek = function(){
    	top = myStack.pop()
    	myStack.push(top)
    	return top;
    }
}

Queue = function(){
    var myQueue = new Array()

    this.enqueue = function(itm){
        myQueue.push(itm)}

    this.dequeue = function(itm){
        return myQueue.shift()}
}

Set = function(){
    var mySet = new Array()

    this.add = function(itm){
        if(!this.contains(itm)){
        mySet.push(itm)}
    	else{
    		console.log("Already added")
    	}}

    this.contains = function(itm){
        if (mySet.indexOf(itm) > -1)
            return true
        else
            return false
    }
}

beginWordLadder = function(){
	//Hold all the staring information
    var info = {}
    info.start = document.getElementById("wordStart").value;
    info.end = document.getElementById("wordEnd").value;
    info.startLen =  info.start.length
    info.endLen = info.end.length
    if (info.startLen < 3 || info.startLen > 5 || info.endLen < 3 || info.endLen > 5){
        alert("Your words need to be three to five letters long!!")
    }
    else if (info.startLen != info.endLen){
        alert("Your words are not the same legnth!!")
    }
   else if (info.start == info.end){
        alert("Your words are already the same!")
        return null;
    }	

	if (info.startLen == 3){
		info.dict = threeLetterWords;
	}
	else if (info.startLen == 4){
		info.dict = fourLetterWords;
	}
	else{
		info.dict = fiveLetterWords;
	}
	//console.log(info.start)
	//console.log(info.end)
    info.usedWords = new Set();
    info.stackQueue = new Queue();
    for (var i=0;i < info.dict.length;i++){
    	info.dict[i] //Current word in array
    	if (oneDif(info.dict[i],info.start) == true){
    		if (info.usedWords.contains(info.dict[i]) == false)
    		{
	  /*  		if (info.dict[i] == info.end) //If it's the end return
		    		{
		    			//console.log(topWord)
	    				var z = new Stack()
	    				z.push(info.start)
	    				z.push(info.dict[i])
		    			//finalStack = currentStack.clone()
		    			//finishedOrNot = true;
		    			console.log("Done")
		    			return z
		    		}*/
	    		var z = new Stack()
	    		z.push(info.start)
	    		z.push(info.dict[i])
	    		info.stackQueue.enqueue(z)
	    		info.usedWords.add(info.dict[i]);
	    		//console.log(info.dict.splice(i,1))
    		}
    	}
    }
    info.usedWords.add(info.start);
   // console.log("added " + info.start + " to the used words")

    finishedOrNot = false;
    finalStack = new Stack();
    while (finishedOrNot == false){
    	currentStack = info.stackQueue.dequeue()
    	topWord = currentStack.pop()
    	var usedLen = 0;
	    for (var i= 0;i< info.dict.length;i++)
	    {
	    	if (info.usedWords.contains(info.dict[i]) == false)
	    	{
		    	if (oneDif(info.dict[i],topWord) == true) //If the word is one dif from top word
		    	{
		    		if (info.dict[i] == info.end) //If it's the end return
		    		{
		    			//console.log(topWord)
		    			currentStack.push(topWord)
		    			currentStack.push(info.dict[i])
		    			finalStack = currentStack.clone()
		    			finishedOrNot = true;
		    			console.log("Done")
		    			return finalStack
		    		}
		    		else //Clone stack and put it back on the queue
		    		{
			    		y = currentStack.clone()
			    		y.push(topWord)
			    		y.push(info.dict[i])
			    		info.stackQueue.enqueue(y)
			    		info.usedWords.add(info.dict[i])
			    		info.dict.splice(i,1)
	    			}	
	    		}
    		}
    		else{
    			usedLen +=1;
    			if (usedLen >= info.dict.length){
    				return 1;
    			}
    		}
    	}
    } 
    
}

main = function(){
	lastLadder = beginWordLadder()
	if (lastLadder != null){
	stackLength = lastLadder.length()
	document.getElementById("output").innerHTML="";
	var outField = document.getElementById("output")
	out = document.createElement("ul")
	
		for(var i=0; i < stackLength;i++){
			out.innerHTML = out.innerHTML + "<li>" + finalStack.pop() + "</li>"
		}
		outField.appendChild(out)}
		else if (lastLadder = 1){
			alert("No ladder was possible")
		}
}

oneDif = function(wordOne, wordTwo){
	var idx = 0
	var same = true
	while(idx < wordOne.length){
		if(wordOne[idx] != wordTwo[idx]){
			if(same){
				same = false
			}
			else{
				return false
			}
		}
		idx += 1
	}
	if(same){
		return false
	}
	return true
}