for(var type in statistics) {
    let num = statistics[type];
    if((num % 2 == 1) || type.startsWith('r')) {
        console.log(num);
    }
}
