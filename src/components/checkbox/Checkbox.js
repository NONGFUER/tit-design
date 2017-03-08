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
    }
    render(){
        const { style, className, block, readOnly, checkValue, isIndicator, indeterminate, text, children } = this.props;
        let labelClass = classnames(
            className,
            'tit-checkbox'
        )
        return (
        <label style={style} className={labelClass}>
            <input type="checkbox"
                disabled={readOnly}
                onChange={this.handleChange}
                checked={checked}
                value={checkValue}
            />
            <span className={_styles.indicator}></span>
            {children}
        </label>
        )
    }
}