$(".protected-content").sociallocker({
    theme: "glass",
    text: {
header: "Enlaces Protegidos",
message: "Presiona el boton like para desbloquear los enlaces"
},
    locker: {
timer: 60
},
    buttons: {
        order: ["facebook-like"]
    },
    facebook: {
        appId: "493640178088282",
        like: {
            url: "https://www.facebook.com/hackFlixEs"
        }
    }
});
