'use strict';

(function ($) {

    var chkChecked=[],b_hourchange=false,b_daychange=false,b_weekchange=false,b_monthchange=false,apiData;

    function selectCurrency() {

        $.get($('#select_curr').val()).then(function (data) {
            apiData = data;
            $('.price-ask').each(function (ind, elem) {
                $('.checkbox').eq(ind).prop('checked',false);
                $(elem).html('$' + apiData.ask);

                b_hourchange = apiData.changes.price.hour < 0;
                $('.hour-change').eq(ind).html('<span>+</span>' + apiData.changes.price.hour + '$').toggleClass('txt-red', b_hourchange);

                b_daychange = apiData.changes.price.day < 0;
                $('.day-change').eq(ind).html('<span>+</span>' + apiData.changes.price.day + '$').toggleClass('txt-red', b_daychange);          

                b_weekchange = apiData.changes.price.week < 0;
                $('.week-change').eq(ind).html('<span>+</span>' + apiData.changes.price.week + '$').toggleClass('txt-red', b_weekchange);          

                b_monthchange = apiData.changes.price.month < 0;
                $('.month-change').eq(ind).html('<span>+</span>' + apiData.changes.price.month + '$').toggleClass('txt-red', b_monthchange); 
            });

        }, function () {
            console.log('Unknown error');
        });       
    }

    $(function () {
        $('#select_curr').niceSelect();        
        selectCurrency();
    });


    $(document).on('change', '#select_curr', selectCurrency);

    $(document).on('click', '.checkbox', function () {


        $('.checkbox').each(function (ind, elem) {
            chkChecked[ind]=$(elem).prop('checked');

            if (chkChecked[ind]) {
                b_hourchange = apiData.changes.percent.hour < 0;
                $('.hour-change').eq(ind).html('<span>+</span>' + apiData.changes.percent.hour + '%').toggleClass('txt-red', b_hourchange);

                b_daychange = apiData.changes.percent.day < 0;
                $('.day-change').eq(ind).html('<span>+</span>' + apiData.changes.percent.day + '%').toggleClass('txt-red', b_daychange);                

                b_weekchange = apiData.changes.percent.week < 0;
                $('.week-change').eq(ind).html('<span>+</span>' + apiData.changes.percent.week + '%').toggleClass('txt-red', b_weekchange);                

                b_monthchange = apiData.changes.percent.month < 0;
                $('.month-change').eq(ind).html('<span>+</span>' + apiData.changes.percent.month + '%').toggleClass('txt-red', b_monthchange);                

            } else {

                b_hourchange = apiData.changes.price.hour < 0;
                $('.hour-change').eq(ind).html('<span>+</span>' + apiData.changes.price.hour + '$').toggleClass('txt-red', b_hourchange);

                b_daychange = apiData.changes.price.day < 0;
                $('.day-change').eq(ind).html('<span>+</span>' + apiData.changes.price.day + '$').toggleClass('txt-red', b_daychange);                

                b_weekchange = apiData.changes.price.week < 0;
                $('.week-change').eq(ind).html('<span>+</span>' + apiData.changes.price.week + '$').toggleClass('txt-red', b_weekchange);                

                b_monthchange = apiData.changes.price.month < 0;
                $('.month-change').eq(ind).html('<span>+</span>' + apiData.changes.price.month + '$').toggleClass('txt-red', b_monthchange);   

            }           
        });

    });


})(jQuery);