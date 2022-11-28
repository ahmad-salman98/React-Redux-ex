import { createStore } from "@reduxjs/toolkit";


const initialState = {
    accounts: [
        {
            id: 1,
            customerName: "Israa Othman",
            accountNumber: "123456",
            accountType: "Savings"
        },
        {
            id: 2,
            customerName: "Ahmad Salman",
            accountNumber: "987654",
            accountType: "Student accounts"
        }
        ,
        {
            id:3,
            customerName: "Yazan Salameh",
            accountNumber: "965874",
            accountType: "Student accounts"
        }
        ,
        {
            id: 4,
            customerName: "Aseel Shami",
            accountNumber: "154878",
            accountType: "Savings"
        }

    ]

}
const reducer = (state = initialState, action) => {
    return state
}
const store = createStore(reducer)

export default store