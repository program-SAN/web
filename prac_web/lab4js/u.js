 let n1=0,n2=1,Num;
 console.log(0);
 for (let i = 1; i <= 10; i++) {
	 Num= n1+n2;
	 n1=n2;
	 n2=Num;
	 console.log(n1);
	
 }

 let num3 = 0;
	let num5 = 0;
    
	for (let i = 1; i <= 15; i++) {
		num3++;
		num5++;
		 
		if (num3%3==0) {
			console.log("Fizz");
			num3 = 0;
             
		}

		if (num5%5==0) {
			console.log("Buzz");
			num5 = 0;
            
		}
		else {
			console.log(i);
		}
        console.log(" ");
		
	}
 function myFunction(){
	let no =document.getElementById("input").value;
	let fac=1;
	for (var i = 1; i <=no; i++) {
		fac*=i;
	}
	document.getElementById("btn").innerHTML="factorial"+no+"is"+fac;
 }