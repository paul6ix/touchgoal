function validate() {

    if (document.reportForm.name.value == "") {
        alert("Please provide your name!");
        document.reportForm.name.focus();
        document.reportForm.name.style.border = "2px solid #F02E46";
        return false;
    }
    if (document.reportForm.task.value == "") {
        alert("Please provide your name!");
        document.reportForm.task.focus();
        document.reportForm.task.style.border = "2px solid #F02E46";
        return false;
    }

    /* if (document.reportForm.email.value == "") {
         alert("Please provide your Email!");
         document.reportForm.email.focus();
         document.reportForm.email.style.border="2px solid #F02E46";
         return false;
     }*/
    if (document.reportForm.monday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.monday.focus();
        document.reportForm.monday.style.border = "2px solid #F02E46";
        return false;
    }
    if (document.reportForm.tuesday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.tuesday.focus();
        document.reportForm.tuesday.style.border = "2px solid #F02E46";
        return false;
    }
    if (document.reportForm.wednesday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.wednesday.focus();
        document.reportForm.wednesday.style.border = "2px solid #F02E46";
        return false;
    }
    if (document.reportForm.thursday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.thursday.focus();
        document.reportForm.thursday.style.border = "2px solid #F02E46";
        return false;
    }
    if (document.reportForm.friday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.friday.focus();
        document.reportForm.friday.style.border = "2px solid #F02E46";
        return false;
    }
    if (document.reportForm.challenges.value == "") {
        alert("Please provide your task done!");
        document.reportForm.challenges.focus();
        document.reportForm.challenges.style.border = "2px solid #F02E46";
        return false;
    }


    return (true);
}
