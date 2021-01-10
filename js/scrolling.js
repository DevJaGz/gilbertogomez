
function is_touch_device() {
    try {
        document.createEvent("TouchEvent");
        return true;
    } catch (e) {
        return false;
    }
}



var targetWidth = 720;
window.sr = ScrollReveal();
if ($(window).width() >= targetWidth) {

    sr.reveal('.MainText', {
        duration: 2000,
        origin: 'top',
        distance: '100px',
        // viewFactor: 0.5
    })
    sr.reveal('.nav-item', {
        duration: 2000,
        origin: 'bottom',
    })
    sr.reveal('.navbar-brand', {
        duration: 2000,
        origin: 'bottom',
    })
    sr.reveal('.CardImg', {
        duration: 5000,
        origin: 'right',
        opacity: 0
    })
    sr.reveal('.TuAliado', {
        duration: 5000,
        origin: 'rigth',
        distance: '100px'
    })
    sr.reveal('.ConExperiencia', {
        duration: 2000,
        origin: 'left',
        distance: '100px'
    })
    sr.reveal('.VerMas', {
        duration: 1000,
        origin: 'bottom',
        distance: '100px'
    })
    sr.reveal('.Content-titles', {
        duration: 2000,
        origin: 'bottom',
        distance: '100px'
    })

    sr.reveal('.Image', {
        duration: 2000,
        origin: 'bottom',
        distance: '100px'
    })
    // sr.reveal('.carousel-inner', {
    //     duration: 2000,
    //     origin: 'bottom',
    //     distance: '100px',
    //     delay: 500
    // })
    sr.reveal('.Li', {
        duration: 2000,
        origin: 'bottom',
        distance: '100px'
    })
    sr.reveal('.Prox', {
        duration: 2000,
        origin: 'bottom',
        distance: '200px',
        delay: 400
    })
    sr.reveal('.Facebook', {
        duration: 3000,
        origin: 'left',
        distance: '200px',
    })
    sr.reveal('.Youtube', {
        duration: 3000,
        origin: 'right',
        distance: '200px',
    })



}

sr.reveal('.MainText', {
    duration: 1000,
    origin: 'top',
    distance: '50px',
    // viewFactor: 0.5
})

sr.reveal('.MainName', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
})
sr.reveal('.TuAliado', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
})
sr.reveal('.ConExperiencia', {
    duration: 2000,
    origin: 'left',
    distance: '50px'
})

sr.reveal('.Content-titles', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
})

sr.reveal('.Image', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
})

sr.reveal('.carousel-inner', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px',
})
sr.reveal('.Li', {
    duration: 1000,
    origin: 'bottom',
    distance: '50px'
})
sr.reveal('.Prox', {
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
    delay: 200
})
sr.reveal('.Facebook', {
    duration: 1500,
    origin: 'left',
    distance: '100px',
})
sr.reveal('.Youtube', {
    duration: 1500,
    origin: 'right',
    distance: '100px',
})



if (is_touch_device() == false) {
    // SMOOTHCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}