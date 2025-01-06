import React from 'react'
import { Link } from 'react-router'

const SideBar = () => {
  return (
    <>
    <Link to="/Dashboard/dashboard" className="side-bar-item">
        <i className="bi bi-graph-up"></i>
        <span className="side-bar-item-caption">Dashboard</span>
    </Link>
    <Link to="/Dashboard/customer/" className="side-bar-item">
        <i className="bi bi-graph-up"></i>
        <span className="side-bar-item-caption">Customer</span>
    </Link>

    <Link to="/Dashboard/create" className="side-bar-item">
        <i className="bi bi-people"></i>
        <span className="side-bar-item-caption">Create</span>
    </Link>

    <Link to="/dashboard/product/" className="side-bar-item">
        <i className="bi bi-list-nested"></i>
        <span className="side-bar-item-caption">Category</span>
    </Link>

    
</>
  )
}

export default SideBar
