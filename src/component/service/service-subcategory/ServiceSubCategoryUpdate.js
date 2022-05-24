import React, { Component } from 'react'
import '../../AddedForm.css'
import axios from 'axios'
export default class ServiceSubCategoryUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {


           item : {
                id : '',
                title : '',
                serviceCategoryId : '',
                serviceCategory : '',
                category : '',
               

           },

           options : [],

           body : {
            count : 0,
            index : 10
           }

        }

    }


    async componentDidMount() {

                //  --------------------------------------

        const itemTitle = this.props.match.params.name
        console.log(itemTitle)
        // const response = await getList.getList()
        const response  = await axios.post('http://192.168.2.104:5000/api/service-sub-category/list',this.state.body)

        // console.log(response.data.data.list)
        // const items = response.data.data.list
        const items = response.data.data.list
        const item = items.find(item => item.title === itemTitle)
        const id = item.id
        const title = item.title
        const serviceCategoryId  = item.serviceCategoryId
        // const time = item.datetime.time
        // const english = item.datetime.time.english

        //  --------------------------------------
        const result = await axios.post('http://192.168.2.104:5000/api/service-category/list',this.state.body)

        const options = result.data.data.list

        

                //  --------------------------------------
        const option = options.find(option => option.id === serviceCategoryId)
        console.log(option)
        const opt = option.title
                //  -------------------------------------
        this.setState({options})
        this.setState({ item : {...this.state.item,
                                id : id,
                                title : title ,
                                serviceCategory : serviceCategoryId,
                                serviceCategoryId : serviceCategoryId,
                                category : opt,
                                options : options
                                //  datetime : {...this.state.item.datetime ,
                                //                 time : time ,
                                //                 english : english}
                                            }
                                        })
    }



    titleChange = (event) =>{

        this.setState({ item : {...this.state.item, title : event.target.value}})
    }
    serviceCategoryIdChange = (event) =>{
        this.setState({ item : {...this.state.item, serviceCategoryId : event.target.value}})
    }
    handleChange = async () =>{
        const response = await axios.post('http://192.168.2.104:5000/api/service-sub-category/edit',{
            title : this.state.item.title,
            id: this.state.item.id,
            serviceCategoryId : this.state.item.serviceCategoryId,
            serviceCategory : this.state.item.serviceCategoryId
        })
        console.log(response)
        window.location = '/services/servicesubcategory'
    }
    render() {
        const { title} = this.state.item
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
                            <select className = 'form-control' name ='serviceCategoryId' value ={this.state.item.serviceCategoryId} onChange = {this.productCategoryIdChange}>
                                <option>{this.state.item.category}</option>
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
