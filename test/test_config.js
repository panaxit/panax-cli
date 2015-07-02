module.exports = {
	"clearCache": "all",
	"rebuildMetadata": true,
	"config": {
		"dbo.CONTROLS_Basic": {
	    "Combobox": {
	      "@controlType": "combobox"
	    },
	    "Money": {
	      "@tab": "Otros"
	    },
	    "RadioGroup": {
	      "@controlType": "radiogroup",
	      "@moveBefore": "Combobox"
	    },
	    "ShortTextField": {
	      "@tab": "General",
	      "@tabPanel": "General"
	    }
		},
		"dbo.CONTROLS_Basic[@controlType='gridView']": {
	    "ShortTextField": {
	      "@mode": "inherit"
	    },
	    "Integer": {
	      "@mode": "inherit"
	    }
	  }
	}
}