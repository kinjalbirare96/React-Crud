import React from 'react';
import List from './List';
import CKEditor from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';

var Allvalueonfeild = [];
var itemindex = '';
var item = "";
var reseteditor = false;
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            name : '', 
            address: '',
            profile : '',
            editorData: '',
            ListArray : null,
            updateFlag : false,
        };
      }
  handleSubmit(){

    reseteditor = true 
       if(this.state.updateFlag == false) {
            Allvalueonfeild.push({
                'name' :    this.state.name , 
                'address' : this.state.address,
                'profile': this.state.profile,
                'editor' : this.state.editorData
           })
      }else{
            console.log( Allvalueonfeild[itemindex]  , " Allvalueonfeild[itemindex] ");
            console.log(item , "item");
            Allvalueonfeild[itemindex].name = this.state.name;
            Allvalueonfeild[itemindex].address = this.state.address;
            Allvalueonfeild[itemindex].profile = this.state.profile;
            Allvalueonfeild[itemindex].editor = this.state.editorData;

        }
      this.setState({
            ListArray : Allvalueonfeild ,
            name : '',
            address :'',
            profile:'',
            editor:'',
            updateFlag:false
        }); 
     }
    componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://cdn.firebase.com/js/client/1.0.17/firebase.js";
        script.async = true;

        document.body.appendChild(script);
    }
    handleOnchange(fieldName , event ){
        if(fieldName == 'name'){
            this.setState({
                name : event.target.value
               }) 
        }else if(fieldName == 'address'){
            this.setState({
                address : event.target.value
               })
        }else if(fieldName == 'profile'){
            this.setState({
                profile : event.target.value
               })
        }
    }
    updateDataValue(index ,e){
        itemindex = index;
        item = this.state.ListArray[index];
        this.setState({
            name : item.name,
            address : item.address,
            //profile: item.profile,
            editor : item.editor,
            updateFlag:true
        })
  }
 
 render() {
      return (
        <div className= "information-wrapper-container">
        <h1 className = "title">  Information  </h1>
        <div className = "form-container">
           <form onSubmit={this.handleSubmit}>
              <div className = "form-row">
                 <label> Name : </label> 
                 <input type = "text"  name = "name"  onChange = {this.handleOnchange.bind(this, 'name')} value = {this.state.name} />
              </div>
              <div className = "form-row">
                 <label> Address : </label> 
                 <textarea row= "5" name = "Address"  onChange = {this.handleOnchange.bind(this, 'address')}  value = {this.state.address} />
              </div>
              <div className = "form-row">
                 <label> Profile-pic : </label> 
                 <div className = "file-container"> 
                    <input type = "file" name = "file"  onChange = {this.handleOnchange.bind(this, 'profile')}  value = {this.state.profile}/>
                 </div>
              </div>
              <div className = "form-row">
                 <label> Web development : </label> 
                 <div className = "editor">
                    <CKEditor
                       editor={ classicEditor }
                       data="<p>Hello  Kinjal Birare</p> "
                       
                       onChange={ ( event, editor ) => {
                        const data = editor.getData();
                        this.setState( {
                            editorData : data     
                            })
                    } }
                    
                    />

                 </div>
              </div>
              <div className = "form-row btn-container">
                 <input type = "button" className = "btn" onClick = {this.handleSubmit.bind(this)} value = "Submit"/>
              </div>
           </form>
        </div>
        <div className  = "list-container">
           {this.state.ListArray != null && this.state.ListArray != '' &&  this.state.ListArray != undefined ? 
           <List 
              feildValue = {this.state.ListArray}
              updateDataValue = {this.updateDataValue.bind(this)}
              />
           :''}
        </div>
     </div>
      )
    }
  }


export default Home;