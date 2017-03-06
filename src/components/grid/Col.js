import React,{ PropTypes,Component } from 'react';
import classNames from 'classnames';
import assign from 'object-assign';

const stringOrNumber = PropTypes.oneOfType([PropTypes.string,PropTypes.number]);
const objectOrNumber = PropTypes.oneOfType([PropTypes.object,PropTypes.number]);

export default class Col extends Component {
    static PropTypes = {
        span:stringOrNumber,
        order:stringOrNumber,
        offset:stringOrNumber,
        push:stringOrNumber,
        pull:stringOrNumber,
        xs:objectOrNumber,
        sm:objectOrNumber,
        md:objectOrNumber,
        lg:objectOrNumber,
        className: PropTypes.string,
        children: PropTypes.node,
    }
   constructor(props){
       super(props);
       const ColSize = {
        span: ' ',
        order: ' ',
        offset: ' ',
        push: ' ',
        pull: ' ',
       }
   }

    render(){
        const props = this.props;
        const {span,order,offset,push,pull,xs,sm,md,lg,className,children,prefixCls = 'tit-col', ...others} = props;
        let sizeClassObj = {};
        const classes = classNames({
            [`${prefixCls}-${span}`]:span!== undefined,
            [`${prefixCls}-order-${order}`]:order,
            [`${prefixCls}-offset-${offset}`]:offset,
            [`${prefixCls}-push-${push}`]:push,
            [`${prefixCls}-pull-${pull}`]:pull
        },className);
        return <div {...others} className={classes}>{children}</div>;


    }
}