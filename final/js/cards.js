$(function() {
    var $el = $('#baraja-el'),
        baraja = $el.baraja();
    $('#open').on('click', function(event) {

        baraja.fan({
            speed: 500,
            easing: 'ease-out',
            range: 100,
            direction: 'right',
            origin: {
                x: 50,
                y: 200
            },
            center: true
        });

    });


    $('#00').on('click', () => {
        $('#cardname').val('The Fool')
        $('#meaning').val('對於新鮮的事物可以勇於嘗試，能為自己帶來新的體驗和想法')
    })

    $('#01').on('click', () => {
        $('#cardname').val('The Magician')
        $('#meaning').val('透過新的創意的幫助加上努力實踐，你的夢想正在加快實現')
    })

    $('#02').on('click', () => {
        $('#cardname').val('The High Priestess')
        $('#meaning').val('靜下心來，讓直覺和感受帶領你完成現階段的工作')
    })

    $('#03').on('click', () => {
        $('#cardname').val('The Empress')
        $('#meaning').val('找個自己喜歡的事情，好好的放鬆享受一下吧')
    })

    $('#04').on('click', () => {
        $('#cardname').val('The Emperor')
        $('#meaning').val('腳踏實地加上理性的態度，將助於事務的進展')
    })

    $('#05').on('click', () => {
        $('#cardname').val('The Hierophant')
        $('#meaning').val('找尋自己喜歡的信仰，將讓你的意志更將堅定')
    })

    $('#06').on('click', () => {
        $('#cardname').val('The Lover')
        $('#meaning').val('多和心儀或是交往的對象真心交流，你將得到情感的滋潤')
    })

    $('#07').on('click', () => {
        $('#cardname').val('The Chariot')
        $('#meaning').val('如果有想要執行的計畫，就穩住自己的心，帶著安全感為自己出征吧')
    })

    $('#08').on('click', () => {
        $('#cardname').val('The Strength')
        $('#meaning').val('如果能溫柔的愛與包容，你將是最強大的')
    })

    $('#09').on('click', () => {
        $('#cardname').val('The Hermit')
        $('#meaning').val('找個安靜舒適的地方讓自己完全放鬆，靜下來思考自己的生命吧')
    })

    $('#10').on('click', () => {
        $('#cardname').val('The Wheel of Fortune')
        $('#meaning').val('風水輪流轉，勇於接受生命中事物的改變吧')
    })

    $('#11').on('click', () => {
        $('#cardname').val('The Justice')
        $('#meaning').val('衡量自己看待問題的真實感受，不要受制於他人的想法')
    })

    $('#12').on('click', () => {
        $('#cardname').val('The Hanged Man')
        $('#meaning').val('事情沒有進展時，先在內心沉思一下，可以得到解決問題的方法')
    })

    $('#13').on('click', () => {
        $('#cardname').val('The Death')
        $('#meaning').val('對於過去的某些人事物，你是否依然執著無法放手?')
    })

    $('#14').on('click', () => {
        $('#cardname').val('Temperance')
        $('#meaning').val('學會接受不同的觀點，好好溝通討論')
    })

    $('#15').on('click', () => {
        $('#cardname').val('The Devil')
        $('#meaning').val('找找什麼是自己一直以來不斷找尋藉口逃避的事?')
    })

    $('#16').on('click', () => {
        $('#cardname').val('The Tower')
        $('#meaning').val('進行任何事情時，隨時注意可能發生的突發狀況')
    })

    $('#17').on('click', () => {
        $('#cardname').val('The Star')
        $('#meaning').val('透過好好面對事情，你將得到療癒，學會自信與堅強')
    })

    $('#18').on('click', () => {
        $('#cardname').val('The Moon')
        $('#meaning').val('生命中你所恐懼的課題，可能以各種形式出現來考驗你')
    })

    $('#19').on('click', () => {
        $('#cardname').val('The Sun 太陽')
        $('#meaning').val('信任自己的理念，積極的計畫與實踐，你最終能實現目標')
    })

    $('#20').on('click', () => {
        $('#cardname').val('The Judgement')
        $('#meaning').val('在關鍵時刻，運用過去的經驗來清楚判斷做出決定吧')
    })

    $('#21').on('click', () => {
        $('#cardname').val('The World')
        $('#meaning').val('藉由旅行讓自己增廣見聞，促進身心靈的和諧吧')
    })


});