

function init(){
    // Select DOM Items
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const menuNav = document.querySelector('.menu-nav');
    const menuBranding = document.querySelector('.menu-branding');
    const navItems = document.querySelectorAll('.nav-item');

    // Set Initial State Of Menu
    let showMenu = false;

    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        if (!showMenu) {
            menuBtn.classList.add('close');
            menu.classList.add('show');
            menuNav.classList.add('show');
            menuBranding.classList.add('show');
            navItems.forEach(item => item.classList.add('show'));

            // Set Menu State
            showMenu = true;
        } else {
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');
            menuBranding.classList.remove('show');
            navItems.forEach(item => item.classList.remove('show'));

            // Set Menu State
            showMenu = false;
        }
    }

    $(".fa-instagram, .fa-file-alt, .fa-linkedin, .fa-github , .fa-id-card ").mouseover(function () {
        $(this).addClass("fa-spin")
    })
    $(".fa-instagram, .fa-file-alt, .fa-linkedin, .fa-github , .fa-id-card ").mouseleave(function () {
        $(this).removeClass("fa-spin")
    })

    printGraph();

}

//typed js



function printGraph(){
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: ["Account Management", "Tech Support", "Customer Satisfaction", "Social Media", "Communication", "Time Management", "Teamwork", "Negotiation"],
            datasets: [{
                label: 'Skills',
                data: [89, 93, 95, 85, 90, 93, 90, 95],
                backgroundColor: [
                    "#d58300",
                    "#e38e00",
                    "#f19900",
                    "#ffa500",
                    "#ffb11b",
                    "#ffbd2c",
                    "#ffc93b",
                    "#ffd93b"
                ],
                /* borderColor: [

                    'rgba(255, 159, 64, 1)'

                ], */

                borderWidth: 1
            }]
        },
        options: {
            legend: {
                display: false,
                labels: {
                    fontColor: 'white',
                    fontSize: 15,
                    fontStyle: "bold"
                }
            },

            scales: {
                xAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    }
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        fontColor: "white"
                    }
                }],
            }
        }
    });
}

// IDEA: Change language to the validate output

//   $("form#my-form").validate({
//     lang: 'en'
//   });
// });


$(document).ready(init);
