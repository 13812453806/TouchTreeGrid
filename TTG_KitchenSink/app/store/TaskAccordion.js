/*
 * File: app/store/TaskAccordion.js
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

Ext.define('TouchTreeGrid.store.TaskAccordion', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'TouchTreeGrid.model.Task'
    ],

    config: {
        autoLoad: true,
        model: 'TouchTreeGrid.model.Task',
        storeId: 'TaskAccordionStore',
        defaultRootProperty: 'items',
        root: {
            items: [
                {
                    text: 'Today',
                    items: [
                        {
                            text: 'Mow Grass',
                            leaf: true
                        },
                        {
                            text: 'Buy Groceries',
                            leaf: true
                        },
                        {
                            text: 'Watch Game',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'Tomorrow',
                    items: [
                        {
                            text: 'Frisbee',
                            leaf: true
                        },
                        {
                            text: 'Cookout',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'This week',
                    items: [
                        {
                            text: 'Call Mom',
                            leaf: true
                        },
                        {
                            text: 'Study',
                            leaf: true
                        },
                        {
                            text: 'Take Test',
                            leaf: true
                        }
                    ]
                },
                {
                    text: 'Later',
                    items: [
                        {
                            text: 'Buy Clothes',
                            leaf: true
                        }
                    ]
                }
            ]
        }
    }
});