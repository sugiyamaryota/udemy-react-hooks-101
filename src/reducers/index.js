//action = {
// type:'CREATE_EVENT',
// title: 'test'
// body: 'hogehoge'
//}
/* before
  state=[]
  state= [
    {id:1,title:'hoge',body:'hoge'},
    {id:2,title:'hoge',body:'hoge'},
    {id:3,title:'hoge',body:'hoge'}
  ]
  after
  state= [
    {id:1,title:'hoge',body:'hoge'},
    {id:2,title:'hoge',body:'hoge'},
    {id:3,title:'hoge',body:'hoge'},
    {id:4,title:'hoge',body:'hoge'}
  ]
*/
const events = (state=[],action) => {
  switch(action.type){
    case 'CREATE_EVENT':
      const  event = {title: action.title,body:action.body}
      const length = state.length
      const id = length === 0 ? 1 : state[length - 1].id+1
    return [...state,{id,...event}]
    case 'DELETE_EVENT':
      return state.filter(event => event.id !== action.id)
    case 'DELETE_ALL_EVENTS':
      return []
    default:
        return state
  }
}

export default events