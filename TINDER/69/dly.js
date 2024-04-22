function clear_delay(e) {
    window.clearTimeout(e)
}
function run_loading_run_1(e) {
    timeoutID1 = window.setTimeout(run_loading_1, e)
}
function run_loading_1() {
    $(".thank_for_close, .run_loading_2").fadeIn();
    $(".main_review").hide()
}
function run_loading_run_2(e) {
    timeoutID2 = window.setTimeout(run_loading_2, e)
}
function run_loading_2() {
    $(".thank_for_close, .run_loading_2").hide();
    $(".run_loading_3, .li_run_loading_1, .li_run_loading_2").fadeIn()
}
function run_loading_run_3(e) {
    timeoutID3 = window.setTimeout(run_loading_3, e)
}
function run_loading_3() {
    $(".run_loading_3").hide();
    $(".run_loading_4, .li_run_loading_3").fadeIn()
}
function run_loading_run_4(e) {
    timeoutID3 = window.setTimeout(run_loading_4, e)
}
function run_loading_4() {
    $(".run_loading_4, .loading").hide();
    $(".li_run_loading_4, li_run_loading_5, .run_loading_5, .show_end").fadeIn()
}
$(function () {
    $(document).on("click", ".next", function (e) {
        e.preventDefault();
        $(this).parent().hide().next().fadeIn()
    });
    $(document).on("click", ".run_loading", function (e) {
        e.preventDefault();
        $(this).parent().hide().next().fadeIn();
        $(".step4 .loading").show();
        run_loading_run_1("2000");
        run_loading_run_2("2000");
        run_loading_run_3("2000");
        run_loading_run_4("2000")
    })
})
