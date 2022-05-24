import React from 'react'
import '../sidebar/css/style.css'
import './Sidebar.css'
import { Link} from 'react-router-dom'
import { faHome, faList, faSolarPanel, faMinus , faCartPlus, faCity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Sidebar() {
  
    return (
      <React.Fragment>
        <div className="sidebar-container">
        
          <div className="sidebar-logo"> 
            <FontAwesomeIcon className ='icon' icon={faSolarPanel} /> 
            <span>پنل مدیریت</span> 
          </div>

          <ul className="sidebar-navigation">
            <li>
              <Link to ='/' >
                <FontAwesomeIcon className ='icon' icon={faHome} /> 
                <span>صفحه اصلی</span>
                <div className = 'line'></div>
              </Link>
            </li>
           
            <li className ='category-list'>
                <FontAwesomeIcon className ='icon' icon={faList} /> 
                <span>مدیریت دسته بندی</span>

                <div className = 'line'></div>

                <ul className = 'sub-items'>
                    <li className = 'sub-item'><Link to ='/province'><FontAwesomeIcon className ='icon' icon={faCity} /><span>استان</span></Link></li>
                  

                    <li className = 'sub-item sub-items'><FontAwesomeIcon className ='icon' icon={faCartPlus} /><span>محصولات</span>
                      <ul className = 'sub-items sub-items2'>
                          <li className = 'sub-item2'><Link to ='/products/product' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Product</span></Link></li>
                          <li className = 'sub-item2'><Link to ='/products/productlevel' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Product Level</span></Link></li>
                          <li className = 'sub-item2'><Link to ='/products/productcategory' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span> Category</span></Link></li>
                          <li className = 'sub-item2'><Link to ='/products/productsubcategory' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Sub Category</span></Link></li>      
                      </ul>
                   </li>


                   <li className = 'sub-item sub-items'><FontAwesomeIcon className ='icon' icon={faCartPlus} /><span>فروشگاه</span>
                      <ul className = 'sub-items sub-items2 '>
                              <li className = 'sub-item2'><Link to ='/shopping/shop' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Shop</span></Link></li>
                              <li className = 'sub-item2'><Link to ='/shopping/shoplevel' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Shop Level</span></Link></li>
                              <li className = 'sub-item2'><Link to ='/shopping/shopsell' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Shop Sell</span></Link></li>
                              <li className = 'sub-item2'><Link to ='/shopping/shopactivity' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Shop Activity</span></Link></li>
                      </ul>
                   </li>


                    <li className = 'sub-item sub-items'><FontAwesomeIcon className ='icon' icon={faCartPlus} /><span>سرویس</span>
                      <ul className = 'sub-items sub-items2'>
                          <li className = 'sub-item2'><Link to ='/services/service' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Service</span></Link></li>
                          <li className = 'sub-item2'><Link to ='/services/servicecategory' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span>Category</span></Link></li>
                          <li className = 'sub-item2'><Link to ='/services/servicesubcategory' className = 'sub-item-link'><FontAwesomeIcon className ='icon' icon={faMinus} /> <span> Sub Category</span></Link></li>
                      </ul>
                   </li>

                </ul>

            </li>
          </ul>
          
        </div>
      </React.Fragment>
    );
}
