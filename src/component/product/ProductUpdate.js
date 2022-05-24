import React, { Component } from 'react'
import '../AddedForm.css'
// import * as getList  from '../service/getList'
import axios from 'axios'
export default class AddForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          

           item : {
                id : '',
                title : '',
                description :''
           },
           
           body : {
            count : 0,
            index : 10
           }
             
        }
        
    }
    
    async componentDidMount() {
        const itemTitle = this.props.match.params.name
        // const response = await getList.getList()
        const response  = await axios.post('http://192.168.2.104:5000/api/product/list',this.state.body)
         console.log(response)
        // console.log(response.data.data.list)
        // const items = response.data.data.list
        const items = response.data.data.list
        const item = items.find(item => item.title === itemTitle)
        const id = item.id
        const title = item.title
        const description = item.description
        this.setState({ item : {...this.state.item,
                                 id : id,
                                 title : title , 
                                 description : description
                                            }
                                        })
    }
    
    

    titleChange = (event) =>{
        
        this.setState({ item : {...this.state.item, title : event.target.value}})
    }
   
    descriptionChange = (event) =>{
        this.setState({ item : {... this.state.item , description : event.target.value}})
    }

    handleChange = async () =>{
        const response = await axios.post('http://192.168.2.104:5000/api/product/edit',{
            title : this.state.item.title,
            description : this.state.item.description,
            id: this.state.item.id
        })
        console.log(response)
        window.location = '/products/product'
    }
    render() {
        const { title, description} = this.state.item
        return (
           
            <div className = 'wrapper'>
            
                <div className = "form-header"><p>مشخصات</p></div>
                <div className = "form-container">
                    <form className = 'form'>
                        <div className="form-group">
                            <input 
                                disabled
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
                                placeholder ='توضیحات' 
                                name = 'description'
                                value = {description}
                                onChange = {this.descriptionChange}
                               />
                        </div>
                        
                    </form>    
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
