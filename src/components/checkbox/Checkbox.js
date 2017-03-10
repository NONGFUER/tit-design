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
    handleChange (e,checked){
        const {readOnly,onChange,checkValue,index} = this.props;

        if(!readOnly &&onChange){
            checked = e ? e.target.checked : checked;
            const value = checked ?checkValue : undefined;
            onChange(value,checked,index);
        }
    }
    getCheckStatus () {
        const {checked,value,checkValue} = this.props;
        if(checked !== undefined){
            return checked;
        }
        return value === checkValue;
    }

    render(){
        const {style,className,block,readOnly,checkValue,isIndicator,indeterminate,text,children} = this.props;
        const checked = this.getCheckStatus();

        let labelClass = classnames(className);

        return(
            <label style={style} className={labelClass}>
                <input type="checkbox"
                    disabled = {readOnly}
                    onChange = {this.handleChange}
                    checked = {checked}
                    value = {checkValue}
                />
                <span></span>
                {children}
            
            </label>
        )
    }





    
}