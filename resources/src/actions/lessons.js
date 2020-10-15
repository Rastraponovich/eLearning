export const LESSON_LOAD = 'LESSON_LOAD'
export const LESSON_DELETE = 'LESSON_DELETE'
export const LESSON_CREATE = 'LESSON_CREATE'
export const LESSON_SELECT = 'LESSON_SELECT'

export const lessonsLoadAction = () => ({
    type: LESSON_LOAD,
})

export const createLessonAction = (data) => ({
    type: LESSON_CREATE,
    payload: data
})

export const lessonDeleteAction = (lesson, lessonId) => ({
    type: LESSON_DELETE,
    payload: { lesson, lessonId }
})

export const selectLessonAction = (id) => ({
    type: LESSON_SELECT,
    payload: id
})
