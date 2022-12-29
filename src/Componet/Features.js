import React from 'react';
// import PropTypes from 'prop-types';/
import Footer from './Footer';

function Features(props) {
    return (
        <>
            <h2 className="text-center pt-5">Features of TextBlend</h2>
            <Footer fotheme={props.FeaTheme} t1="Uppercase Conversion" d1="Our text analysis tool provides Functionality to convert any lowercase data into uppercase in just one click without any waiting time and delay." t2="LowerCase Conversion" d2="Our text analysis tool provides Functionality to convert any lowercase data into uppercase in just one click without any waiting time and delay." />

            <Footer fotheme={props.FeaTheme} t1="Capitalization of data" d1="Our text analysis tool provides Functionality to convert any data into capitalize formate. capitalize means every single world have starting latter in uppercase" t2="Word Counting" d2="Our text analysis tool allows you to count the number of sentences, words and characters present in your data in just one click." />
            <Footer fotheme={props.FeaTheme} t1="Extraspace Removing" d1="Our text analysis tool is make easy to remove extra spaces between words. just Copy, Paste and delete extra spaces in one click." t2="Browser Compatible" d2="Our text analysis tool works in any web browsers such as chrome,firefox,safari,opera.it suits to count characters in facebook,blog,books,excel document,pdf docuement,essays,etc."/>

        </>
    );
}

export default Features;