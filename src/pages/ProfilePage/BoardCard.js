import { Link } from "react-router-dom";
import cardDefaultImg from "./../../static/card-bg.png"


export default function Card({board}) {
    const link_count = board.link_data_aggregate.aggregate.count;
    return (
        <Link to="/board" className="mx-1 my-0 bg-gray-50 p-1 rounded-lg">
          <img className="w-full rounded-md" src={board.board_img}></img>
          <div className="relative bg-gray-50 sm:p-3 p-3 w-full">
              <span className="mt-1 text-lg leading-tight font-medium text-gray-700"> {board.board_name} </span>
              <span className="text-gray-500 right-0 float-right"> {link_count} links </span>
          </div>
        </Link>
    )
}
