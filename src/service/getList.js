import httpService from './httpService'

// const api = 'https://jsonplaceholder.typicode.com/users'
 const api = 'http://192.168.1.116:5000/api/product-category/list'

export async function getList() {
    return await httpService.get(api)
}

export async function deleteList(id){
    return await httpService.delete(api + '/' + id)
}

export async function postList(item){
    return await httpService.post(api,{
        name : item.name,
        username : item.username,
        address : item.address
    })
}

// export async function postList(item){
//     return await httpService.post(api,{
//         title : item.title,
//         datetime.time : item.datetime.time,
//         datetime.english : item.datetime.english
//     })
// }

export default {
    getList,
    deleteList
}


