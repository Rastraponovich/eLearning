import update from 'react-addons-update'
import { LESSON_LOAD, LESSON_CREATE, LESSON_DELETE, LESSON_SELECT } from 'actions/lessons'

import { lessons } from 'helpers/lessonCard'

const initialState = {
    lessons: [],
    lessonId: ''
}

export const lessonReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case LESSON_LOAD: 
            return { ...state, lessons }

        case LESSON_CREATE:
            console.log(action.payload)
            return update(state, {
                lessons: {
                    $merge: {
                        [action.payload.data.id]: {
                            ...action.payload.data,
                            author: action.payload.author.firstName + ' ' + action.payload.author.lastName
                        }
                    }
                },
            })

        case LESSON_SELECT: 
            return update(state, {
                $merge: {
                    lessonId: action.payload
                }
            })

        case LESSON_DELETE:
            const { lessons } = state;
            const { [action.payload]: _, ...newLessons } = lessons;
            
            return update(state, {
                $set: { lessons: newLessons }
            })

        default: 
            return state
    } 
}  