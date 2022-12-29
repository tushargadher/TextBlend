import React from "react";

export default function Devinfo(props) {
    return (
        <>
           <div className=".container-fluid pb-5 ps-5 pe-5 ">
            <footer className={`pt-3 mt-4 text-${props.fotheme.color === 'black' ? 'muted' : 'light'} border-secondary border-top`}>
                {props.copyright}
            </footer>
            </div>
        </>
    );
}