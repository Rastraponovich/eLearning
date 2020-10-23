import { LESSON_LOAD, LESSON_CREATE, LESSON_DELETE, LESSON_SELECT } from 'actions/lessons'
import { lessonsEntry } from 'helpers/lessonCard'

const initialState = {
    lessonsList: {},
    lessonId: '',
}

export const lessonReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case LESSON_LOAD: 
            return { ...state, lessonsList: lessonsEntry }

        case LESSON_CREATE:
            console.log(action.payload)
            return {
                ...state,
                lessonsList: {
                    ...state.lessonsList,
                    [action.payload.data.id]: {
                        ...action.payload.data,
                        author: action.payload.author.firstName + ' ' + action.payload.author.lastName
                    }
                },
                lessonId: action.payload.data.id
            }

        case LESSON_SELECT: 
            return { ...state, lessonId: action.payload }
            

        case LESSON_DELETE:
            const { [action.payload]: _, ...newLessons } = state.lessonsList
            
            return { ...state, lessonsList: newLessons }

        default: 
            return state
    } 
}  