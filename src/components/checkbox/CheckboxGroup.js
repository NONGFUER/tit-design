import React,{Component,PropTypes} from 'react';
import Checkbox from './Checkbox'
import ChoiceValue from '../higherOrders/ChioceValue'

class CheckboxGroup extends Component{
    static propTypes = {
        block:PropTypes.bool,
        className:PropTypes.string,
        data:PropTypes.array,
        inline:PropTypes.bool,
        onChange:PropTypes.func,
        readOnly: PropTypes.bool,
        style: PropTypes.object
    }
    static defaultProps = {
        data: []
    }

    constructor(props){
        super(props);
    }

    render(){
        const {style,className,readOnly,block,inline,onChange,data} = this.props;
        let checkBlock = block;
        if(block === undefined && inline !== undefined){
            checkBlock = !inline;
        }
        return (
            <div style={style} className = {className}>
                {
                    data.map((item,i)=>{
                        return (
                            <Checkbox key = {item.$key}
                            index = {i}
                            readOnly = {readOnly}
                            block = {checkBlock}
                            onChange = {onChange}
                            text = {item.$text}
                            checkValue = {item.$value}
                            checked = {item.$checked}
                            >
                            {item.text}
                            </Checkbox>

                        )
                    }) 
                }
            </div>
        );
    }
}

export default ChoiceValue(CheckboxGroup);