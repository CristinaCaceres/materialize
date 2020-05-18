$(document).ready(function () {
    /* Autocompleta */
    $('input.autocomplete').autocomplete({
        data: {
            "Apple": null,
            "Microsoft": null,
            "Google": 'https://placehold.it/250x250'
        },
    });

    /* --------------------------*/

    /* Chips */
    $('.chips').chips();
    $('.chips-initial').chips({
        data: [{
            tag: 'Apple',
        }, {
            tag: 'Microsoft',
        }, {
            tag: 'Google',
        }],
    });
    $('.chips-placeholder').chips({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
    });
    $('.chips-autocomplete').chips({
        autocompleteOptions: {
            data: {
                'Apple': null,
                'Microsoft': null,
                'Google': null
            },
            limit: Infinity,
            minLength: 1
        }
    });
    /* --------------------------*/

    /* Initializacion datepicker */
    $('.datepicker').datepicker();
    /* --------------------------*/

    /* Initializacion timepicker */
    $('.timepicker').timepicker();
    /* --------------------------*/

    /* Initializacion select */
    $('select').formSelect();
    /* --------------------------*/

    


    /* Range */
    var slider = document.getElementById('test-slider');
    noUiSlider.create(slider, {
        start: [20, 80],
        connect: true,
        step: 1,
        orientation: 'horizontal', // 'horizontal' or 'vertical'
        range: {
            'min': 0,
            'max': 100
        },
        /*format: wNumb({
            decimals: 0
        })*/
    });
    /* --------------------------*/
});

