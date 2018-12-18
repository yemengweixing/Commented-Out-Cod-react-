import React,{Component} from 'react';
import  './header.css';
import  '../../statics/iconfont/iconfont.css';

class Header extends Component {
    constructor(props) {
    super(props);
    this.state = {
        focused: true
    }
    }

    render()    {
        return  (
            <div className='header'> 
            <div className='navbar'>
            <div className='headerLogo' href='/' alt="Nav logo"></div>
                    <div    className='headerright'>
                    <a className='navright creation'>
                    <i className="iconfont">&#xe62b;</i>
                    写文章</a>
                    <a className='navright register'>注册</a>
                    </div>
                <div className='nav'>
                    <a className='navitem navitemleft homepage'  href='/' alt="home">首页</a>
                    <a className='navitem navitemleft'>下载app</a>
                    <a className='navitem navitemright'>登录</a>
                    <i className='iconfont navitem navitemright'>&#xe636;</i>
                        <div className='SearchWrapper'>
                        <input className='Search'  placeholder='搜索'   autocomplete="off"></input>
                        <i className="iconfont "    >&#xe63d;</i>
                        </div>
                </div>
            </div>       
            </div>
        )
    }
}

export default Header;