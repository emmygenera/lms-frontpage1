import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../customerIn/navbar/Navbar";
import Card from "./Card";
const FifthPage = () => {
    const [all, setAll] = React.useState(false);
    const All = () => {
        all ? setAll(false) : setAll(true);
    };
    return (
        <>
            <nav>
                <ul id="navul">
                    <li>
                        <Link to="" className="navlink">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="navlink">
                            / Courses
                        </Link>
                    </li>
                    <li>
                        <Link to="" className="navlink">
                            / View Courses
                        </Link>
                    </li>
                </ul>
            </nav>
            <h5 className="fw-bold pl-5">Courses List</h5>
            <div>
                <input type="search" className="ml-5" placeholder="input search text" />
                <input type="submit" className="btn-success border-0" value="search" style={{ padding: "3px" }} />
            </div>
            <ul id="navul" className="mt-3">
                <li>
                    <Link to="" className="navlink">
                        All Courses{" "}
                    </Link>
                </li>
                <li>
                    <Link to="" className="navlink">
                        | My Courses
                    </Link>
                </li>
            </ul>
            <div>
                <div className="d-flex flex-wrap mt-5" style={{ width: "80%", marginLeft: "30px" }}>
                    Category :
                    <Link className="categorylink" to="" onClick={All}>
                        All
                    </Link>
                    <Link className="categorylink" to="">
                        Category 1
                    </Link>
                    <Link className="categorylink" to="">
                        Category 2
                    </Link>
                    <Link className="categorylink" to="">
                        Category 3
                    </Link>
                    <Link className="categorylink" to="">
                        Category 4
                    </Link>
                    <Link className="categorylink" to="">
                        Category 5
                    </Link>
                    <Link className="categorylink" to="">
                        Category 6
                    </Link>
                    <Link className="categorylink" to="">
                        Category 7
                    </Link>
                    <Link className="categorylink" to="">
                        Category 8
                    </Link>
                    {all && (
                        <>
                            <Link className="categorylink" to="">
                                Category 9
                            </Link>
                            <Link className="categorylink" to="">
                                Category 10
                            </Link>
                            <Link className="categorylink" to="">
                                Category 11
                            </Link>
                            <Link className="categorylink" to="">
                                Category 12
                            </Link>
                            <Link className="categorylink" to="">
                                Category 13
                            </Link>{" "}
                        </>
                    )}
                </div>
                <div id="divdrop" className="dropdown float-end">
                    <button id="btndrop" class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Expand
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">
                            Action
                        </a>
                        <a class="dropdown-item" href="#">
                            Another action
                        </a>
                        <a class="dropdown-item" href="#">
                            Something else here
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-3" style={{ marginLeft: "30px" }}>
                Filter By instructor:
                <select className="ms-2 me-3">
                    <option value="" selected>
                        All
                    </option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
                Rating:
                <select className="ms-2">
                    <option value="" selected>
                        All
                    </option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
            <div className="container-fluid row mt-5">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
};

export default FifthPage;
