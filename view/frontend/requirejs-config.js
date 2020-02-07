/**
 * Strategery Infinitescroll - Magento 2 Module
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Academic Free License (AFL 3.0),
 * available through the world-wide-web at this URL:
 * http://opensource.org/licenses/afl-3.0.php
 *
 * @license http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
 * @copyright Copyright (c) 2016 Strategery Inc. (http://www.strategery.io/)
 * @author Damian A. Pastorini (damian.pastorini@strategery.io)
 */
var config = {
    map: {
        '*': {
            infinitescroll: 'Strategery_Infinitescroll/js/infinitescroll'
        }
    },
    paths: {
        'infiniteAjaxScroll': 'Strategery_Infinitescroll/js/jquery-ias.min'
    },
    shim : {
        infinitescroll: {
            deps: ['jquery']
        },
        infiniteAjaxScroll: {
            deps: ['jquery']
        }
    }
};
