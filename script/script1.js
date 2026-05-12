
const openBtn = document.querySelector(".menuopen-btn");
const closeBtn = document.querySelector(".menuclose-btn");
const menu = document.querySelector(".mobnav-btns");
const menuLinks = document.querySelectorAll(".mobnav-btn");

// Open menu
openBtn.addEventListener("click", () => {
    menu.classList.remove("hidesec");
    openBtn.classList.add("hidesec");
    closeBtn.classList.remove("hidesec");
});

// Close menu (close button)
closeBtn.addEventListener("click", closeMenu);

// Close menu when clicking any link
menuLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Reusable function
function closeMenu() {
    menu.classList.add("hidesec");
    openBtn.classList.remove("hidesec");
    closeBtn.classList.add("hidesec");
}


// Rangoli Loading script 

    $(document).ready(function () {
        let lastElement = null;
        let prevColor = null;
        let selectedColor = '#fff';
        $('.color-code').click(function () {
            selectedColor = $(this).data('color');
        });
        $('.loadImg').click(function () {
            let file = $(this).data('src');
			console.log(file);
            $('#picture-container').css({
                "display": "flex",
            });
            $('#main-container').css({
                "display": "flex",
            });
            $('#toolbar').css("display", "flex");

            $('#picture-container').load(file, function () {
                lastElement = null;
                prevColor = null;
                $("#picture-container svg path, #picture-container svg rect, #picture-container svg circle, #picture-container svg polygon, #picture-container svg ellipse, #picture-container svg line, #picture-container svg polyline")
                    .on("click", function () {
						console.log(this);
                        prevColor = $(this).attr('fill');
                        if (!prevColor || prevColor == 'none') {
                            prevColor = "#000";
                        }
                        lastElement = $(this);
                        console.log($(this));
                        //$(this).attr('fill', selectedColor);
                        $(this).css('fill', selectedColor);
                    })
            })
        });
    });