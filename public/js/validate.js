function validate() {

    if (document.reportForm.name.value == "") {
        alert("Please provide your name!");
        document.reportForm.name.focus();
        return false;
    }

    if (document.reportForm.email.value == "") {
        alert("Please provide your Email!");
        document.reportForm.email.focus();
        return false;
    }
    if (document.reportForm.monday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.monday.focus();
        return false;
    }
    if (document.reportForm.tuesday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.tuesday.focus();
        return false;
    }

    if (document.reportForm.thursday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.thursday.focus();
        return false;
    }
    if (document.reportForm.friday.value == "") {
        alert("Please provide your task done!");
        document.reportForm.friday.focus();
        return false;
    }
    if (document.reportForm.challenges.value == "") {
        alert("Please provide your task done!");
        document.reportForm.challenges.focus();
        return false;
    }


    return (true);
}
