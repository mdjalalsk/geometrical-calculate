
// get input value use a funtion 
function getInputFieldValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const stingInputValue=inputField.value;
     const numberInputValue=parseFloat(stingInputValue);
     inputField.value='';
     if(isNaN(numberInputValue)){
      alert("😭Sorry it's Not a Number!!. please enter both value a number");
     return;
     }
     return numberInputValue;
}
//set areat result
  function setAreaResult(name,area){
  if (isNaN(area)){
   //  alert( "please enter both number");
    return;
  }
   const ShowResult=document.getElementById('show-result');
  const result=document.createElement('div');
   result.innerHTML=`<h2 class="text-red-500 text-2xl text-center font-semibold mt-5">${name} Area: ${area} cm<sup>2<sup/></h2>`;
   ShowResult.appendChild(result);
}


// trangle calculate 
function trangleAreaCalculate(){
  const b=getInputFieldValue('trangle-base');
  const h=getInputFieldValue('trangle-height');
  if(isNaN(b) || isNaN(h) ){
   alert("😭Sorry it's Not a Number!!. please enter both value a number");
   return;
  }
 const area= 0.5 *b*h;
//  console.log(area);
const ShowResult=document.getElementById('show-result');
// console.log(ShowResult);
const result=document.createElement('div');
   result.innerHTML=`<h2 class="text-red-500 text-2xl text-center font-semibold mt-5"> Trangle Area: ${area} cm<sup>2<sup/></h2>`;
   ShowResult.appendChild(result);
}

//rectangle calculate
function rectangleAreaCalculate(){
   // console.log("rectangle clicked");
   const w=getInputFieldValue('rectangle-width');
   const l=getInputFieldValue('rectangle-height');
   const area=w *l;
   setAreaResult('rectangle', area);

}


//Parallelogram area calculation
function ParallelogramAreaCalculate() {
   const b=getInputFieldValue('Parallelogram-base');
   const h=getInputFieldValue('Parallelogram-height');
   const area=b*h;
   setAreaResult('Parallelogram', area);
 }

 //Rhombus area calculation
 function rhombusAreaCalculate(){
   const d1=getInputFieldValue('diagonal1');
   const d2=getInputFieldValue('diagonal2');
   const area=0.5*d1*d2;
   setAreaResult('Rhombus', area);
 }

//  Pentagon area calculation
function pentagonAreaCalculate() {
   const p=getInputFieldValue('p');
   const b=getInputFieldValue('b');
   const area=0.5*p*b;
   setAreaResult('Pentagon', area);
}

// Ellipse area calculation

function ellipseAreaCalculate() {
   const a=getInputFieldValue('a-axis');
   const b=getInputFieldValue('b-axis');
   const result=3.1416*(a*b);
   const area=result.toFixed(2);
   // console.log(area)
   setAreaResult('Ellipse', area);
}