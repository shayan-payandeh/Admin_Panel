import React, { Component } from 'react'
import '../UserList.css'
// import * as getList from '../service/getList'
// import httpService from '../service/httpService'
import {Link} from 'react-router-dom'
import { faEdit , faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import Pagination from '../Pagination'
import Paginate from '../Paginate'
export class ProductSubCategoryList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items : [],
             pageSize : 5,
             currentPage : 1,
             itemsLength : 0,
             item : {}
            //  body : {
            //   count : 0,
            //   index : 10
            //  }

            // item : {
            //           id : '',
            //           title : '',
            //           datetime :{
            //               time : '',
            //               english : '',
            //               persian : ''
            //           }
            //      }
        }
    }

    async componentDidMount() {
      let  body = {
        count : 0,
        index : 10
       }

      const items = await axios.post('http://192.168.2.104:5000/api/product-sub-category/list',body)


      
        //-----------------------
        // console.log(items.data.data.totalCount)
        // console.log(items.data.data.list)
        // console.log(item.data)
        const response = items.data.data.list
        console.log(response)

      // -------------------
        const elements = await axios.post('http://192.168.2.104:5000/api/product-category/list',body) 
        const result = elements.data.data.list
         console.log(result)
         let x = []
         for(let item of response){
           for(let rslt of result){
             if(item.productCategoryId === rslt.id) x.push({...item, rslt}) 
           }
         }
        //--------------------- 
      
        //  this.setState({items : response , itemsLength : response.length})
        this.setState({items : x , itemsLength : response.length})
      
        
    } 

    handleDelete = async (item) =>{
      // const originalItems = this.state.items
      let x = window.confirm("???? ?????? ?????? ???????? ?????????? ????????????");
      if(x){
        const items = this.state.items.filter(i => i.id !== item.id)
        this.setState({items})
        // console.log(item.id)
          await axios.post('http://192.168.2.104:5000/api/product-sub-category/remove',item)
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
          <Link className = 'btnLink' to ='/products/productsubcategoryadd'><button className ='btn btn-success btn-sm btn-add'> <FontAwesomeIcon className ='icon' icon={faPlus} /> </button></Link>

          <div className = 'table-container'>
            <table className ="table table-striped">
              <thead className = "thead-dark">
                <tr>
                  <th scope="col">??????????</th>
                  <th scope="col">????????</th>

                  <th scope="col">????????</th>
                 
                  <th scope="col">??????????</th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                
                {items.map(item =>
                  <tr key={item.id} >
                    <td>{item.title}</td>
                    <td>{item.rslt.title}</td>
                    
                    <td>{item.datetime.time}</td>
                    <td>{item.datetime.english}</td>
                    
                    <td><button onClick = {() => this.handleDelete(item)} type="button" className="btn btn-outline-danger btn-sm">??????</button></td>
                    
                    {/* <td><Link to = {`/addform/${item.name}`}><FontAwesomeIcon className ='i' icon={faEdit} /></Link></td> */}

                    <td><Link to = {`/products/productsubcategoryUpdate/${item.title}`}><FontAwesomeIcon className ='icon' icon={faEdit} /></Link></td>
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

export default ProductSubCategoryList
