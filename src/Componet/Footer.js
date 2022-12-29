import React from "react";

export default function Footer(props) {
    return (
        <>
            <div className=".container-fluid ps-5 pe-5 pt-3" style={props.fotheme}>

                <div className="row align-items-md-stretch">
                    <div className="col-md-6 my-4 ">
                    <div className={`h-100 p-3 border rounded-3 text-${props.fotheme.color==='black'?'dark':'light'} border-secondary`}>
                            <h3 className="my-3">{props.t1}</h3>
                            <p>{props.d1}</p>
                        </div>
                    </div>
                    <div className="col-md-6 my-4">
                        <div className={`h-100 p-3 border rounded-3 text-${props.fotheme.color==='black'?'dark':'light'} border-secondary`}>
                            <h3 className="my-3">{props.t2}</h3>
                            <p>{props.d2}</p>
                        </div>
                    </div>
                </div>
                {/* use text-light for white text */}

                <footer className={`pt-3 mt-4 text-${props.fotheme.color==='black'?'muted':'light'} border-top`}>
                    {props.copyright}
                </footer>
            </div>
        </>
    );
}