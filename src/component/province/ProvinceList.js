import React, { Component } from 'react'
import './ProvinceList.css'
// import * as getList from '../service/getList'
// import httpService from '../service/httpService'
import {Link} from 'react-router-dom'
import { faEdit , faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'

import Pagination from '../Pagination'
import Paginate from '../Paginate'

export class ProductList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             items : [],
             cities :[],
             province : ''
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
       
        // const items = await getList.getList()
        
        
        //-----------------------
        // console.log(items.data.data.totalCount)
        // console.log(items.data.data.list)
        // console.log(item.data)
       
        const items = await axios.post('http://192.168.2.104:5000/api/province/list',body)
        const response = items.data.data.list
        
        console.log(response)
        this.setState({items : response , itemsLength : response.length})
        // this.setState({items : items.data})
        
    } 

     provinceChange = async(event) =>{
        this.setState ({ province : event.target.value})
        let  body = {
            count : 0,
            index : 10
           }
    
        const items = await axios.post('http://192.168.2.104:5000/api/province/list',body)
        const response = items.data.data.list
        const towns = response.find(r => r.title === this.state.province)
        const cities = towns.cities
        this.setState({cities})
    }

    handleChange = (page) =>{
      this.setState({currentPage : page})
    }
    
    render() {
       //const items = Paginate(this.state.items, this.state.pageSize , this.state.currentPage)
       
      const {items, cities} = this.state
        return (
          <React.Fragment>
            {/* <Tab/> */}
            {/* <Link className = 'btnLink' to ='/productadd'><button className ='btn btn-success btn-sm btn-add'> <FontAwesomeIcon className ='icon' icon={faPlus} /> </button></Link> */}

            <div className="table-container">
              <form>
                <div className="form-row">
                  <div className="col-6">
                    <select className="form-control" value ={this.state.province} onChange = {this.provinceChange}>
                      <option>استان</option>
                      {items.map(item=>
                        <option key ={item.id}>{item.title}</option>
                        )}
                    </select>
                  </div>
                  <div className="col-6">
                    <select className="form-control">
                      <option>شهر</option>
                      {cities.map(city=>
                        <option key= {city._id}>{city.title}</option>
                        )}
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </React.Fragment>
        );
    }
}

export default ProductList
