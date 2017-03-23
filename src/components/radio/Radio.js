import React,{ PropTypes } from 'react'
import classnames from 'classnames'

const Radio = props => {
    const {children,className,onClick,value,checked,defaultChecked,onChange,disabled,...other} = props;
    const inputProps = {value,checked,defaultChecked,onChange,disabled};
    const classNames = classnames('tit-radio',{
        'tit-radio-disabled' : inputProps.disabled
    },className);

        return(
            <label 
                tabIndex = {inputProps.disabled ? -1 : 0}
                onClick = {e =>{
                    if(e.target.tagName === 'INPUT'){
                        e.stopPropagation()
                    } else {
                        onClick && onClick(e)
                    }
                }}
                className = {classNames}
                {...other}
            >
                <input type='radio' {...inputProps} />
                <span className="tit-radio-status"></span>
                {children && <span className="tit-radio-text">{children}</span>}
            </label>)
        }
    
Radio.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
}
export default Radio;