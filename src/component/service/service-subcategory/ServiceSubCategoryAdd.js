import React, { Component } from 'react'
import '../../AddedForm.css'
import axios from 'axios'

export default class ServiceSubCategoryAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
               data : {
                title : '',
                serviceCategoryId : ''
               
            },

                body : {
              count : 0,
              index : 10
             },

             errors : {},
             options :[]
        }   
    }
    async componentDidMount() {
        const response = await axios.post('http://192.168.2.104:5000/api/service-category/list',this.state.body)
       
          const options = response.data.data.list
          
         this.setState({options})
         
    }
    
    
    titleChange = (event) =>{
        
        this.setState({ data : {...this.state.data, title : event.target.value}})
    }

    serviceCategoryIdChange = (event) =>{
        this.setState({ data : {...this.state.data,  serviceCategoryId : event.target.value}})
    }

    handleChange = async () =>{
        
        // let  body = {
        //     count : 0,
        //     index : 10
        //    }
        
        const response = await axios.post('http://192.168.2.104:5000/api/service-sub-category/add',{
            count : 0 ,
            index : 10,
            title : this.state.data.title,
            serviceCategoryId : this.state.data.serviceCategoryId
            
        })
        console.log(response)
        window.location = '/services/servicesubcategory'
    }
    render() {
        const { title} = this.state.data
        const {options} = this.state
    
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
                        <div className = 'form-group'>
                            <select className = 'form-control' name ='serviceCategoryId' value ={this.state.data.serviceCategoryId} onChange = {this.productCategoryIdChange}>
                            {options.map(option =>
                                <option key ={option.id} value = {option.id}>{option.title}</option>
                                )}
                            </select>
                        </div>
                    </form>  
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
