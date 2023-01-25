const alertBanner = document.getElementById("alert");
const dropdown = document.getElementById("notification-dropdown");
const notificationBell = document.getElementById("notification-bell");

dropdown.style.display = 'none';
notificationBell.addEventListener('click',e =>{
    if(dropdown.style.display === 'none'){
        dropdown.style.display = '';
    }else{
        dropdown.style.display = 'none';
    }
})

alertBanner.innerHTML = `<div class="alert-banner">
<p><strong>Alert:</strong> You have unread messages</p>
<p class="alert-banner-close">x</p>
</div>`
alertBanner.addEventListener('click', e => {
    const close = e.target
    if (close.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none"
    }
    });

const trafficCanvas = document.getElementById("traffic-chart");
let hourlyTrafficData = {
    labels: ["00-02", "03-05", "06-08", "09-11", "12-14", "15-17","18-20","21-23"],
    datasets: [{
    data: [2000, 1050, 1600, 1750, 750, 950, 1100, 675, 150],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
    }]
    };
    
let dailyTrafficData = {
    labels: ["00-04", "05-08", "09- 12", "13-16", "17-20", "21-24","25-28","29-31"],
    datasets: [{
    data: [ 5100, 2660, 5000, 5425, 7600, 4050, 1500,
    2500],
    backgroundColor: 'rgba(116,119,191,.3)',
    borderWidth: 1,
    }]
};
let weeklyTrafficData = {
    labels: ["0-7", "8-14", "15-21", "22-28", "28-31"],
    datasets: [{
    data: [ 15100, 12660, 14000, 9425, 27600, 13050,],
    backgroundColor: 'rgba(116,119,191,.3)',
    borderWidth: 1,
    }]
};
let monthlyTrafficData = {
    labels: ["Jan","Feb", "Mar", "Apr", "May", "Jun","July","Aug","Sep","Oct","Nov","Dec"],
    datasets: [{
    data: [ 85100, 62660, 55050, 85425, 70600, 40050, 101500,
    92500, 63050, 87600, 75000, 110555],
    backgroundColor: 'rgba(116,119,191,.3)',
    borderWidth: 1,
    }]
};


    let TrafficOptions = {
        backgroundColor: 'rgba(112, 104, 201, .5)',
        fill: true,
        aspectRatio: 2.5,
        animation: {
        duration: 0
        },
        scales: {
        y: {
        beginAtZero: true
        }
        },
        plugins: {
        legend: {
        display: false
        }
        }
        };

        let trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: hourlyTrafficData,
            options: TrafficOptions
            });

const trafficNav = document.getElementsByClassName('traffic-nav-link');
for(let i=0;i < trafficNav.length; i++){
trafficNav[i].addEventListener('click', e => {
    if(e.target.classList !== 'active'){
        for(let i=0; i < trafficNav.length; i++){
            trafficNav[i].className = 'traffic-nav-link'
        }
        e.target.className = 'traffic-nav-link active'
    }
    if(e.target.textContent === 'Hourly'){
            trafficChart.destroy()
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: hourlyTrafficData,
            options: TrafficOptions
            });
    }else if(e.target.textContent === 'Daily'){
            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: dailyTrafficData,
            options: TrafficOptions
            });
    }else if(e.target.textContent === 'Weekly'){
            trafficChart.destroy();
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: weeklyTrafficData,
            options: TrafficOptions
            });
    }else if(e.target.textContent === 'Monthly'){
            trafficChart.destroy();    
            trafficChart = new Chart(trafficCanvas, {
            type: 'line',
            data: monthlyTrafficData,
            options: TrafficOptions
            });
    }

})
}
const dailyCanvas = document.getElementById("daily-chart");

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
    }]
    };
    const dailyOptions = {
    scales: {
    y: {
    beginAtZero: true
    }
    },
    plugins: {
    legend: {
    display: false
    }
    }
    };

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
        });


const mobileCanvas = document.getElementById("mobile-chart");

const mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
    '#7477BF',
    '#78CF82',
    '#51B6C8'
    ]
    }]
    };

    const mobileOptions = {
        aspectRatio: 1.9,
        plugins: {
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 20,
                    fontStyle: 'bold'
                }
            }
        }
    };

let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
    });


const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

send.addEventListener('click', () => {
    user.textContent = '';
    message.textContent = '';
    if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending");
    } else if (user.value === "" ) {
    alert("Please fill out user field before sending");
    } else if (message.value === "" ) {
    alert("Please fill out message field before sending");
    } else {
    alert(`Message successfully sent to: ${user.value}`);
    }
    });

let saveBtn = document.getElementById('save');
let cancelBtn = document.getElementById('cancel');
let toggle = document.querySelectorAll('input[type=checkbox]');
let timezone = document.getElementById('timezone');

function save(){
    for(let i=0;i<toggle.length;i++){
        localStorage.setItem("checkbox"+[i+1], toggle[i].checked);
    }
    localStorage.setItem("timezone",timezone.value)
}
function load(){
    for (let i = 0; i < toggle.length; i++) {
        localStorage.getItem("checkbox"+[i+1])
        if(localStorage.getItem("checkbox"+[i+1]) === "true"){
                toggle[i].checked = true;
            }
    }
    timezone.value = localStorage.getItem('timezone');
}
saveBtn.addEventListener('click',()=>{
    save();
})
cancelBtn.addEventListener('click',()=>{
    for (let i = 0; i < toggle.length; i++) {
         localStorage.removeItem("checkbox"+[i+1]);
    }
    localStorage.removeItem('timezone')
    location.reload();
})
document.addEventListener('load',load());