import React, { Component } from 'react'
import '../AddedForm.css'
// import * as getList  from '../service/getList'
import axios from 'axios'
export default class productlevelUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          

           item : {
                id : '',
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
                priority: 2,
                datetime :{
                    time : '',
                    english : '',
                    persian : ''
                }
           },
           
           body : {
            
            count : 0,
            index : 10
           }
             
        }
        
    }
    
    async componentDidMount() {
        const itemTitle = this.props.match.params.name
       
        const response  = await axios.post('http://192.168.2.104:5000/api/product-level/list',this.state.body)
         
        const items = response.data.data.list

        const item = items.find(item => item.title === itemTitle)
        console.log(item)
        const id = item.id
        const price = item.price
        const title = item.title
        const time = item.datetime.time
        const english = item.datetime.time.english

        this.setState({ item : {...this.state.item,
                                 id : id,
                                 title : title , 
                                 price : price,
                                 datetime : {...this.state.item.datetime , 
                                                time : time , 
                                                english : english}
                                            }
                                        })
    }
    
    

    titleChange = (event) =>{
        
        this.setState({ item : {...this.state.item, title : event.target.value}})
    }
    priceChange = (event) =>{
        
        this.setState({ item : {...this.state.item, price : event.target.value}})
    }
   

    handleChange = async () =>{
        const response = await axios.post('http://192.168.2.104:5000/api/product-level/edit',{
            title : this.state.item.title,
            price : this.state.item.price,
            id: this.state.item.id
        })
        console.log(response)
        window.location = '/products/productlevel'
    }
    render() {
        const { title, price} = this.state.item
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
                        
                    </form>    
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
