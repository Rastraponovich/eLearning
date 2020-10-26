import {
    LESSON_LOAD,
    LESSON_CREATE,
    LESSON_DELETE,
    LESSON_SELECT,
    REVIEW_ADD,
    REMOVE_REVIEW,
} from 'actions/lessons'
import { lessonsEntry } from 'helpers/lessonCard'

const initialState = {
    lessonsList: {},
    lessonId: '',
}

export const lessonReducer = (state = initialState, action) => {
    switch (action.type) {
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
                        author:
                            action.payload.author.firstName +
                            ' ' +
                            action.payload.author.lastName,
                    },
                },
                lessonId: action.payload.data.id,
            }

        case LESSON_SELECT:
            return { ...state, lessonId: action.payload }

        case LESSON_DELETE:
            const { [action.payload]: _, ...newLessons } = state.lessonsList

            return { ...state, lessonsList: newLessons }

        case REVIEW_ADD:
            return {
                ...state,
                lessonsList: {
                    ...state.lessonsList,
                    [action.payload.id]: {
                        ...state.lessonsList[action.payload.id],
                        reviews: [
                            ...state.lessonsList[action.payload.id].reviews,
                            action.payload.review,
                        ],
                    },
                },
            }
        case REMOVE_REVIEW:
            const searchReview = state.lessonsList[
                action.payload.lessonId
            ].reviews.filter((item) => item.id !== action.payload.reviewId)
            return {
                ...state,
                lessonsList: {
                    ...state.lessonsList,
                    [action.payload.lessonId]: {
                        ...state.lessonsList[action.payload.lessonId],
                        reviews: searchReview,
                    },
                },
            }
        default:
            return state
    }
}
