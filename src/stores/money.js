import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    basket: []
}

const basketRedux = createSlice({
    name: "basket",
    initialState,

    reducers: {

        addBasket: (state, action) => {
            product.id = action.payload

            const checkBasket = state.find(item => item.id === product.id)

            if (checkBasket) {
                checkBasket.amount += 1
                setBasket([...state.filter(item => item.id !== product.id), checkBasket])
            } else {
                setBasket([...state, {
                    id: product.id,
                    amount: 1
                }])
            }


        }


    }

})

export const { addBasket } = basketRedux.actions

export default basketRedux.reducer