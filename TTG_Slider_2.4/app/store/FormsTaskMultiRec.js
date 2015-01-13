/*
 * File: app/store/FormsTaskMultiRec.js
 *
 * This file was generated by Sencha Architect version 3.1.0.
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

Ext.define('TouchTreeGrid.store.FormsTaskMultiRec', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'TouchTreeGrid.model.FormsTask',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    config: {
        autoLoad: true,
        model: 'TouchTreeGrid.model.FormsTask',
        storeId: 'FormsTaskMultiRec',
        defaultRootProperty: 'items',
        root: {
            items: [
                {
                    text: 'Later this week',
                    expanded: true,
                    categType: 'Short Form',
                    items: [
                        {
                            text: 'Call Mom',
                            comment: 'Sample comment',
                            check1: true,
                            option: 'second',
                            leaf: true
                        },
                        {
                            text: 'Later this week - Subjects',
                            categType: 'Mini Forms',
                            items: [
                                {
                                    text: 'Calculus',
                                    leaf: true,
                                    formType: 'mini'
                                },
                                {
                                    text: 'Physics',
                                    leaf: true,
                                    formType: 'mini'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: 'Today',
                    categType: 'Mixed Forms',
                    items: [
                        {
                            text: 'Mow Grass',
                            leaf: true,
                            formType: 'short'
                        },
                        {
                            text: 'Buy Groceries',
                            leaf: true,
                            formType: 'long'
                        },
                        {
                            text: 'Watch Game',
                            leaf: true,
                            formType: 'mini'
                        }
                    ]
                },
                {
                    text: 'Tomorrow',
                    categType: 'Mixed Forms',
                    items: [
                        {
                            text: 'Frisbee',
                            leaf: true,
                            formType: 'mini'
                        },
                        {
                            text: 'Cookout',
                            leaf: true,
                            formType: 'short'
                        }
                    ]
                },
                {
                    text: 'On Hold',
                    categType: 'Long Form',
                    items: [
                        {
                            text: 'Buy Clothes',
                            leaf: true,
                            formType: 'long'
                        }
                    ]
                }
            ]
        },
        proxy: {
            type: 'ajax',
            reader: {
                type: 'json'
            }
        }
    }
});