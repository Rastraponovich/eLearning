import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Lesson from 'components/Lesson/Lesson'
import { lessonsLoadAction, deleteLesonAction } from 'actions/lessons'

const mapDispatchToProps = (dispatch) => 
    bindActionCreators({ lessonsLoadAction, deleteLesonAction }, dispatch)

const mergeProps = (stateProps, dispatchProps, ownProps) => {

    return {
        ...stateProps,
        ...dispatchProps
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Lesson)