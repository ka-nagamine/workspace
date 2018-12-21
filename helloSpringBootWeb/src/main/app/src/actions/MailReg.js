export const add = (mailAddress,pass) => {
    return {
        type: 'ADD',
        payload: { mailAddress: mailAddress, pass: pass }
    
    };
}
