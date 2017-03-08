import React,{Component} from 'react';
import Row from '../../../src/components/grid/Row.js';
import Col from '../../../src/components/grid/Col.js'
class Home extends Component {
    render(){
        return (
            <div className="Home">
            <h1>col-12</h1>
            <Row  style={{ backgroundColor:'white',height:80,'text-align':'center'}} gutter={10} > 
                <Col span={12}  style={{ backgroundColor:'#00A0E9',height:80}}>col-12</Col>
                <Col span={12}>col-12</Col>
              </Row>
                <h1>col-8</h1>
              <Row  style={{ backgroundColor:'white',height:80}} gutter={10} > 
                <Col span={8}  style={{ backgroundColor:'#00A0E9',height:80}}>col-8</Col>
                <Col span={8}>col-8</Col>
                 <Col span={8} style={{ backgroundColor:'#00A0E9',height:80}}>col-8</Col>
              </Row>
              <h1>col-6</h1>
              <Row  style={{ backgroundColor:'white',height:80}} gutter={10} > 
                <Col span={6}  style={{ backgroundColor:'#00A0E9',height:80}}>col-4</Col>
                <Col span={6}>col-4</Col>
                <Col span={6} style={{ backgroundColor:'#00A0E9',height:80}}>col-4</Col>
                <Col span={6} >col-4</Col>
              </Row>
                <h1>col-gutter</h1>
              <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div className="gutter-box">col-6</div>
                    </Col>
              </Row>

              <h1>offset列偏移</h1>
            <Row>
                <Col span={8} className="gutter-box">col-8</Col>
                <Col span={8} offset={8} className="gutter-box">col-8</Col>
            </Row>
            <Row>
                <Col span={6} offset={6} className="gutter-box">col-6 col-offset-6</Col>
                <Col span={6} offset={6} className="gutter-box">col-6 col-offset-6</Col>
            </Row>
                <Row>
                <Col span={12} offset={6} className="gutter-box">col-12 col-offset-6</Col>
            </Row>
            <h1>列排序</h1>
            <Row>
                <Col span={18} push={6} className="gutter-box">col-18 col-push-6</Col>
                <Col span={6} pull={18} >col-6 col-pull-18</Col>
            </Row>
            </div>
        )}
}
export default Home;