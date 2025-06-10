import PagesLayouts from "../layouts/PagesLayouts"
import { Link } from "react-router"


const Landing = () => {
  return (
    <PagesLayouts>
        <h1>
            THE TEXT GOES HERE!
        </h1>
        <Link to="/">ClientSide</Link>
    </PagesLayouts>
  )
}

export default Landing