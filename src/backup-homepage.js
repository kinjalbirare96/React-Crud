import React from 'react';
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
    componentDidMount(){
        const script = document.createElement("script");

        script.src = "https://cdn.firebase.com/js/client/1.0.17/firebase.js";
        script.async = true;

        document.body.appendChild(script);
    }
    handleOnchangeName(event){
       console.log("event" ,event.target.value)
       this.setState({
        name : event.target.value
       })
    }
    handleOnchangeAddress(event){
        this.setState({
            address : event.target.value
           })
    }
    handleOnchangefile(event){
        this.setState({
            profile : event.target.value
           })
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
                           <input type = "text"  name = "name"  onChange = {this.handleOnchangeName.bind(this)} value = {this.state.name} />
                     </div>
                     <div className = "form-row">
                           <label> Address : </label> 
                           <textarea row= "5" name = "Address"  onChange = {this.handleOnchangeAddress.bind(this)}  value = {this.state.address} />
                     </div>
                     <div className = "form-row">
                           <label> Profile-pic : </label> 
                            <div className = "file-container"> 
                                <input type = "file" name = "file"  onChange = {this.handleOnchangefile.bind(this)}  value = {this.state.profile}/>
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
                           <input type = "button" className = "btn" onClick = {this.handleSubmit.bind(this)}/>
                     </div>
                      
                 </form>
               </div>
           </div>
      )
    }
  }


export default Home;