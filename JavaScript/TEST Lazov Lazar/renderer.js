function Renderer() {

    var inputRead = $(".input")
    
    this.renderAll = function() {
        this.renderBtn();
    }

    this.renderTXT = function() {
        
    }


    this.renderBtn = function () {

        $("<input>").addClass("read").attr("type", "submit",).attr("value", "read").appendTo(inputRead);
        $("<input>").addClass("update").attr("type", "submit",).attr("value", "update").appendTo(inputRead);
        $("<input>").addClass("delete").attr("type", "submit",).attr("value", "delete").appendTo(inputRead);

        $('.delete').click(function () {
            $('.person1').hide();
        });

        $(".read").click(function(){
            $(".person1")
            .css("font-size", "20px").css("text-align", "center").appendTo(".info")
            .show(300);
        })

        $(".update").click(function(){
            $(".updateEvent").text("").show(300);
        })

        $(".update").click(function(){
            $(".update").val("").val("save").text("new values")
        })

        $(".update").click(function(){
            $("p").hide(300);
        })
    }
}