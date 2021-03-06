/*
 * File: app/model/BigDataModel.js
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

Ext.define('TouchTreeGrid.model.BigDataModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'department'
            },
            {
                dateFormat: 'Ymd',
                name: 'dob',
                type: 'date'
            },
            {
                name: 'email'
            },
            {
                name: 'employeeNo'
            },
            {
                name: 'forename'
            },
            {
                name: 'holidayAllowance',
                type: 'int'
            },
            {
                name: 'holidayDays',
                type: 'int'
            },
            {
                dateFormat: 'Ymd',
                name: 'joinDate',
                type: 'date'
            },
            {
                name: 'name'
            },
            {
                name: 'noticePeriod'
            },
            {
                name: 'rating',
                type: 'int'
            },
            {
                name: 'salary',
                type: 'float'
            },
            {
                name: 'sickDays',
                type: 'int'
            },
            {
                name: 'surname'
            }
        ]
    }
});