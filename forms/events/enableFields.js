function enableFields(form) {
	var activity = getValue('WKNumState');
    
    /** Life Cycle */
    
    if ( activity == 0 || activity == 4 ) {
		//form.setEnabled('fieldName',false, true);
		//disablePaiFilho();
    }

    /** Fim - Life Cycle */

    function disablePaiFilho() {
        var list = form.getChildrenIndexes("table");
        for (var i = 0; i < list.length; i++) {
            form.setEnabled("field1___"+list[i],false, true);
            form.setEnabled("field2___"+list[i],false, true);
        }
    }
}