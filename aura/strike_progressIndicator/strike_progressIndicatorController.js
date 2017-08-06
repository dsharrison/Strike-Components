({
	init: function(component, event, helper) {
		helper.buildState(component);
	},
	handleItemIndexChange: function(component, event, helper) {
		var currentItemIndex = component.get('v.currentItemIndex');
		var stages = component.get('v.stageNames');
		if(currentItemIndex >= stages.length) {
			currentItemIndex = stages.length;
			component.set('v.progressComplete', true);
		} else {
			component.set('v.progressComplete', false);
			if(currentItemIndex < 0) {
				currentItemIndex = 0;
			}
		}
		helper.buildState(component);
	},
	handleErrorState: function(component, event, helper) {
		helper.buildState(component);
	},
	moveToNextStep: function(component, event, helper) {
		var currentItemIndex = component.get('v.currentItemIndex');
		var stages = component.get('v.stageNames');
		currentItemIndex++;
		if(currentItemIndex >= stages.length) {
			currentItemIndex = stages.length;
			component.set('v.progressComplete', true);
		}
		component.set('v.currentItemIndex', currentItemIndex);
		helper.buildState(component);
	},
	moveToPreviousStep: function(component, event, helper) {
		var currentItemIndex = component.get('v.currentItemIndex');
		currentItemIndex--;
		component.set('v.progressComplete', false);
		if(currentItemIndex < 0) {
			currentItemIndex = 0;
		}
		component.set('v.currentItemIndex', currentItemIndex);
		helper.buildState(component);
	},
	handleProgressItemClick: function(component, event, helper) {
		var clickIndex = event.currentTarget.id;
		var progressItem = component.get('v.progressItems[' + clickIndex + ']');
		if(!progressItem.disabled) {
			component.set('v.currentItemIndex', parseInt(clickIndex, 10));
			helper.buildState(component);
		}
	}
})