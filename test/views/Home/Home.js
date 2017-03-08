import React,{Component} from 'react';
import Row from '../../../src/components/grid/Row.js';
import Col from '../../../src/components/grid/Col.js'
class Home extends Component {
    render(){
        return (
            <div className="Home">
                <h1>rows</h1>
              <Row type="cs" align="middle" style={{ backgroundColor:'grey',height:80}} gutter={10} > 
                <Col span={12}>col1111</Col>
                <Col span={12}>col2122</Col>
              </Row>

            </div>
        )}
}
export default Home;