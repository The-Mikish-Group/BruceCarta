function totalArray(e) {
    return e.reduce(function (e, t) {
        return e + t
    }, 0)
}
function initThemePhotoCarouselST(e) {
    $(".st-hero-slider").length ? ($(".st-hero-slider").slick({
        centerMode: !1,
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: e,
        dots: !0,
        infinite: !0,
        variableWidth: !1,
        lazyLoad: "ondemand",
        pauseOnHover: !1
    }),
        $(".st-hero-slider .slick-active video").length && $(".st-hero-slider .slick-active video").get(0).play(),
        $(".st-hero-slider").on("afterChange", function (e, t, i, n) {
            $(".st-hero-slider .slick-active video").length && ($(".st-hero-slider .st-hero-slider__slide video").each(function () {
                this.pause(),
                    this.currentTime = 0
            }),
                $(".st-hero-slider .slick-active video").get(0) && $(".st-hero-slider .slick-active video").get(0).play())
        })) : $(".st-hero-slider__slide video").length && $(".st-hero-slider__slide video").get(0).play()
}
function setCookie(e, t, i) {
    var n = new Date;
    n.setDate(n.getDate() + i);
    var s = escape(t) + (null == i ? "" : "; expires=" + n.toUTCString());
    document.cookie = e + "=" + s + "; path=/"
}
function deleteCookie(e) {
    var t = new Date;
    t.setDate(t.getDate() - 1),
        document.cookie = e + "=; expires=" + t.toUTCString() + "; path=/"
}
function google_track_event(e, t, n) {
    setTimeout(function () {
        var s = !1;
        if ("function" == typeof gtag && gtag("event", t.toLowerCase(), {
            category: e,
            label: n
        }),
            "undefined" != typeof ga) {
            var a = ga.getAll();
            for (i = 0; i < a.length; i++)
                if ("t0" == a[i].get("name")) {
                    "" == a[i].get("trackingId") ? s = !0 : ga("send", "event", e, t, n);
                    break
                }
            ga("globalTracker.send", "event", e, t, n)
        }
        (s || parentGTM) && ("undefined" != typeof dataLayer && dataLayer.push({
            event: "eventTracking",
            eventCategory: e,
            eventAction: t,
            eventLabel: n
        }),
            "undefined" != typeof parentDataLayer && parentDataLayer.push({
                event: "eventTracking",
                eventCategory: e,
                eventAction: t,
                eventLabel: n
            }))
    }, 1e3)
}
function lead_capture_on_add(e) {
    $.each(["login_save_link", "login_prop_notes", "add_saved_search", "add_rental_saved_search", "login_subscribe_link"], function (t, i) {
        if ($("#" + i).length) {
            var n = modalLeadSourceForToolAndType(e, i);
            $("#" + i).on("click", function () {
                $("#mobile-fixed-top-content").removeClass("open"),
                    $(".modal_lead_source").val(n),
                    $(".modal_back").hide(),
                    $(".modal_close").show(),
                    openLeadModal(n),
                    $(".search_results_input").length > 0 && $(".search_results_input").remove()
            })
        }
    })
}
function anon_vs_logged_in_contact_label(e) {
    return "true" == e ? "Logged In View" : "Anonymous View - Contact Event"
}
function anon_vs_logged_in_wmhw_label(e) {
    return "true" == e ? "Logged In View" : "Anonymous View - WMHW Event"
}
function google_track_event_with_lead_source(e, t, i) {
    var n = modal_lead_source_to_category(e);
    google_track_event(n, t, i)
}
function observe_click_track_event(e, t, i, n) {
    google_track_event(t, i, n)
}
function modal_lead_source_to_category(e) {
    var t = "";
    switch (e) {
        case "sales_search":
            t = "Modal Sales Search";
            break;
        case "vacation_rentals_search":
            t = "Modal Vacation Rentals Search";
            break;
        case "sales":
            t = "Modal Sales Search";
            break;
        case "sales_saved_search":
            t = "Modal Sales Saved Search";
            break;
        case "rentals_search":
            t = "Modal Rentals Search";
            break;
        case "rentals":
            t = "Modal Rentals Search";
            break;
        case "rentals_saved_search":
            t = "Modal Rentals Saved Search";
            break;
        case "commercial_search":
            t = "Modal Commercial Search";
            break;
        case "luxury_list":
            t = "Modal Luxury List";
            break;
        case "luxury":
            t = "Modal Luxury List";
            break;
        case "sales_agent_page":
            t = "Modal Agent Properties";
            break;
        case "sales_office_page":
            t = "Modal Office Properties";
            break;
        case "sales_property":
            t = "Modal Sales Property";
            break;
        case "sales_favorite_property":
            t = "Modal Sales Favorite Property";
            break;
        case "sales_property_note":
            t = "Modal Sales Property Note";
            break;
        case "rentals_property":
            t = "Modal Rental Property";
            break;
        case "rentals_property_note":
            t = "Modal Rental Property Note";
            break;
        case "rentals_favorite_property":
            t = "Modal Favorite Rental Property";
            break;
        case "commercial_building":
            t = "Modal Commercial Building";
            break;
        case "commercial_space":
            t = "Modal Commercial Space";
            break;
        case "luxury_details":
            t = "Modal Luxury Details";
            break;
        case "sales_town_page":
            t = "Modal Sales Town Page";
            break;
        case "rentals_town_page":
            t = "Modal Rentals Town Page";
            break;
        case "cms_page":
            t = "Modal CMS Page";
            break;
        case "commercial_town_page":
            t = "Modal Commercial Town Page";
            break;
        case "market_report_page":
            t = "Modal Market Insight Page";
            break;
        case "sales_featured_page":
            t = "Modal Sales Exclusives";
            break;
        case "login_signup_link":
            t = "Modal Login/Signup Link";
            break;
        case "area_profile_page":
            t = "Modal Area Profile Page";
            break;
        case "post_show_page":
            t = "Modal Blog Post Page"
    }
    return t
}
function setupFavIconSpinner(e) {
    $("#" + e + "_fav_icon") && $("#" + e + "_fav_icon").hide(),
        $("#" + e + "_fav_spinner").show(),
        $("#modal_lead_form .modal_close").on("click", function () {
            $("#" + e + "_fav_icon") && $("#" + e + "_fav_icon").show(),
                $("#" + e + "_fav_spinner").hide()
        })
}
function setupResultsFavoriteProperties(e, t) {
    t = t || "";
    var i = $.map($("." + e), function (e) {
        return $(e).data("prop-id")
    })
        , n = {
            "property_ids[]": i
        };
    i.length > 0 && $.ajax({
        method: "post",
        url: "/" + t + "searches/favorite_properties",
        data: n,
        dataType: "script",
        success: function () {
            $(".fav_add_results, .fav_remove_results, .fav_add_rental_results, .fav_remove_rental_results, .fav_add, .fav_remove").on("click", function () {
                var e = $(this).data("prop-id");
                setupFavIconSpinner(e)
            })
        }
    })
}
function show_login(e) {
    $("#signup_form").hide(),
        $("#forgot_form").hide(),
        $("#login_form").show(),
        $(".js-modal-header-text").text("User Login"),
        google_track_event_with_lead_source(e, "Login", "Anonymous View - Login")
}
function show_signup(e) {
    $("#signup_form").show(),
        $("#forgot_form").hide(),
        $("#login_form").hide(),
        $(".js-modal-header-text").text("Sign Up"),
        google_track_event_with_lead_source(e, "Signup", "Anonymous View - Signup")
}
function show_forgot(e) {
    $("#forgot_form").show(),
        $("#signup_form").hide(),
        $("#login_form").hide(),
        $(".js-modal-header-text").text("Reset Password"),
        google_track_event_with_lead_source(e, "Forgot Password", "Anonymous View - Forgot Password")
}
function modalLeadSourceTitle(e) {
    var t = "";
    switch (e) {
        case "sales_favorite_property":
        case "rentals_favorite_property":
            t = "save properties";
            break;
        case "sales_property_note":
        case "rentals_property_note":
            t = "add property notes";
            break;
        case "sales_saved_search":
        case "rentals_saved_search":
            t = "save searches";
            break;
        case "market_report_page":
            t = "subscribe to market updates";
            break;
        case "sales":
        case "sales_search":
        case "vacation_rentals_search":
        case "rentals":
        case "rentals_search":
        case "sales_town_page":
        case "rentals_town_page":
        case "commercial_search":
        case "commercial_town_page":
        case "luxury":
        case "luxury_list":
            t = "view search results";
            break;
        case "sales_property":
        case "rentals_property":
        case "luxury_details":
            t = "view this property";
            break;
        case "cms_page":
            t = "view this page";
            break;
        case "commercial_building":
            t = "view this building"
    }
    return t
}
function setupResultsForSelectFavoriteProperties(e, t) {
    if (t = t || "",
        e.length > 0) {
        var i = {
            "property_ids[]": e
        };
        $.ajax({
            url: "/" + t + "searches/favorite_properties",
            type: "POST",
            data: i,
            dataType: "script",
            success: function () {
                $(".fav_add_results, .fav_remove_results, .fav_add_rental_results, .fav_remove_rental_results, .fav_add, .fav_remove").on("click", function () {
                    var e = $(this).data("prop-id");
                    setupFavIconSpinner(e)
                })
            }
        })
    }
}
function lead_capture_on_results_favorite_add(e) {
    if ("sales_favorite_property" == e)
        var t = ".fav_add_results"
            , i = "property_id";
    else
        var t = ".fav_add_rental_results"
            , i = "rental_property_id";
    $(t).off("click"),
        $(t).on("click", function () {
            "" == userId && ($(".modal_lead_source").val(e),
                $(".modal_back").hide(),
                $(".modal_close").show(),
                openLeadModal(e),
                0 == $("#" + i).length ? ($("#new_user_form").append('<input type="hidden" name="lead[' + i + ']" id="' + i + '" value="' + $(this).data("prop-id") + '">'),
                    $("#new_session_form").append('<input type="hidden" name="' + i + '" id="' + i + '" value="' + $(this).data("prop-id") + '">')) : $("#" + i).val($(this).data("prop-id")),
                0 == $(".search_results_input").length && ($("#new_user_form").append('<input type="hidden" name="search_results" class="search_results_input" value="true">'),
                    $("#new_session_form").append('<input type="hidden" name="search_results" class="search_results_input" value="true">')))
        })
}
function modalLeadSourceForToolAndType(e, t) {
    var i = "";
    return i = "sales_property" == e && "login_save_link" == t ? "sales_favorite_property" : "sales_property" == e && "login_prop_notes" == t ? "sales_property_note" : "sales_search" == e && "add_saved_search" == t ? "sales_saved_search" : "rentals_property" == e && "login_save_link" == t ? "rentals_favorite_property" : "rentals_property" == e && "login_prop_notes" == t ? "rentals_property_note" : "rentals_search" == e && "add_rental_saved_search" == t ? "rentals_saved_search" : e
}
function openLeadModal(e) {
    if ($("#account_create_title").length) {
        var t = modalLeadSourceTitle(e);
        "" == t ? ($("#create_default_account").show(),
            $("#create_account_for").hide()) : ($("#create_default_account").hide(),
                $("#account_create_title").html(t),
                $("#create_account_for").show())
    }
    (0 == getCookie("user_id") || "" == getCookie("user_id") || "undefined" == getCookie("user_id") || "null" == getCookie("user_id")) && ($("#modal_lead_form").modal("show"),
        google_track_event_with_lead_source(e, "Signup", "Anonymous View - Signup"),
        setupModalCaptureForms())
}
function setupModalCaptureForms() {
    $("#new_session_form").on("ajax:beforeSend", function () {
        $("#modal_login_submit").attr("disabled", "disabled"),
            $("#login_spinner").length && $("#login_spinner").show()
    }),
        $("#new_session_form").on("ajax:complete", function () {
            $("#modal_login_submit").removeAttr("disabled"),
                $("#login_spinner").length && $("#login_spinner").hide()
        }),
        $("#new_user_form").on("ajax:beforeSend", function () {
            $("#modal_signup_submit").attr("disabled", "disabled"),
                $("#signup_spinner").length && $("#signup_spinner").show()
        }),
        $("#new_user_form").on("ajax:complete", function () {
            $("#modal_signup_submit").removeAttr("disabled"),
                $("#signup_spinner").length && $("#signup_spinner").hide()
        }),
        $("#new_forgot_form").on("ajax:beforeSend", function () {
            $("#modal_forgot_submit").attr("disabled", "disabled"),
                $("#forgot_spinner").length && $("#forgot_spinner").show()
        }),
        $("#new_forgot_form").on("ajax:complete", function () {
            $("#modal_forgot_submit").removeAttr("disabled"),
                $("#forgot_spinner").length && $("#forgot_spinner").hide()
        })
}
function socialMediaTrigger() {
    $(".js-social-share-trigger").on("click", function (e) {
        $(this).next(".js-social-share:hidden") ? $(this).next(".js-social-share").fadeIn("slow") : $(this).next(".js-social-share").fadeOut("slow")
    }),
        $("body").on("click", function (e) {
            $(e.target).closest(".js-social-share-wrapper").length || $(".js-social-share").fadeOut("slow")
        })
}
function setCustomAudienceCheckoutListeners() {
    $("body").on("click", ".fav_add_results, .fav_add_rental_results, .showing_link, #schedule_showing, #contact_agent, #email_friend, .fav_add, .prop_notes", function () {
        fbq("track", "InitiateCheckout", fb_params)
    })
}
function setCustomAudienceTelephoneListeners() {
    $("body").on("click", 'a[href^="tel:"]', function () {
        fbq("track", "InitiateCheckout", fb_params)
    })
}
function search_redirect(e) {
    "" != e.value && (self.location = e.value,
        $("redirect_text").innerHTML = "Updating search.... ",
        $("redirect_text").show())
}
function setHomesnapCheckoutListeners(e, t, i, n) {
    $("body").on("click", ".fav_add_results, .showing_link, #schedule_showing, #contact_agent, #email_friend, .fav_add, .prop_notes", function () {
        $("body").append('<script src="//www.homesnap.com/pixel.js?ty=12&id=' + homesnapParams.broker_id + "&num=" + homesnapParams.mls_id + "&zip=" + homesnapParams.zip + "&pixel=" + homesnapParams.pixel_id + '&event=InitiateCheckout" type="text/javascript"></script>')
    })
}
function trackHomesnapPurchase() {
    $("body").append('<script src="//www.homesnap.com/pixel.js?ty=12&id=' + homesnapParams.broker_id + "&num=" + homesnapParams.mls_id + "&zip=" + homesnapParams.zip + "&pixel=" + homesnapParams.pixel_id + '&event=Purchase" type="text/javascript"></script>')
}
function setCustomAudienceTelephoneListeners() {
    $("body").on("click", 'a[href^="tel:"]', function () {
        fbq("track", "InitiateCheckout", fb_params)
    })
}
function loadJSScript(e) {
    var t = document.createElement("script");
    t.type = "text/javascript",
        t.src = e,
        document.getElementsByTagName("body")[0].appendChild(t)
}
function loadTwitterJS() {
    !function (e, t, i) {
        var n, s = e.getElementsByTagName(t)[0];
        e.getElementById(i) || (n = e.createElement(t),
            n.id = i,
            n.async = !0,
            n.src = "//platform.twitter.com/widgets.js",
            s.parentNode.insertBefore(n, s))
    }(document, "script", "twitter-wjs")
}
function loadFacebookJS(e, t, i) {
    window.fbAsyncInit = function () {
        "" != t ? FB.init({
            appId: t,
            status: !0,
            cookie: !0,
            xfbml: !1,
            channelUrl: e
        }) : FB.init({
            status: !1,
            cookie: !0,
            xfbml: !1,
            channelUrl: e
        }),
            i && FB.Canvas.setAutoGrow(),
            FB.XFBML.parse(),
            _ga.trackFacebook()
    }
        ,
        function (e, t, i) {
            var n, s = e.getElementsByTagName(t)[0];
            e.getElementById(i) || (n = e.createElement(t),
                n.id = i,
                n.async = !0,
                n.src = "//connect.facebook.net/en_US/all.js#xfbml=1&version=v2.7",
                s.parentNode.insertBefore(n, s))
        }(document, "script", "facebook-jssdk")
}
function loadPlusOneJS(e) {
    !function () {
        e = e || "",
            source = "https://apis.google.com/js/platform.js",
            "" != e && (source = source + "?publisherid=" + e);
        var t = document.createElement("script");
        t.type = "text/javascript",
            t.async = !0,
            t.src = source;
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(t, i)
    }()
}
function loadLinkedInJS() {
    !function () {
        var e = document.createElement("script");
        e.type = "text/javascript",
            e.async = !1,
            e.src = "https://platform.linkedin.com/in.js?async=true",
            e.onload = function () {
                IN.init()
            }
            ;
        var t = document.getElementsByTagName("script")[0];
        t.parentNode.insertBefore(e, t)
    }()
}
function loadPinterestJS(e) {
    !function (t) {
        var i = t.getElementsByTagName("SCRIPT")[0]
            , n = t.createElement("SCRIPT");
        n.type = "text/javascript",
            n.async = !0,
            "true" == e && n.setAttribute("data-pin-hover", !0),
            n.src = "//assets.pinterest.com/js/pinit.js",
            i.parentNode.insertBefore(n, i)
    }(document)
}
function loadPinmarkletJS() {
    var e = document.createElement("script");
    e.type = "text/javascript",
        e.async = !0,
        e.src = "//assets.pinterest.com/js/pinmarklet.js?r=" + 99999999 * Math.random(),
        document.getElementsByTagName("body")[0].appendChild(e)
}
function linkedinShared() {
    _ga.trackLinkedIn()
}
function disablePinchZoom() {
    navigator.userAgent.toLowerCase().match(/safari/) && $("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1, user-scalable=no")
}
function enablePinchZoom() {
    navigator.userAgent.toLowerCase().match(/safari/) && $("meta[name=viewport]").attr("content", "width=device-width, initial-scale=1, user-scalable=yes")
}
function setupLinkTracking() {
    $('a[href^="mailto:"]').on("click", function () {
        google_track_event("Email Link", "Click", $(this).data("type"))
    }),
        $('a[href^="tel:"]').on("click", function () {
            google_track_event("Telephone Link", "Click", $(this).data("type"))
        }),
        $('a[href^="sms:"]').on("click", function () {
            google_track_event("SMS Link", "Click", $(this).data("type"))
        })
}
function observeLocationTooltip(e) {
    $("#" + e + "_share_button").on("mouseenter", function (t) {
        showShareTooltip(t, e)
    }),
        $("#" + e + "_share_wrapper").on("mouseleave", function (t) {
            closeShareTooltip(t, e)
        }),
        $("#" + e + "_share_button").on("click", function (t) {
            $("#" + e + "_social_media_buttons").is(":visible") ? closeShareTooltip(t, e) : showShareTooltip(t, e)
        })
}
function showShareTooltip(e, t) {
    $("#" + t + "_social_media_buttons").is(":visible") || $("#" + t + "_social_media_buttons").fadeIn("slow")
}
function closeShareTooltip(e, t) {
    $("#" + t + "_social_media_buttons").is(":visible") && $("#" + t + "_social_media_buttons").fadeOut("slow")
}
function screenSize(e) {
    var t = ["xs", "sm", "md", "lg", "xl"]
        , i = ["none", "sm-none", "md-none", "lg-none", "xl-none"]
        , n = $("<div>");
    n.appendTo($("body"));
    for (var s = i.length - 1; s >= 0; s--)
        if (n.addClass("d-" + i[s]),
            n.is(":hidden"))
            return n.remove(),
                e ? e == t[s] : t[s]
}
function asyncLoadBlogPosts() {
    $('div[id^="blog_feed_section"]').length > 0 && $('div[id^="blog_feed_section"]').each(function () {
        var e = $(this).attr("data-feed-url")
            , t = $(this).attr("data-num-feeds")
            , i = $(this).attr("data-partial-name")
            , n = this
            , e = "/rss_feed?num_feeds=" + t + "&feed_url=" + e + "&partial_name=" + i;
        $.ajax({
            url: e,
            cache: !0,
            success: function (e) {
                $(n).append(e)
            }
        })
    })
}
function resetCaptchas(e) {
    grecaptcha.execute(captchaSiteKey, {
        action: "submit"
    }).then(function (t) {
        for (i = 0; i < captchaJsIds.length; i++)
            document.getElementById(captchaJsIds[i]).value = t;
        runningCaptcha = !1,
            $(e).submit()
    })
}
function captchaV3Callback() {
    $("body").on("submit", "form", function (e) {
        captchaCallback && $(this).find(".g-recaptcha").length && (e.preventDefault(),
            captchaCallback = !1,
            resetCaptchas(this))
    })
}
function resetSmsFields() {
    "immediate" == $("#saved_search_frequency").val() ? ($(".immediate-options").show(),
        "Email" != $("#saved_search_send_by").val() ? $(".sms-number-field").show() : $(".sms-number-field").hide()) : $(".immediate-options, .sms-number-field").hide()
}
function initPropCards() {
    "undefined" != typeof propJsMap && propJsMap.length && $.each(propJsMap, function (e, t) {
        "1" != t.style && ($(document).off("click mouseenter", "#" + t.prop_id + " .js-arrow-left, #" + t.prop_id + " .js-arrow-right, #" + t.prop_id),
            $(document).on("click mouseenter", "#" + t.prop_id + " .js-arrow-left, #" + t.prop_id + " .js-arrow-right, #" + t.prop_id, function (e) {
                _this = this,
                    _e = e,
                    "luxury_building" !== t.propertyType ? (sliderEle = $("#" + t.prop_id + " .js-slider"),
                        sliderEle.length && !sliderEle.data("ajax-started") && (sliderEle.data("ajax-started", !0),
                            url = "/searches/get_prop_photos?property_id=" + t.prop_id,
                            sliderEle.data("style") && "" != sliderEle.data("style") && (url = url + "&style=" + sliderEle.data("style")),
                            $.ajax({
                                url: url,
                                success: function (e) {
                                    slider = $("#" + t.prop_id + " .js-slider"),
                                        slider.find(".slick-list").length || (propCard = $("#" + t.prop_id),
                                            propCardImg = propCard.find("img"),
                                            prevArrow = propCard.find(".js-arrow-left"),
                                            nextArrow = propCard.find(".js-arrow-right"),
                                            e = e.slice(1, e.length),
                                            $.each(e, function (e, t) {
                                                slider.append(t)
                                            }),
                                            propCard.find("img").attr("alt", t.address),
                                            "click" == _e.type && slider.on("init", function () {
                                                setTimeout(function () {
                                                    propCardImg = propCard.find("img"),
                                                        propCardImg.attr("alt", t.address),
                                                        $(_this).hasClass("js-arrow-left") ? slider.slick("slickPrev") : $(_this).hasClass("js-arrow-right") && slider.slick("slickNext")
                                                }, 10)
                                            }),
                                            slider.slick({
                                                lazyLoad: "ondemand",
                                                infinite: !0,
                                                slidesToShow: 1,
                                                slidesToScroll: 1,
                                                nextSlidesToPreload: 2,
                                                speed: 250,
                                                fade: !0,
                                                cssEase: "linear",
                                                prevArrow: prevArrow,
                                                nextArrow: nextArrow
                                            }))
                                }
                            }))) : $("#" + t.prop_id + " .js-slider").hasClass("slick-initialized") || (propCard = $("#" + t.prop_id),
                                propCardImg = propCard.find("img"),
                                propCardImg.attr("alt", t.address),
                                slider = propCard.find(".js-slider"),
                                prevArrow = propCard.find(".js-arrow-left"),
                                nextArrow = propCard.find(".js-arrow-right"),
                                "click" == _e.type && slider.on("init", function () {
                                    setTimeout(function () {
                                        $(_this).hasClass("js-arrow-left") ? slider.slick("slickPrev") : $(_this).hasClass("js-arrow-right") && slider.slick("slickNext")
                                    }, 10)
                                }),
                                slider.slick({
                                    lazyLoad: "ondemand",
                                    infinite: !0,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                    nextSlidesToPreload: 2,
                                    speed: 250,
                                    fade: !0,
                                    cssEase: "linear",
                                    prevArrow: prevArrow,
                                    nextArrow: nextArrow
                                }))
            }))
    }),
        $("body").off("click", ".js-openhouse-toggle"),
        $("body").on("click", ".js-openhouse-toggle", function () {
            var e = $(this).closest(".c-property-card").find(".c-property-card__openhouse-menu")
                , t = $(this).closest(".c-property-card").find(".c-property-card__image");
            e.hasClass("is-open") ? (e.removeClass("is-open"),
                t.removeClass("is-blurred")) : (e.addClass("is-open"),
                    t.addClass("is-blurred"))
        }),
        $("body").off("click", ".js-openhouse-close"),
        $("body").on("click", ".js-openhouse-close", function () {
            var e = $(this).closest(".c-property-card").find(".c-property-card__openhouse-menu")
                , t = $(this).closest(".c-property-card").find(".c-property-card__image");
            e.removeClass("is-open"),
                t.removeClass("is-blurred")
        }),
        $("body").off("click", ".js-additional-toggle"),
        $("body").on("click", ".js-additional-toggle", function () {
            var e = $(this).closest(".c-property-card").find(".c-property-card__additional-menu")
                , t = $(this).closest(".c-property-card").find(".c-property-card__image");
            e.hasClass("is-open") ? (e.removeClass("is-open"),
                t.removeClass("is-blurred")) : (e.addClass("is-open"),
                    t.addClass("is-blurred"))
        }),
        $("body").off("click", ".js-additional-close"),
        $("body").on("click", ".js-additional-close", function () {
            var e = $(this).closest(".c-property-card").find(".c-property-card__additional-menu")
                , t = $(this).closest(".c-property-card").find(".c-property-card__image");
            e.removeClass("is-open"),
                t.removeClass("is-blurred")
        }),
        $("body").on("click", function (e) {
            if ($(e.target).parents(".c-property-card").length) {
                var t = $(e.target).parents(".c-property-card").attr("id");
                $(".c-property-card:not(#" + t + ") .is-open").removeClass("is-open"),
                    $(".c-property-card__image .is-blurred").removeClass("is-blurred")
            } else
                $(".c-property-card .is-open").removeClass("is-open"),
                    $(".c-property-card .is-blurred").removeClass("is-blurred")
        }),
        $('.c-property-card [data-toggle="tooltip"]').tooltip()
}
function initStickyFill() {
    var e = $("[data-sticky='true']");
    Stickyfill.add(e)
}
function initFloatLabel(e) {
    $("body").on("focus click", e, function () {
        $(this).next().addClass("is-active")
    }),
        $("body").on("blur", e, function () {
            "" !== $(this).val() && "blank" !== $(this).val() || $(this).find("option:selected").length && "" != $(this).find("option:selected").html() || $(this).find("input:checked").length || $(this).next().removeClass()
        }),
        $(e).find("option:selected").each(function () {
            "" != $(this).html() && $(this).parent().next().addClass("is-active")
        })
}
function initScrollTo() {
    $("a[data-scroll-to]").on("click", function (e) {
        e.preventDefault();
        var t = $($(this).data("scroll-to"))
            , i = $(this).data("offset") || 0
            , n = $(this).data("speed") || 500;
        $("html, body").animate({
            scrollTop: t.offset().top - i
        }, n)
    })
}
function loadingSpinner(e, t) {
    e = e || !1,
        t = t || ".js-loader",
        e ? $(t).hide() : $(t).show()
}
function initializeSkylineNumberFields() {
    $(".js--input-number__plus").off(),
        $(".js--input-number__plus").on("click", function () {
            input_field = $(this).closest($(".c-input-number")).find("input");
            var e, t = parseInt(input_field.val());
            e = parseInt(input_field.attr("max")) ? parseInt(input_field.attr("max")) : 999999,
                t >= e || (isNaN(t) ? input_field.val(1) : input_field.val(t + 1),
                    input_field.trigger("change"))
        }),
        $(".js--input-number__minus").off(),
        $(".js--input-number__minus").on("click", function () {
            input_field = $(this).closest($(".c-input-number")).find("input");
            var e = parseInt(input_field.val());
            !isNaN(e) && e > 1 ? input_field.val(e - 1) : input_field.val(""),
                input_field.trigger("change")
        })
}
function initTownTabs() {
    $("#tab-cont div").on("click", function () {
        $(this).parents("#tab-cont").find("div").removeClass("active"),
            $(this).addClass("active"),
            $("#items-cont > div ").removeClass("hidden"),
            "categories" == $(this).data("value") ? $("#towns-items").addClass("hidden") : "towns" == $(this).data("value") && $("#cats-items").addClass("hidden")
    }),
        $(".lux_tab_button").on("click", function () {
            map_var = $(this).data("map-var"),
                $(this).data("map-poly") ? ($.each(gmarkers.props.concat(gmarkers.lux_buildings), function (e, t) {
                    t.setMap(null)
                }),
                    search_coords = gmarkers.polys[grouped_markers[map_var][0]],
                    draw_simple_polygon(search_coords),
                    centerAndZoomOnPoints(map, search_coords)) : (current_markers = [],
                        $.each(grouped_markers[map_var], function (e, t) {
                            $.each(gmarkers.props.concat(gmarkers.lux_buildings), function (e, i) {
                                i.identifier == t ? current_markers.push(i) : i.setMap(null)
                            })
                        }),
                        $.each(current_markers, function (e, t) {
                            t.setMap(map)
                        }),
                        centerAndZoomOnMarkers(map, current_markers))
        })
}
function add_type_ahead(e, t, i, n, s) {
    void 0 === s && (s = {}),
        void 0 === s.custom_classes && (s.custom_classes = null),
        custom_classes = s.custom_classes || "c-tokenize__list",
        n = n || "",
        $(e).tokenInput(i, {
            url: "/searches/get_property_addresses",
            queryParam: "search_string",
            preventDuplicates: !0,
            hintText: "Please type a location",
            theme: "facebook",
            dynamicSource: !0,
            autoPopulate: !0,
            resultsLimit: 500,
            placeholderText: n,
            onAdd: s.qs ? null : typeAheadAdd,
            onDelete: s.qs ? null : typeAheadDelete,
            onResult: s.qs ? null : typeAheadResult,
            classes: {
                tokenList: custom_classes
            }
        })
}
function add_towns_only_type_ahead(e, t, i, n, s) {
    void 0 === s && (s = {}),
        void 0 === s.custom_classes && (s.custom_classes = null),
        custom_classes = s.custom_classes || "c-tokenize__list",
        n = n || "",
        $(e).tokenInput(i, {
            preventDuplicates: !0,
            hintText: "Please type a town",
            theme: "facebook",
            dynamicSource: !0,
            autoPopulate: !0,
            resultsLimit: 500,
            townsOnly: !0,
            placeholderText: n,
            onAdd: s.qs ? null : typeAheadAdd,
            onDelete: s.qs ? null : typeAheadDelete,
            onResult: s.qs ? null : typeAheadResult,
            classes: {
                tokenList: custom_classes
            }
        })
}
function add_free_type_ahead(e, t, i, n, s, a, r) {
    r = r || {},
        void 0 === r.custom_classes && (r.custom_classes = null),
        custom_classes = r.custom_classes || "c-tokenize__list",
        s = s || 500,
        n = n || "Please type a location",
        a = a || "",
        $(e).tokenInput(i, {
            url: "/searches/get_property_addresses",
            queryParam: "search_string",
            preventDuplicates: !0,
            hintText: n,
            theme: "facebook",
            dynamicSource: !0,
            autoPopulate: !0,
            resultsLimit: s,
            allowFreeTagging: !0,
            placeholderText: a,
            onAdd: r.qs ? null : typeAheadAdd,
            onDelete: r.qs ? null : typeAheadDelete,
            onResult: r.qs ? null : typeAheadResult,
            submitOnEnter: !0,
            classes: {
                tokenList: custom_classes
            }
        })
}
function typeAheadAdd(e) {
    overflowCheck(),
        $(".js-save-clear").click(function () { }),
        "undefined" != typeof disableSearchSubmit && pageFullyLoaded && !disableSearchSubmit && setTimeout(function () {
            screenSize("xs") || screenSize("sm") ? $("form:visible .c-property-search__mobile-btn").trigger("click") : searchBar.submit(),
                $(".js-mega-dropdown").hide()
        }, 300)
}
function typeAheadDelete(e) {
    $("#token-input-search_super_locations, #token-input-search_super_locations_vaca, #token-input-mobile_search_super_locations, #token-input-mobile_search_super_locations_vaca").focus(),
        overflowCheck(),
        e && e.id.match("^PN|^IS|^DS") && "undefined" != typeof simple_polygons && simple_polygons && $.each(simple_polygons, function (t, i) {
            i.token == e.id && i.setMap(null)
        }),
        "undefined" == typeof disableSearchSubmit || disableSearchSubmit || setTimeout(function () {
            $("#desktop_property_search_form .c-tokenize__token").length ? screenSize("xs") || screenSize("sm") ? $("form:visible .c-property-search__mobile-btn").trigger("click") : searchBar.submit() : $(".p-searches__results-message").length && ($(".p-searches__results-content").hide(),
                $(".p-searches__results-message").html(pageDataH1 + start_search_svg),
                $(".p-searches__results-message").show(),
                removeAllPins(),
                $(".js-save-clear").html(""),
                history.pushState({}, "Search", "/searches/new"))
        }, 100)
}
function typeAheadResult(e) {
    return $(".c-tokenize__dropdown").css("width", $(".c-search-bar__location:visible").width() - 15),
        e
}
function setCookie(e, t, i) {
    var n = new Date;
    n.setDate(n.getDate() + i);
    var s = escape(t) + (null == i ? "" : "; expires=" + n.toUTCString());
    document.cookie = e + "=" + s + "; path=/"
}
function popupOpen(e, t, i) {
    window.open(e, t.replace(" ", "_"), i)
}
function queryParams(e) {
    for (var t = window.location.search.substring(1), i = t.split("&"), n = 0; n < i.length; n++) {
        var s = i[n].split("=");
        if (s[0] == e)
            return s[1]
    }
    return null
}
function lead_capture_on_add(e) {
    $.each(["login_save_link", "login_prop_notes", "add_saved_search", "add_rental_saved_search", "login_subscribe_link", "comment_on_post"], function (t, i) {
        if ($("." + i).length) {
            var n = modalLeadSourceForToolAndType(e, i);
            $("." + i).on("click", function () {
                $("#mobile-fixed-top-content").removeClass("open"),
                    $(".modal_lead_source").val(n),
                    $(".modal_back").hide(),
                    $(".modal_close").show(),
                    openLeadModal(n),
                    $(".search_results_input").length > 0 && $(".search_results_input").remove()
            })
        }
    })
}
function trackPropertyDisplay(e, t, i) {
    var n = 1
        , s = queryParams("active");
    if (void 0 != s) {
        queryParams("page_" + s) && (n = queryParams("page_" + s));
        var a = $("#service_results_" + s + " .mls_result_row")
    } else {
        void 0 != queryParams.page && (n = queryParams("page"));
        var a = $(".mls_result_row")
    }
    var r = $.map(a, function (e) {
        return $(e).attr("id")
    })
        , o = {
            display_type: e,
            page_number: n,
            source_id: t,
            source_type: i,
            "property_ids[]": r
        };
    sendPropertyDisplays(o)
}
function trackAgentOfficePropertyDisplay(e, t, i) {
    var n = $.map($(".c-property-card"), function (e) {
        return $(e).attr("id")
    })
        , s = {
            display_type: e,
            source_id: t,
            source_type: i,
            "property_ids[]": n
        };
    sendPropertyDisplays(s)
}
function trackSimilarPropertyDisplay(e, t, i) {
    var n = $.map($(".similar_prop"), function (e) {
        return $(e).attr("id")
    })
        , s = {
            display_type: e,
            source_id: t,
            source_type: i,
            "property_ids[]": n
        };
    sendPropertyDisplays(s)
}
function trackLuxuryPropertyDisplay(e, t, i) {
    var n = $.map($(".available_results .listing_row, .pending_results .listing_row"), function (e) {
        return $(e).attr("id")
    })
        , s = {
            display_type: e,
            source_id: t,
            source_type: i,
            "property_ids[]": n
        };
    sendPropertyDisplays(s)
}
function sendPropertyDisplays(e) {
    e["property_ids[]"].length > 0 && $.ajax("/searches/track_property_display", {
        method: "post",
        data: e
    })
}
function colorCheckContrast(e, t, i) {
    var t = "undefined" == typeof t ? body_font_color : t;
    return i = "undefined" == typeof i ? "#fff" : i,
        r = parseInt(e.substr(1, 2), 16),
        g = parseInt(e.substr(3, 2), 16),
        b = parseInt(e.substr(5, 2), 16),
        yiq = (299 * r + 587 * g + 114 * b) / 1e3,
        yiq >= 128 ? t : i
}
function debounce(e, t, i) {
    var n;
    return function () {
        var s = this
            , a = arguments
            , r = function () {
                n = null,
                    i || e.apply(s, a)
            }
            , o = i && !n;
        clearTimeout(n),
            n = setTimeout(r, t),
            o && e.apply(s, a)
    }
}
function setupAgentLists(e, t, i) {
    if ($("#" + i).length) {
        var n = new Object;
        n.sales_agents = new Array(new Option("No Preference", "")),
            n.rentals_agents = new Array(new Option("No Preference", "")),
            n.commercial_agents = new Array(new Option("No Preference", "")),
            n.all_agents = new Array(new Option("No Preference", ""));
        var s = e.length
            , a = 0;
        for (a = 0; s > a; ++a)
            n.all_agents.push(new Option(e[a].list_name, e[a].id)),
                e[a].agent_type_ids != [] && (e[a].agent_type_ids.indexOf(3) > -1 && n.rentals_agents.push(new Option(e[a].list_name, e[a].id)),
                    e[a].agent_type_ids.indexOf(2) > -1 && n.commercial_agents.push(new Option(e[a].list_name, e[a].id)),
                    e[a].agent_type_ids.indexOf(1) > -1 && n.sales_agents.push(new Option(e[a].list_name, e[a].id)));
        $("#" + t).length && (changeAgentsList(n, t, i),
            $("#" + i).on("change", function () {
                changeAgentsList(n, t, i)
            }))
    }
}
function changeAgentsList(e, t, i) {
    var n = $(jqueryId(i)).val();
    "3" == n ? repopulateAgentsDropdown(e.rentals_agents, t) : "6" == n ? repopulateAgentsDropdown(e.commercial_agents, t) : $.inArray(n, ["1", "2", "7"]) ? repopulateAgentsDropdown(e.sales_agents, t) : repopulateAgentsDropdown(e.all_agents, t)
}
function jqueryId(e) {
    var t = "";
    return t += "#" + e
}
function repopulateAgentsDropdown(e, t) {
    if ($(jqueryId(t))) {
        var n = $(jqueryId(t))
            , s = e.length
            , a = [];
        for (i = 0; i < s; i++)
            a.push(new Option(e[i].text, e[i].value));
        n.empty().html(a)
    }
}
function showSqM() {
    $(".sqft_row").hide(),
        $(".sqm_row").show()
}
function showSqFt() {
    $(".sqft_row").show(),
        $(".sqm_row").hide()
}
function getCookie(e) {
    if (regex = "^" + e + "$",
        document.cookie.length > 0) {
        cookies = document.cookie.split(";");
        for (var t = 0; t < cookies.length; t++)
            if (element = cookies[t].split("="),
                element[0].trim().match(new RegExp(regex)))
                return unescape(element[1])
    }
    return ""
}
function clear_old_locations(e) {
    if (localStorage) {
        current_regex = new RegExp(e + "$");
        for (var t = 0, i = localStorage.length; i > t; t++) {
            var n = localStorage.key(t);
            n.match(/^sales_super_locations/) && !n.match(current_regex) ? (localStorage.removeItem(n),
                i--,
                t--) : n.match(/^towns/) && (localStorage.removeItem(n),
                    i--,
                    t--)
        }
    }
}
function setup_super_locations(e, t, i, n, s) {
    var s = "undefined" == typeof s ? !1 : s;
    add_free_type_ahead("#" + e, t, super_location_array, "", !1, i, n),
        "" == i || s || ($("#token-input-" + e).on("focus", function () {
            orig_placeholders[e] = orig_placeholders[e] || $(this).attr("placeholder"),
                $(this).attr("placeholder", ""),
                $(this).css("width", "58px")
        }),
            $("#token-input-" + e).on("blur", function () {
                "" == $("#" + e).val() && ($(this).attr("placeholder", orig_placeholders[e]),
                    $(this).css("width", "100%"))
            }),
            orig_placeholders[e] = orig_placeholders[e] || $("#token-input-" + e).attr("placeholder"),
            $("#token-input-" + e).attr("placeholder", ""),
            $("#token-input-" + e).css("width", "58px"),
            $("#token-input-" + e).attr("aria-label", orig_placeholders[e]),
            "" == $("#" + e).val() && ($("#token-input-" + e).attr("placeholder", orig_placeholders[e]),
                $("#token-input-" + e).css("width", "100%")))
}
function setup_super_location_type_ahead(e, t, i, n, s, a, r, o, l) {
    var l = "undefined" == typeof l ? !1 : l;
    storage_key = "sales_super_locations_" + s + "_" + a + r,
        localStorage && localStorage[storage_key] ? (super_location_array = JSON.parse(localStorage[storage_key]),
            setup_super_locations(e, t, i, n, l)) : super_location_array.length ? setup_super_locations(e, t, i, n, l) : fetching_super_locations ? locations_polls[e] = setInterval(function () {
                super_location_array.length && (setup_super_locations(e, t, i, n, l),
                    clearInterval(locations_polls[e]))
            }, 500) : (fetching_super_locations = !0,
                clear_old_locations(a),
                $.ajax(o, {
                    type: "get",
                    dataType: "json",
                    crossDomain: !0,
                    success: function (s) {
                        super_location_array = s,
                            setup_super_locations(e, t, i, n, l);
                        try {
                            localStorage[storage_key] = JSON.stringify(s)
                        } catch (a) { }
                    }
                }))
}
function fireFunctionAfterPageLoad(e, t, i) {
    windowLoaded ? $(e)[t](i) : unloadedFunctions.push([e, t, i])
}
!function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    "use strict";
    function i(e, t, i) {
        var n, s = (t = t || re).createElement("script");
        if (s.text = e,
            i)
            for (n in xe)
                i[n] && (s[n] = i[n]);
        t.head.appendChild(s).parentNode.removeChild(s)
    }
    function n(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? he[pe.call(e)] || "object" : typeof e
    }
    function s(e) {
        var t = !!e && "length" in e && e.length
            , i = n(e);
        return !ye(e) && !be(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function a(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    function r(e, t, i) {
        return ye(t) ? we.grep(e, function (e, n) {
            return !!t.call(e, n, e) !== i
        }) : t.nodeType ? we.grep(e, function (e) {
            return e === t !== i
        }) : "string" != typeof t ? we.grep(e, function (e) {
            return ue.call(t, e) > -1 !== i
        }) : we.filter(t, e, i);
    }
    function o(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;)
            ;
        return e
    }
    function l(e) {
        var t = {};
        return we.each(e.match(Ie) || [], function (e, i) {
            t[i] = !0
        }),
            t
    }
    function c(e) {
        return e
    }
    function d(e) {
        throw e
    }
    function u(e, t, i, n) {
        var s;
        try {
            e && ye(s = e.promise) ? s.call(e).done(t).fail(i) : e && ye(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n))
        } catch (e) {
            i.apply(void 0, [e])
        }
    }
    function h() {
        re.removeEventListener("DOMContentLoaded", h),
            e.removeEventListener("load", h),
            we.ready()
    }
    function p(e, t) {
        return t.toUpperCase()
    }
    function f(e) {
        return e.replace(Ne, "ms-").replace(ze, p)
    }
    function g() {
        this.expando = we.expando + g.uid++
    }
    function m(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Re.test(e) ? JSON.parse(e) : e)
    }
    function v(e, t, i) {
        var n;
        if (void 0 === i && 1 === e.nodeType)
            if (n = "data-" + t.replace(We, "-$&").toLowerCase(),
                "string" == typeof (i = e.getAttribute(n))) {
                try {
                    i = m(i)
                } catch (e) { }
                Fe.set(e, t, i)
            } else
                i = void 0;
        return i
    }
    function y(e, t, i, n) {
        var s, a, r = 20, o = n ? function () {
            return n.cur()
        }
            : function () {
                return we.css(e, t, "")
            }
            , l = o(), c = i && i[3] || (we.cssNumber[t] ? "" : "px"), d = (we.cssNumber[t] || "px" !== c && +l) && Ye.exec(we.css(e, t));
        if (d && d[3] !== c) {
            for (l /= 2,
                c = c || d[3],
                d = +l || 1; r--;)
                we.style(e, t, d + c),
                    (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (r = 0),
                    d /= a;
            d *= 2,
                we.style(e, t, d + c),
                i = i || []
        }
        return i && (d = +d || +l || 0,
            s = i[1] ? d + (i[1] + 1) * i[2] : +i[2],
            n && (n.unit = c,
                n.start = d,
                n.end = s)),
            s
    }
    function b(e) {
        var t, i = e.ownerDocument, n = e.nodeName, s = Ge[n];
        return s || (t = i.body.appendChild(i.createElement(n)),
            s = we.css(t, "display"),
            t.parentNode.removeChild(t),
            "none" === s && (s = "block"),
            Ge[n] = s,
            s)
    }
    function x(e, t) {
        for (var i, n, s = [], a = 0, r = e.length; r > a; a++)
            (n = e[a]).style && (i = n.style.display,
                t ? ("none" === i && (s[a] = je.get(n, "display") || null,
                    s[a] || (n.style.display = "")),
                    "" === n.style.display && qe(n) && (s[a] = b(n))) : "none" !== i && (s[a] = "none",
                        je.set(n, "display", i)));
        for (a = 0; r > a; a++)
            null != s[a] && (e[a].style.display = s[a]);
        return e
    }
    function w(e, t) {
        var i;
        return i = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && a(e, t) ? we.merge([e], i) : i
    }
    function _(e, t) {
        for (var i = 0, n = e.length; n > i; i++)
            je.set(e[i], "globalEval", !t || je.get(t[i], "globalEval"))
    }
    function k(e, t, i, s, a) {
        for (var r, o, l, c, d, u, h = t.createDocumentFragment(), p = [], f = 0, g = e.length; g > f; f++)
            if ((r = e[f]) || 0 === r)
                if ("object" === n(r))
                    we.merge(p, r.nodeType ? [r] : r);
                else if (Je.test(r)) {
                    for (o = o || h.appendChild(t.createElement("div")),
                        l = (Ke.exec(r) || ["", ""])[1].toLowerCase(),
                        c = Qe[l] || Qe._default,
                        o.innerHTML = c[1] + we.htmlPrefilter(r) + c[2],
                        u = c[0]; u--;)
                        o = o.lastChild;
                    we.merge(p, o.childNodes),
                        (o = h.firstChild).textContent = ""
                } else
                    p.push(t.createTextNode(r));
        for (h.textContent = "",
            f = 0; r = p[f++];)
            if (s && we.inArray(r, s) > -1)
                a && a.push(r);
            else if (d = we.contains(r.ownerDocument, r),
                o = w(h.appendChild(r), "script"),
                d && _(o),
                i)
                for (u = 0; r = o[u++];)
                    Ze.test(r.type || "") && i.push(r);
        return h
    }
    function S() {
        return !0
    }
    function C() {
        return !1
    }
    function T() {
        try {
            return re.activeElement
        } catch (e) { }
    }
    function E(e, t, i, n, s, a) {
        var r, o;
        if ("object" == typeof t) {
            "string" != typeof i && (n = n || i,
                i = void 0);
            for (o in t)
                E(e, o, i, n, t[o], a);
            return e
        }
        if (null == n && null == s ? (s = i,
            n = i = void 0) : null == s && ("string" == typeof i ? (s = n,
                n = void 0) : (s = n,
                    n = i,
                    i = void 0)),
            !1 === s)
            s = C;
        else if (!s)
            return e;
        return 1 === a && (r = s,
            (s = function (e) {
                return we().off(e),
                    r.apply(this, arguments)
            }
            ).guid = r.guid || (r.guid = we.guid++)),
            e.each(function () {
                we.event.add(this, t, s, n, i)
            })
    }
    function A(e, t) {
        return a(e, "table") && a(11 !== t.nodeType ? t : t.firstChild, "tr") ? we(e).children("tbody")[0] || e : e
    }
    function $(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
    }
    function D(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
    }
    function M(e, t) {
        var i, n, s, a, r, o, l, c;
        if (1 === t.nodeType) {
            if (je.hasData(e) && (a = je.access(e),
                r = je.set(t, a),
                c = a.events)) {
                delete r.handle,
                    r.events = {};
                for (s in c)
                    for (i = 0,
                        n = c[s].length; n > i; i++)
                        we.event.add(t, s, c[s][i])
            }
            Fe.hasData(e) && (o = Fe.access(e),
                l = we.extend({}, o),
                Fe.set(t, l))
        }
    }
    function I(e, t) {
        var i = t.nodeName.toLowerCase();
        "input" === i && Ue.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue)
    }
    function P(e, t, n, s) {
        t = ce.apply([], t);
        var a, r, o, l, c, d, u = 0, h = e.length, p = h - 1, f = t[0], g = ye(f);
        if (g || h > 1 && "string" == typeof f && !ve.checkClone && rt.test(f))
            return e.each(function (i) {
                var a = e.eq(i);
                g && (t[0] = f.call(this, i, a.html())),
                    P(a, t, n, s)
            });
        if (h && (a = k(t, e[0].ownerDocument, !1, e, s),
            r = a.firstChild,
            1 === a.childNodes.length && (a = r),
            r || s)) {
            for (l = (o = we.map(w(a, "script"), $)).length; h > u; u++)
                c = a,
                    u !== p && (c = we.clone(c, !0, !0),
                        l && we.merge(o, w(c, "script"))),
                    n.call(e[u], c, u);
            if (l)
                for (d = o[o.length - 1].ownerDocument,
                    we.map(o, D),
                    u = 0; l > u; u++)
                    c = o[u],
                        Ze.test(c.type || "") && !je.access(c, "globalEval") && we.contains(d, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? we._evalUrl && we._evalUrl(c.src) : i(c.textContent.replace(ot, ""), d, c))
        }
        return e
    }
    function L(e, t, i) {
        for (var n, s = t ? we.filter(t, e) : e, a = 0; null != (n = s[a]); a++)
            i || 1 !== n.nodeType || we.cleanData(w(n)),
                n.parentNode && (i && we.contains(n.ownerDocument, n) && _(w(n, "script")),
                    n.parentNode.removeChild(n));
        return e
    }
    function O(e, t, i) {
        var n, s, a, r, o = e.style;
        return (i = i || ct(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || we.contains(e.ownerDocument, e) || (r = we.style(e, t)),
            !ve.pixelBoxStyles() && lt.test(r) && dt.test(t) && (n = o.width,
                s = o.minWidth,
                a = o.maxWidth,
                o.minWidth = o.maxWidth = o.width = r,
                r = i.width,
                o.width = n,
                o.minWidth = s,
                o.maxWidth = a)),
            void 0 !== r ? r + "" : r
    }
    function N(e, t) {
        return {
            get: function () {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function z(e) {
        if (e in mt)
            return e;
        for (var t = e[0].toUpperCase() + e.slice(1), i = gt.length; i--;)
            if ((e = gt[i] + t) in mt)
                return e
    }
    function H(e) {
        var t = we.cssProps[e];
        return t || (t = we.cssProps[e] = z(e) || e),
            t
    }
    function j(e, t, i) {
        var n = Ye.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
    }
    function F(e, t, i, n, s, a) {
        var r = "width" === t ? 1 : 0
            , o = 0
            , l = 0;
        if (i === (n ? "border" : "content"))
            return 0;
        for (; 4 > r; r += 2)
            "margin" === i && (l += we.css(e, i + Ve[r], !0, s)),
                n ? ("content" === i && (l -= we.css(e, "padding" + Ve[r], !0, s)),
                    "margin" !== i && (l -= we.css(e, "border" + Ve[r] + "Width", !0, s))) : (l += we.css(e, "padding" + Ve[r], !0, s),
                        "padding" !== i ? l += we.css(e, "border" + Ve[r] + "Width", !0, s) : o += we.css(e, "border" + Ve[r] + "Width", !0, s));
        return !n && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))),
            l
    }
    function R(e, t, i) {
        var n = ct(e)
            , s = O(e, t, n)
            , a = "border-box" === we.css(e, "boxSizing", !1, n)
            , r = a;
        if (lt.test(s)) {
            if (!i)
                return s;
            s = "auto"
        }
        return r = r && (ve.boxSizingReliable() || s === e.style[t]),
            ("auto" === s || !parseFloat(s) && "inline" === we.css(e, "display", !1, n)) && (s = e["offset" + t[0].toUpperCase() + t.slice(1)],
                r = !0),
            (s = parseFloat(s) || 0) + F(e, t, i || (a ? "border" : "content"), r, n, s) + "px"
    }
    function W(e, t, i, n, s) {
        return new W.prototype.init(e, t, i, n, s)
    }
    function B() {
        yt && (!1 === re.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(B) : e.setTimeout(B, we.fx.interval),
            we.fx.tick())
    }
    function Y() {
        return e.setTimeout(function () {
            vt = void 0
        }),
            vt = Date.now()
    }
    function V(e, t) {
        var i, n = 0, s = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > n; n += 2 - t)
            s["margin" + (i = Ve[n])] = s["padding" + i] = e;
        return t && (s.opacity = s.width = e),
            s
    }
    function q(e, t, i) {
        for (var n, s = (U.tweeners[t] || []).concat(U.tweeners["*"]), a = 0, r = s.length; r > a; a++)
            if (n = s[a].call(i, t, e))
                return n
    }
    function X(e, t, i) {
        var n, s, a, r, o, l, c, d, u = "width" in t || "height" in t, h = this, p = {}, f = e.style, g = e.nodeType && qe(e), m = je.get(e, "fxshow");
        i.queue || (null == (r = we._queueHooks(e, "fx")).unqueued && (r.unqueued = 0,
            o = r.empty.fire,
            r.empty.fire = function () {
                r.unqueued || o()
            }
        ),
            r.unqueued++,
            h.always(function () {
                h.always(function () {
                    r.unqueued--,
                        we.queue(e, "fx").length || r.empty.fire()
                })
            }));
        for (n in t)
            if (s = t[n],
                bt.test(s)) {
                if (delete t[n],
                    a = a || "toggle" === s,
                    s === (g ? "hide" : "show")) {
                    if ("show" !== s || !m || void 0 === m[n])
                        continue;
                    g = !0
                }
                p[n] = m && m[n] || we.style(e, n)
            }
        if ((l = !we.isEmptyObject(t)) || !we.isEmptyObject(p)) {
            u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                null == (c = m && m.display) && (c = je.get(e, "display")),
                "none" === (d = we.css(e, "display")) && (c ? d = c : (x([e], !0),
                    c = e.style.display || c,
                    d = we.css(e, "display"),
                    x([e]))),
                ("inline" === d || "inline-block" === d && null != c) && "none" === we.css(e, "float") && (l || (h.done(function () {
                    f.display = c
                }),
                    null == c && (d = f.display,
                        c = "none" === d ? "" : d)),
                    f.display = "inline-block")),
                i.overflow && (f.overflow = "hidden",
                    h.always(function () {
                        f.overflow = i.overflow[0],
                            f.overflowX = i.overflow[1],
                            f.overflowY = i.overflow[2]
                    })),
                l = !1;
            for (n in p)
                l || (m ? "hidden" in m && (g = m.hidden) : m = je.access(e, "fxshow", {
                    display: c
                }),
                    a && (m.hidden = !g),
                    g && x([e], !0),
                    h.done(function () {
                        g || x([e]),
                            je.remove(e, "fxshow");
                        for (n in p)
                            we.style(e, n, p[n])
                    })),
                    l = q(g ? m[n] : 0, n, h),
                    n in m || (m[n] = l.start,
                        g && (l.end = l.start,
                            l.start = 0))
        }
    }
    function G(e, t) {
        var i, n, s, a, r;
        for (i in e)
            if (n = f(i),
                s = t[n],
                a = e[i],
                Array.isArray(a) && (s = a[1],
                    a = e[i] = a[0]),
                i !== n && (e[n] = a,
                    delete e[i]),
                (r = we.cssHooks[n]) && "expand" in r) {
                a = r.expand(a),
                    delete e[n];
                for (i in a)
                    i in e || (e[i] = a[i],
                        t[i] = s)
            } else
                t[n] = s
    }
    function U(e, t, i) {
        var n, s, a = 0, r = U.prefilters.length, o = we.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (s)
                return !1;
            for (var t = vt || Y(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), a = 0, r = c.tweens.length; r > a; a++)
                c.tweens[a].run(n);
            return o.notifyWith(e, [c, n, i]),
                1 > n && r ? i : (r || o.notifyWith(e, [c, 1, 0]),
                    o.resolveWith(e, [c]),
                    !1)
        }, c = o.promise({
            elem: e,
            props: we.extend({}, t),
            opts: we.extend(!0, {
                specialEasing: {},
                easing: we.easing._default
            }, i),
            originalProperties: t,
            originalOptions: i,
            startTime: vt || Y(),
            duration: i.duration,
            tweens: [],
            createTween: function (t, i) {
                var n = we.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(n),
                    n
            },
            stop: function (t) {
                var i = 0
                    , n = t ? c.tweens.length : 0;
                if (s)
                    return this;
                for (s = !0; n > i; i++)
                    c.tweens[i].run(1);
                return t ? (o.notifyWith(e, [c, 1, 0]),
                    o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]),
                    this
            }
        }), d = c.props;
        for (G(d, c.opts.specialEasing); r > a; a++)
            if (n = U.prefilters[a].call(c, e, d, c.opts))
                return ye(n.stop) && (we._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)),
                    n;
        return we.map(d, q, c),
            ye(c.opts.start) && c.opts.start.call(e, c),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
            we.fx.timer(we.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c
    }
    function K(e) {
        return (e.match(Ie) || []).join(" ")
    }
    function Z(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    function Q(e) {
        return Array.isArray(e) ? e : "string" == typeof e ? e.match(Ie) || [] : []
    }
    function J(e, t, i, s) {
        var a;
        if (Array.isArray(t))
            we.each(t, function (t, n) {
                i || Mt.test(e) ? s(e, n) : J(e + "[" + ("object" == typeof n && null != n ? t : "") + "]", n, i, s)
            });
        else if (i || "object" !== n(t))
            s(e, t);
        else
            for (a in t)
                J(e + "[" + a + "]", t[a], i, s)
    }
    function ee(e) {
        return function (t, i) {
            "string" != typeof t && (i = t,
                t = "*");
            var n, s = 0, a = t.toLowerCase().match(Ie) || [];
            if (ye(i))
                for (; n = a[s++];)
                    "+" === n[0] ? (n = n.slice(1) || "*",
                        (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
        }
    }
    function te(e, t, i, n) {
        function s(o) {
            var l;
            return a[o] = !0,
                we.each(e[o] || [], function (e, o) {
                    var c = o(t, i, n);
                    return "string" != typeof c || r || a[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                        s(c),
                        !1)
                }),
                l
        }
        var a = {}
            , r = e === Bt;
        return s(t.dataTypes[0]) || !a["*"] && s("*")
    }
    function ie(e, t) {
        var i, n, s = we.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
        return n && we.extend(!0, e, n),
            e
    }
    function ne(e, t, i) {
        for (var n, s, a, r, o = e.contents, l = e.dataTypes; "*" === l[0];)
            l.shift(),
                void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
        if (n)
            for (s in o)
                if (o[s] && o[s].test(n)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in i)
            a = l[0];
        else {
            for (s in i) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                r || (r = s)
            }
            a = a || r
        }
        return a ? (a !== l[0] && l.unshift(a),
            i[a]) : void 0
    }
    function se(e, t, i, n) {
        var s, a, r, o, l, c = {}, d = e.dataTypes.slice();
        if (d[1])
            for (r in e.converters)
                c[r.toLowerCase()] = e.converters[r];
        for (a = d.shift(); a;)
            if (e.responseFields[a] && (i[e.responseFields[a]] = t),
                !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                l = a,
                a = d.shift())
                if ("*" === a)
                    a = l;
                else if ("*" !== l && l !== a) {
                    if (!(r = c[l + " " + a] || c["* " + a]))
                        for (s in c)
                            if ((o = s.split(" "))[1] === a && (r = c[l + " " + o[0]] || c["* " + o[0]])) {
                                !0 === r ? r = c[s] : !0 !== c[s] && (a = o[0],
                                    d.unshift(o[1]));
                                break
                            }
                    if (!0 !== r)
                        if (r && e["throws"])
                            t = r(t);
                        else
                            try {
                                t = r(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: r ? e : "No conversion from " + l + " to " + a
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    var ae = []
        , re = e.document
        , oe = Object.getPrototypeOf
        , le = ae.slice
        , ce = ae.concat
        , de = ae.push
        , ue = ae.indexOf
        , he = {}
        , pe = he.toString
        , fe = he.hasOwnProperty
        , ge = fe.toString
        , me = ge.call(Object)
        , ve = {}
        , ye = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
        , be = function (e) {
            return null != e && e === e.window
        }
        , xe = {
            type: !0,
            src: !0,
            noModule: !0
        }
        , we = function (e, t) {
            return new we.fn.init(e, t)
        }
        , _e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    we.fn = we.prototype = {
        jquery: "3.3.1",
        constructor: we,
        length: 0,
        toArray: function () {
            return le.call(this)
        },
        get: function (e) {
            return null == e ? le.call(this) : 0 > e ? this[e + this.length] : this[e]
        },
        pushStack: function (e) {
            var t = we.merge(this.constructor(), e);
            return t.prevObject = this,
                t
        },
        each: function (e) {
            return we.each(this, e)
        },
        map: function (e) {
            return this.pushStack(we.map(this, function (t, i) {
                return e.call(t, i, t)
            }))
        },
        slice: function () {
            return this.pushStack(le.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (e) {
            var t = this.length
                , i = +e + (0 > e ? t : 0);
            return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: de,
        sort: ae.sort,
        splice: ae.splice
    },
        we.extend = we.fn.extend = function () {
            var e, t, i, n, s, a, r = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof r && (c = r,
                r = arguments[o] || {},
                o++),
                "object" == typeof r || ye(r) || (r = {}),
                o === l && (r = this,
                    o--); l > o; o++)
                if (null != (e = arguments[o]))
                    for (t in e)
                        i = r[t],
                            r !== (n = e[t]) && (c && n && (we.isPlainObject(n) || (s = Array.isArray(n))) ? (s ? (s = !1,
                                a = i && Array.isArray(i) ? i : []) : a = i && we.isPlainObject(i) ? i : {},
                                r[t] = we.extend(c, a, n)) : void 0 !== n && (r[t] = n));
            return r
        }
        ,
        we.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e)
            },
            noop: function () { },
            isPlainObject: function (e) {
                var t, i;
                return !(!e || "[object Object]" !== pe.call(e) || (t = oe(e)) && ("function" != typeof (i = fe.call(t, "constructor") && t.constructor) || ge.call(i) !== me))
            },
            isEmptyObject: function (e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function (e) {
                i(e)
            },
            each: function (e, t) {
                var i, n = 0;
                if (s(e))
                    for (i = e.length; i > n && !1 !== t.call(e[n], n, e[n]); n++)
                        ;
                else
                    for (n in e)
                        if (!1 === t.call(e[n], n, e[n]))
                            break;
                return e
            },
            trim: function (e) {
                return null == e ? "" : (e + "").replace(_e, "")
            },
            makeArray: function (e, t) {
                var i = t || [];
                return null != e && (s(Object(e)) ? we.merge(i, "string" == typeof e ? [e] : e) : de.call(i, e)),
                    i
            },
            inArray: function (e, t, i) {
                return null == t ? -1 : ue.call(t, e, i)
            },
            merge: function (e, t) {
                for (var i = +t.length, n = 0, s = e.length; i > n; n++)
                    e[s++] = t[n];
                return e.length = s,
                    e
            },
            grep: function (e, t, i) {
                for (var n, s = [], a = 0, r = e.length, o = !i; r > a; a++)
                    (n = !t(e[a], a)) !== o && s.push(e[a]);
                return s
            },
            map: function (e, t, i) {
                var n, a, r = 0, o = [];
                if (s(e))
                    for (n = e.length; n > r; r++)
                        null != (a = t(e[r], r, i)) && o.push(a);
                else
                    for (r in e)
                        null != (a = t(e[r], r, i)) && o.push(a);
                return ce.apply([], o)
            },
            guid: 1,
            support: ve
        }),
        "function" == typeof Symbol && (we.fn[Symbol.iterator] = ae[Symbol.iterator]),
        we.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            he["[object " + t + "]"] = t.toLowerCase()
        });
    var ke = function (e) {
        function t(e, t, i, n) {
            var s, a, r, o, l, c, d, h = t && t.ownerDocument, f = t ? t.nodeType : 9;
            if (i = i || [],
                "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
                return i;
            if (!n && ((t ? t.ownerDocument || t : R) !== P && I(t),
                t = t || P,
                O)) {
                if (11 !== f && (l = ve.exec(e)))
                    if (s = l[1]) {
                        if (9 === f) {
                            if (!(r = t.getElementById(s)))
                                return i;
                            if (r.id === s)
                                return i.push(r),
                                    i
                        } else if (h && (r = h.getElementById(s)) && j(t, r) && r.id === s)
                            return i.push(r),
                                i
                    } else {
                        if (l[2])
                            return Q.apply(i, t.getElementsByTagName(e)),
                                i;
                        if ((s = l[3]) && _.getElementsByClassName && t.getElementsByClassName)
                            return Q.apply(i, t.getElementsByClassName(s)),
                                i
                    }
                if (_.qsa && !q[e + " "] && (!N || !N.test(e))) {
                    if (1 !== f)
                        h = t,
                            d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(we, _e) : t.setAttribute("id", o = F),
                            a = (c = T(e)).length; a--;)
                            c[a] = "#" + o + " " + p(c[a]);
                        d = c.join(","),
                            h = ye.test(e) && u(t.parentNode) || t
                    }
                    if (d)
                        try {
                            return Q.apply(i, h.querySelectorAll(d)),
                                i
                        } catch (e) { } finally {
                            o === F && t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(oe, "$1"), t, i, n)
        }
        function i() {
            function e(i, n) {
                return t.push(i + " ") > k.cacheLength && delete e[t.shift()],
                    e[i + " "] = n
            }
            var t = [];
            return e
        }
        function n(e) {
            return e[F] = !0,
                e
        }
        function s(e) {
            var t = P.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function a(e, t) {
            for (var i = e.split("|"), n = i.length; n--;)
                k.attrHandle[i[n]] = t
        }
        function r(e, t) {
            var i = t && e
                , n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n)
                return n;
            if (i)
                for (; i = i.nextSibling;)
                    if (i === t)
                        return -1;
            return e ? 1 : -1
        }
        function o(e) {
            return function (t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }
        function l(e) {
            return function (t) {
                var i = t.nodeName.toLowerCase();
                return ("input" === i || "button" === i) && t.type === e
            }
        }
        function c(e) {
            return function (t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Se(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }
        function d(e) {
            return n(function (t) {
                return t = +t,
                    n(function (i, n) {
                        for (var s, a = e([], i.length, t), r = a.length; r--;)
                            i[s = a[r]] && (i[s] = !(n[s] = i[s]))
                    })
            })
        }
        function u(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function h() { }
        function p(e) {
            for (var t = 0, i = e.length, n = ""; i > t; t++)
                n += e[t].value;
            return n
        }
        function f(e, t, i) {
            var n = t.dir
                , s = t.next
                , a = s || n
                , r = i && "parentNode" === a
                , o = B++;
            return t.first ? function (t, i, s) {
                for (; t = t[n];)
                    if (1 === t.nodeType || r)
                        return e(t, i, s);
                return !1
            }
                : function (t, i, l) {
                    var c, d, u, h = [W, o];
                    if (l) {
                        for (; t = t[n];)
                            if ((1 === t.nodeType || r) && e(t, i, l))
                                return !0
                    } else
                        for (; t = t[n];)
                            if (1 === t.nodeType || r)
                                if (u = t[F] || (t[F] = {}),
                                    d = u[t.uniqueID] || (u[t.uniqueID] = {}),
                                    s && s === t.nodeName.toLowerCase())
                                    t = t[n] || t;
                                else {
                                    if ((c = d[a]) && c[0] === W && c[1] === o)
                                        return h[2] = c[2];
                                    if (d[a] = h,
                                        h[2] = e(t, i, l))
                                        return !0
                                }
                    return !1
                }
        }
        function g(e) {
            return e.length > 1 ? function (t, i, n) {
                for (var s = e.length; s--;)
                    if (!e[s](t, i, n))
                        return !1;
                return !0
            }
                : e[0]
        }
        function m(e, i, n) {
            for (var s = 0, a = i.length; a > s; s++)
                t(e, i[s], n);
            return n
        }
        function v(e, t, i, n, s) {
            for (var a, r = [], o = 0, l = e.length, c = null != t; l > o; o++)
                (a = e[o]) && (i && !i(a, n, s) || (r.push(a),
                    c && t.push(o)));
            return r
        }
        function y(e, t, i, s, a, r) {
            return s && !s[F] && (s = y(s)),
                a && !a[F] && (a = y(a, r)),
                n(function (n, r, o, l) {
                    var c, d, u, h = [], p = [], f = r.length, g = n || m(t || "*", o.nodeType ? [o] : o, []), y = !e || !n && t ? g : v(g, h, e, o, l), b = i ? a || (n ? e : f || s) ? [] : r : y;
                    if (i && i(y, b, o, l),
                        s)
                        for (c = v(b, p),
                            s(c, [], o, l),
                            d = c.length; d--;)
                            (u = c[d]) && (b[p[d]] = !(y[p[d]] = u));
                    if (n) {
                        if (a || e) {
                            if (a) {
                                for (c = [],
                                    d = b.length; d--;)
                                    (u = b[d]) && c.push(y[d] = u);
                                a(null, b = [], c, l)
                            }
                            for (d = b.length; d--;)
                                (u = b[d]) && (c = a ? ee(n, u) : h[d]) > -1 && (n[c] = !(r[c] = u))
                        }
                    } else
                        b = v(b === r ? b.splice(f, b.length) : b),
                            a ? a(null, r, b, l) : Q.apply(r, b)
                })
        }
        function b(e) {
            for (var t, i, n, s = e.length, a = k.relative[e[0].type], r = a || k.relative[" "], o = a ? 1 : 0, l = f(function (e) {
                return e === t
            }, r, !0), c = f(function (e) {
                return ee(t, e) > -1
            }, r, !0), d = [function (e, i, n) {
                var s = !a && (n || i !== $) || ((t = i).nodeType ? l(e, i, n) : c(e, i, n));
                return t = null,
                    s
            }
            ]; s > o; o++)
                if (i = k.relative[e[o].type])
                    d = [f(g(d), i)];
                else {
                    if ((i = k.filter[e[o].type].apply(null, e[o].matches))[F]) {
                        for (n = ++o; s > n && !k.relative[e[n].type]; n++)
                            ;
                        return y(o > 1 && g(d), o > 1 && p(e.slice(0, o - 1).concat({
                            value: " " === e[o - 2].type ? "*" : ""
                        })).replace(oe, "$1"), i, n > o && b(e.slice(o, n)), s > n && b(e = e.slice(n)), s > n && p(e))
                    }
                    d.push(i)
                }
            return g(d)
        }
        function x(e, i) {
            var s = i.length > 0
                , a = e.length > 0
                , r = function (n, r, o, l, c) {
                    var d, u, h, p = 0, f = "0", g = n && [], m = [], y = $, b = n || a && k.find.TAG("*", c), x = W += null == y ? 1 : Math.random() || .1, w = b.length;
                    for (c && ($ = r === P || r || c); f !== w && null != (d = b[f]); f++) {
                        if (a && d) {
                            for (u = 0,
                                r || d.ownerDocument === P || (I(d),
                                    o = !O); h = e[u++];)
                                if (h(d, r || P, o)) {
                                    l.push(d);
                                    break
                                }
                            c && (W = x)
                        }
                        s && ((d = !h && d) && p--,
                            n && g.push(d))
                    }
                    if (p += f,
                        s && f !== p) {
                        for (u = 0; h = i[u++];)
                            h(g, m, r, o);
                        if (n) {
                            if (p > 0)
                                for (; f--;)
                                    g[f] || m[f] || (m[f] = K.call(l));
                            m = v(m)
                        }
                        Q.apply(l, m),
                            c && !n && m.length > 0 && p + i.length > 1 && t.uniqueSort(l)
                    }
                    return c && (W = x,
                        $ = y),
                        g
                };
            return s ? n(r) : r
        }
        var w, _, k, S, C, T, E, A, $, D, M, I, P, L, O, N, z, H, j, F = "sizzle" + 1 * new Date, R = e.document, W = 0, B = 0, Y = i(), V = i(), q = i(), X = function (e, t) {
            return e === t && (M = !0),
                0
        }, G = {}.hasOwnProperty, U = [], K = U.pop, Z = U.push, Q = U.push, J = U.slice, ee = function (e, t) {
            for (var i = 0, n = e.length; n > i; i++)
                if (e[i] === t)
                    return i;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ie = "[\\x20\\t\\r\\n\\f]", ne = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+", se = "\\[" + ie + "*(" + ne + ")(?:" + ie + "*([*^$|!~]?=)" + ie + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ne + "))|)" + ie + "*\\]", ae = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + se + ")*)|.*)\\)|)", re = new RegExp(ie + "+", "g"), oe = new RegExp("^" + ie + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ie + "+$", "g"), le = new RegExp("^" + ie + "*," + ie + "*"), ce = new RegExp("^" + ie + "*([>+~]|" + ie + ")" + ie + "*"), de = new RegExp("=" + ie + "*([^\\]'\"]*?)" + ie + "*\\]", "g"), ue = new RegExp(ae), he = new RegExp("^" + ne + "$"), pe = {
            ID: new RegExp("^#(" + ne + ")"),
            CLASS: new RegExp("^\\.(" + ne + ")"),
            TAG: new RegExp("^(" + ne + "|[*])"),
            ATTR: new RegExp("^" + se),
            PSEUDO: new RegExp("^" + ae),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ie + "*(even|odd|(([+-]|)(\\d*)n|)" + ie + "*(?:([+-]|)" + ie + "*(\\d+)|))" + ie + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + te + ")$", "i"),
            needsContext: new RegExp("^" + ie + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ie + "*((?:-\\d)?\\d*)" + ie + "*\\)|)(?=[^-]|$)", "i")
        }, fe = /^(?:input|select|textarea|button)$/i, ge = /^h\d$/i, me = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = new RegExp("\\\\([\\da-f]{1,6}" + ie + "?|(" + ie + ")|.)", "ig"), xe = function (e, t, i) {
            var n = "0x" + t - 65536;
            return n !== n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        }, we = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, _e = function (e, t) {
            return t ? "\x00" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
        }, ke = function () {
            I()
        }, Se = f(function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            Q.apply(U = J.call(R.childNodes), R.childNodes),
                U[R.childNodes.length].nodeType
        } catch (e) {
            Q = {
                apply: U.length ? function (e, t) {
                    Z.apply(e, J.call(t))
                }
                    : function (e, t) {
                        for (var i = e.length, n = 0; e[i++] = t[n++];)
                            ;
                        e.length = i - 1
                    }
            }
        }
        _ = t.support = {},
            C = t.isXML = function (e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }
            ,
            I = t.setDocument = function (e) {
                var t, i, n = e ? e.ownerDocument || e : R;
                return n !== P && 9 === n.nodeType && n.documentElement ? (P = n,
                    L = P.documentElement,
                    O = !C(P),
                    R !== P && (i = P.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ke, !1) : i.attachEvent && i.attachEvent("onunload", ke)),
                    _.attributes = s(function (e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    _.getElementsByTagName = s(function (e) {
                        return e.appendChild(P.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    _.getElementsByClassName = me.test(P.getElementsByClassName),
                    _.getById = s(function (e) {
                        return L.appendChild(e).id = F,
                            !P.getElementsByName || !P.getElementsByName(F).length
                    }),
                    _.getById ? (k.filter.ID = function (e) {
                        var t = e.replace(be, xe);
                        return function (e) {
                            return e.getAttribute("id") === t
                        }
                    }
                        ,
                        k.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && O) {
                                var i = t.getElementById(e);
                                return i ? [i] : []
                            }
                        }
                    ) : (k.filter.ID = function (e) {
                        var t = e.replace(be, xe);
                        return function (e) {
                            var i = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                            return i && i.value === t
                        }
                    }
                        ,
                        k.find.ID = function (e, t) {
                            if ("undefined" != typeof t.getElementById && O) {
                                var i, n, s, a = t.getElementById(e);
                                if (a) {
                                    if ((i = a.getAttributeNode("id")) && i.value === e)
                                        return [a];
                                    for (s = t.getElementsByName(e),
                                        n = 0; a = s[n++];)
                                        if ((i = a.getAttributeNode("id")) && i.value === e)
                                            return [a]
                                }
                                return []
                            }
                        }
                    ),
                    k.find.TAG = _.getElementsByTagName ? function (e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function (e, t) {
                            var i, n = [], s = 0, a = t.getElementsByTagName(e);
                            if ("*" === e) {
                                for (; i = a[s++];)
                                    1 === i.nodeType && n.push(i);
                                return n
                            }
                            return a
                        }
                    ,
                    k.find.CLASS = _.getElementsByClassName && function (e, t) {
                        return "undefined" != typeof t.getElementsByClassName && O ? t.getElementsByClassName(e) : void 0
                    }
                    ,
                    z = [],
                    N = [],
                    (_.qsa = me.test(P.querySelectorAll)) && (s(function (e) {
                        L.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                            e.querySelectorAll("[msallowcapture^='']").length && N.push("[*^$]=" + ie + "*(?:''|\"\")"),
                            e.querySelectorAll("[selected]").length || N.push("\\[" + ie + "*(?:value|" + te + ")"),
                            e.querySelectorAll("[id~=" + F + "-]").length || N.push("~="),
                            e.querySelectorAll(":checked").length || N.push(":checked"),
                            e.querySelectorAll("a#" + F + "+*").length || N.push(".#.+[+~]")
                    }),
                        s(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = P.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && N.push("name" + ie + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && N.push(":enabled", ":disabled"),
                                L.appendChild(e).disabled = !0,
                                2 !== e.querySelectorAll(":disabled").length && N.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                N.push(",.*:")
                        })),
                    (_.matchesSelector = me.test(H = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && s(function (e) {
                        _.disconnectedMatch = H.call(e, "*"),
                            H.call(e, "[s!='']:x"),
                            z.push("!=", ae)
                    }),
                    N = N.length && new RegExp(N.join("|")),
                    z = z.length && new RegExp(z.join("|")),
                    t = me.test(L.compareDocumentPosition),
                    j = t || me.test(L.contains) ? function (e, t) {
                        var i = 9 === e.nodeType ? e.documentElement : e
                            , n = t && t.parentNode;
                        return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
                    }
                        : function (e, t) {
                            if (t)
                                for (; t = t.parentNode;)
                                    if (t === e)
                                        return !0;
                            return !1
                        }
                    ,
                    X = t ? function (e, t) {
                        if (e === t)
                            return M = !0,
                                0;
                        var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === P || e.ownerDocument === R && j(R, e) ? -1 : t === P || t.ownerDocument === R && j(R, t) ? 1 : D ? ee(D, e) - ee(D, t) : 0 : 4 & i ? -1 : 1)
                    }
                        : function (e, t) {
                            if (e === t)
                                return M = !0,
                                    0;
                            var i, n = 0, s = e.parentNode, a = t.parentNode, o = [e], l = [t];
                            if (!s || !a)
                                return e === P ? -1 : t === P ? 1 : s ? -1 : a ? 1 : D ? ee(D, e) - ee(D, t) : 0;
                            if (s === a)
                                return r(e, t);
                            for (i = e; i = i.parentNode;)
                                o.unshift(i);
                            for (i = t; i = i.parentNode;)
                                l.unshift(i);
                            for (; o[n] === l[n];)
                                n++;
                            return n ? r(o[n], l[n]) : o[n] === R ? -1 : l[n] === R ? 1 : 0
                        }
                    ,
                    P) : P
            }
            ,
            t.matches = function (e, i) {
                return t(e, null, null, i)
            }
            ,
            t.matchesSelector = function (e, i) {
                if ((e.ownerDocument || e) !== P && I(e),
                    i = i.replace(de, "='$1']"),
                    _.matchesSelector && O && !q[i + " "] && (!z || !z.test(i)) && (!N || !N.test(i)))
                    try {
                        var n = H.call(e, i);
                        if (n || _.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) { }
                return t(i, P, null, [e]).length > 0
            }
            ,
            t.contains = function (e, t) {
                return (e.ownerDocument || e) !== P && I(e),
                    j(e, t)
            }
            ,
            t.attr = function (e, t) {
                (e.ownerDocument || e) !== P && I(e);
                var i = k.attrHandle[t.toLowerCase()]
                    , n = i && G.call(k.attrHandle, t.toLowerCase()) ? i(e, t, !O) : void 0;
                return void 0 !== n ? n : _.attributes || !O ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }
            ,
            t.escape = function (e) {
                return (e + "").replace(we, _e)
            }
            ,
            t.error = function (e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function (e) {
                var t, i = [], n = 0, s = 0;
                if (M = !_.detectDuplicates,
                    D = !_.sortStable && e.slice(0),
                    e.sort(X),
                    M) {
                    for (; t = e[s++];)
                        t === e[s] && (n = i.push(s));
                    for (; n--;)
                        e.splice(i[n], 1)
                }
                return D = null,
                    e
            }
            ,
            S = t.getText = function (e) {
                var t, i = "", n = 0, s = e.nodeType;
                if (s) {
                    if (1 === s || 9 === s || 11 === s) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            i += S(e)
                    } else if (3 === s || 4 === s)
                        return e.nodeValue
                } else
                    for (; t = e[n++];)
                        i += S(t);
                return i
            }
            ,
            (k = t.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: pe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function (e) {
                        return e[1] = e[1].replace(be, xe),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe),
                            "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function (e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function (e) {
                        var t, i = !e[6] && e[2];
                        return pe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && ue.test(i) && (t = T(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t),
                            e[2] = i.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (e) {
                        var t = e.replace(be, xe).toLowerCase();
                        return "*" === e ? function () {
                            return !0
                        }
                            : function (e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                    },
                    CLASS: function (e) {
                        var t = Y[e + " "];
                        return t || (t = new RegExp("(^|" + ie + ")" + e + "(" + ie + "|$)")) && Y(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function (e, i, n) {
                        return function (s) {
                            var a = t.attr(s, e);
                            return null == a ? "!=" === i : !i || (a += "",
                                "=" === i ? a === n : "!=" === i ? a !== n : "^=" === i ? n && 0 === a.indexOf(n) : "*=" === i ? n && a.indexOf(n) > -1 : "$=" === i ? n && a.slice(-n.length) === n : "~=" === i ? (" " + a.replace(re, " ") + " ").indexOf(n) > -1 : "|=" === i && (a === n || a.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function (e, t, i, n, s) {
                        var a = "nth" !== e.slice(0, 3)
                            , r = "last" !== e.slice(-4)
                            , o = "of-type" === t;
                        return 1 === n && 0 === s ? function (e) {
                            return !!e.parentNode
                        }
                            : function (t, i, l) {
                                var c, d, u, h, p, f, g = a !== r ? "nextSibling" : "previousSibling", m = t.parentNode, v = o && t.nodeName.toLowerCase(), y = !l && !o, b = !1;
                                if (m) {
                                    if (a) {
                                        for (; g;) {
                                            for (h = t; h = h[g];)
                                                if (o ? h.nodeName.toLowerCase() === v : 1 === h.nodeType)
                                                    return !1;
                                            f = g = "only" === e && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [r ? m.firstChild : m.lastChild],
                                        r && y) {
                                        for (b = (p = (c = (d = (u = (h = m)[F] || (h[F] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === W && c[1]) && c[2],
                                            h = p && m.childNodes[p]; h = ++p && h && h[g] || (b = p = 0) || f.pop();)
                                            if (1 === h.nodeType && ++b && h === t) {
                                                d[e] = [W, p, b];
                                                break
                                            }
                                    } else if (y && (b = p = (c = (d = (u = (h = t)[F] || (h[F] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] || [])[0] === W && c[1]),
                                        !1 === b)
                                        for (; (h = ++p && h && h[g] || (b = p = 0) || f.pop()) && ((o ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((d = (u = h[F] || (h[F] = {}))[h.uniqueID] || (u[h.uniqueID] = {}))[e] = [W, b]),
                                            h !== t));)
                                            ;
                                    return (b -= s) === n || b % n == 0 && b / n >= 0
                                }
                            }
                    },
                    PSEUDO: function (e, i) {
                        var s, a = k.pseudos[e] || k.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[F] ? a(i) : a.length > 1 ? (s = [e, e, "", i],
                            k.setFilters.hasOwnProperty(e.toLowerCase()) ? n(function (e, t) {
                                for (var n, s = a(e, i), r = s.length; r--;)
                                    e[n = ee(e, s[r])] = !(t[n] = s[r])
                            }) : function (e) {
                                return a(e, 0, s)
                            }
                        ) : a
                    }
                },
                pseudos: {
                    not: n(function (e) {
                        var t = []
                            , i = []
                            , s = E(e.replace(oe, "$1"));
                        return s[F] ? n(function (e, t, i, n) {
                            for (var a, r = s(e, null, n, []), o = e.length; o--;)
                                (a = r[o]) && (e[o] = !(t[o] = a))
                        }) : function (e, n, a) {
                            return t[0] = e,
                                s(t, null, a, i),
                                t[0] = null,
                                !i.pop()
                        }
                    }),
                    has: n(function (e) {
                        return function (i) {
                            return t(e, i).length > 0
                        }
                    }),
                    contains: n(function (e) {
                        return e = e.replace(be, xe),
                            function (t) {
                                return (t.textContent || t.innerText || S(t)).indexOf(e) > -1
                            }
                    }),
                    lang: n(function (e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(be, xe).toLowerCase(),
                            function (t) {
                                var i;
                                do
                                    if (i = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function (t) {
                        var i = e.location && e.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function (e) {
                        return e === L
                    },
                    focus: function (e) {
                        return e === P.activeElement && (!P.hasFocus || P.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: c(!1),
                    disabled: c(!0),
                    checked: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function (e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                            !0 === e.selected
                    },
                    empty: function (e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function (e) {
                        return !k.pseudos.empty(e)
                    },
                    header: function (e) {
                        return ge.test(e.nodeName)
                    },
                    input: function (e) {
                        return fe.test(e.nodeName)
                    },
                    button: function (e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function (e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: d(function () {
                        return [0]
                    }),
                    last: d(function (e, t) {
                        return [t - 1]
                    }),
                    eq: d(function (e, t, i) {
                        return [0 > i ? i + t : i]
                    }),
                    even: d(function (e, t) {
                        for (var i = 0; t > i; i += 2)
                            e.push(i);
                        return e
                    }),
                    odd: d(function (e, t) {
                        for (var i = 1; t > i; i += 2)
                            e.push(i);
                        return e
                    }),
                    lt: d(function (e, t, i) {
                        for (var n = 0 > i ? i + t : i; --n >= 0;)
                            e.push(n);
                        return e
                    }),
                    gt: d(function (e, t, i) {
                        for (var n = 0 > i ? i + t : i; ++n < t;)
                            e.push(n);
                        return e
                    })
                }
            }).pseudos.nth = k.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            k.pseudos[w] = o(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            k.pseudos[w] = l(w);
        return h.prototype = k.filters = k.pseudos,
            k.setFilters = new h,
            T = t.tokenize = function (e, i) {
                var n, s, a, r, o, l, c, d = V[e + " "];
                if (d)
                    return i ? 0 : d.slice(0);
                for (o = e,
                    l = [],
                    c = k.preFilter; o;) {
                    n && !(s = le.exec(o)) || (s && (o = o.slice(s[0].length) || o),
                        l.push(a = [])),
                        n = !1,
                        (s = ce.exec(o)) && (n = s.shift(),
                            a.push({
                                value: n,
                                type: s[0].replace(oe, " ")
                            }),
                            o = o.slice(n.length));
                    for (r in k.filter)
                        !(s = pe[r].exec(o)) || c[r] && !(s = c[r](s)) || (n = s.shift(),
                            a.push({
                                value: n,
                                type: r,
                                matches: s
                            }),
                            o = o.slice(n.length));
                    if (!n)
                        break
                }
                return i ? o.length : o ? t.error(e) : V(e, l).slice(0)
            }
            ,
            E = t.compile = function (e, t) {
                var i, n = [], s = [], a = q[e + " "];
                if (!a) {
                    for (t || (t = T(e)),
                        i = t.length; i--;)
                        (a = b(t[i]))[F] ? n.push(a) : s.push(a);
                    (a = q(e, x(s, n))).selector = e
                }
                return a
            }
            ,
            A = t.select = function (e, t, i, n) {
                var s, a, r, o, l, c = "function" == typeof e && e, d = !n && T(e = c.selector || e);
                if (i = i || [],
                    1 === d.length) {
                    if ((a = d[0] = d[0].slice(0)).length > 2 && "ID" === (r = a[0]).type && 9 === t.nodeType && O && k.relative[a[1].type]) {
                        if (!(t = (k.find.ID(r.matches[0].replace(be, xe), t) || [])[0]))
                            return i;
                        c && (t = t.parentNode),
                            e = e.slice(a.shift().value.length)
                    }
                    for (s = pe.needsContext.test(e) ? 0 : a.length; s-- && (r = a[s],
                        !k.relative[o = r.type]);)
                        if ((l = k.find[o]) && (n = l(r.matches[0].replace(be, xe), ye.test(a[0].type) && u(t.parentNode) || t))) {
                            if (a.splice(s, 1),
                                !(e = n.length && p(a)))
                                return Q.apply(i, n),
                                    i;
                            break
                        }
                }
                return (c || E(e, d))(n, t, !O, i, !t || ye.test(e) && u(t.parentNode) || t),
                    i
            }
            ,
            _.sortStable = F.split("").sort(X).join("") === F,
            _.detectDuplicates = !!M,
            I(),
            _.sortDetached = s(function (e) {
                return 1 & e.compareDocumentPosition(P.createElement("fieldset"))
            }),
            s(function (e) {
                return e.innerHTML = "<a href='#'></a>",
                    "#" === e.firstChild.getAttribute("href")
            }) || a("type|href|height|width", function (e, t, i) {
                return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            _.attributes && s(function (e) {
                return e.innerHTML = "<input/>",
                    e.firstChild.setAttribute("value", ""),
                    "" === e.firstChild.getAttribute("value")
            }) || a("value", function (e, t, i) {
                return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }),
            s(function (e) {
                return null == e.getAttribute("disabled")
            }) || a(te, function (e, t, i) {
                var n;
                return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }),
            t
    }(e);
    we.find = ke,
        we.expr = ke.selectors,
        we.expr[":"] = we.expr.pseudos,
        we.uniqueSort = we.unique = ke.uniqueSort,
        we.text = ke.getText,
        we.isXMLDoc = ke.isXML,
        we.contains = ke.contains,
        we.escapeSelector = ke.escape;
    var Se = function (e, t, i) {
        for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (s && we(e).is(i))
                    break;
                n.push(e)
            }
        return n
    }
        , Ce = function (e, t) {
            for (var i = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && i.push(e);
            return i
        }
        , Te = we.expr.match.needsContext
        , Ee = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    we.filter = function (e, t, i) {
        var n = t[0];
        return i && (e = ":not(" + e + ")"),
            1 === t.length && 1 === n.nodeType ? we.find.matchesSelector(n, e) ? [n] : [] : we.find.matches(e, we.grep(t, function (e) {
                return 1 === e.nodeType
            }))
    }
        ,
        we.fn.extend({
            find: function (e) {
                var t, i, n = this.length, s = this;
                if ("string" != typeof e)
                    return this.pushStack(we(e).filter(function () {
                        for (t = 0; n > t; t++)
                            if (we.contains(s[t], this))
                                return !0
                    }));
                for (i = this.pushStack([]),
                    t = 0; n > t; t++)
                    we.find(e, s[t], i);
                return n > 1 ? we.uniqueSort(i) : i
            },
            filter: function (e) {
                return this.pushStack(r(this, e || [], !1))
            },
            not: function (e) {
                return this.pushStack(r(this, e || [], !0))
            },
            is: function (e) {
                return !!r(this, "string" == typeof e && Te.test(e) ? we(e) : e || [], !1).length
            }
        });
    var Ae, $e = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (we.fn.init = function (e, t, i) {
        var n, s;
        if (!e)
            return this;
        if (i = i || Ae,
            "string" == typeof e) {
            if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : $e.exec(e)) || !n[1] && t)
                return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof we ? t[0] : t,
                    we.merge(this, we.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : re, !0)),
                    Ee.test(n[1]) && we.isPlainObject(t))
                    for (n in t)
                        ye(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            return (s = re.getElementById(n[2])) && (this[0] = s,
                this.length = 1),
                this
        }
        return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : ye(e) ? void 0 !== i.ready ? i.ready(e) : e(we) : we.makeArray(e, this)
    }
    ).prototype = we.fn,
        Ae = we(re);
    var De = /^(?:parents|prev(?:Until|All))/
        , Me = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    we.fn.extend({
        has: function (e) {
            var t = we(e, this)
                , i = t.length;
            return this.filter(function () {
                for (var e = 0; i > e; e++)
                    if (we.contains(this, t[e]))
                        return !0
            })
        },
        closest: function (e, t) {
            var i, n = 0, s = this.length, a = [], r = "string" != typeof e && we(e);
            if (!Te.test(e))
                for (; s > n; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && we.find.matchesSelector(i, e))) {
                            a.push(i);
                            break
                        }
            return this.pushStack(a.length > 1 ? we.uniqueSort(a) : a)
        },
        index: function (e) {
            return e ? "string" == typeof e ? ue.call(we(e), this[0]) : ue.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (e, t) {
            return this.pushStack(we.uniqueSort(we.merge(this.get(), we(e, t))))
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
        we.each({
            parent: function (e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function (e) {
                return Se(e, "parentNode")
            },
            parentsUntil: function (e, t, i) {
                return Se(e, "parentNode", i)
            },
            next: function (e) {
                return o(e, "nextSibling")
            },
            prev: function (e) {
                return o(e, "previousSibling")
            },
            nextAll: function (e) {
                return Se(e, "nextSibling")
            },
            prevAll: function (e) {
                return Se(e, "previousSibling")
            },
            nextUntil: function (e, t, i) {
                return Se(e, "nextSibling", i)
            },
            prevUntil: function (e, t, i) {
                return Se(e, "previousSibling", i)
            },
            siblings: function (e) {
                return Ce((e.parentNode || {}).firstChild, e)
            },
            children: function (e) {
                return Ce(e.firstChild)
            },
            contents: function (e) {
                return a(e, "iframe") ? e.contentDocument : (a(e, "template") && (e = e.content || e),
                    we.merge([], e.childNodes))
            }
        }, function (e, t) {
            we.fn[e] = function (i, n) {
                var s = we.map(this, t, i);
                return "Until" !== e.slice(-5) && (n = i),
                    n && "string" == typeof n && (s = we.filter(n, s)),
                    this.length > 1 && (Me[e] || we.uniqueSort(s),
                        De.test(e) && s.reverse()),
                    this.pushStack(s)
            }
        });
    var Ie = /[^\x20\t\r\n\f]+/g;
    we.Callbacks = function (e) {
        e = "string" == typeof e ? l(e) : we.extend({}, e);
        var t, i, s, a, r = [], o = [], c = -1, d = function () {
            for (a = a || e.once,
                s = t = !0; o.length; c = -1)
                for (i = o.shift(); ++c < r.length;)
                    !1 === r[c].apply(i[0], i[1]) && e.stopOnFalse && (c = r.length,
                        i = !1);
            e.memory || (i = !1),
                t = !1,
                a && (r = i ? [] : "")
        }, u = {
            add: function () {
                return r && (i && !t && (c = r.length - 1,
                    o.push(i)),
                    function s(t) {
                        we.each(t, function (t, i) {
                            ye(i) ? e.unique && u.has(i) || r.push(i) : i && i.length && "string" !== n(i) && s(i)
                        })
                    }(arguments),
                    i && !t && d()),
                    this
            },
            remove: function () {
                return we.each(arguments, function (e, t) {
                    for (var i; (i = we.inArray(t, r, i)) > -1;)
                        r.splice(i, 1),
                            c >= i && c--
                }),
                    this
            },
            has: function (e) {
                return e ? we.inArray(e, r) > -1 : r.length > 0
            },
            empty: function () {
                return r && (r = []),
                    this
            },
            disable: function () {
                return a = o = [],
                    r = i = "",
                    this
            },
            disabled: function () {
                return !r
            },
            lock: function () {
                return a = o = [],
                    i || t || (r = i = ""),
                    this
            },
            locked: function () {
                return !!a
            },
            fireWith: function (e, i) {
                return a || (i = [e, (i = i || []).slice ? i.slice() : i],
                    o.push(i),
                    t || d()),
                    this
            },
            fire: function () {
                return u.fireWith(this, arguments),
                    this
            },
            fired: function () {
                return !!s
            }
        };
        return u
    }
        ,
        we.extend({
            Deferred: function (t) {
                var i = [["notify", "progress", we.Callbacks("memory"), we.Callbacks("memory"), 2], ["resolve", "done", we.Callbacks("once memory"), we.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", we.Callbacks("once memory"), we.Callbacks("once memory"), 1, "rejected"]]
                    , n = "pending"
                    , s = {
                        state: function () {
                            return n
                        },
                        always: function () {
                            return a.done(arguments).fail(arguments),
                                this
                        },
                        "catch": function (e) {
                            return s.then(null, e)
                        },
                        pipe: function () {
                            var e = arguments;
                            return we.Deferred(function (t) {
                                we.each(i, function (i, n) {
                                    var s = ye(e[n[4]]) && e[n[4]];
                                    a[n[1]](function () {
                                        var e = s && s.apply(this, arguments);
                                        e && ye(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[n[0] + "With"](this, s ? [e] : arguments)
                                    })
                                }),
                                    e = null
                            }).promise()
                        },
                        then: function (t, n, s) {
                            function a(t, i, n, s) {
                                return function () {
                                    var o = this
                                        , l = arguments
                                        , u = function () {
                                            var e, u;
                                            if (!(r > t)) {
                                                if ((e = n.apply(o, l)) === i.promise())
                                                    throw new TypeError("Thenable self-resolution");
                                                u = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                                    ye(u) ? s ? u.call(e, a(r, i, c, s), a(r, i, d, s)) : (r++,
                                                        u.call(e, a(r, i, c, s), a(r, i, d, s), a(r, i, c, i.notifyWith))) : (n !== c && (o = void 0,
                                                            l = [e]),
                                                            (s || i.resolveWith)(o, l))
                                            }
                                        }
                                        , h = s ? u : function () {
                                            try {
                                                u()
                                            } catch (e) {
                                                we.Deferred.exceptionHook && we.Deferred.exceptionHook(e, h.stackTrace),
                                                    t + 1 >= r && (n !== d && (o = void 0,
                                                        l = [e]),
                                                        i.rejectWith(o, l))
                                            }
                                        }
                                        ;
                                    t ? h() : (we.Deferred.getStackHook && (h.stackTrace = we.Deferred.getStackHook()),
                                        e.setTimeout(h))
                                }
                            }
                            var r = 0;
                            return we.Deferred(function (e) {
                                i[0][3].add(a(0, e, ye(s) ? s : c, e.notifyWith)),
                                    i[1][3].add(a(0, e, ye(t) ? t : c)),
                                    i[2][3].add(a(0, e, ye(n) ? n : d))
                            }).promise()
                        },
                        promise: function (e) {
                            return null != e ? we.extend(e, s) : s
                        }
                    }
                    , a = {};
                return we.each(i, function (e, t) {
                    var r = t[2]
                        , o = t[5];
                    s[t[1]] = r.add,
                        o && r.add(function () {
                            n = o
                        }, i[3 - e][2].disable, i[3 - e][3].disable, i[0][2].lock, i[0][3].lock),
                        r.add(t[3].fire),
                        a[t[0]] = function () {
                            return a[t[0] + "With"](this === a ? void 0 : this, arguments),
                                this
                        }
                        ,
                        a[t[0] + "With"] = r.fireWith
                }),
                    s.promise(a),
                    t && t.call(a, a),
                    a
            },
            when: function (e) {
                var t = arguments.length
                    , i = t
                    , n = Array(i)
                    , s = le.call(arguments)
                    , a = we.Deferred()
                    , r = function (e) {
                        return function (i) {
                            n[e] = this,
                                s[e] = arguments.length > 1 ? le.call(arguments) : i,
                                --t || a.resolveWith(n, s)
                        }
                    };
                if (1 >= t && (u(e, a.done(r(i)).resolve, a.reject, !t),
                    "pending" === a.state() || ye(s[i] && s[i].then)))
                    return a.then();
                for (; i--;)
                    u(s[i], r(i), a.reject);
                return a.promise()
            }
        });
    var Pe = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    we.Deferred.exceptionHook = function (t, i) {
        e.console && e.console.warn && t && Pe.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    }
        ,
        we.readyException = function (t) {
            e.setTimeout(function () {
                throw t
            })
        }
        ;
    var Le = we.Deferred();
    we.fn.ready = function (e) {
        return Le.then(e)["catch"](function (e) {
            we.readyException(e)
        }),
            this
    }
        ,
        we.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --we.readyWait : we.isReady) || (we.isReady = !0,
                    !0 !== e && --we.readyWait > 0 || Le.resolveWith(re, [we]))
            }
        }),
        we.ready.then = Le.then,
        "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll ? e.setTimeout(we.ready) : (re.addEventListener("DOMContentLoaded", h),
            e.addEventListener("load", h));
    var Oe = function (e, t, i, s, a, r, o) {
        var l = 0
            , c = e.length
            , d = null == i;
        if ("object" === n(i)) {
            a = !0;
            for (l in i)
                Oe(e, t, l, i[l], !0, r, o)
        } else if (void 0 !== s && (a = !0,
            ye(s) || (o = !0),
            d && (o ? (t.call(e, s),
                t = null) : (d = t,
                    t = function (e, t, i) {
                        return d.call(we(e), i)
                    }
            )),
            t))
            for (; c > l; l++)
                t(e[l], i, o ? s : s.call(e[l], l, t(e[l], i)));
        return a ? e : d ? t.call(e) : c ? t(e[0], i) : r
    }
        , Ne = /^-ms-/
        , ze = /-([a-z])/g
        , He = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    g.uid = 1,
        g.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || (t = {},
                    He(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0
                    }))),
                    t
            },
            set: function (e, t, i) {
                var n, s = this.cache(e);
                if ("string" == typeof t)
                    s[f(t)] = i;
                else
                    for (n in t)
                        s[f(n)] = t[n];
                return s
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][f(t)]
            },
            access: function (e, t, i) {
                return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i),
                    void 0 !== i ? i : t)
            },
            remove: function (e, t) {
                var i, n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) {
                        i = (t = Array.isArray(t) ? t.map(f) : (t = f(t)) in n ? [t] : t.match(Ie) || []).length;
                        for (; i--;)
                            delete n[t[i]]
                    }
                    (void 0 === t || we.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !we.isEmptyObject(t)
            }
        };
    var je = new g
        , Fe = new g
        , Re = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , We = /[A-Z]/g;
    we.extend({
        hasData: function (e) {
            return Fe.hasData(e) || je.hasData(e)
        },
        data: function (e, t, i) {
            return Fe.access(e, t, i)
        },
        removeData: function (e, t) {
            Fe.remove(e, t)
        },
        _data: function (e, t, i) {
            return je.access(e, t, i)
        },
        _removeData: function (e, t) {
            je.remove(e, t)
        }
    }),
        we.fn.extend({
            data: function (e, t) {
                var i, n, s, a = this[0], r = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (s = Fe.get(a),
                        1 === a.nodeType && !je.get(a, "hasDataAttrs"))) {
                        for (i = r.length; i--;)
                            r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = f(n.slice(5)),
                                v(a, n, s[n]));
                        je.set(a, "hasDataAttrs", !0)
                    }
                    return s
                }
                return "object" == typeof e ? this.each(function () {
                    Fe.set(this, e)
                }) : Oe(this, function (t) {
                    var i;
                    if (a && void 0 === t) {
                        if (void 0 !== (i = Fe.get(a, e)))
                            return i;
                        if (void 0 !== (i = v(a, e)))
                            return i
                    } else
                        this.each(function () {
                            Fe.set(this, e, t)
                        })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function (e) {
                return this.each(function () {
                    Fe.remove(this, e)
                })
            }
        }),
        we.extend({
            queue: function (e, t, i) {
                var n;
                return e ? (t = (t || "fx") + "queue",
                    n = je.get(e, t),
                    i && (!n || Array.isArray(i) ? n = je.access(e, t, we.makeArray(i)) : n.push(i)),
                    n || []) : void 0
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var i = we.queue(e, t)
                    , n = i.length
                    , s = i.shift()
                    , a = we._queueHooks(e, t)
                    , r = function () {
                        we.dequeue(e, t)
                    };
                "inprogress" === s && (s = i.shift(),
                    n--),
                    s && ("fx" === t && i.unshift("inprogress"),
                        delete a.stop,
                        s.call(e, r, a)),
                    !n && a && a.empty.fire()
            },
            _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return je.get(e, i) || je.access(e, i, {
                    empty: we.Callbacks("once memory").add(function () {
                        je.remove(e, [t + "queue", i])
                    })
                })
            }
        }),
        we.fn.extend({
            queue: function (e, t) {
                var i = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    i--),
                    arguments.length < i ? we.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                        var i = we.queue(this, e, t);
                        we._queueHooks(this, e),
                            "fx" === e && "inprogress" !== i[0] && we.dequeue(this, e)
                    })
            },
            dequeue: function (e) {
                return this.each(function () {
                    we.dequeue(this, e)
                })
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", [])
            },
            promise: function (e, t) {
                var i, n = 1, s = we.Deferred(), a = this, r = this.length, o = function () {
                    --n || s.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                    e = e || "fx"; r--;)
                    (i = je.get(a[r], e + "queueHooks")) && i.empty && (n++,
                        i.empty.add(o));
                return o(),
                    s.promise(t)
            }
        });
    var Be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Ye = new RegExp("^(?:([+-])=|)(" + Be + ")([a-z%]*)$", "i")
        , Ve = ["Top", "Right", "Bottom", "Left"]
        , qe = function (e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && we.contains(e.ownerDocument, e) && "none" === we.css(e, "display")
        }
        , Xe = function (e, t, i, n) {
            var s, a, r = {};
            for (a in t)
                r[a] = e.style[a],
                    e.style[a] = t[a];
            s = i.apply(e, n || []);
            for (a in t)
                e.style[a] = r[a];
            return s
        }
        , Ge = {};
    we.fn.extend({
        show: function () {
            return x(this, !0)
        },
        hide: function () {
            return x(this)
        },
        toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                qe(this) ? we(this).show() : we(this).hide()
            })
        }
    });
    var Ue = /^(?:checkbox|radio)$/i
        , Ke = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
        , Ze = /^$|^module$|\/(?:java|ecma)script/i
        , Qe = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    Qe.optgroup = Qe.option,
        Qe.tbody = Qe.tfoot = Qe.colgroup = Qe.caption = Qe.thead,
        Qe.th = Qe.td;
    var Je = /<|&#?\w+;/;
    !function () {
        var e = re.createDocumentFragment().appendChild(re.createElement("div"))
            , t = re.createElement("input");
        t.setAttribute("type", "radio"),
            t.setAttribute("checked", "checked"),
            t.setAttribute("name", "t"),
            e.appendChild(t),
            ve.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            ve.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var et = re.documentElement
        , tt = /^key/
        , it = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
        , nt = /^([^.]*)(?:\.(.+)|)/;
    we.event = {
        global: {},
        add: function (e, t, i, n, s) {
            var a, r, o, l, c, d, u, h, p, f, g, m = je.get(e);
            if (m)
                for (i.handler && (i = (a = i).handler,
                    s = a.selector),
                    s && we.find.matchesSelector(et, s),
                    i.guid || (i.guid = we.guid++),
                    (l = m.events) || (l = m.events = {}),
                    (r = m.handle) || (r = m.handle = function (t) {
                        return "undefined" != typeof we && we.event.triggered !== t.type ? we.event.dispatch.apply(e, arguments) : void 0
                    }
                    ),
                    c = (t = (t || "").match(Ie) || [""]).length; c--;)
                    p = g = (o = nt.exec(t[c]) || [])[1],
                        f = (o[2] || "").split(".").sort(),
                        p && (u = we.event.special[p] || {},
                            p = (s ? u.delegateType : u.bindType) || p,
                            u = we.event.special[p] || {},
                            d = we.extend({
                                type: p,
                                origType: g,
                                data: n,
                                handler: i,
                                guid: i.guid,
                                selector: s,
                                needsContext: s && we.expr.match.needsContext.test(s),
                                namespace: f.join(".")
                            }, a),
                            (h = l[p]) || ((h = l[p] = []).delegateCount = 0,
                                u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(p, r)),
                            u.add && (u.add.call(e, d),
                                d.handler.guid || (d.handler.guid = i.guid)),
                            s ? h.splice(h.delegateCount++, 0, d) : h.push(d),
                            we.event.global[p] = !0)
        },
        remove: function (e, t, i, n, s) {
            var a, r, o, l, c, d, u, h, p, f, g, m = je.hasData(e) && je.get(e);
            if (m && (l = m.events)) {
                for (c = (t = (t || "").match(Ie) || [""]).length; c--;)
                    if (o = nt.exec(t[c]) || [],
                        p = g = o[1],
                        f = (o[2] || "").split(".").sort(),
                        p) {
                        for (u = we.event.special[p] || {},
                            h = l[p = (n ? u.delegateType : u.bindType) || p] || [],
                            o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            r = a = h.length; a--;)
                            d = h[a],
                                !s && g !== d.origType || i && i.guid !== d.guid || o && !o.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (h.splice(a, 1),
                                    d.selector && h.delegateCount--,
                                    u.remove && u.remove.call(e, d));
                        r && !h.length && (u.teardown && !1 !== u.teardown.call(e, f, m.handle) || we.removeEvent(e, p, m.handle),
                            delete l[p])
                    } else
                        for (p in l)
                            we.event.remove(e, p + t[c], i, n, !0);
                we.isEmptyObject(l) && je.remove(e, "handle events")
            }
        },
        dispatch: function (e) {
            var t, i, n, s, a, r, o = we.event.fix(e), l = new Array(arguments.length), c = (je.get(this, "events") || {})[o.type] || [], d = we.event.special[o.type] || {};
            for (l[0] = o,
                t = 1; t < arguments.length; t++)
                l[t] = arguments[t];
            if (o.delegateTarget = this,
                !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
                for (r = we.event.handlers.call(this, o, c),
                    t = 0; (s = r[t++]) && !o.isPropagationStopped();)
                    for (o.currentTarget = s.elem,
                        i = 0; (a = s.handlers[i++]) && !o.isImmediatePropagationStopped();)
                        o.rnamespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a,
                            o.data = a.data,
                            void 0 !== (n = ((we.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(),
                                o.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, o),
                    o.result
            }
        },
        handlers: function (e, t) {
            var i, n, s, a, r, o = [], l = t.delegateCount, c = e.target;
            if (l && c.nodeType && !("click" === e.type && e.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
                        for (a = [],
                            r = {},
                            i = 0; l > i; i++)
                            void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? we(s, this).index(c) > -1 : we.find(s, this, null, [c]).length),
                                r[s] && a.push(n);
                        a.length && o.push({
                            elem: c,
                            handlers: a
                        })
                    }
            return c = this,
                l < t.length && o.push({
                    elem: c,
                    handlers: t.slice(l)
                }),
                o
        },
        addProp: function (e, t) {
            Object.defineProperty(we.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ye(t) ? function () {
                    return this.originalEvent ? t(this.originalEvent) : void 0
                }
                    : function () {
                        return this.originalEvent ? this.originalEvent[e] : void 0
                    }
                ,
                set: function (t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function (e) {
            return e[we.expando] ? e : new we.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    return this !== T() && this.focus ? (this.focus(),
                        !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    return this === T() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && a(this, "input") ? (this.click(),
                        !1) : void 0
                },
                _default: function (e) {
                    return a(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    },
        we.removeEvent = function (e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i)
        }
        ,
        we.Event = function (e, t) {
            return this instanceof we.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? S : C,
                this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
                this.currentTarget = e.currentTarget,
                this.relatedTarget = e.relatedTarget) : this.type = e,
                t && we.extend(this, t),
                this.timeStamp = e && e.timeStamp || Date.now(),
                this[we.expando] = !0,
                void 0) : new we.Event(e, t)
        }
        ,
        we.Event.prototype = {
            constructor: we.Event,
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                this.isDefaultPrevented = S,
                    e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                this.isPropagationStopped = S,
                    e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = S,
                    e && !this.isSimulated && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        we.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
                var t = e.button;
                return null == e.which && tt.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && it.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, we.event.addProp),
        we.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (e, t) {
            we.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                    var i, n = this, s = e.relatedTarget, a = e.handleObj;
                    return s && (s === n || we.contains(n, s)) || (e.type = a.origType,
                        i = a.handler.apply(this, arguments),
                        e.type = t),
                        i
                }
            }
        }),
        we.fn.extend({
            on: function (e, t, i, n) {
                return E(this, e, t, i, n)
            },
            one: function (e, t, i, n) {
                return E(this, e, t, i, n, 1)
            },
            off: function (e, t, i) {
                var n, s;
                if (e && e.preventDefault && e.handleObj)
                    return n = e.handleObj,
                        we(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler),
                        this;
                if ("object" == typeof e) {
                    for (s in e)
                        this.off(s, t, e[s]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (i = t,
                    t = void 0),
                    !1 === i && (i = C),
                    this.each(function () {
                        we.event.remove(this, e, i, t)
                    })
            }
        });
    var st = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
        , at = /<script|<style|<link/i
        , rt = /checked\s*(?:[^=]|=\s*.checked.)/i
        , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    we.extend({
        htmlPrefilter: function (e) {
            return e.replace(st, "<$1></$2>")
        },
        clone: function (e, t, i) {
            var n, s, a, r, o = e.cloneNode(!0), l = we.contains(e.ownerDocument, e);
            if (!(ve.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || we.isXMLDoc(e)))
                for (r = w(o),
                    n = 0,
                    s = (a = w(e)).length; s > n; n++)
                    I(a[n], r[n]);
            if (t)
                if (i)
                    for (a = a || w(e),
                        r = r || w(o),
                        n = 0,
                        s = a.length; s > n; n++)
                        M(a[n], r[n]);
                else
                    M(e, o);
            return (r = w(o, "script")).length > 0 && _(r, !l && w(e, "script")),
                o
        },
        cleanData: function (e) {
            for (var t, i, n, s = we.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (He(i)) {
                    if (t = i[je.expando]) {
                        if (t.events)
                            for (n in t.events)
                                s[n] ? we.event.remove(i, n) : we.removeEvent(i, n, t.handle);
                        i[je.expando] = void 0
                    }
                    i[Fe.expando] && (i[Fe.expando] = void 0)
                }
        }
    }),
        we.fn.extend({
            detach: function (e) {
                return L(this, e, !0)
            },
            remove: function (e) {
                return L(this, e)
            },
            text: function (e) {
                return Oe(this, function (e) {
                    return void 0 === e ? we.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function () {
                return P(this, arguments, function (e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || A(this, e).appendChild(e)
                })
            },
            prepend: function () {
                return P(this, arguments, function (e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = A(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function () {
                return P(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function () {
                return P(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (we.cleanData(w(e, !1)),
                        e.textContent = "");
                return this
            },
            clone: function (e, t) {
                return e = null != e && e,
                    t = null == t ? e : t,
                    this.map(function () {
                        return we.clone(this, e, t)
                    })
            },
            html: function (e) {
                return Oe(this, function (e) {
                    var t = this[0] || {}
                        , i = 0
                        , n = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !at.test(e) && !Qe[(Ke.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = we.htmlPrefilter(e);
                        try {
                            for (; n > i; i++)
                                1 === (t = this[i] || {}).nodeType && (we.cleanData(w(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (e) { }
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function () {
                var e = [];
                return P(this, arguments, function (t) {
                    var i = this.parentNode;
                    we.inArray(this, e) < 0 && (we.cleanData(w(this)),
                        i && i.replaceChild(t, this))
                }, e)
            }
        }),
        we.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (e, t) {
            we.fn[e] = function (e) {
                for (var i, n = [], s = we(e), a = s.length - 1, r = 0; a >= r; r++)
                    i = r === a ? this : this.clone(!0),
                        we(s[r])[t](i),
                        de.apply(n, i.get());
                return this.pushStack(n)
            }
        });
    var lt = new RegExp("^(" + Be + ")(?!px)[a-z%]+$", "i")
        , ct = function (t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = e),
                i.getComputedStyle(t)
        }
        , dt = new RegExp(Ve.join("|"), "i");
    !function () {
        function t() {
            if (c) {
                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    et.appendChild(l).appendChild(c);
                var t = e.getComputedStyle(c);
                n = "1%" !== t.top,
                    o = 12 === i(t.marginLeft),
                    c.style.right = "60%",
                    r = 36 === i(t.right),
                    s = 36 === i(t.width),
                    c.style.position = "absolute",
                    a = 36 === c.offsetWidth || "absolute",
                    et.removeChild(l),
                    c = null
            }
        }
        function i(e) {
            return Math.round(parseFloat(e))
        }
        var n, s, a, r, o, l = re.createElement("div"), c = re.createElement("div");
        c.style && (c.style.backgroundClip = "content-box",
            c.cloneNode(!0).style.backgroundClip = "",
            ve.clearCloneStyle = "content-box" === c.style.backgroundClip,
            we.extend(ve, {
                boxSizingReliable: function () {
                    return t(),
                        s
                },
                pixelBoxStyles: function () {
                    return t(),
                        r
                },
                pixelPosition: function () {
                    return t(),
                        n
                },
                reliableMarginLeft: function () {
                    return t(),
                        o
                },
                scrollboxSize: function () {
                    return t(),
                        a
                }
            }))
    }();
    var ut = /^(none|table(?!-c[ea]).+)/
        , ht = /^--/
        , pt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
        , ft = {
            letterSpacing: "0",
            fontWeight: "400"
        }
        , gt = ["Webkit", "Moz", "ms"]
        , mt = re.createElement("div").style;
    we.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var i = O(e, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s, a, r, o = f(t), l = ht.test(t), c = e.style;
                if (l || (t = H(o)),
                    r = we.cssHooks[t] || we.cssHooks[o],
                    void 0 === i)
                    return r && "get" in r && void 0 !== (s = r.get(e, !1, n)) ? s : c[t];
                "string" == (a = typeof i) && (s = Ye.exec(i)) && s[1] && (i = y(e, t, s),
                    a = "number"),
                    null != i && i === i && ("number" === a && (i += s && s[3] || (we.cssNumber[o] ? "" : "px")),
                        ve.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"),
                        r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i))
            }
        },
        css: function (e, t, i, n) {
            var s, a, r, o = f(t);
            return ht.test(t) || (t = H(o)),
                (r = we.cssHooks[t] || we.cssHooks[o]) && "get" in r && (s = r.get(e, !0, i)),
                void 0 === s && (s = O(e, t, n)),
                "normal" === s && t in ft && (s = ft[t]),
                "" === i || i ? (a = parseFloat(s),
                    !0 === i || isFinite(a) ? a || 0 : s) : s
        }
    }),
        we.each(["height", "width"], function (e, t) {
            we.cssHooks[t] = {
                get: function (e, i, n) {
                    return i ? !ut.test(we.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, n) : Xe(e, pt, function () {
                        return R(e, t, n)
                    }) : void 0
                },
                set: function (e, i, n) {
                    var s, a = ct(e), r = "border-box" === we.css(e, "boxSizing", !1, a), o = n && F(e, t, n, r, a);
                    return r && ve.scrollboxSize() === a.position && (o -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - F(e, t, "border", !1, a) - .5)),
                        o && (s = Ye.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i,
                            i = we.css(e, t)),
                        j(e, i, o)
                }
            }
        }),
        we.cssHooks.marginLeft = N(ve.reliableMarginLeft, function (e, t) {
            return t ? (parseFloat(O(e, "marginLeft")) || e.getBoundingClientRect().left - Xe(e, {
                marginLeft: 0
            }, function () {
                return e.getBoundingClientRect().left
            })) + "px" : void 0
        }),
        we.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function (e, t) {
            we.cssHooks[e + t] = {
                expand: function (i) {
                    for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++)
                        s[e + Ve[n] + t] = a[n] || a[n - 2] || a[0];
                    return s
                }
            },
                "margin" !== e && (we.cssHooks[e + t].set = j)
        }),
        we.fn.extend({
            css: function (e, t) {
                return Oe(this, function (e, t, i) {
                    var n, s, a = {}, r = 0;
                    if (Array.isArray(t)) {
                        for (n = ct(e),
                            s = t.length; s > r; r++)
                            a[t[r]] = we.css(e, t[r], !1, n);
                        return a
                    }
                    return void 0 !== i ? we.style(e, t, i) : we.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }),
        we.Tween = W,
        W.prototype = {
            constructor: W,
            init: function (e, t, i, n, s, a) {
                this.elem = e,
                    this.prop = i,
                    this.easing = s || we.easing._default,
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = n,
                    this.unit = a || (we.cssNumber[i] ? "" : "px")
            },
            cur: function () {
                var e = W.propHooks[this.prop];
                return e && e.get ? e.get(this) : W.propHooks._default.get(this)
            },
            run: function (e) {
                var t, i = W.propHooks[this.prop];
                return this.options.duration ? this.pos = t = we.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    i && i.set ? i.set(this) : W.propHooks._default.set(this),
                    this
            }
        },
        W.prototype.init.prototype = W.prototype,
        W.propHooks = {
            _default: {
                get: function (e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = we.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function (e) {
                    we.fx.step[e.prop] ? we.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[we.cssProps[e.prop]] && !we.cssHooks[e.prop] ? e.elem[e.prop] = e.now : we.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        },
        W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        we.easing = {
            linear: function (e) {
                return e
            },
            swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        we.fx = W.prototype.init,
        we.fx.step = {};
    var vt, yt, bt = /^(?:toggle|show|hide)$/, xt = /queueHooks$/;
    we.Animation = we.extend(U, {
        tweeners: {
            "*": [function (e, t) {
                var i = this.createTween(e, t);
                return y(i.elem, e, Ye.exec(t), i),
                    i
            }
            ]
        },
        tweener: function (e, t) {
            ye(e) ? (t = e,
                e = ["*"]) : e = e.match(Ie);
            for (var i, n = 0, s = e.length; s > n; n++)
                i = e[n],
                    U.tweeners[i] = U.tweeners[i] || [],
                    U.tweeners[i].unshift(t)
        },
        prefilters: [X],
        prefilter: function (e, t) {
            t ? U.prefilters.unshift(e) : U.prefilters.push(e)
        }
    }),
        we.speed = function (e, t, i) {
            var n = e && "object" == typeof e ? we.extend({}, e) : {
                complete: i || !i && t || ye(e) && e,
                duration: e,
                easing: i && t || t && !ye(t) && t
            };
            return we.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in we.fx.speeds ? n.duration = we.fx.speeds[n.duration] : n.duration = we.fx.speeds._default),
                null != n.queue && !0 !== n.queue || (n.queue = "fx"),
                n.old = n.complete,
                n.complete = function () {
                    ye(n.old) && n.old.call(this),
                        n.queue && we.dequeue(this, n.queue)
                }
                ,
                n
        }
        ,
        we.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(qe).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, i, n)
            },
            animate: function (e, t, i, n) {
                var s = we.isEmptyObject(e)
                    , a = we.speed(t, i, n)
                    , r = function () {
                        var t = U(this, we.extend({}, e), a);
                        (s || je.get(this, "finish")) && t.stop(!0)
                    };
                return r.finish = r,
                    s || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
            },
            stop: function (e, t, i) {
                var n = function (e) {
                    var t = e.stop;
                    delete e.stop,
                        t(i)
                };
                return "string" != typeof e && (i = t,
                    t = e,
                    e = void 0),
                    t && !1 !== e && this.queue(e || "fx", []),
                    this.each(function () {
                        var t = !0
                            , s = null != e && e + "queueHooks"
                            , a = we.timers
                            , r = je.get(this);
                        if (s)
                            r[s] && r[s].stop && n(r[s]);
                        else
                            for (s in r)
                                r[s] && r[s].stop && xt.test(s) && n(r[s]);
                        for (s = a.length; s--;)
                            a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(i),
                                t = !1,
                                a.splice(s, 1));
                        !t && i || we.dequeue(this, e)
                    })
            },
            finish: function (e) {
                return !1 !== e && (e = e || "fx"),
                    this.each(function () {
                        var t, i = je.get(this), n = i[e + "queue"], s = i[e + "queueHooks"], a = we.timers, r = n ? n.length : 0;
                        for (i.finish = !0,
                            we.queue(this, e, []),
                            s && s.stop && s.stop.call(this, !0),
                            t = a.length; t--;)
                            a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                                a.splice(t, 1));
                        for (t = 0; r > t; t++)
                            n[t] && n[t].finish && n[t].finish.call(this);
                        delete i.finish
                    })
            }
        }),
        we.each(["toggle", "show", "hide"], function (e, t) {
            var i = we.fn[t];
            we.fn[t] = function (e, n, s) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(V(t, !0), e, n, s)
            }
        }),
        we.each({
            slideDown: V("show"),
            slideUp: V("hide"),
            slideToggle: V("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (e, t) {
            we.fn[e] = function (e, i, n) {
                return this.animate(t, e, i, n)
            }
        }),
        we.timers = [],
        we.fx.tick = function () {
            var e, t = 0, i = we.timers;
            for (vt = Date.now(); t < i.length; t++)
                (e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || we.fx.stop(),
                vt = void 0
        }
        ,
        we.fx.timer = function (e) {
            we.timers.push(e),
                we.fx.start()
        }
        ,
        we.fx.interval = 13,
        we.fx.start = function () {
            yt || (yt = !0,
                B())
        }
        ,
        we.fx.stop = function () {
            yt = null
        }
        ,
        we.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        we.fn.delay = function (t, i) {
            return t = we.fx ? we.fx.speeds[t] || t : t,
                i = i || "fx",
                this.queue(i, function (i, n) {
                    var s = e.setTimeout(i, t);
                    n.stop = function () {
                        e.clearTimeout(s)
                    }
                })
        }
        ,
        function () {
            var e = re.createElement("input")
                , t = re.createElement("select").appendChild(re.createElement("option"));
            e.type = "checkbox",
                ve.checkOn = "" !== e.value,
                ve.optSelected = t.selected,
                (e = re.createElement("input")).value = "t",
                e.type = "radio",
                ve.radioValue = "t" === e.value
        }();
    var wt, _t = we.expr.attrHandle;
    we.fn.extend({
        attr: function (e, t) {
            return Oe(this, we.attr, e, t, arguments.length > 1)
        },
        removeAttr: function (e) {
            return this.each(function () {
                we.removeAttr(this, e)
            })
        }
    }),
        we.extend({
            attr: function (e, t, i) {
                var n, s, a = e.nodeType;
                return 3 !== a && 8 !== a && 2 !== a ? "undefined" == typeof e.getAttribute ? we.prop(e, t, i) : (1 === a && we.isXMLDoc(e) || (s = we.attrHooks[t.toLowerCase()] || (we.expr.match.bool.test(t) ? wt : void 0)),
                    void 0 !== i ? null === i ? void we.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""),
                        i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = we.find.attr(e, t)) ? void 0 : n) : void 0
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!ve.radioValue && "radio" === t && a(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t),
                                i && (e.value = i),
                                t
                        }
                    }
                }
            },
            removeAttr: function (e, t) {
                var i, n = 0, s = t && t.match(Ie);
                if (s && 1 === e.nodeType)
                    for (; i = s[n++];)
                        e.removeAttribute(i);
            }
        }),
        wt = {
            set: function (e, t, i) {
                return !1 === t ? we.removeAttr(e, i) : e.setAttribute(i, i),
                    i
            }
        },
        we.each(we.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var i = _t[t] || we.find.attr;
            _t[t] = function (e, t, n) {
                var s, a, r = t.toLowerCase();
                return n || (a = _t[r],
                    _t[r] = s,
                    s = null != i(e, t, n) ? r : null,
                    _t[r] = a),
                    s
            }
        });
    var kt = /^(?:input|select|textarea|button)$/i
        , St = /^(?:a|area)$/i;
    we.fn.extend({
        prop: function (e, t) {
            return Oe(this, we.prop, e, t, arguments.length > 1)
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[we.propFix[e] || e]
            })
        }
    }),
        we.extend({
            prop: function (e, t, i) {
                var n, s, a = e.nodeType;
                return 3 !== a && 8 !== a && 2 !== a ? (1 === a && we.isXMLDoc(e) || (t = we.propFix[t] || t,
                    s = we.propHooks[t]),
                    void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]) : void 0
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = we.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : kt.test(e.nodeName) || St.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        ve.optSelected || (we.propHooks.selected = {
            get: function (e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                    null
            },
            set: function (e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        we.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            we.propFix[this.toLowerCase()] = this
        }),
        we.fn.extend({
            addClass: function (e) {
                var t, i, n, s, a, r, o, l = 0;
                if (ye(e))
                    return this.each(function (t) {
                        we(this).addClass(e.call(this, t, Z(this)))
                    });
                if ((t = Q(e)).length)
                    for (; i = this[l++];)
                        if (s = Z(i),
                            n = 1 === i.nodeType && " " + K(s) + " ") {
                            for (r = 0; a = t[r++];)
                                n.indexOf(" " + a + " ") < 0 && (n += a + " ");
                            s !== (o = K(n)) && i.setAttribute("class", o)
                        }
                return this
            },
            removeClass: function (e) {
                var t, i, n, s, a, r, o, l = 0;
                if (ye(e))
                    return this.each(function (t) {
                        we(this).removeClass(e.call(this, t, Z(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((t = Q(e)).length)
                    for (; i = this[l++];)
                        if (s = Z(i),
                            n = 1 === i.nodeType && " " + K(s) + " ") {
                            for (r = 0; a = t[r++];)
                                for (; n.indexOf(" " + a + " ") > -1;)
                                    n = n.replace(" " + a + " ", " ");
                            s !== (o = K(n)) && i.setAttribute("class", o)
                        }
                return this
            },
            toggleClass: function (e, t) {
                var i = typeof e
                    , n = "string" === i || Array.isArray(e);
                return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : ye(e) ? this.each(function (i) {
                    we(this).toggleClass(e.call(this, i, Z(this), t), t)
                }) : this.each(function () {
                    var t, s, a, r;
                    if (n)
                        for (s = 0,
                            a = we(this),
                            r = Q(e); t = r[s++];)
                            a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
                    else
                        void 0 !== e && "boolean" !== i || ((t = Z(this)) && je.set(this, "__className__", t),
                            this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : je.get(this, "__className__") || ""))
                })
            },
            hasClass: function (e) {
                var t, i, n = 0;
                for (t = " " + e + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + K(Z(i)) + " ").indexOf(t) > -1)
                        return !0;
                return !1
            }
        });
    var Ct = /\r/g;
    we.fn.extend({
        val: function (e) {
            var t, i, n, s = this[0];
            return arguments.length ? (n = ye(e),
                this.each(function (i) {
                    var s;
                    1 === this.nodeType && (null == (s = n ? e.call(this, i, we(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = we.map(s, function (e) {
                        return null == e ? "" : e + ""
                    })),
                        (t = we.valHooks[this.type] || we.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s))
                })) : s ? (t = we.valHooks[s.type] || we.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Ct, "") : null == i ? "" : i : void 0
        }
    }),
        we.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = we.find.attr(e, "value");
                        return null != t ? t : K(we.text(e))
                    }
                },
                select: {
                    get: function (e) {
                        var t, i, n, s = e.options, r = e.selectedIndex, o = "select-one" === e.type, l = o ? null : [], c = o ? r + 1 : s.length;
                        for (n = 0 > r ? c : o ? r : 0; c > n; n++)
                            if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !a(i.parentNode, "optgroup"))) {
                                if (t = we(i).val(),
                                    o)
                                    return t;
                                l.push(t)
                            }
                        return l
                    },
                    set: function (e, t) {
                        for (var i, n, s = e.options, a = we.makeArray(t), r = s.length; r--;)
                            ((n = s[r]).selected = we.inArray(we.valHooks.option.get(n), a) > -1) && (i = !0);
                        return i || (e.selectedIndex = -1),
                            a
                    }
                }
            }
        }),
        we.each(["radio", "checkbox"], function () {
            we.valHooks[this] = {
                set: function (e, t) {
                    return Array.isArray(t) ? e.checked = we.inArray(we(e).val(), t) > -1 : void 0
                }
            },
                ve.checkOn || (we.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
                )
        }),
        ve.focusin = "onfocusin" in e;
    var Tt = /^(?:focusinfocus|focusoutblur)$/
        , Et = function (e) {
            e.stopPropagation()
        };
    we.extend(we.event, {
        trigger: function (t, i, n, s) {
            var a, r, o, l, c, d, u, h, p = [n || re], f = fe.call(t, "type") ? t.type : t, g = fe.call(t, "namespace") ? t.namespace.split(".") : [];
            if (r = h = o = n = n || re,
                3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(f + we.event.triggered) && (f.indexOf(".") > -1 && (f = (g = f.split(".")).shift(),
                    g.sort()),
                    c = f.indexOf(":") < 0 && "on" + f,
                    t = t[we.expando] ? t : new we.Event(f, "object" == typeof t && t),
                    t.isTrigger = s ? 2 : 3,
                    t.namespace = g.join("."),
                    t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    t.result = void 0,
                    t.target || (t.target = n),
                    i = null == i ? [t] : we.makeArray(i, [t]),
                    u = we.event.special[f] || {},
                    s || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                if (!s && !u.noBubble && !be(n)) {
                    for (l = u.delegateType || f,
                        Tt.test(l + f) || (r = r.parentNode); r; r = r.parentNode)
                        p.push(r),
                            o = r;
                    o === (n.ownerDocument || re) && p.push(o.defaultView || o.parentWindow || e)
                }
                for (a = 0; (r = p[a++]) && !t.isPropagationStopped();)
                    h = r,
                        t.type = a > 1 ? l : u.bindType || f,
                        (d = (je.get(r, "events") || {})[t.type] && je.get(r, "handle")) && d.apply(r, i),
                        (d = c && r[c]) && d.apply && He(r) && (t.result = d.apply(r, i),
                            !1 === t.result && t.preventDefault());
                return t.type = f,
                    s || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !He(n) || c && ye(n[f]) && !be(n) && ((o = n[c]) && (n[c] = null),
                        we.event.triggered = f,
                        t.isPropagationStopped() && h.addEventListener(f, Et),
                        n[f](),
                        t.isPropagationStopped() && h.removeEventListener(f, Et),
                        we.event.triggered = void 0,
                        o && (n[c] = o)),
                    t.result
            }
        },
        simulate: function (e, t, i) {
            var n = we.extend(new we.Event, i, {
                type: e,
                isSimulated: !0
            });
            we.event.trigger(n, null, t)
        }
    }),
        we.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    we.event.trigger(e, t, this)
                })
            },
            triggerHandler: function (e, t) {
                var i = this[0];
                return i ? we.event.trigger(e, t, i, !0) : void 0
            }
        }),
        ve.focusin || we.each({
            focus: "focusin",
            blur: "focusout"
        }, function (e, t) {
            var i = function (e) {
                we.event.simulate(t, e.target, we.event.fix(e))
            };
            we.event.special[t] = {
                setup: function () {
                    var n = this.ownerDocument || this
                        , s = je.access(n, t);
                    s || n.addEventListener(e, i, !0),
                        je.access(n, t, (s || 0) + 1)
                },
                teardown: function () {
                    var n = this.ownerDocument || this
                        , s = je.access(n, t) - 1;
                    s ? je.access(n, t, s) : (n.removeEventListener(e, i, !0),
                        je.remove(n, t))
                }
            }
        });
    var At = e.location
        , $t = Date.now()
        , Dt = /\?/;
    we.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e)
            return null;
        try {
            t = (new i.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || we.error("Invalid XML: " + e),
            t
    }
        ;
    var Mt = /\[\]$/
        , It = /\r?\n/g
        , Pt = /^(?:submit|button|image|reset|file)$/i
        , Lt = /^(?:input|select|textarea|keygen)/i;
    we.param = function (e, t) {
        var i, n = [], s = function (e, t) {
            var i = ye(t) ? t() : t;
            n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i)
        };
        if (Array.isArray(e) || e.jquery && !we.isPlainObject(e))
            we.each(e, function () {
                s(this.name, this.value)
            });
        else
            for (i in e)
                J(i, e[i], t, s);
        return n.join("&")
    }
        ,
        we.fn.extend({
            serialize: function () {
                return we.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = we.prop(this, "elements");
                    return e ? we.makeArray(e) : this
                }).filter(function () {
                    var e = this.type;
                    return this.name && !we(this).is(":disabled") && Lt.test(this.nodeName) && !Pt.test(e) && (this.checked || !Ue.test(e))
                }).map(function (e, t) {
                    var i = we(this).val();
                    return null == i ? null : Array.isArray(i) ? we.map(i, function (e) {
                        return {
                            name: t.name,
                            value: e.replace(It, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: i.replace(It, "\r\n")
                    }
                }).get()
            }
        });
    var Ot = /%20/g
        , Nt = /#.*$/
        , zt = /([?&])_=[^&]*/
        , Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , jt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , Ft = /^(?:GET|HEAD)$/
        , Rt = /^\/\//
        , Wt = {}
        , Bt = {}
        , Yt = "*/".concat("*")
        , Vt = re.createElement("a");
    Vt.href = At.href,
        we.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: At.href,
                type: "GET",
                isLocal: jt.test(At.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Yt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": we.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function (e, t) {
                return t ? ie(ie(e, we.ajaxSettings), t) : ie(we.ajaxSettings, e)
            },
            ajaxPrefilter: ee(Wt),
            ajaxTransport: ee(Bt),
            ajax: function (e, t) {
                function i(e, t, i, r) {
                    var l, u, h, b, x, w = t;
                    c || (c = !0,
                        o && k.clearTimeout(o),
                        n = void 0,
                        a = r || "",
                        _.readyState = e > 0 ? 4 : 0,
                        l = e >= 200 && 300 > e || 304 === e,
                        i && (b = ne(p, _, i)),
                        b = se(p, b, _, l),
                        l ? (p.ifModified && ((x = _.getResponseHeader("Last-Modified")) && (we.lastModified[s] = x),
                            (x = _.getResponseHeader("etag")) && (we.etag[s] = x)),
                            204 === e || "HEAD" === p.type ? w = "nocontent" : 304 === e ? w = "notmodified" : (w = b.state,
                                u = b.data,
                                l = !(h = b.error))) : (h = w,
                                    !e && w || (w = "error",
                                        0 > e && (e = 0))),
                        _.status = e,
                        _.statusText = (t || w) + "",
                        l ? m.resolveWith(f, [u, w, _]) : m.rejectWith(f, [_, w, h]),
                        _.statusCode(y),
                        y = void 0,
                        d && g.trigger(l ? "ajaxSuccess" : "ajaxError", [_, p, l ? u : h]),
                        v.fireWith(f, [_, w]),
                        d && (g.trigger("ajaxComplete", [_, p]),
                            --we.active || we.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var n, s, a, r, o, l, c, d, u, h, p = we.ajaxSetup({}, t), f = p.context || p, g = p.context && (f.nodeType || f.jquery) ? we(f) : we.event, m = we.Deferred(), v = we.Callbacks("once memory"), y = p.statusCode || {}, b = {}, x = {}, w = "canceled", _ = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                        var t;
                        if (c) {
                            if (!r)
                                for (r = {}; t = Ht.exec(a);)
                                    r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function () {
                        return c ? a : null
                    },
                    setRequestHeader: function (e, t) {
                        return null == c && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e,
                            b[e] = t),
                            this
                    },
                    overrideMimeType: function (e) {
                        return null == c && (p.mimeType = e),
                            this
                    },
                    statusCode: function (e) {
                        var t;
                        if (e)
                            if (c)
                                _.always(e[_.status]);
                            else
                                for (t in e)
                                    y[t] = [y[t], e[t]];
                        return this
                    },
                    abort: function (e) {
                        var t = e || w;
                        return n && n.abort(t),
                            i(0, t),
                            this
                    }
                };
                if (m.promise(_),
                    p.url = ((e || p.url || At.href) + "").replace(Rt, At.protocol + "//"),
                    p.type = t.method || t.type || p.method || p.type,
                    p.dataTypes = (p.dataType || "*").toLowerCase().match(Ie) || [""],
                    null == p.crossDomain) {
                    l = re.createElement("a");
                    try {
                        l.href = p.url,
                            l.href = l.href,
                            p.crossDomain = Vt.protocol + "//" + Vt.host != l.protocol + "//" + l.host
                    } catch (k) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = we.param(p.data, p.traditional)),
                    te(Wt, p, t, _),
                    c)
                    return _;
                (d = we.event && p.global) && 0 == we.active++ && we.event.trigger("ajaxStart"),
                    p.type = p.type.toUpperCase(),
                    p.hasContent = !Ft.test(p.type),
                    s = p.url.replace(Nt, ""),
                    p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(Ot, "+")) : (h = p.url.slice(s.length),
                        p.data && (p.processData || "string" == typeof p.data) && (s += (Dt.test(s) ? "&" : "?") + p.data,
                            delete p.data),
                        !1 === p.cache && (s = s.replace(zt, "$1"),
                            h = (Dt.test(s) ? "&" : "?") + "_=" + $t++ + h),
                        p.url = s + h),
                    p.ifModified && (we.lastModified[s] && _.setRequestHeader("If-Modified-Since", we.lastModified[s]),
                        we.etag[s] && _.setRequestHeader("If-None-Match", we.etag[s])),
                    (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && _.setRequestHeader("Content-Type", p.contentType),
                    _.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Yt + "; q=0.01" : "") : p.accepts["*"]);
                for (u in p.headers)
                    _.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, _, p) || c))
                    return _.abort();
                if (w = "abort",
                    v.add(p.complete),
                    _.done(p.success),
                    _.fail(p.error),
                    n = te(Bt, p, t, _)) {
                    if (_.readyState = 1,
                        d && g.trigger("ajaxSend", [_, p]),
                        c)
                        return _;
                    p.async && p.timeout > 0 && (o = k.setTimeout(function () {
                        _.abort("timeout")
                    }, p.timeout));
                    try {
                        c = !1,
                            n.send(b, i)
                    } catch (k) {
                        if (c)
                            throw k;
                        i(-1, k)
                    }
                } else
                    i(-1, "No Transport");
                return _
            },
            getJSON: function (e, t, i) {
                return we.get(e, t, i, "json")
            },
            getScript: function (e, t) {
                return we.get(e, void 0, t, "script")
            }
        }),
        we.each(["get", "post"], function (e, t) {
            we[t] = function (e, i, n, s) {
                return ye(i) && (s = s || n,
                    n = i,
                    i = void 0),
                    we.ajax(we.extend({
                        url: e,
                        type: t,
                        dataType: s,
                        data: i,
                        success: n
                    }, we.isPlainObject(e) && e))
            }
        }),
        we._evalUrl = function (e) {
            return we.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        we.fn.extend({
            wrapAll: function (e) {
                var t;
                return this[0] && (ye(e) && (e = e.call(this[0])),
                    t = we(e, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t.map(function () {
                        for (var e = this; e.firstElementChild;)
                            e = e.firstElementChild;
                        return e
                    }).append(this)),
                    this
            },
            wrapInner: function (e) {
                return ye(e) ? this.each(function (t) {
                    we(this).wrapInner(e.call(this, t))
                }) : this.each(function () {
                    var t = we(this)
                        , i = t.contents();
                    i.length ? i.wrapAll(e) : t.append(e)
                })
            },
            wrap: function (e) {
                var t = ye(e);
                return this.each(function (i) {
                    we(this).wrapAll(t ? e.call(this, i) : e)
                })
            },
            unwrap: function (e) {
                return this.parent(e).not("body").each(function () {
                    we(this).replaceWith(this.childNodes)
                }),
                    this
            }
        }),
        we.expr.pseudos.hidden = function (e) {
            return !we.expr.pseudos.visible(e)
        }
        ,
        we.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        we.ajaxSettings.xhr = function () {
            try {
                return new e.XMLHttpRequest
            } catch (e) { }
        }
        ;
    var qt = {
        0: 200,
        1223: 204
    }
        , Xt = we.ajaxSettings.xhr();
    ve.cors = !!Xt && "withCredentials" in Xt,
        ve.ajax = Xt = !!Xt,
        we.ajaxTransport(function (e) {
            var t, i;
            return ve.cors || Xt && !e.crossDomain ? {
                send: function (n, s) {
                    var a, r = e.xhr();
                    if (r.open(e.type, e.url, e.async, e.username, e.password),
                        e.xhrFields)
                        for (a in e.xhrFields)
                            r[a] = e.xhrFields[a];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType),
                        e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (a in n)
                        r.setRequestHeader(a, n[a]);
                    t = function (e) {
                        return function () {
                            t && (t = i = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? s(0, "error") : s(r.status, r.statusText) : s(qt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                    binary: r.response
                                } : {
                                    text: r.responseText
                                }, r.getAllResponseHeaders()))
                        }
                    }
                        ,
                        r.onload = t(),
                        i = r.onerror = r.ontimeout = t("error"),
                        void 0 !== r.onabort ? r.onabort = i : r.onreadystatechange = function () {
                            4 === r.readyState && o.setTimeout(function () {
                                t && i()
                            })
                        }
                        ,
                        t = t("abort");
                    try {
                        r.send(e.hasContent && e.data || null)
                    } catch (o) {
                        if (t)
                            throw o
                    }
                },
                abort: function () {
                    t && t()
                }
            } : void 0
        }),
        we.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        we.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function (e) {
                    return we.globalEval(e),
                        e
                }
            }
        }),
        we.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET")
        }),
        we.ajaxTransport("script", function (e) {
            if (e.crossDomain) {
                var t, i;
                return {
                    send: function (n, s) {
                        t = we("<script>").prop({
                            charset: e.scriptCharset,
                            src: e.url
                        }).on("load error", i = function (e) {
                            t.remove(),
                                i = null,
                                e && s("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                            re.head.appendChild(t[0])
                    },
                    abort: function () {
                        i && i()
                    }
                }
            }
        });
    var Gt = []
        , Ut = /(=)\?(?=&|$)|\?\?/;
    we.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Gt.pop() || we.expando + "_" + $t++;
            return this[e] = !0,
                e
        }
    }),
        we.ajaxPrefilter("json jsonp", function (t, i, n) {
            var s, a, r, o = !1 !== t.jsonp && (Ut.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(t.data) && "data");
            return o || "jsonp" === t.dataTypes[0] ? (s = t.jsonpCallback = ye(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                o ? t[o] = t[o].replace(Ut, "$1" + s) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + s),
                t.converters["script json"] = function () {
                    return r || we.error(s + " was not called"),
                        r[0]
                }
                ,
                t.dataTypes[0] = "json",
                a = e[s],
                e[s] = function () {
                    r = arguments
                }
                ,
                n.always(function () {
                    void 0 === a ? we(e).removeProp(s) : e[s] = a,
                        t[s] && (t.jsonpCallback = i.jsonpCallback,
                            Gt.push(s)),
                        r && ye(a) && a(r[0]),
                        r = a = void 0
                }),
                "script") : void 0
        }),
        ve.createHTMLDocument = function () {
            var e = re.implementation.createHTMLDocument("").body;
            return e.innerHTML = "<form></form><form></form>",
                2 === e.childNodes.length
        }(),
        we.parseHTML = function (e, t, i) {
            if ("string" != typeof e)
                return [];
            "boolean" == typeof t && (i = t,
                t = !1);
            var n, s, a;
            return t || (ve.createHTMLDocument ? ((n = (t = re.implementation.createHTMLDocument("")).createElement("base")).href = re.location.href,
                t.head.appendChild(n)) : t = re),
                s = Ee.exec(e),
                a = !i && [],
                s ? [t.createElement(s[1])] : (s = k([e], t, a),
                    a && a.length && we(a).remove(),
                    we.merge([], s.childNodes))
        }
        ,
        we.fn.load = function (e, t, i) {
            var n, s, a, r = this, o = e.indexOf(" ");
            return o > -1 && (n = K(e.slice(o)),
                e = e.slice(0, o)),
                ye(t) ? (i = t,
                    t = void 0) : t && "object" == typeof t && (s = "POST"),
                r.length > 0 && we.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t
                }).done(function (e) {
                    a = arguments,
                        r.html(n ? we("<div>").append(we.parseHTML(e)).find(n) : e)
                }).always(i && function (e, t) {
                    r.each(function () {
                        i.apply(this, a || [e.responseText, t, e])
                    })
                }
                ),
                this
        }
        ,
        we.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            we.fn[t] = function (e) {
                return this.on(t, e)
            }
        }),
        we.expr.pseudos.animated = function (e) {
            return we.grep(we.timers, function (t) {
                return e === t.elem
            }).length
        }
        ,
        we.offset = {
            setOffset: function (e, t, i) {
                var n, s, a, r, o, l, c, d = we.css(e, "position"), u = we(e), h = {};
                "static" === d && (e.style.position = "relative"),
                    o = u.offset(),
                    a = we.css(e, "top"),
                    l = we.css(e, "left"),
                    (c = ("absolute" === d || "fixed" === d) && (a + l).indexOf("auto") > -1) ? (r = (n = u.position()).top,
                        s = n.left) : (r = parseFloat(a) || 0,
                            s = parseFloat(l) || 0),
                    ye(t) && (t = t.call(e, i, we.extend({}, o))),
                    null != t.top && (h.top = t.top - o.top + r),
                    null != t.left && (h.left = t.left - o.left + s),
                    "using" in t ? t.using.call(e, h) : u.css(h)
            }
        },
        we.fn.extend({
            offset: function (e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function (t) {
                        we.offset.setOffset(this, e, t)
                    });
                var t, i, n = this[0];
                return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(),
                    i = n.ownerDocument.defaultView,
                {
                    top: t.top + i.pageYOffset,
                    left: t.left + i.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function () {
                if (this[0]) {
                    var e, t, i, n = this[0], s = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === we.css(n, "position"))
                        t = n.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                            i = n.ownerDocument,
                            e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === we.css(e, "position");)
                            e = e.parentNode;
                        e && e !== n && 1 === e.nodeType && ((s = we(e).offset()).top += we.css(e, "borderTopWidth", !0),
                            s.left += we.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - s.top - we.css(n, "marginTop", !0),
                        left: t.left - s.left - we.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === we.css(e, "position");)
                        e = e.offsetParent;
                    return e || et
                })
            }
        }),
        we.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function (e, t) {
            var i = "pageYOffset" === t;
            we.fn[e] = function (n) {
                return Oe(this, function (e, n, s) {
                    var a;
                    return be(e) ? a = e : 9 === e.nodeType && (a = e.defaultView),
                        void 0 === s ? a ? a[t] : e[n] : void (a ? a.scrollTo(i ? a.pageXOffset : s, i ? s : a.pageYOffset) : e[n] = s)
                }, e, n, arguments.length)
            }
        }),
        we.each(["top", "left"], function (e, t) {
            we.cssHooks[t] = N(ve.pixelPosition, function (e, i) {
                return i ? (i = O(e, t),
                    lt.test(i) ? we(e).position()[t] + "px" : i) : void 0
            })
        }),
        we.each({
            Height: "height",
            Width: "width"
        }, function (e, t) {
            we.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function (i, n) {
                we.fn[n] = function (s, a) {
                    var r = arguments.length && (i || "boolean" != typeof s)
                        , o = i || (!0 === s || !0 === a ? "margin" : "border");
                    return Oe(this, function (t, i, s) {
                        var a;
                        return be(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement,
                            Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === s ? we.css(t, i, o) : we.style(t, i, s, o)
                    }, t, r ? s : void 0, r)
                }
            })
        }),
        we.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
            we.fn[t] = function (e, i) {
                return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
            }
        }),
        we.fn.extend({
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        we.fn.extend({
            bind: function (e, t, i) {
                return this.on(e, null, t, i)
            },
            unbind: function (e, t) {
                return this.off(e, null, t)
            },
            delegate: function (e, t, i, n) {
                return this.on(t, e, i, n)
            },
            undelegate: function (e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
            }
        }),
        we.proxy = function (e, t) {
            var i, n, s;
            return "string" == typeof t && (i = e[t],
                t = e,
                e = i),
                ye(e) ? (n = le.call(arguments, 2),
                    s = function () {
                        return e.apply(t || this, n.concat(le.call(arguments)))
                    }
                    ,
                    s.guid = e.guid = e.guid || we.guid++,
                    s) : void 0
        }
        ,
        we.holdReady = function (e) {
            e ? we.readyWait++ : we.ready(!0)
        }
        ,
        we.isArray = Array.isArray,
        we.parseJSON = JSON.parse,
        we.nodeName = a,
        we.isFunction = ye,
        we.isWindow = be,
        we.camelCase = f,
        we.type = n,
        we.now = Date.now,
        we.isNumeric = function (e) {
            var t = we.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        "function" == typeof define && define.amd && define("jquery", [], function () {
            return we
        });
    var Kt = e.jQuery
        , Zt = e.$;
    return we.noConflict = function (t) {
        return e.$ === we && (e.$ = Zt),
            t && e.jQuery === we && (e.jQuery = Kt),
            we
    }
        ,
        t || (e.jQuery = e.$ = we),
        we
}),
    !function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery")) : "function" == typeof define && define.amd ? define(["exports", "jquery"], t) : t(e.bootstrap = {}, e.jQuery)
    }(this, function (e, t) {
        "use strict";
        function i(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value" in n && (n.writable = !0),
                    Object.defineProperty(e, n.key, n)
            }
        }
        function n(e, t, n) {
            return t && i(e.prototype, t),
                n && i(e, n),
                e
        }
        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {}
                    , n = Object.keys(i);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(i, e).enumerable
                }))),
                    n.forEach(function (t) {
                        var n, s, a;
                        n = e,
                            a = i[s = t],
                            s in n ? Object.defineProperty(n, s, {
                                value: a,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[s] = a
                    })
            }
            return e
        }
        function a(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }
        function r(e, t) {
            if (1 !== e.nodeType)
                return [];
            var i = getComputedStyle(e, null);
            return t ? i[t] : i
        }
        function o(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }
        function l(e) {
            if (!e)
                return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body
            }
            var t = r(e)
                , i = t.overflow
                , n = t.overflowX
                , s = t.overflowY;
            return /(auto|scroll|overlay)/.test(i + s + n) ? e : l(o(e))
        }
        function c(e) {
            if (!e)
                return document.documentElement;
            for (var t = at(10) ? document.body : null, i = e.offsetParent; i === t && e.nextElementSibling;)
                i = (e = e.nextElementSibling).offsetParent;
            var n = i && i.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === r(i, "position") ? c(i) : i : e ? e.ownerDocument.documentElement : document.documentElement
        }
        function d(e) {
            return null !== e.parentNode ? d(e.parentNode) : e
        }
        function u(e, t) {
            if (!(e && e.nodeType && t && t.nodeType))
                return document.documentElement;
            var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING
                , n = i ? e : t
                , s = i ? t : e
                , a = document.createRange();
            a.setStart(n, 0),
                a.setEnd(s, 0);
            var r, o, l = a.commonAncestorContainer;
            if (e !== l && t !== l || n.contains(s))
                return "BODY" === (o = (r = l).nodeName) || "HTML" !== o && c(r.firstElementChild) !== r ? c(l) : l;
            var h = d(e);
            return h.host ? u(h.host, t) : u(e, d(t).host)
        }
        function h(e) {
            var t = "top" === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft"
                , i = e.nodeName;
            if ("BODY" === i || "HTML" === i) {
                var n = e.ownerDocument.documentElement;
                return (e.ownerDocument.scrollingElement || n)[t]
            }
            return e[t]
        }
        function p(e, t) {
            var i = "x" === t ? "Left" : "Top"
                , n = "Left" === i ? "Right" : "Bottom";
            return parseFloat(e["border" + i + "Width"], 10) + parseFloat(e["border" + n + "Width"], 10)
        }
        function f(e, t, i, n) {
            return Math.max(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], at(10) ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
        }
        function g() {
            var e = document.body
                , t = document.documentElement
                , i = at(10) && getComputedStyle(t);
            return {
                height: f("Height", e, t, i),
                width: f("Width", e, t, i)
            }
        }
        function m(e) {
            return ct({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }
        function v(e) {
            var t = {};
            try {
                if (at(10)) {
                    t = e.getBoundingClientRect();
                    var i = h(e, "top")
                        , n = h(e, "left");
                    t.top += i,
                        t.left += n,
                        t.bottom += i,
                        t.right += n
                } else
                    t = e.getBoundingClientRect()
            } catch (e) { }
            var s = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            }
                , a = "HTML" === e.nodeName ? g() : {}
                , o = a.width || e.clientWidth || s.right - s.left
                , l = a.height || e.clientHeight || s.bottom - s.top
                , c = e.offsetWidth - o
                , d = e.offsetHeight - l;
            if (c || d) {
                var u = r(e);
                c -= p(u, "x"),
                    d -= p(u, "y"),
                    s.width -= c,
                    s.height -= d
            }
            return m(s)
        }
        function y(e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                , n = at(10)
                , s = "HTML" === t.nodeName
                , a = v(e)
                , o = v(t)
                , c = l(e)
                , d = r(t)
                , u = parseFloat(d.borderTopWidth, 10)
                , p = parseFloat(d.borderLeftWidth, 10);
            i && "HTML" === t.nodeName && (o.top = Math.max(o.top, 0),
                o.left = Math.max(o.left, 0));
            var f = m({
                top: a.top - o.top - u,
                left: a.left - o.left - p,
                width: a.width,
                height: a.height
            });
            if (f.marginTop = 0,
                f.marginLeft = 0,
                !n && s) {
                var g = parseFloat(d.marginTop, 10)
                    , y = parseFloat(d.marginLeft, 10);
                f.top -= u - g,
                    f.bottom -= u - g,
                    f.left -= p - y,
                    f.right -= p - y,
                    f.marginTop = g,
                    f.marginLeft = y
            }
            return (n && !i ? t.contains(c) : t === c && "BODY" !== c.nodeName) && (f = function (e, t) {
                var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2]
                    , n = h(t, "top")
                    , s = h(t, "left")
                    , a = i ? -1 : 1;
                return e.top += n * a,
                    e.bottom += n * a,
                    e.left += s * a,
                    e.right += s * a,
                    e
            }(f, t)),
                f
        }
        function b(e) {
            if (!e || !e.parentElement || at())
                return document.documentElement;
            for (var t = e.parentElement; t && "none" === r(t, "transform");)
                t = t.parentElement;
            return t || document.documentElement
        }
        function x(e, t, i, n) {
            var s = 4 < arguments.length && void 0 !== arguments[4] && arguments[4]
                , a = {
                    top: 0,
                    left: 0
                }
                , c = s ? b(e) : u(e, t);
            if ("viewport" === n)
                a = function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                        , i = e.ownerDocument.documentElement
                        , n = y(e, i)
                        , s = Math.max(i.clientWidth, window.innerWidth || 0)
                        , a = Math.max(i.clientHeight, window.innerHeight || 0)
                        , r = t ? 0 : h(i)
                        , o = t ? 0 : h(i, "left");
                    return m({
                        top: r - n.top + n.marginTop,
                        left: o - n.left + n.marginLeft,
                        width: s,
                        height: a
                    })
                }(c, s);
            else {
                var d = void 0;
                "scrollParent" === n ? "BODY" === (d = l(o(t))).nodeName && (d = e.ownerDocument.documentElement) : d = "window" === n ? e.ownerDocument.documentElement : n;
                var p = y(d, c, s);
                if ("HTML" !== d.nodeName || function w(e) {
                    var t = e.nodeName;
                    return "BODY" !== t && "HTML" !== t && ("fixed" === r(e, "position") || w(o(e)))
                }(c))
                    a = p;
                else {
                    var f = g()
                        , v = f.height
                        , x = f.width;
                    a.top += p.top - p.marginTop,
                        a.bottom = v + p.top,
                        a.left += p.left - p.marginLeft,
                        a.right = x + p.left
                }
            }
            return a.left += i,
                a.top += i,
                a.right -= i,
                a.bottom -= i,
                a
        }
        function w(e, t, i, n, s) {
            var a = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
            if (-1 === e.indexOf("auto"))
                return e;
            var r = x(i, n, a, s)
                , o = {
                    top: {
                        width: r.width,
                        height: t.top - r.top
                    },
                    right: {
                        width: r.right - t.right,
                        height: r.height
                    },
                    bottom: {
                        width: r.width,
                        height: r.bottom - t.bottom
                    },
                    left: {
                        width: t.left - r.left,
                        height: r.height
                    }
                }
                , l = Object.keys(o).map(function (e) {
                    return ct({
                        key: e
                    }, o[e], {
                        area: (t = o[e],
                            t.width * t.height)
                    });
                    var t
                }).sort(function (e, t) {
                    return t.area - e.area
                })
                , c = l.filter(function (e) {
                    var t = e.width
                        , n = e.height;
                    return t >= i.clientWidth && n >= i.clientHeight
                })
                , d = 0 < c.length ? c[0].key : l[0].key
                , u = e.split("-")[1];
            return d + (u ? "-" + u : "")
        }
        function _(e, t, i) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
            return y(i, n ? b(t) : u(t, i), n)
        }
        function k(e) {
            var t = getComputedStyle(e)
                , i = parseFloat(t.marginTop) + parseFloat(t.marginBottom)
                , n = parseFloat(t.marginLeft) + parseFloat(t.marginRight);
            return {
                width: e.offsetWidth + n,
                height: e.offsetHeight + i
            }
        }
        function S(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e]
            })
        }
        function C(e, t, i) {
            i = i.split("-")[0];
            var n = k(e)
                , s = {
                    width: n.width,
                    height: n.height
                }
                , a = -1 !== ["right", "left"].indexOf(i)
                , r = a ? "top" : "left"
                , o = a ? "left" : "top"
                , l = a ? "height" : "width"
                , c = a ? "width" : "height";
            return s[r] = t[r] + t[l] / 2 - n[l] / 2,
                s[o] = i === o ? t[o] - n[c] : t[S(o)],
                s
        }
        function T(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }
        function E(e, t, i) {
            return (void 0 === i ? e : e.slice(0, function (e, t, i) {
                if (Array.prototype.findIndex)
                    return e.findIndex(function (e) {
                        return e[t] === i
                    });
                var n = T(e, function (e) {
                    return e[t] === i
                });
                return e.indexOf(n)
            }(e, "name", i))).forEach(function (e) {
                e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                var i = e["function"] || e.fn;
                e.enabled && a(i) && (t.offsets.popper = m(t.offsets.popper),
                    t.offsets.reference = m(t.offsets.reference),
                    t = i(t, e))
            }),
                t
        }
        function A(e, t) {
            return e.some(function (e) {
                var i = e.name;
                return e.enabled && i === t
            })
        }
        function $(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
                var s = t[n]
                    , a = s ? "" + s + i : e;
                if ("undefined" != typeof document.body.style[a])
                    return a
            }
            return null
        }
        function D(e) {
            var t = e.ownerDocument;
            return t ? t.defaultView : window
        }
        function M(e, t, i, n) {
            i.updateBound = n,
                D(e).addEventListener("resize", i.updateBound, {
                    passive: !0
                });
            var s = l(e);
            return function a(e, t, i, n) {
                var s = "BODY" === e.nodeName
                    , r = s ? e.ownerDocument.defaultView : e;
                r.addEventListener(t, i, {
                    passive: !0
                }),
                    s || a(l(r.parentNode), t, i, n),
                    n.push(r)
            }(s, "scroll", i.updateBound, i.scrollParents),
                i.scrollElement = s,
                i.eventsEnabled = !0,
                i
        }
        function I() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
                this.state = (e = this.reference,
                    t = this.state,
                    D(e).removeEventListener("resize", t.updateBound),
                    t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound)
                    }),
                    t.updateBound = null,
                    t.scrollParents = [],
                    t.scrollElement = null,
                    t.eventsEnabled = !1,
                    t))
        }
        function P(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }
        function L(e, t) {
            Object.keys(t).forEach(function (i) {
                var n = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && P(t[i]) && (n = "px"),
                    e.style[i] = t[i] + n
            })
        }
        function O(e, t, i) {
            var n = T(e, function (e) {
                return e.name === t
            })
                , s = !!n && e.some(function (e) {
                    return e.name === i && e.enabled && e.order < n.order
                });
            if (!s) {
                var a = "`" + t + "`"
                    , r = "`" + i + "`";
                console.warn(r + " modifier is required by " + a + " modifier in order to work, be sure to include it before " + a + "!")
            }
            return s
        }
        function N(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1]
                , i = ut.indexOf(e)
                , n = ut.slice(i + 1).concat(ut.slice(0, i));
            return t ? n.reverse() : n
        }
        function z(e, t, i, n) {
            var s = [0, 0]
                , a = -1 !== ["right", "left"].indexOf(n)
                , r = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim()
                })
                , o = r.indexOf(T(r, function (e) {
                    return -1 !== e.search(/,|\s/)
                }));
            r[o] && -1 === r[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            var l = /\s*,\s*|\s+/
                , c = -1 !== o ? [r.slice(0, o).concat([r[o].split(l)[0]]), [r[o].split(l)[1]].concat(r.slice(o + 1))] : [r];
            return (c = c.map(function (e, n) {
                var s = (1 === n ? !a : a) ? "height" : "width"
                    , r = !1;
                return e.reduce(function (e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                        r = !0,
                        e) : r ? (e[e.length - 1] += t,
                            r = !1,
                            e) : e.concat(t)
                }, []).map(function (e) {
                    return function (e, t, i, n) {
                        var s = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/)
                            , a = +s[1]
                            , r = s[2];
                        if (!a)
                            return e;
                        if (0 === r.indexOf("%")) {
                            var o = void 0;
                            switch (r) {
                                case "%p":
                                    o = i;
                                    break;
                                case "%":
                                case "%r":
                                default:
                                    o = n
                            }
                            return m(o)[t] / 100 * a
                        }
                        return "vh" === r || "vw" === r ? ("vh" === r ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * a : a
                    }(e, s, t, i)
                })
            })).forEach(function (e, t) {
                e.forEach(function (i, n) {
                    P(i) && (s[t] += i * ("-" === e[n - 1] ? -1 : 1))
                })
            }),
                s
        }
        for (var H, j, F, R, W, B, Y, V, q, X, G, U, K, Z, Q, J, ee, te, ie, ne, se, ae, re, oe, le, ce, de, ue, he, pe, fe, ge, me, ve, ye, be, xe, we, _e, ke, Se, Ce, Te, Ee, Ae, $e, De, Me, Ie, Pe, Le, Oe, Ne, ze, He, je, Fe, Re, We, Be, Ye, Ve, qe, Xe, Ge = function (e) {
            function t(t) {
                var i = this
                    , s = !1;
                return e(this).one(n.TRANSITION_END, function () {
                    s = !0
                }),
                    setTimeout(function () {
                        s || n.triggerTransitionEnd(i)
                    }, t),
                    this
            }
            var i = "transitionend"
                , n = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function (e) {
                        for (; e += ~~(1e6 * Math.random()),
                            document.getElementById(e);)
                            ;
                        return e
                    },
                    getSelectorFromElement: function (t) {
                        var i = t.getAttribute("data-target");
                        i && "#" !== i || (i = t.getAttribute("href") || "");
                        try {
                            return 0 < e(document).find(i).length ? i : null
                        } catch (t) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function (t) {
                        if (!t)
                            return 0;
                        var i = e(t).css("transition-duration");
                        return parseFloat(i) ? (i = i.split(",")[0],
                            1e3 * parseFloat(i)) : 0
                    },
                    reflow: function (e) {
                        return e.offsetHeight
                    },
                    triggerTransitionEnd: function (t) {
                        e(t).trigger(i)
                    },
                    supportsTransitionEnd: function () {
                        return Boolean(i)
                    },
                    isElement: function (e) {
                        return (e[0] || e).nodeType
                    },
                    typeCheckConfig: function (e, t, i) {
                        for (var s in i)
                            if (Object.prototype.hasOwnProperty.call(i, s)) {
                                var a = i[s]
                                    , r = t[s]
                                    , o = r && n.isElement(r) ? "element" : (l = r,
                                        {}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(a).test(o))
                                    throw new Error(e.toUpperCase() + ': Option "' + s + '" provided type "' + o + '" but expected type "' + a + '".')
                            }
                        var l
                    }
                };
            return e.fn.emulateTransitionEnd = t,
                e.event.special[n.TRANSITION_END] = {
                    bindType: i,
                    delegateType: i,
                    handle: function (t) {
                        return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
                    }
                },
                n
        }(t = t && t.hasOwnProperty("default") ? t["default"] : t), Ue = (j = "alert",
            R = "." + (F = "bs.alert"),
            W = (H = t).fn[j],
            B = {
                CLOSE: "close" + R,
                CLOSED: "closed" + R,
                CLICK_DATA_API: "click" + R + ".data-api"
            },
            Y = "alert",
            V = "fade",
            q = "show",
            X = function () {
                function e(e) {
                    this._element = e
                }
                var t = e.prototype;
                return t.close = function (e) {
                    e = e || this._element;
                    var t = this._getRootElement(e);
                    this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }
                    ,
                    t.dispose = function () {
                        H.removeData(this._element, F),
                            this._element = null
                    }
                    ,
                    t._getRootElement = function (e) {
                        var t = Ge.getSelectorFromElement(e)
                            , i = !1;
                        return t && (i = H(t)[0]),
                            i || (i = H(e).closest("." + Y)[0]),
                            i
                    }
                    ,
                    t._triggerCloseEvent = function (e) {
                        var t = H.Event(B.CLOSE);
                        return H(e).trigger(t),
                            t
                    }
                    ,
                    t._removeElement = function (e) {
                        var t = this;
                        if (H(e).removeClass(q),
                            H(e).hasClass(V)) {
                            var i = Ge.getTransitionDurationFromElement(e);
                            H(e).one(Ge.TRANSITION_END, function (i) {
                                return t._destroyElement(e, i)
                            }).emulateTransitionEnd(i)
                        } else
                            this._destroyElement(e)
                    }
                    ,
                    t._destroyElement = function (e) {
                        H(e).detach().trigger(B.CLOSED).remove()
                    }
                    ,
                    e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = H(this)
                                , n = i.data(F);
                            n || (n = new e(this),
                                i.data(F, n)),
                                "close" === t && n[t](this)
                        })
                    }
                    ,
                    e._handleDismiss = function (e) {
                        return function (t) {
                            t && t.preventDefault(),
                                e.close(this)
                        }
                    }
                    ,
                    n(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.1.0"
                        }
                    }]),
                    e
            }(),
            H(document).on(B.CLICK_DATA_API, '[data-dismiss="alert"]', X._handleDismiss(new X)),
            H.fn[j] = X._jQueryInterface,
            H.fn[j].Constructor = X,
            H.fn[j].noConflict = function () {
                return H.fn[j] = W,
                    X._jQueryInterface
            }
            ,
            X), Ke = (U = "button",
                Z = "." + (K = "bs.button"),
                Q = ".data-api",
                J = (G = t).fn[U],
                ee = "active",
                te = "btn",
                ne = '[data-toggle^="button"]',
                se = '[data-toggle="buttons"]',
                ae = "input",
                re = ".active",
                oe = ".btn",
                le = {
                    CLICK_DATA_API: "click" + Z + Q,
                    FOCUS_BLUR_DATA_API: (ie = "focus") + Z + Q + " blur" + Z + Q
                },
                ce = function () {
                    function e(e) {
                        this._element = e
                    }
                    var t = e.prototype;
                    return t.toggle = function () {
                        var e = !0
                            , t = !0
                            , i = G(this._element).closest(se)[0];
                        if (i) {
                            var n = G(this._element).find(ae)[0];
                            if (n) {
                                if ("radio" === n.type)
                                    if (n.checked && G(this._element).hasClass(ee))
                                        e = !1;
                                    else {
                                        var s = G(i).find(re)[0];
                                        s && G(s).removeClass(ee)
                                    }
                                if (e) {
                                    if (n.hasAttribute("disabled") || i.hasAttribute("disabled") || n.classList.contains("disabled") || i.classList.contains("disabled"))
                                        return;
                                    n.checked = !G(this._element).hasClass(ee),
                                        G(n).trigger("change")
                                }
                                n.focus(),
                                    t = !1
                            }
                        }
                        t && this._element.setAttribute("aria-pressed", !G(this._element).hasClass(ee)),
                            e && G(this._element).toggleClass(ee)
                    }
                        ,
                        t.dispose = function () {
                            G.removeData(this._element, K),
                                this._element = null
                        }
                        ,
                        e._jQueryInterface = function (t) {
                            return this.each(function () {
                                var i = G(this).data(K);
                                i || (i = new e(this),
                                    G(this).data(K, i)),
                                    "toggle" === t && i[t]()
                            })
                        }
                        ,
                        n(e, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.0"
                            }
                        }]),
                        e
                }(),
                G(document).on(le.CLICK_DATA_API, ne, function (e) {
                    e.preventDefault();
                    var t = e.target;
                    G(t).hasClass(te) || (t = G(t).closest(oe)),
                        ce._jQueryInterface.call(G(t), "toggle")
                }).on(le.FOCUS_BLUR_DATA_API, ne, function (e) {
                    var t = G(e.target).closest(oe)[0];
                    G(t).toggleClass(ie, /^focus(in)?$/.test(e.type))
                }),
                G.fn[U] = ce._jQueryInterface,
                G.fn[U].Constructor = ce,
                G.fn[U].noConflict = function () {
                    return G.fn[U] = J,
                        ce._jQueryInterface
                }
                ,
                ce), Ze = (ue = "carousel",
                    pe = "." + (he = "bs.carousel"),
                    fe = ".data-api",
                    ge = (de = t).fn[ue],
                    me = {
                        interval: 5e3,
                        keyboard: !0,
                        slide: !1,
                        pause: "hover",
                        wrap: !0
                    },
                    ve = {
                        interval: "(number|boolean)",
                        keyboard: "boolean",
                        slide: "(boolean|string)",
                        pause: "(string|boolean)",
                        wrap: "boolean"
                    },
                    ye = "next",
                    be = "prev",
                    xe = "left",
                    we = "right",
                    _e = {
                        SLIDE: "slide" + pe,
                        SLID: "slid" + pe,
                        KEYDOWN: "keydown" + pe,
                        MOUSEENTER: "mouseenter" + pe,
                        MOUSELEAVE: "mouseleave" + pe,
                        TOUCHEND: "touchend" + pe,
                        LOAD_DATA_API: "load" + pe + fe,
                        CLICK_DATA_API: "click" + pe + fe
                    },
                    ke = "carousel",
                    Se = "active",
                    Ce = "slide",
                    Te = "carousel-item-right",
                    Ee = "carousel-item-left",
                    Ae = "carousel-item-next",
                    $e = "carousel-item-prev",
                    De = {
                        ACTIVE: ".active",
                        ACTIVE_ITEM: ".active.carousel-item",
                        ITEM: ".carousel-item",
                        NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                        INDICATORS: ".carousel-indicators",
                        DATA_SLIDE: "[data-slide], [data-slide-to]",
                        DATA_RIDE: '[data-ride="carousel"]'
                    },
                    Me = function () {
                        function e(e, t) {
                            this._items = null,
                                this._interval = null,
                                this._activeElement = null,
                                this._isPaused = !1,
                                this._isSliding = !1,
                                this.touchTimeout = null,
                                this._config = this._getConfig(t),
                                this._element = de(e)[0],
                                this._indicatorsElement = de(this._element).find(De.INDICATORS)[0],
                                this._addEventListeners()
                        }
                        var t = e.prototype;
                        return t.next = function () {
                            this._isSliding || this._slide(ye)
                        }
                            ,
                            t.nextWhenVisible = function () {
                                !document.hidden && de(this._element).is(":visible") && "hidden" !== de(this._element).css("visibility") && this.next()
                            }
                            ,
                            t.prev = function () {
                                this._isSliding || this._slide(be)
                            }
                            ,
                            t.pause = function (e) {
                                e || (this._isPaused = !0),
                                    de(this._element).find(De.NEXT_PREV)[0] && (Ge.triggerTransitionEnd(this._element),
                                        this.cycle(!0)),
                                    clearInterval(this._interval),
                                    this._interval = null
                            }
                            ,
                            t.cycle = function (e) {
                                e || (this._isPaused = !1),
                                    this._interval && (clearInterval(this._interval),
                                        this._interval = null),
                                    this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                            }
                            ,
                            t.to = function (e) {
                                var t = this;
                                this._activeElement = de(this._element).find(De.ACTIVE_ITEM)[0];
                                var i = this._getItemIndex(this._activeElement);
                                if (!(e > this._items.length - 1 || 0 > e))
                                    if (this._isSliding)
                                        de(this._element).one(_e.SLID, function () {
                                            return t.to(e)
                                        });
                                    else {
                                        if (i === e)
                                            return this.pause(),
                                                void this.cycle();
                                        var n = e > i ? ye : be;
                                        this._slide(n, this._items[e])
                                    }
                            }
                            ,
                            t.dispose = function () {
                                de(this._element).off(pe),
                                    de.removeData(this._element, he),
                                    this._items = null,
                                    this._config = null,
                                    this._element = null,
                                    this._interval = null,
                                    this._isPaused = null,
                                    this._isSliding = null,
                                    this._activeElement = null,
                                    this._indicatorsElement = null
                            }
                            ,
                            t._getConfig = function (e) {
                                return e = s({}, me, e),
                                    Ge.typeCheckConfig(ue, e, ve),
                                    e
                            }
                            ,
                            t._addEventListeners = function () {
                                var e = this;
                                this._config.keyboard && de(this._element).on(_e.KEYDOWN, function (t) {
                                    return e._keydown(t)
                                }),
                                    "hover" === this._config.pause && (de(this._element).on(_e.MOUSEENTER, function (t) {
                                        return e.pause(t)
                                    }).on(_e.MOUSELEAVE, function (t) {
                                        return e.cycle(t)
                                    }),
                                        "ontouchstart" in document.documentElement && de(this._element).on(_e.TOUCHEND, function () {
                                            e.pause(),
                                                e.touchTimeout && clearTimeout(e.touchTimeout),
                                                e.touchTimeout = setTimeout(function (t) {
                                                    return e.cycle(t)
                                                }, 500 + e._config.interval)
                                        }))
                            }
                            ,
                            t._keydown = function (e) {
                                if (!/input|textarea/i.test(e.target.tagName))
                                    switch (e.which) {
                                        case 37:
                                            e.preventDefault(),
                                                this.prev();
                                            break;
                                        case 39:
                                            e.preventDefault(),
                                                this.next()
                                    }
                            }
                            ,
                            t._getItemIndex = function (e) {
                                return this._items = de.makeArray(de(e).parent().find(De.ITEM)),
                                    this._items.indexOf(e)
                            }
                            ,
                            t._getItemByDirection = function (e, t) {
                                var i = e === ye
                                    , n = e === be
                                    , s = this._getItemIndex(t)
                                    , a = this._items.length - 1;
                                if ((n && 0 === s || i && s === a) && !this._config.wrap)
                                    return t;
                                var r = (s + (e === be ? -1 : 1)) % this._items.length;
                                return -1 === r ? this._items[this._items.length - 1] : this._items[r]
                            }
                            ,
                            t._triggerSlideEvent = function (e, t) {
                                var i = this._getItemIndex(e)
                                    , n = this._getItemIndex(de(this._element).find(De.ACTIVE_ITEM)[0])
                                    , s = de.Event(_e.SLIDE, {
                                        relatedTarget: e,
                                        direction: t,
                                        from: n,
                                        to: i
                                    });
                                return de(this._element).trigger(s),
                                    s
                            }
                            ,
                            t._setActiveIndicatorElement = function (e) {
                                if (this._indicatorsElement) {
                                    de(this._indicatorsElement).find(De.ACTIVE).removeClass(Se);
                                    var t = this._indicatorsElement.children[this._getItemIndex(e)];
                                    t && de(t).addClass(Se)
                                }
                            }
                            ,
                            t._slide = function (e, t) {
                                var i, n, s, a = this, r = de(this._element).find(De.ACTIVE_ITEM)[0], o = this._getItemIndex(r), l = t || r && this._getItemByDirection(e, r), c = this._getItemIndex(l), d = Boolean(this._interval);
                                if (e === ye ? (i = Ee,
                                    n = Ae,
                                    s = xe) : (i = Te,
                                        n = $e,
                                        s = we),
                                    l && de(l).hasClass(Se))
                                    this._isSliding = !1;
                                else if (!this._triggerSlideEvent(l, s).isDefaultPrevented() && r && l) {
                                    this._isSliding = !0,
                                        d && this.pause(),
                                        this._setActiveIndicatorElement(l);
                                    var u = de.Event(_e.SLID, {
                                        relatedTarget: l,
                                        direction: s,
                                        from: o,
                                        to: c
                                    });
                                    if (de(this._element).hasClass(Ce)) {
                                        de(l).addClass(n),
                                            Ge.reflow(l),
                                            de(r).addClass(i),
                                            de(l).addClass(i);
                                        var h = Ge.getTransitionDurationFromElement(r);
                                        de(r).one(Ge.TRANSITION_END, function () {
                                            de(l).removeClass(i + " " + n).addClass(Se),
                                                de(r).removeClass(Se + " " + n + " " + i),
                                                a._isSliding = !1,
                                                setTimeout(function () {
                                                    return de(a._element).trigger(u)
                                                }, 0)
                                        }).emulateTransitionEnd(h)
                                    } else
                                        de(r).removeClass(Se),
                                            de(l).addClass(Se),
                                            this._isSliding = !1,
                                            de(this._element).trigger(u);
                                    d && this.cycle()
                                }
                            }
                            ,
                            e._jQueryInterface = function (t) {
                                return this.each(function () {
                                    var i = de(this).data(he)
                                        , n = s({}, me, de(this).data());
                                    "object" == typeof t && (n = s({}, n, t));
                                    var a = "string" == typeof t ? t : n.slide;
                                    if (i || (i = new e(this, n),
                                        de(this).data(he, i)),
                                        "number" == typeof t)
                                        i.to(t);
                                    else if ("string" == typeof a) {
                                        if ("undefined" == typeof i[a])
                                            throw new TypeError('No method named "' + a + '"');
                                        i[a]()
                                    } else
                                        n.interval && (i.pause(),
                                            i.cycle())
                                })
                            }
                            ,
                            e._dataApiClickHandler = function (t) {
                                var i = Ge.getSelectorFromElement(this);
                                if (i) {
                                    var n = de(i)[0];
                                    if (n && de(n).hasClass(ke)) {
                                        var a = s({}, de(n).data(), de(this).data())
                                            , r = this.getAttribute("data-slide-to");
                                        r && (a.interval = !1),
                                            e._jQueryInterface.call(de(n), a),
                                            r && de(n).data(he).to(r),
                                            t.preventDefault()
                                    }
                                }
                            }
                            ,
                            n(e, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.1.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return me
                                }
                            }]),
                            e
                    }(),
                    de(document).on(_e.CLICK_DATA_API, De.DATA_SLIDE, Me._dataApiClickHandler),
                    de(window).on(_e.LOAD_DATA_API, function () {
                        de(De.DATA_RIDE).each(function () {
                            var e = de(this);
                            Me._jQueryInterface.call(e, e.data())
                        })
                    }),
                    de.fn[ue] = Me._jQueryInterface,
                    de.fn[ue].Constructor = Me,
                    de.fn[ue].noConflict = function () {
                        return de.fn[ue] = ge,
                            Me._jQueryInterface
                    }
                    ,
                    Me), Qe = (Pe = "collapse",
                        Oe = "." + (Le = "bs.collapse"),
                        Ne = (Ie = t).fn[Pe],
                        ze = {
                            toggle: !0,
                            parent: ""
                        },
                        He = {
                            toggle: "boolean",
                            parent: "(string|element)"
                        },
                        je = {
                            SHOW: "show" + Oe,
                            SHOWN: "shown" + Oe,
                            HIDE: "hide" + Oe,
                            HIDDEN: "hidden" + Oe,
                            CLICK_DATA_API: "click" + Oe + ".data-api"
                        },
                        Fe = "show",
                        Re = "collapse",
                        We = "collapsing",
                        Be = "collapsed",
                        Ye = "width",
                        Ve = "height",
                        qe = {
                            ACTIVES: ".show, .collapsing",
                            DATA_TOGGLE: '[data-toggle="collapse"]'
                        },
                        Xe = function () {
                            function e(e, t) {
                                this._isTransitioning = !1,
                                    this._element = e,
                                    this._config = this._getConfig(t),
                                    this._triggerArray = Ie.makeArray(Ie('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                                for (var i = Ie(qe.DATA_TOGGLE), n = 0; n < i.length; n++) {
                                    var s = i[n]
                                        , a = Ge.getSelectorFromElement(s);
                                    null !== a && 0 < Ie(a).filter(e).length && (this._selector = a,
                                        this._triggerArray.push(s))
                                }
                                this._parent = this._config.parent ? this._getParent() : null,
                                    this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                                    this._config.toggle && this.toggle()
                            }
                            var t = e.prototype;
                            return t.toggle = function () {
                                Ie(this._element).hasClass(Fe) ? this.hide() : this.show()
                            }
                                ,
                                t.show = function () {
                                    var t, i, n = this;
                                    if (!(this._isTransitioning || Ie(this._element).hasClass(Fe) || (this._parent && 0 === (t = Ie.makeArray(Ie(this._parent).find(qe.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (t = null),
                                        t && (i = Ie(t).not(this._selector).data(Le)) && i._isTransitioning))) {
                                        var s = Ie.Event(je.SHOW);
                                        if (Ie(this._element).trigger(s),
                                            !s.isDefaultPrevented()) {
                                            t && (e._jQueryInterface.call(Ie(t).not(this._selector), "hide"),
                                                i || Ie(t).data(Le, null));
                                            var a = this._getDimension();
                                            Ie(this._element).removeClass(Re).addClass(We),
                                                (this._element.style[a] = 0) < this._triggerArray.length && Ie(this._triggerArray).removeClass(Be).attr("aria-expanded", !0),
                                                this.setTransitioning(!0);
                                            var r = "scroll" + (a[0].toUpperCase() + a.slice(1))
                                                , o = Ge.getTransitionDurationFromElement(this._element);
                                            Ie(this._element).one(Ge.TRANSITION_END, function () {
                                                Ie(n._element).removeClass(We).addClass(Re).addClass(Fe),
                                                    n._element.style[a] = "",
                                                    n.setTransitioning(!1),
                                                    Ie(n._element).trigger(je.SHOWN)
                                            }).emulateTransitionEnd(o),
                                                this._element.style[a] = this._element[r] + "px"
                                        }
                                    }
                                }
                                ,
                                t.hide = function () {
                                    var e = this;
                                    if (!this._isTransitioning && Ie(this._element).hasClass(Fe)) {
                                        var t = Ie.Event(je.HIDE);
                                        if (Ie(this._element).trigger(t),
                                            !t.isDefaultPrevented()) {
                                            var i = this._getDimension();
                                            if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                                                Ge.reflow(this._element),
                                                Ie(this._element).addClass(We).removeClass(Re).removeClass(Fe),
                                                0 < this._triggerArray.length)
                                                for (var n = 0; n < this._triggerArray.length; n++) {
                                                    var s = this._triggerArray[n]
                                                        , a = Ge.getSelectorFromElement(s);
                                                    null !== a && (Ie(a).hasClass(Fe) || Ie(s).addClass(Be).attr("aria-expanded", !1))
                                                }
                                            this.setTransitioning(!0),
                                                this._element.style[i] = "";
                                            var r = Ge.getTransitionDurationFromElement(this._element);
                                            Ie(this._element).one(Ge.TRANSITION_END, function () {
                                                e.setTransitioning(!1),
                                                    Ie(e._element).removeClass(We).addClass(Re).trigger(je.HIDDEN)
                                            }).emulateTransitionEnd(r)
                                        }
                                    }
                                }
                                ,
                                t.setTransitioning = function (e) {
                                    this._isTransitioning = e
                                }
                                ,
                                t.dispose = function () {
                                    Ie.removeData(this._element, Le),
                                        this._config = null,
                                        this._parent = null,
                                        this._element = null,
                                        this._triggerArray = null,
                                        this._isTransitioning = null
                                }
                                ,
                                t._getConfig = function (e) {
                                    return (e = s({}, ze, e)).toggle = Boolean(e.toggle),
                                        Ge.typeCheckConfig(Pe, e, He),
                                        e
                                }
                                ,
                                t._getDimension = function () {
                                    return Ie(this._element).hasClass(Ye) ? Ye : Ve
                                }
                                ,
                                t._getParent = function () {
                                    var t = this
                                        , i = null;
                                    Ge.isElement(this._config.parent) ? (i = this._config.parent,
                                        "undefined" != typeof this._config.parent.jquery && (i = this._config.parent[0])) : i = Ie(this._config.parent)[0];
                                    var n = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                                    return Ie(i).find(n).each(function (i, n) {
                                        t._addAriaAndCollapsedClass(e._getTargetFromElement(n), [n])
                                    }),
                                        i
                                }
                                ,
                                t._addAriaAndCollapsedClass = function (e, t) {
                                    if (e) {
                                        var i = Ie(e).hasClass(Fe);
                                        0 < t.length && Ie(t).toggleClass(Be, !i).attr("aria-expanded", i)
                                    }
                                }
                                ,
                                e._getTargetFromElement = function (e) {
                                    var t = Ge.getSelectorFromElement(e);
                                    return t ? Ie(t)[0] : null
                                }
                                ,
                                e._jQueryInterface = function (t) {
                                    return this.each(function () {
                                        var i = Ie(this)
                                            , n = i.data(Le)
                                            , a = s({}, ze, i.data(), "object" == typeof t && t);
                                        if (!n && a.toggle && /show|hide/.test(t) && (a.toggle = !1),
                                            n || (n = new e(this, a),
                                                i.data(Le, n)),
                                            "string" == typeof t) {
                                            if ("undefined" == typeof n[t])
                                                throw new TypeError('No method named "' + t + '"');
                                            n[t]()
                                        }
                                    })
                                }
                                ,
                                n(e, null, [{
                                    key: "VERSION",
                                    get: function () {
                                        return "4.1.0"
                                    }
                                }, {
                                    key: "Default",
                                    get: function () {
                                        return ze
                                    }
                                }]),
                                e
                        }(),
                        Ie(document).on(je.CLICK_DATA_API, qe.DATA_TOGGLE, function (e) {
                            "A" === e.currentTarget.tagName && e.preventDefault();
                            var t = Ie(this)
                                , i = Ge.getSelectorFromElement(this);
                            Ie(i).each(function () {
                                var e = Ie(this)
                                    , i = e.data(Le) ? "toggle" : t.data();
                                Xe._jQueryInterface.call(e, i)
                            })
                        }),
                        Ie.fn[Pe] = Xe._jQueryInterface,
                        Ie.fn[Pe].Constructor = Xe,
                        Ie.fn[Pe].noConflict = function () {
                            return Ie.fn[Pe] = Ne,
                                Xe._jQueryInterface
                        }
                        ,
                        Xe), Je = "undefined" != typeof window && "undefined" != typeof document, et = ["Edge", "Trident", "Firefox"], tt = 0, it = 0; it < et.length; it += 1)
            if (Je && 0 <= navigator.userAgent.indexOf(et[it])) {
                tt = 1;
                break
            }
        var nt = Je && window.Promise ? function (e) {
            var t = !1;
            return function () {
                t || (t = !0,
                    window.Promise.resolve().then(function () {
                        t = !1,
                            e()
                    }))
            }
        }
            : function (e) {
                var t = !1;
                return function () {
                    t || (t = !0,
                        setTimeout(function () {
                            t = !1,
                                e()
                        }, tt))
                }
            }
            , st = {}
            , at = function () {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "all";
                if (e = e.toString(),
                    st.hasOwnProperty(e))
                    return st[e];
                switch (e) {
                    case "11":
                        st[e] = -1 !== navigator.userAgent.indexOf("Trident");
                        break;
                    case "10":
                        st[e] = -1 !== navigator.appVersion.indexOf("MSIE 10");
                        break;
                    case "all":
                        st[e] = -1 !== navigator.userAgent.indexOf("Trident") || -1 !== navigator.userAgent.indexOf("MSIE")
                }
                return st.all = st.all || Object.keys(st).some(function (e) {
                    return st[e]
                }),
                    st[e]
            }
            , rt = function (e, t) {
                if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function")
            }
            , ot = function () {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1,
                            n.configurable = !0,
                            "value" in n && (n.writable = !0),
                            Object.defineProperty(e, n.key, n)
                    }
                }
                return function (t, i, n) {
                    return i && e(t.prototype, i),
                        n && e(t, n),
                        t
                }
            }()
            , lt = function (e, t, i) {
                return t in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i,
                    e
            }
            , ct = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
            , dt = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
            , ut = dt.slice(3)
            , ht = {
                FLIP: "flip",
                CLOCKWISE: "clockwise",
                COUNTERCLOCKWISE: "counterclockwise"
            }
            , pt = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () { },
                onUpdate: function () { },
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.placement
                                , i = t.split("-")[0]
                                , n = t.split("-")[1];
                            if (n) {
                                var s = e.offsets
                                    , a = s.reference
                                    , r = s.popper
                                    , o = -1 !== ["bottom", "top"].indexOf(i)
                                    , l = o ? "left" : "top"
                                    , c = o ? "width" : "height"
                                    , d = {
                                        start: lt({}, l, a[l]),
                                        end: lt({}, l, a[l] + a[c] - r[c])
                                    };
                                e.offsets.popper = ct({}, r, d[n])
                            }
                            return e
                        }
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.offset
                                , n = e.placement
                                , s = e.offsets
                                , a = s.popper
                                , r = s.reference
                                , o = n.split("-")[0]
                                , l = void 0;
                            return l = P(+i) ? [+i, 0] : z(i, a, r, o),
                                "left" === o ? (a.top += l[0],
                                    a.left -= l[1]) : "right" === o ? (a.top += l[0],
                                        a.left += l[1]) : "top" === o ? (a.left += l[0],
                                            a.top -= l[1]) : "bottom" === o && (a.left += l[0],
                                                a.top += l[1]),
                                e.popper = a,
                                e
                        },
                        offset: 0
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.boundariesElement || c(e.instance.popper);
                            e.instance.reference === i && (i = c(i));
                            var n = x(e.instance.popper, e.instance.reference, t.padding, i, e.positionFixed);
                            t.boundaries = n;
                            var s = t.priority
                                , a = e.offsets.popper
                                , r = {
                                    primary: function (e) {
                                        var i = a[e];
                                        return a[e] < n[e] && !t.escapeWithReference && (i = Math.max(a[e], n[e])),
                                            lt({}, e, i)
                                    },
                                    secondary: function (e) {
                                        var i = "right" === e ? "left" : "top"
                                            , s = a[i];
                                        return a[e] > n[e] && !t.escapeWithReference && (s = Math.min(a[i], n[e] - ("right" === e ? a.width : a.height))),
                                            lt({}, i, s)
                                    }
                                };
                            return s.forEach(function (e) {
                                var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                a = ct({}, a, r[t](e))
                            }),
                                e.offsets.popper = a,
                                e
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent"
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = e.offsets
                                , i = t.popper
                                , n = t.reference
                                , s = e.placement.split("-")[0]
                                , a = Math.floor
                                , r = -1 !== ["top", "bottom"].indexOf(s)
                                , o = r ? "right" : "bottom"
                                , l = r ? "left" : "top"
                                , c = r ? "width" : "height";
                            return i[o] < a(n[l]) && (e.offsets.popper[l] = a(n[l]) - i[c]),
                                i[l] > a(n[o]) && (e.offsets.popper[l] = a(n[o])),
                                e
                        }
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, t) {
                            var i;
                            if (!O(e.instance.modifiers, "arrow", "keepTogether"))
                                return e;
                            var n = t.element;
                            if ("string" == typeof n) {
                                if (!(n = e.instance.popper.querySelector(n)))
                                    return e
                            } else if (!e.instance.popper.contains(n))
                                return console.warn("WARNING: `arrow.element` must be child of its popper element!"),
                                    e;
                            var s = e.placement.split("-")[0]
                                , a = e.offsets
                                , o = a.popper
                                , l = a.reference
                                , c = -1 !== ["left", "right"].indexOf(s)
                                , d = c ? "height" : "width"
                                , u = c ? "Top" : "Left"
                                , h = u.toLowerCase()
                                , p = c ? "left" : "top"
                                , f = c ? "bottom" : "right"
                                , g = k(n)[d];
                            l[f] - g < o[h] && (e.offsets.popper[h] -= o[h] - (l[f] - g)),
                                l[h] + g > o[f] && (e.offsets.popper[h] += l[h] + g - o[f]),
                                e.offsets.popper = m(e.offsets.popper);
                            var v = l[h] + l[d] / 2 - g / 2
                                , y = r(e.instance.popper)
                                , b = parseFloat(y["margin" + u], 10)
                                , x = parseFloat(y["border" + u + "Width"], 10)
                                , w = v - e.offsets.popper[h] - b - x;
                            return w = Math.max(Math.min(o[d] - g, w), 0),
                                e.arrowElement = n,
                                e.offsets.arrow = (lt(i = {}, h, Math.round(w)),
                                    lt(i, p, ""),
                                    i),
                                e
                        },
                        element: "[x-arrow]"
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (e, t) {
                            if (A(e.instance.modifiers, "inner"))
                                return e;
                            if (e.flipped && e.placement === e.originalPlacement)
                                return e;
                            var i = x(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed)
                                , n = e.placement.split("-")[0]
                                , s = S(n)
                                , a = e.placement.split("-")[1] || ""
                                , r = [];
                            switch (t.behavior) {
                                case ht.FLIP:
                                    r = [n, s];
                                    break;
                                case ht.CLOCKWISE:
                                    r = N(n);
                                    break;
                                case ht.COUNTERCLOCKWISE:
                                    r = N(n, !0);
                                    break;
                                default:
                                    r = t.behavior
                            }
                            return r.forEach(function (o, l) {
                                if (n !== o || r.length === l + 1)
                                    return e;
                                n = e.placement.split("-")[0],
                                    s = S(n);
                                var c, d = e.offsets.popper, u = e.offsets.reference, h = Math.floor, p = "left" === n && h(d.right) > h(u.left) || "right" === n && h(d.left) < h(u.right) || "top" === n && h(d.bottom) > h(u.top) || "bottom" === n && h(d.top) < h(u.bottom), f = h(d.left) < h(i.left), g = h(d.right) > h(i.right), m = h(d.top) < h(i.top), v = h(d.bottom) > h(i.bottom), y = "left" === n && f || "right" === n && g || "top" === n && m || "bottom" === n && v, b = -1 !== ["top", "bottom"].indexOf(n), x = !!t.flipVariations && (b && "start" === a && f || b && "end" === a && g || !b && "start" === a && m || !b && "end" === a && v);
                                (p || y || x) && (e.flipped = !0,
                                    (p || y) && (n = r[l + 1]),
                                    x && (a = "end" === (c = a) ? "start" : "start" === c ? "end" : c),
                                    e.placement = n + (a ? "-" + a : ""),
                                    e.offsets.popper = ct({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)),
                                    e = E(e.instance.modifiers, e, "flip"))
                            }),
                                e
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport"
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement
                                , i = t.split("-")[0]
                                , n = e.offsets
                                , s = n.popper
                                , a = n.reference
                                , r = -1 !== ["left", "right"].indexOf(i)
                                , o = -1 === ["top", "left"].indexOf(i);
                            return s[r ? "left" : "top"] = a[i] - (o ? s[r ? "width" : "height"] : 0),
                                e.placement = S(t),
                                e.offsets.popper = m(s),
                                e
                        }
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (!O(e.instance.modifiers, "hide", "preventOverflow"))
                                return e;
                            var t = e.offsets.reference
                                , i = T(e.instance.modifiers, function (e) {
                                    return "preventOverflow" === e.name
                                }).boundaries;
                            if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                                if (!0 === e.hide)
                                    return e;
                                e.hide = !0,
                                    e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide)
                                    return e;
                                e.hide = !1,
                                    e.attributes["x-out-of-boundaries"] = !1
                            }
                            return e
                        }
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.x
                                , n = t.y
                                , s = e.offsets.popper
                                , a = T(e.instance.modifiers, function (e) {
                                    return "applyStyle" === e.name
                                }).gpuAcceleration;
                            void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var r = void 0 !== a ? a : t.gpuAcceleration
                                , o = v(c(e.instance.popper))
                                , l = {
                                    position: s.position
                                }
                                , d = {
                                    left: Math.floor(s.left),
                                    top: Math.floor(s.top),
                                    bottom: Math.floor(s.bottom),
                                    right: Math.floor(s.right)
                                }
                                , u = "bottom" === i ? "top" : "bottom"
                                , h = "right" === n ? "left" : "right"
                                , p = $("transform")
                                , f = void 0
                                , g = void 0;
                            if (g = "bottom" === u ? -o.height + d.bottom : d.top,
                                f = "right" === h ? -o.width + d.right : d.left,
                                r && p)
                                l[p] = "translate3d(" + f + "px, " + g + "px, 0)",
                                    l[u] = 0,
                                    l[h] = 0,
                                    l.willChange = "transform";
                            else {
                                var m = "bottom" === u ? -1 : 1
                                    , y = "right" === h ? -1 : 1;
                                l[u] = g * m,
                                    l[h] = f * y,
                                    l.willChange = u + ", " + h
                            }
                            var b = {
                                "x-placement": e.placement
                            };
                            return e.attributes = ct({}, b, e.attributes),
                                e.styles = ct({}, l, e.styles),
                                e.arrowStyles = ct({}, e.offsets.arrow, e.arrowStyles),
                                e
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right"
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            var t, i;
                            return L(e.instance.popper, e.styles),
                                t = e.instance.popper,
                                i = e.attributes,
                                Object.keys(i).forEach(function (e) {
                                    !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e)
                                }),
                                e.arrowElement && Object.keys(e.arrowStyles).length && L(e.arrowElement, e.arrowStyles),
                                e
                        },
                        onLoad: function (e, t, i, n, s) {
                            var a = _(s, t, e, i.positionFixed)
                                , r = w(i.placement, a, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                            return t.setAttribute("x-placement", r),
                                L(t, {
                                    position: i.positionFixed ? "fixed" : "absolute"
                                }),
                                i
                        },
                        gpuAcceleration: void 0
                    }
                }
            }
            , ft = function () {
                function e(t, i) {
                    var n = this
                        , s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                    rt(this, e),
                        this.scheduleUpdate = function () {
                            return requestAnimationFrame(n.update)
                        }
                        ,
                        this.update = nt(this.update.bind(this)),
                        this.options = ct({}, e.Defaults, s),
                        this.state = {
                            isDestroyed: !1,
                            isCreated: !1,
                            scrollParents: []
                        },
                        this.reference = t && t.jquery ? t[0] : t,
                        this.popper = i && i.jquery ? i[0] : i,
                        this.options.modifiers = {},
                        Object.keys(ct({}, e.Defaults.modifiers, s.modifiers)).forEach(function (t) {
                            n.options.modifiers[t] = ct({}, e.Defaults.modifiers[t] || {}, s.modifiers ? s.modifiers[t] : {})
                        }),
                        this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                            return ct({
                                name: e
                            }, n.options.modifiers[e])
                        }).sort(function (e, t) {
                            return e.order - t.order
                        }),
                        this.modifiers.forEach(function (e) {
                            e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
                        }),
                        this.update();
                    var r = this.options.eventsEnabled;
                    r && this.enableEventListeners(),
                        this.state.eventsEnabled = r
                }
                return ot(e, [{
                    key: "update",
                    value: function () {
                        return function () {
                            if (!this.state.isDestroyed) {
                                var e = {
                                    instance: this,
                                    styles: {},
                                    arrowStyles: {},
                                    attributes: {},
                                    flipped: !1,
                                    offsets: {}
                                };
                                e.offsets.reference = _(this.state, this.popper, this.reference, this.options.positionFixed),
                                    e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                                    e.originalPlacement = e.placement,
                                    e.positionFixed = this.options.positionFixed,
                                    e.offsets.popper = C(this.popper, e.offsets.reference, e.placement),
                                    e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                                    e = E(this.modifiers, e),
                                    this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                                        this.options.onCreate(e))
                            }
                        }
                            .call(this)
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        return function () {
                            return this.state.isDestroyed = !0,
                                A(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                                    this.popper.style.position = "",
                                    this.popper.style.top = "",
                                    this.popper.style.left = "",
                                    this.popper.style.right = "",
                                    this.popper.style.bottom = "",
                                    this.popper.style.willChange = "",
                                    this.popper.style[$("transform")] = ""),
                                this.disableEventListeners(),
                                this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                this
                        }
                            .call(this)
                    }
                }, {
                    key: "enableEventListeners",
                    value: function () {
                        return function () {
                            this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
                        }
                            .call(this)
                    }
                }, {
                    key: "disableEventListeners",
                    value: function () {
                        return I.call(this)
                    }
                }]),
                    e
            }();
        ft.Utils = ("undefined" != typeof window ? window : global).PopperUtils,
            ft.placements = dt,
            ft.Defaults = pt;
        var gt, mt, vt, yt, bt, xt, wt, _t, kt, St, Ct, Tt, Et, At, $t, Dt, Mt, It, Pt, Lt, Ot, Nt, zt, Ht, jt, Ft, Rt, Wt, Bt, Yt, Vt, qt, Xt, Gt, Ut, Kt, Zt, Qt, Jt, ei, ti, ii, ni, si, ai, ri, oi, li, ci, di, ui, hi, pi, fi, gi, mi, vi, yi, bi, xi, wi, _i, ki, Si, Ci, Ti, Ei, Ai, $i, Di, Mi, Ii, Pi, Li, Oi, Ni, zi, Hi, ji, Fi, Ri, Wi, Bi, Yi, Vi, qi, Xi, Gi, Ui, Ki, Zi, Qi, Ji, en, tn, nn, sn, an, rn, on, ln, cn, dn, un, hn, pn, fn, gn, mn, vn, yn, bn, xn, wn = (mt = "dropdown",
            yt = "." + (vt = "bs.dropdown"),
            bt = ".data-api",
            xt = (gt = t).fn[mt],
            wt = new RegExp("38|40|27"),
            _t = {
                HIDE: "hide" + yt,
                HIDDEN: "hidden" + yt,
                SHOW: "show" + yt,
                SHOWN: "shown" + yt,
                CLICK: "click" + yt,
                CLICK_DATA_API: "click" + yt + bt,
                KEYDOWN_DATA_API: "keydown" + yt + bt,
                KEYUP_DATA_API: "keyup" + yt + bt
            },
            kt = "disabled",
            St = "show",
            Ct = "dropup",
            Tt = "dropright",
            Et = "dropleft",
            At = "dropdown-menu-right",
            $t = "position-static",
            Dt = '[data-toggle="dropdown"]',
            Mt = ".dropdown form",
            It = ".dropdown-menu",
            Pt = ".navbar-nav",
            Lt = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            Ot = "top-start",
            Nt = "top-end",
            zt = "bottom-start",
            Ht = "bottom-end",
            jt = "right-start",
            Ft = "left-start",
            Rt = {
                offset: 0,
                flip: !0,
                boundary: "scrollParent",
                reference: "toggle",
                display: "dynamic"
            },
            Wt = {
                offset: "(number|string|function)",
                flip: "boolean",
                boundary: "(string|element)",
                reference: "(string|element)",
                display: "string"
            },
            Bt = function () {
                function e(e, t) {
                    this._element = e,
                        this._popper = null,
                        this._config = this._getConfig(t),
                        this._menu = this._getMenuElement(),
                        this._inNavbar = this._detectNavbar(),
                        this._addEventListeners()
                }
                var t = e.prototype;
                return t.toggle = function () {
                    if (!this._element.disabled && !gt(this._element).hasClass(kt)) {
                        var t = e._getParentFromElement(this._element)
                            , i = gt(this._menu).hasClass(St);
                        if (e._clearMenus(),
                            !i) {
                            var n = {
                                relatedTarget: this._element
                            }
                                , s = gt.Event(_t.SHOW, n);
                            if (gt(t).trigger(s),
                                !s.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof ft)
                                        throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var a = this._element;
                                    "parent" === this._config.reference ? a = t : Ge.isElement(this._config.reference) && (a = this._config.reference,
                                        "undefined" != typeof this._config.reference.jquery && (a = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && gt(t).addClass($t),
                                        this._popper = new ft(a, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && 0 === gt(t).closest(Pt).length && gt(document.body).children().on("mouseover", null, gt.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    gt(this._menu).toggleClass(St),
                                    gt(t).toggleClass(St).trigger(gt.Event(_t.SHOWN, n))
                            }
                        }
                    }
                }
                    ,
                    t.dispose = function () {
                        gt.removeData(this._element, vt),
                            gt(this._element).off(yt),
                            this._element = null,
                            (this._menu = null) !== this._popper && (this._popper.destroy(),
                                this._popper = null)
                    }
                    ,
                    t.update = function () {
                        this._inNavbar = this._detectNavbar(),
                            null !== this._popper && this._popper.scheduleUpdate()
                    }
                    ,
                    t._addEventListeners = function () {
                        var e = this;
                        gt(this._element).on(_t.CLICK, function (t) {
                            t.preventDefault(),
                                t.stopPropagation(),
                                e.toggle()
                        })
                    }
                    ,
                    t._getConfig = function (e) {
                        return e = s({}, this.constructor.Default, gt(this._element).data(), e),
                            Ge.typeCheckConfig(mt, e, this.constructor.DefaultType),
                            e
                    }
                    ,
                    t._getMenuElement = function () {
                        if (!this._menu) {
                            var t = e._getParentFromElement(this._element);
                            this._menu = gt(t).find(It)[0]
                        }
                        return this._menu
                    }
                    ,
                    t._getPlacement = function () {
                        var e = gt(this._element).parent()
                            , t = zt;
                        return e.hasClass(Ct) ? (t = Ot,
                            gt(this._menu).hasClass(At) && (t = Nt)) : e.hasClass(Tt) ? t = jt : e.hasClass(Et) ? t = Ft : gt(this._menu).hasClass(At) && (t = Ht),
                            t
                    }
                    ,
                    t._detectNavbar = function () {
                        return 0 < gt(this._element).closest(".navbar").length
                    }
                    ,
                    t._getPopperConfig = function () {
                        var e = this
                            , t = {};
                        "function" == typeof this._config.offset ? t.fn = function (t) {
                            return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}),
                                t
                        }
                            : t.offset = this._config.offset;
                        var i = {
                            placement: this._getPlacement(),
                            modifiers: {
                                offset: t,
                                flip: {
                                    enabled: this._config.flip
                                },
                                preventOverflow: {
                                    boundariesElement: this._config.boundary
                                }
                            }
                        };
                        return "static" === this._config.display && (i.modifiers.applyStyle = {
                            enabled: !1
                        }),
                            i
                    }
                    ,
                    e._jQueryInterface = function (t) {
                        return this.each(function () {
                            var i = gt(this).data(vt);
                            if (i || (i = new e(this, "object" == typeof t ? t : null),
                                gt(this).data(vt, i)),
                                "string" == typeof t) {
                                if ("undefined" == typeof i[t])
                                    throw new TypeError('No method named "' + t + '"');
                                i[t]()
                            }
                        })
                    }
                    ,
                    e._clearMenus = function (t) {
                        if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                            for (var i = gt.makeArray(gt(Dt)), n = 0; n < i.length; n++) {
                                var s = e._getParentFromElement(i[n])
                                    , a = gt(i[n]).data(vt)
                                    , r = {
                                        relatedTarget: i[n]
                                    };
                                if (a) {
                                    var o = a._menu;
                                    if (gt(s).hasClass(St) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && gt.contains(s, t.target))) {
                                        var l = gt.Event(_t.HIDE, r);
                                        gt(s).trigger(l),
                                            l.isDefaultPrevented() || ("ontouchstart" in document.documentElement && gt(document.body).children().off("mouseover", null, gt.noop),
                                                i[n].setAttribute("aria-expanded", "false"),
                                                gt(o).removeClass(St),
                                                gt(s).removeClass(St).trigger(gt.Event(_t.HIDDEN, r)))
                                    }
                                }
                            }
                    }
                    ,
                    e._getParentFromElement = function (e) {
                        var t, i = Ge.getSelectorFromElement(e);
                        return i && (t = gt(i)[0]),
                            t || e.parentNode
                    }
                    ,
                    e._dataApiKeydownHandler = function (t) {
                        if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || gt(t.target).closest(It).length)) : wt.test(t.which)) && (t.preventDefault(),
                            t.stopPropagation(),
                            !this.disabled && !gt(this).hasClass(kt))) {
                            var i = e._getParentFromElement(this)
                                , n = gt(i).hasClass(St);
                            if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                                var s = gt(i).find(Lt).get();
                                if (0 !== s.length) {
                                    var a = s.indexOf(t.target);
                                    38 === t.which && a > 0 && a--,
                                        40 === t.which && a < s.length - 1 && a++,
                                        0 > a && (a = 0),
                                        s[a].focus()
                                }
                            } else {
                                if (27 === t.which) {
                                    var r = gt(i).find(Dt)[0];
                                    gt(r).trigger("focus")
                                }
                                gt(this).trigger("click")
                            }
                        }
                    }
                    ,
                    n(e, null, [{
                        key: "VERSION",
                        get: function () {
                            return "4.1.0"
                        }
                    }, {
                        key: "Default",
                        get: function () {
                            return Rt
                        }
                    }, {
                        key: "DefaultType",
                        get: function () {
                            return Wt
                        }
                    }]),
                    e
            }(),
            gt(document).on(_t.KEYDOWN_DATA_API, Dt, Bt._dataApiKeydownHandler).on(_t.KEYDOWN_DATA_API, It, Bt._dataApiKeydownHandler).on(_t.CLICK_DATA_API + " " + _t.KEYUP_DATA_API, Bt._clearMenus).on(_t.CLICK_DATA_API, Dt, function (e) {
                e.preventDefault(),
                    e.stopPropagation(),
                    Bt._jQueryInterface.call(gt(this), "toggle")
            }).on(_t.CLICK_DATA_API, Mt, function (e) {
                e.stopPropagation()
            }),
            gt.fn[mt] = Bt._jQueryInterface,
            gt.fn[mt].Constructor = Bt,
            gt.fn[mt].noConflict = function () {
                return gt.fn[mt] = xt,
                    Bt._jQueryInterface
            }
            ,
            Bt), _n = (Vt = "modal",
                Xt = "." + (qt = "bs.modal"),
                Gt = (Yt = t).fn[Vt],
                Ut = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                Kt = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                Zt = {
                    HIDE: "hide" + Xt,
                    HIDDEN: "hidden" + Xt,
                    SHOW: "show" + Xt,
                    SHOWN: "shown" + Xt,
                    FOCUSIN: "focusin" + Xt,
                    RESIZE: "resize" + Xt,
                    CLICK_DISMISS: "click.dismiss" + Xt,
                    KEYDOWN_DISMISS: "keydown.dismiss" + Xt,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + Xt,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + Xt,
                    CLICK_DATA_API: "click" + Xt + ".data-api"
                },
                Qt = "modal-scrollbar-measure",
                Jt = "modal-backdrop",
                ei = "modal-open",
                ti = "fade",
                ii = "show",
                ni = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                    STICKY_CONTENT: ".sticky-top",
                    NAVBAR_TOGGLER: ".navbar-toggler"
                },
                si = function () {
                    function e(e, t) {
                        this._config = this._getConfig(t),
                            this._element = e,
                            this._dialog = Yt(e).find(ni.DIALOG)[0],
                            this._backdrop = null,
                            this._isShown = !1,
                            this._isBodyOverflowing = !1,
                            this._ignoreBackdropClick = !1,
                            this._scrollbarWidth = 0
                    }
                    var t = e.prototype;
                    return t.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e)
                    }
                        ,
                        t.show = function (e) {
                            var t = this;
                            if (!this._isTransitioning && !this._isShown) {
                                Yt(this._element).hasClass(ti) && (this._isTransitioning = !0);
                                var i = Yt.Event(Zt.SHOW, {
                                    relatedTarget: e
                                });
                                Yt(this._element).trigger(i),
                                    this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                                        this._checkScrollbar(),
                                        this._setScrollbar(),
                                        this._adjustDialog(),
                                        Yt(document.body).addClass(ei),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        Yt(this._element).on(Zt.CLICK_DISMISS, ni.DATA_DISMISS, function (e) {
                                            return t.hide(e)
                                        }),
                                        Yt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
                                            Yt(t._element).one(Zt.MOUSEUP_DISMISS, function (e) {
                                                Yt(e.target).is(t._element) && (t._ignoreBackdropClick = !0)
                                            })
                                        }),
                                        this._showBackdrop(function () {
                                            return t._showElement(e)
                                        }))
                            }
                        }
                        ,
                        t.hide = function (e) {
                            var t = this;
                            if (e && e.preventDefault(),
                                !this._isTransitioning && this._isShown) {
                                var i = Yt.Event(Zt.HIDE);
                                if (Yt(this._element).trigger(i),
                                    this._isShown && !i.isDefaultPrevented()) {
                                    this._isShown = !1;
                                    var n = Yt(this._element).hasClass(ti);
                                    if (n && (this._isTransitioning = !0),
                                        this._setEscapeEvent(),
                                        this._setResizeEvent(),
                                        Yt(document).off(Zt.FOCUSIN),
                                        Yt(this._element).removeClass(ii),
                                        Yt(this._element).off(Zt.CLICK_DISMISS),
                                        Yt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),
                                        n) {
                                        var s = Ge.getTransitionDurationFromElement(this._element);
                                        Yt(this._element).one(Ge.TRANSITION_END, function (e) {
                                            return t._hideModal(e)
                                        }).emulateTransitionEnd(s)
                                    } else
                                        this._hideModal()
                                }
                            }
                        }
                        ,
                        t.dispose = function () {
                            Yt.removeData(this._element, qt),
                                Yt(window, document, this._element, this._backdrop).off(Xt),
                                this._config = null,
                                this._element = null,
                                this._dialog = null,
                                this._backdrop = null,
                                this._isShown = null,
                                this._isBodyOverflowing = null,
                                this._ignoreBackdropClick = null,
                                this._scrollbarWidth = null
                        }
                        ,
                        t.handleUpdate = function () {
                            this._adjustDialog()
                        }
                        ,
                        t._getConfig = function (e) {
                            return e = s({}, Ut, e),
                                Ge.typeCheckConfig(Vt, e, Kt),
                                e
                        }
                        ,
                        t._showElement = function (e) {
                            var t = this
                                , i = Yt(this._element).hasClass(ti);
                            this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                                this._element.style.display = "block",
                                this._element.removeAttribute("aria-hidden"),
                                this._element.scrollTop = 0,
                                i && Ge.reflow(this._element),
                                Yt(this._element).addClass(ii),
                                this._config.focus && this._enforceFocus();
                            var n = Yt.Event(Zt.SHOWN, {
                                relatedTarget: e
                            })
                                , s = function () {
                                    t._config.focus && t._element.focus(),
                                        t._isTransitioning = !1,
                                        Yt(t._element).trigger(n)
                                };
                            if (i) {
                                var a = Ge.getTransitionDurationFromElement(this._element);
                                Yt(this._dialog).one(Ge.TRANSITION_END, s).emulateTransitionEnd(a)
                            } else
                                s()
                        }
                        ,
                        t._enforceFocus = function () {
                            var e = this;
                            Yt(document).off(Zt.FOCUSIN).on(Zt.FOCUSIN, function (t) {
                                document !== t.target && e._element !== t.target && 0 === Yt(e._element).has(t.target).length && e._element.focus()
                            })
                        }
                        ,
                        t._setEscapeEvent = function () {
                            var e = this;
                            this._isShown && this._config.keyboard ? Yt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
                                27 === t.which && (t.preventDefault(),
                                    e.hide())
                            }) : this._isShown || Yt(this._element).off(Zt.KEYDOWN_DISMISS)
                        }
                        ,
                        t._setResizeEvent = function () {
                            var e = this;
                            this._isShown ? Yt(window).on(Zt.RESIZE, function (t) {
                                return e.handleUpdate(t)
                            }) : Yt(window).off(Zt.RESIZE)
                        }
                        ,
                        t._hideModal = function () {
                            var e = this;
                            this._element.style.display = "none",
                                this._element.setAttribute("aria-hidden", !0),
                                this._isTransitioning = !1,
                                this._showBackdrop(function () {
                                    Yt(document.body).removeClass(ei),
                                        e._resetAdjustments(),
                                        e._resetScrollbar(),
                                        Yt(e._element).trigger(Zt.HIDDEN)
                                })
                        }
                        ,
                        t._removeBackdrop = function () {
                            this._backdrop && (Yt(this._backdrop).remove(),
                                this._backdrop = null)
                        }
                        ,
                        t._showBackdrop = function (e) {
                            var t = this
                                , i = Yt(this._element).hasClass(ti) ? ti : "";
                            if (this._isShown && this._config.backdrop) {
                                if (this._backdrop = document.createElement("div"),
                                    this._backdrop.className = Jt,
                                    i && Yt(this._backdrop).addClass(i),
                                    Yt(this._backdrop).appendTo(document.body),
                                    Yt(this._element).on(Zt.CLICK_DISMISS, function (e) {
                                        t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                                    }),
                                    i && Ge.reflow(this._backdrop),
                                    Yt(this._backdrop).addClass(ii),
                                    !e)
                                    return;
                                if (!i)
                                    return void e();
                                var n = Ge.getTransitionDurationFromElement(this._backdrop);
                                Yt(this._backdrop).one(Ge.TRANSITION_END, e).emulateTransitionEnd(n)
                            } else if (!this._isShown && this._backdrop) {
                                Yt(this._backdrop).removeClass(ii);
                                var s = function () {
                                    t._removeBackdrop(),
                                        e && e()
                                };
                                if (Yt(this._element).hasClass(ti)) {
                                    var a = Ge.getTransitionDurationFromElement(this._backdrop);
                                    Yt(this._backdrop).one(Ge.TRANSITION_END, s).emulateTransitionEnd(a)
                                } else
                                    s()
                            } else
                                e && e()
                        }
                        ,
                        t._adjustDialog = function () {
                            var e = this._element.scrollHeight > document.documentElement.clientHeight;
                            !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                                this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                        }
                        ,
                        t._resetAdjustments = function () {
                            this._element.style.paddingLeft = "",
                                this._element.style.paddingRight = ""
                        }
                        ,
                        t._checkScrollbar = function () {
                            var e = document.body.getBoundingClientRect();
                            this._isBodyOverflowing = e.left + e.right < window.innerWidth,
                                this._scrollbarWidth = this._getScrollbarWidth()
                        }
                        ,
                        t._setScrollbar = function () {
                            var e = this;
                            if (this._isBodyOverflowing) {
                                Yt(ni.FIXED_CONTENT).each(function (t, i) {
                                    var n = Yt(i)[0].style.paddingRight
                                        , s = Yt(i).css("padding-right");
                                    Yt(i).data("padding-right", n).css("padding-right", parseFloat(s) + e._scrollbarWidth + "px")
                                }),
                                    Yt(ni.STICKY_CONTENT).each(function (t, i) {
                                        var n = Yt(i)[0].style.marginRight
                                            , s = Yt(i).css("margin-right");
                                        Yt(i).data("margin-right", n).css("margin-right", parseFloat(s) - e._scrollbarWidth + "px")
                                    }),
                                    Yt(ni.NAVBAR_TOGGLER).each(function (t, i) {
                                        var n = Yt(i)[0].style.marginRight
                                            , s = Yt(i).css("margin-right");
                                        Yt(i).data("margin-right", n).css("margin-right", parseFloat(s) + e._scrollbarWidth + "px")
                                    });
                                var t = document.body.style.paddingRight
                                    , i = Yt(document.body).css("padding-right");
                                Yt(document.body).data("padding-right", t).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                            }
                        }
                        ,
                        t._resetScrollbar = function () {
                            Yt(ni.FIXED_CONTENT).each(function (e, t) {
                                var i = Yt(t).data("padding-right");
                                "undefined" != typeof i && Yt(t).css("padding-right", i).removeData("padding-right")
                            }),
                                Yt(ni.STICKY_CONTENT + ", " + ni.NAVBAR_TOGGLER).each(function (e, t) {
                                    var i = Yt(t).data("margin-right");
                                    "undefined" != typeof i && Yt(t).css("margin-right", i).removeData("margin-right")
                                });
                            var e = Yt(document.body).data("padding-right");
                            "undefined" != typeof e && Yt(document.body).css("padding-right", e).removeData("padding-right")
                        }
                        ,
                        t._getScrollbarWidth = function () {
                            var e = document.createElement("div");
                            e.className = Qt,
                                document.body.appendChild(e);
                            var t = e.getBoundingClientRect().width - e.clientWidth;
                            return document.body.removeChild(e),
                                t
                        }
                        ,
                        e._jQueryInterface = function (t, i) {
                            return this.each(function () {
                                var n = Yt(this).data(qt)
                                    , a = s({}, e.Default, Yt(this).data(), "object" == typeof t && t);
                                if (n || (n = new e(this, a),
                                    Yt(this).data(qt, n)),
                                    "string" == typeof t) {
                                    if ("undefined" == typeof n[t])
                                        throw new TypeError('No method named "' + t + '"');
                                    n[t](i)
                                } else
                                    a.show && n.show(i)
                            })
                        }
                        ,
                        n(e, null, [{
                            key: "VERSION",
                            get: function () {
                                return "4.1.0"
                            }
                        }, {
                            key: "Default",
                            get: function () {
                                return Ut
                            }
                        }]),
                        e
                }(),
                Yt(document).on(Zt.CLICK_DATA_API, ni.DATA_TOGGLE, function (e) {
                    var t, i = this, n = Ge.getSelectorFromElement(this);
                    n && (t = Yt(n)[0]);
                    var a = Yt(t).data(qt) ? "toggle" : s({}, Yt(t).data(), Yt(this).data());
                    "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
                    var r = Yt(t).one(Zt.SHOW, function (e) {
                        e.isDefaultPrevented() || r.one(Zt.HIDDEN, function () {
                            Yt(i).is(":visible") && i.focus()
                        })
                    });
                    si._jQueryInterface.call(Yt(t), a, this)
                }),
                Yt.fn[Vt] = si._jQueryInterface,
                Yt.fn[Vt].Constructor = si,
                Yt.fn[Vt].noConflict = function () {
                    return Yt.fn[Vt] = Gt,
                        si._jQueryInterface
                }
                ,
                si), kn = (ri = "tooltip",
                    li = "." + (oi = "bs.tooltip"),
                    ci = (ai = t).fn[ri],
                    di = "bs-tooltip",
                    ui = new RegExp("(^|\\s)" + di + "\\S+", "g"),
                    fi = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !(pi = {
                            AUTO: "auto",
                            TOP: "top",
                            RIGHT: "right",
                            BOTTOM: "bottom",
                            LEFT: "left"
                        }),
                        selector: !(hi = {
                            animation: "boolean",
                            template: "string",
                            title: "(string|element|function)",
                            trigger: "string",
                            delay: "(number|object)",
                            html: "boolean",
                            selector: "(string|boolean)",
                            placement: "(string|function)",
                            offset: "(number|string)",
                            container: "(string|element|boolean)",
                            fallbackPlacement: "(string|array)",
                            boundary: "(string|element)"
                        }),
                        placement: "top",
                        offset: 0,
                        container: !1,
                        fallbackPlacement: "flip",
                        boundary: "scrollParent"
                    },
                    mi = "out",
                    vi = {
                        HIDE: "hide" + li,
                        HIDDEN: "hidden" + li,
                        SHOW: (gi = "show") + li,
                        SHOWN: "shown" + li,
                        INSERTED: "inserted" + li,
                        CLICK: "click" + li,
                        FOCUSIN: "focusin" + li,
                        FOCUSOUT: "focusout" + li,
                        MOUSEENTER: "mouseenter" + li,
                        MOUSELEAVE: "mouseleave" + li
                    },
                    yi = "fade",
                    bi = "show",
                    xi = ".tooltip-inner",
                    wi = ".arrow",
                    _i = "hover",
                    ki = "focus",
                    Si = "click",
                    Ci = "manual",
                    Ti = function () {
                        function e(e, t) {
                            if ("undefined" == typeof ft)
                                throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                            this._isEnabled = !0,
                                this._timeout = 0,
                                this._hoverState = "",
                                this._activeTrigger = {},
                                this._popper = null,
                                this.element = e,
                                this.config = this._getConfig(t),
                                this.tip = null,
                                this._setListeners()
                        }
                        var t = e.prototype;
                        return t.enable = function () {
                            this._isEnabled = !0
                        }
                            ,
                            t.disable = function () {
                                this._isEnabled = !1
                            }
                            ,
                            t.toggleEnabled = function () {
                                this._isEnabled = !this._isEnabled
                            }
                            ,
                            t.toggle = function (e) {
                                if (this._isEnabled)
                                    if (e) {
                                        var t = this.constructor.DATA_KEY
                                            , i = ai(e.currentTarget).data(t);
                                        i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()),
                                            ai(e.currentTarget).data(t, i)),
                                            i._activeTrigger.click = !i._activeTrigger.click,
                                            i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                                    } else {
                                        if (ai(this.getTipElement()).hasClass(bi))
                                            return void this._leave(null, this);
                                        this._enter(null, this)
                                    }
                            }
                            ,
                            t.dispose = function () {
                                clearTimeout(this._timeout),
                                    ai.removeData(this.element, this.constructor.DATA_KEY),
                                    ai(this.element).off(this.constructor.EVENT_KEY),
                                    ai(this.element).closest(".modal").off("hide.bs.modal"),
                                    this.tip && ai(this.tip).remove(),
                                    this._isEnabled = null,
                                    this._timeout = null,
                                    this._hoverState = null,
                                    (this._activeTrigger = null) !== this._popper && this._popper.destroy(),
                                    this._popper = null,
                                    this.element = null,
                                    this.config = null,
                                    this.tip = null
                            }
                            ,
                            t.show = function () {
                                var e = this;
                                if ("none" === ai(this.element).css("display"))
                                    throw new Error("Please use show on visible elements");
                                var t = ai.Event(this.constructor.Event.SHOW);
                                if (this.isWithContent() && this._isEnabled) {
                                    ai(this.element).trigger(t);
                                    var i = ai.contains(this.element.ownerDocument.documentElement, this.element);
                                    if (t.isDefaultPrevented() || !i)
                                        return;
                                    var n = this.getTipElement()
                                        , s = Ge.getUID(this.constructor.NAME);
                                    n.setAttribute("id", s),
                                        this.element.setAttribute("aria-describedby", s),
                                        this.setContent(),
                                        this.config.animation && ai(n).addClass(yi);
                                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement
                                        , r = this._getAttachment(a);
                                    this.addAttachmentClass(r);
                                    var o = !1 === this.config.container ? document.body : ai(this.config.container);
                                    ai(n).data(this.constructor.DATA_KEY, this),
                                        ai.contains(this.element.ownerDocument.documentElement, this.tip) || ai(n).appendTo(o),
                                        ai(this.element).trigger(this.constructor.Event.INSERTED),
                                        this._popper = new ft(this.element, n, {
                                            placement: r,
                                            modifiers: {
                                                offset: {
                                                    offset: this.config.offset
                                                },
                                                flip: {
                                                    behavior: this.config.fallbackPlacement
                                                },
                                                arrow: {
                                                    element: wi
                                                },
                                                preventOverflow: {
                                                    boundariesElement: this.config.boundary
                                                }
                                            },
                                            onCreate: function (t) {
                                                t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                                            },
                                            onUpdate: function (t) {
                                                e._handlePopperPlacementChange(t)
                                            }
                                        }),
                                        ai(n).addClass(bi),
                                        "ontouchstart" in document.documentElement && ai(document.body).children().on("mouseover", null, ai.noop);
                                    var l = function () {
                                        e.config.animation && e._fixTransition();
                                        var t = e._hoverState;
                                        e._hoverState = null,
                                            ai(e.element).trigger(e.constructor.Event.SHOWN),
                                            t === mi && e._leave(null, e)
                                    };
                                    if (ai(this.tip).hasClass(yi)) {
                                        var c = Ge.getTransitionDurationFromElement(this.tip);
                                        ai(this.tip).one(Ge.TRANSITION_END, l).emulateTransitionEnd(c)
                                    } else
                                        l()
                                }
                            }
                            ,
                            t.hide = function (e) {
                                var t = this
                                    , i = this.getTipElement()
                                    , n = ai.Event(this.constructor.Event.HIDE)
                                    , s = function () {
                                        t._hoverState !== gi && i.parentNode && i.parentNode.removeChild(i),
                                            t._cleanTipClass(),
                                            t.element.removeAttribute("aria-describedby"),
                                            ai(t.element).trigger(t.constructor.Event.HIDDEN),
                                            null !== t._popper && t._popper.destroy(),
                                            e && e()
                                    };
                                if (ai(this.element).trigger(n),
                                    !n.isDefaultPrevented()) {
                                    if (ai(i).removeClass(bi),
                                        "ontouchstart" in document.documentElement && ai(document.body).children().off("mouseover", null, ai.noop),
                                        this._activeTrigger[Si] = !1,
                                        this._activeTrigger[ki] = !1,
                                        this._activeTrigger[_i] = !1,
                                        ai(this.tip).hasClass(yi)) {
                                        var a = Ge.getTransitionDurationFromElement(i);
                                        ai(i).one(Ge.TRANSITION_END, s).emulateTransitionEnd(a)
                                    } else
                                        s();
                                    this._hoverState = ""
                                }
                            }
                            ,
                            t.update = function () {
                                null !== this._popper && this._popper.scheduleUpdate()
                            }
                            ,
                            t.isWithContent = function () {
                                return Boolean(this.getTitle())
                            }
                            ,
                            t.addAttachmentClass = function (e) {
                                ai(this.getTipElement()).addClass(di + "-" + e)
                            }
                            ,
                            t.getTipElement = function () {
                                return this.tip = this.tip || ai(this.config.template)[0],
                                    this.tip
                            }
                            ,
                            t.setContent = function () {
                                var e = ai(this.getTipElement());
                                this.setElementContent(e.find(xi), this.getTitle()),
                                    e.removeClass(yi + " " + bi)
                            }
                            ,
                            t.setElementContent = function (e, t) {
                                var i = this.config.html;
                                "object" == typeof t && (t.nodeType || t.jquery) ? i ? ai(t).parent().is(e) || e.empty().append(t) : e.text(ai(t).text()) : e[i ? "html" : "text"](t)
                            }
                            ,
                            t.getTitle = function () {
                                var e = this.element.getAttribute("data-original-title");
                                return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                                    e
                            }
                            ,
                            t._getAttachment = function (e) {
                                return pi[e.toUpperCase()]
                            }
                            ,
                            t._setListeners = function () {
                                var e = this;
                                this.config.trigger.split(" ").forEach(function (t) {
                                    if ("click" === t)
                                        ai(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                                            return e.toggle(t)
                                        });
                                    else if (t !== Ci) {
                                        var i = t === _i ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                                            , n = t === _i ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                                        ai(e.element).on(i, e.config.selector, function (t) {
                                            return e._enter(t)
                                        }).on(n, e.config.selector, function (t) {
                                            return e._leave(t)
                                        })
                                    }
                                    ai(e.element).closest(".modal").on("hide.bs.modal", function () {
                                        return e.hide()
                                    })
                                }),
                                    this.config.selector ? this.config = s({}, this.config, {
                                        trigger: "manual",
                                        selector: ""
                                    }) : this._fixTitle()
                            }
                            ,
                            t._fixTitle = function () {
                                var e = typeof this.element.getAttribute("data-original-title");
                                (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                                    this.element.setAttribute("title", ""))
                            }
                            ,
                            t._enter = function (e, t) {
                                var i = this.constructor.DATA_KEY;
                                (t = t || ai(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()),
                                    ai(e.currentTarget).data(i, t)),
                                    e && (t._activeTrigger["focusin" === e.type ? ki : _i] = !0),
                                    ai(t.getTipElement()).hasClass(bi) || t._hoverState === gi ? t._hoverState = gi : (clearTimeout(t._timeout),
                                        t._hoverState = gi,
                                        t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function () {
                                            t._hoverState === gi && t.show()
                                        }, t.config.delay.show) : t.show())
                            }
                            ,
                            t._leave = function (e, t) {
                                var i = this.constructor.DATA_KEY;
                                (t = t || ai(e.currentTarget).data(i)) || (t = new this.constructor(e.currentTarget, this._getDelegateConfig()),
                                    ai(e.currentTarget).data(i, t)),
                                    e && (t._activeTrigger["focusout" === e.type ? ki : _i] = !1),
                                    t._isWithActiveTrigger() || (clearTimeout(t._timeout),
                                        t._hoverState = mi,
                                        t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function () {
                                            t._hoverState === mi && t.hide()
                                        }, t.config.delay.hide) : t.hide())
                            }
                            ,
                            t._isWithActiveTrigger = function () {
                                for (var e in this._activeTrigger)
                                    if (this._activeTrigger[e])
                                        return !0;
                                return !1
                            }
                            ,
                            t._getConfig = function (e) {
                                return "number" == typeof (e = s({}, this.constructor.Default, ai(this.element).data(), e)).delay && (e.delay = {
                                    show: e.delay,
                                    hide: e.delay
                                }),
                                    "number" == typeof e.title && (e.title = e.title.toString()),
                                    "number" == typeof e.content && (e.content = e.content.toString()),
                                    Ge.typeCheckConfig(ri, e, this.constructor.DefaultType),
                                    e
                            }
                            ,
                            t._getDelegateConfig = function () {
                                var e = {};
                                if (this.config)
                                    for (var t in this.config)
                                        this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                                return e
                            }
                            ,
                            t._cleanTipClass = function () {
                                var e = ai(this.getTipElement())
                                    , t = e.attr("class").match(ui);
                                null !== t && 0 < t.length && e.removeClass(t.join(""))
                            }
                            ,
                            t._handlePopperPlacementChange = function (e) {
                                this._cleanTipClass(),
                                    this.addAttachmentClass(this._getAttachment(e.placement))
                            }
                            ,
                            t._fixTransition = function () {
                                var e = this.getTipElement()
                                    , t = this.config.animation;
                                null === e.getAttribute("x-placement") && (ai(e).removeClass(yi),
                                    this.config.animation = !1,
                                    this.hide(),
                                    this.show(),
                                    this.config.animation = t)
                            }
                            ,
                            e._jQueryInterface = function (t) {
                                return this.each(function () {
                                    var i = ai(this).data(oi)
                                        , n = "object" == typeof t && t;
                                    if ((i || !/dispose|hide/.test(t)) && (i || (i = new e(this, n),
                                        ai(this).data(oi, i)),
                                        "string" == typeof t)) {
                                        if ("undefined" == typeof i[t])
                                            throw new TypeError('No method named "' + t + '"');
                                        i[t]()
                                    }
                                })
                            }
                            ,
                            n(e, null, [{
                                key: "VERSION",
                                get: function () {
                                    return "4.1.0"
                                }
                            }, {
                                key: "Default",
                                get: function () {
                                    return fi
                                }
                            }, {
                                key: "NAME",
                                get: function () {
                                    return ri
                                }
                            }, {
                                key: "DATA_KEY",
                                get: function () {
                                    return oi
                                }
                            }, {
                                key: "Event",
                                get: function () {
                                    return vi
                                }
                            }, {
                                key: "EVENT_KEY",
                                get: function () {
                                    return li
                                }
                            }, {
                                key: "DefaultType",
                                get: function () {
                                    return hi
                                }
                            }]),
                            e
                    }(),
                    ai.fn[ri] = Ti._jQueryInterface,
                    ai.fn[ri].Constructor = Ti,
                    ai.fn[ri].noConflict = function () {
                        return ai.fn[ri] = ci,
                            Ti._jQueryInterface
                    }
                    ,
                    Ti), Sn = (Ai = "popover",
                        Di = "." + ($i = "bs.popover"),
                        Mi = (Ei = t).fn[Ai],
                        Ii = "bs-popover",
                        Pi = new RegExp("(^|\\s)" + Ii + "\\S+", "g"),
                        Li = s({}, kn.Default, {
                            placement: "right",
                            trigger: "click",
                            content: "",
                            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                        }),
                        Oi = s({}, kn.DefaultType, {
                            content: "(string|element|function)"
                        }),
                        Ni = "fade",
                        Hi = ".popover-header",
                        ji = ".popover-body",
                        Fi = {
                            HIDE: "hide" + Di,
                            HIDDEN: "hidden" + Di,
                            SHOW: (zi = "show") + Di,
                            SHOWN: "shown" + Di,
                            INSERTED: "inserted" + Di,
                            CLICK: "click" + Di,
                            FOCUSIN: "focusin" + Di,
                            FOCUSOUT: "focusout" + Di,
                            MOUSEENTER: "mouseenter" + Di,
                            MOUSELEAVE: "mouseleave" + Di
                        },
                        Ri = function (e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }
                            var i, s;
                            s = e,
                                (i = t).prototype = Object.create(s.prototype),
                                (i.prototype.constructor = i).__proto__ = s;
                            var a = t.prototype;
                            return a.isWithContent = function () {
                                return this.getTitle() || this._getContent()
                            }
                                ,
                                a.addAttachmentClass = function (e) {
                                    Ei(this.getTipElement()).addClass(Ii + "-" + e)
                                }
                                ,
                                a.getTipElement = function () {
                                    return this.tip = this.tip || Ei(this.config.template)[0],
                                        this.tip
                                }
                                ,
                                a.setContent = function () {
                                    var e = Ei(this.getTipElement());
                                    this.setElementContent(e.find(Hi), this.getTitle());
                                    var t = this._getContent();
                                    "function" == typeof t && (t = t.call(this.element)),
                                        this.setElementContent(e.find(ji), t),
                                        e.removeClass(Ni + " " + zi)
                                }
                                ,
                                a._getContent = function () {
                                    return this.element.getAttribute("data-content") || this.config.content
                                }
                                ,
                                a._cleanTipClass = function () {
                                    var e = Ei(this.getTipElement())
                                        , t = e.attr("class").match(Pi);
                                    null !== t && 0 < t.length && e.removeClass(t.join(""))
                                }
                                ,
                                t._jQueryInterface = function (e) {
                                    return this.each(function () {
                                        var i = Ei(this).data($i)
                                            , n = "object" == typeof e ? e : null;
                                        if ((i || !/destroy|hide/.test(e)) && (i || (i = new t(this, n),
                                            Ei(this).data($i, i)),
                                            "string" == typeof e)) {
                                            if ("undefined" == typeof i[e])
                                                throw new TypeError('No method named "' + e + '"');
                                            i[e]()
                                        }
                                    })
                                }
                                ,
                                n(t, null, [{
                                    key: "VERSION",
                                    get: function () {
                                        return "4.1.0"
                                    }
                                }, {
                                    key: "Default",
                                    get: function () {
                                        return Li
                                    }
                                }, {
                                    key: "NAME",
                                    get: function () {
                                        return Ai
                                    }
                                }, {
                                    key: "DATA_KEY",
                                    get: function () {
                                        return $i
                                    }
                                }, {
                                    key: "Event",
                                    get: function () {
                                        return Fi
                                    }
                                }, {
                                    key: "EVENT_KEY",
                                    get: function () {
                                        return Di
                                    }
                                }, {
                                    key: "DefaultType",
                                    get: function () {
                                        return Oi
                                    }
                                }]),
                                t
                        }(kn),
                        Ei.fn[Ai] = Ri._jQueryInterface,
                        Ei.fn[Ai].Constructor = Ri,
                        Ei.fn[Ai].noConflict = function () {
                            return Ei.fn[Ai] = Mi,
                                Ri._jQueryInterface
                        }
                        ,
                        Ri), Cn = (Bi = "scrollspy",
                            Vi = "." + (Yi = "bs.scrollspy"),
                            qi = (Wi = t).fn[Bi],
                            Xi = {
                                offset: 10,
                                method: "auto",
                                target: ""
                            },
                            Gi = {
                                offset: "number",
                                method: "string",
                                target: "(string|element)"
                            },
                            Ui = {
                                ACTIVATE: "activate" + Vi,
                                SCROLL: "scroll" + Vi,
                                LOAD_DATA_API: "load" + Vi + ".data-api"
                            },
                            Ki = "dropdown-item",
                            Zi = "active",
                            Qi = {
                                DATA_SPY: '[data-spy="scroll"]',
                                ACTIVE: ".active",
                                NAV_LIST_GROUP: ".nav, .list-group",
                                NAV_LINKS: ".nav-link",
                                NAV_ITEMS: ".nav-item",
                                LIST_ITEMS: ".list-group-item",
                                DROPDOWN: ".dropdown",
                                DROPDOWN_ITEMS: ".dropdown-item",
                                DROPDOWN_TOGGLE: ".dropdown-toggle"
                            },
                            Ji = "offset",
                            en = "position",
                            tn = function () {
                                function e(e, t) {
                                    var i = this;
                                    this._element = e,
                                        this._scrollElement = "BODY" === e.tagName ? window : e,
                                        this._config = this._getConfig(t),
                                        this._selector = this._config.target + " " + Qi.NAV_LINKS + "," + this._config.target + " " + Qi.LIST_ITEMS + "," + this._config.target + " " + Qi.DROPDOWN_ITEMS,
                                        this._offsets = [],
                                        this._targets = [],
                                        this._activeTarget = null,
                                        this._scrollHeight = 0,
                                        Wi(this._scrollElement).on(Ui.SCROLL, function (e) {
                                            return i._process(e)
                                        }),
                                        this.refresh(),
                                        this._process()
                                }
                                var t = e.prototype;
                                return t.refresh = function () {
                                    var e = this
                                        , t = this._scrollElement === this._scrollElement.window ? Ji : en
                                        , i = "auto" === this._config.method ? t : this._config.method
                                        , n = i === en ? this._getScrollTop() : 0;
                                    this._offsets = [],
                                        this._targets = [],
                                        this._scrollHeight = this._getScrollHeight(),
                                        Wi.makeArray(Wi(this._selector)).map(function (e) {
                                            var t, s = Ge.getSelectorFromElement(e);
                                            if (s && (t = Wi(s)[0]),
                                                t) {
                                                var a = t.getBoundingClientRect();
                                                if (a.width || a.height)
                                                    return [Wi(t)[i]().top + n, s]
                                            }
                                            return null
                                        }).filter(function (e) {
                                            return e
                                        }).sort(function (e, t) {
                                            return e[0] - t[0]
                                        }).forEach(function (t) {
                                            e._offsets.push(t[0]),
                                                e._targets.push(t[1])
                                        })
                                }
                                    ,
                                    t.dispose = function () {
                                        Wi.removeData(this._element, Yi),
                                            Wi(this._scrollElement).off(Vi),
                                            this._element = null,
                                            this._scrollElement = null,
                                            this._config = null,
                                            this._selector = null,
                                            this._offsets = null,
                                            this._targets = null,
                                            this._activeTarget = null,
                                            this._scrollHeight = null
                                    }
                                    ,
                                    t._getConfig = function (e) {
                                        if ("string" != typeof (e = s({}, Xi, e)).target) {
                                            var t = Wi(e.target).attr("id");
                                            t || (t = Ge.getUID(Bi),
                                                Wi(e.target).attr("id", t)),
                                                e.target = "#" + t
                                        }
                                        return Ge.typeCheckConfig(Bi, e, Gi),
                                            e
                                    }
                                    ,
                                    t._getScrollTop = function () {
                                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                                    }
                                    ,
                                    t._getScrollHeight = function () {
                                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                                    }
                                    ,
                                    t._getOffsetHeight = function () {
                                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                                    }
                                    ,
                                    t._process = function () {
                                        var e = this._getScrollTop() + this._config.offset
                                            , t = this._getScrollHeight()
                                            , i = this._config.offset + t - this._getOffsetHeight();
                                        if (this._scrollHeight !== t && this.refresh(),
                                            e >= i) {
                                            var n = this._targets[this._targets.length - 1];
                                            this._activeTarget !== n && this._activate(n)
                                        } else {
                                            if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0])
                                                return this._activeTarget = null,
                                                    void this._clear();
                                            for (var s = this._offsets.length; s--;)
                                                this._activeTarget !== this._targets[s] && e >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || e < this._offsets[s + 1]) && this._activate(this._targets[s])
                                        }
                                    }
                                    ,
                                    t._activate = function (e) {
                                        this._activeTarget = e,
                                            this._clear();
                                        var t = this._selector.split(",");
                                        t = t.map(function (t) {
                                            return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                                        });
                                        var i = Wi(t.join(","));
                                        i.hasClass(Ki) ? (i.closest(Qi.DROPDOWN).find(Qi.DROPDOWN_TOGGLE).addClass(Zi),
                                            i.addClass(Zi)) : (i.addClass(Zi),
                                                i.parents(Qi.NAV_LIST_GROUP).prev(Qi.NAV_LINKS + ", " + Qi.LIST_ITEMS).addClass(Zi),
                                                i.parents(Qi.NAV_LIST_GROUP).prev(Qi.NAV_ITEMS).children(Qi.NAV_LINKS).addClass(Zi)),
                                            Wi(this._scrollElement).trigger(Ui.ACTIVATE, {
                                                relatedTarget: e
                                            })
                                    }
                                    ,
                                    t._clear = function () {
                                        Wi(this._selector).filter(Qi.ACTIVE).removeClass(Zi)
                                    }
                                    ,
                                    e._jQueryInterface = function (t) {
                                        return this.each(function () {
                                            var i = Wi(this).data(Yi);
                                            if (i || (i = new e(this, "object" == typeof t && t),
                                                Wi(this).data(Yi, i)),
                                                "string" == typeof t) {
                                                if ("undefined" == typeof i[t])
                                                    throw new TypeError('No method named "' + t + '"');
                                                i[t]()
                                            }
                                        })
                                    }
                                    ,
                                    n(e, null, [{
                                        key: "VERSION",
                                        get: function () {
                                            return "4.1.0"
                                        }
                                    }, {
                                        key: "Default",
                                        get: function () {
                                            return Xi
                                        }
                                    }]),
                                    e
                            }(),
                            Wi(window).on(Ui.LOAD_DATA_API, function () {
                                for (var e = Wi.makeArray(Wi(Qi.DATA_SPY)), t = e.length; t--;) {
                                    var i = Wi(e[t]);
                                    tn._jQueryInterface.call(i, i.data())
                                }
                            }),
                            Wi.fn[Bi] = tn._jQueryInterface,
                            Wi.fn[Bi].Constructor = tn,
                            Wi.fn[Bi].noConflict = function () {
                                return Wi.fn[Bi] = qi,
                                    tn._jQueryInterface
                            }
                            ,
                            tn), Tn = (an = "." + (sn = "bs.tab"),
                                rn = (nn = t).fn.tab,
                                on = {
                                    HIDE: "hide" + an,
                                    HIDDEN: "hidden" + an,
                                    SHOW: "show" + an,
                                    SHOWN: "shown" + an,
                                    CLICK_DATA_API: "click" + an + ".data-api"
                                },
                                ln = "dropdown-menu",
                                cn = "active",
                                dn = "disabled",
                                un = "fade",
                                hn = "show",
                                pn = ".dropdown",
                                fn = ".nav, .list-group",
                                gn = ".active",
                                mn = "> li > .active",
                                vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
                                yn = ".dropdown-toggle",
                                bn = "> .dropdown-menu .active",
                                xn = function () {
                                    function e(e) {
                                        this._element = e
                                    }
                                    var t = e.prototype;
                                    return t.show = function () {
                                        var e = this;
                                        if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && nn(this._element).hasClass(cn) || nn(this._element).hasClass(dn))) {
                                            var t, i, n = nn(this._element).closest(fn)[0], s = Ge.getSelectorFromElement(this._element);
                                            if (n) {
                                                var a = "UL" === n.nodeName ? mn : gn;
                                                i = (i = nn.makeArray(nn(n).find(a)))[i.length - 1]
                                            }
                                            var r = nn.Event(on.HIDE, {
                                                relatedTarget: this._element
                                            })
                                                , o = nn.Event(on.SHOW, {
                                                    relatedTarget: i
                                                });
                                            if (i && nn(i).trigger(r),
                                                nn(this._element).trigger(o),
                                                !o.isDefaultPrevented() && !r.isDefaultPrevented()) {
                                                s && (t = nn(s)[0]),
                                                    this._activate(this._element, n);
                                                var l = function () {
                                                    var t = nn.Event(on.HIDDEN, {
                                                        relatedTarget: e._element
                                                    })
                                                        , n = nn.Event(on.SHOWN, {
                                                            relatedTarget: i
                                                        });
                                                    nn(i).trigger(t),
                                                        nn(e._element).trigger(n)
                                                };
                                                t ? this._activate(t, t.parentNode, l) : l()
                                            }
                                        }
                                    }
                                        ,
                                        t.dispose = function () {
                                            nn.removeData(this._element, sn),
                                                this._element = null
                                        }
                                        ,
                                        t._activate = function (e, t, i) {
                                            var n = this
                                                , s = ("UL" === t.nodeName ? nn(t).find(mn) : nn(t).children(gn))[0]
                                                , a = i && s && nn(s).hasClass(un)
                                                , r = function () {
                                                    return n._transitionComplete(e, s, i)
                                                };
                                            if (s && a) {
                                                var o = Ge.getTransitionDurationFromElement(s);
                                                nn(s).one(Ge.TRANSITION_END, r).emulateTransitionEnd(o)
                                            } else
                                                r()
                                        }
                                        ,
                                        t._transitionComplete = function (e, t, i) {
                                            if (t) {
                                                nn(t).removeClass(hn + " " + cn);
                                                var n = nn(t.parentNode).find(bn)[0];
                                                n && nn(n).removeClass(cn),
                                                    "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)
                                            }
                                            if (nn(e).addClass(cn),
                                                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                                                Ge.reflow(e),
                                                nn(e).addClass(hn),
                                                e.parentNode && nn(e.parentNode).hasClass(ln)) {
                                                var s = nn(e).closest(pn)[0];
                                                s && nn(s).find(yn).addClass(cn),
                                                    e.setAttribute("aria-expanded", !0)
                                            }
                                            i && i()
                                        }
                                        ,
                                        e._jQueryInterface = function (t) {
                                            return this.each(function () {
                                                var i = nn(this)
                                                    , n = i.data(sn);
                                                if (n || (n = new e(this),
                                                    i.data(sn, n)),
                                                    "string" == typeof t) {
                                                    if ("undefined" == typeof n[t])
                                                        throw new TypeError('No method named "' + t + '"');
                                                    n[t]()
                                                }
                                            })
                                        }
                                        ,
                                        n(e, null, [{
                                            key: "VERSION",
                                            get: function () {
                                                return "4.1.0"
                                            }
                                        }]),
                                        e
                                }(),
                                nn(document).on(on.CLICK_DATA_API, vn, function (e) {
                                    e.preventDefault(),
                                        xn._jQueryInterface.call(nn(this), "show")
                                }),
                                nn.fn.tab = xn._jQueryInterface,
                                nn.fn.tab.Constructor = xn,
                                nn.fn.tab.noConflict = function () {
                                    return nn.fn.tab = rn,
                                        xn._jQueryInterface
                                }
                                ,
                                xn);
        !function (e) {
            if ("undefined" == typeof e)
                throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
            var t = e.fn.jquery.split(" ")[0].split(".");
            if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0])
                throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
        }(t),
            e.Util = Ge,
            e.Alert = Ue,
            e.Button = Ke,
            e.Carousel = Ze,
            e.Collapse = Qe,
            e.Dropdown = wn,
            e.Modal = _n,
            e.Popover = Sn,
            e.Scrollspy = Cn,
            e.Tab = Tn,
            e.Tooltip = kn,
            Object.defineProperty(e, "__esModule", {
                value: !0
            })
    }),
    function (e, t) {
        var i;
        e.rails = i = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not(button[type])",
            disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
            fileInputSelector: "input:file",
            linkDisableSelector: "a[data-disable-with]",
            CSRFProtection: function (t) {
                var i = e('meta[name="csrf-token"]').attr("content");
                i && t.setRequestHeader("X-CSRF-Token", i)
            },
            fire: function (t, i, n) {
                var s = e.Event(i);
                return t.trigger(s, n),
                    s.result !== !1
            },
            confirm: function (e) {
                return confirm(e)
            },
            ajax: function (t) {
                return e.ajax(t)
            },
            href: function (e) {
                return e.attr("href")
            },
            handleRemote: function (n) {
                var s, a, r, o, l, c;
                if (i.fire(n, "ajax:before")) {
                    if (o = n.data("cross-domain") || null,
                        l = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType,
                        n.is("form")) {
                        s = n.attr("method"),
                            a = n.attr("action"),
                            r = n.serializeArray();
                        var d = n.data("ujs:submit-button");
                        d && (r.push(d),
                            n.data("ujs:submit-button", null))
                    } else
                        n.is(i.inputChangeSelector) ? (s = n.data("method"),
                            a = n.data("url"),
                            r = n.serialize(),
                            n.data("params") && (r = r + "&" + n.data("params"))) : (s = n.data("method"),
                                a = i.href(n),
                                r = n.data("params") || null);
                    return c = {
                        type: s || "GET",
                        data: r,
                        dataType: l,
                        crossDomain: o,
                        beforeSend: function (e, s) {
                            return s.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + s.accepts.script),
                                i.fire(n, "ajax:beforeSend", [e, s])
                        },
                        success: function (e, t, i) {
                            n.trigger("ajax:success", [e, t, i])
                        },
                        complete: function (e, t) {
                            n.trigger("ajax:complete", [e, t])
                        },
                        error: function (e, t, i) {
                            n.trigger("ajax:error", [e, t, i])
                        }
                    },
                        a && (c.url = a),
                        i.ajax(c)
                }
                return !1
            },
            handleMethod: function (n) {
                var s = i.href(n)
                    , a = n.data("method")
                    , r = n.attr("target")
                    , o = e("meta[name=csrf-token]").attr("content")
                    , l = e("meta[name=csrf-param]").attr("content")
                    , c = e('<form method="post" action="' + s + '"></form>')
                    , d = '<input name="_method" value="' + a + '" type="hidden" />';
                l !== t && o !== t && (d += '<input name="' + l + '" value="' + o + '" type="hidden" />'),
                    r && c.attr("target", r),
                    c.hide().append(d).appendTo("body"),
                    c.submit()
            },
            disableFormElements: function (t) {
                t.find(i.disableSelector).each(function () {
                    var t = e(this)
                        , i = t.is("button") ? "html" : "val";
                    t.data("ujs:enable-with", t[i]()),
                        t[i](t.data("disable-with")),
                        t.prop("disabled", !0)
                })
            },
            enableFormElements: function (t) {
                t.find(i.enableSelector).each(function () {
                    var t = e(this)
                        , i = t.is("button") ? "html" : "val";
                    t.data("ujs:enable-with") && t[i](t.data("ujs:enable-with")),
                        t.prop("disabled", !1)
                })
            },
            allowAction: function (e) {
                var t, n = e.data("confirm"), s = !1;
                return n ? (i.fire(e, "confirm") && (s = i.confirm(n),
                    t = i.fire(e, "confirm:complete", [s])),
                    s && t) : !0
            },
            blankInputs: function (t, i, n) {
                var s, a = e(), r = i || "input,textarea";
                return t.find(r).each(function () {
                    s = e(this),
                        (n ? s.val() : !s.val()) && (a = a.add(s))
                }),
                    a.length ? a : !1
            },
            nonBlankInputs: function (e, t) {
                return i.blankInputs(e, t, !0)
            },
            stopEverything: function (t) {
                return e(t.target).trigger("ujs:everythingStopped"),
                    t.stopImmediatePropagation(),
                    !1
            },
            callFormSubmitBindings: function (i, n) {
                var s = i.data("events")
                    , a = !0;
                return s !== t && s.submit !== t && e.each(s.submit, function (e, t) {
                    return "function" == typeof t.handler ? a = t.handler(n) : void 0
                }),
                    a
            },
            disableElement: function (e) {
                e.data("ujs:enable-with", e.html()),
                    e.html(e.data("disable-with")),
                    e.bind("click.railsDisable", function (e) {
                        return i.stopEverything(e)
                    })
            },
            enableElement: function (e) {
                e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")),
                    e.data("ujs:enable-with", !1)),
                    e.unbind("click.railsDisable")
            }
        },
            e.ajaxPrefilter(function (e, t, n) {
                e.crossDomain || i.CSRFProtection(n)
            }),
            e(document).delegate(i.linkDisableSelector, "ajax:complete", function () {
                i.enableElement(e(this))
            }),
            e(document).delegate(i.linkClickSelector, "click.rails", function (n) {
                var s = e(this)
                    , a = s.data("method")
                    , r = s.data("params");
                return i.allowAction(s) ? (s.is(i.linkDisableSelector) && i.disableElement(s),
                    s.data("remote") !== t ? !n.metaKey && !n.ctrlKey || a && "GET" !== a || r ? (i.handleRemote(s) === !1 && i.enableElement(s),
                        !1) : !0 : s.data("method") ? (i.handleMethod(s),
                            !1) : void 0) : i.stopEverything(n)
            }),
            e(document).delegate(i.inputChangeSelector, "change.rails", function (t) {
                var n = e(this);
                return i.allowAction(n) ? (i.handleRemote(n),
                    !1) : i.stopEverything(t)
            }),
            e(document).delegate(i.formSubmitSelector, "submit.rails", function (n) {
                var s = e(this)
                    , a = s.data("remote") !== t
                    , r = i.blankInputs(s, i.requiredInputSelector)
                    , o = i.nonBlankInputs(s, i.fileInputSelector);
                return i.allowAction(s) ? r && s.attr("novalidate") == t && i.fire(s, "ajax:aborted:required", [r]) ? i.stopEverything(n) : a ? o ? i.fire(s, "ajax:aborted:file", [o]) : !e.support.submitBubbles && e().jquery < "1.7" && i.callFormSubmitBindings(s, n) === !1 ? i.stopEverything(n) : s.find('input[name="g-recaptcha-response"]').length && runningCaptcha ? i.stopEverything(n) : (i.handleRemote(s),
                    !1) : void setTimeout(function () {
                        i.disableFormElements(s)
                    }, 13) : i.stopEverything(n)
            }),
            e(document).delegate(i.formInputClickSelector, "click.rails", function (t) {
                var n = e(this);
                if (!i.allowAction(n))
                    return i.stopEverything(t);
                var s = n.attr("name")
                    , a = s ? {
                        name: s,
                        value: n.val()
                    } : null;
                n.closest("form").data("ujs:submit-button", a)
            }),
            e(document).delegate(i.formSubmitSelector, "ajax:beforeSend.rails", function (t) {
                this == t.target && i.disableFormElements(e(this))
            }),
            e(document).delegate(i.formSubmitSelector, "ajax:complete.rails", function (t) {
                this == t.target && i.enableFormElements(e(this))
            }),
            e(function () {
                csrf_token = e("meta[name=csrf-token]").attr("content"),
                    csrf_param = e("meta[name=csrf-param]").attr("content"),
                    e('form input[name="' + csrf_param + '"]').val(csrf_token)
            })
    }(jQuery),
    !function (e, t) {
        "use strict";
        function i(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function n(e, t) {
            for (var i in t)
                t.hasOwnProperty(i) && (e[i] = t[i])
        }
        function s(e) {
            return parseFloat(e) || 0
        }
        function a(e) {
            for (var t = 0; e;)
                t += e.offsetTop,
                    e = e.offsetParent;
            return t
        }
        var r = function () {
            function e(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    n.enumerable = n.enumerable || !1,
                        n.configurable = !0,
                        "value" in n && (n.writable = !0),
                        Object.defineProperty(e, n.key, n)
                }
            }
            return function (t, i, n) {
                return i && e(t.prototype, i),
                    n && e(t, n),
                    t
            }
        }()
            , o = !1;
        if (e.getComputedStyle) {
            var l = t.createElement("div");
            ["", "-webkit-", "-moz-", "-ms-"].some(function (e) {
                try {
                    l.style.position = e + "sticky"
                } catch (e) { }
                return "" != l.style.position
            }) && (o = !0)
        } else
            o = !0;
        var c = "undefined" != typeof ShadowRoot
            , d = {
                top: null,
                left: null
            }
            , u = []
            , h = function () {
                function l(e) {
                    if (i(this, l),
                        !(e instanceof HTMLElement))
                        throw new Error("First argument must be HTMLElement");
                    if (u.some(function (t) {
                        return t._node === e
                    }))
                        throw new Error("Stickyfill is already applied to this node");
                    this._node = e,
                        this._stickyMode = null,
                        this._active = !1,
                        u.push(this),
                        this.refresh()
                }
                return r(l, [{
                    key: "refresh",
                    value: function () {
                        if (!o && !this._removed) {
                            this._active && this._deactivate();
                            var i = this._node
                                , r = getComputedStyle(i)
                                , l = {
                                    top: r.top,
                                    display: r.display,
                                    marginTop: r.marginTop,
                                    marginBottom: r.marginBottom,
                                    marginLeft: r.marginLeft,
                                    marginRight: r.marginRight,
                                    cssFloat: r.cssFloat
                                };
                            if (!isNaN(parseFloat(l.top)) && "table-cell" != l.display && "none" != l.display) {
                                this._active = !0;
                                var d = i.parentNode
                                    , u = c && d instanceof ShadowRoot ? d.host : d
                                    , h = i.getBoundingClientRect()
                                    , p = u.getBoundingClientRect()
                                    , f = getComputedStyle(u);
                                this._parent = {
                                    node: u,
                                    styles: {
                                        position: u.style.position
                                    },
                                    offsetHeight: u.offsetHeight
                                },
                                    this._offsetToWindow = {
                                        left: h.left,
                                        right: t.documentElement.clientWidth - h.right
                                    },
                                    this._offsetToParent = {
                                        top: h.top - p.top - s(f.borderTopWidth),
                                        left: h.left - p.left - s(f.borderLeftWidth),
                                        right: -h.right + p.right - s(f.borderRightWidth)
                                    },
                                    this._styles = {
                                        position: i.style.position,
                                        top: i.style.top,
                                        bottom: i.style.bottom,
                                        left: i.style.left,
                                        right: i.style.right,
                                        width: i.style.width,
                                        marginTop: i.style.marginTop,
                                        marginLeft: i.style.marginLeft,
                                        marginRight: i.style.marginRight
                                    };
                                var g = s(l.top);
                                this._limits = {
                                    start: h.top + e.pageYOffset - g,
                                    end: p.top + e.pageYOffset + u.offsetHeight - s(f.borderBottomWidth) - i.offsetHeight - g - s(l.marginBottom)
                                };
                                var m = f.position;
                                "absolute" != m && "relative" != m && (u.style.position = "relative"),
                                    this._recalcPosition();
                                var v = this._clone = {};
                                v.node = t.createElement("div"),
                                    n(v.node.style, {
                                        width: h.right - h.left + "px",
                                        height: h.bottom - h.top + "px",
                                        marginTop: l.marginTop,
                                        marginBottom: l.marginBottom,
                                        marginLeft: l.marginLeft,
                                        marginRight: l.marginRight,
                                        cssFloat: l.cssFloat,
                                        padding: 0,
                                        border: 0,
                                        borderSpacing: 0,
                                        fontSize: "1em",
                                        position: "static"
                                    }),
                                    d.insertBefore(v.node, i),
                                    v.docOffsetTop = a(v.node)
                            }
                        }
                    }
                }, {
                    key: "_recalcPosition",
                    value: function () {
                        if (this._active && !this._removed) {
                            var e = d.top <= this._limits.start ? "start" : d.top >= this._limits.end ? "end" : "middle";
                            if (this._stickyMode != e) {
                                switch (e) {
                                    case "start":
                                        n(this._node.style, {
                                            position: "absolute",
                                            left: this._offsetToParent.left + "px",
                                            right: this._offsetToParent.right + "px",
                                            top: this._offsetToParent.top + "px",
                                            bottom: "auto",
                                            width: "auto",
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginTop: 0
                                        });
                                        break;
                                    case "middle":
                                        n(this._node.style, {
                                            position: "fixed",
                                            left: this._offsetToWindow.left + "px",
                                            right: this._offsetToWindow.right + "px",
                                            top: this._styles.top,
                                            bottom: "auto",
                                            width: "auto",
                                            marginLeft: 0,
                                            marginRight: 0,
                                            marginTop: 0
                                        });
                                        break;
                                    case "end":
                                        n(this._node.style, {
                                            position: "absolute",
                                            left: this._offsetToParent.left + "px",
                                            right: this._offsetToParent.right + "px",
                                            top: "auto",
                                            bottom: 0,
                                            width: "auto",
                                            marginLeft: 0,
                                            marginRight: 0
                                        })
                                }
                                this._stickyMode = e
                            }
                        }
                    }
                }, {
                    key: "_fastCheck",
                    value: function () {
                        this._active && !this._removed && (Math.abs(a(this._clone.node) - this._clone.docOffsetTop) > 1 || Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight) > 1) && this.refresh()
                    }
                }, {
                    key: "_deactivate",
                    value: function () {
                        var e = this;
                        this._active && !this._removed && (this._clone.node.parentNode.removeChild(this._clone.node),
                            delete this._clone,
                            n(this._node.style, this._styles),
                            delete this._styles,
                            u.some(function (t) {
                                return t !== e && t._parent && t._parent.node === e._parent.node
                            }) || n(this._parent.node.style, this._parent.styles),
                            delete this._parent,
                            this._stickyMode = null,
                            this._active = !1,
                            delete this._offsetToWindow,
                            delete this._offsetToParent,
                            delete this._limits)
                    }
                }, {
                    key: "remove",
                    value: function () {
                        var e = this;
                        this._deactivate(),
                            u.some(function (t, i) {
                                return t._node === e._node ? (u.splice(i, 1),
                                    !0) : void 0
                            }),
                            this._removed = !0
                    }
                }]),
                    l
            }()
            , p = {
                stickies: u,
                Sticky: h,
                addOne: function (e) {
                    if (!(e instanceof HTMLElement)) {
                        if (!e.length || !e[0])
                            return;
                        e = e[0]
                    }
                    for (var t = 0; t < u.length; t++)
                        if (u[t]._node === e)
                            return u[t];
                    return new h(e)
                },
                add: function (e) {
                    if (e instanceof HTMLElement && (e = [e]),
                        e.length) {
                        for (var t = [], i = 0; i < e.length; i++)
                            !function (i) {
                                var n = e[i];
                                n instanceof HTMLElement ? u.some(function (e) {
                                    return e._node === n ? (t.push(e),
                                        !0) : void 0
                                }) || t.push(new h(n)) : t.push(void 0)
                            }(i);
                        return t
                    }
                },
                refreshAll: function () {
                    u.forEach(function (e) {
                        return e.refresh()
                    })
                },
                removeOne: function (e) {
                    if (!(e instanceof HTMLElement)) {
                        if (!e.length || !e[0])
                            return;
                        e = e[0]
                    }
                    u.some(function (t) {
                        return t._node === e ? (t.remove(),
                            !0) : void 0
                    })
                },
                remove: function (e) {
                    if (e instanceof HTMLElement && (e = [e]),
                        e.length)
                        for (var t = 0; t < e.length; t++)
                            !function (t) {
                                var i = e[t];
                                u.some(function (e) {
                                    return e._node === i ? (e.remove(),
                                        !0) : void 0
                                })
                            }(t)
                },
                removeAll: function () {
                    for (; u.length;)
                        u[0].remove()
                }
            };
        o || function () {
            function i() {
                e.pageXOffset != d.left ? (d.top = e.pageYOffset,
                    d.left = e.pageXOffset,
                    p.refreshAll()) : e.pageYOffset != d.top && (d.top = e.pageYOffset,
                        d.left = e.pageXOffset,
                        u.forEach(function (e) {
                            return e._recalcPosition()
                        }))
            }
            function n() {
                a = setInterval(function () {
                    u.forEach(function (e) {
                        return e._fastCheck()
                    })
                }, 500)
            }
            function s() {
                clearInterval(a)
            }
            i(),
                e.addEventListener("scroll", i),
                e.addEventListener("resize", p.refreshAll),
                e.addEventListener("orientationchange", p.refreshAll);
            var a = void 0
                , r = void 0
                , o = void 0;
            "hidden" in t ? (r = "hidden",
                o = "visibilitychange") : "webkitHidden" in t && (r = "webkitHidden",
                    o = "webkitvisibilitychange"),
                o ? (t[r] || n(),
                    t.addEventListener(o, function () {
                        t[r] ? s() : n()
                    })) : n()
        }(),
            "undefined" != typeof module && module.exports ? module.exports = p : e.Stickyfill = p
    }(window, document),
    function (e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function (e) {
        "use strict";
        var t = window.Slick || {};
        t = function () {
            function t(t, n) {
                var s, a = this;
                a.defaults = {
                    accessibility: !0,
                    adaptiveHeight: !1,
                    appendArrows: e(t),
                    appendDots: e(t),
                    arrows: !0,
                    asNavFor: null,
                    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                    nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                    autoplay: !1,
                    autoplaySpeed: 3e3,
                    centerMode: !1,
                    centerPadding: "50px",
                    cssEase: "ease",
                    customPaging: function (t, i) {
                        return e('<button type="button" />').text(i + 1)
                    },
                    dots: !1,
                    dotsClass: "slick-dots",
                    draggable: !0,
                    easing: "linear",
                    edgeFriction: .35,
                    fade: !1,
                    focusOnSelect: !1,
                    focusOnChange: !1,
                    infinite: !0,
                    initialSlide: 0,
                    lazyLoad: "ondemand",
                    mobileFirst: !1,
                    pauseOnHover: !0,
                    pauseOnFocus: !0,
                    pauseOnDotsHover: !1,
                    respondTo: "window",
                    responsive: null,
                    rows: 1,
                    rtl: !1,
                    slide: "",
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    swipe: !0,
                    swipeToSlide: !1,
                    touchMove: !0,
                    touchThreshold: 5,
                    useCSS: !0,
                    useTransform: !0,
                    variableWidth: !1,
                    vertical: !1,
                    verticalSwiping: !1,
                    waitForAnimate: !0,
                    zIndex: 1e3
                },
                    a.initials = {
                        animating: !1,
                        dragging: !1,
                        autoPlayTimer: null,
                        currentDirection: 0,
                        currentLeft: null,
                        currentSlide: 0,
                        direction: 1,
                        $dots: null,
                        listWidth: null,
                        listHeight: null,
                        loadIndex: 0,
                        $nextArrow: null,
                        $prevArrow: null,
                        scrolling: !1,
                        slideCount: null,
                        slideWidth: null,
                        $slideTrack: null,
                        $slides: null,
                        sliding: !1,
                        slideOffset: 0,
                        swipeLeft: null,
                        swiping: !1,
                        $list: null,
                        touchObject: {},
                        transformsEnabled: !1,
                        unslicked: !1
                    },
                    e.extend(a, a.initials),
                    a.activeBreakpoint = null,
                    a.animType = null,
                    a.animProp = null,
                    a.breakpoints = [],
                    a.breakpointSettings = [],
                    a.cssTransitions = !1,
                    a.focussed = !1,
                    a.interrupted = !1,
                    a.hidden = "hidden",
                    a.paused = !0,
                    a.positionProp = null,
                    a.respondTo = null,
                    a.rowCount = 1,
                    a.shouldClick = !0,
                    a.$slider = e(t),
                    a.$slidesCache = null,
                    a.transformType = null,
                    a.transitionType = null,
                    a.visibilityChange = "visibilitychange",
                    a.windowWidth = 0,
                    a.windowTimer = null,
                    s = e(t).data("slick") || {},
                    a.options = e.extend({}, a.defaults, n, s),
                    a.currentSlide = a.options.initialSlide,
                    a.originalSettings = a.options,
                    "undefined" != typeof document.mozHidden ? (a.hidden = "mozHidden",
                        a.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (a.hidden = "webkitHidden",
                            a.visibilityChange = "webkitvisibilitychange"),
                    a.autoPlay = e.proxy(a.autoPlay, a),
                    a.autoPlayClear = e.proxy(a.autoPlayClear, a),
                    a.autoPlayIterator = e.proxy(a.autoPlayIterator, a),
                    a.changeSlide = e.proxy(a.changeSlide, a),
                    a.clickHandler = e.proxy(a.clickHandler, a),
                    a.selectHandler = e.proxy(a.selectHandler, a),
                    a.setPosition = e.proxy(a.setPosition, a),
                    a.swipeHandler = e.proxy(a.swipeHandler, a),
                    a.dragHandler = e.proxy(a.dragHandler, a),
                    a.keyHandler = e.proxy(a.keyHandler, a),
                    a.instanceUid = i++,
                    a.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
                    a.registerBreakpoints(),
                    a.init(!0)
            }
            var i = 0;
            return t
        }(),
            t.prototype.activateADA = function () {
                var e = this;
                e.$slideTrack.find(".slick-active").attr({
                    "aria-hidden": "false"
                }).find("a, input, button, select").attr({
                    tabindex: "0"
                })
            }
            ,
            t.prototype.addSlide = t.prototype.slickAdd = function (t, i, n) {
                var s = this;
                if ("boolean" == typeof i)
                    n = i,
                        i = null;
                else if (0 > i || i >= s.slideCount)
                    return !1;
                s.unload(),
                    "number" == typeof i ? 0 === i && 0 === s.$slides.length ? e(t).appendTo(s.$slideTrack) : n ? e(t).insertBefore(s.$slides.eq(i)) : e(t).insertAfter(s.$slides.eq(i)) : n === !0 ? e(t).prependTo(s.$slideTrack) : e(t).appendTo(s.$slideTrack),
                    s.$slides = s.$slideTrack.children(this.options.slide),
                    s.$slideTrack.children(this.options.slide).detach(),
                    s.$slideTrack.append(s.$slides),
                    s.$slides.each(function (t, i) {
                        e(i).attr("data-slick-index", t)
                    }),
                    s.$slidesCache = s.$slides,
                    s.reinit()
            }
            ,
            t.prototype.animateHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.animate({
                        height: t
                    }, e.options.speed)
                }
            }
            ,
            t.prototype.animateSlide = function (t, i) {
                var n = {}
                    , s = this;
                s.animateHeight(),
                    s.options.rtl === !0 && s.options.vertical === !1 && (t = -t),
                    s.transformsEnabled === !1 ? s.options.vertical === !1 ? s.$slideTrack.animate({
                        left: t
                    }, s.options.speed, s.options.easing, i) : s.$slideTrack.animate({
                        top: t
                    }, s.options.speed, s.options.easing, i) : s.cssTransitions === !1 ? (s.options.rtl === !0 && (s.currentLeft = -s.currentLeft),
                        e({
                            animStart: s.currentLeft
                        }).animate({
                            animStart: t
                        }, {
                            duration: s.options.speed,
                            easing: s.options.easing,
                            step: function (e) {
                                e = Math.ceil(e),
                                    s.options.vertical === !1 ? (n[s.animType] = "translate(" + e + "px, 0px)",
                                        s.$slideTrack.css(n)) : (n[s.animType] = "translate(0px," + e + "px)",
                                            s.$slideTrack.css(n))
                            },
                            complete: function () {
                                i && i.call()
                            }
                        })) : (s.applyTransition(),
                            t = Math.ceil(t),
                            s.options.vertical === !1 ? n[s.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[s.animType] = "translate3d(0px," + t + "px, 0px)",
                            s.$slideTrack.css(n),
                            i && setTimeout(function () {
                                s.disableTransition(),
                                    i.call()
                            }, s.options.speed))
            }
            ,
            t.prototype.getNavTarget = function () {
                var t = this
                    , i = t.options.asNavFor;
                return i && null !== i && (i = e(i).not(t.$slider)),
                    i
            }
            ,
            t.prototype.asNavFor = function (t) {
                var i = this
                    , n = i.getNavTarget();
                null !== n && "object" == typeof n && n.each(function () {
                    var i = e(this).slick("getSlick");
                    i.unslicked || i.slideHandler(t, !0)
                })
            }
            ,
            t.prototype.applyTransition = function (e) {
                var t = this
                    , i = {};
                t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase,
                    t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
            }
            ,
            t.prototype.autoPlay = function () {
                var e = this;
                e.autoPlayClear(),
                    e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
            }
            ,
            t.prototype.autoPlayClear = function () {
                var e = this;
                e.autoPlayTimer && clearInterval(e.autoPlayTimer)
            }
            ,
            t.prototype.autoPlayIterator = function () {
                var e = this
                    , t = e.currentSlide + e.options.slidesToScroll;
                e.paused || e.interrupted || e.focussed || (e.options.infinite === !1 && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll,
                    e.currentSlide - 1 === 0 && (e.direction = 1))),
                    e.slideHandler(t))
            }
            ,
            t.prototype.buildArrows = function () {
                var t = this;
                t.options.arrows === !0 && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"),
                    t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"),
                    t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                        t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows),
                        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows),
                        t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
                            "aria-disabled": "true",
                            tabindex: "-1"
                        }))
            }
            ,
            t.prototype.buildDots = function () {
                var t, i, n = this;
                if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
                    for (n.$slider.addClass("slick-dotted"),
                        i = e("<ul />").addClass(n.options.dotsClass),
                        t = 0; t <= n.getDotCount(); t += 1)
                        i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
                    n.$dots = i.appendTo(n.options.appendDots),
                        n.$dots.find("li").first().addClass("slick-active")
                }
            }
            ,
            t.prototype.buildOut = function () {
                var t = this;
                t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
                    t.slideCount = t.$slides.length,
                    t.$slides.each(function (t, i) {
                        e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
                    }),
                    t.$slider.addClass("slick-slider"),
                    t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(),
                    t.$list = t.$slideTrack.wrap('<div class="slick-list"/>').parent(),
                    t.$slideTrack.css("opacity", 0),
                    t.options.centerMode !== !0 && t.options.swipeToSlide !== !0 || (t.options.slidesToScroll = 1),
                    e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.buildDots(),
                    t.updateDots(),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.options.draggable === !0 && t.$list.addClass("draggable")
            }
            ,
            t.prototype.buildRows = function () {
                var e, t, i, n, s, a, r, o = this;
                if (n = document.createDocumentFragment(),
                    a = o.$slider.children(),
                    o.options.rows > 0) {
                    for (r = o.options.slidesPerRow * o.options.rows,
                        s = Math.ceil(a.length / r),
                        e = 0; s > e; e++) {
                        var l = document.createElement("div");
                        for (t = 0; t < o.options.rows; t++) {
                            var c = document.createElement("div");
                            for (i = 0; i < o.options.slidesPerRow; i++) {
                                var d = e * r + (t * o.options.slidesPerRow + i);
                                a.get(d) && c.appendChild(a.get(d))
                            }
                            l.appendChild(c)
                        }
                        n.appendChild(l)
                    }
                    o.$slider.empty().append(n),
                        o.$slider.children().children().children().css({
                            width: 100 / o.options.slidesPerRow + "%",
                            display: "inline-block"
                        })
                }
            }
            ,
            t.prototype.checkResponsive = function (t, i) {
                var n, s, a, r = this, o = !1, l = r.$slider.width(), c = window.innerWidth || e(window).width();
                if ("window" === r.respondTo ? a = c : "slider" === r.respondTo ? a = l : "min" === r.respondTo && (a = Math.min(c, l)),
                    r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
                    s = null;
                    for (n in r.breakpoints)
                        r.breakpoints.hasOwnProperty(n) && (r.originalSettings.mobileFirst === !1 ? a < r.breakpoints[n] && (s = r.breakpoints[n]) : a > r.breakpoints[n] && (s = r.breakpoints[n]));
                    null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || i) && (r.activeBreakpoint = s,
                        "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]),
                            t === !0 && (r.currentSlide = r.options.initialSlide),
                            r.refresh(t)),
                        o = s) : (r.activeBreakpoint = s,
                            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = e.extend({}, r.originalSettings, r.breakpointSettings[s]),
                                t === !0 && (r.currentSlide = r.options.initialSlide),
                                r.refresh(t)),
                            o = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
                                r.options = r.originalSettings,
                                t === !0 && (r.currentSlide = r.options.initialSlide),
                                r.refresh(t),
                                o = s),
                        t || o === !1 || r.$slider.trigger("breakpoint", [r, o])
                }
            }
            ,
            t.prototype.changeSlide = function (t, i) {
                var n, s, a, r = this, o = e(t.currentTarget);
                switch (o.is("a") && t.preventDefault(),
                o.is("li") || (o = o.closest("li")),
                a = r.slideCount % r.options.slidesToScroll !== 0,
                n = a ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
                t.data.message) {
                    case "previous":
                        s = 0 === n ? r.options.slidesToScroll : r.options.slidesToShow - n,
                            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, i);
                        break;
                    case "next":
                        s = 0 === n ? r.options.slidesToScroll : n,
                            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, i);
                        break;
                    case "index":
                        var l = 0 === t.data.index ? 0 : t.data.index || o.index() * r.options.slidesToScroll;
                        r.slideHandler(r.checkNavigable(l), !1, i),
                            o.children().trigger("focus");
                        break;
                    default:
                        return
                }
            }
            ,
            t.prototype.checkNavigable = function (e) {
                var t, i, n = this;
                if (t = n.getNavigableIndexes(),
                    i = 0,
                    e > t[t.length - 1])
                    e = t[t.length - 1];
                else
                    for (var s in t) {
                        if (e < t[s]) {
                            e = i;
                            break
                        }
                        i = t[s]
                    }
                return e
            }
            ,
            t.prototype.cleanUpEvents = function () {
                var t = this;
                t.options.dots && null !== t.$dots && (e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)),
                    t.options.accessibility === !0 && t.$dots.off("keydown.slick", t.keyHandler)),
                    t.$slider.off("focus.slick blur.slick"),
                    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide),
                        t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide),
                        t.options.accessibility === !0 && (t.$prevArrow && t.$prevArrow.off("keydown.slick", t.keyHandler),
                            t.$nextArrow && t.$nextArrow.off("keydown.slick", t.keyHandler))),
                    t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler),
                    t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler),
                    t.$list.off("touchend.slick mouseup.slick", t.swipeHandler),
                    t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler),
                    t.$list.off("click.slick", t.clickHandler),
                    e(document).off(t.visibilityChange, t.visibility),
                    t.cleanUpSlideEvents(),
                    t.options.accessibility === !0 && t.$list.off("keydown.slick", t.keyHandler),
                    t.options.focusOnSelect === !0 && e(t.$slideTrack).children().off("click.slick", t.selectHandler),
                    e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange),
                    e(window).off("resize.slick.slick-" + t.instanceUid, t.resize),
                    e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault),
                    e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition)
            }
            ,
            t.prototype.cleanUpSlideEvents = function () {
                var t = this;
                t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }
            ,
            t.prototype.cleanUpRows = function () {
                var e, t = this;
                t.options.rows > 0 && (e = t.$slides.children().children(),
                    e.removeAttr("style"),
                    t.$slider.empty().append(e))
            }
            ,
            t.prototype.clickHandler = function (e) {
                var t = this;
                t.shouldClick === !1 && (e.stopImmediatePropagation(),
                    e.stopPropagation(),
                    e.preventDefault())
            }
            ,
            t.prototype.destroy = function (t) {
                var i = this;
                i.autoPlayClear(),
                    i.touchObject = {},
                    i.cleanUpEvents(),
                    e(".slick-cloned", i.$slider).detach(),
                    i.$dots && i.$dots.remove(),
                    i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                        i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                    i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
                        i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                    i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
                        e(this).attr("style", e(this).data("originalStyling"))
                    }),
                        i.$slideTrack.children(this.options.slide).detach(),
                        i.$slideTrack.detach(),
                        i.$list.detach(),
                        i.$slider.append(i.$slides)),
                    i.cleanUpRows(),
                    i.$slider.removeClass("slick-slider"),
                    i.$slider.removeClass("slick-initialized"),
                    i.$slider.removeClass("slick-dotted"),
                    i.unslicked = !0,
                    t || i.$slider.trigger("destroy", [i])
            }
            ,
            t.prototype.disableTransition = function (e) {
                var t = this
                    , i = {};
                i[t.transitionType] = "",
                    t.options.fade === !1 ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
            }
            ,
            t.prototype.fadeSlide = function (e, t) {
                var i = this;
                i.cssTransitions === !1 ? (i.$slides.eq(e).css({
                    zIndex: i.options.zIndex
                }),
                    i.$slides.eq(e).animate({
                        opacity: 1
                    }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e),
                        i.$slides.eq(e).css({
                            opacity: 1,
                            zIndex: i.options.zIndex
                        }),
                        t && setTimeout(function () {
                            i.disableTransition(e),
                                t.call()
                        }, i.options.speed))
            }
            ,
            t.prototype.fadeSlideOut = function (e) {
                var t = this;
                t.cssTransitions === !1 ? t.$slides.eq(e).animate({
                    opacity: 0,
                    zIndex: t.options.zIndex - 2
                }, t.options.speed, t.options.easing) : (t.applyTransition(e),
                    t.$slides.eq(e).css({
                        opacity: 0,
                        zIndex: t.options.zIndex - 2
                    }))
            }
            ,
            t.prototype.filterSlides = t.prototype.slickFilter = function (e) {
                var t = this;
                null !== e && (t.$slidesCache = t.$slides,
                    t.unload(),
                    t.$slideTrack.children(this.options.slide).detach(),
                    t.$slidesCache.filter(e).appendTo(t.$slideTrack),
                    t.reinit())
            }
            ,
            t.prototype.focusHandler = function () {
                var t = this;
                t.$slider.off("focus.slick blur.slick").on("focus.slick", "*", function (i) {
                    var n = e(this);
                    setTimeout(function () {
                        t.options.pauseOnFocus && n.is(":focus") && (t.focussed = !0,
                            t.autoPlay())
                    }, 0)
                }).on("blur.slick", "*", function (i) {
                    e(this),
                        t.options.pauseOnFocus && (t.focussed = !1,
                            t.autoPlay())
                })
            }
            ,
            t.prototype.getCurrent = t.prototype.slickCurrentSlide = function () {
                var e = this;
                return e.currentSlide
            }
            ,
            t.prototype.getDotCount = function () {
                var e = this
                    , t = 0
                    , i = 0
                    , n = 0;
                if (e.options.infinite === !0)
                    if (e.slideCount <= e.options.slidesToShow)
                        ++n;
                    else
                        for (; t < e.slideCount;)
                            ++n,
                                t = i + e.options.slidesToScroll,
                                i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else if (e.options.centerMode === !0)
                    n = e.slideCount;
                else if (e.options.asNavFor)
                    for (; t < e.slideCount;)
                        ++n,
                            t = i + e.options.slidesToScroll,
                            i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
                else
                    n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
                return n - 1
            }
            ,
            t.prototype.getLeft = function (e) {
                var t, i, n, s, a = this, r = 0;
                return a.slideOffset = 0,
                    i = a.$slides.first().outerHeight(!0),
                    a.options.infinite === !0 ? (a.slideCount > a.options.slidesToShow && (a.slideOffset = a.slideWidth * a.options.slidesToShow * -1,
                        s = -1,
                        a.options.vertical === !0 && a.options.centerMode === !0 && (2 === a.options.slidesToShow ? s = -1.5 : 1 === a.options.slidesToShow && (s = -2)),
                        r = i * a.options.slidesToShow * s),
                        a.slideCount % a.options.slidesToScroll !== 0 && e + a.options.slidesToScroll > a.slideCount && a.slideCount > a.options.slidesToShow && (e > a.slideCount ? (a.slideOffset = (a.options.slidesToShow - (e - a.slideCount)) * a.slideWidth * -1,
                            r = (a.options.slidesToShow - (e - a.slideCount)) * i * -1) : (a.slideOffset = a.slideCount % a.options.slidesToScroll * a.slideWidth * -1,
                                r = a.slideCount % a.options.slidesToScroll * i * -1))) : e + a.options.slidesToShow > a.slideCount && (a.slideOffset = (e + a.options.slidesToShow - a.slideCount) * a.slideWidth,
                                    r = (e + a.options.slidesToShow - a.slideCount) * i),
                    a.slideCount <= a.options.slidesToShow && (a.slideOffset = 0,
                        r = 0),
                    a.options.centerMode === !0 && a.slideCount <= a.options.slidesToShow ? a.slideOffset = a.slideWidth * Math.floor(a.options.slidesToShow) / 2 - a.slideWidth * a.slideCount / 2 : a.options.centerMode === !0 && a.options.infinite === !0 ? a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2) - a.slideWidth : a.options.centerMode === !0 && (a.slideOffset = 0,
                        a.slideOffset += a.slideWidth * Math.floor(a.options.slidesToShow / 2)),
                    t = a.options.vertical === !1 ? e * a.slideWidth * -1 + a.slideOffset : e * i * -1 + r,
                    a.options.variableWidth === !0 && (n = a.slideCount <= a.options.slidesToShow || a.options.infinite === !1 ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow),
                        t = a.options.rtl === !0 ? n[0] ? -1 * (a.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
                        a.options.centerMode === !0 && (n = a.slideCount <= a.options.slidesToShow || a.options.infinite === !1 ? a.$slideTrack.children(".slick-slide").eq(e) : a.$slideTrack.children(".slick-slide").eq(e + a.options.slidesToShow + 1),
                            t = a.options.rtl === !0 ? n[0] ? -1 * (a.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0,
                            t += (a.$list.width() - n.outerWidth()) / 2)),
                    t
            }
            ,
            t.prototype.getOption = t.prototype.slickGetOption = function (e) {
                var t = this;
                return t.options[e]
            }
            ,
            t.prototype.getNavigableIndexes = function () {
                var e, t = this, i = 0, n = 0, s = [];
                for (t.options.infinite === !1 ? e = t.slideCount : (i = -1 * t.options.slidesToScroll,
                    n = -1 * t.options.slidesToScroll,
                    e = 2 * t.slideCount); e > i;)
                    s.push(i),
                        i = n + t.options.slidesToScroll,
                        n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
                return s
            }
            ,
            t.prototype.getSlick = function () {
                return this
            }
            ,
            t.prototype.getSlideCount = function () {
                var t, i, n, s, a = this;
                return s = a.options.centerMode === !0 ? Math.floor(a.$list.width() / 2) : 0,
                    n = -1 * a.swipeLeft + s,
                    a.options.swipeToSlide === !0 ? (a.$slideTrack.find(".slick-slide").each(function (t, s) {
                        var r, o, l;
                        return r = e(s).outerWidth(),
                            o = s.offsetLeft,
                            a.options.centerMode !== !0 && (o += r / 2),
                            l = o + r,
                            l > n ? (i = s,
                                !1) : void 0
                    }),
                        t = Math.abs(e(i).attr("data-slick-index") - a.currentSlide) || 1) : a.options.slidesToScroll
            }
            ,
            t.prototype.goTo = t.prototype.slickGoTo = function (e, t) {
                var i = this;
                i.changeSlide({
                    data: {
                        message: "index",
                        index: parseInt(e)
                    }
                }, t)
            }
            ,
            t.prototype.init = function (t) {
                var i = this;
                e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"),
                    i.buildRows(),
                    i.buildOut(),
                    i.setProps(),
                    i.startLoad(),
                    i.loadSlider(),
                    i.initializeEvents(),
                    i.updateArrows(),
                    i.updateDots(),
                    i.checkResponsive(!0),
                    i.focusHandler()),
                    t && i.$slider.trigger("init", [i]),
                    i.options.accessibility === !0 && i.initADA(),
                    i.options.autoplay && (i.paused = !1,
                        i.autoPlay())
            }
            ,
            t.prototype.initADA = function () {
                var t = this
                    , i = Math.ceil(t.slideCount / t.options.slidesToShow)
                    , n = t.getNavigableIndexes().filter(function (e) {
                        return e >= 0 && e < t.slideCount
                    });
                t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
                    "aria-hidden": "true",
                    tabindex: "-1"
                }).find("a, input, button, select").attr({
                    tabindex: "-1"
                }),
                    null !== t.$dots && (t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function (i) {
                        var s = n.indexOf(i);
                        if (e(this).attr({
                            role: "tabpanel",
                            id: "slick-slide" + t.instanceUid + i,
                            tabindex: -1
                        }),
                            -1 !== s) {
                            var a = "slick-slide-control" + t.instanceUid + s;
                            e("#" + a).length && e(this).attr({
                                "aria-describedby": a
                            })
                        }
                    }),
                        t.$dots.attr("role", "tablist").find("li").each(function (s) {
                            var a = n[s];
                            e(this).attr({
                                role: "presentation"
                            }),
                                e(this).find("button").first().attr({
                                    role: "tab",
                                    id: "slick-slide-control" + t.instanceUid + s,
                                    "aria-controls": "slick-slide" + t.instanceUid + a,
                                    "aria-label": s + 1 + " of " + i,
                                    "aria-selected": null,
                                    tabindex: "-1"
                                })
                        }).eq(t.currentSlide).find("button").attr({
                            "aria-selected": "true",
                            tabindex: "0"
                        }).end());
                for (var s = t.currentSlide, a = s + t.options.slidesToShow; a > s; s++)
                    t.options.focusOnChange ? t.$slides.eq(s).attr({
                        tabindex: "0"
                    }) : t.$slides.eq(s).removeAttr("tabindex");
                t.activateADA()
            }
            ,
            t.prototype.initArrowEvents = function () {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
                    message: "previous"
                }, e.changeSlide),
                    e.$nextArrow.off("click.slick").on("click.slick", {
                        message: "next"
                    }, e.changeSlide),
                    e.options.accessibility === !0 && (e.$prevArrow.on("keydown.slick", e.keyHandler),
                        e.$nextArrow.on("keydown.slick", e.keyHandler)))
            }
            ,
            t.prototype.initDotEvents = function () {
                var t = this;
                t.options.dots === !0 && t.slideCount > t.options.slidesToShow && (e("li", t.$dots).on("click.slick", {
                    message: "index"
                }, t.changeSlide),
                    t.options.accessibility === !0 && t.$dots.on("keydown.slick", t.keyHandler)),
                    t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
            }
            ,
            t.prototype.initSlideEvents = function () {
                var t = this;
                t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)),
                    t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
            }
            ,
            t.prototype.initializeEvents = function () {
                var t = this;
                t.initArrowEvents(),
                    t.initDotEvents(),
                    t.initSlideEvents(),
                    t.$list.on("touchstart.slick mousedown.slick", {
                        action: "start"
                    }, t.swipeHandler),
                    t.$list.on("touchmove.slick mousemove.slick", {
                        action: "move"
                    }, t.swipeHandler),
                    t.$list.on("touchend.slick mouseup.slick", {
                        action: "end"
                    }, t.swipeHandler),
                    t.$list.on("touchcancel.slick mouseleave.slick", {
                        action: "end"
                    }, t.swipeHandler),
                    t.$list.on("click.slick", t.clickHandler),
                    e(document).on(t.visibilityChange, e.proxy(t.visibility, t)),
                    t.options.accessibility === !0 && t.$list.on("keydown.slick", t.keyHandler),
                    t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)),
                    e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)),
                    e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault),
                    e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition),
                    e(t.setPosition)
            }
            ,
            t.prototype.initUI = function () {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(),
                    e.$nextArrow.show()),
                    e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show()
            }
            ,
            t.prototype.keyHandler = function (e) {
                var t = this;
                e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
                    data: {
                        message: t.options.rtl === !0 ? "next" : "previous"
                    }
                }) : 39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
                    data: {
                        message: t.options.rtl === !0 ? "previous" : "next"
                    }
                }))
            }
            ,
            t.prototype.lazyLoad = function () {
                function t(t) {
                    e("img[data-lazy]", t).each(function () {
                        var t = e(this)
                            , i = e(this).attr("data-lazy")
                            , n = e(this).attr("data-srcset")
                            , s = e(this).attr("data-sizes") || r.$slider.attr("data-sizes")
                            , a = document.createElement("img");
                        a.onload = function () {
                            t.animate({
                                opacity: 0
                            }, 100, function () {
                                n && (t.attr("srcset", n),
                                    s && t.attr("sizes", s)),
                                    t.attr("src", i).animate({
                                        opacity: 1
                                    }, 200, function () {
                                        t.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                                    }),
                                    r.$slider.trigger("lazyLoaded", [r, t, i])
                            })
                        }
                            ,
                            a.onerror = function () {
                                t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                                    r.$slider.trigger("lazyLoadError", [r, t, i])
                            }
                            ,
                            a.src = i
                    })
                }
                var i, n, s, a, r = this;
                if (r.options.centerMode === !0 ? r.options.infinite === !0 ? (s = r.currentSlide + (r.options.slidesToShow / 2 + 1),
                    a = s + r.options.slidesToShow + 2) : (s = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)),
                        a = 2 + (r.options.slidesToShow / 2 + 1) + r.currentSlide) : (s = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide,
                            a = Math.ceil(s + r.options.slidesToShow),
                            r.options.fade === !0 && (s > 0 && s--,
                                a <= r.slideCount && a++)),
                    i = r.$slider.find(".slick-slide").slice(s, a),
                    "anticipated" === r.options.lazyLoad)
                    for (var o = s - 1, l = a, c = r.$slider.find(".slick-slide"), d = 0; d < r.options.slidesToScroll; d++)
                        0 > o && (o = r.slideCount - 1),
                            i = i.add(c.eq(o)),
                            i = i.add(c.eq(l)),
                            o--,
                            l++;
                t(i),
                    r.slideCount <= r.options.slidesToShow ? (n = r.$slider.find(".slick-slide"),
                        t(n)) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? (n = r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow),
                            t(n)) : 0 === r.currentSlide && (n = r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow),
                                t(n))
            }
            ,
            t.prototype.loadSlider = function () {
                var e = this;
                e.setPosition(),
                    e.$slideTrack.css({
                        opacity: 1
                    }),
                    e.$slider.removeClass("slick-loading"),
                    e.initUI(),
                    "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
            }
            ,
            t.prototype.next = t.prototype.slickNext = function () {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "next"
                    }
                })
            }
            ,
            t.prototype.orientationChange = function () {
                var e = this;
                e.checkResponsive(),
                    e.setPosition()
            }
            ,
            t.prototype.pause = t.prototype.slickPause = function () {
                var e = this;
                e.autoPlayClear(),
                    e.paused = !0
            }
            ,
            t.prototype.play = t.prototype.slickPlay = function () {
                var e = this;
                e.autoPlay(),
                    e.options.autoplay = !0,
                    e.paused = !1,
                    e.focussed = !1,
                    e.interrupted = !1
            }
            ,
            t.prototype.postSlide = function (t) {
                var i = this;
                if (!i.unslicked && (i.$slider.trigger("afterChange", [i, t]),
                    i.animating = !1,
                    i.slideCount > i.options.slidesToShow && i.setPosition(),
                    i.swipeLeft = null,
                    i.options.autoplay && i.autoPlay(),
                    i.options.accessibility === !0 && (i.initADA(),
                        i.options.focusOnChange))) {
                    var n = e(i.$slides.get(i.currentSlide));
                    n.attr("tabindex", 0).focus()
                }
            }
            ,
            t.prototype.prev = t.prototype.slickPrev = function () {
                var e = this;
                e.changeSlide({
                    data: {
                        message: "previous"
                    }
                })
            }
            ,
            t.prototype.preventDefault = function (e) {
                e.preventDefault()
            }
            ,
            t.prototype.progressiveLazyLoad = function (t) {
                t = t || 1;
                var i, n, s, a, r, o = this, l = e("img[data-lazy]", o.$slider);
                l.length ? (i = l.first(),
                    n = i.attr("data-lazy"),
                    s = i.attr("data-srcset"),
                    a = i.attr("data-sizes") || o.$slider.attr("data-sizes"),
                    r = document.createElement("img"),
                    r.onload = function () {
                        s && (i.attr("srcset", s),
                            a && i.attr("sizes", a)),
                            i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                            o.options.adaptiveHeight === !0 && o.setPosition(),
                            o.$slider.trigger("lazyLoaded", [o, i, n]),
                            o.progressiveLazyLoad()
                    }
                    ,
                    r.onerror = function () {
                        3 > t ? setTimeout(function () {
                            o.progressiveLazyLoad(t + 1)
                        }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                            o.$slider.trigger("lazyLoadError", [o, i, n]),
                            o.progressiveLazyLoad())
                    }
                    ,
                    r.src = n) : o.$slider.trigger("allImagesLoaded", [o])
            }
            ,
            t.prototype.refresh = function (t) {
                var i, n, s = this;
                n = s.slideCount - s.options.slidesToShow,
                    !s.options.infinite && s.currentSlide > n && (s.currentSlide = n),
                    s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
                    i = s.currentSlide,
                    s.destroy(!0),
                    e.extend(s, s.initials, {
                        currentSlide: i
                    }),
                    s.init(),
                    t || s.changeSlide({
                        data: {
                            message: "index",
                            index: i
                        }
                    }, !1)
            }
            ,
            t.prototype.registerBreakpoints = function () {
                var t, i, n, s = this, a = s.options.responsive || null;
                if ("array" === e.type(a) && a.length) {
                    s.respondTo = s.options.respondTo || "window";
                    for (t in a)
                        if (n = s.breakpoints.length - 1,
                            a.hasOwnProperty(t)) {
                            for (i = a[t].breakpoint; n >= 0;)
                                s.breakpoints[n] && s.breakpoints[n] === i && s.breakpoints.splice(n, 1),
                                    n--;
                            s.breakpoints.push(i),
                                s.breakpointSettings[i] = a[t].settings
                        }
                    s.breakpoints.sort(function (e, t) {
                        return s.options.mobileFirst ? e - t : t - e
                    })
                }
            }
            ,
            t.prototype.reinit = function () {
                var t = this;
                t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"),
                    t.slideCount = t.$slides.length,
                    t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll),
                    t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0),
                    t.registerBreakpoints(),
                    t.setProps(),
                    t.setupInfinite(),
                    t.buildArrows(),
                    t.updateArrows(),
                    t.initArrowEvents(),
                    t.buildDots(),
                    t.updateDots(),
                    t.initDotEvents(),
                    t.cleanUpSlideEvents(),
                    t.initSlideEvents(),
                    t.checkResponsive(!1, !0),
                    t.options.focusOnSelect === !0 && e(t.$slideTrack).children().on("click.slick", t.selectHandler),
                    t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0),
                    t.setPosition(),
                    t.focusHandler(),
                    t.paused = !t.options.autoplay,
                    t.autoPlay(),
                    t.$slider.trigger("reInit", [t])
            }
            ,
            t.prototype.resize = function () {
                var t = this;
                e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay),
                    t.windowDelay = window.setTimeout(function () {
                        t.windowWidth = e(window).width(),
                            t.checkResponsive(),
                            t.unslicked || t.setPosition()
                    }, 50))
            }
            ,
            t.prototype.removeSlide = t.prototype.slickRemove = function (e, t, i) {
                var n = this;
                return "boolean" == typeof e ? (t = e,
                    e = t === !0 ? 0 : n.slideCount - 1) : e = t === !0 ? --e : e,
                    !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(),
                        i === !0 ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(),
                        n.$slides = n.$slideTrack.children(this.options.slide),
                        n.$slideTrack.children(this.options.slide).detach(),
                        n.$slideTrack.append(n.$slides),
                        n.$slidesCache = n.$slides,
                        void n.reinit())
            }
            ,
            t.prototype.setCSS = function (e) {
                var t, i, n = this, s = {};
                n.options.rtl === !0 && (e = -e),
                    t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px",
                    i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px",
                    s[n.positionProp] = e,
                    n.transformsEnabled === !1 ? n.$slideTrack.css(s) : (s = {},
                        n.cssTransitions === !1 ? (s[n.animType] = "translate(" + t + ", " + i + ")",
                            n.$slideTrack.css(s)) : (s[n.animType] = "translate3d(" + t + ", " + i + ", 0px)",
                                n.$slideTrack.css(s)))
            }
            ,
            t.prototype.setDimensions = function () {
                var e = this;
                e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
                    padding: "0px " + e.options.centerPadding
                }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow),
                    e.options.centerMode === !0 && e.$list.css({
                        padding: e.options.centerPadding + " 0px"
                    })),
                    e.listWidth = e.$list.width(),
                    e.listHeight = e.$list.height(),
                    e.options.vertical === !1 && e.options.variableWidth === !1 ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow),
                        e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : e.options.variableWidth === !0 ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth),
                            e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
                var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
                e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
            }
            ,
            t.prototype.setFade = function () {
                var t, i = this;
                i.$slides.each(function (n, s) {
                    t = i.slideWidth * n * -1,
                        i.options.rtl === !0 ? e(s).css({
                            position: "relative",
                            right: t,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        }) : e(s).css({
                            position: "relative",
                            left: t,
                            top: 0,
                            zIndex: i.options.zIndex - 2,
                            opacity: 0
                        })
                }),
                    i.$slides.eq(i.currentSlide).css({
                        zIndex: i.options.zIndex - 1,
                        opacity: 1
                    })
            }
            ,
            t.prototype.setHeight = function () {
                var e = this;
                if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
                    var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
                    e.$list.css("height", t)
                }
            }
            ,
            t.prototype.setOption = t.prototype.slickSetOption = function () {
                var t, i, n, s, a, r = this, o = !1;
                if ("object" === e.type(arguments[0]) ? (n = arguments[0],
                    o = arguments[1],
                    a = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0],
                        s = arguments[1],
                        o = arguments[2],
                        "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? a = "responsive" : "undefined" != typeof arguments[1] && (a = "single")),
                    "single" === a)
                    r.options[n] = s;
                else if ("multiple" === a)
                    e.each(n, function (e, t) {
                        r.options[e] = t
                    });
                else if ("responsive" === a)
                    for (i in s)
                        if ("array" !== e.type(r.options.responsive))
                            r.options.responsive = [s[i]];
                        else {
                            for (t = r.options.responsive.length - 1; t >= 0;)
                                r.options.responsive[t].breakpoint === s[i].breakpoint && r.options.responsive.splice(t, 1),
                                    t--;
                            r.options.responsive.push(s[i])
                        }
                o && (r.unload(),
                    r.reinit())
            }
            ,
            t.prototype.setPosition = function () {
                var e = this;
                e.setDimensions(),
                    e.setHeight(),
                    e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(),
                    e.$slider.trigger("setPosition", [e])
            }
            ,
            t.prototype.setProps = function () {
                var e = this
                    , t = document.body.style;
                e.positionProp = e.options.vertical === !0 ? "top" : "left",
                    "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"),
                    void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || e.options.useCSS === !0 && (e.cssTransitions = !0),
                    e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex),
                    void 0 !== t.OTransform && (e.animType = "OTransform",
                        e.transformType = "-o-transform",
                        e.transitionType = "OTransition",
                        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.MozTransform && (e.animType = "MozTransform",
                        e.transformType = "-moz-transform",
                        e.transitionType = "MozTransition",
                        void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)),
                    void 0 !== t.webkitTransform && (e.animType = "webkitTransform",
                        e.transformType = "-webkit-transform",
                        e.transitionType = "webkitTransition",
                        void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)),
                    void 0 !== t.msTransform && (e.animType = "msTransform",
                        e.transformType = "-ms-transform",
                        e.transitionType = "msTransition",
                        void 0 === t.msTransform && (e.animType = !1)),
                    void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform",
                        e.transformType = "transform",
                        e.transitionType = "transition"),
                    e.transformsEnabled = e.options.useTransform && null !== e.animType && e.animType !== !1
            }
            ,
            t.prototype.setSlideClasses = function (e) {
                var t, i, n, s, a = this;
                if (i = a.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
                    a.$slides.eq(e).addClass("slick-current"),
                    a.options.centerMode === !0) {
                    var r = a.options.slidesToShow % 2 === 0 ? 1 : 0;
                    t = Math.floor(a.options.slidesToShow / 2),
                        a.options.infinite === !0 && (e >= t && e <= a.slideCount - 1 - t ? a.$slides.slice(e - t + r, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = a.options.slidesToShow + e,
                            i.slice(n - t + 1 + r, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")),
                            0 === e ? i.eq(i.length - 1 - a.options.slidesToShow).addClass("slick-center") : e === a.slideCount - 1 && i.eq(a.options.slidesToShow).addClass("slick-center")),
                        a.$slides.eq(e).addClass("slick-center")
                } else
                    e >= 0 && e <= a.slideCount - a.options.slidesToShow ? a.$slides.slice(e, e + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= a.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = a.slideCount % a.options.slidesToShow,
                        n = a.options.infinite === !0 ? a.options.slidesToShow + e : e,
                        a.options.slidesToShow == a.options.slidesToScroll && a.slideCount - e < a.options.slidesToShow ? i.slice(n - (a.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + a.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
                "ondemand" !== a.options.lazyLoad && "anticipated" !== a.options.lazyLoad || a.lazyLoad()
            }
            ,
            t.prototype.setupInfinite = function () {
                var t, i, n, s = this;
                if (s.options.fade === !0 && (s.options.centerMode = !1),
                    s.options.infinite === !0 && s.options.fade === !1 && (i = null,
                        s.slideCount > s.options.slidesToShow)) {
                    for (n = s.options.centerMode === !0 ? s.options.slidesToShow + 1 : s.options.slidesToShow,
                        t = s.slideCount; t > s.slideCount - n; t -= 1)
                        i = t - 1,
                            e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
                    for (t = 0; t < n + s.slideCount; t += 1)
                        i = t,
                            e(s.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
                    s.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                        e(this).attr("id", "")
                    })
                }
            }
            ,
            t.prototype.interrupt = function (e) {
                var t = this;
                e || t.autoPlay(),
                    t.interrupted = e
            }
            ,
            t.prototype.selectHandler = function (t) {
                var i = this
                    , n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide")
                    , s = parseInt(n.attr("data-slick-index"));
                return s || (s = 0),
                    i.slideCount <= i.options.slidesToShow ? void i.slideHandler(s, !1, !0) : void i.slideHandler(s)
            }
            ,
            t.prototype.slideHandler = function (e, t, i) {
                var n, s, a, r, o, l = null, c = this;
                return t = t || !1,
                    c.animating === !0 && c.options.waitForAnimate === !0 || c.options.fade === !0 && c.currentSlide === e ? void 0 : (t === !1 && c.asNavFor(e),
                        n = e,
                        l = c.getLeft(n),
                        r = c.getLeft(c.currentSlide),
                        c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft,
                        c.options.infinite === !1 && c.options.centerMode === !1 && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void (c.options.fade === !1 && (n = c.currentSlide,
                            i !== !0 && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function () {
                                c.postSlide(n)
                            }) : c.postSlide(n))) : c.options.infinite === !1 && c.options.centerMode === !0 && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void (c.options.fade === !1 && (n = c.currentSlide,
                                i !== !0 && c.slideCount > c.options.slidesToShow ? c.animateSlide(r, function () {
                                    c.postSlide(n)
                                }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer),
                                    s = 0 > n ? c.slideCount % c.options.slidesToScroll !== 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll !== 0 ? 0 : n - c.slideCount : n,
                                    c.animating = !0,
                                    c.$slider.trigger("beforeChange", [c, c.currentSlide, s]),
                                    a = c.currentSlide,
                                    c.currentSlide = s,
                                    c.setSlideClasses(c.currentSlide),
                                    c.options.asNavFor && (o = c.getNavTarget(),
                                        o = o.slick("getSlick"),
                                        o.slideCount <= o.options.slidesToShow && o.setSlideClasses(c.currentSlide)),
                                    c.updateDots(),
                                    c.updateArrows(),
                                    c.options.fade === !0 ? (i !== !0 ? (c.fadeSlideOut(a),
                                        c.fadeSlide(s, function () {
                                            c.postSlide(s)
                                        })) : c.postSlide(s),
                                        void c.animateHeight()) : void (i !== !0 && c.slideCount > c.options.slidesToShow ? c.animateSlide(l, function () {
                                            c.postSlide(s)
                                        }) : c.postSlide(s))))
            }
            ,
            t.prototype.startLoad = function () {
                var e = this;
                e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(),
                    e.$nextArrow.hide()),
                    e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(),
                    e.$slider.addClass("slick-loading")
            }
            ,
            t.prototype.swipeDirection = function () {
                var e, t, i, n, s = this;
                return e = s.touchObject.startX - s.touchObject.curX,
                    t = s.touchObject.startY - s.touchObject.curY,
                    i = Math.atan2(t, e),
                    n = Math.round(180 * i / Math.PI),
                    0 > n && (n = 360 - Math.abs(n)),
                    45 >= n && n >= 0 ? s.options.rtl === !1 ? "left" : "right" : 360 >= n && n >= 315 ? s.options.rtl === !1 ? "left" : "right" : n >= 135 && 225 >= n ? s.options.rtl === !1 ? "right" : "left" : s.options.verticalSwiping === !0 ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
            }
            ,
            t.prototype.swipeEnd = function (e) {
                var t, i, n = this;
                if (n.dragging = !1,
                    n.swiping = !1,
                    n.scrolling)
                    return n.scrolling = !1,
                        !1;
                if (n.interrupted = !1,
                    n.shouldClick = !(n.touchObject.swipeLength > 10),
                    void 0 === n.touchObject.curX)
                    return !1;
                if (n.touchObject.edgeHit === !0 && n.$slider.trigger("edge", [n, n.swipeDirection()]),
                    n.touchObject.swipeLength >= n.touchObject.minSwipe) {
                    switch (i = n.swipeDirection()) {
                        case "left":
                        case "down":
                            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(),
                                n.currentDirection = 0;
                            break;
                        case "right":
                        case "up":
                            t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(),
                                n.currentDirection = 1
                    }
                    "vertical" != i && (n.slideHandler(t),
                        n.touchObject = {},
                        n.$slider.trigger("swipe", [n, i]))
                } else
                    n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide),
                        n.touchObject = {})
            }
            ,
            t.prototype.swipeHandler = function (e) {
                var t = this;
                if (!(t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1 || t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")))
                    switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1,
                    t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold,
                    t.options.verticalSwiping === !0 && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold),
                    e.data.action) {
                        case "start":
                            t.swipeStart(e);
                            break;
                        case "move":
                            t.swipeMove(e);
                            break;
                        case "end":
                            t.swipeEnd(e)
                    }
            }
            ,
            t.prototype.swipeMove = function (e) {
                var t, i, n, s, a, r, o = this;
                return a = void 0 !== e.originalEvent ? e.originalEvent.touches : null,
                    !(!o.dragging || o.scrolling || a && 1 !== a.length) && (t = o.getLeft(o.currentSlide),
                        o.touchObject.curX = void 0 !== a ? a[0].pageX : e.clientX,
                        o.touchObject.curY = void 0 !== a ? a[0].pageY : e.clientY,
                        o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))),
                        r = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2))),
                        !o.options.verticalSwiping && !o.swiping && r > 4 ? (o.scrolling = !0,
                            !1) : (o.options.verticalSwiping === !0 && (o.touchObject.swipeLength = r),
                                i = o.swipeDirection(),
                                void 0 !== e.originalEvent && o.touchObject.swipeLength > 4 && (o.swiping = !0,
                                    e.preventDefault()),
                                s = (o.options.rtl === !1 ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1),
                                o.options.verticalSwiping === !0 && (s = o.touchObject.curY > o.touchObject.startY ? 1 : -1),
                                n = o.touchObject.swipeLength,
                                o.touchObject.edgeHit = !1,
                                o.options.infinite === !1 && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction,
                                    o.touchObject.edgeHit = !0),
                                o.options.vertical === !1 ? o.swipeLeft = t + n * s : o.swipeLeft = t + n * (o.$list.height() / o.listWidth) * s,
                                o.options.verticalSwiping === !0 && (o.swipeLeft = t + n * s),
                                o.options.fade !== !0 && o.options.touchMove !== !1 && (o.animating === !0 ? (o.swipeLeft = null,
                                    !1) : void o.setCSS(o.swipeLeft))))
            }
            ,
            t.prototype.swipeStart = function (e) {
                var t, i = this;
                return i.interrupted = !0,
                    1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {},
                        !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]),
                            i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX,
                            i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY,
                            void (i.dragging = !0))
            }
            ,
            t.prototype.unfilterSlides = t.prototype.slickUnfilter = function () {
                var e = this;
                null !== e.$slidesCache && (e.unload(),
                    e.$slideTrack.children(this.options.slide).detach(),
                    e.$slidesCache.appendTo(e.$slideTrack),
                    e.reinit())
            }
            ,
            t.prototype.unload = function () {
                var t = this;
                e(".slick-cloned", t.$slider).remove(),
                    t.$dots && t.$dots.remove(),
                    t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(),
                    t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(),
                    t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
            }
            ,
            t.prototype.unslick = function (e) {
                var t = this;
                t.$slider.trigger("unslick", [t, e]),
                    t.destroy()
            }
            ,
            t.prototype.updateArrows = function () {
                var e, t = this;
                e = Math.floor(t.options.slidesToShow / 2),
                    t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                        0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                            t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
                                    t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
            }
            ,
            t.prototype.updateDots = function () {
                var e = this;
                null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").end(),
                    e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active"))
            }
            ,
            t.prototype.visibility = function () {
                var e = this;
                e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
            }
            ,
            e.fn.slick = function () {
                var e, i, n = this, s = arguments[0], a = Array.prototype.slice.call(arguments, 1), r = n.length;
                for (e = 0; r > e; e++)
                    if ("object" == typeof s || "undefined" == typeof s ? n[e].slick = new t(n[e], s) : i = n[e].slick[s].apply(n[e].slick, a),
                        "undefined" != typeof i)
                        return i;
                return n
            }
    }),
    function (e) {
        function t(e) {
            return String(null === e || void 0 === e ? "" : e)
        }
        function i(e) {
            return t(e).replace(l, function (e) {
                return o[e]
            })
        }
        var n = {
            method: "GET",
            queryParam: "q",
            searchDelay: 300,
            minChars: 2,
            propertyToSearch: "name",
            jsonContainer: null,
            contentType: "json",
            prePopulate: null,
            processPrePopulate: !1,
            hintText: "Type in a search term",
            noResultsText: "No results",
            searchingText: "Searching...",
            deleteText: "",
            animateDropdown: !0,
            placeholder: null,
            theme: null,
            zindex: 999,
            resultsLimit: null,
            itemGrouper: null,
            groupKey: "group",
            enableHTML: !0,
            resultsFormatter: function (e) {
                var t = e[this.propertyToSearch];
                return "<li>" + (this.enableHTML ? t : i(t)) + "</li>"
            },
            tokenFormatter: function (e) {
                var t = e[this.propertyToSearch];
                return "<li><p>" + (this.enableHTML ? t : i(t)) + "</p></li>"
            },
            tokenLimit: null,
            tokenDelimiter: ",",
            preventDuplicates: !1,
            tokenValue: "id",
            allowFreeTagging: !1,
            allowTabOut: !1,
            submitOnEnter: !0,
            onResult: null,
            onCachedResult: null,
            onAdd: null,
            onFreeTaggingAdd: null,
            onDelete: null,
            onReady: null,
            idPrefix: "token-input-",
            disabled: !1
        }
            , s = {
                tokenList: "c-tokenize__list",
                token: "c-tokenize__token",
                tokenDelete: "c-tokenize__token-delete",
                selectedToken: "c-tokenize__token--selected",
                highlightedToken: "c-tokenize__token--highlighted",
                dropdown: "c-tokenize__dropdown",
                dropdownItem: "c-tokenize__dropdown-item",
                dropdownItem2: "c-tokenize__dropdown-item-2",
                selectedDropdownItem: "c-tokenize__dropdown-item--selected",
                inputToken: "c-tokenize__input-token",
                focused: "c-tokenize__token-input-focused",
                disabled: "c-tokenize__token-input-disabled",
                itemGroup: "c-tokenize__dropdown-item-group"
            }
            , a = {
                BEFORE: 0,
                AFTER: 1,
                END: 2
            }
            , r = {
                BACKSPACE: 8,
                TAB: 9,
                ENTER: 13,
                ESCAPE: 27,
                SPACE: 32,
                PAGE_UP: 33,
                PAGE_DOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40,
                NUMPAD_ENTER: 108,
                COMMA: 188
            }
            , o = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "/": "&#x2F;"
            }
            , l = /[&<>"'\/]/g
            , c = {
                init: function (t, i) {
                    var s = e.extend({}, n, i || {});
                    return this.each(function () {
                        e(this).data("settings", s),
                            e(this).data("tokenInputObject", new e.TokenList(this, t, s))
                    })
                },
                clear: function () {
                    return this.data("tokenInputObject").clear(),
                        this
                },
                add: function (e) {
                    return this.data("tokenInputObject").add(e),
                        this
                },
                remove: function (e) {
                    return this.data("tokenInputObject").remove(e),
                        this
                },
                get: function () {
                    return this.data("tokenInputObject").getTokens()
                },
                toggleDisabled: function (e) {
                    return this.data("tokenInputObject").toggleDisabled(e),
                        this
                },
                setOptions: function (t) {
                    return e(this).data("settings", e.extend({}, e(this).data("settings"), t || {})),
                        this
                },
                destroy: function () {
                    if (this.data("tokenInputObject")) {
                        this.data("tokenInputObject").clear();
                        var e = this
                            , t = this.parent();
                        return t.empty(),
                            e.show(),
                            t.append(e),
                            e
                    }
                }
            };
        e.fn.tokenInput = function (e) {
            return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : c.init.apply(this, arguments)
        }
            ,
            e.TokenList = function (t, n, o) {
                function l(n) {
                    return e(t).data("settings").enableHTML ? n : i(n)
                }
                function c(i) {
                    "boolean" == typeof i ? e(t).data("settings").disabled = i : e(t).data("settings").disabled = !e(t).data("settings").disabled,
                        q.attr("disabled", e(t).data("settings").disabled),
                        Z.toggleClass(e(t).data("settings").classes.disabled, e(t).data("settings").disabled),
                        G && m(e(G), a.END),
                        X.attr("disabled", e(t).data("settings").disabled)
                }
                function d() {
                    return null !== e(t).data("settings").tokenLimit && B >= e(t).data("settings").tokenLimit ? (q.hide(),
                        void x()) : void 0
                }
                function u() {
                    if (F !== (F = q.val())) {
                        Z.width() - q.offset().left - Z.offset().left;
                        ee.html(i(F) || i(e(t).data("settings").placeholder)),
                            q.width(ee.width() + 30)
                    }
                }
                function h() {
                    var i = e.trim(q.val())
                        , n = i.split(e(t).data("settings").tokenDelimiter);
                    e.each(n, function (i, n) {
                        if (n) {
                            e.isFunction(e(t).data("settings").onFreeTaggingAdd) && (n = e(t).data("settings").onFreeTaggingAdd.call(X, n));
                            var s = {};
                            s[e(t).data("settings").tokenValue] = s[e(t).data("settings").propertyToSearch] = n,
                                f(s)
                        }
                    })
                }
                function p(i) {
                    var n = e(e(t).data("settings").tokenFormatter(i))
                        , s = i.readonly === !0 ? !0 : !1;
                    s && n.addClass(e(t).data("settings").classes.tokenReadOnly),
                        n.addClass(e(t).data("settings").classes.token).insertBefore(Q),
                        s || e("<span>" + e(t).data("settings").deleteText + "</span>").addClass(e(t).data("settings").classes.tokenDelete).appendTo(n).click(function () {
                            return y(e(this).parent()),
                                !1
                        });
                    var a = i;
                    return e.data(n.get(0), "tokeninput", i),
                        W = W.slice(0, U).concat([a]).concat(W.slice(U)),
                        U++,
                        b(W, X),
                        B += 1,
                        null !== e(t).data("settings").tokenLimit && B >= e(t).data("settings").tokenLimit && (q.hide(),
                            x()),
                        n
                }
                function f(i) {
                    var n = e(t).data("settings").onAdd;
                    if (i.id && i.id.startsWith("ADR")) {
                        var s = ""
                            , a = window.location.href;
                        return s = a.includes("admin") ? "/admin/properties/" + i.id.split("/").pop() : i.id.substring(3),
                            "undefined" != typeof propertybaseEmbed && propertybaseEmbed && (s += "?embed=propertybase"),
                            window.location.href = s,
                            R = !0,
                            q.prop("disabled", !0).attr("placeholder", "Loading Property Details...").val(""),
                            x(),
                            !1
                    }
                    if (B > 0 && e(t).data("settings").preventDuplicates) {
                        var r = null;
                        if (Z.children().each(function () {
                            var n = e(this)
                                , s = e.data(n.get(0), "tokeninput");
                            return s && s[e(t).data("settings").tokenValue] === i[e(t).data("settings").tokenValue] ? (r = n,
                                !1) : void 0
                        }),
                            r)
                            return g(r),
                                Q.insertAfter(r),
                                void z(q)
                    }
                    q.width(0),
                        (null == e(t).data("settings").tokenLimit || B < e(t).data("settings").tokenLimit) && (p(i),
                            q.attr("placeholder", null),
                            d()),
                        q.val(""),
                        x(),
                        e.isFunction(n) && n.call(X, i)
                }
                function g(i) {
                    e(t).data("settings").disabled || (i.addClass(e(t).data("settings").classes.selectedToken),
                        G = i.get(0),
                        q.val(""),
                        x())
                }
                function m(i, n) {
                    i.removeClass(e(t).data("settings").classes.selectedToken),
                        G = null,
                        n === a.BEFORE ? (Q.insertBefore(i),
                            U--) : n === a.AFTER ? (Q.insertAfter(i),
                                U++) : (Q.appendTo(Z),
                                    U = B),
                        z(q)
                }
                function v(t) {
                    var i = G;
                    G && m(e(G), a.END),
                        i === t.get(0) ? m(t, a.END) : g(t)
                }
                function y(i) {
                    var n = e.data(i.get(0), "tokeninput")
                        , s = e(t).data("settings").onDelete
                        , a = i.prevAll().length;
                    a > U && a--,
                        i.remove(),
                        G = null,
                        z(q),
                        W = W.slice(0, a).concat(W.slice(a + 1)),
                        0 == W.length && q.attr("placeholder", e(t).data("settings").placeholder),
                        U > a && U--,
                        b(W, X),
                        B -= 1,
                        null !== e(t).data("settings").tokenLimit && (q.show().val(""),
                            z(q)),
                        e.isFunction(s) && s.call(X, n)
                }
                function b(i, n) {
                    var s = e.map(i, function (i) {
                        return "function" == typeof e(t).data("settings").tokenValue ? e(t).data("settings").tokenValue.call(this, i) : i[e(t).data("settings").tokenValue]
                    });
                    n.val(s.join(e(t).data("settings").tokenDelimiter))
                }
                function x() {
                    J.hide().empty(),
                        K = null
                }
                function w() {
                    J.css({
                        position: "absolute",
                        top: Z.offset().top + Z.outerHeight(),
                        left: Z.offset().left,
                        width: Z.width(),
                        "z-index": e(t).data("settings").zindex
                    }).show()
                }
                function k() {
                    e(t).data("settings").searchingText && (J.html("<p>" + l(e(t).data("settings").searchingText) + "</p>"),
                        w())
                }
                function S() {
                    e(t).data("settings").hintText && (J.html("<p>" + l(e(t).data("settings").hintText) + "</p>"),
                        w())
                }
                function C(e) {
                    return e.replace(ie, "\\$&")
                }
                function T(e, t) {
                    return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + C(t) + ")(?![^<>]*>)(?![^&;]+;)", "gi"), function (e, t) {
                        return "<b>" + l(t) + "</b>"
                    })
                }
                function E(e, t, i) {
                    return e.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + C(t) + ")(?![^<>]*>)(?![^&;]+;)", "g"), T(t, i))
                }
                function A(i, n, s) {
                    var a = null;
                    e.each(n, function (n, r) {
                        e(t).data("settings").itemGrouper && (r = e(t).data("settings").itemGrouper(r));
                        var o = r[e(t).data("settings").groupKey];
                        o && o != a && (s.append(e("<lh />").text(o).addClass(e(t).data("settings").classes.itemGroup)),
                            a = o);
                        var l = e(t).data("settings").resultsFormatter(r);
                        l = E(l, r[e(t).data("settings").propertyToSearch], i),
                            l = e(l).appendTo(s),
                            n % 2 ? l.addClass(e(t).data("settings").classes.dropdownItem) : l.addClass(e(t).data("settings").classes.dropdownItem2),
                            e.data(l.get(0), "tokeninput", r)
                    })
                }
                function $(i, n) {
                    if (n && n.length) {
                        J.empty();
                        var s = e("<ul>").appendTo(J).mouseover(function (t) {
                            e(t.target).attr("class") && !e(t.target).attr("class").includes("group") && D(e(t.target).closest("li"))
                        }).mousedown(function (t) {
                            var i = e(t.target).closest("li").data("tokeninput");
                            return i && e(t.target).attr("class") && !e(t.target).attr("class").includes("group") && f(i),
                                !1
                        }).hide();
                        e(t).data("settings").resultsLimit && n.length > e(t).data("settings").resultsLimit && (n = n.slice(0, e(t).data("settings").resultsLimit)),
                            A(i, n, s),
                            w(),
                            e(t).data("settings").animateDropdown ? s.slideDown("fast") : s.show()
                    } else
                        e(t).data("settings").noResultsText && (J.html("<p>" + l(e(t).data("settings").noResultsText) + "</p>"),
                            w())
                }
                function D(i) {
                    i && (K && M(e(K)),
                        i.addClass(e(t).data("settings").classes.selectedDropdownItem),
                        K = i.get(0))
                }
                function M(i) {
                    i.removeClass(e(t).data("settings").classes.selectedDropdownItem),
                        K = null
                }
                function I() {
                    var i = q.val();
                    i && i.length && (G && m(e(G), a.AFTER),
                        i.length >= e(t).data("settings").minChars ? (k(),
                            clearTimeout(j),
                            j = setTimeout(function () {
                                P(i)
                            }, e(t).data("settings").searchDelay)) : x())
                }
                function P(i) {
                    var n = i + N()
                        , s = Y.get(n);
                    if (s)
                        e.isFunction(e(t).data("settings").onCachedResult) && (s = e(t).data("settings").onCachedResult.call(X, s)),
                            $(i, s);
                    else {
                        if (i.length > 1 && e(t).data("settings").url) {
                            var a = N()
                                , r = {};
                            if (r.data = {},
                                a.indexOf("?") > -1) {
                                var o = a.split("?");
                                r.url = o[0];
                                var l = o[1].split("&");
                                e.each(l, function (e, t) {
                                    var i = t.split("=");
                                    r.data[i[0]] = i[1]
                                })
                            } else
                                r.url = a;
                            r.data[e(t).data("settings").queryParam] = i,
                                r.type = e(t).data("settings").method,
                                r.dataType = e(t).data("settings").contentType,
                                e(t).data("settings").crossDomain && (r.dataType = "jsonp"),
                                r.success = function (s) {
                                    var a = e(t).data("settings").jsonContainer ? s[e(t).data("settings").jsonContainer] : s;
                                    L(_.sortBy(a, "name"), i, n)
                                }
                                ,
                                r.error = function () {
                                    L([], i, n)
                                }
                                ,
                                e(t).data("settings").onSend && e(t).data("settings").onSend(r),
                                e.ajax(r)
                        }
                        if (e(t).data("settings").local_data) {
                            var c = O(i);
                            Y.add(n, c),
                                e.isFunction(e(t).data("settings").onResult) && (c = e(t).data("settings").onResult.call(X, c)),
                                $(i, c)
                        }
                    }
                }
                function L(i, n, s) {
                    i.length > 0 && (e(t).data("settings").local_data && J.find("ul").length ? (localRes = O(n),
                        combinedRes = localRes.concat(i),
                        Y.add(s, combinedRes)) : Y.add(s, i),
                        e.isFunction(e(t).data("settings").onResult) && (i = e(t).data("settings").onResult.call(X, i)),
                        q.val() === n && (e(t).data("settings").local_data && J.find("ul").length ? (dropdown_ul = J.find("ul"),
                            A(n, i, dropdown_ul)) : $(n, i)))
                }
                function O(i) {
                    var n = e.grep(e(t).data("settings").local_data, function (n) {
                        return n[e(t).data("settings").propertyToSearch].toLowerCase().indexOf(i.toLowerCase()) > -1
                    });
                    return n
                }
                function N() {
                    var i = e(t).data("settings").url;
                    return "function" == typeof e(t).data("settings").url && (i = e(t).data("settings").url.call(e(t).data("settings"))),
                        i
                }
                function z(e) {
                    setTimeout(function () {
                        e.focus()
                    }, 50)
                }
                if (e(t).data("tokenInputInitialized"))
                    return !0;
                if (e(t).data("tokenInputInitialized", !0),
                    "string" === e.type(n) || "function" === e.type(n)) {
                    e(t).data("settings").url = n;
                    var H = N();
                    void 0 === e(t).data("settings").crossDomain && "string" == typeof H && (-1 === H.indexOf("://") ? e(t).data("settings").crossDomain = !1 : e(t).data("settings").crossDomain = location.href.split(/\/+/g)[1] !== H.split(/\/+/g)[1])
                } else
                    "object" == typeof n && (e(t).data("settings").local_data = n);
                e(t).data("settings").classes ? e(t).data("settings").classes = e.extend({}, s, e(t).data("settings").classes) : e(t).data("settings").theme ? (e(t).data("settings").classes = {},
                    e.each(s, function (i, n) {
                        e(t).data("settings").classes[i] = n + "-" + e(t).data("settings").theme
                    })) : e(t).data("settings").classes = s;
                var j, F, R, W = [], B = 0, Y = new e.TokenList.Cache, V = e(t).val(), q = e('<input type="text" autocomplete="off" autocapitalize="off" disabled="disabled" placeholder="' + e(t).data("settings").placeholderText + '">').css({
                    outline: "none"
                }).attr("id", e(t).data("settings").idPrefix + t.id).focus(function () {
                    return e(t).data("settings").disabled ? !1 : ((null === e(t).data("settings").tokenLimit || e(t).data("settings").tokenLimit !== B) && S(),
                        void Z.addClass(e(t).data("settings").classes.focused))
                }).blur(function () {
                    e(".token-input-dropdown-facebook:hover").length && e(".token-input-dropdown-facebook #radius_search_select").length && enableRadiusSearching(),
                        x(),
                        e(t).data("settings").allowFreeTagging && !R && h(),
                        e(this).val(""),
                        Z.removeClass(e(t).data("settings").classes.focused)
                }).bind("keyup keydown blur update", u).keydown(function (t) {
                    var i, n;
                    switch (t.keyCode) {
                        case r.LEFT:
                        case r.RIGHT:
                        case r.UP:
                        case r.DOWN:
                            if (e(this).val()) {
                                var s = null;
                                s = t.keyCode === r.DOWN || t.keyCode === r.RIGHT ? e(K).next() : e(K).prev(),
                                    s.length && D(s)
                            } else
                                i = Q.prev(),
                                    n = Q.next(),
                                    i.length && i.get(0) === G || n.length && n.get(0) === G ? t.keyCode === r.LEFT || t.keyCode === r.UP ? m(e(G), a.BEFORE) : m(e(G), a.AFTER) : t.keyCode !== r.LEFT && t.keyCode !== r.UP || !i.length ? t.keyCode !== r.RIGHT && t.keyCode !== r.DOWN || !n.length || g(e(n.get(0))) : g(e(i.get(0)));
                            return !1;
                        case r.BACKSPACE:
                            if (i = Q.prev(),
                                !e(this).val().length)
                                return G ? y(e(G)) : i.length && g(e(i.get(0))),
                                    !1;
                            1 === e(this).val().length ? x() : setTimeout(function () {
                                I()
                            }, 5);
                            break;
                        case r.TAB:
                        case r.ENTER:
                        case r.NUMPAD_ENTER:
                        case r.COMMA:
                        case r.KEYCODE_ENTER:
                        case 13:
                            if ((13 == t.keyCode || t.keyCode == r.KEYCODE_ENTER) && K && window.innerWidth < 768 && K == e(".token-input-dropdown-item2-facebook")[0] && M(e(K)),
                                K)
                                f(e(K).data("tokeninput"));
                            else {
                                if (o.allowFreeTagging)
                                    if (o.allowTabOut && "" === e(this).val())
                                        ;
                                    else if ("" == e(this).val()) {
                                        if (o.submitOnEnter && (13 == t.keyCode || t.keyCode == r.KEYCODE_ENTER)) {
                                            var l = this;
                                            setTimeout(function () {
                                                e(l).closest("form").submit()
                                            }, 500)
                                        }
                                    } else
                                        h();
                                else {
                                    if (e(this).val(""),
                                        o.allowTabOut)
                                        return !0;
                                    if (o.submitOnEnter && (13 == t.keyCode || t.keyCode == r.KEYCODE_ENTER)) {
                                        var l = this;
                                        setTimeout(function () {
                                            e(l).closest("form").submit()
                                        }, 500)
                                    }
                                }
                                t.stopPropagation(),
                                    t.preventDefault()
                            }
                            return !1;
                        case r.ESCAPE:
                            return x(),
                                !0;
                        default:
                            String.fromCharCode(t.which) && setTimeout(function () {
                                I()
                            }, 5)
                    }
                });
                e(t).data("settings").placeholder && q.attr("placeholder", e(t).data("settings").placeholder);
                var X = e(t).hide().val("").focus(function () {
                    z(q)
                }).blur(function () {
                    return q.blur(),
                        X
                })
                    , G = null
                    , U = 0
                    , K = null;
                e(t).is(":disabled") || setTimeout(function () {
                    q.removeAttr("disabled")
                }, 10);
                var Z = e("<ul />").addClass(e(t).data("settings").classes.tokenList).click(function (t) {
                    var i = e(t.target).closest("li");
                    i && i.get(0) && e.data(i.get(0), "tokeninput") ? v(i) : (G && m(e(G), a.END),
                        z(q))
                }).mouseover(function (i) {
                    var n = e(i.target).closest("li");
                    n && G !== this && n.addClass(e(t).data("settings").classes.highlightedToken)
                }).mouseout(function (i) {
                    var n = e(i.target).closest("li");
                    n && G !== this && n.removeClass(e(t).data("settings").classes.highlightedToken)
                }).insertBefore(X)
                    , Q = e("<li />").addClass(e(t).data("settings").classes.inputToken).appendTo(Z).append(q)
                    , J = e("<div>").addClass(e(t).data("settings").classes.dropdown).appendTo("body").hide()
                    , ee = e("<tester/>").insertAfter(q).css({
                        position: "absolute",
                        top: -9999,
                        left: -9999,
                        width: "auto",
                        fontSize: q.css("fontSize"),
                        fontFamily: q.css("fontFamily"),
                        fontWeight: q.css("fontWeight"),
                        letterSpacing: q.css("letterSpacing"),
                        whiteSpace: "nowrap"
                    });
                X.val("");
                var te = e(t).data("settings").prePopulate || X.data("pre");
                e(t).data("settings").processPrePopulate && e.isFunction(e(t).data("settings").onResult) && (te = e(t).data("settings").onResult.call(X, te)),
                    te && te.length && e.each(te, function (e, t) {
                        p(t),
                            d(),
                            q.attr("placeholder", null)
                    }),
                    e(t).data("settings").autoPopulate && e.each(V.split(","), function (i, n) {
                        var s = n
                            , a = !1;
                        if (e.each(e(t).data("settings").local_data, function (e, t) {
                            if (t.id === s) {
                                p(t);
                                d()
                            }
                        }),
                            !a && "" != s && e(t).data("settings").allowFreeTagging) {
                            var r = {};
                            r[e(t).data("settings").tokenValue] = r[e(t).data("settings").propertyToSearch] = s,
                                f(r)
                        }
                    }),
                    e(t).data("settings").disabled && c(!0),
                    e.isFunction(e(t).data("settings").onReady) && e(t).data("settings").onReady.call(),
                    this.clear = function () {
                        W = [],
                            Z.children("li").each(function () {
                                0 === e(this).children("input").length && y(e(this))
                            })
                    }
                    ,
                    this.add = function (e) {
                        f(e)
                    }
                    ,
                    this.remove = function (t) {
                        Z.children("li").each(function () {
                            if (0 === e(this).children("input").length) {
                                var i = e(this).data("tokeninput")
                                    , n = !0;
                                for (var s in t)
                                    if (t[s] !== i[s]) {
                                        n = !1;
                                        break
                                    }
                                n && y(e(this))
                            }
                        })
                    }
                    ,
                    this.getTokens = function () {
                        return W
                    }
                    ,
                    this.toggleDisabled = function (e) {
                        c(e)
                    }
                    ,
                    u();
                var ie = new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]", "g")
            }
            ,
            e.TokenList.Cache = function (t) {
                var i = e.extend({
                    max_size: 500
                }, t)
                    , n = {}
                    , s = 0
                    , a = function () {
                        n = {},
                            s = 0
                    };
                this.add = function (e, t) {
                    s > i.max_size && a(),
                        n[e] || (s += 1),
                        n[e] = t
                }
                    ,
                    this.get = function (e) {
                        return n[e]
                    }
            }
    }(jQuery),
    function (e, t, i) {
        e.fn.dropdownHoverTogle = function (i) {
            return this.each(function () {
                function n(i) {
                    a.attr("aria-expanded", "true");
                    var n = e(t).width() > settings.mobileSize ? settings.desktopShowAnimation : settings.mobileShowAnimation;
                    r.find("> .dropdown-menu").stop(!0, !0)[n]("fast"),
                        e(r).toggleClass("open"),
                        i.toggleClass("trigger-closed trigger-open")
                }
                function s(i) {
                    a.attr("aria-expanded", "false");
                    var n = e(t).width() > settings.mobileSize ? settings.desktopHideAnimation : settings.mobileHideAnimation;
                    e(".dropdown-menu", r).stop(!0, !0)[n]({
                        duration: "fast",
                        complete: function () {
                            e(r).toggleClass("open")
                        }
                    }),
                        i.toggleClass("trigger-closed trigger-open")
                }
                var a = e(this)
                    , r = a.parent()
                    , o = {
                        desktopShowAnimation: "fadeIn",
                        desktopHideAnimation: "fadeOut",
                        mobileShowAnimation: "slideDown",
                        mobileHideAnimation: "slideUp",
                        svg_string: "<svg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='18.1 171.2 100 100' enable-background='new 18.1 171.2 100 100' xml:space='preserve'><rect x='31.6' y='218.1' width='73.1' height='6.1'/></svg><svg version='1.1' id='Capa_1' class='slug-transform' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='18.1 171.2 100 100' enable-background='new 18.1 171.2 100 100' xml:space='preserve'><rect x='31.6' y='218.1' width='73.1' height='6.1'/></svg>",
                        mobileSize: 768
                    };
                settings = e.extend(!0, {}, o, i),
                    a.after("<span data-toggle='toggle-dropdown' class='dropdown-trigger trigger-closed hamburger-caret'>" + settings.svg_string + "</span>"),
                    a.hasClass("no-hover") || r.hover(function () {
                        e(t).width() > settings.mobileSize && n(a.find("+ span.dropdown-trigger"))
                    }, function () {
                        e(t).width() > settings.mobileSize && s(a.find("+ span.dropdown-trigger"))
                    }),
                    e('[data-toggle="toggle-dropdown"]', r).each(function () {
                        var i = e(this);
                        i.click(function () {
                            (e(t).width() <= settings.mobileSize || a.hasClass("no-hover")) && (i.hasClass("trigger-open") ? s(i) : n(i))
                        })
                    })
            })
        }
            ,
            e(document).ready(function () {
                "undefined" == typeof suppressDropdownsInit && e('[data-toggle="hover-dropdown"]').dropdownHoverTogle()
            })
    }(jQuery, window);
var _ga = _ga || {}
    , _gaq = _gaq || [];
_ga.getSocialActionTrackers_ = function (e, t, i, n) {
    return function () {
        ga("send", "social", e, t, i, {
            page: n
        }),
            ga("globalTracker.send", "social", e, t, i, {
                page: n
            })
    }
}
    ,
    _ga.trackFacebook = function (e) {
        try {
            FB && FB.Event && FB.Event.subscribe && (FB.Event.subscribe("edge.create", function (t) {
                _gaq.push(_ga.getSocialActionTrackers_("facebook", "like", t, e))
            }),
                FB.Event.subscribe("edge.remove", function (t) {
                    _gaq.push(_ga.getSocialActionTrackers_("facebook", "unlike", t, e))
                }),
                FB.Event.subscribe("message.send", function (t) {
                    _gaq.push(_ga.getSocialActionTrackers_("facebook", "send", t, e))
                }),
                FB.Event.subscribe("comment.create", function (t) {
                    _gaq.push(_ga.getSocialActionTrackers_("facebook", "comment", t, e))
                }))
        } catch (t) { }
    }
    ,
    _ga.trackTwitterHandler_ = function (e, t) {
        var i;
        if (e && "tweet" == e.type || "click" == e.type || "follow" == e.type) {
            "IFRAME" == e.target.nodeName && (i = _ga.extractParamFromUri_(e.target.src, "url"));
            var n = e.type + ("click" == e.type ? "-" + e.region : "");
            _gaq.push(_ga.getSocialActionTrackers_("twitter", n, i, t))
        }
    }
    ,
    _ga.trackTwitter = function (e) {
        intent_handler = function (t) {
            _ga.trackTwitterHandler_(t, e)
        }
            ,
            twttr.events.bind("click", intent_handler),
            twttr.events.bind("tweet", intent_handler),
            twttr.events.bind("follow", intent_handler)
    }
    ,
    _ga.trackLinkedIn = function (e, t) {
        var i = (_ga.buildTrackerName_(t),
            window.location.href.split("#")[0]);
        try {
            _gaq.push(_ga.getSocialActionTrackers_("linkedin", "share", i, e))
        } catch (n) { }
    }
    ,
    _ga.extractParamFromUri_ = function (e, t) {
        if (e) {
            var e = e.split("#")[0]
                , i = e.split("?");
            if (1 != i.length) {
                var n = decodeURI(i[1]);
                t += "=";
                for (var s, a = n.split("&"), r = 0; s = a[r]; ++r)
                    if (0 === s.indexOf(t))
                        return unescape(s.split("=")[1])
            }
        }
    }
    ,
    function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self,
            e.LazyLoad = t())
    }(this, function () {
        "use strict";
        function e() {
            return e = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i)
                        Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            }
                ,
                e.apply(this, arguments)
        }
        var t = "undefined" != typeof window
            , i = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent)
            , n = t && "IntersectionObserver" in window
            , s = t && "classList" in document.createElement("p")
            , a = t && window.devicePixelRatio > 1
            , r = {
                elements_selector: ".lazy",
                container: i || t ? document : null,
                threshold: 300,
                thresholds: null,
                data_src: "src",
                data_srcset: "srcset",
                data_sizes: "sizes",
                data_bg: "bg",
                data_bg_hidpi: "bg-hidpi",
                data_bg_multi: "bg-multi",
                data_bg_multi_hidpi: "bg-multi-hidpi",
                data_poster: "poster",
                class_applied: "applied",
                class_loading: "loading",
                class_loaded: "loaded",
                class_error: "error",
                unobserve_completed: !0,
                unobserve_entered: !1,
                cancel_on_exit: !0,
                callback_enter: null,
                callback_exit: null,
                callback_applied: null,
                callback_loading: null,
                callback_loaded: null,
                callback_error: null,
                callback_finish: null,
                callback_cancel: null,
                use_native: !1
            }
            , o = function (t) {
                return e({}, r, t)
            }
            , l = function (e, t) {
                var i, n = "LazyLoad::Initialized", s = new e(t);
                try {
                    i = new CustomEvent(n, {
                        detail: {
                            instance: s
                        }
                    })
                } catch (a) {
                    i = document.createEvent("CustomEvent"),
                        i.initCustomEvent(n, !1, !1, {
                            instance: s
                        })
                }
                window.dispatchEvent(i)
            }
            , c = function (e, t) {
                if (t)
                    if (t.length)
                        for (var i, n = 0; i = t[n]; n += 1)
                            l(e, i);
                    else
                        l(e, t)
            }
            , d = "loading"
            , u = "loaded"
            , h = "applied"
            , p = "entered"
            , f = "error"
            , g = "native"
            , m = "data-"
            , v = "ll-status"
            , y = function (e, t) {
                return e.getAttribute(m + t)
            }
            , b = function (e, t, i) {
                var n = m + t;
                return null === i ? void e.removeAttribute(n) : void e.setAttribute(n, i)
            }
            , x = function (e) {
                return y(e, v)
            }
            , w = function (e, t) {
                return b(e, v, t)
            }
            , _ = function (e) {
                return w(e, null)
            }
            , k = function (e) {
                return null === x(e)
            }
            , S = function (e) {
                return x(e) === d
            }
            , C = function (e) {
                return x(e) === f
            }
            , T = function (e) {
                return x(e) === g
            }
            , E = [d, u, h, f]
            , A = function (e) {
                return E.indexOf(x(e)) >= 0
            }
            , $ = function (e, t, i, n) {
                return e ? void 0 !== n ? void e(t, i, n) : void 0 !== i ? void e(t, i) : void e(t) : void 0
            }
            , D = function (e, t) {
                return s ? void e.classList.add(t) : void (e.className += (e.className ? " " : "") + t)
            }
            , M = function (e, t) {
                return s ? void e.classList.remove(t) : void (e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, ""))
            }
            , I = function (e) {
                e.llTempImage = document.createElement("IMG")
            }
            , P = function (e) {
                delete e.llTempImage
            }
            , L = function (e) {
                return e.llTempImage
            }
            , O = function (e, t) {
                if (t) {
                    var i = t._observer;
                    i && i.unobserve(e)
                }
            }
            , N = function (e) {
                e.disconnect()
            }
            , z = function (e, t, i) {
                t.unobserve_entered && O(e, i)
            }
            , H = function (e, t) {
                e && (e.loadingCount += t)
            }
            , j = function (e) {
                e && (e.toLoadCount -= 1)
            }
            , F = function (e, t) {
                e && (e.toLoadCount = t)
            }
            , R = function (e) {
                return e.loadingCount > 0
            }
            , W = function (e) {
                return e.toLoadCount > 0
            }
            , B = function (e) {
                for (var t, i = [], n = 0; t = e.children[n]; n += 1)
                    "SOURCE" === t.tagName && i.push(t);
                return i
            }
            , Y = function (e, t, i) {
                i && e.setAttribute(t, i)
            }
            , V = function (e, t) {
                e.removeAttribute(t)
            }
            , q = function (e) {
                return !!e.llOriginalAttrs
            }
            , X = function (e) {
                if (!q(e)) {
                    var t = {};
                    t.src = e.getAttribute("src"),
                        t.srcset = e.getAttribute("srcset"),
                        t.sizes = e.getAttribute("sizes"),
                        e.llOriginalAttrs = t
                }
            }
            , G = function (e) {
                if (q(e)) {
                    var t = e.llOriginalAttrs;
                    Y(e, "src", t.src),
                        Y(e, "srcset", t.srcset),
                        Y(e, "sizes", t.sizes)
                }
            }
            , U = function (e, t) {
                Y(e, "sizes", y(e, t.data_sizes)),
                    Y(e, "srcset", y(e, t.data_srcset)),
                    Y(e, "src", y(e, t.data_src))
            }
            , K = function (e) {
                V(e, "src"),
                    V(e, "srcset"),
                    V(e, "sizes")
            }
            , Z = function (e, t) {
                var i = e.parentNode;
                if (i && "PICTURE" === i.tagName) {
                    var n = B(i);
                    n.forEach(t)
                }
            }
            , Q = function (e, t) {
                var i = B(e);
                i.forEach(t)
            }
            , J = function (e) {
                Z(e, function (e) {
                    G(e)
                }),
                    G(e)
            }
            , ee = function (e, t) {
                Z(e, function (e) {
                    X(e),
                        U(e, t)
                }),
                    X(e),
                    U(e, t)
            }
            , te = function (e) {
                Z(e, function (e) {
                    K(e)
                }),
                    K(e)
            }
            , ie = function (e, t) {
                Y(e, "src", y(e, t.data_src))
            }
            , ne = function (e, t) {
                Q(e, function (e) {
                    Y(e, "src", y(e, t.data_src))
                }),
                    Y(e, "poster", y(e, t.data_poster)),
                    Y(e, "src", y(e, t.data_src)),
                    e.load()
            }
            , se = {
                IMG: ee,
                IFRAME: ie,
                VIDEO: ne
            }
            , ae = function (e, t, i) {
                var n = y(e, t.data_bg)
                    , s = y(e, t.data_bg_hidpi)
                    , r = a && s ? s : n;
                r && (e.style.backgroundImage = 'url("'.concat(r, '")'),
                    L(e).setAttribute("src", r),
                    ce(e, t, i))
            }
            , re = function (e, t, i) {
                var n = y(e, t.data_bg_multi)
                    , s = y(e, t.data_bg_multi_hidpi)
                    , r = a && s ? s : n;
                r && (e.style.backgroundImage = r,
                    le(e, t, i))
            }
            , oe = function (e, t) {
                var i = se[e.tagName];
                i && i(e, t)
            }
            , le = function (e, t, i) {
                D(e, t.class_applied),
                    w(e, h),
                    ge(e, t),
                    t.unobserve_completed && O(e, t),
                    $(t.callback_applied, e, i)
            }
            , ce = function (e, t, i) {
                H(i, 1),
                    D(e, t.class_loading),
                    w(e, d),
                    $(t.callback_loading, e, i)
            }
            , de = function (e, t) {
                b(e, t.data_src, null),
                    b(e, t.data_srcset, null),
                    b(e, t.data_sizes, null),
                    Z(e, function (e) {
                        b(e, t.data_srcset, null),
                            b(e, t.data_sizes, null)
                    })
            }
            , ue = function (e, t) {
                b(e, t.data_src, null)
            }
            , he = function (e, t) {
                b(e, t.data_src, null),
                    b(e, t.data_poster, null),
                    Q(e, function (e) {
                        b(e, t.data_src, null)
                    })
            }
            , pe = {
                IMG: de,
                IFRAME: ue,
                VIDEO: he
            }
            , fe = function (e, t) {
                b(e, t.data_bg, null),
                    b(e, t.data_bg_hidpi, null)
            }
            , ge = function (e, t) {
                b(e, t.data_bg_multi, null),
                    b(e, t.data_bg_multi_hidpi, null)
            }
            , me = function (e, t) {
                var i = pe[e.tagName];
                return i ? void i(e, t) : void fe(e, t)
            }
            , ve = ["IMG", "IFRAME", "VIDEO"]
            , ye = function (e) {
                return ve.indexOf(e.tagName) > -1
            }
            , be = function (e, t) {
                !t || R(t) || W(t) || $(e.callback_finish, t)
            }
            , xe = function (e, t, i) {
                e.addEventListener(t, i),
                    e.llEvLisnrs[t] = i
            }
            , we = function (e, t, i) {
                e.removeEventListener(t, i)
            }
            , _e = function (e) {
                return !!e.llEvLisnrs
            }
            , ke = function (e, t, i) {
                _e(e) || (e.llEvLisnrs = {});
                var n = "VIDEO" === e.tagName ? "loadeddata" : "load";
                xe(e, n, t),
                    xe(e, "error", i)
            }
            , Se = function (e) {
                if (_e(e)) {
                    var t = e.llEvLisnrs;
                    for (var i in t) {
                        var n = t[i];
                        we(e, i, n)
                    }
                    delete e.llEvLisnrs
                }
            }
            , Ce = function (e, t, i) {
                P(e),
                    H(i, -1),
                    j(i),
                    M(e, t.class_loading),
                    t.unobserve_completed && O(e, i)
            }
            , Te = function (e, t, i, n) {
                var s = T(t);
                Ce(t, i, n),
                    D(t, i.class_loaded),
                    w(t, u),
                    me(t, i),
                    $(i.callback_loaded, t, n),
                    s || be(i, n)
            }
            , Ee = function (e, t, i, n) {
                var s = T(t);
                Ce(t, i, n),
                    D(t, i.class_error),
                    w(t, f),
                    $(i.callback_error, t, n),
                    s || be(i, n)
            }
            , Ae = function (e, t, i) {
                var n = L(e) || e;
                if (!_e(n)) {
                    var s = function (s) {
                        Te(s, e, t, i),
                            Se(n)
                    }
                        , a = function (s) {
                            Ee(s, e, t, i),
                                Se(n)
                        };
                    ke(n, s, a)
                }
            }
            , $e = function (e, t, i) {
                I(e),
                    Ae(e, t, i),
                    ae(e, t, i),
                    re(e, t, i)
            }
            , De = function (e, t, i) {
                Ae(e, t, i),
                    oe(e, t),
                    ce(e, t, i)
            }
            , Me = function (e, t, i) {
                ye(e) ? De(e, t, i) : $e(e, t, i)
            }
            , Ie = function (e, t, i) {
                Ae(e, t, i),
                    oe(e, t),
                    me(e, t),
                    w(e, g)
            }
            , Pe = function (e, t, i, n) {
                i.cancel_on_exit && S(e) && "IMG" === e.tagName && (Se(e),
                    te(e),
                    J(e),
                    M(e, i.class_loading),
                    H(n, -1),
                    _(e),
                    $(i.callback_cancel, e, t, n))
            }
            , Le = function (e, t, i, n) {
                w(e, p),
                    z(e, i, n),
                    $(i.callback_enter, e, t, n),
                    A(e) || Me(e, i, n)
            }
            , Oe = function (e, t, i, n) {
                k(e) || (Pe(e, t, i, n),
                    $(i.callback_exit, e, t, n))
            }
            , Ne = ["IMG", "IFRAME"]
            , ze = function (e) {
                return e.use_native && "loading" in HTMLImageElement.prototype
            }
            , He = function (e, t, i) {
                e.forEach(function (e) {
                    -1 !== Ne.indexOf(e.tagName) && (e.setAttribute("loading", "lazy"),
                        Ie(e, t, i))
                }),
                    F(i, 0)
            }
            , je = function (e) {
                return e.isIntersecting || e.intersectionRatio > 0
            }
            , Fe = function (e) {
                return {
                    root: e.container === document ? null : e.container,
                    rootMargin: e.thresholds || e.threshold + "px"
                }
            }
            , Re = function (e, t, i) {
                e.forEach(function (e) {
                    return je(e) ? Le(e.target, e, t, i) : Oe(e.target, e, t, i)
                })
            }
            , We = function (e, t) {
                t.forEach(function (t) {
                    e.observe(t)
                })
            }
            , Be = function (e, t) {
                N(e),
                    We(e, t)
            }
            , Ye = function (e, t) {
                n && !ze(e) && (t._observer = new IntersectionObserver(function (i) {
                    Re(i, e, t)
                }
                    , Fe(e)))
            }
            , Ve = function (e) {
                return Array.prototype.slice.call(e)
            }
            , qe = function (e) {
                return e.container.querySelectorAll(e.elements_selector)
            }
            , Xe = function (e) {
                return Ve(e).filter(k)
            }
            , Ge = function (e) {
                return C(e)
            }
            , Ue = function (e) {
                return Ve(e).filter(Ge)
            }
            , Ke = function (e, t) {
                return Xe(e || qe(t))
            }
            , Ze = function (e, t) {
                var i = Ue(qe(e));
                i.forEach(function (t) {
                    M(t, e.class_error),
                        _(t)
                }),
                    t.update()
            }
            , Qe = function (e, i) {
                t && window.addEventListener("online", function () {
                    Ze(e, i)
                })
            }
            , Je = function (e, t) {
                var i = o(e);
                this._settings = i,
                    this.loadingCount = 0,
                    Ye(i, this),
                    Qe(i, this),
                    this.update(t)
            };
        return Je.prototype = {
            update: function (e) {
                var t = this._settings
                    , s = Ke(e, t);
                return F(this, s.length),
                    i || !n ? void this.loadAll(s) : ze(t) ? void He(s, t, this) : void Be(this._observer, s)
            },
            destroy: function () {
                this._observer && this._observer.disconnect(),
                    qe(this._settings).forEach(function (e) {
                        delete e.llOriginalAttrs
                    }),
                    delete this._observer,
                    delete this._settings,
                    delete this.loadingCount,
                    delete this.toLoadCount
            },
            loadAll: function (e) {
                var t = this
                    , i = this._settings
                    , n = Ke(e, i);
                n.forEach(function (e) {
                    Me(e, i, t)
                })
            }
        },
            Je.load = function (e, t) {
                var i = o(t);
                Me(e, i)
            }
            ,
            Je.resetStatus = function (e) {
                _(e)
            }
            ,
            t && c(Je, window.lazyLoadOptions),
            Je
    }),
    $("#new_desktop_qs_sales_search, #homepage_desktop_sales_search, #homepage_mobile_sales_search, #new_qs_sales_search, #new_mobile_qs_sales_search, #desktop_property_search_form, #mobile_property_search_form").keydown(function (e) {
        13 == e.keyCode && (typeAhead = $(this).find("input[placeholder]"),
            valueField = $(this).find('input[name="search[super_locations]"]'),
            "" != typeAhead.val() && valueField.length > 0 && valueField.data("tokenInputObject") && valueField.data("tokenInputObject").add({
                id: typeAhead.val(),
                name: typeAhead.val()
            }))
    }),
    $("body").on("click", "[class^='c-'][data-href]", function (e) {
        var t = $(this).data("href");
        if ("" != t) {
            var i = $(this).data("target") && "" != $(this).data("target") ? $(this).data("target") : "_self"
                , n = "svg" == e.target.tagName || "path" == e.target.tagName || "A" == e.target.tagName || e.target.className.includes("custom-control-label") || e.target.className.includes("custom-control-input") || e.target.className.includes("js-openhouse-toggle") || e.target.className.includes("c-property-card__additional-menu") || e.target.className.includes("c-property-card__openhouse-menu") || e.target.className.includes("c-property-card__additional-header") || e.target.className.includes("c-property-card__additional-list") || e.target.className.includes("c-property-card__openhouse-header") || e.target.className.includes("c-property-card__openhouse-list") || "js-additional-toggle" == e.target.className || "js-office-map-toggle" == e.target.className || "c-property-card__favorite-link" == e.target.className || "fav_add_results" == e.target.className || "fav_add_rental_results" == e.target.className || "fav_remove_results" == e.target.className || e.target.className.includes("c-property-card__arrow");
            if (n)
                return;
            window.open(window.location.origin + t, i)
        }
    }),
    function (e) {
        jQuery.fn.treeSelector = function (t, i, n, s) {
            e(window).off("click.treeSelector").on("click.treeSelector", function (t) {
                var i = e(t.target).closest(".treeSelector-container").length > 0;
                if (i) {
                    var n = e(t.target).closest(".treeSelector-container");
                    if (n.length > 0) {
                        var s = n.attr("data-treeId");
                        e("div.treeSelector-container:not([data-treeId=" + s + "])").find("div.treeSelector-wrapper").removeClass("visible")
                    }
                } else
                    e("div.treeSelector-wrapper").removeClass("visible"),
                        e(".search-neighborhoods-text").text(a.emptyOptonPlaceholder)
            });
            var a = e.extend({
                checkWithParent: !1,
                titleWithParent: !1,
                notViewClickParentTitle: !1,
                disabled: !1,
                emptyOptonPlaceholder: "Search Neighborhoods",
                ul_class: "c-tokenize__list",
                li_class: "c-tokenize__token",
                span_class: "c-tokenize__token-delete",
                hidden_input_selector: null,
                free_tokens: []
            }, s)
                , r = function (t, i, n) {
                    var s = t.children && t.children.length > 0
                        , a = e(document.createElement("li"));
                    a.addClass("treeSelector-li level-" + i + (s ? " has-children" : ""));
                    var o = e(document.createElement("div"));
                    o.addClass("treeSelector-li-box");
                    var l = e(document.createElement("div"));
                    l.addClass("treeSelector-li-title-box");
                    var c = "treeSelector-li-" + n + "-" + t.id;
                    l.attr({
                        "for": c,
                        "data-value": t.value,
                        "data-title": t.title
                    });
                    var d = e(document.createElement("input"));
                    d.attr({
                        type: "checkbox",
                        id: c,
                        "data-value": t.value
                    }),
                        l.append(d);
                    var u = e(document.createElement("label"));
                    u.addClass("custom-checkbox"),
                        u.attr({
                            "for": c
                        }),
                        l.append(u);
                    var h = e(document.createElement("span"));
                    if (h.addClass("treeSelector-li-title"),
                        h.attr({
                            "data-value": t.value
                        }),
                        h.text(t.title),
                        l.append(h),
                        o.append(l),
                        s) {
                        var p = e(document.createElement("ul"))
                            , g = e(document.createElement("div"))
                            , m = e(document.createElement("span"));
                        g.addClass("expander"),
                            g.attr({
                                "for": c
                            }),
                            g.on("click", f);
                        for (var v = e(), y = 0; y < t.children.length; y++)
                            v = v.add(r(t.children[y], i + 1, n));
                        g.append(m),
                            l.append(g),
                            p.append(v),
                            o.append(p)
                    } else
                        o.addClass("leaf");
                    return a.append(o),
                        a
                }
                , o = function (e, t) {
                    if (!t)
                        return [];
                    var i = []
                        , n = e.find(".treeSelector-li-title-box[data-value=" + t + "]:first");
                    if (n && n.closest(".treeSelector-li").length > 0) {
                        var s = n.closest(".treeSelector-li").closest(".treeSelector-li-box")
                            , a = s.find(">.treeSelector-li-title-box").attr("data-title")
                            , r = s.find(">.treeSelector-li-title-box").attr("data-value")
                            , l = o(e, r).slice();
                        i = l.concat([a])
                    }
                    return i.filter(function (e) {
                        return e
                    })
                }
                , l = function (t, i) {
                    if (t && i) {
                        Array.isArray(i) && (i = i.join(","));
                        var n = e();
                        titleHandlers = [],
                            t.find(".treeSelector-input-box:first").empty(),
                            e.each(i.split(","), function (e, i) {
                                t.find('.treeSelector-li-title[data-value="' + i + '"]').length ? titleHandlers.push('.treeSelector-li-title[data-value="' + i + '"]') : "" != i && (-1 == a.free_tokens.indexOf(i) && a.free_tokens.push(i),
                                    c(t, i))
                            }),
                            t.find(titleHandlers.join(",")).each(function () {
                                value = e(this).data("value"),
                                    item = e(this),
                                    item.parent().find("> input[type=checkbox]").prop("checked", !0);
                                var i = e(document.createElement("li"));
                                i.addClass(a.li_class),
                                    i.attr({
                                        "data-value": value
                                    });
                                var s = e(document.createElement("p"))
                                    , r = item.text();
                                if (a.titleWithParent) {
                                    var l = o(t, value);
                                    r = l.concat([r]).filter(function (e) {
                                        return e
                                    }).join(" - ")
                                }
                                s.text(r);
                                var c = e(document.createElement("span"));
                                c.addClass(a.span_class),
                                    c.addClass("js-borough-delete"),
                                    "token-input-delete-token-facebook" == a.span_class && c.text(""),
                                    i.append(s),
                                    i.append(c),
                                    n = n.add(i)
                            }),
                            t.find(".treeSelector-input-box:first").append(n)
                    }
                }
                , c = function (t, i) {
                    var n = e(document.createElement("li"));
                    n.addClass(a.li_class),
                        n.addClass("free-token"),
                        n.attr({
                            "data-value": i
                        });
                    var s = e(document.createElement("p"));
                    s.text(i);
                    var r = e(document.createElement("span"));
                    r.addClass(a.span_class),
                        r.addClass("js-borough-delete"),
                        "token-input-delete-token-facebook" == a.span_class && r.text(""),
                        n.append(r),
                        n.append(s),
                        t.find(".treeSelector-input-box:first").append(n)
                }
                , d = function (t) {
                    return t.find("input[type=checkbox]:checked").map(function (t, i) {
                        return e(i).attr("data-value")
                    }).toArray().concat(a.free_tokens)
                }
                , u = function (t) {
                    var i = e(t).closest("ul");
                    if (i && i.length) {
                        var n = i.prev(".treeSelector-li-title-box").find("input[type=checkbox]:first");
                        n.prop("checked", !1).trigger("change"),
                            u(n.get(0))
                    }
                }
                , h = function (t, i) {
                    var s = d(t);
                    0 == s.length ? 0 == e(".search-neighborhoods-text").length ? t.append('<span class="search-neighborhoods-text">' + a.emptyOptonPlaceholder + "</span>") : !1 : e(".search-neighborhoods-text").remove();
                    var r = s.filter(function (e, t, i) {
                        return t == i.indexOf(e)
                    });
                    if (e(a.hidden_input_selector).val(r.join(",")),
                        a.notViewClickParentTitle) {
                        for (var o = [], c = 0; c < s.length; c++) {
                            var u = s[c]
                                , h = t.find(".treeSelector-li-box.leaf input[data-value=" + u + "]");
                            if (h.length > 0)
                                o.push(u);
                            else {
                                var p = e(".treeSelector-li-title-box[data-value=" + u + "]:first");
                                p.length > 0 && p.next("ul").find("input[type=checkbox]:checked").length > 0 || o.push(u)
                            }
                        }
                        l(t, o),
                            n && n(i, s)
                    } else
                        l(t, s),
                            n && n(i, s)
                }
                , p = function (i) {
                    i.on("change", "input[type=checkbox]", function (t) {
                        if (a.disabled)
                            return !1;
                        if (a.checkWithParent) {
                            var n = e(t.target).parent(".treeSelector-li-title-box").next("ul");
                            t.target.checked ? n && n.length > 0 && n.find("input[type=checkbox]").prop("checked", t.target.checked) : (u(t.target),
                                n && n.length > 0 && n.find("input[type=checkbox]").prop("checked", t.target.checked))
                        }
                        h(i, t)
                    }),
                        i.on("click", "span.js-borough-delete", function (t) {
                            if (a.disabled)
                                return !1;
                            var n = e(t.target).parent("." + a.li_class).attr("data-value")
                                , s = i.find('input[type=checkbox][data-value="' + n + '"]:checked');
                            return s && s.length ? (s.prop("checked", !1).trigger("change"),
                                a.checkWithParent && u(s.get(0))) : (free_token_index = a.free_tokens.indexOf(n),
                                    a.free_tokens.splice(free_token_index, 1)),
                                h(i, t),
                                !1
                        }),
                        i.on("click", ".treeSelector-input-box", function (e) {
                            if (a.disabled || !t || !t.length)
                                return !1;
                            var n = i.find(".treeSelector-wrapper:first")
                                , s = n.hasClass("visible");
                            s ? n.removeClass("visible") : (n.addClass("visible"),
                                i.find(".treeSelector-filter-field").focus())
                        })
                }
                , f = function (t) {
                    e(this).parent().next("ul").toggle(),
                        e(this).closest(".expander").toggleClass("flipped"),
                        t.stopPropagation()
                }
                , g = function () {
                    return (new Date).valueOf() + parseInt(1e10 * Math.random(), 10)
                };
            return e(this).each(function () {
                var n = e(document.createElement("div"))
                    , s = g();
                n.addClass("treeSelector-container"),
                    n.attr("data-treeId", s),
                    a.disabled && n.addClass("disabled");
                var o = e(document.createElement("ul"));
                o.addClass("treeSelector-input-box"),
                    o.addClass(a.ul_class);
                var c = e(document.createElement("div"));
                c.addClass("treeSelector-wrapper");
                var d = e(document.createElement("input"));
                d.addClass("treeSelector-filter-field form-control"),
                    d.attr("placeholder", "Filter your search");
                var u = e(document.createElement("ul"));
                if (n.append(o),
                    n.append(c),
                    c.append(d),
                    t && t.length)
                    for (var f = 0; f < t.length; f++) {
                        var m = r(t[f], 0, s);
                        u.append(m)
                    }
                else
                    n.addClass("no-options"),
                        o.text(a.emptyOptonPlaceholder);
                c.append(u),
                    e(this).empty().append(n),
                    i && i.length ? l(n, i) : n.append('<span style="pointer-events: none" class="search-neighborhoods-text">' + a.emptyOptonPlaceholder + "</span>");
                var v = e(document.createElement("span"));
                v.addClass("treeSelector-minimize-button"),
                    v.on("click", function () {
                        e("div.treeSelector-wrapper").removeClass("visible"),
                            e(".search-neighborhoods-text").text(a.emptyOptonPlaceholder)
                    }),
                    c.append(v),
                    d.on("keyup change", function (t, i) {
                        return 13 != t.keyCode && 9 != t.keyCode || "" == e(this).val() ? (searchVal = e(this).val().toLowerCase(),
                            u.find(".treeSelector-li-title-box").each(function () {
                                "" == searchVal || (e(this).data("title") + "").toLowerCase().match(searchVal) ? e(this).show() : e(this).hide()
                            }),
                            u.find("ul").each(function () {
                                e(this).show(),
                                    shown_count = 0,
                                    e(this).find("div.treeSelector-li-title-box").each(function () {
                                        e(this).is(":visible") && shown_count++
                                    }),
                                    shown_count || e(this).hide()
                            }),
                            void 0) : (-1 == a.free_tokens.indexOf(e(this).val()) && a.free_tokens.push(e(this).val()),
                                h(n, t),
                                e(this).val("").trigger("change"),
                                t.preventDefault(),
                                !1)
                    }),
                    p(n)
            })
        }
    }(jQuery);
var resizeId, pageFullyLoaded = !1, unifiedAdmin = !1, oldAdmin = !1, frontEnd = !0;
$(function () {
    initStickyFill(),
        initPropCards(),
        initFloatLabel(".form-control-float"),
        initScrollTo(),
        $('[data-toggle="tooltip"]').tooltip(),
        $(".nav-item.last_item .dropdown-menu").addClass("dropdown-menu-right")
}),
    $(".c-search-bar__location").on("input", function () {
        $(".js-mega-dropdown").hide()
    }),
    $(".c-tokenize__token").length > 0 && $(".js-mega-dropdown").hide(),
    $.fn.extend({
        animateCss: function (e, t) {
            var i = function (e) {
                var t = {
                    animation: "animationend",
                    OAnimation: "oAnimationEnd",
                    MozAnimation: "mozAnimationEnd",
                    WebkitAnimation: "webkitAnimationEnd"
                };
                for (var i in t)
                    if (void 0 !== e.style[i])
                        return t[i]
            }(document.createElement("div"));
            return this.addClass("animated " + e).one(i, function () {
                $(this).removeClass("animated " + e),
                    "function" == typeof t && t()
            }),
                this
        }
    });
var overflowCheck = debounce(function () {
    var e = $("form.is-active:visible")
        , t = e.find(".c-tokenize__list li")
        , i = []
        , n = "overflow-item"
        , s = (screenSize("xs") || screenSize("sm"),
            50)
        , a = 44
        , r = e.find(".c-tokenize__list").width() - s
        , o = 4;
    e.find(".c-tokenize__list").children().removeClass(n),
        e.find(".c-tokenize__input-token input:focus").length || e.find(".c-tokenize__list").append(e.find(".c-tokenize__input-token")),
        t.each(function (e, t) {
            var n = $(t).position().top + o
                , s = $(t).position().left + o + $(t).width();
            (n > a || s > r) && i.push(t)
        }),
        hiddenTokens = [],
        $.each(i, function (e, t) {
            $(t).hasClass("c-tokenize__input-token") || ($(t).addClass(n),
                hiddenTokens.push(t))
        }),
        hiddenTokens.length > 0 ? (e.find(".js-content-count").html(hiddenTokens.length + "&nbsp; More"),
            $locationOverflow.hasClass(visibleClass) || e.find(".js-content-count").show()) : (e.find(".js-content-count").html(""),
                e.find(".js-content-count").hide())
});
window.onload = function () {
    pageFullyLoaded = !0
}
    ;
var unloadedFunctions = []
    , windowLoaded = !1;
$(window).on("load", function () {
    windowLoaded = !0,
        unloadedFunctions.length > 0 && setTimeout(function () {
            $.each(unloadedFunctions, function (e, t) {
                $(t[0])[t[1]](t[2])
            })
        }, 10)
}),
    function () {
        function e(e) {
            function t(t, i, n, s, a, r) {
                for (; a >= 0 && r > a; a += e) {
                    var o = s ? s[a] : a;
                    n = i(n, t[o], o, t)
                }
                return n
            }
            return function (i, n, s, a) {
                n = b(n, a, 4);
                var r = !T(i) && y.keys(i)
                    , o = (r || i).length
                    , l = e > 0 ? 0 : o - 1;
                return arguments.length < 3 && (s = i[r ? r[l] : l],
                    l += e),
                    t(i, n, s, r, l, o)
            }
        }
        function t(e) {
            return function (t, i, n) {
                i = x(i, n);
                for (var s = C(t), a = e > 0 ? 0 : s - 1; a >= 0 && s > a; a += e)
                    if (i(t[a], a, t))
                        return a;
                return -1
            }
        }
        function i(e, t, i) {
            return function (n, s, a) {
                var r = 0
                    , o = C(n);
                if ("number" == typeof a)
                    e > 0 ? r = a >= 0 ? a : Math.max(a + o, r) : o = a >= 0 ? Math.min(a + 1, o) : a + o + 1;
                else if (i && a && o)
                    return a = i(n, s),
                        n[a] === s ? a : -1;
                if (s !== s)
                    return a = t(d.call(n, r, o), y.isNaN),
                        a >= 0 ? a + r : -1;
                for (a = e > 0 ? r : o - 1; a >= 0 && o > a; a += e)
                    if (n[a] === s)
                        return a;
                return -1
            }
        }
        function n(e, t) {
            var i = M.length
                , n = e.constructor
                , s = y.isFunction(n) && n.prototype || o
                , a = "constructor";
            for (y.has(e, a) && !y.contains(t, a) && t.push(a); i--;)
                a = M[i],
                    a in e && e[a] !== s[a] && !y.contains(t, a) && t.push(a)
        }
        var s = this
            , a = s._
            , r = Array.prototype
            , o = Object.prototype
            , l = Function.prototype
            , c = r.push
            , d = r.slice
            , u = o.toString
            , h = o.hasOwnProperty
            , p = Array.isArray
            , f = Object.keys
            , g = l.bind
            , m = Object.create
            , v = function () { }
            , y = function (e) {
                return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y),
            exports._ = y) : s._ = y,
            y.VERSION = "1.8.3";
        var b = function (e, t, i) {
            if (void 0 === t)
                return e;
            switch (null == i ? 3 : i) {
                case 1:
                    return function (i) {
                        return e.call(t, i)
                    }
                        ;
                case 2:
                    return function (i, n) {
                        return e.call(t, i, n)
                    }
                        ;
                case 3:
                    return function (i, n, s) {
                        return e.call(t, i, n, s)
                    }
                        ;
                case 4:
                    return function (i, n, s, a) {
                        return e.call(t, i, n, s, a)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        }
            , x = function (e, t, i) {
                return null == e ? y.identity : y.isFunction(e) ? b(e, t, i) : y.isObject(e) ? y.matcher(e) : y.property(e)
            };
        y.iteratee = function (e, t) {
            return x(e, t, 1 / 0)
        }
            ;
        var w = function (e, t) {
            return function (i) {
                var n = arguments.length;
                if (2 > n || null == i)
                    return i;
                for (var s = 1; n > s; s++)
                    for (var a = arguments[s], r = e(a), o = r.length, l = 0; o > l; l++) {
                        var c = r[l];
                        t && void 0 !== i[c] || (i[c] = a[c])
                    }
                return i
            }
        }
            , _ = function (e) {
                if (!y.isObject(e))
                    return {};
                if (m)
                    return m(e);
                v.prototype = e;
                var t = new v;
                return v.prototype = null,
                    t
            }
            , k = function (e) {
                return function (t) {
                    return null == t ? void 0 : t[e]
                }
            }
            , S = Math.pow(2, 53) - 1
            , C = k("length")
            , T = function (e) {
                var t = C(e);
                return "number" == typeof t && t >= 0 && S >= t
            };
        y.each = y.forEach = function (e, t, i) {
            t = b(t, i);
            var n, s;
            if (T(e))
                for (n = 0,
                    s = e.length; s > n; n++)
                    t(e[n], n, e);
            else {
                var a = y.keys(e);
                for (n = 0,
                    s = a.length; s > n; n++)
                    t(e[a[n]], a[n], e)
            }
            return e
        }
            ,
            y.map = y.collect = function (e, t, i) {
                t = x(t, i);
                for (var n = !T(e) && y.keys(e), s = (n || e).length, a = Array(s), r = 0; s > r; r++) {
                    var o = n ? n[r] : r;
                    a[r] = t(e[o], o, e)
                }
                return a
            }
            ,
            y.reduce = y.foldl = y.inject = e(1),
            y.reduceRight = y.foldr = e(-1),
            y.find = y.detect = function (e, t, i) {
                var n;
                return n = T(e) ? y.findIndex(e, t, i) : y.findKey(e, t, i),
                    void 0 !== n && -1 !== n ? e[n] : void 0
            }
            ,
            y.filter = y.select = function (e, t, i) {
                var n = [];
                return t = x(t, i),
                    y.each(e, function (e, i, s) {
                        t(e, i, s) && n.push(e)
                    }),
                    n
            }
            ,
            y.reject = function (e, t, i) {
                return y.filter(e, y.negate(x(t)), i)
            }
            ,
            y.every = y.all = function (e, t, i) {
                t = x(t, i);
                for (var n = !T(e) && y.keys(e), s = (n || e).length, a = 0; s > a; a++) {
                    var r = n ? n[a] : a;
                    if (!t(e[r], r, e))
                        return !1
                }
                return !0
            }
            ,
            y.some = y.any = function (e, t, i) {
                t = x(t, i);
                for (var n = !T(e) && y.keys(e), s = (n || e).length, a = 0; s > a; a++) {
                    var r = n ? n[a] : a;
                    if (t(e[r], r, e))
                        return !0
                }
                return !1
            }
            ,
            y.contains = y.includes = y.include = function (e, t, i, n) {
                return T(e) || (e = y.values(e)),
                    ("number" != typeof i || n) && (i = 0),
                    y.indexOf(e, t, i) >= 0
            }
            ,
            y.invoke = function (e, t) {
                var i = d.call(arguments, 2)
                    , n = y.isFunction(t);
                return y.map(e, function (e) {
                    var s = n ? t : e[t];
                    return null == s ? s : s.apply(e, i)
                })
            }
            ,
            y.pluck = function (e, t) {
                return y.map(e, y.property(t))
            }
            ,
            y.where = function (e, t) {
                return y.filter(e, y.matcher(t))
            }
            ,
            y.findWhere = function (e, t) {
                return y.find(e, y.matcher(t))
            }
            ,
            y.max = function (e, t, i) {
                var n, s, a = -1 / 0, r = -1 / 0;
                if (null == t && null != e) {
                    e = T(e) ? e : y.values(e);
                    for (var o = 0, l = e.length; l > o; o++)
                        n = e[o],
                            n > a && (a = n)
                } else
                    t = x(t, i),
                        y.each(e, function (e, i, n) {
                            s = t(e, i, n),
                                (s > r || s === -1 / 0 && a === -1 / 0) && (a = e,
                                    r = s)
                        });
                return a
            }
            ,
            y.min = function (e, t, i) {
                var n, s, a = 1 / 0, r = 1 / 0;
                if (null == t && null != e) {
                    e = T(e) ? e : y.values(e);
                    for (var o = 0, l = e.length; l > o; o++)
                        n = e[o],
                            a > n && (a = n)
                } else
                    t = x(t, i),
                        y.each(e, function (e, i, n) {
                            s = t(e, i, n),
                                (r > s || 1 / 0 === s && 1 / 0 === a) && (a = e,
                                    r = s)
                        });
                return a
            }
            ,
            y.shuffle = function (e) {
                for (var t, i = T(e) ? e : y.values(e), n = i.length, s = Array(n), a = 0; n > a; a++)
                    t = y.random(0, a),
                        t !== a && (s[a] = s[t]),
                        s[t] = i[a];
                return s
            }
            ,
            y.sample = function (e, t, i) {
                return null == t || i ? (T(e) || (e = y.values(e)),
                    e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t))
            }
            ,
            y.sortBy = function (e, t, i) {
                return t = x(t, i),
                    y.pluck(y.map(e, function (e, i, n) {
                        return {
                            value: e,
                            index: i,
                            criteria: t(e, i, n)
                        }
                    }).sort(function (e, t) {
                        var i = e.criteria
                            , n = t.criteria;
                        if (i !== n) {
                            if (i > n || void 0 === i)
                                return 1;
                            if (n > i || void 0 === n)
                                return -1
                        }
                        return e.index - t.index
                    }), "value")
            }
            ;
        var E = function (e) {
            return function (t, i, n) {
                var s = {};
                return i = x(i, n),
                    y.each(t, function (n, a) {
                        var r = i(n, a, t);
                        e(s, n, r)
                    }),
                    s
            }
        };
        y.groupBy = E(function (e, t, i) {
            y.has(e, i) ? e[i].push(t) : e[i] = [t]
        }),
            y.indexBy = E(function (e, t, i) {
                e[i] = t
            }),
            y.countBy = E(function (e, t, i) {
                y.has(e, i) ? e[i]++ : e[i] = 1
            }),
            y.toArray = function (e) {
                return e ? y.isArray(e) ? d.call(e) : T(e) ? y.map(e, y.identity) : y.values(e) : []
            }
            ,
            y.size = function (e) {
                return null == e ? 0 : T(e) ? e.length : y.keys(e).length
            }
            ,
            y.partition = function (e, t, i) {
                t = x(t, i);
                var n = []
                    , s = [];
                return y.each(e, function (e, i, a) {
                    (t(e, i, a) ? n : s).push(e)
                }),
                    [n, s]
            }
            ,
            y.first = y.head = y.take = function (e, t, i) {
                return null == e ? void 0 : null == t || i ? e[0] : y.initial(e, e.length - t)
            }
            ,
            y.initial = function (e, t, i) {
                return d.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 : t)))
            }
            ,
            y.last = function (e, t, i) {
                return null == e ? void 0 : null == t || i ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t))
            }
            ,
            y.rest = y.tail = y.drop = function (e, t, i) {
                return d.call(e, null == t || i ? 1 : t)
            }
            ,
            y.compact = function (e) {
                return y.filter(e, y.identity)
            }
            ;
        var A = function (e, t, i, n) {
            for (var s = [], a = 0, r = n || 0, o = C(e); o > r; r++) {
                var l = e[r];
                if (T(l) && (y.isArray(l) || y.isArguments(l))) {
                    t || (l = A(l, t, i));
                    var c = 0
                        , d = l.length;
                    for (s.length += d; d > c;)
                        s[a++] = l[c++]
                } else
                    i || (s[a++] = l)
            }
            return s
        };
        y.flatten = function (e, t) {
            return A(e, t, !1)
        }
            ,
            y.without = function (e) {
                return y.difference(e, d.call(arguments, 1))
            }
            ,
            y.uniq = y.unique = function (e, t, i, n) {
                y.isBoolean(t) || (n = i,
                    i = t,
                    t = !1),
                    null != i && (i = x(i, n));
                for (var s = [], a = [], r = 0, o = C(e); o > r; r++) {
                    var l = e[r]
                        , c = i ? i(l, r, e) : l;
                    t ? (r && a === c || s.push(l),
                        a = c) : i ? y.contains(a, c) || (a.push(c),
                            s.push(l)) : y.contains(s, l) || s.push(l)
                }
                return s
            }
            ,
            y.union = function () {
                return y.uniq(A(arguments, !0, !0))
            }
            ,
            y.intersection = function (e) {
                for (var t = [], i = arguments.length, n = 0, s = C(e); s > n; n++) {
                    var a = e[n];
                    if (!y.contains(t, a)) {
                        for (var r = 1; i > r && y.contains(arguments[r], a); r++)
                            ;
                        r === i && t.push(a)
                    }
                }
                return t
            }
            ,
            y.difference = function (e) {
                var t = A(arguments, !0, !0, 1);
                return y.filter(e, function (e) {
                    return !y.contains(t, e)
                })
            }
            ,
            y.zip = function () {
                return y.unzip(arguments)
            }
            ,
            y.unzip = function (e) {
                for (var t = e && y.max(e, C).length || 0, i = Array(t), n = 0; t > n; n++)
                    i[n] = y.pluck(e, n);
                return i
            }
            ,
            y.object = function (e, t) {
                for (var i = {}, n = 0, s = C(e); s > n; n++)
                    t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
                return i
            }
            ,
            y.findIndex = t(1),
            y.findLastIndex = t(-1),
            y.sortedIndex = function (e, t, i, n) {
                i = x(i, n, 1);
                for (var s = i(t), a = 0, r = C(e); r > a;) {
                    var o = Math.floor((a + r) / 2);
                    i(e[o]) < s ? a = o + 1 : r = o
                }
                return a
            }
            ,
            y.indexOf = i(1, y.findIndex, y.sortedIndex),
            y.lastIndexOf = i(-1, y.findLastIndex),
            y.range = function (e, t, i) {
                null == t && (t = e || 0,
                    e = 0),
                    i = i || 1;
                for (var n = Math.max(Math.ceil((t - e) / i), 0), s = Array(n), a = 0; n > a; a++,
                    e += i)
                    s[a] = e;
                return s
            }
            ;
        var $ = function (e, t, i, n, s) {
            if (!(n instanceof t))
                return e.apply(i, s);
            var a = _(e.prototype)
                , r = e.apply(a, s);
            return y.isObject(r) ? r : a
        };
        y.bind = function (e, t) {
            if (g && e.bind === g)
                return g.apply(e, d.call(arguments, 1));
            if (!y.isFunction(e))
                throw new TypeError("Bind must be called on a function");
            var i = d.call(arguments, 2)
                , n = function () {
                    return $(e, n, t, this, i.concat(d.call(arguments)))
                };
            return n
        }
            ,
            y.partial = function (e) {
                var t = d.call(arguments, 1)
                    , i = function () {
                        for (var n = 0, s = t.length, a = Array(s), r = 0; s > r; r++)
                            a[r] = t[r] === y ? arguments[n++] : t[r];
                        for (; n < arguments.length;)
                            a.push(arguments[n++]);
                        return $(e, i, this, this, a)
                    };
                return i
            }
            ,
            y.bindAll = function (e) {
                var t, i, n = arguments.length;
                if (1 >= n)
                    throw new Error("bindAll must be passed function names");
                for (t = 1; n > t; t++)
                    i = arguments[t],
                        e[i] = y.bind(e[i], e);
                return e
            }
            ,
            y.memoize = function (e, t) {
                var i = function (n) {
                    var s = i.cache
                        , a = "" + (t ? t.apply(this, arguments) : n);
                    return y.has(s, a) || (s[a] = e.apply(this, arguments)),
                        s[a]
                };
                return i.cache = {},
                    i
            }
            ,
            y.delay = function (e, t) {
                var i = d.call(arguments, 2);
                return setTimeout(function () {
                    return e.apply(null, i)
                }, t)
            }
            ,
            y.defer = y.partial(y.delay, y, 1),
            y.throttle = function (e, t, i) {
                var n, s, a, r = null, o = 0;
                i || (i = {});
                var l = function () {
                    o = i.leading === !1 ? 0 : y.now(),
                        r = null,
                        a = e.apply(n, s),
                        r || (n = s = null)
                };
                return function () {
                    var c = y.now();
                    o || i.leading !== !1 || (o = c);
                    var d = t - (c - o);
                    return n = this,
                        s = arguments,
                        0 >= d || d > t ? (r && (clearTimeout(r),
                            r = null),
                            o = c,
                            a = e.apply(n, s),
                            r || (n = s = null)) : r || i.trailing === !1 || (r = setTimeout(l, d)),
                        a
                }
            }
            ,
            y.debounce = function (e, t, i) {
                var n, s, a, r, o, l = function () {
                    var c = y.now() - r;
                    t > c && c >= 0 ? n = setTimeout(l, t - c) : (n = null,
                        i || (o = e.apply(a, s),
                            n || (a = s = null)))
                };
                return function () {
                    a = this,
                        s = arguments,
                        r = y.now();
                    var c = i && !n;
                    return n || (n = setTimeout(l, t)),
                        c && (o = e.apply(a, s),
                            a = s = null),
                        o
                }
            }
            ,
            y.wrap = function (e, t) {
                return y.partial(t, e)
            }
            ,
            y.negate = function (e) {
                return function () {
                    return !e.apply(this, arguments)
                }
            }
            ,
            y.compose = function () {
                var e = arguments
                    , t = e.length - 1;
                return function () {
                    for (var i = t, n = e[t].apply(this, arguments); i--;)
                        n = e[i].call(this, n);
                    return n
                }
            }
            ,
            y.after = function (e, t) {
                return function () {
                    return --e < 1 ? t.apply(this, arguments) : void 0
                }
            }
            ,
            y.before = function (e, t) {
                var i;
                return function () {
                    return --e > 0 && (i = t.apply(this, arguments)),
                        1 >= e && (t = null),
                        i
                }
            }
            ,
            y.once = y.partial(y.before, 2);
        var D = !{
            toString: null
        }.propertyIsEnumerable("toString")
            , M = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        y.keys = function (e) {
            if (!y.isObject(e))
                return [];
            if (f)
                return f(e);
            var t = [];
            for (var i in e)
                y.has(e, i) && t.push(i);
            return D && n(e, t),
                t
        }
            ,
            y.allKeys = function (e) {
                if (!y.isObject(e))
                    return [];
                var t = [];
                for (var i in e)
                    t.push(i);
                return D && n(e, t),
                    t
            }
            ,
            y.values = function (e) {
                for (var t = y.keys(e), i = t.length, n = Array(i), s = 0; i > s; s++)
                    n[s] = e[t[s]];
                return n
            }
            ,
            y.mapObject = function (e, t, i) {
                t = x(t, i);
                for (var n, s = y.keys(e), a = s.length, r = {}, o = 0; a > o; o++)
                    n = s[o],
                        r[n] = t(e[n], n, e);
                return r
            }
            ,
            y.pairs = function (e) {
                for (var t = y.keys(e), i = t.length, n = Array(i), s = 0; i > s; s++)
                    n[s] = [t[s], e[t[s]]];
                return n
            }
            ,
            y.invert = function (e) {
                for (var t = {}, i = y.keys(e), n = 0, s = i.length; s > n; n++)
                    t[e[i[n]]] = i[n];
                return t
            }
            ,
            y.functions = y.methods = function (e) {
                var t = [];
                for (var i in e)
                    y.isFunction(e[i]) && t.push(i);
                return t.sort()
            }
            ,
            y.extend = w(y.allKeys),
            y.extendOwn = y.assign = w(y.keys),
            y.findKey = function (e, t, i) {
                t = x(t, i);
                for (var n, s = y.keys(e), a = 0, r = s.length; r > a; a++)
                    if (n = s[a],
                        t(e[n], n, e))
                        return n
            }
            ,
            y.pick = function (e, t, i) {
                var n, s, a = {}, r = e;
                if (null == r)
                    return a;
                y.isFunction(t) ? (s = y.allKeys(r),
                    n = b(t, i)) : (s = A(arguments, !1, !1, 1),
                        n = function (e, t, i) {
                            return t in i
                        }
                        ,
                        r = Object(r));
                for (var o = 0, l = s.length; l > o; o++) {
                    var c = s[o]
                        , d = r[c];
                    n(d, c, r) && (a[c] = d)
                }
                return a
            }
            ,
            y.omit = function (e, t, i) {
                if (y.isFunction(t))
                    t = y.negate(t);
                else {
                    var n = y.map(A(arguments, !1, !1, 1), String);
                    t = function (e, t) {
                        return !y.contains(n, t)
                    }
                }
                return y.pick(e, t, i)
            }
            ,
            y.defaults = w(y.allKeys, !0),
            y.create = function (e, t) {
                var i = _(e);
                return t && y.extendOwn(i, t),
                    i
            }
            ,
            y.clone = function (e) {
                return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e
            }
            ,
            y.tap = function (e, t) {
                return t(e),
                    e
            }
            ,
            y.isMatch = function (e, t) {
                var i = y.keys(t)
                    , n = i.length;
                if (null == e)
                    return !n;
                for (var s = Object(e), a = 0; n > a; a++) {
                    var r = i[a];
                    if (t[r] !== s[r] || !(r in s))
                        return !1
                }
                return !0
            }
            ;
        var I = function (e, t, i, n) {
            if (e === t)
                return 0 !== e || 1 / e === 1 / t;
            if (null == e || null == t)
                return e === t;
            e instanceof y && (e = e._wrapped),
                t instanceof y && (t = t._wrapped);
            var s = u.call(e);
            if (s !== u.call(t))
                return !1;
            switch (s) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + e == "" + t;
                case "[object Number]":
                    return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                case "[object Date]":
                case "[object Boolean]":
                    return +e === +t
            }
            var a = "[object Array]" === s;
            if (!a) {
                if ("object" != typeof e || "object" != typeof t)
                    return !1;
                var r = e.constructor
                    , o = t.constructor;
                if (r !== o && !(y.isFunction(r) && r instanceof r && y.isFunction(o) && o instanceof o) && "constructor" in e && "constructor" in t)
                    return !1
            }
            i = i || [],
                n = n || [];
            for (var l = i.length; l--;)
                if (i[l] === e)
                    return n[l] === t;
            if (i.push(e),
                n.push(t),
                a) {
                if (l = e.length,
                    l !== t.length)
                    return !1;
                for (; l--;)
                    if (!I(e[l], t[l], i, n))
                        return !1
            } else {
                var c, d = y.keys(e);
                if (l = d.length,
                    y.keys(t).length !== l)
                    return !1;
                for (; l--;)
                    if (c = d[l],
                        !y.has(t, c) || !I(e[c], t[c], i, n))
                        return !1
            }
            return i.pop(),
                n.pop(),
                !0
        };
        y.isEqual = function (e, t) {
            return I(e, t)
        }
            ,
            y.isEmpty = function (e) {
                return null == e ? !0 : T(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length
            }
            ,
            y.isElement = function (e) {
                return !(!e || 1 !== e.nodeType)
            }
            ,
            y.isArray = p || function (e) {
                return "[object Array]" === u.call(e)
            }
            ,
            y.isObject = function (e) {
                var t = typeof e;
                return "function" === t || "object" === t && !!e
            }
            ,
            y.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function (e) {
                y["is" + e] = function (t) {
                    return u.call(t) === "[object " + e + "]"
                }
            }),
            y.isArguments(arguments) || (y.isArguments = function (e) {
                return y.has(e, "callee")
            }
            ),
            "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function (e) {
                return "function" == typeof e || !1
            }
            ),
            y.isFinite = function (e) {
                return isFinite(e) && !isNaN(parseFloat(e))
            }
            ,
            y.isNaN = function (e) {
                return y.isNumber(e) && e !== +e
            }
            ,
            y.isBoolean = function (e) {
                return e === !0 || e === !1 || "[object Boolean]" === u.call(e)
            }
            ,
            y.isNull = function (e) {
                return null === e
            }
            ,
            y.isUndefined = function (e) {
                return void 0 === e
            }
            ,
            y.has = function (e, t) {
                return null != e && h.call(e, t)
            }
            ,
            y.noConflict = function () {
                return s._ = a,
                    this
            }
            ,
            y.identity = function (e) {
                return e
            }
            ,
            y.constant = function (e) {
                return function () {
                    return e
                }
            }
            ,
            y.noop = function () { }
            ,
            y.property = k,
            y.propertyOf = function (e) {
                return null == e ? function () { }
                    : function (t) {
                        return e[t]
                    }
            }
            ,
            y.matcher = y.matches = function (e) {
                return e = y.extendOwn({}, e),
                    function (t) {
                        return y.isMatch(t, e)
                    }
            }
            ,
            y.times = function (e, t, i) {
                var n = Array(Math.max(0, e));
                t = b(t, i, 1);
                for (var s = 0; e > s; s++)
                    n[s] = t(s);
                return n
            }
            ,
            y.random = function (e, t) {
                return null == t && (t = e,
                    e = 0),
                    e + Math.floor(Math.random() * (t - e + 1))
            }
            ,
            y.now = Date.now || function () {
                return (new Date).getTime()
            }
            ;
        var P = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
            , L = y.invert(P)
            , O = function (e) {
                var t = function (t) {
                    return e[t]
                }
                    , i = "(?:" + y.keys(e).join("|") + ")"
                    , n = RegExp(i)
                    , s = RegExp(i, "g");
                return function (e) {
                    return e = null == e ? "" : "" + e,
                        n.test(e) ? e.replace(s, t) : e
                }
            };
        y.escape = O(P),
            y.unescape = O(L),
            y.result = function (e, t, i) {
                var n = null == e ? void 0 : e[t];
                return void 0 === n && (n = i),
                    y.isFunction(n) ? n.call(e) : n
            }
            ;
        var N = 0;
        y.uniqueId = function (e) {
            var t = ++N + "";
            return e ? e + t : t
        }
            ,
            y.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
        var z = /(.)^/
            , H = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
            , j = /\\|'|\r|\n|\u2028|\u2029/g
            , F = function (e) {
                return "\\" + H[e]
            };
        y.template = function (e, t, i) {
            !t && i && (t = i),
                t = y.defaults({}, t, y.templateSettings);
            var n = RegExp([(t.escape || z).source, (t.interpolate || z).source, (t.evaluate || z).source].join("|") + "|$", "g")
                , s = 0
                , a = "__p+='";
            e.replace(n, function (t, i, n, r, o) {
                return a += e.slice(s, o).replace(j, F),
                    s = o + t.length,
                    i ? a += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" : n ? a += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"),
                    t
            }),
                a += "';\n",
                t.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var r = new Function(t.variable || "obj", "_", a)
            } catch (o) {
                throw o.source = a,
                o
            }
            var l = function (e) {
                return r.call(this, e, y)
            }
                , c = t.variable || "obj";
            return l.source = "function(" + c + "){\n" + a + "}",
                l
        }
            ,
            y.chain = function (e) {
                var t = y(e);
                return t._chain = !0,
                    t
            }
            ;
        var R = function (e, t) {
            return e._chain ? y(t).chain() : t
        };
        y.mixin = function (e) {
            y.each(y.functions(e), function (t) {
                var i = y[t] = e[t];
                y.prototype[t] = function () {
                    var e = [this._wrapped];
                    return c.apply(e, arguments),
                        R(this, i.apply(y, e))
                }
            })
        }
            ,
            y.mixin(y),
            y.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (e) {
                var t = r[e];
                y.prototype[e] = function () {
                    var i = this._wrapped;
                    return t.apply(i, arguments),
                        "shift" !== e && "splice" !== e || 0 !== i.length || delete i[0],
                        R(this, i)
                }
            }),
            y.each(["concat", "join", "slice"], function (e) {
                var t = r[e];
                y.prototype[e] = function () {
                    return R(this, t.apply(this._wrapped, arguments))
                }
            }),
            y.prototype.value = function () {
                return this._wrapped
            }
            ,
            y.prototype.valueOf = y.prototype.toJSON = y.prototype.value,
            y.prototype.toString = function () {
                return "" + this._wrapped
            }
            ,
            "function" == typeof define && define.amd && define("underscore", [], function () {
                return y
            })
    }
        .call(this);
