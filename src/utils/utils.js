export const sortArray = (arr) => {
    const [ temp2 ] =  arr;
    console.log(temp2);
    
    if(temp2 === []) return;
    if(temp2.length < 1) return;
    

    for (let i = 0; i < temp2.length; i++)
    for (let j = 0; j < temp2.length - 1; j++)
    if (Number(temp2[j].Seeders) < Number(temp2[j + 1].Seeders))
    [temp2[j], temp2[j + 1]] = [temp2[j + 1], temp2[j]];
    
    return temp2;
  }
