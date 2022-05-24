import React, { Component } from 'react'
import '../../UserList.css'
// import * as getList from '../service/getList'
// import httpService from '../service/httpService'
import {Link} from 'react-router-dom'
import { faEdit , faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import Pagination from '../../Pagination'
import Paginate from '../../Paginate'
export class ServiceList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items : [],
             items2 : [],
             
             pageSize : 5,
             currentPage : 1,
             itemsLength : 0,
             item : {},
             item2 : {},
            //  body : {
            //   count : 0,
            //   index : 10
            //  }

            y :[]
        }
    }

    async componentDidMount() {
      let  body = {
        count : 0,
        index : 10
       }

      const items = await axios.post('http://192.168.2.104:5000/api/service/list',body)
      const items2 = await axios.post('http://192.168.2.104:5000/api/service/list',body)

        // console.log(items.data.data.totalCount)
        // console.log(items.data.data.list)
        // console.log(item.data)
        const response = items.data.data.list
        // console.log(response)

      // ----------find title of subcategory---------
        const elements = await axios.post('http://192.168.2.104:5000/api/service-sub-category/list',body) 
        const result = elements.data.data.list
        //  console.log(result)
         let x = []
         for(let item of response){
           for(let rslt of result){
             if(item.serviceSubCategoryId === rslt.id) x.push({...item, rslt}) 
           }
         }
         //---------find title of category-----------
        const elements2 = await axios.post('http://192.168.2.104:5000/api/service-category/list',body) 
        const result2 = elements2.data.data.list
        //  console.log(result)
         let y = []
         for(let item of response){
           for(let rslt2 of result2){
             if(item.serviceCategoryId === rslt2.id) y.push({...item, rslt2}) 
           }
         }
       
         this.setState({ y})
        //--------------------- 
      
         //this.setState({items : response , itemsLength : response.length})
        this.setState({items : x , itemsLength : response.length})
        
        
        
    } 

    handleDelete = async (item) =>{
      // const originalItems = this.state.items
      let x = window.confirm("از حذف این آیتم مطمئن هستید؟");
      if(x){
        const items = this.state.items.filter(i => i.id !== item.id)
        this.setState({items})
        // console.log(item.id)
          await axios.post('',item)
        // try {
        //   
  
        // } catch (error) {
        //   this.setState({items : originalItems})
        // }
        
      }
     else{
       return false
     }
    }

    handleChange = (page) =>{
      this.setState({currentPage : page})
    }
    
    render() {
       const items = Paginate(this.state.items, this.state.pageSize , this.state.currentPage)
       
      // const {items} = this.state
        return (
          <React.Fragment>
          {/* <Tab/> */}
          <Link className = 'btnLink' to ='/services/serviceadd'><button className ='btn btn-success btn-sm btn-add'> <FontAwesomeIcon className ='icon' icon={faPlus} /> </button></Link>

          <div className = 'table-container'>
            <table className ="table table-striped">
              <thead className = "thead-dark">
                <tr>
                  <th scope="col">عنوان</th>
                  
                  <th scope="col">ساعت</th>
                  <th scope="col">تاریخ</th>
                  <th scope="col">زیر دسته</th>
                  <th scope="col">دسته</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                
                {items.map(item =>
                  <tr key={item.id} >
                    <td>{item.title}</td>
                    <td>{item.datetime.time}</td>
                    <td>{item.datetime.english}</td>
                    <td>{item.rslt.title}</td>
                    <td>{this.state.y[0].rslt2.title}</td>
                    
                    
                    <td><button onClick = {() => this.handleDelete(item)} type="button" className="btn btn-outline-danger btn-sm">حذف</button></td>
                    
                    {/* <td><Link to = {`/addform/${item.name}`}><FontAwesomeIcon className ='i' icon={faEdit} /></Link></td> */}

                    <td><Link to = {`/services/serviceupdate/${item.title}`}><FontAwesomeIcon className ='icon' icon={faEdit} /></Link></td>
                  </tr>  
                )}
                 
               
                </tbody>
              </table>
              <Pagination
                totalItems = {this.state.itemsLength}
                pageSize = {this.state.pageSize}
                currentPage = {this.state.currentPage}
                onPageChange = {this.handleChange}
                />
            </div>
            
          </React.Fragment>
        );
    }
}

export default ServiceList
