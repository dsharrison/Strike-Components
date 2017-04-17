({
    onInit: function(component, event, helper) {

        helper.setProgressItemState(component);
        helper.setProgressItemClass(component);
    },
    onStepNumberChange: function(component, event, helper) {

        helper.setProgressItemState(component);
        helper.setProgressItemClass(component);
    },
    handleStepClick: function(component, event, helper) {

        // Fire off a notification to the parent component
        var notifyEvent = component.getEvent('strike_evt_notifyParent');
        notifyEvent.setParams({
            data: {
                stepNumber: component.get('v.stepNumber')
            }
        });
        notifyEvent.fire();
    }
})