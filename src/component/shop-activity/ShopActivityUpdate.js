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
               },

                body : {
              count : 0,
              index : 10
             },

        }   
    }

    async componentDidMount() {
        const itemTitle = this.props.match.params.name
       
        const response  = await axios.post('http://192.168.1.116:5000/api/shop-activity/list',this.state.body)
        const items = response.data.data.list

        const item = items.find(item => item.title === itemTitle)
        console.log(item)
        const id = item.id
        const title = item.title
        this.setState({ data : {...this.state.data,
                                 id : id,
                                 title : title , 
                                    }})
    }
    
    
    titleChange = (event) =>{
        
        this.setState({ data : {...this.state.data, title : event.target.value}})
    }
    

    handleChange = async () =>{
       
        const response = await axios.post('http://192.168.1.116:5000/api/shop-activity/edit',{
            count : 0 ,
            index : 10,
            id : this.state.data.id,
            title : this.state.data.title,
        })
      console.log(response)
      window.location = '/shopping/shoplevel'
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
