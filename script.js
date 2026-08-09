document.getElementById("others").onchange = function () {
        if (this.value) {
            window.location.href = this.value;
        }
    };