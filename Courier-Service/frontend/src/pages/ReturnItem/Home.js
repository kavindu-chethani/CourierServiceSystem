import React, { Component } from 'react';
import axios from "axios";
import "../App.css";

export default class Home extends Component {
  constructor(props){
    super(props);

    this.state={
      posts:[]
    };

  }

componentDidMount(){
  this.retrivePosts();
}

retrivePosts(){
  axios.get("http://localhost:8100/posts").then(res=>{
if (res.data.success){
  this.setState({
    posts:res.data.existingPosts
  });

console.log(this.state.posts);

}
  });
}

  render() {
    return (
      <body>
      <div className= "container">
      

<p>RETURN ITEM MANAGEMENT</p>

<table className ="table">
  <div>
   <div>
      </div>
    </div>
  
<thead>
  <tr>
    <th scope="col">#</th>
    <th scope="col">returnitemid</th>
    <th scope="col">sellerid</th>
    <th scope="col">sellername</th>
    <th scope="col">sellercontatnumber</th>
    <th scope="col">customername</th>
    <th scope="col">customercontactnumber</th>
    <th scope="col">reason</th>
    <th scope="col">Action</th>
  </tr>
</thead>

<tbody>
  {this.state.posts.map((posts,index)=>(

<tr key={index}>
<th scope = "row">{index+1}</th>

<td>
  <a herf ={`/post/${posts._id}`} style={{textDecoration:'none'}}>
   {posts.returnitemid}
   </a>
   </td>   
<td>{posts.sellerid}</td>
<td>{posts.sellername}</td>
<td>{posts.sellercontatnumber}</td>
<td>{posts.customername}</td>
<td>{posts.customercontactnumber}</td>
<td>{posts.reason}</td>
<td>
  <a className="btn btn-warning" herf={`/edit/${posts._id}`}>
    <i className="fas fa-edit"></i>Edit
  </a>

  <a className="btn btn-danger" herf="#">
    <i className="far fa-trash-alt"></i>delete
  </a>
</td>
</tr>
  ))}
</tbody>
  </table>
  <button className="btn btn-success"><a herf ="/add" style={{textDecoration:'none',color:'white'}}>create new post</a></button>
  </div>
  </body>
    )
}
}
