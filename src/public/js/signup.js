console.log("Signup frontend javascript file");

$(function(){
    const fileTarget = $(".file-box .upload-hidden");
     let filename;
     fileTarget.on("change", function(){
        if (window.FileReader) {
            const uploadFile = $(this)[0].files[0];
            const fileType = uploadFile['type'];
            const validImage = ["image/jpg","image/jpeg", "image/png"];
            if (! validImage.includes(fileType)) {
                alert( "please insert only jpg, jpeg, png")
            } else {
                if (uploadFile){
                    console.log(URL.createObjectURL(uploadFile));
                    $(".upload-img-frame")
                    .attr("src", URL.createObjectURL(uploadFile))
                    .addClass("Succes");
                }
                filename= $(this)[0].files[0].name
            }
            $(this).siblings(".upload-name").val(filename)
        }
     })
});

function validateSignUpForm(){
    const memberNick = $(".member-nick").val()
    const memberPhone = $(".member-phone").val()
    const memberPassword = $(".member-password").val()
    const confirmPassword = $(".confirm-password").val()
    
    if (memberNick === "" ||
        memberPhone ==="" ||
        memberPassword ==="" ||
        confirmPassword === ""
    ) {
        alert ("Please fill all inputs");
        return false
    }

    if (memberPassword !== confirmPassword){
        alert("CHECK PASSWORD");
        return false
    }

    const memberImage= $(".member-image").get(0).files[0]
    ? $ (".member-image").get(0).files[0].name
    : null;
    if (!memberImage) {
        alert("please insert image")
        return false
    }
}