$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    // -----------------------

    var countNumMarkLists = $("ul.num-list").length - 1;
    var markNumListsIndex;
    var markNumListsItemIndex;
    var countNumItemsList;

    // -----------------------

    var triangleShapeCount = $(".sect-shape").length - 1;
    var triangleShapeIndex = 0;

    // ------------------------


    getTriangleSize();


    $(window).resize(function() {

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        getTriangleSize();

    });

    // ----------------------------------------------------------------

    $(function() {

        $("ul.num-list li").prepend("<span class='item-num'></span>");

        countNumMarkLists = $("ul.num-list").length - 1;

        // var markNumListsIndex;

        // var markNumListsItemIndex;

        // var countNumItemsList;

        for( markNumListsItemIndex = 0; markNumListsItemIndex <= countNumMarkLists; markNumListsItemIndex++ ) {

            countNumItemsList = $("ul.num-list:eq("+ markNumListsItemIndex +") li").length - 1;

            for( markListsItemIndex = 0; markListsItemIndex <= countNumItemsList; markListsItemIndex++) {

                $("ul.num-list:eq("+ markNumListsItemIndex +") li:eq("+ markListsItemIndex +") .item-num").text(markListsItemIndex + 1 + ") ");

            }

        }

    });

    // ----------------------------------------------------------------


    function getTriangleSize() {

        triangleShapeCount = $(".sect-shape").length - 1;

        triangleShapeIndex = 0;

        if( bodyWidth <= parseInt( $(".row").css("min-width") ) ) {

            bodyWidth = parseInt( $(".row").css("min-width") );

        }

        for( triangleShapeIndex = 0; triangleShapeIndex <= triangleShapeCount; triangleShapeIndex++ ) {

            $(".sect-shape:eq("+ triangleShapeIndex +") .triangle_left").css({
                "border-right-width": bodyWidth / 2 + "px"
            });

            $(".sect-shape:eq("+ triangleShapeIndex +") .triangle_right").css({
                "border-left-width": bodyWidth / 2 + "px"
            });

        }

    }


});
