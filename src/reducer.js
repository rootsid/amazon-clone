export const initialState = {
    basket: [],
    user: null
};


const reducer = (state, action) => {
    // eslint-disable-next-line
    switch(action.type) {
        case 'ADD_TO_BASKET' :
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET' :
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            let newBasket = [...state.basket]

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
            }

            return {...state,
                basket: newBasket
            }
        case 'SET_USER' :
            return {
                ...state,
                user: action.user
            }
    }
};

export default reducer;