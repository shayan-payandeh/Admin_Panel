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
        // const response = await getList.getList()
        const response  = await axios.post('http://192.168.1.116:5000/api/product-category/list',this.state.body)
        // console.log(response)
        // console.log(response.data.data.list)
        // const items = response.data.data.list
        const items = response.data.data.list
        const item = items.find(item => item.title === itemTitle)
        const id = item.id
        const title = item.title
        const time = item.datetime.time
        const english = item.datetime.time.english

        this.setState({ item : {...this.state.item,
                                id : id,
                                 title : title , 
                                 datetime : {...this.state.item.datetime , 
                                                time : time , 
                                                english : english}
                                            }
                                        })
    }
    
    

    titleChange = (event) =>{
        
        this.setState({ item : {...this.state.item, title : event.target.value}})
    }
    datetimeChange = (event) =>{
        this.setState({ item : {...this.state.item, datetime : { ...this.state.item.datetime, time : event.target.value} }})
    }

    datetimeenglishChange = (event) =>{
        this.setState({ item : {...this.state.item, datetime : {...this.state.item.datetime, english : event.target.value} }})
    }

    handleChange = async () =>{
        const response = await axios.post('http://192.168.2.104:5000/api/api/product-category/edit',{
            title : this.state.item.title,
            id: this.state.item.id
        })
        console.log(response)
        window.location = '/products/productcategory'
    }
    render() {
        const { title, datetime} = this.state.item
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
                                placeholder ='ساعت' 
                                name = 'time'
                                value = {datetime.time}
                                onChange = {this.datetimeChange}
                               />
                        </div>
                        <div className="form-group">
                            <input
                                type="text" 
                                className="form-control" 
                                placeholder ='تاریخ'
                                name = 'date'
                                value = {datetime.english}
                                onChange = {this.datetimeenglishChange}
                                  />
                        </div>
                    </form>    
                    <button onClick = {this.handleChange} className = 'btn btn-sm btn-save'>ذخیره</button>
                </div>
            </div>
        )
    }
}
