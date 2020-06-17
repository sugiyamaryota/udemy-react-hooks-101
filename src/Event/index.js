import React from 'react'

const Event = ({event,dispatch}) => {
  const handleClickDeleteButton = () => {
    const id = event.id
    const result = window.confirm(`イベント(id=${id})を本当に削除しますか？`)
    if(result) dispatch({type:'DELETE_EVENT',id})
  }
  return (
    <tr>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button>
      </td>
    </tr>
  )
}

export default Event