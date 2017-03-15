import React,{Component,PropTypes,Children} from 'react';
import {toArray} from  '../../utils/strings'
import {toTextValue} from '../../utils/objects'
/**
 * 高阶组件
 * 功能：格式化数据
 * 
 * @function (formatData) {返回checked 选中状态  value和text 索引key  }
 */
const ChioceValue = (WrappedComponent) =>
    class extends Component {
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
        formatData(data){
            const {value,sep,textTpl,valueTpl,children} = this.props;
            let values = toArray(value,sep); //将value值用分隔符‘，’分割开
            data = toTextValue (data, textTpl, valueTpl).map((d) => {
                d.$checked = values.indexOf(d.$value) >= 0;
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
        render(){
            return <WrappedComponent {...this.props} data = {this.formatData(this.props.data)}/>;
        }
    }


export default ChioceValue;