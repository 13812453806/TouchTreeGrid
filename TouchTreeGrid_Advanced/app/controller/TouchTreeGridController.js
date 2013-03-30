/*
 * File: app/controller/TouchTreeGridController.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.controller.TouchTreeGridController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            example2: '#example2',
            main: {
                selector: 'main',
                xtype: 'main'
            },
            griddetailpanel: {
                autoCreate: true,
                selector: 'griddetailpanel',
                xtype: 'griddetailpanel'
            },
            censusmaine: '#censusmaine',
            censusdetailpanel: {
                autoCreate: true,
                selector: 'censusdetailpanel',
                xtype: 'censusdetailpanel'
            },
            gridHelpPanel: {
                autoCreate: true,
                selector: 'gridHelpPanel',
                xtype: 'gridHelpPanel'
            }
        },

        control: {
            "container#firstexample": {
                leafItemTap: 'onFirstExampleLeafItemTap',
                nodeItemTap: 'onFirstExampleNodeItemTap'
            },
            "list#example2list": {
                disclose: 'onExample2ListDisclose',
                itemtaphold: 'onExample2ListItemTaphold'
            },
            "button#griddetailbackbtn": {
                tap: 'onGridDetailBackButtonTap'
            },
            "container#example2": {
                pullrefresh: 'onExample2ListPullrefresh'
            },
            "list#censusmainelist": {
                disclose: 'onCensusMaineListDisclose'
            },
            "button#censusdetailbackbtn": {
                tap: 'onCensusDetailBackButtonTap'
            },
            "viewport": {
                orientationchange: 'onOrientationChange'
            },
            "tabpanel#maintabpanel": {
                activeitemchange: 'onMainTabpanelActiveItemChange'
            },
            "list#example2Blist": {
                disclose: 'onExample2BListDisclose'
            },
            "titlebar": {
                gridhelp: 'onTitlebarGridhelp'
            }
        }
    },

    onFirstExampleLeafItemTap: function(me, list, index, target, record, e) {
        //     Ext.Msg.alert('You tapped leaf! : ' + record.get('text'));
        console.log('You tapped leaf! : ' + record.get('text'));
    },

    onFirstExampleNodeItemTap: function(me, list, index, target, record, e) {
        console.log('You tapped Node: ' + record.get('text'));
    },

    onExample2ListDisclose: function(list, record, target, index, e, eOpts) {
        this.onExample2ListDiscloseOrHold(record, target, index);
    },

    onGridDetailBackButtonTap: function(button, e, eOpts) {
        // Reusing the Back button for all Project Task examples by storing references when creating detail panel (list disclose)
        var swapcont = button.up('#griddetailpanel').swapcont;  
        if (swapcont)
        {
            gridItemId = button.up('#griddetailpanel').gridItemId;
            var newcont = swapcont.down('#'+gridItemId); 

            newcont.setShowAnimation({type :"slide", direction : "right"});
            swapcont.setActiveItem(newcont);  
        }    
    },

    onExample2ListPullrefresh: function(container) {
        this.loadExample2Store(container);
    },

    onCensusMaineListDisclose: function(list, record, target, index, e, eOpts) {
        var swapcont = this.getMain().down('#censusmainecontainer');   
        if (swapcont)
        {
            var newcont = this.getCensusdetailpanel(
            {
                title : '2000 Census (Maine)',
                id : 'censusmainedetail',
                layout: {type: 'vbox'},
                scrollable: 'vertical'
            }
            );

            var device = ((Ext.os.is.Phone) ? 'phone' : 'tablet');
            var orient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'landscape' : 'portrait');

            var inputCls = ((device==='phone' && orient==='portrait') ? 'detailtextfields-phone-portrait' : 'detailtextfields');

            if (newcont)
            {
                var myList = this.getCensusmaine();
                var newLabel = newcont.down('#censusdetaillabel');    
                newLabel.setHtml(record.get('CATEG'));       

                var fldSet = newcont.down('#censusfieldset1');
                var result = fldSet.setConfig({
                    items : [
                    {label: 'Total Population',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.TotalPopulation, 0)}, 
                    {label: 'Male',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Male, 0)}, 
                    {label: 'Female',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Female, 0)}, 
                    {label: 'Under 5 years',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Under5years, 0)}, 
                    {label: '5 to 9',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age5to9, 0)}, 
                    {label: '10 to 14',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age10to14, 0)}, 
                    {label: '15 to 19',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age15to19, 0)}, 
                    {label: '20 to 24',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age20to24, 0)}, 
                    {label: '25 to 34',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age25to34, 0)}, 
                    {label: '35 to 44',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age35to44, 0)}, 
                    {label: '45 to 54',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age45to54, 0)}, 
                    {label: '55 to 59',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age55to59, 0)}, 
                    {label: '60 to 64',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age60to64, 0)}, 
                    {label: '65 to 74',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65to74, 0)}, 
                    {label: '75 to 84',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age75to84, 0)}, 
                    {label: '85 and Over',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age85andOver, 0)}, 
                    {label: 'Median Age',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.MedianAge, 0)}, 
                    {label: '18 and Over',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age18andOver, 0)}, 
                    {label: '18 and Over Male',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age18andOverMale, 0)}, 
                    {label: '18 and Over Female',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age18andOverFemale, 0)}, 
                    {label: '21 and Over',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age21andOver, 0)}, 
                    {label: '62 and Over',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age62andOver, 0)}, 
                    {label: '65 and Over',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65andOver, 0)}, 
                    {label: '65 and Over Male',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65andOverMale, 0)}, 
                    {label: '65 and Over Female',labelWidth: '60%', inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65andOverFemale, 0)}
                ]}); 

                var fldSet2 = newcont.down('#censusfieldset2');
                var resul2t = fldSet2.setConfig({
                    items : [
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.TotalPopulation/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Male/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Female/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Under5years/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age5to9/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age10to14/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age15to19/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age20to24/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age25to34/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age35to44/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age45to54/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age55to59/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age60to64/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65to74/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age75to84/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age85andOver/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.MedianAge/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age18andOver/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age18andOverMale/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age18andOverFemale/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age21andOver/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age62andOver/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65andOver/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65andOverMale/record.data.TotalPopulation*100, 1, "", "%")},
                    {inputCls: inputCls, xtype: 'textfield', readOnly: true, value: myList.formatNumbers(record.data.Age65andOverFemale/record.data.TotalPopulation*100, 1, "", "%")}
                ]}); 
                swapcont.add(newcont);
                swapcont.setActiveItem(newcont);      
            }
        }
    },

    onCensusDetailBackButtonTap: function(button, e, eOpts) {
        var swapcont = this.getMain().down('#censusmainecontainer');   
        if (swapcont)
        {
            var newcont = swapcont.down('#censusmaine'); 
            var priorcont = swapcont.down('#censusmainedetail'); 

            newcont.setShowAnimation({type :"slide", direction : "right"});
            swapcont.setActiveItem(newcont);  
        }    
    },

    onOrientationChange: function(viewport, orientation, width, height) {
        //Ext.Msg.alert('', 'Orientation change: ' + orientation, Ext.emptyFn); 


        // Call funciton to hide/show titlebar and bottom tabbar when in landscape mode, but only if
        // active window contains TouchGridPanel with active expand/collapse toolbar
        this.hideShowPanels();

        // Demo reconfiguring columns array for Census example based on device and orientation
        this.loadColumnsCensusMaine();
    },

    onMainTabpanelActiveItemChange: function(container, value, oldValue, eOpts) {
        newcont = value.getItemId();
        var grid, gridcont, numNodes;


        if (value.getItemId() === 'projecttab') {
            // Project example contained within sub tab panel so need to get active item of that 
            gridcont = value.down('#projecttabpanel').getActiveItem().down('#touchtreegrid');
        } else
        {    
            gridcont = value.down('#touchtreegrid');
        }

        gridcont = value.down('touchtreegrid');
        grid = gridcont.down('#'+gridcont.getListItemId());

        if (newcont === 'censusmainecontainer') {

            // Check store for data and load if empty (only)
            numNodes = grid.getStore().getData().length;
            if (numNodes === 0) {this.loadCensusMaine2000Store();}  
        }

        if (newcont === 'projecttab'){
            // Check store for data and load if empty (only)
            numNodes = grid.getStore().getData().length;
            if (numNodes === 0) {this.loadExample2Store(gridcont);}  
        }


    },

    onExample2BListDisclose: function(list, record, target, index, e, eOpts) {
        //Ext.Msg.alert('You disclosed record: ' + record.get('task'));


        var swapcont = this.getMain().down('#example2Bcontainer');   
        if (swapcont)
        {
            var newcont = this.getGriddetailpanel(
            {
                title : 'Example 2B Detail',
                id : 'example2Bdetail',
                layout: {type: 'fit'},
                itemId: 'griddetailpanel'
            }
            );

            var gridItemId = swapcont.down('touchtreegrid').getItemId();
            newcont.swapcont = swapcont;
            newcont.gridItemId = gridItemId;

            if (newcont)
            {
                var newLabel = newcont.down('#griddetaillabel');    
                newLabel.setHtml(record.get('task'));       

                var fldSet = newcont.down('#griddetailfieldset');
                var result = fldSet.setConfig({
                    items : [
                    {label: 'Task', xtype: 'textfield', readOnly: true, value: record.data.task}, 
                    {label: 'User', xtype: 'textfield', readOnly: true, value: record.data.user}, 
                    {label: 'Duration', xtype: 'numberfield', readOnly: true, value: record.data.duration}, 
                    {label: 'Done?', xtype: 'checkboxfield', disabledCls: null, checked: record.data.done}
                ]}); 

                swapcont.add(newcont);
                swapcont.setActiveItem(newcont);     
            }
        }
    },

    onTitlebarGridhelp: function(main) {
        // Trapping tap event on entire titlebar instead of just help icon
        var me=this;

        var image = main.down('#gridhelp');


        var currItem = Ext.Viewport.down('#maintabpanel').getActiveItem();

        var grid, projex=false;
        if (currItem.getItemId() === 'projecttab') {
            // Project example contained within sub tab panel so need to get active item of that 
            projex=true;
            grid = currItem.down('#projecttabpanel').getActiveItem().down('touchtreegrid');
        } else
        {    
            grid = currItem.down('touchtreegrid');
        }   


        if (!grid) {return;}

        gridId = grid.getHelpHtml();

        Ext.Ajax.request({
            url: gridId,
            method: 'GET',
            callback: function(options, success, response) {

                var help = me.getGridHelpPanel();
                help.setHtml( response.responseText );
                help.showBy(image);
            }
        });
    },

    onExample2ListItemTaphold: function(dataview, index, target, record, e, eOpts) {
        // Example where we can treat long presses same as disclose event to improve on 
        // sensitivity issues with smaller icon.
        // Note:  long press (1 second) works on full item, but not actually on icon itself
        if (record.get('leaf')) {
            this.onExample2ListDiscloseOrHold(record, target, index);
        }
    },

    loadExample2Store: function(gridcont) {
        var me = this;

        var gridurl = 'data/treegrid.json';

        me.loadStore(me, gridcont, gridurl, 'Loading Project...');

    },

    loadStore: function(me, gridcont, gridurl, loadmask) {
        // Load data from JSON file within Controller since doesn't seem to work from within Store itself.
        // NOTE:  autoload=true -and- dummy root initialization required in Store to work=>
        //     root: {children: []}

        if (loadmask) {
            Ext.Viewport.setMasked({
                xtype: 'loadmask',
                message: loadmask
            });
        }

        // Change this to reload function with Pull Refresh
        var myRequest = Ext.Ajax.request({
            url: gridurl,
            method: 'GET',
            timeout: 10000,
            cache: false,
            dataType: 'json',
            reader:{
                type: 'json'
            },

            success: function(response) {
                var griddata = Ext.JSON.decode(response.responseText);

                var gridListItemId = gridcont.getListItemId();
                var gridlist = gridcont.down('#'+gridListItemId);
                var gridstore = gridlist.getStore();

                gridstore.removeAll();
                var gridloaded = gridstore.setData(griddata);  
                // setRoot() not working => http://www.sencha.com/forum/showthread.php?242257

                if (loadmask) {Ext.Viewport.setMasked(false);}

                me.postLoadProcess(gridListItemId, gridcont); 

            },

            failure: function(response, opts) {
                if (loadmask) {Ext.Viewport.setMasked(false);}

                Ext.Msg.alert('Data not loaded: '+gridurl);     
            }
        });

    },

    loadCensusMaine2000Store: function() {
        var me = this;

        var gridcont = me.getCensusmaine();
        var gridurl = 'data/censusmaine2000TREE.json';

        me.loadStore(me, gridcont, gridurl, 'Loading Census...');


    },

    loadColumnsCensusMaine: function() {
        /* Demo grid column changes based on device (phone vs. tablet) and orientation (portrait vs. landscape) */
        /* NOTE:  When connected to data source suggest storing array configruations in a table 
        for each grid, device and orienation configuration */ 

        var device = ((Ext.os.is.Phone) ? 'phone' : 'tablet');
        var orient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'landscape' : 'portrait');

        var colArr = [];

        if (device==='phone' && orient==='portrait') {
            colArr = [
            {
                header: '&nbsp;',
                dataIndex: 'CATEG',
                width: '35%',
                style: 'text-align: left;',
                categStyle: 'font-weight: bold; text-align: left; color: blue;',
                headerStyle: 'text-align: left; color: #ccc;'
            },
            {
                header: 'Population',
                dataIndex: 'TotalPopulation',
                width: '20%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.TotalPopulation, 0)'
            },
            {
                header: 'Males',
                dataIndex: 'Male',
                width: '20%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Male, 0)'
            },
            {
                header: 'Females',
                dataIndex: 'Female',
                width: '20%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Female, 0)'
            }
            ];    
        }

        if (device==='phone' && orient==='landscape') {
            colArr = [
            {
                header: '&nbsp;',
                dataIndex: 'CATEG',
                width: '35%',
                style: 'text-align: left;',
                categStyle: 'font-weight: bold; text-align: left; color: blue;',
                headerStyle: 'text-align: left; color: #ccc;'
            },
            {
                header: 'Population',
                dataIndex: 'TotalPopulation',
                width: '15%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.TotalPopulation, 0)'
            },
            {
                header: 'Males',
                dataIndex: 'Male',
                width: '15%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Male, 0)'
            },
            {
                header: 'Females',
                dataIndex: 'Female',
                width: '15%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Female, 0)'
            },
            {
                header: 'Median',
                dataIndex: 'MedianAge',
                width: '15%',
                style: 'text-align: center;',
                categStyle: 'text-align: center;',
                headerStyle: 'text-align: center; color: #ccc;',
                renderer: 'this.formatNumbers(values.MedianAge, 0)'
            }
            ];  
        }

        if (device==='tablet' && orient==='portrait') {
            colArr = [
            {
                header: '&nbsp;',
                dataIndex: 'CATEG',
                width: '23%',
                style: 'text-align: left;',
                categStyle: 'font-weight: bold; text-align: left; color: blue;',
                headerStyle: 'text-align: left; color: #ccc;'
            },
            {
                header: 'Population',
                dataIndex: 'TotalPopulation',
                width: '12%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.TotalPopulation, 0)'
            },
            {
                header: 'Males',
                dataIndex: 'Male',
                width: '12%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Male, 0)'
            },
            {
                header: 'Females',
                dataIndex: 'Female',
                width: '12%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Female, 0)'
            },
            {
                header: 'Median',
                dataIndex: 'MedianAge',
                width: '12%',
                style: 'text-align: center;',
                categStyle: 'text-align: center;',
                headerStyle: 'text-align: center; color: #ccc;',
                renderer: 'this.formatNumbers(values.MedianAge, 0)'
            },
            {
                header: '18+',
                dataIndex: 'Age18andOver',
                width: '12%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Age18andOver, 0)'
            },
            {
                header: '21+',
                dataIndex: 'Age21andOver',
                width: '12%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Age21andOver, 0)'
            }
            ];    

        }

        if (device==='tablet' && orient==='landscape') {
            colArr = [
            {
                header: '&nbsp;',
                dataIndex: 'CATEG',
                width: '21%',
                style: 'text-align: left;',
                categStyle: 'font-weight: bold; text-align: left; color: blue;',
                headerStyle: 'text-align: left; color: #ccc;'
            },
            {
                header: 'Population',
                dataIndex: 'TotalPopulation',
                width: '10%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.TotalPopulation, 0)'
            },
            {
                header: 'Males',
                dataIndex: 'Male',
                width: '8%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Male, 0)'
            },
            {
                header: 'Females',
                dataIndex: 'Female',
                width: '8%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Female, 0)'
            },
            {
                header: 'Median',
                dataIndex: 'MedianAge',
                width: '8%',
                style: 'text-align: center;',
                categStyle: 'text-align: center;',
                headerStyle: 'text-align: center; color: #ccc;',
                renderer: 'this.formatNumbers(values.MedianAge, 0)'
            },
            {
                header: '18+',
                dataIndex: 'Age18andOver',
                width: '8%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Age18andOver, 0)'
            },
            {
                header: '21+',
                dataIndex: 'Age21andOver',
                width: '8%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Age21andOver, 0)'
            },
            {
                header: '62+',
                dataIndex: 'Age62andOver',
                width: '8%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Age62andOver, 0)'
            },
            {
                header: '65+',
                dataIndex: 'Age65andOver',
                width: '8%',
                style: 'text-align: right;',
                categStyle: 'text-align: right;',
                headerStyle: 'text-align: right; color: #ccc;',
                renderer: 'this.formatNumbers(values.Age65andOver, 0)'
            }
            ];    

        }

        var gridcont = this.getCensusmaine();
        gridcont.setColumns(colArr);
        gridcont.doRefreshList(true);   // Don't change collapse levels when refreshing

    },

    hideShowPanels: function() {
        // Controls display of panels when phone is in landscape vs portrait orientation to
        //provide more realestate for scrolling the data

        var device = ((Ext.os.is.Phone) ? 'phone' : 'tablet');
        var orient = ((Ext.Viewport.getWindowWidth() > Ext.Viewport.getWindowHeight()) ? 'landscape' : 'portrait');

        if (device !== 'phone') {return;}

        // Call funciton to hide/show titlebar and bottom tabbar when in landscape mode, but only if
        // active window contains TouchGridPanel with active expand/collapse toolbar
        var currItem = Ext.Viewport.down('#maintabpanel').getActiveItem();

        var collapseBar, projex=false;
        if (currItem.getItemId() === 'projecttab') {
            // Project example contained within sub tab panel so need to get active item of that 
            projex=true;
            collapseBar = currItem.down('#projecttabpanel').getActiveItem().down('#touchtreegridbuttons');
        } else
        {    
            collapseBar = currItem.down('#touchtreegridbuttons');
        }    

        if (!collapseBar) {return;}

        var hide = (orient === 'landscape');

        // Hide bottom tabbar and titlebar for phones in landscape mode ... show in portrait mode
        var main = this.getMain();

        main.down('#maintitlebar').setHidden(hide);
        main.down('#maintabbar').setHidden(hide);

        // I could add logic for Project tab to add this for each tab in event user tabs to different example
        // if (projex) {....} else {...}
        collapseBar.down('#touchtreegridlabel').setHtml(hide ? 'Rotate for Menu' : '');
        collapseBar.down('#touchtreegridicon').setHidden(!hide);


    },

    postLoadProcess: function(gridListItemId, gridcont) {
        var refreshed;

        if (gridListItemId === 'censusmainelist') {
            // Collapse nodes to defined level
            var depth = gridcont.getDefaultCollapseLevel();
            if (depth !== 99) {gridcont.doExpandDepth(depth);}

            this.loadColumnsCensusMaine(); // also refreshes list
        }
        else if ((gridListItemId ==='example2list') ||
        (gridListItemId ==='example2Blist') ||
        (gridListItemId ==='example2Clist')) {
            this.getMain().down('#example2list').up('touchtreegrid').doRefreshList();
            this.getMain().down('#example2Blist').up('touchtreegrid').doRefreshList();
            this.getMain().down('#example2Clist').up('touchtreegrid').doRefreshList();
        }
        else {
            refreshed = gridcont.doRefreshList(); 
        }
    },

    onExample2ListDiscloseOrHold: function(record, target, index) {
        //Ext.Msg.alert('You disclosed record: ' + record.get('task'));


        var swapcont = this.getMain().down('#example2container');   
        if (swapcont)
        {
            var newcont = this.getGriddetailpanel(
            {
                title : 'Example 2 Detail',
                id : 'example2detail',
                layout: {type: 'fit'},
                itemId: 'griddetailpanel'
            }
            );

            var gridItemId = swapcont.down('touchtreegrid').getItemId();
            newcont.swapcont = swapcont;
            newcont.gridItemId = gridItemId;

            if (newcont)
            {
                var newLabel = newcont.down('#griddetaillabel');    
                newLabel.setHtml(record.get('task'));       

                var fldSet = newcont.down('#griddetailfieldset');
                var result = fldSet.setConfig({
                    items : [
                    {label: 'Task', xtype: 'textfield', readOnly: true, value: record.data.task}, 
                    {label: 'User', xtype: 'textfield', readOnly: true, value: record.data.user}, 
                    {label: 'Duration', xtype: 'numberfield', readOnly: true, value: record.data.duration}, 
                    {label: 'Done?', xtype: 'checkboxfield', disabledCls: null, checked: record.data.done}
                ]}); 

                swapcont.add(newcont);
                swapcont.setActiveItem(newcont);     
            }
        }
    }

});