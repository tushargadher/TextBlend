import React from "react";

function Alert(props) {
    const uppercase = (word) => {

        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    //if props.msg.mess have null value then alert is not shown so we return nothing 
    if (props.msg.mess === null) {
        return (
            <>
                   <div className="mt-3"style={{height:'70px'}}>

                   </div>
            </>
        );
    }
    else {
        return (
            <>
                <div  className="mt-3" style={{height:'70px'}}>
                    <div className={`alert alert-${props.msg.mess}`} role="alert">
                        <b>{uppercase(props.msg.mess)}</b>. {props.msg.line}
                    </div>
                </div>
            </>
        );
    }
}
export default Alert;