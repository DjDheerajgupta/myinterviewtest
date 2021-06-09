import React from "react";
class Find_even extends React.Component
{
  render()
  {
    var i=0;
    let a=[12,24,33,44,55,66,88
    ]
    for(i=0;i<=a.length;i++)
    {
      if(a[i]%2==0)
      {
        console.log(a[i])
      }
    }
    return(
      <div></div>
    )
  }
}
export default Find_even;