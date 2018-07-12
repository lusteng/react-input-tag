import React from 'react'
import ReactDOM from 'react-dom'
import TagsInput from '../src'
import Select, {Option, OptGroup} from 'rc-select';

const paddingLeft = "20px"; 
const preStyle = {
    background: "#eee",
    padding: "0 10px"
}

class App extends React.Component { 

    handleChangeTags(tags){
        console.log(tags);
    }
    
    render(){
        return  <div className="container" style={{width: "1000px", margin: "0 auto"}}>
            <div className="example1">
                <p>1、默认参数</p>
                <TagsInput 
                    onChange={(tags) => this.handleChangeTags(tags)}
                /> 
                <pre style={preStyle}>
                    {`
<TagsInput 
onChange={(tags) => this.handleChangeTags(tags)}
/>                             
                    `}
                </pre>
            </div> 
            <div className="example2">
                <p>2、设置初始显示标签</p>
                <TagsInput 
                    width={300}
                    defaultTags={['标签一', '标签二']}
                    onChange={(tags) => this.handleChangeTags(tags)}
                /> 
                <pre style={preStyle}>
                    {`
<TagsInput 
    width={300}
    defaultTags={['标签一', '标签二']}
    onChange={(tags) => this.handleChangeTags(tags)}
/>                         
                    `}
                </pre>
            </div> 
            <div className="example3">
                <p>3、标签输入框提示语placeholder</p>
                <TagsInput 
                    width={300} 
                    placeholder="请填写标签名"
                    onChange={(tags) => this.handleChangeTags(tags)}
                /> 
                <pre style={preStyle}>
                    {`
<TagsInput 
    width={300} 
    placeholder="请填写标签名"
    onChange={(tags) => this.handleChangeTags(tags)}
/>                            
                    `}
                </pre>
            </div> 
            <div className="example4">
                <p>4、验证标签内容是否符合rule</p>
                <TagsInput 
                    width={300} 
                    rule={/\d+/}
                    errTip='不好意思，你写的有点问题哦'
                    defaultTags={['ababbbbfdsssssssssfsdfdsf']}
                    onChange={(tags) => this.handleChangeTags(tags)}
                /> 
                <pre style={preStyle}>
                    {`
<TagsInput 
    width={300} 
    rule={/\d+/}
    errTip='不好意思，你写的有点问题哦'
    defaultTags={['ababbbbfdsssssssssfsdfdsf']}
    onChange={(tags) => this.handleChangeTags(tags)}
/>                        
                    `}
                </pre>
            </div> 
            <div className="example4">
                <p>5、设置标签背景为随机色彩</p>
                <TagsInput 
                    width={300} 
                    fullColor={true}
                    defaultTags={['标签一', '标签二', '标签三']}
                    onChange={(tags) => this.handleChangeTags(tags)}
                /> 
                <pre style={preStyle}>
                    {`
<TagsInput 
    width={300} 
    fullColor={true}
    defaultTags={this.state.tags}
    onChange={(tags) => this.handleChangeTags(tags)}
/>             
                    `}
                </pre>
            </div> 
        </div>
    }
} 
 
ReactDOM.render(
    <App />,
    document.getElementById('app')
)

