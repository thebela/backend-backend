const num = [12,5,18,1,9,18,12]
let largest=num[0],
      smallest=num[0],
      sum=0,
      avg=0,
     even =0,
      odd=0;
for(let i=0;i<num.length;i++){
  if(largest<num[i]) largest=num[i];
  if(smallest>num[i]) smallest=num[i];
  sum+=num[i];
  if(num[i]%2==0){
    even+=1;
  } else {
    odd+=1;
  }
}
avg = sum / num.length;
console.log("Largest = ", largest);
console.log("Smallest = ", smallest);
console.log("sum = ", sum);
console.log("average = ", avg);
console.log("count of even nums = ", even);
console.log("count of odd nums = ", odd);