
import { Link } from "react-router-dom";
const BookDetail = () => {

    return(
        <>
        <div className="text-2xl font-bold">
          Search my bookshelf
        </div>
        <input type="text" placeholder="Search ..." className="input input-bordered w-full max-w-xs" />
             <div className="overflow-x-auto w-full">
             <h3 className="card-title">Book detail</h3>
            <table className="table w-full">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51r6XIPWmoL._SX331_BO1,204,203,200_.jpg" alt="Movie" />
                </figure>
            <div className="card-body">
            <h2 className="card-title">Book name : The Arts of Teaching Children</h2>
            <p>By : By Irannor Jonh</p>
            <p>Test Your book details can be found in the Book details tab. Book details are sometimes called metadata. Both terms describe what will show your book's Amazon detail page. As most of these fields cannot be changed after you publish, we recommend you double check everything before submitting.</p>
            <div className="card-actions ">
        <button className="btn btn-primary"><Link to="#" className="link link-hover">Mark to read</Link></button>
    </div>
  </div>
</div>
        </table>
      </div>
     <div>
      <ul className="menu menu-vertical sm:menu-horizontal">
            <li><Link to={'/Dashboard'}>View aLL books</Link></li>
            
            <li><a>Remove</a></li>
        </ul>
        </div>
        </>
    )
}

export default BookDetail;