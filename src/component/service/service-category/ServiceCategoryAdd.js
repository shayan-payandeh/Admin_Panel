import React, { Component } from 'react'
import '../../AddedForm.css'
import axios from 'axios'
export default class ServiceCategoryAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
               data : {
                id : '',
                title : '',
                
            },

                body : {
              count : 0,
              index : 10
             },

        }   
    }

    
    titleChange = (event) =>{
        
        this.setState({ data : {...this.state.data, title : event.target.value}})
    }
   
    handleChange = async () =>{
       
        const response = await axios.post('http://192.168.2.104:5000/api/service-category/add',{
            count : 0 ,
            index : 10,
            
            title : this.state.data.title,
            id : this.state.data.id
        })
      console.log(response)
      window.location = '/services/serviceCategory'
    }
    render() {
        const { title} = this.state.data
        return (
            <div className = 'wrapper'>
                <div className = "form-header"><p>مشخصات</p></div>
                <div className = "form-container">
                    <form className = 'form'>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder ='عنوان' 
                                name = 'title'
                                value = {title}
                                onChange = {this.titleChange}
                                />
                        </div>
                        
                        
                        
                    </form>  
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
