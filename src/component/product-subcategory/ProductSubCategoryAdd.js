import React, { Component } from 'react'
import '../AddedForm.css'
// import * as getList  from '../service/getList'
import axios from 'axios'

export default class ProductSubCategoryAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
               data : {
                title : '',
                productCategoryId : ''
               
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
        const response = await axios.post('http://192.168.2.104:5000/api/product-category/list',this.state.body)
       
          const options = response.data.data.list
          
         this.setState({options})
         
    }
    

    // schema = {
    //     title : Joi.string().required()
    // }

    // validate = () =>{
    //     const result = Joi.validate(this.state.data, this.schema, {abortEarly : false})
    //     console.log(result)
    //     if(!result.error) {
    //         this.handleChange()
    //     }
    //     else{
    //     const errors = {};
    //     for(let item of result.error.details){
    //            errors[item.path[0]] = 'فقط حروف '
    //            this.setState({errors})
    //        }
           
    //     }
    // }
    
    titleChange = (event) =>{
        
        this.setState({ data : {...this.state.data, title : event.target.value}})
    }

    productCategoryIdChange = (event) =>{
        this.setState({ data : {...this.state.data,  productCategoryId : event.target.value}})
    }

    handleChange = async () =>{
        
        // let  body = {
        //     count : 0,
        //     index : 10
        //    }
        
        const response = await axios.post('http://192.168.2.104:5000/api/product-sub-category/add',{
            count : 0 ,
            index : 10,
            title : this.state.data.title,
            productCategoryId : this.state.data.productCategoryId
            
        })
        console.log(response)
        window.location = '/products/productsubcategory'
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
                            <select className = 'form-control' name ='productCategoryId' value ={this.state.data.productCategoryId} onChange = {this.productCategoryIdChange}>
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
