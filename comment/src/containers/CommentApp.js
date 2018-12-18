import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
  render() {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

/**
import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import Clock from './Clock'


class CommentApp extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],            /**通过回调函数handleSubmitComment 得到 包含评论名字和内容对象 用数组包含 
      isShowClock: true       /**设置为布尔值 通过函数修改真假 
    }
  }

  componentWillMount() {
    this._loadComments()                                          /**渲染组件后 启动_loadComments 
  }

  _loadComments = () => {                                 
    let comments = localStorage.getItem('comments')               /**得到localStorage存储的comments属性的值 
    if (comments) {                                               /**如果有这个值 为真 
       comments = JSON.parse(comments)                             /**JSON 字符串转换为对象。 
      this.setState({ comments })                                 /**得到上次保持的评论  简化对象 comments：comments
    }
  }

  _saveComments = (comments) => {
    localStorage.setItem('comments', JSON.stringify(comments))     /**通过localStorage得到 comments属性的值（评论的数据） 并且转换为JSON 字符串 保存
  }


  /* 通过props 传到输入组件的回调函数（点击发布按钮后） （参数为两个键值对对对象 名字和内容的值 发布的内容） 修改为State.comments的值 为3个键值对的对象 1名字 2内容的数组  3后来增加的发布的当前时间
  handleSubmitComment = (comment) => {
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ comments })                  /**点击发布按钮后 得到并显示评论以及时间数据
    this._saveComments(comments)                 /**私有方法得到 评论以及时间数据 存储 
  }

  handleShowOrHide=()=>  {
    this.setState({
      isShowClock: !this.state.isShowClock     /** 通过逻辑非（!） 取反 修改布尔值 
    })
  }

  handleDeleteComment= (index)=>  {           /** 得到要删除的评论在全部评论（数组）中的索引位置 
    const comments = this.state.comments      /** 得到全部的评论数据 数组 
    comments.splice(index, 1)                 /**删除评论所在的数组数据   位置就是索引，数量1      
    this.setState({ comments })               /** 更新删除所在的评论的数据后 数组 
    this._saveComments(comments)              /** 存储评论数据  更新删除所在的评论的数据后 数组
  }

  componentWillUnmount () {
    clearInterval(this._timer)                 /**组件更新后（删除评论）  清除定时器 
  }


  render() {
    return (
      <div className='wrapper'>

        {this.state.isShowClock ? <Clock /> : null}          {/**通过三元符号 谈判state.isShowClock的布尔值 显示或者隐藏组件 }
        <button onClick={this.handleShowOrHide} />   {/**点击启动handleShowOrHide函数 }
        <p>显示或隐藏时钟</p>

        <CommentInput onSubmit={this.handleSubmitComment} />  {/* 输入评论内容的组件    props不一定为属性 出现在jsx 只要在组件里}

        <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} />        {/* 显示发布评论内容的组件  通过props 传入state.comments的内容  为两个键值对的对象的数组}

      </div>
    )
  }
}

export default CommentApp 
*/