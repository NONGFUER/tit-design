import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';


export default class Checkbox extends Component {
    static propsTypes = {
        block:PropTypes.bool,
        checkValue:PropTypes.any,
        checked:PropTypes.bool,
        className:PropTypes.string,
        indeterminate:PropTypes.bool,
        index:PropTypes.number,
        isIndicator:PropTypes.bool,
        onChange:PropTypes.func,
        position:PropTypes.number,
        readOnly:PropTypes.bool,
        text:PropTypes.any,
        value:PropTypes.any
    }

    static defaultProps = {
        checkValue: true 
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(e,checked){
        console.log('原本状态：'+e.target.checked + "--" + e.target.value);
        const {readOnly, onChange, checkValue, index} = this.props;

        if(!readOnly && onChange){
            console.log('c是'+checked)
            checked = e ? e.target.checked : checked;
            
            const value = checked ? checkValue : undefined;
            console.log('c点了之后'+checked+'--'+value)
            console.log('现在状态：'+e.target.checked + "--" + e.target.value);
            onChange(value, checked, index)
             console.log('现在状态1：'+e.target.checked + "--" + e.target.value);
        }
    }

    getCheckStatus () {
        const {value, checked, checkValue} = this.props;
        if(checked !== undefined) {
            return checked;
        }
        return value === checkValue;
    }

    render(){
       const {children,checkValue,style,readOnly,text} = this.props;
       const checked = this.getCheckStatus();
        let labelClass = classnames(
            'tit-checkbox'
        )
        return (
            <label style = {style}  className={labelClass}>
                <input type="checkbox" 
                    disabled = {readOnly}
                    onChange = {this.handleChange}
                    value = {checkValue}
                    checked = {checked}
                />
                <span></span>
                 {(text) && <span>{text}</span>}
                {children}
            </label>
        )
    }





    
}