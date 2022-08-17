let mynumber1 , mynumber2 : number;
lel myOperator : string ;

mynb1 = parseInt(prompt(" entre n "));
mynb2 = parseInt(prompt(" entre n ")); 
myOperator =prompt ("entre un operator ");


 main (mynuber1,mynuber2: myOperator );

Function addition (nbe1 : number , nbe2 : number){
return nbe1 + nbe2;
}

Function subtraction (nbe1 : number , nbe2 : number){
  return nbe1 - nbe2;
  }
  
Function multiplication (nbe1 : number , nbe2 : number){
  return nbe1 * nbe2;
  }
  

  Function  division  (nbe1 : number , nbe2 : number){
    return nbe1 / nbe2;
    }
    function main (nbe1:number, nbe2:number , oper :string){
      let result : number;
    

      if (oper == "+"){
        result=addition (nbe1, nbe2 );
      }else if (oper == "-"){
        result=subtraction (nbe1, nbe2 );
      }else if (oper == "*"){
        result=multiplication (nbe1, nbe2 );
      }else if (oper == "/"){
        result=division (nbe1, nbe2 );
      }
      console.log(result);
      
    }
  
