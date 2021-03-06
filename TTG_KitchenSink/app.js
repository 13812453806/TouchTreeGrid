/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.application({
    views: [
        'TouchTreeGrid',
        'OtherExamples'
    ],
    controllers: [
        'CommonController',
        'CensusController',
        'ListsController',
        'ProjectController',
        'TasksController',
        'FormsController',
        'LockedColsController'
    ],
    name: 'TouchTreeGrid',

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "A newer version of TTG_KitchenSink is available. Reload now?",
            function() {
                Ext.defer(function(){
                    window.location.reload();
                },
                          500);
            }
        );
    },

    launch: function() {

        Ext.create('TouchTreeGrid.view.MainContainer', {fullscreen: true});
    }

});
