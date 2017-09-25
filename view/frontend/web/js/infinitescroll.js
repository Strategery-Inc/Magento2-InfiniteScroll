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
define([
    "jquery",
    "jqueryIas",
    "infinitescroll"
], function($, jqueryIas, infinitescroll) {
    "use strict";
    window.SgyIAS = {
        debug: window.iasConfig.debug,
        _log: function(object) {
            if(this.debug) {
                console.log(object);
            }
        },
        init: function(){
            jQuery(function($) {
                // get system config:
                var config = {
                    item: window.iasConfig.mode,
                    container : window.iasConfig.container,
                    next: window.iasConfig.next,
                    pagination: window.iasConfig.pagination,
                    delay: 600,
                    negativeMargin: window.iasConfig.buffer,
                    history: {
                        prev: window.iasConfig.prev
                    },
                    noneleft: {
                        text: window.iasConfig.text,
                        html: window.iasConfig.html
                    },
                    spinner: {
                        src: window.iasConfig.spinnerSrc,
                        html: window.iasConfig.spinnerHtml
                    },
                    trigger: {
                        text: window.iasConfig.trigger.text,
                        html: window.iasConfig.trigger.html,
                        textPrev: window.iasConfig.trigger.textPrev,
                        htmlPrev: window.iasConfig.trigger.htmlPrev,
                        offset: window.iasConfig.trigger.offset
                    }
                };
                // check for custom configurations:
                if (window.iasConfigCustom){
                    $.extend(config, window.iasConfigCustom);
                }
                // logs:
                SgyIAS._log({extension: 'ias', config: config});
                window.ias = $.ias(config);
                SgyIAS._log({extension: 'paging'});
                window.ias.extension(new IASPagingExtension());
                SgyIAS._log({extension: 'spinner'});
                window.ias.extension(new IASSpinnerExtension(config.spinner));
                SgyIAS._log({extension: 'noneleft'});
                window.ias.extension(new IASNoneLeftExtension(config.noneleft));
                SgyIAS._log({extension: 'trigger'});
                window.ias.extension(new IASTriggerExtension(config.trigger));
                if(window.iasConfig.memoryActive){
                    SgyIAS._log({extension: 'history'});
                    window.ias.extension(new IASHistoryExtension(config.history));
                }
                // debug events
                window.ias.on('scroll', function(scrollOffset, scrollThreshold){
                    SgyIAS._log({eventName: 'scroll', scrollOffset: scrollOffset, scrollThreshold: scrollThreshold});
                });
                window.ias.on('load', function(event){
                    SgyIAS._log({eventName:'load', event: event});
                });
                window.ias.on('loaded', function(data, items){
                    SgyIAS._log({eventName: 'loaded', data: data, items: items});
                });
                window.ias.on('render', function(items){
                    SgyIAS._log({eventName: 'render', items: items});
                });
                window.ias.on('rendered', function(items){
                    SgyIAS._log({eventName: 'render', items: items});
                });
                window.ias.on('noneLeft', function(){
                    SgyIAS._log({eventName: 'noneLeft'});
                });
                window.ias.on('next', function(url){
                    SgyIAS._log({eventName: 'next', url: url});
                });
                window.ias.on('ready', function(){
                    SgyIAS._log({eventName: 'ready'});
                });
                if(window.iasConfig.toolbarAction == 'show') {
                    $(window.iasConfig.toolbarSelector).show();
                } else {
                    $(window.iasConfig.toolbarSelector).hide();
                }
                // custom fix for url protocol issue in jquery ias library:
                window.ias.getNextUrl = function(container) {
                    if (!container) {
                        container = window.ias.$container;
                    }
                    // always take the last matching item + fix to be protocol relative
                    var nexturl = $(window.ias.nextSelector, container).last().attr('href');
                    if(typeof nexturl !== "undefined") {
                        if (window.location.protocol == 'https:') {
                            nexturl = nexturl.replace('http:', window.location.protocol);
                        } else {
                            nexturl = nexturl.replace('https:', window.location.protocol);
                        }
                    }
                    return nexturl;
                };
                // custom infinitescroll done event:
                SgyIAS._log('Done loading IAS.');
                $(document).trigger( "infiniteScrollReady", [window.ias]);
            });
        }
    };
});
