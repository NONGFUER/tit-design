import React,{Component} from 'react';
import Row from '../../../src/components/grid/Row.js';
import Col from '../../../src/components/grid/Col.js';
import Checkbox from '../../../src/components/Checkbox/Checkbox';
import CheckboxGroup from '../../../src/components/Checkbox/CheckboxGroup';
class Home extends Component {
    render(){
        return (
            <div className="Home">
                <input type="checkbox" />hh
                <h1>Checkbox</h1>
                <Checkbox readOnly={true} checked={true} style={{color:'blue'}}>famale</Checkbox>
                <CheckboxGroup value="us,fr" data={[
                    { 'id': 'cn', 'text': 'China' },
                    { 'id': 'us', 'text': 'United States' },
                    { 'id': 'jp', 'text': 'Japan' },
                    { 'id': 'gb', 'text': 'Great Britain' },
                    { 'id': 'fr', 'text': 'France' },
                    { 'id': 'de', 'text': 'Germany' },
                    { 'id': 'es', 'text': 'Spain' }
                ]} />

            </div>
        )}
}
export default Home;