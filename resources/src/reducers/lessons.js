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
            return update(state, {
                lessons: {
                    [action.payload.lessonId]: {
                        $merge: { ...action.payload.lesson }
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
            return update(state, {
                lessons: {
                    [action.payload.lessonId] : {}
                }
            })

        default: 
            return state
    } 
}  