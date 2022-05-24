import React, { Component } from 'react'
import '../AddedForm.css'
// import * as getList  from '../service/getList'
import axios from 'axios'
export default class ProductLevelAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
               data : {
                // id : '',
                title : '',
                price : '',
                duration:30,
                sms:false,
                link : false,
                notification: false,
                instagram: false,
                telegram : false,
                imageCount: 5,
                update: 3,
                priority: 2
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

        }   
    }

    
    titleChange = (event) =>{
        
        this.setState({ data : {...this.state.data, title : event.target.value}})
    }
    priceChange = (event) =>{
        
        this.setState({ data : {...this.state.data, price : event.target.value}})
    }
  

    handleChange = async () =>{
       
        const response = await axios.post('http://192.168.2.104:5000/api/product-level/add',{
            count : 0 ,
            index : 10,
            title : this.state.data.title,
            price : this.state.data.price,
            duration : this.state.data.duration,
            sms : this.state.data.sms,
            link : this.state.data.link,
            notification : this.state.data.notification,
            instagram : this.state.data.instagram,
            telegram : this.state.data.telegram,
            imageCount : this.state.data.imageCount,
            update : this.state.data.update,
            priority : this.state.data.priority,
        })
      console.log(response)
      window.location = '/products/productlevel'
    }
    render() {
        const { title, datetime,price} = this.state.data
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
                                type="text" 
                                className="form-control" 
                                placeholder ='قیمت' 
                                name = 'price'
                                value = {price}
                                onChange = {this.priceChange}
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
                        {/* <div className="form-group">
                            <input
                                disabled
                                type="text" 
                                className="form-control" 
                                placeholder ='تاریخ'
                                name = 'date'
                                // value = {datetime.english}
                                // onChange = {this.datetimeenglishChange}
                                  />
                        </div> */}
                    </form>  
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
