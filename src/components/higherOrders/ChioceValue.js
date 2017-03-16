import React,{Component,Children} from 'react';
import {toArray} from  '../../utils/strings'
import {toTextValue} from '../../utils/objects'
import PropTypes from '../../utils/proptypes'
/**
 * 高阶组件
 * 功能：格式化数据
 * 
 * @function (formatData) {返回checked 选中状态  value和text 索引key  }
 */
const ChioceValue = (WrappedComponent) =>
    class ChioceValue extends Component {
        static propTypes = {
            children:PropTypes.array_element,
            data:PropTypes.array_object,
            onChange:PropTypes.func,
            sep:PropTypes.string,
            textTpl:PropTypes.tpl,
            value:PropTypes.any,
            valueTpl:PropTypes.tpl
        }
        static defaultProps = {
            data:[],
            sep:',',
            textTpl:'{text}',
            valueTpl:'{id}'
        }
        constructor (props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
        }
        formatData(data){
            const {value,sep,textTpl,valueTpl,children} = this.props;
            let values = toArray(value,sep); //将value值用分隔符‘，’分割开
            data = toTextValue (data, textTpl, valueTpl).map((d) => {
                if(values.indexOf(d.$value)>= 0){
                    d.$checked =  true ;
                }else{
                    d.$checked =  false ;
                }
                
                return d;
            })

            Children.map(children,(child) => {
                if (typeof child ==='object') {
                    let position = child.props.position;
                    if(position === undefined){
                        position = data.length;
                    }
                    data = [
                        ...data.slice(0,position),
                        {
                            ...child.props,
                            $checked: values.indexOf(child.props.value) >= 0,
                            $value: child.props.value,
                            $text: child.props.children || child.props.text,
                            $key: child.props.id || hashcode(child.props.value)
                        },
                        ...data.slice(position)
                    ]
                }
            });
            this.data = data;
            return data;
        }
        handleChange(value, checked, index){
            const {sep, onChange } = this.props;
            let data = this.data;
            let values = [];
            let raw = [];
            console.log('操作的是第'+index+'个复选框状态变'+checked)
             console.log(data)
             
            data[index].$checked = checked;
            data.forEach((d) => {
                if(d.$checked){
                    values.push(d.$value)
                    raw.push(d)
                }
            })
            console.log(data)
            if(sep && typeof sep === 'string'){
                value = values.join(sep)
            }else if( typeof sep === 'function') {
                value = sep(raw);
            }else{
                value = values;
            }
 console.log(value)
            if(onChange){
                console.log(value)
                onChange(value)
            }
        }
        render(){
            return <WrappedComponent {...this.props} 
            data = {this.formatData(this.props.data)}
            onChange = {this.handleChange}
            />;
        }
    }


export default ChioceValue;