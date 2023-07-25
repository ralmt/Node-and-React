function calcSteps(n){
    if (n<2) return 1;
    return (calcSteps(n-1) + calcSteps(n-2));

}

console.log (calcSteps(4));