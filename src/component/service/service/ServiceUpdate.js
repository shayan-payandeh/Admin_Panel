import React, { Component } from 'react'
import '../../AddedForm.css'
// import * as getList  from '../service/getList'
import axios from 'axios'
export default class ServiceUpdate extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          

           item : {
            serviceCategoryId: '',
            serviceSubCategoryId:' ',
            province: '',
            city: '',
            area: '',
            title: '',
            description: '',
            address: '',
            latitude: '',
            longitude: '',
            isRoundTheClock: false,
            linkWebsite:'' ,
            linkInstagram: '',
            linkTelegram:'' ,
            id: '',
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
       
        const response  = await axios.post('http://192.168.2.104:5000/api/service/list',this.state.body)
         
        const items = response.data.data.list

        const item = items.find(item => item.title === itemTitle)
        console.log(item)
        const id = item.id
        const title = item.title
        const serviceCategoryId = item.serviceCategoryId
        const serviceSubCategoryId = item.serviceSubCategoryId

        this.setState({ item : {...this.state.item,
                                 id : id,
                                 title : title , 
                                 serviceCategoryId : serviceCategoryId,
                                 serviceSubCategoryId : serviceSubCategoryId,
                                 
                                            }
                                        })

                                        
    }
    
    

    titleChange = (event) =>{
        
        this.setState({ item : {...this.state.item, title : event.target.value}})
    }

     subChange= (event) =>{
        
        this.setState({ item : {...this.state.item,  serviceSubCategoryId: event.target.value}})
    }

     catChange = (event) =>{
        
        this.setState({ item : {...this.state.item,  serviceCategoryId: event.target.value}})
    }
   

    handleChange = async () =>{
        const response = await axios.post('http://192.168.1.116:5000/api/service/edit',{
            serviceCategoryId : this.state.item.serviceCategoryId,
            serviceSubCategoryId : this.state.item.serviceSubCategoryId,
            province : this.state.item.province,
            city : this.state.item.city,
            area :  this.state.item.area,
            title :  this.state.item.title,
            description : this.state.item.description,
            address : this.state.item.address,
            latitude : this.state.item.latitude,
            longitude : this.state.item.longitude,
            isRoundTheClock :  this.state.item.isRoundTheClock,
            linkWebsite : this.state.item.linkWebsite ,
            linkInstagram : this.state.item.linkInstagram,
            linkTelegram : this.state.item.linkTelegram ,
            id : this.state.item.id
        })
        console.log(response)
        window.location = '/services/service'
    }
    render() {
        const { title, serviceSubCategoryId, serviceCategoryId} = this.state.item
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
                                placeholder ='sub' 
                                name = 'sub'
                                value = {serviceSubCategoryId}
                                onChange = {this.subChange}
                                />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder ='قیمت' 
                                name = 'price'
                                value = {serviceCategoryId}
                                onChange = {this.catChange}
                                />
                        </div>
                        
                    </form>    
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
