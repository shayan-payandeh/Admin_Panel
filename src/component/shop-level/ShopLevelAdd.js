import React, { Component } from 'react'
import '../AddedForm.css'
// import * as getList  from '../service/getList'
import axios from 'axios'
export default class ShopLevelAdd extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           
               data : {
                id : '',
                title : '',
                price : '',
                productCount: '',
                priorityCategory : 1,
                priorityMainPage : 2,
                mainPageBanner :true,
                socialMedia : false,
                sendSmsWhenDiscount : false,
                sendNotificationWhenDiscount : false,
                sendNotificationWhenRegisterShop  : false,
                sendNotificationAds : false,
                putLink : true,
                discount : false,
                duration : '',
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
    productCountChange = (event) =>{
        
        this.setState({ data : {...this.state.data, productCount : event.target.value}})
    }
    // socialMediaChange = (event) =>{
        
    //     this.setState({ data : {...this.state.data, socialMedia : event.target.value}})
    // }
  

    handleChange = async () =>{
       
        const response = await axios.post('http://192.168.1.116:5000/api/shop-level/add',{
            count : 0 ,
            index : 10,
            
            title : this.state.data.title,
            price : this.state.data.price,
            productCount : this.state.data.productCount,
            priorityCategory : this.state.data.priorityCategory,
            priorityMainPage : this.state.data.priorityMainPage,
            mainPageBanner : this.state.data.mainPageBanner,
            socialMedia : this.state.data.socialMedia,
            sendSmsWhenDiscount : this.state.data.sendSmsWhenDiscount,
            sendNotificationWhenDiscount : this.state.data.sendNotificationWhenDiscount,
            sendNotificationWhenRegisterShop  : this.state.data.sendNotificationWhenRegisterShop,
            sendNotificationAds : this.state.data.sendNotificationAds,
            putLink : this.state.data.putLink,
            discount : this.state.data.discount,
            duration : this.state.data.duration,
        })
      console.log(response)
      window.location = '/shopping/shoplevel'
    }
    render() {
        const { title, price, productCount} = this.state.data
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
                                type="text" 
                                className="form-control" 
                                placeholder ='تعداد' 
                                name = 'productCount'
                                value = {productCount}
                                onChange = {this.productCountChange}
                                />
                         </div>
                        
                        {/* <div className="form-group">
                            <input 
                                disabled
                                type="text" 
                                className="form-control" 
                                placeholder ='ساعت' 
                                name = 'time'
                                // value = {datetime.time}
                                // onChange = {this.datetimeChange}
                               />
                        </div>  */}
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
