document.addEventListener('DOMContentLoaded', function() {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    
    function init() {
        let date = new Date();
        let currentMonth = monthNames[date.getMonth()];
        document.getElementById('month-display').innerHTML = `${currentMonth} ${date.getFullYear()}`;
    }

    init();
});