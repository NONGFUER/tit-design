import React,{Component} from 'react';

import LeftNav from './LeftNav';
import Header from './Header';

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