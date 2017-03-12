import React,{Component} from 'react';
import Row from '../../../src/components/grid/Row.js';
import Col from '../../../src/components/grid/Col.js';
import Checkbox from '../../../src/components/Checkbox/Checkbox';
class Home extends Component {
    render(){
        return (
            <div className="Home">
            <h1>Checkbox</h1>
            <Checkbox readOnly={true} checked={true} style={{color:'blue'}}>famale</Checkbox>
            </div>
        )}
}
export default Home;