import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CommentInput from '../components/CommentInput'
import { addComment } from '../reducers/comments'

// CommentInputContainer
// 负责用户名的加载、保存，评论的发布
class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onSubmit: PropTypes.func
    }

    constructor() {
        super()
        this.state = { username: '' }
    }

    componentWillMount() {
        // componentWillMount 生命周期中初始化用户名
        this._loadUsername()
    }

    _loadUsername() {
        // 从 LocalStorage 加载 username
        // 然后可以在 render 方法中传给 CommentInput
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({ username })
        }
    }

    _saveUsername(username) {
        // 看看 render 方法的 onUserNameInputBlur
        // 这个方法会在用户名输入框 blur 的时候的被调用，保存用户名
        localStorage.setItem('username', username)
    }

    /**评论功能（五）持久化评论 1    onSubmit事件 表单提交后启动  存储评论数据*/
    handleSubmitComment(comment) {
        // 评论数据的验证
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        // 得到评论数组
        const { comments } = this.props 
        //添加新评论
        const newComments = [...comments, comment]

        //评论功能（五）持久化评论 1 存储评论数组（转换为JSON）
        localStorage.setItem('comments', JSON.stringify(newComments))
        // this.props.onSubmit 是 connect 传进来的
        // 会 dispatch 一个 action 去新增评论
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
        }
    }

    render() {
        return (
            <CommentInput
                username={this.state.username}
                onUserNameInputBlur={this._saveUsername.bind(this)}
                onSubmit={this.handleSubmitComment.bind(this)} 
                />
        )
    }
}
/**评论功能（五）持久化评论 onSubmit事件 表单提交后启动 */

//规定得到 需要的state数据的部分
const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}
//规定dispatch 的action   函数      通过onSubmit handleSubmitComment函数得到数据而 发送action 存储数据   
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}
//connect生成容器组件
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentInputContainer)