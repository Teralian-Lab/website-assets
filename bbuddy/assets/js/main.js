(function() {
    var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    var todaysDate = new Date();

    var todaysWeekday = weekdays[todaysDate.getDay()],
        todaysMonth = months[todaysDate.getMonth()],
        todaysDay = todaysDate.getDate().toString(),
        todaysDayFull = todaysDay.length == 1 ? "0" + todaysDay : todaysDay,
        todaysYear = todaysDate.getFullYear();

    var td = " as of " + todaysWeekday + ", " + todaysMonth + " " + todaysDayFull + ", " + todaysYear;   

    var mi = Math.ceil(11);
    var ma = Math.floor(19);
    var tc = Math.floor(Math.random() * (ma - mi + 1)) + mi;

    document.getElementById("attentionWrapTodaysDate").innerHTML = td;
    document.getElementById("attentionWrapTodaysCounter").innerHTML = tc;
})()