import React, { useState } from 'react';
import Alert from './Alert';
import Proptypes from 'prop-types';
export default function Textform(prop) {

    // const textarea = document.getElementById('textarea');

    //useState varible 
    const [text, changeText] = useState("");//this is useState
    // const [totalword, changeTword] = useState('Total Word :') //this is useState
    const [message, changemessage] = useState({ mess: null, line: null, })//here we are giving null because we want to disappear alret after some second
    
    const toupper = () => {
        if (text.split('').filter((ele)=>{ return ele!==' ' &&  ele!=='\n'}).length === 0) {
            setmessage("warning", "Please Enter Text.");  
        }
        else {
            let str = text.toUpperCase();
            changeText(str);
            setmessage("success", "Coverted to UpperCase.");    
        }

    }
    const onChangehandler = (event) => {
        let str = event.target.value;
        changeText(str);
    }
    const tolower = () => {
        if (text.split('').filter((ele)=>{ return ele!==' ' &&  ele!=='\n'}).length === 0) {
            setmessage("warning", "Please Enter Text.");  
        }
        else{
            let str = text.toLowerCase();
            changeText(str);
            setmessage("success", "Coverted to LowerCase.");

        }
    }
    const capitalize = () => {
        if (text.split('').filter((ele)=>{ return ele!==' ' &&  ele!=='\n'}).length === 0) {
            setmessage("warning", "Please Enter Text.");  
        }else{

            const arr = text.toLowerCase().split(" ");
            
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
            }
            const str = arr.join(" ");
            changeText(str);
            setmessage("success", "Text Capitalized.");
        }

    }
    const wordcount = () => {
        if (text.split('').filter((ele)=>{ return ele!==' ' &&  ele!=='\n'}).length === 0) {
            setmessage("warning", "Please Enter Text.");  
        }
        else{

            //we use filter method to remove white space from array
            let arry = text.split(/\s+/).filter((ele)=>{ return ele.length!==0 &&  ele!=='\n'});//only count world & avoid whitespace and new line 
            console.log(arry);
            setmessage("success", `Total Word : ${arry.length}`)
        }
 
    }
    const removeSpace = () => {
        if (text.split('').filter((ele)=>{ return ele!==' ' &&  ele!=='\n'}).length === 0) {
            setmessage("warning", "Please Enter Text.");  
        }
        else{
            
            const arr = text.split(" ");
            let newarr = arr.filter((ele) => {
                return ele !== ''
            })
            changeText(newarr.join(' '))
            setmessage("success", "ExtraSpace Removed.")
        }
    }
    const clear = () => {
        changeText("");
        setmessage("success", "Text Cleared.")
    }

    const pasteText = () => {
        navigator.clipboard.readText().then((clipText) => {
            changeText(text +" "+ clipText)
        }); 
    }
    const copyText = () => {
        // textarea.select();
        navigator.clipboard.writeText(text);
        setmessage("success", "Copied to Clipborad.")
    }


    //we change the value of changemessage using setmessage function
    const setmessage = (mess, line) => {
        changemessage({
            mess: mess,
            line: line,
        })
        //here we assign null value so the alert automatic disappear
        setTimeout(() => {
            changemessage({
                mess: null,
                line: null,
            })
        }, 1350)
    }
    return (
        <>
            <div className=" pe-5 ps-5 pt-5">
                <h4>{prop.heading}</h4>
                <br />
                <textarea className="form-control" rows="12" id="textarea" value={text} onChange={onChangehandler} style={{ backgroundColor: prop.textTheme.color === 'black' ? '#ECF0F1' : '#424949', color: prop.textTheme.color === 'black' ? 'black' : '#ECF0F1' }}></textarea>

                <div className='.container-fluid'>

                    {/* <textarea className="form-control mt-3 mb-3" rows="1" id="textarea" value={totalword} onChange={anothing} style={{ backgroundColor: prop.textTheme.color === 'black' ? 'white' : '#424949', color: prop.textTheme.color === 'black' ? 'black' : 'white' }}></textarea> */}

                    <Alert msg={message} />

                </div>
                <div className='.container-fluid '>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={toupper} >Uppercase</button>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={tolower}>Lowercase</button>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={capitalize}>Capitalize</button>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={wordcount}>Count World</button>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={removeSpace}>Remove ExtraSpace</button>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={copyText} id="liveAlertBtn">Copy</button>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={pasteText}>Paste</button>
                    <button type="button" className={`btn btn-${prop.textTheme.color === 'black' ? 'success' : 'primary'} my-2 mr-3`} onClick={clear}>Clear</button>
                </div>

            </div>
        </>
    );
}
Textform.defaultProps = {
    heading: 'Set Heading'
}
Textform.prototype = {
    heading: Proptypes.string.isRequired,
}
// http://192.168.137.1:3000