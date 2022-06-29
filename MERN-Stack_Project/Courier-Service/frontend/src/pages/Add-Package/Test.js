import React from 'react'

const Test = () => {

    function ValidateEmail(inputText){

        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(inputText.value.match(mailformat)) {

            alert("Valid email address!");
            document.form1.text1.focus();
            return true;

        }
        else {
            alert("You have entered an invalid email address!");
            document.form1.text1.focus();
            return false;
        }
}





  return (
    <div>

        <div class="mail">
        <h2>Input an email and Submit</h2>
        <form name="form1" action="#"> 
        <ul>
        <li><input type='text' name='text1'/></li>
        <li>&nbsp;</li>
        <li class="submit"><input type="submit" name="submit" value="Submit" onclick="ValidateEmail(document.form1.text1)"/></li>
        <li>&nbsp;</li>
        </ul>
        </form>
        </div>

    </div>
  )
}

export default Test