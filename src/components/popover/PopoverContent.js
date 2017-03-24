import React,{PropTypes,Component} from 'react'
import ReactDOM from 'react-dom'
import classnames from 'classnames'
import CoordinateFactory from './CoordinateFactory'

class PopoverContent extends Component {
    constructor(props){
        super(props);
    }
    getChildContext(){
        return {
            popoverContent:this
        }
    }

    componentDidMount(){
        this.setPosition();
    }

    componentDidUpdate(){
        this.setPosition();
    }
    
    setPosition(){
        const {triggerNode, align, direction} = this.props;
       
        const rootNode = ReactDOM.findDOMNode(this);
        rootNode.style.display = 'block'
        if(this.positionClassList){
            rootNode.classList.remove(...this.positionClassList.split(' '))
        }

        const [computedDirection, computedAlign] = CoordinateFactory(
            triggerNode,rootNode,direction,align
        )
         this.positionClassList = classnames({
            [`tit-popover-${computedDirection}`]:true,
            [`tit-popover-${computedAlign}`]: !!computedAlign
        })
        rootNode.classList.add(this.positionClassList)
    }
    render(){
        const {children, className, triggerNode, triggerMode, align,direction, ...other} = this.props;
        const classNames = classnames(className,'tit-popover',{
            'tit-popover-animation' : triggerMode === 'hover'
        });
        return (
            <div className = {classNames} {...other}>
                <div className = 'tit-popover-content'> {children}</div>
            </div>

        )
    }
}

PopoverContent.childContextTypes = {
  popoverContent: PropTypes.instanceOf(PopoverContent)
}

export default PopoverContent
