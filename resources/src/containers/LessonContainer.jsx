import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import Lesson from 'components/Lesson/Lesson'
import { lessonsLoadAction, deleteLesonAction } from 'actions/lessons'

const mapStateToProps = (state) => {
    console.log(state)
    const { lessonId, lessonsList } = state.lessons
    const { profile } = state.profile
    const lesson = lessonsList[lessonId]
    return {
        lessonId,
        lessonsList,
        lesson,
        profile,
    }
}

const mapDispatchToProps = {
    lessonsLoadAction,
    deleteLesonAction,
    redirect: push,
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson)
