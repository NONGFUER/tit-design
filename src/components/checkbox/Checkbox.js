import React,{Component,PropTypes} from 'react';
import classnames from 'classnames';

export default class Checkbox extends Component{
    static propTypes = {
        block: PropTypes.bool,
        checkValue: PropTypes.any,
        checked: PropTypes.bool,
        children: PropTypes.any,
        className: PropTypes.string,
        indeterminate: PropTypes.bool,
        index: PropTypes.number,
        isIndicator: PropTypes.bool,
        onChange: PropTypes.func,
        position: PropTypes.number,
        readOnly: PropTypes.bool,
        style: PropTypes.object,
        text: PropTypes.any,
        value: PropTypes.any
    }

    static defaultProps = {
        checkValue:true
    }

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);        
    }

    handleChange(e){
        console.log(e.target.checked + "" + e.target.value);
    }

    render(){
       const {children,checkValue,checked,style,readOnly} = this.props;
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
                {children}
            </label>
        )
    }
}