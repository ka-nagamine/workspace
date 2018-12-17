export const add = (num1,num2) => {
    return {
        type: 'ADD',
        payload: { num1: num1 ,num2 : num2 }
    
    };
}
