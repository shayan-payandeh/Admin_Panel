import React, { Component } from 'react'
import '../AddedForm.css'
// import * as getList  from '../service/getList'
import axios from 'axios'
export default class ProductCategoryAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
               data : {
                // id : '',
                title : '',
                // datetime :{
                //     time : '',
                //     english : '',
                //     persian : ''
                // },
            },

                body : {
              count : 0,
              index : 10
             },

             errors : {}
                
        }   
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
    // datetimeChange = (event) =>{
    //     this.setState({ data : {...this.state.data, datetime : { ...this.state.data.datetime, time : event.target.value} }})
    // }

    // datetimeenglishChange = (event) =>{
    //     this.setState({ data : {...this.state.data, datetime : {...this.state.data.datetime, english : event.target.value} }})
    // }

    handleChange = async () =>{
        
        // let  body = {
        //     count : 0,
        //     index : 10
        //    }
        
        // const response = await getList.postList(this.state.data)
        // console.log(response)
        const response = await axios.post('http://192.168.2.104:5000/api/product-category/add',{
            count : 0 ,
            index : 10,
            title : this.state.data.title
            
        })
        // console.log(response)
        window.location = '/products/productcategory'
    }
    render() {
        const { title, datetime} = this.state.data
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
                        <div className="form-group">
                            <input 
                                disabled
                                type="text" 
                                className="form-control" 
                                placeholder ='ساعت' 
                                name = 'time'
                                // value = {datetime.time}
                                // onChange = {this.datetimeChange}
                               />
                        </div>
                        <div className="form-group">
                            <input
                                disabled
                                type="text" 
                                className="form-control" 
                                placeholder ='تاریخ'
                                name = 'date'
                                // value = {datetime.english}
                                // onChange = {this.datetimeenglishChange}
                                  />
                        </div>
                    </form>  
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
