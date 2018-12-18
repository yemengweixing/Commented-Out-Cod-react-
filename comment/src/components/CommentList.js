import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'

//得到评论信息 生成各个评论的UI组件  默认输出
export default class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        onDeleteComment: PropTypes.func
    }

    static defaultProps = {
        comments: []
    }

    //评论功能（六） 删除功能 index回调给上级组件的onDeleteComment
    handleDeleteComment(index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }

    //<Comment为组件    comment为通过props 传入（两个）属性值名字和评论的对象   key因为是动态数组需要   index定位 删除评论用
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment
                        comment={comment}
                        key={i}       
                        index={i}
                        onDeleteComment={this.handleDeleteComment.bind(this)} />
                )}
            </div>
        )
    }
}