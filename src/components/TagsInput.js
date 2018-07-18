import React from 'react'
import ClassNames from 'classnames'  
import { fromJS } from 'immutable'
import PropTypes from 'prop-types' 

//style
import '../assets/tagsInput.scss'

class TagsInput extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            tags: this.props.defaultTags || [],
            tagValue: '',
            inFocus: false,
            width: "0.75em",
            error: this.vertifyTaginRule(this.props.defaultTags || [])
        }
        this.tagInput = null;
    }
        
    componentWillReceiveProps(nextProps){
        if(this.props.defaultTags && !fromJS(this.props.defaultTags).equals(nextProps.defaultTags)){
            this.setState({
                tags: nextProps.defaultTags || [],
                error: this.vertifyTaginRule(nextProps.defaultTags || [])
            });
        }
    } 

    inFocusBool(bool = true){ 
        const {inFocus} = this.state; 
        if(inFocus !== bool){
            this.setState({
                inFocus: bool
            });
        } 
    }

    vertifyTaginRule(tags = this.state.tags){
        return  this.props.rule ?
                tags.some(item => {
                    return !this.props.rule.test(item)
                }) : 
                false
    }

    handleBlurInput(){
        let {
            tagValue, tags
        } = this.state; 
        if(tagValue){
            tags.push(tagValue);
            this.props.onChange(tags);

            this.setState({
                tagValue: '', 
                error: this.vertifyTaginRule(tags) 
            });  
        }   
        this.inFocusBool(false);
    }

    handleRemoveTag(removeTag){
        let { tags } = this.state,
            ind = tags.indexOf(removeTag); 

        tags.splice(ind, 1);
        this.props.onChange(tags);
        this.setState({
            tags,
            error: this.vertifyTaginRule(tags)
        });    
    }

    handleKeyUpInput(e){ 
        if (e.keyCode === 13) {  // enter save tag 
            this.handleBlurInput();
        }else if(e.keyCode === 8){ // delete tag
            this.handleRemoveTag();
        } 
    }

    handleChangeTag(tagValue){
        this.setState({tagValue});
    }

    focusToInput(){
        this.tagInput.focus();
    }

    randomNumber(min, max){
        return Math.random()*(max - min) + min
    }
    
    //produce RGB color values between 10 and 170
    getRandomColor(){
        return `rgb(${this.randomNumber(10, 170)}, ${this.randomNumber(10, 170)}, ${this.randomNumber(10, 170)})`
    }
    
    render() {  
        const {
            tags,
            inFocus,
            tagValue,
            error,
            width,
        } = this.state

        const tagsHtml = tags.map((t, index) => {
            return  <div 
                        key={index}
                        className="t-input-tag text-overflow" 
                        title={t} 
                        style={{background: this.props.fullColor ? this.getRandomColor() : '#f3f3f3', color:  this.props.fullColor ? '#fff' : "#666"}} 
                    >
                        <span className="t-input-inner">{t}</span>
                        <span className="t-input-remove" onClick={e => this.handleRemoveTag(t)}>x</span>
                    </div>
        })

        return  <div className="t-input-box" style={{width: this.props.width || "100%"}}>
                        <div 
                            className={ClassNames({"focus": inFocus, "error": error, "t-input-wrap": true})} 
                            onClick={this.focusToInput.bind(this)}
                        >
                                {tagsHtml}
                                <input 
                                    type="text"
                                    style={{width: tags.length === 0 ? '100%' : '20%'}}
                                    placeholder={tags.length === 0 ? this.props.placeholder : ''}
                                    value={tagValue}
                                    ref={ref => this.tagInput = ref}
                                    onFocus={e => this.inFocusBool()} 
                                    onBlur={e => this.handleBlurInput()} 
                                    onKeyUp={e => this.handleKeyUpInput(e)}
                                    onChange={e => this.handleChangeTag(e.target.value)}
                                />
                        </div>
                        <span className="errTip" style={{ display: this.state.error && this.props.errTip ? "inline-block" : "none", color: "red"}}>{this.props.errTip}</span>
                </div>
                
    }
}


TagsInput.propTypes = {
    defaultTags: PropTypes.array,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    rule: PropTypes.object,
    errTip: PropTypes.string,
    fullColor: PropTypes.bool
}

export default TagsInput;
