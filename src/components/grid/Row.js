import React,{Component} from 'react';
import classNames from 'classnames';
import assign from 'object-assign';
/**
 * className?: string;
  gutter?: number;
  type?: 'flex';
  align?: 'top' | 'middle' | 'bottom';
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between';
  style?: React.CSSProperties;
  prefixCls?: string;
 * 
 */
export default class Row extends Component{
    static defaultProps = {
        gutter:0,
    };

    static propTypes = {
        type:React.PropTypes.string,
        align:React.PropTypes.string,
        justify:React.PropTypes.string,
        className:React.PropTypes.string,
        children:React.PropTypes.node,
        gutter:React.PropTypes.number,
        prefixCls:React.PropTypes.string,
    };

    render(){
        const {type,align,className,justify,children,gutter,style,prefixCls = 'tit-row',...others} = this.props;
        const classes = classNames({
            [prefixCls]:!type,
            [`${prefixCls}-${type}`]:type,
            [`${prefixCls}-${type}-${justify}`]:type&&justify,
            [`${prefixCls}-${type}-${align}`]:type&&align,
        },className);
        const rowStyle = gutter > 0 ? assign({},{
            marginLeft:gutter/-2,
            marginRight:gutter/-2,
        },style):style;
        const cols = React.Children.map(children,(col)=>{
            if(!col){
                return null;
            }
            if(col.props){
                return React.cloneElement(col,{style:gutter>0?assign({},{
                    paddingLeft:gutter/2,
                    paddingRight:gutter/2
                },col.props.style):col.props.style});

            }
            return col;
        });
        return <div {...others} className={classes} style={rowStyle}>{cols}</div>

    }

}