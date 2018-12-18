import React, { Component } from 'react'
import PropTypes from 'prop-types'

//评论信息的UI组件  默认输出
export default class Comment extends Component {
    static propTypes = {
        comment: PropTypes.object.isRequired,
        onDeleteComment: PropTypes.func,
        index: PropTypes.number
    }
    constructor() {
        super()
        this.state = { timeString: '' }
    }

    componentWillMount() {
        this._updateTimeString()    /**评论组件渲染后 启动私有方法_updateTimeString */
        /**除非你手动刷新页面，否则永远显示“1 秒前  启动一个定时器，每隔 5 秒调用一下 _updateTimeString，让它去通过 setState 更新 timeString*/
        this._timer = setInterval(
            this._updateTimeString.bind(this),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this._timer)
    }

    _updateTimeString = () => {
        /**评论功能（五） 得到有3个键值对的对象   3（属性createdTime） 得到发布的时间 */
        const comment = this.props.comment
        /**距离发布时间（秒） =   （当前时间-发布时间）/ 1000         单位1000毫秒  等于1秒   */
        const duration = (+Date.now() - comment.createdTime) / 1000
        this.setState({
            /**三元符号 如果大于60 （秒）? 转换成分钟    :    不大于 就显示  秒 */
            timeString: duration > 60
                ? `${Math.round(duration / 60)} 分钟前`
                : `${Math.round(Math.max(duration, 1))} 秒前`
        })
    }

    //评论功能（六）删除 回调函数把 评论生成的index值 通过props给上级组件的onDeleteComment
    handleDeleteComment = () => {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(this.props.index)
        }
    }

    _getProcessedContent = (content) => {
        return content
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;")
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    {/**this.props.comment通过props传入 有两个键值对的对象 */}
                    <span>{this.props.comment.username} </span>
                </div>
                {/**props.属性.键名 分开得到对象的两个键值   嗯 props.属性的值 不仅只是可以全部赋值给变量 还能分开来赋值！！！  */}
                {/**<p>{this.props.comment.content}</p>*/}
                <p dangerouslySetInnerHTML={{
                    __html: this._getProcessedContent(this.props.comment.content)
                }} />


                <span className='comment-createdtime'>
                    {/**评论功能（五） 距离发布的时间 */}
                    {this.state.timeString}
                </span>
                
                {/**评论功能（六） 删除所在评论 点击启动handleDeleteComment函数 */}
                <button onClick={this.handleDeleteComment} className='comment-delete'>
                    删除
                </button>

            </div>
        )
    }
}
