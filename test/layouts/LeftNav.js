import React,{Component} from 'react';
const menu = [   
                {
                    menuTitle:'general',
                    submenu:['Button按钮','Icon图标']
                },
                {
                    menuTitle:'layout',
                    submenu:['Layout布局','Grid栅格']
                },
                {
                    menuTitle:'Navigation',
                    submenu:['Affix固钉','BackTop回到顶部','Dropdown下拉菜单','Menu导航菜单','Pagination分页','Steps步骤条','Tabs标签页']
                },
                {
                    menuTitle:'Data Entry',
                    submenu:['AutoComplete自动完成','Cascader级联选择','Checkbox多选框','DatePicker日期选择框','Form表单']
                },


];
class LeftNav extends Component{
    render(){
        return (
            <nav className="leftNav multi_drop_menu">
                <ul className="tit-menu tit-menu-inline">
               { 
                   menu.map((item,index) =>{
                    return ( <SubMenu submenu={item.submenu} menuTitle={item.menuTitle} key={index} />)
                  })
               } 

                    
                </ul>
            </nav>
        )};
}

class SubMenu extends Component {  
    constructor(props){
		super(props);
		this.handleClickToggle = this.handleClickToggle.bind(this);
		this.state = {
			openState:false,
		};
	}
    handleClickToggle(e){
        const {openState} = this.state;
        if(openState){
            this.setState({
                openState:false
            })
             console.log('close');
        }else{
            this.setState({
                openState:true
            })
            console.log('open');
        }
    }
    render(){
        const {submenu,menuTitle} = this.props;
        const {openState} = this.state;

        return(
           <li className="tit-menu-submenu tit-menu-submenu-inline ">
                <div className="tit-menu-submenu-title" onClick={this.handleClickToggle}><span>{menuTitle}</span></div>
                <ul className="tit-menu tit-menu-inline" style={{display:openState?'block':'none'}}>
                {               
                    submenu.map((item,index) =>
                        { return (<li className='tit-menu-item' key={index}>{item}</li>)}
                    )
                }
                </ul>
          </li>
    )}
}
export default LeftNav;