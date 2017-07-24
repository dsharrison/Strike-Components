({
		buildState: function (component) {
				var stageNames = component.get('v.stageNames');
				var tooltips = component.get('v.tooltips');
				var activeStepIndex = component.get('v.currentItemIndex');
				if(!activeStepIndex) {
						activeStepIndex = 0;
				}
				activeStepIndex = parseInt(activeStepIndex, 10);
				var disableAllNav = component.get('v.disableAllNav');
				var disableBackwardNavOnComplete = component.get('v.disableBackwardNavOnComplete');
				var disableForwardNavOnIncomplete = component.get('v.disableForwardNavOnIncomplete');
				var error = component.get('v.error');
				var progressItems = [];
				var progressItem;

				for(var i = 0; i < stageNames.length; i++) {

						var showTooltip = (typeof tooltips !== 'undefined' && tooltips.length > i && typeof tooltips[i] !== 'undefined' && tooltips[i] !== '');

						progressItem = {
								name: stageNames[i],
								class: '',
								status: '',
								disabled: false,
								current: false,
								showTooltip: showTooltip,
								tooltipText: showTooltip ? tooltips[i] : null
						};

						if(i === activeStepIndex) {
								if(error) {
										progressItem.class = 'slds-has-error';
										progressItem.status = 'error';
								} else {
										progressItem.class = 'slds-is-active';
										progressItem.status = 'incomplete'
								}
								progressItem.disabled = true;
								progressItem.current = true;
						} else if(i < activeStepIndex) {
								progressItem.class = 'slds-is-completed';
								progressItem.status = 'complete';
								progressItem.disabled = (disableAllNav || disableBackwardNavOnComplete);
								progressItem.current = false;
						} else {
								progressItem.class = '';
								progressItem.status = 'incomplete';
								progressItem.disabled = (disableAllNav || disableForwardNavOnIncomplete);
								progressItem.current = false;
						}

						progressItems.push(progressItem);
				}

				component.set('v.progressItems', progressItems);
				this.updatePercentComplete(component);
		},
		updatePercentComplete: function (component) {
				var progressItems = component.get('v.progressItems');
				var currentItemIndex = component.get('v.currentItemIndex');

				var percentComplete = (currentItemIndex) / (progressItems.length - 1);
				percentComplete = percentComplete * 100;
				component.set('v.percentComplete', percentComplete);
		}
})