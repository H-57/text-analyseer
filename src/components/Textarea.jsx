import React from "react";

import { useState } from "react";
import Button from "./Button";

export default function Textarea(props) {
  const [text, settext] = useState("this is text");

  const [newtext, setnewtext] = useState("text");

  const handeltext = (event) => {
    // console.log("hello")
    settext(event.target.value);
  };
  // const handelnewtext=(event)=>{
  //     // console.log("hello")
  //     setnewtext(event.target.value)
  // }
  const upcase = () => {
    setnewtext(text.toUpperCase());
  };
  const lwcase = () => {
    setnewtext(text.toLowerCase());
  };
  const clear = () => {
    settext("");
  };
  const cleartext = () => {
    setnewtext("");
  };

  const copy = () => {
    navigator.clipboard.writeText(newtext);
  };
  const extractUrls = () => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    setnewtext(text.match(urlRegex));
  };
  const extractEmails = () => {
    const emailRegex = /\b[A-Za-z0-9.+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    setnewtext(text.match(emailRegex));
  };
  const jsArray = () => {
    // Split the input string into an array of lines
    const lines = text.split("\n");

    // Remove any empty lines
    const nonEmptyLines = lines.filter((line) => line.trim().length > 0);

    // Wrap each non-empty line in the specified quote character and add a comma
    const arrayItems = nonEmptyLines.map((line) => `\`${line.trim()}\`,`);

    // Combine the array items into a single string with square brackets
    const outputString = `[${arrayItems.join("")}]`;

    // Return the resulting array string
    setnewtext(outputString);
  };

  return (
    <div className="container">
      <textarea
        value={text}
        className={`form-control my-3 ${props.theme} `}
        rows="10"
        onChange={handeltext}
        id="floatingTextarea2"
      ></textarea>
      <Button handel={upcase} text="UpperCase" />
      <Button handel={lwcase} text="LowerCase" />
      <Button handel={jsArray} text="js array converter" />
      <Button handel={extractUrls} text="Url's finder" />
      <Button handel={extractEmails} text="Email finder" />

      <Button handel={clear} text="clear" />
      <Button handel={cleartext} text="clear text" />
      <Button handel={copy} text="copy text" />
      <Button handel={props.func} text="mode change" />
      <textarea
        value={newtext}
        className={`form-control my-3 ${props.theme} `}
        rows="10"
        id="floatingTextarea3"
      ></textarea>
    </div>
  );
}
