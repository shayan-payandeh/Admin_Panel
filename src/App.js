import React from 'react'
import './App.css'
import Main from './component/Main'
import {Route, Switch} from 'react-router-dom'
import Sidebar from './component/Sidebar'

// import UserList from './component/UserList'
// import AddForm from './component/AddForm'
// import UpdateForm from './component/UpdateForm'

import Province from './component/province/ProvinceList'



import ProductList from './component/product/ProductList'
import ProductUpdate from './component/product/ProductUpdate'



import ProductLevelList from './component/product-level/ProductLevelList'
import ProductLevelAdd from './component/product-level/ProductLevelAdd'
import ProductLevelUpdate from './component/product-level/ProductLevelUpdate'



import ProductCategoryList from './component/product-category/ProductCategoryList'
import ProductCategoryAdd from './component/product-category/ProductCategoryAdd'
import ProductCategoryUpdate from './component/product-category/ProductCategoryUpdate'



import ProductSubCategoryList from './component/product-subcategory/ProductSubCategoryList'
import ProductSubCategoryAdd from './component/product-subcategory/ProductSubCategoryAdd'
import ProductSubCategoryUpdate from './component/product-subcategory/ProductSubCategoryUpdate'



import ShopList from './component/shop/ShopList'



import ShopActivityList from './component/shop-activity/ShopActivityList'
import ShopActivityUpdate from './component/shop-activity/ShopActivityUpdate'
import ShopActivityAdd from './component/shop-activity/ShopActivityAdd'


import ShopLevelList from './component/shop-level/ShopLevelList'
import ShopLevelAdd from './component/shop-level/ShopLevelAdd'
import ShopLevelUpdate from './component/shop-level/ShopLevelUpdate'



import ShopSellList from './component/shop-sell/ShopSellList'
import ShopSellAdd from './component/shop-sell/ShopSellAdd';
import ShopSellUpdate from './component/shop-sell/ShopSellUpdate';



import ServiceCategoryList from './component/service/service-category/ServiceCategoryList'
import ServiceCategoryAdd from './component/service/service-category/ServiceCategoryAdd'
import ServiceCategoryUpdate from './component/service/service-category/ServiceCategoryUpdate'



import ServiceSubCategoryList from './component/service/service-subcategory/ServiceSubCategoryList'
import ServiceSubCategoryAdd from './component/service/service-subcategory/ServiceSubCategoryAdd'
import ServiceSubCategoryUpdate from './component/service/service-subcategory/ServiceSubCategoryUpdate'



import ServiceList from './component/service/service/ServiceList'
import ServiceUpdate from './component/service/service/ServiceUpdate'


function App() {
  return (
    <React.Fragment>
      <Sidebar />
      
        <Switch>
          <Route exact path = '/' component ={Main} />

                        {/* ----------province----------- */}
          <Route exact path = '/province' component = {Province}/>



                         {/* -----------product---------- */}

          <Route exact path = '/products/product' component ={ProductList} />
          <Route exact path = '/products/productupdate/:name' component ={ProductUpdate} />

                         {/* -----------productlevel---------- */}
          <Route exact path = '/products/productlevel' component ={ProductLevelList} />
          <Route exact path = '/products/productlevel/:name' component ={ProductLevelUpdate} />
          <Route exact path = '/products/productleveladd' component ={ProductLevelAdd} />

                          {/* -----------productcategory---------- */}
          <Route exact path = '/products/productcategory' component ={ProductCategoryList} />
          <Route exact path ='/products/productcategoryadd' component ={ProductCategoryAdd} />
          <Route exact path ='/products/productcategoryupdate/:name' component ={ProductCategoryUpdate} />

                          {/* -----------productsubcategory---------- */}
          <Route exact path = '/products/productsubcategory' component ={ProductSubCategoryList} />
          <Route exact path ='/products/productsubcategoryAdd' component ={ProductSubCategoryAdd} />
          <Route exact path ='/products/productsubcategoryUpdate/:name' component ={ProductSubCategoryUpdate} />





                        {/* ----------shop sell----------- */}
                        <Route exact path = '/shopping/shopsell' component ={ShopSellList} />
          <Route exact path = '/shopping/shopsellupdate/:name' component ={ShopSellUpdate} />
          <Route exact path = '/shopping/shopselladd' component ={ShopSellAdd} />

                        {/* ----------shop level----------- */}
           <Route exact path = '/shopping/shoplevel' component ={ShopLevelList} />
           <Route exact path = '/shopping/shoplevelupdate/:name' component ={ShopLevelUpdate} />
           <Route exact path = '/shopping/shopleveladd' component ={ShopLevelAdd} /> 

                        {/* ----------shop activity----------- */}
           <Route exact path = '/shopping/shopactivity' component ={ShopActivityList} />
           <Route exact path = '/shopping/shopactivityupdate/:name' component ={ShopActivityUpdate} />
           <Route exact path = '/shopping/shopactivityadd' component ={ShopActivityAdd} /> 

                         {/* ----------shop----------- */}
          <Route exact path = '/shopping/shop' component ={ShopList} />




                          
                         {/* ----------servicecategory----------- */}
          <Route path ='/services/servicecategory' component ={ServiceCategoryList} />
          <Route path ='/services/servicecategoryadd' component ={ServiceCategoryAdd} />
          <Route path ='/services/servicecategoryupdate/:name' component ={ServiceCategoryUpdate} />

                         {/* ----------servicesubcategory----------- */}
          <Route path ='/services/servicesubcategory' component ={ServiceSubCategoryList} />
          <Route path ='/services/servicesubcategoryadd' component ={ServiceSubCategoryAdd} />
          <Route path ='/services/servicesubcategoryupdate/:name' component ={ServiceSubCategoryUpdate} />

                        {/* ----------servicesubcategory----------- */}
          <Route path ='/services/service' component ={ServiceList} />
          <Route path ='/services/serviceupdate/:name' component ={ServiceUpdate} />

                         {/* --------------------- */}
          {/* <Route exact path = '/category/:listname' component ={UserList} />
          <Route exact path ='/addform' component ={AddForm} />
          <Route exact path ='/addform/:name' component ={UpdateForm} /> */}
        </Switch>
     
    </React.Fragment>
  );
}

export default App;
