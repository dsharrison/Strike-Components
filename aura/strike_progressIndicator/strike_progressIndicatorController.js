({
		init: function (component, event, helper) {
				component.set('v.currentItemIndex', component.get('v.activeStepIndex'));
				helper.buildState(component);
		},
		moveToNextStep: function (component, event, helper) {
				var currentItemIndex = component.get('v.currentItemIndex');
				currentItemIndex++;
				helper.buildState(component);
		},
		moveToPreviousStep: function (component, event, helper) {
				var currentItemIndex = component.get('v.currentItemIndex');
				currentItemIndex--;
				helper.buildState(component);
		},
		handleProgressItemClick: function (component, event, helper) {
				var clickIndex = event.currentTarget.id;
				var progressItem = component.get('v.progressItems[' + clickIndex + ']');
				if(!progressItem.disabled) {
						component.set('v.currentItemIndex', clickIndex);
						helper.buildState(component);
				}
		}
})