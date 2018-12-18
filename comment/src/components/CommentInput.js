import React, { Component } from 'react'
import PropTypes from 'prop-types'

//得到输入信息的UI组件  默认输出
export default class CommentInput extends Component {
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }

    static defaultProps = {
        username: ''
    }

    constructor(props) {
        super(props)
        /*名字 内容 设置为空 state属性的值为空字符串*/
        this.state = {
            username: '',
            content: ''
        }
    }
    /*onChange属性触动函数 传入合成事件 得到目标元素的value（内容） 修改为State username的值*/
    handleUsernameChange = (e) => {
        this.setState({
            username: e.target.value
        })
    }
    /*onChange属性触动函数 传入合成事件 得到目标元素的value（内容） 修改为State content的值*/
    handleContentChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    //发布后启动
    handleSubmit = () => {
        if (this.props.onSubmit) {                          /**检查是否有 rops传入属性 为真则有  */
            this.props.onSubmit({ 
                username: this.state.username, 
                content: this.state.content, 
                createdTime: +new Date() })      /** 通过props传入参数的回调函数   放入参数为对象 通过回调函数 参数上传父组件*/
        }                       /**回调函数 传入的参数为对象  增加第三个值  发布内容的当前时间*/

        this.setState({ content: '' })                      /**通过之后 清空输入内容*/
    }

    componentDidMount() {
        this.textarea.focus()                              /**评论功能（四）focus() 赋予焦点 自动聚焦到评论框 打开页面就可以在评论区打字*/
    
    }

    render() {
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        {/** 评论功能（四）持久化用户名 onBlur事件 失去焦点时启动函数*/}
                        <input value={this.state.username}
                            onBlur={this.handleUsernameBlur}
                            onChange={this.handleUsernameChange} />     {/** onChange 用户改变input输入框内容时执行*/}
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange} />      {/**onChange 用户改变input输入框内容时执行*/}
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}
