import React,{PropTypes} from 'react';
import classnames from 'classnames';

const Checkbox = props => {
    const {
        children, className, block, indeterminate, onClick, value, checked, defaultChecked,
        onChange, disabled, ...other
    } = props;

    const inputProps = {value, checked, defaultChecked, onChange, disabled } ;

    const classNames = classnames('tit-check',{
        'tit-checkbox-disabled': inputProps.disabled,
        'tit-checkbox-block' : block,
        'tit-checkbox-indeterminate' : indeterminate
    },className);
    return (
        <label
            tabIndex = {inputProps.disabled ? -1:0}
            className = {classNames}
            onClick = {e => {
                if(e.target.tagName === 'INPUT'){
                    e.stopPropagation()
                } else {
                    onClick && onClick(e)
                }
            }}
            {...other}
        >
            <input 
                type = "checkbox"
                className = "tit-checkbox-input"
                {...inputProps}
            />
            <span className="tit-checkbox-status"></span>
            {children && <span  className = "tit-checkbox-text">{children}</span>}
        </label>
    )
}

Checkbox.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    onChange: PropTypes.func,
    indeterminate: PropTypes.bool,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    customProp({checked, onChange }) {
        if(checked && !onChange) {
            return new Error ('You provided a `checked` prop without an `onChange` handler')
        }
    }
}
export default Checkbox;