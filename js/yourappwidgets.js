/*******Web Traffic Graph********/

var webTraffic = document.getElementById("web-traffic").getContext("2d");
var webTrafficHourly = {
    labels : ["12AM", "1AM", "2AM", "3AM", "4AM", "5AM", "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM", "8PM", "9PM", "10PM", "11PM"],
    datasets : [
        {
            fillColor : "rgba(69,146,215,0.4)",
            strokeColor : "#369",
            pointColor : "#fff",
            pointStrokeColor : "#369",
            data : [15, 10, 4, 6, 6, 5, 4, 7, 8, 10, 15, 22, 25, 33, 31, 26, 23, 27, 26, 33, 35, 32, 29, 20]
        }
    ]
};

var webTrafficDaily = {
    labels : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    datasets : [
        {
            fillColor : "rgba(69,146,215,0.4)",
            strokeColor : "#369",
            pointColor : "#fff",
            pointStrokeColor : "#369",
            data : [200, 400, 200, 100, 200, 150, 150, 300, 250, 400, 250, 200, 175, 175, 240, 350, 400, 500, 350, 450, 550, 600, 500, 450, 650, 200, 200, 350, 300, 200, 450]
        }
    ]
};

var webTrafficWeekly = {
    labels : ["16-22","23-29","30-5","6-12","13-19","20-26","27-3","4-10","11-17","18-24","25-31"],
    datasets : [
        {
            fillColor : "rgba(69,146,215,0.4)",
            strokeColor : "#369",
            pointColor : "#fff",
            pointStrokeColor : "#369",
            data : [0,500,1000,750,1250,1750,1250,1500,1000,1500,2000]
        }
    ]
};

var webTrafficMonthly = {
    labels : ["January","February","March","April","May","June"],
    datasets : [
        {
            fillColor : "rgba(69,146,215,0.4)",
            strokeColor : "#369",
            pointColor : "#fff",
            pointStrokeColor : "#369",
            data : [2000,2200,3600,4900,5200,6120]
        }
    ]
};

var graphOptions = {
    bezierCurve: false,
    responsive: true,
    maintainAspectRatio: false
};

var currentWebTrafficGraph = new Chart(webTraffic).Line(webTrafficWeekly, graphOptions);

//Event listener for the switch
var webTrafficSwitch = document.getElementById('web-traffic-switch');
var hourSwitch = document.getElementById('hour3');
var dailySwitch = document.getElementById('day3');
var weeklySwitch = document.getElementById('week3');
var monthlySwitch = document.getElementById('month3');

webTrafficSwitch.addEventListener('click', function() {
    console.log("you are clicking the switch");
    currentWebTrafficGraph.destroy();
    if (hourSwitch.checked === true) {
        currentWebTrafficGraph = new Chart(webTraffic).Line(webTrafficHourly, graphOptions);
    } else if (dailySwitch.checked === true) {
        currentWebTrafficGraph = new Chart(webTraffic).Line(webTrafficDaily, graphOptions);
    } else if (weeklySwitch.checked === true) {
        currentWebTrafficGraph = new Chart(webTraffic).Line(webTrafficWeekly, graphOptions);
    } else {
        currentWebTrafficGraph = new Chart(webTraffic).Line(webTrafficMonthly, graphOptions);
    }
});



/*******Daily Traffic Graph********/

var dailyTraffic = document.getElementById("daily-traffic").getContext("2d");
var dailyTrafficData = {
    labels : ["Su","M","T","W","Th","F","Sa"],
    datasets : [
        {
            label: "Last Week",
            fillColor : "#69fff7",
            strokeColor : "#69fff7",
            data : [60,87,163,151,222,180,91]
        },
        {
            label: "Current Week",
            fillColor : "#4592d7",
            strokeColor : "#4592d7",
            data : [76,95,178,120,235,174,83]
        }
    ]
};


var dailyTrafficChart = new Chart(dailyTraffic).Bar(dailyTrafficData, {
    responsive: true,
    barValueSpacing: 10,
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].fillColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>"
});

document.getElementById('daily-traffic-legend').innerHTML = dailyTrafficChart.generateLegend();

/*******Mobile Users Graph********/

var mobileUsers = document.getElementById("mobile-users").getContext("2d");
var mobileUserData = [
    {
        value: 20,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Tablets"
    },
    {
        value: 17,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Phones"
    },
    {
        value: 63,
        color:"#4592d7",
        highlight: "#4DB2FF",
        label: "Desktop"
    },
    {
        value: 1,
        color:"#69fff7",
        highlight: "#69fff7",
        label: "Toaster"
    }
];

var mobileUsersChart = new Chart(mobileUsers).Doughnut(mobileUserData, {
    responsive: true,
    legendTemplate: "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"
});

document.getElementById('mobile-users-legend').innerHTML = mobileUsersChart.generateLegend();

/*********Message Widget************/

var $messageButton = $('#message-button');
var $userSearch = $('#user-search');
var $userMessage = $('#user-message');

var $errorMessage = $('<span>You haven\'t selected a user and/or the message field is blank!</span>');
var $successMessage = $('<span>The message has been sent!</span>');

var $messageHolder = $('<div id="message-notification"></div>');

var $mainHeader = $('#main-header');

$mainHeader.append($messageHolder);


$messageButton.click(function(event) {
    event.preventDefault();
    $messageHolder.empty();
    if ($userSearch.val() && $userMessage.val()) {
        $messageHolder.append($successMessage);
        $userSearch.val('');
        $userMessage.val('');
    } else {
        $messageHolder.append($errorMessage);
    }
    $messageHolder.show();
    $messageHolder.delay(2000).fadeOut();
    console.log("You clicked the send button");
});

//Exit button functionality
var $exitButton = $('.exit-icon');

$exitButton.click(function() {
    $(this).parent().hide();
});

/****************Member Search AutoComplete**********/
var userList = [
    {value: 'Lexy Lee', data: 'lexy.lee@example.com'},
    {value: 'Jad Limcaco', data: 'jad.limcaco@example.com'},
    {value: 'Dan Benoni', data: 'jad.limcaco@example.com'},
    {value: 'Ian Ben', data: 'ian.ben@example.com'},
    {value: 'Adam Vargas', data: 'adam.vargas@example.com'},
    {value: 'Mary Giovanetti', data: 'mary.giovanetti@example.com'},
    {value: 'Matt Lozano', data: 'matt.lozano@example.com'},
    {value: 'Megan Espinoza', data: 'megan.espinoza@example.com'},
    {value: 'Andrea Martinez', data: 'andrea.martinez@example.com'},
    {value: 'Pablo Gonzales', data: 'pablo.gonzales@example.com'}
];

$userSearch.autocomplete({
    lookup: userList,
    formatResult: function(suggestion, currentValue) {
        return suggestion.value + ', ' + suggestion.data;
    }
});

/**********Notifications Menu********/


var $notifications = $('#notifications-dropdown');
var $notificationsLink = $('.notifications-link');

$notificationsLink.click(function() {
    $notificationsLink.removeClass('green-dot');
    $notifications.toggle();
});

/*****************Settings Widget****************/
var $saveButton = $('#save-button');
var $cancelButton = $('#cancel-button');
var emailSwitch = document.getElementById('email-notification');
var publicSwitch = document.getElementById('set-public');
var $timeZone = $('#time-zone');
var $settingsForm = $('#settings-form');

var $savedMessage = $('<span>Your settings have been saved!</span>');
var $canceledMessage = $('<span>Your settings have been reverted to their previous saved state.</span>');

$settingsForm.submit(function(event) {
    event.preventDefault();
});

$saveButton.click(function() {
    console.log("you are clicking the save form button");
    localStorage.clear();
    var emailState = JSON.stringify(emailSwitch.checked);
    var publicState = JSON.stringify(publicSwitch.checked);
    var timeZoneValue = $timeZone.val();

    localStorage.setItem('emailState', emailState);
    localStorage.setItem('publicState', publicState);
    localStorage.setItem('timeZoneValue', timeZoneValue);

    $messageHolder.empty();
    $messageHolder.append($savedMessage);
    $messageHolder.show();
    $messageHolder.delay(2000).fadeOut();
});

$cancelButton.click(function() {
    $timeZone.val(localStorage.getItem('timeZoneValue'));
    emailSwitch.checked = JSON.parse(localStorage.getItem('emailState'));
    publicSwitch.checked = JSON.parse(localStorage.getItem('publicState'));

    $messageHolder.empty();
    $messageHolder.append($canceledMessage);
    $messageHolder.show();
    $messageHolder.delay(2000).fadeOut();
});

if(localStorage.getItem('timeZoneValue')) {
    $timeZone.val(localStorage.getItem('timeZoneValue'));
}
if(localStorage.getItem('emailState')) {
    emailSwitch.checked = JSON.parse(localStorage.getItem('emailState'));
}
if(localStorage.getItem('publicState')) {
    publicSwitch.checked = JSON.parse(localStorage.getItem('publicState'));
}
