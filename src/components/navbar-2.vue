<template>
        <header id="xb-header-area" class="header-area header-style-four is-sticky" style="position: absolute; width: 100%;">
        <div class="xb-header">
            <div class="container mxw_1785">
                <div class="header__wrap ul_li_between">
                    <div class="header-logo">
                        <router-link to="/"><img src="/img/reales/logo-blanco-entrenado-latinos.png" alt="" style="height: 90px; padding: 10px 10px 0;"></router-link>
                    </div>
                    <div class="main-menu__wrap ul_li navbar navbar-expand-lg">
                        <nav class="main-menu collapse navbar-collapse">
                            <ul>
                                <li :class="{ active: $route.path === '/' }">
                                    <router-link to="/"><span>Inicio</span></router-link>   
                                </li>
                                <li :class="{ active: $route.path.startsWith('/servicios') }" class="menu-item-has-children ">
                                    <router-link to=""><span>Servicios</span></router-link>
                                    <ul class="submenu">
                                        <li :class="{ active: $route.path === '/servicio1' }" ><router-link to="/"><span>Servicio 1</span></router-link></li>
                                        <li :class="{ active: $route.path === '/servicio2' }" ><router-link to="/"><span>Servicio 2</span></router-link></li>
                                    </ul>
                                </li>
                                <li :class="{ active: $route.path === '/catalogo' }">
                                    <router-link to="/"><span>Catalogo</span></router-link>
                                </li>
                                <li :class="{ active: $route.path === '/nosotros' }">
                                    <router-link to="/nosotros"><span>Nosotros</span></router-link>
                                </li>
                                <li :class="{ active: $route.path === '/blog' }">
                                    <router-link to="/blog"><span>Blog</span></router-link>
                                </li>
                                <li :class="{ active: $route.path === '/contacto' }">
                                <router-link to="/contacto"><span>Contacto</span></router-link>
                                    <!-- <a href="contact.html"><span>Contact</span></a> -->
                                </li>
                            </ul>
                        </nav>
                        <div class="xb-header-wrap">
                            <div class="xb-header-menu">
                                <div class="xb-header-menu-scroll">
                                    <div class="xb-menu-close xb-hide-xl xb-close"></div>
                                    <div class="xb-logo-mobile xb-hide-xl">
                                        <router-link to="/"><img src="/img/logo/logo.svg" alt=""></router-link></div>
                                    <nav class="xb-header-nav">
                                        <ul class="xb-menu-primary clearfix">
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#"><span>Home</span></a>
                                                <ul class="sub-menu">
                                                    <li><a href="index.html"><span>Digital Marketing</span></a></li>
                                                    <li><a href="home-2.html"><span>Branding Studio</span></a></li>
                                                    <li><a href="home-3.html"><span>Digital Studio</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="#"><span>Pages</span></a>
                                                <ul class="sub-menu">
                                                    <li><a href="about.html"><span>About</span></a></li>
                                                    <li><a href="service.html"><span>Services</span></a></li>
                                                    <li><a href="service-single.html"><span>Service Details</span></a></li>
                                                    <li><a href="team.html"><span>Team</span></a></li>
                                                    <li><a href="team-single.html"><span>Team Details</span></a></li>
                                                    <li><a href="career.html"><span>Career</span></a></li>
                                                    <li><a href="career-single.html"><span>Career Details</span></a></li>
                                                    <li><a href="faq.html"><span>FAQ</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="portfolio.html"><span>Portfolio</span></a>
                                                <ul class="sub-menu">
                                                    <li><a href="project.html"><span>Portfolio</span></a></li>
                                                    <li><a href="project-single.html"><span>Portfolio Details</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="shop.html"><span>Shop</span></a>
                                                <ul class="sub-menu">
                                                    <li><a href="shop.html"><span>Products</span></a></li>
                                                    <li><a href="shop-single.html"><span>Single Product</span></a></li>
                                                    <li><a href="cart.html"><span>Cart</span></a></li>
                                                    <li><a href="checkout.html"><span>Checkout</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item menu-item-has-children">
                                                <a href="blog.html"><span>News</span></a>
                                                <ul class="sub-menu">
                                                    <li><a href="blog.html"><span>News</span></a></li>
                                                    <li><a href="blog-single.html"><span>News Details</span></a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item"><a href="contact.html"><span>Contact</span></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div class="xb-header-menu-backdrop"></div>
                        </div>
                    </div>
                    <div class="ul_li">
                        <!-- <div class="xb-header_btn d-none d-lg-block">
                            <a href="contact.html">Get In Touch</a>
                        </div> -->
                        <div class="side-menu-4 d-none d-lg-block">
                            <a href="javascript:void(0);" class="burger-menu">
                                <img src="/img/digital-marketing/icon/menu01.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="header-bar-mobile side-menu d-lg-none">
                        <a class="xb-nav-mobile" href="javascript:void(0);"><img src="/img/digital-marketing/icon/menu01.png" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- header end -->

    <!-- overlay menu start -->
    <div class="overlay-menu">
        <div class="close">
            <div class="xb-close"></div>
        </div>
        <div class="row overlay-wrap">
            <div class="col-xl-8 col-md-7 left-area">
                <nav>
                    <ul>
                        <li class="menu-item-has-children">
                            <a href="#">Home</a>
                            <ul class="sub">
                                <li><a href="index.html"><span>Digital Marketing</span></a></li>
                                <li><a href="home-2.html"><span>Digital Studio</span></a></li>
                                <li><a href="home-3.html"><span>Branding</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">Pages</a>
                            <ul class="sub">
                                <li class="current-menu-item"><a href="about.html"><span>About</span></a></li>
                                <li><a href="service.html"><span>Services</span></a></li>
                                <li><a href="service-single.html"><span>Service Details</span></a></li>
                                <li><a href="team.html"><span>Team</span></a></li>
                                <li><a href="team-single.html"><span>Team Details</span></a></li>
                                <li><a href="career.html"><span>Career</span></a></li>
                                <li><a href="career-single.html"><span>Career Details</span></a></li>
                                <li><a href="faq.html"><span>FAQ</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children">
                            <a href="#">Portfolio</a>
                            <ul class="sub">
                                <li><a href="project.html"><span>Portfolio</span></a></li>
                                <li><a href="project-single.html"><span>Portfolio Details</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="#">Shop</a>
                            <ul class="sub">
                                <li><a href="shop.html"><span>Products</span></a></li>
                                <li><a href="shop-single.html"><span>Single Product</span></a></li>
                                <li><a href="cart.html"><span>Cart</span></a></li>
                                <li><a href="checkout.html"><span>Checkout</span></a></li>
                            </ul>
                        </li>
                        <li class="menu-item-has-children"><a href="#">News</a>
                            <ul class="sub">
                                <li><a href="blog.html"><span>News</span></a></li>
                                <li><a href="blog-single.html"><span>News Details</span></a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul> 
                </nav> 
            </div>
            <div class="col-xl-4 col-md-5 right-area">
                <ul>
                    <li><span class="title">Brief us</span></li>
                    <li><a href="mailto:hello@auxa.com" target="_blank">hello@auxa.com</a></li>
                    <li><a href="tel:53325356623" target="_blank">Tel. +53 325 356 623</a></li>
                </ul>
                <ul>
                    <li><span class="title">Our Office</span></li>
                    <li><p>72 Oceanview Drive Los Angeles, <br> CA 90045 USA</p></li>
                </ul>
                <ul>
                    <li><span class="title">Follow us</span></li>
                    <li>
                        <ul class="social-links">
                            <li><a href="#" target="_blank">Behance</a></li>
                            <li><a href="#" target="_blank">Dribbble</a></li>
                            <li><a href="#" target="_blank">Instagram</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- overlay menu end -->
</template>

<script>
export default {
    name: 'Navbar', 
    methods: {
        header() {

            var headerAnimation = gsap.timeline({ yoyo: false, reversed: true });
            headerAnimation.pause();

            headerAnimation.from($('.overlay-menu'), { autoAlpha: 0 });
            headerAnimation.from($('.overlay-menu .left-area'), { y: '100vh' }, 0.1);
            headerAnimation.from($('.overlay-menu .right-area'), { y: '-100vh' }, 0.1);
            headerAnimation.from($('.overlay-menu .right-area ul'), { autoAlpha: 0, stagger: 0.1 }, 0.5);
            headerAnimation.from($('.overlay-menu nav li:not(.overlay-menu nav ul li ul li)'), { stagger: 0.1, y: 30, autoAlpha: 0, ease: "Expo.easeInOut" }, 0.5);
            headerAnimation.from($('.overlay-menu nav li:not(.overlay-menu nav ul li ul li)'), { 'clearProps': 'all', delay: 1.3, ease: "Expo.easeInOut" }, 0.5);
            $('header .burger-menu, .overlay-menu .close').on('click', function () {
                headerAnimation.reversed() ? headerAnimation.play() : headerAnimation.reverse();
                $('.overlay-menu').toggleClass('active');
            });

            $('.overlay-menu .menu-item-has-children').each(function () {
                $(this).find('> a').attr('href', 'javascript:void(0);');
                $(this).children('ul').append('<li><a class="back" href="javascript:void(0);">back <i class="ri-corner-down-left-line"></i></a></li>');
            });

            $('.overlay-menu .menu-item-has-children > a').each(function () {
                var overlay_animation = gsap.timeline({ yoyo: false, reversed: true });

                overlay_animation.pause();
                overlay_animation.to($(this).closest('ul').children('li').children('a'), { stagger: 0.1, autoAlpha: 0, y: -50, 'pointer-events': 'none', ease: Power3.easeOut });
                overlay_animation.to($(this).next('ul'), { 'z-index': '10', 'pointer-events': 'all' }),
                    overlay_animation.from($(this).next('ul').children('li').children('a'), { stagger: 0.1, autoAlpha: 0, y: 30, ease: Power3.easeOut });

                this.animation = overlay_animation;

                $(".overlay-menu .back, .overlay-menu .close").on('click', function () {
                    overlay_animation.reverse();
                });
            });

            $(".overlay-menu .menu-item-has-children > a").on('click', function () {
                this.animation.reversed() ? this.animation.play() : this.animation.reverse();
            });

            if ($('#fixed').length) {
                scrollbar.addListener(({ offset }) => {
                    fixed.style.top = offset.y + ($(window).height() - 90) + 'px';
                });
            }
        },
        stickyHeader() {
		var scrollDirection = "";
		var lastScrollPosition = 0;

		// Clone and make header sticky if the element with class 'xb-header' exists
		if ($('.xb-header').length) {
			$('.xb-header').addClass('original').clone(true).insertAfter('.xb-header').addClass('xb-header-area-sticky xb-sticky-stt').removeClass('original');
		}

		// Handle scroll events
		$(window).on("scroll", function () {
			var currentScrollPosition = $(window).scrollTop();

			// Determine scroll direction
			scrollDirection = currentScrollPosition < lastScrollPosition ? "up" : "down";
			lastScrollPosition = currentScrollPosition;

			// Check if element with ID 'xb-header-area' has class 'is-sticky'
			if ($("#xb-header-area").hasClass("is-sticky")) {
				// Add or remove classes based on scroll position for sticky header and mobile header
				if (lastScrollPosition > 100) {
					$(".xb-header-area-sticky.xb-sticky-stb").addClass("xb-header-fixed");
				} else {
					$(".xb-header-area-sticky.xb-sticky-stb").removeClass("xb-header-fixed");
				}

				// Add or remove classes for sticky header based on scroll direction
				if (scrollDirection === "up" && lastScrollPosition > 100) {
					$(".xb-header-area-sticky.xb-sticky-stt").addClass("xb-header-fixed");
				} else {
					$(".xb-header-area-sticky.xb-sticky-stt").removeClass("xb-header-fixed");
				}
			}
		});
	},
    
            },
            mounted() {
    this.header();
    this.stickyHeader();
    if ($(".progress-bar").length) {
		var $progress_bar = $('.progress-bar');
		$progress_bar.appear();
		$(document.body).on('appear', '.progress-bar', function () {
			var current_item = $(this);
			if (!current_item.hasClass('appeared')) {
				var percent = current_item.data('percent');
				current_item.css('width', percent + '%').addClass('appeared').parent().append('<span>' + percent + '%' + '</span>');
			}

		});
	};
    const parallax = new Ukiyo('.ukiyo', {
		externalRAF: true,
		scale: 1.2,
	});

	/**
	 * smooth scroll
	 */
	const lenis = new Lenis({
		duration: .8,
		smoothWheel: true,
	});

    function raf(time) {
		parallax.animate();

		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

    $('.sidebar-menu-close, .body-overlay').on('click', function () {
		$('.offcanvas-sidebar').removeClass('active');
		$('.body-overlay').removeClass('active');
	});

	$('.offcanvas-sidebar-btn').on('click', function () {
		$('.offcanvas-sidebar').addClass('active');
		$('.body-overlay').addClass('active');
	});
	$('.body-overlay').on('click', function () {
		$(this).removeClass('active');
		$(".header-search-form-wrapper").removeClass("open");
	});

    $('.xb-nav-hidden li.menu-item-has-children > a').append('<span class="xb-menu-toggle"></span>');
	$('.xb-header-menu li.menu-item-has-children, .xb-menu-primary li.menu-item-has-children').append('<span class="xb-menu-toggle"></span>');
	$('.xb-menu-toggle').on('click', function () {
		if (!$(this).hasClass('active')) {
			$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
			$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
		}
		$(this).toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
		$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
	});

    $('.xb-nav-hidden li.menu-item-has-children > a').click(function (e) {
		var target = $(e.target);
		if ($(this).attr('href') === '#' && !(target.is('.xb-menu-toggle'))) {
			e.stopPropagation();
			if (!$(this).find('.xb-menu-toggle').hasClass('active')) {
				$(this).closest('ul').find('.xb-menu-toggle.active').toggleClass('active');
				$(this).closest('ul').find('.sub-menu.active').toggleClass('active').slideToggle();
			}
			$(this).find('.xb-menu-toggle').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').toggleClass('active');
			$(this).closest('.menu-item').find('> .sub-menu').slideToggle();
		}
	});
	$(".xb-nav-mobile").on('click', function () {
		$(this).toggleClass('active');
		$('.xb-header-menu').toggleClass('active');
	});

	$(".xb-menu-close, .xb-header-menu-backdrop").on('click', function () {
		$(this).removeClass('active');
		$('.xb-header-menu').removeClass('active');
	});
  },
        }
</script>
