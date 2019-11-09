        // Iraq Control should load in first instance
        $(document).ready(function () {
            $(".navbar-yemen").hide();
            $(".navbar-iraq").show();
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/iraq_control.html" class="map_frame"></iframe>';
        });

        // Load relevant html into iframe on click
        function load_iraq() {
            $(".navbar-yemen").hide();
            $(".navbar-iraq").show();
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/iraq_control.html" class="map_frame"></iframe>';
        };

        function load_yemen() {
            $(".navbar-iraq").hide();
            $(".navbar-yemen").show();
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/yemen_control.html" class="map_frame"></iframe>';

        };

        function load_iraq_control() {
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/iraq_control.html" class="map_frame"></iframe>';
        };

        function load_iraq_gov() {
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/iraq_health_care.html" class="map_frame"></iframe>';
        };

        function load_iraq_legit() {
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/iraq_legit.html" class="map_frame"></iframe>';
        };

        function load_yemen_control() {
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/yemen_control.html" class="map_frame"></iframe>';
        };

        function load_yemen_legit() {
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/yemen_legit.html" class="map_frame"></iframe>';
        };

        function load_yemen_gov() {
            document.getElementById("content").innerHTML =
                '<iframe type="text/html" src="maps/collapsed/yemen_health_care.html" class="map_frame"></iframe>';
        };


        // Current elements across 1. country 2. map data should be highlighted as active
        let navSection = document.getElementById("nav-section");
        let navCountry = navSection.getElementsByClassName("btn-country");
        let navMap = navSection.getElementsByClassName("active-map");


        for (let i = 0; i < navCountry.length; i++) {
            navCountry[i].addEventListener("click", function () {
                let current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        };

        for (let i = 0; i < navMap.length; i++) {
            navMap[i].addEventListener("click", function () {
                let currentMap = document.getElementsByClassName("mapinit");
                currentMap[0].className = currentMap[0].className.replace(" mapinit", "");
                this.className += " mapinit";
            });
        };