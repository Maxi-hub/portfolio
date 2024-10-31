import { Link } from "react-router-dom"


export const Title = () => {
  return (
    <div className="title center">
        <h1 className="title__name">Эмма Лебедева</h1>
        <Link to='/myhistory' className="history">моя история</Link>
    </div>
  )
}
