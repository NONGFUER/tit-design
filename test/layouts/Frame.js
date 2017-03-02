import React,{Component} from 'react';

import LeftNav from './LeftNav';
import Header from './Header';
import _index from '../styles/base/_index.scss'
import _header from '../styles/layout/_header.scss'
class Frame extends Component{
    render(){
        return (
            <div>
                <Header />
                <LeftNav />
                <div className='main'>
                    {this.props.children}
                </div>
            </div>
        )}
}

export default Frame;