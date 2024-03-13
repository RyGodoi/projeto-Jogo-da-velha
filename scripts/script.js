window.onload = function () {

    var somaDeuEmpate = 0;
    var vezPlayer = 0;
    var box01 = 0;
    var box02 = 0;
    var box03 = 0;
    var box04 = 0;
    var box05 = 0;
    var box06 = 0;
    var box07 = 0;
    var box08 = 0;
    var box09 = 0;

    function deuEmpate() {
        if ($('.vencedor').hasClass('vencedor-jogador01') == false && $('.vencedor').hasClass('vencedor-jogador02') == false && somaDeuEmpate == 9) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-empate').css('display', 'flex');
            setTimeout(function () {
                window.location.reload(true);
            }, 3000);
        }
    }

    function vencedorPlayer01() {
        if (box01 == 1 && box02 == 1 && box03 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');
            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box04 == 1 && box05 == 1 && box06 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box07 == 1 && box08 == 1 && box09 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box01 == 1 && box04 == 1 && box07 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box02 == 1 && box05 == 1 && box08 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box03 == 1 && box06 == 1 && box09 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box01 == 1 && box05 == 1 && box09 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box03 == 1 && box05 == 1 && box07 == 1) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador01').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else {
            deuEmpate();
        }
    }
    function vencedorPlayer02() {
        if (box01 == 2 && box02 == 2 && box03 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box04 == 2 && box05 == 2 && box06 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box07 == 2 && box08 == 2 && box09 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box01 == 2 && box04 == 2 && box07 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box02 == 2 && box05 == 2 && box08 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box03 == 2 && box06 == 2 && box09 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box01 == 2 && box05 == 2 && box09 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else if (box03 == 2 && box05 == 2 && box07 == 2) {
            $('.vencedor').css('display', 'flex');
            $('.vencedor-jogador02').css('display', 'flex');
            $('.areaDosSons').append('<audio controls autoplay><source src="/msc/somVitoria.mp3" type="audio/mpeg"></audio>');

            setTimeout(function () {
                window.location.reload(true);
            }, 4500);
        } else {
            deuEmpate();
        }
    }
    var vsquem = 0;
    verificacaoVs();
    function verificacaoVs() {
        if ($('.tela-principal').hasClass('player') == true) {
            vsquem = +1;
        } else if ($('.tela-principal').hasClass('computador') == true) {
            vsquem = +2;
        }
    }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function computadorJogando() {
        var jogadacom = getRandomInt(8) + 1;
        if (vsquem == 2 && vezPlayer == 1) {
            if (jogadacom == 1) {
                playerJogandoBox01();
            } else if (jogadacom == 2) {
                setTimeout(function () {
                    playerJogandoBox02();
                }, 200);
            } else if (jogadacom == 3) {
                setTimeout(function () {
                    playerJogandoBox03();
                }, 200);
            } else if (jogadacom == 4) {
                setTimeout(function () {
                    playerJogandoBox04();
                }, 200);
            } else if (jogadacom == 5) {
                setTimeout(function () {
                    playerJogandoBox05();
                }, 200);
            } else if (jogadacom == 6) {
                setTimeout(function () {
                    playerJogandoBox06();
                }, 200);
            } else if (jogadacom == 7) {
                setTimeout(function () {
                    playerJogandoBox07();
                }, 200);
            } else if (jogadacom == 8) {
                setTimeout(function () {
                    playerJogandoBox08();
                }, 200);
            } else if (jogadacom == 9) {
                setTimeout(function () {
                    playerJogandoBox09();
                }, 200);
            } else {
                computadorJogando();
            }
        }
    }

    function playerJogandoBox01() {
        if ($('.01').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.01').hasClass('classX') == false && vezPlayer == 0) {
                $('.01').addClass('classX');
                $('.01').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box01 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.01').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.01').hasClass('classBola') == false && vezPlayer == 1) {
                $('.01').addClass('classBola');
                $('.01').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box01 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.01').hasClass('classX') == true || $('.01').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();
        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox02() {
        if ($('.02').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.02').hasClass('classX') == false && vezPlayer == 0) {
                $('.02').addClass('classX');
                $('.02').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box02 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.02').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.02').hasClass('classBola') == false && vezPlayer == 1) {
                $('.02').addClass('classBola');
                $('.02').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box02 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.02').hasClass('classX') == true || $('.02').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox03() {
        if ($('.03').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.03').hasClass('classX') == false && vezPlayer == 0) {
                $('.03').addClass('classX');
                $('.03').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box03 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.03').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.03').hasClass('classBola') == false && vezPlayer == 1) {
                $('.03').addClass('classBola');
                $('.03').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box03 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.03').hasClass('classX') == true || $('.03').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox04() {
        if ($('.04').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.04').hasClass('classX') == false && vezPlayer == 0) {
                $('.04').addClass('classX');
                $('.04').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box04 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.04').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.04').hasClass('classBola') == false && vezPlayer == 1) {
                $('.04').addClass('classBola');
                $('.04').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box04 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.04').hasClass('classX') == true || $('.04').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox05() {
        if ($('.05').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.05').hasClass('classX') == false && vezPlayer == 0) {
                $('.05').addClass('classX');
                $('.05').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box05 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.05').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.05').hasClass('classBola') == false && vezPlayer == 1) {
                $('.05').addClass('classBola');
                $('.05').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box05 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.05').hasClass('classX') == true || $('.05').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox06() {
        if ($('.06').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.06').hasClass('classX') == false && vezPlayer == 0) {
                $('.06').addClass('classX');
                $('.06').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box06 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.06').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.06').hasClass('classBola') == false && vezPlayer == 1) {
                $('.06').addClass('classBola');
                $('.06').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box06 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.06').hasClass('classX') == true || $('.06').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox07() {
        if ($('.07').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.07').hasClass('classX') == false && vezPlayer == 0) {
                $('.07').addClass('classX');
                $('.07').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box07 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.07').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.07').hasClass('classBola') == false && vezPlayer == 1) {
                $('.07').addClass('classBola');
                $('.07').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box07 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.07').hasClass('classX') == true || $('.07').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox08() {
        if ($('.08').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.08').hasClass('classX') == false && vezPlayer == 0) {
                $('.08').addClass('classX');
                $('.08').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box08 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.08').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.08').hasClass('classBola') == false && vezPlayer == 1) {
                $('.08').addClass('classBola');
                $('.08').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box08 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.08').hasClass('classX') == true || $('.08').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    function playerJogandoBox09() {
        if ($('.09').hasClass('classBola') == false && vezPlayer == 0) {
            if ($('.09').hasClass('classX') == false && vezPlayer == 0) {
                $('.09').addClass('classX');
                $('.09').append('<div class="jogadaX"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 1;
                box09 = 1;
                somaDeuEmpate += 1;
                vencedorPlayer01();
                computadorJogando();
            }
        } else if ($('.09').hasClass('classX') == false && vezPlayer == 1) {
            if ($('.09').hasClass('classBola') == false && vezPlayer == 1) {
                $('.09').addClass('classBola');
                $('.09').append('<div class="jogadaO"></div>');
                $('.areaDosSons').append('<audio controls autoplay><source src="/msc/sombotao.mp3" type="audio/mpeg"></audio>');
                vezPlayer = 0;
                box09 = 2;
                somaDeuEmpate += 1;
                vencedorPlayer02();
            }
            else {
                vezPlayer = 1;
                computadorJogando();
            }
        } else if ($('.09').hasClass('classX') == true || $('.09').hasClass('classBola') == true && vezPlayer == 1) {
            computadorJogando();

        } else {
            alert('player esse campo ja foi selecionado')

        }
    }
    $('.01').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox01();
        } else {
            playerJogandoBox01();
        }
    })
    $('.02').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox02();
        } else {
            playerJogandoBox02();
        }
    })
    $('.03').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox03();
        } else {
            playerJogandoBox03();
        }
    })
    $('.04').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox04();
        } else {
            playerJogandoBox04();
        }
    })
    $('.05').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox05();
        } else {
            playerJogandoBox05();
        }
    })
    $('.06').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox06();
        } else {
            playerJogandoBox06();
        }
    })
    $('.07').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox07();
        } else {
            playerJogandoBox07();
        }
    })
    $('.08').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox08();
        } else {
            playerJogandoBox08();
        }
    })
    $('.09').click(function () {
        if (vsquem == 2 && vezPlayer == 0 && vezPlayer != 1) {
            playerJogandoBox09();
        } else {
            playerJogandoBox09();
        }
    })
}