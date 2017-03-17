import React, {Component, PropTypes } from 'react';
import classnames from 'classnames';
import update from 'react-update'
import Checkbox from './Checkbox'
import shouldComponentUpdate from '../../utils/shouldComponentUpdate'

class CheckboxGroup extends Component{
     constructor(props){
        super(props);
        this.update = update.bind(this);
        this.state ={
            selects: props.selects || props.defaultSelects || []
        }
     }
     componentWillReceiveProps(nextProps) {
         nextProps.selects && this.setState({
             selects:nextProps.selects
         })
     }

     shouldComponentUpdate = shouldComponentUpdate

     change(...args){
        const selects = this.update(...args)
        this.props.onChange && this.props.onChange(selects);
     }

     addSelect(value) {
        this.change('push','selects',value)
     }

     removeSelect(value) {
        this.change('splice','selects', this.state.selects.indexOf(value))
     }

    toggleAll(e) {
        const selects = e.target.checked ? this.state.selects.concat(this.unSelects) : []
        this.change('set', {selects})
    }

    handleCheckboxChange(value, e) {
        this[(e.target.checked ? 'add' : 'remove')+'Select'](value)
    }

     render(){
         const {
             children, className, defaultSelects, onChange, values, block, toggleable,
             toggleAllContent, ...other
         } = this.props;
         const {selects} = this.state
         const unSelects = []
         delete other.selects
         let checkboxes
         if(values) {
            checkboxes = values.map((value,i) => {
                const checked = selects.indexOf(value) !== -1
                checked || unSelects.push(value)
                return (
                    <Checkbox
                        key = {i}
                        value = {value}
                        checked = {checked}
                        onChange = {this.handleCheckboxChange.bind(this,value)}
                        block = {block}
                    >
                        {value}
                    </Checkbox>
                )
            })
         } else {
             checkboxes = React.Children.map( children, (Checkbox,i) => {
                 if(!Checkbox) return
                 const props = Checkbox.props
                 const value = props.value

                 const checked = selects.indexOf(value) !== -1

                 if(!checked && !props.disabled){
                    unSelects.push(value)
                 }

                 return React.cloneElement(Checkbox, {
                     key: i,
                     checked,
                     block: props.block || block,
                     onChange: this.handleCheckboxChange.bind(this, value)
                 })
             })
         }

         this.unSelects = unSelects

         return (
             <div className = {classnames('tit-checkbox-group',className)} {...other}>
             {toggleable && checkboxes && checkboxes.length > 1 && (
                 <Checkbox
                    block = {block}
                    checked = {unSelects.length === 0}
                    indeterminate = {unSelects.length > 0 && unSelects.length < checkboxes.length}
                    onChange = {::this.toggleAll}
                 >
                    {toggleAllContent}
                 </Checkbox>
             )}
                {checkboxes}
             </div>
         )
     }

}

CheckboxGroup.defaultProps = {
    toggleAllContent: '全选'
}

CheckboxGroup.propTypes = {
    selects: PropTypes.array,
    defaultSelects: PropTypes.array,
    onChange: PropTypes.func,
    values: PropTypes.array,
    block: PropTypes.bool,
    toggleable: PropTypes.bool,
    customProp({ selects, onChange }) {
        if (selects && !onChange) {
        return new Error('You provided a `selects` prop without an `onChange` handler')
        }
    }
}
export default CheckboxGroup;

