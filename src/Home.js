import React from 'react';
import List from './List';
import CKEditor from '@ckeditor/ckeditor5-react';
import classicEditor from '@ckeditor/ckeditor5-build-classic';

var Allvalueonfeild = [];
class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            name : '', 
            address: '',
            profile : '',
            editorData: '',
            ListArray : null
        };
      }
  handleSubmit(){
        console.log("hi");
        Allvalueonfeild.push({
             'name' :    this.state.name , 
             'address' : this.state.address,
             'profile': this.state.profile,
             'editor' : this.state.editorData
        })
        this.setState({
            ListArray : Allvalueonfeild ,
            name : '',
            address :'',
            profile:'',
            editor:''
        });
     }
     updateDataValue(e,index){
       console.log("_+++++",index);
       console.log(this.state.ListArray);
       var item =  this.state.ListArray.findIndex(index);
       console.log(item, "iem");
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
 render() {
       console.log(this.state.ListArray)
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
                                data="<p>Hello from CKEditor 5!</p>"
                                onInit={ editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    this.setState( {
                                           editorData : data     
                                      })
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ editor => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ editor => {
                                    console.log( 'Focus.', editor );
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
                    updateValue = {this.updateDataValue.bind(this.index)}
                     />
                    :''}
               </div>
           </div>
      )
    }
  }


export default Home;