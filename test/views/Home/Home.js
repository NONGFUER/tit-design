import React,{Component} from 'react';
import Row from '../../../src/components/grid/Row.js';
import Col from '../../../src/components/grid/Col.js';
import Checkbox from '../../../src/components/Checkbox/Checkbox';
import CheckboxGroup from '../../../src/components/Checkbox/CheckboxGroup';
class Home extends Component {
    render(){
        return (
            <div className="Home" >
                <input type="checkbox" />hh
                <h1>Checkbox</h1>
                <Checkbox   style={{color:'blue'}}>famale</Checkbox>
               <CheckboxGroup toggleable values={['苹果', '三星', '小米']} />

            </div>
        )}
}
export default Home;