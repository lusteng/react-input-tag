react tags automatic input component.

## Demo

look up example/index.html  

## Installation

```bash
npm install react-input-tag
```

## Usage

```javascript
import React from 'react'
import ReactDOM from 'react-dom'
import TagsInput from 'react-input-tag' 

class App extends React.Component {
    constructor(props){
        super(props);
    }

    handleChangeTags(tags){
        console.log(tags)  
    }

    render() { 
        return  <TagsInput 
                onChange={(tags) => this.handleChangeTags(tags)}
            />
    }
} 

```

## API

| Prop                                  | Type              | Default                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| defaultTags                           | array              | []                                                                                       | 组件初始显示标签项   |
| onChange                              | func               | **Required**                                                                             | 组件标签项发生改变时触发的回调函数  |
| placeholder                           | string             | ""                                                                                    | 组件placeholder |
| rule                                  | object             |  null                                                                                    | 校验标签内容正则 |   
| errTip                                | string             |  ""                                                                                      | 标签内容不匹配正则时的提示语，默认不提示 |
| fullColor                             | bool               |  false                                                                                   | 随机彩色标签  |   

 

## License

MIT
