export const initialState = {
    category : '',
    subCategory : '',
    urgency : '',
    impact : '',
    priority : '',
    description : '',
    submit : false
};

export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_SUBCATEGORY = 'SET_SUBCATEGORY'
export const SET_URGENCY = 'SET_URGENCY'
export const SET_IMPACT = 'SET_IMPACT'
export const SET_PRIORITY = 'SET_PRIORITY'
export const SET_DESCRIPTION = 'SET_DESCRIPTION'
export const SET_SUBMIT = 'SET_SUBMIT'

const reducer = (state, action) => {
    console.log(action)

    switch(action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                category : action.category
            } 

        case SET_SUBCATEGORY:
            return {
                ...state,
                subCategory : action.subCategory
            }

        case SET_URGENCY:
            return {
                ...state,
                urgency : action.urgency
            }

        case SET_IMPACT:
            return {
                ...state,
                impact : action.impact
            }

        case SET_PRIORITY:
            return {
                ...state,
                priority : action.priority
            }

        case SET_DESCRIPTION:
            return {
                ...state,
                description : action.description
            }

        case SET_SUBMIT:
            return {
                ...state,
                submit : action.submit
            }
        
        default:
            return state
    }
}

export default reducer