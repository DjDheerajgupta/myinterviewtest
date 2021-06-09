import React,{Component} from "react";
export default class Read_Api extends React.Component{
    constructor()
    {
        super();
        this.state=
        {
            users:null
        }
    }
    componentDidMount()
    {
        fetch('https://my-json-server.typicode.com/typicode/demo/posts').then((response)=>
        {
            response.json().then((result=>{
               this.setState({
                   users:result
               })
            }))
        })
    }
    render()
    {
        return(
            <div>
                 <table>
                            <tr><th>id</th><th>title</th></tr>
                {
                    
                    this.state.users ?
                    this.state.users.map((list,i)=>
                    <div>
                       <tr><td>{list.id}</td><td>{list.title}</td></tr>
                       
                    </div>
                    )
                    :
                    null
                }
                </table>
            </div>
        )
    }
}