import React from "react";
class Repeat_no extends React.Component
{
    render()
    {
        let total_no=[3,4,5,1,2,3]
        for(var i=0;i<=total_no.length;i++)
        {
            for(var j=i+1;j<=total_no.length;j++)
            {
                if(total_no[i]==total_no[j])
                {
                    console.log(total_no[i]);
                }
            }
        }
        return(
            <div></div>
        )
    }
}
export default Repeat_no