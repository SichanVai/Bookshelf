import React from 'react'
import {Link}  from 'react-router-dom'
export default function AlreadyRead() {
  return (
    <>
        <div className="text-2xl font-bold">
        Search my bookshelf
        </div>
        <input type="text" placeholder="Search ..." className="input input-bordered w-full max-w-xs" />
            <div className="overflow-x-auto w-full">
        <table className="table w-full">
        {/* head */}
        <thead>
            <tr className="text-1xl font-bold">
            <th>Book_Code</th>
            <th>Book_Title</th>
            <th>Author_By</th>
            <th>Average Rating</th>
            <th>Thumbnail</th>
            <th> Updated Status</th>
            </tr>
        </thead>
        <tbody>
            {/* row 1 */}
            <tr>
            <td>B_001</td>
            <td>The Arts of Teaching Children</td>
            <td><span className="badge badge-ghost badge-sm">Khun Jonh </span></td>
            <td>
                <span className="badge badge-ghost badge-sm">High </span>
                <br/>
                <span className=""> 
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </span>
            </td>
            <td>
                <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="h-24 w-24">
                    <Link to={'/socialCards'}>
                    <img role="button" 
                        src="https://images-na.ssl-images-amazon.com/images/I/51r6XIPWmoL._SX331_BO1,204,203,200_.jpg"
                        alt="Avatar Tailwind CSS Component" />
                        </Link>
                    </div>
                </div>
                </div>
            </td>
            <td>
                    <p style={{ color: 'red' }}>Read</p>
                </td>
            </tr>
            {/* row 3 */}
            <tr>
            <td>B_003</td>
            <td>Harry Potter and the Prisoner of Azkaban</td>
            <td><span className="badge badge-ghost badge-sm">J. K. Row </span></td>
            <td>
                <span className="badge badge-ghost badge-sm">High </span>
                <br/>
                <span className=""> 
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </span>
            </td>
            <td>
                <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="h-24 w-24">
                    <Link to={'/socialCards'}>
                    <img role="button" 
                        src="https://images-na.ssl-images-amazon.com/images/I/51IiQ4r35LL._SX345_BO1,204,203,200_.jpg"
                        alt="Avatar Tailwind CSS Component" />
                        </Link>
                    </div>
                </div>
                </div>
            </td>
            <td>
                    <p style={{ color: 'red' }}>Read</p>
                </td>
            </tr>
            </tbody>
        {/* foot */}
        </table>
    </div>

        </>
)
}
