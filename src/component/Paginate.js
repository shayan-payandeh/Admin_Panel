import _ from 'lodash'

export default function Paginate(totalItems, pageSize, currentPage) {
    const startIndex = (currentPage -1) * pageSize
    return _(totalItems).slice(startIndex).take(pageSize).value()   
}
