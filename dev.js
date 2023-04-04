
function yoyo() {
    var a = document.getElementById("dev").value;
    var b = document.getElementById("dev1").value;
    var c = document.getElementById("dev2").value;
    var d = document.getElementById("dev3").value;
    if (a == "") {//1
        alert(" FILL YOUR NAME ");
    }
    else {//1
        if ((a.search(/[a-z]+/) == -1) && (a.search(/[A-Z]+/) == -1)) {//2
            alert("you  have  entered number instead of your name ");
            return false;
        }
        else//2
        {
            if ((a.length < 3) || (a.length > 8)) {//3
                alert("name must be in 3-8 characters ");

            } else//3
            {
                if (b == "") {//4
                    alert(" FILL YOUR NUMBER ");
                }
                else //4
                {
                    if ((b.search(/[0-9]+/) == -1)) {//5
                        alert("you  have  entered characters instead of your number ");
                        return false;
                    }
                    else//5
                    {
                        if ((b.length < 10) || (b.length > 10)) {//6
                            alert("PHONE NUMBER IS INVALID");

                        }
                        else//6
                        {
                            if (c == "") {//7
                                alert(" FILL THE SUBJECT ");
                            }
                            else//7
                            {
                                if ((c.search(/[a-z]+/) == -1) && (c.search(/[A-Z]+/) == -1)) {//8
                                    alert("you  have  entered number instead of subject ");
                                    return false;
                                }
                                else//8
                                {
                                    if ((c.length < 5) || (c.length > 10)) {//9
                                        alert("subject must be in 5-10 characters ");
                                    }
                                    else//9
                                    {

                                        if (d == "") {//10
                                            alert(" FILL THE MESSAGE ");
                                        }
                                        else {//10
                                            if ((d.search(/[a-z]+/) == -1) && (d.search(/[A-Z]+/) == -1)) {//11
                                                alert("you  have  entered number instead of message ");
                                                return false;
                                            }
                                            else//11
                                            {
                                                if ((d.length < 5)) {//12
                                                    alert("message must be more than 5 characters ");

                                                }
                                                else {//12
                                                    alert("WE WILL CONTACT YOU AS SOON AS POSSIBLE");
                                                }
                                            }

                                        }


                                    }
                                }

                            }

                        }

                    }

                }

            }

        }

    }
}

