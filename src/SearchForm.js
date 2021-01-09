import React from "react";
import "./SearchForm.css";

export default function SearchForm() {
    return (
        <div className="search-form">
            <form>
             <div className="row">
             <div className="col-6">
             <input type="Search" placeholder="Enter a city" className="form-control" />
             </div>
             <div className="col-3">
             <button type="submit" className="btn btn-primary">Submit</button>
             </div>
             </div>
            </form>
        </div>
    );
}