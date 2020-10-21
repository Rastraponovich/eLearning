import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'
import Lesson from 'components/Lesson/Lesson'
import { lessonsLoadAction, deleteLesonAction } from 'actions/lessons'

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ lessonsLoadAction, deleteLesonAction, redirect: push }, dispatch)

const mapStateToProps = (store, props) => {
    const { match } = props
    const { lessonId, lessons } = store.lessons
    const lesson = lessons[lessonId]

    return {
        lessonId,
        lessons,
        lesson
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lesson)