import React from "react";
import Footer from "./Footer";
export default function FAQ(props){
  return (
    <>
    <h2 className="text-center pt-5">Frequently Asked Questions</h2>
            <Footer fotheme={props.FAQTheme} t1="What is a TextBlend?" d1="It is a tool that allows you to analyse a text by counting the number of sentences, words and characters present. It also provides Funtionality to convert your data as you want. Our online text analyser / word counter is easy to use and free of charge.." t2="Who can use it?" d2="It is aimed at any type of writer (author, journalist, student, etc.) who writes texts that are limited to a minimum and/or maximum number of words.This tool is so userfrindly so that any one take use this tool." />

            <Footer fotheme={props.FAQTheme} t1="How do I use it?" d1="Our text analyzer is easy to use. Simply copy/paste the text or type it into the input box, select the functionality you want . suppose you want to find total word , so click on Count word and you wil get your answer." t2="Why TextBlend Important?" d2="every day unreasonably massive amount of structured and unstructured data finds its way online, so people need to use this data but data is not well structured.so using our text analyser people can convert data in proper structure and can use this data." />
    </>
  );
}