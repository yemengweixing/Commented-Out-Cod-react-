import React, { Component } from 'react'

class Clock extends Component {
    constructor() {
        super()
        this.state = {
            date: new Date()                /**初始化 state.date    现在页面还是静态的*/
        }
    }

    /**每隔 1 秒更新中的 state.date */ 
componentWillMount() {
    this.timer = setInterval(() => {
        this.setState({ date: new Date() })
    }, 1000)
}

/**组件销毁的时候清除该组件的定时器 */ 
componentWillUnmount() {
    clearInterval(this.timer)
}

render() {
    return (
        <div>
            <h1>
                <p>现在的时间是</p>
                {this.state.date.toLocaleTimeString()}
            </h1>
        </div>
    )
}

}

export default Clock