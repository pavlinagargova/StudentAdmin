document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    // Home & Details Pages
    loadStudents();

    // Student Picture
    $('#camera-btn').click(getPicture);
    $("#addPicture").click(sendPictureRequest);
}

