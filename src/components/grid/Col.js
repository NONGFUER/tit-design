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
        const deviceSize = ['xs','sm','md','lg'];
        deviceSize.forEach((size)=>{
            let sizeProps ={
                span: ' ',
                order: ' ',
                offset: ' ',
                push: ' ',
                pull: ' ',
            };
            if(typeof props[size] ==='number'){
                    sizeProps.span = props[size];
            }else if(typeof props[size] ==='object'){
                sizeProps = props[size] || {};
            }
            delete others[size];
            sizeClassObj = assign({},sizeClassObj,{
                [`${prefixCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
                [`${prefixCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
                [`${prefixCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
                [`${prefixCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
                [`${prefixCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
            });
        });
        const classes = classNames({
            [`${prefixCls}-${span}`]:span!== undefined,
            [`${prefixCls}-order-${order}`]:order,
            [`${prefixCls}-offset-${offset}`]:offset,
            [`${prefixCls}-push-${push}`]:push,
            [`${prefixCls}-pull-${pull}`]:pull
        },className,sizeClassObj);
        return <div {...others} className={classes}>{children}</div>;


    }
}