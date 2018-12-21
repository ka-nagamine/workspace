export const add = (id,pass) => {
    return {
        type: 'ADD',
        payload: { id: id, pass: pass }
    
    };
}
