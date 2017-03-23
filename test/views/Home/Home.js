import React,{Component} from 'react';
import Row from '../../../src/components/grid/Row.js';
import Col from '../../../src/components/grid/Col.js';
import Checkbox from '../../../src/components/Checkbox/Checkbox';
import CheckboxGroup from '../../../src/components/Checkbox/CheckboxGroup';
import Radio from 'components/radio/Radio';
import RadioGroup from 'components/radio/RadioGroup';
class Home extends Component {
    render(){
        return (
            <div className="Home" >
               
                <Checkbox   style={{color:'blue'}}>famale</Checkbox>
               <CheckboxGroup toggleable values={['苹果', '三星', '小米']} />
                <Radio />
                <RadioGroup>
                    <Radio value = 'xiaomi'>小米</Radio>
                    <Radio value = 'samsung'>三星</Radio>
                    <Radio value = 'apple'>苹果</Radio>
                </RadioGroup>
            </div>
        )}
}
export default Home;