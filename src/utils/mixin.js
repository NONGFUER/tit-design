/**
 * 
 * @param {*} obj 
 * @param {*} mixins 
 */

// const mixin = function(obj,mixins){
//     const newObj = obj;
//     newObj.prototype = Object.create(obj.prototype);

//     for(let prop in mixins){
//         if(mixins.hasOwnProperty(prop)){
//             newObj.prototype[prop] = mixins[prop];
//         }
//     }
//     return newObj;
// }

// const BigMixin = {
//     fly : () => {
//         console.log('I can fly')
//     }
// }

// const Big = function(){
//     console.log('new big');
// }

// const FlyBig = mixin(Big,BigMixin);
// const flyBig = new FlyBig();
// flyBig.fly();
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

React.createClass({
    mixins:[PureRenderMixin],//1.工具使用，共享些工具类方法2.生命周期继承，props与state合并，能够合并生命周期方法
    render(){
        return <div>foo</div>
    }
});

//回归到ES6 classes,来想想如何封装mixin
//要在class的基础上封装mixin,就要说到class的本质。
//ES6比并没有改变javascript面向对象方法基于原型的本质，不过在此之上提供了些语法糖，class就是其中之一
//另一个语法糖就是decorator,正巧可以用来实现class上的mixin
//decorator 是在ES7中定义的新特性与java中的注解相类似，但不同的是decorator是运用在运行时的方法
//在redux或其他其他一些应用层框架中，越来越多地使用‘decorator’实现对组件的修饰
//所以我们用decorator来实现mixin


//mixin 的问题
//1.破环原有组件的封装2.命名冲突3.增加复杂性
//针对这些困扰，react社区提出新的方式取代mixin,那就是高阶组件

const MyContainer = (WrappedComponent) =>{
    class extends Component {
        render() {
            return (<WrappedComponent {...this.props}/>)
        }
    }
}
//这里看到最重要的部分，是render方法返回了WrWrappedComponent的React组件
//我们可以通过高阶组件来传递props，这种方法即为属性代理
class MyComponent extends Component {
    //...
}
export default MyContainer(MyComponent);
//这样组件就能可以一层层地作为参数被调用，原始组件就具备了高阶组件对他的修饰，保持单个组件封装性的同时还保证了易用性
//也可以通过decorator来转换
```
@MyContainer
class MyComponent extends Component{
    render(){}
}

export default MyComponent;
```
//控制props
const MyContainer = (WrappedComponent) =>{
    class extends Component{
        render(){
            const newProps = {
                text : newText,
            }
            return <WrappedComponent {...this.props} {...newProps}/>;
        }

    }
}
//套用了高阶组件，我们的组件中就会多个text prop
//

//通过refs来使用引用
const MyContainer = (WrappedComponent) => {
    class extends Component{
        proc(wrappedComponentInstance){
            wrappedComponentInstance.method();
        }
        render(){
            const props = Object.assign({},this.props,{
                ref:this.proc.bind(this)
            });
            return <WrappedComponent {...props}/>;
        }
    }
}
//
//抽象state
const MyContainer = (WrappedComponent) => {
    class extends Component {
        constructor(props){
            super(props);
            this.state = {
                name : '',
            }
            this.onNameChange = this.onNameChange.bind(this);           
        }

        onNameChange(){
            this.setState({
                name: event.target.value,
            })
        } 
        render(){
            const newProps = {
                name: {
                    value: this.state.name,
                    onChange: this.onNameChange,
                }
            }
            return <WrappedComponent {...this.props} {...newProps}/>
        }
    }
}
//把input组件中对name prop 的 onChange方法提取到高阶组件中

//使用其他元素包裹WrWrappedComponent
//这样既可以加样式，也可以为了布局