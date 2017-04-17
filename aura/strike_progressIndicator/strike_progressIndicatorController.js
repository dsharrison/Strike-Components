({
    onInit: function(component, event, helper) {
        helper.setProgressClass(component);
        helper.initProgressItemsFromBody(component);
        helper.setCurrentProgressStepNumberOnItems(component);
        helper.setProgressPercent(component);
    },
    onCurrentStepNumberChange: function(component, event, helper) {
        helper.setCurrentProgressStepNumberOnItems(component);
        helper.setProgressPercent(component);
    },
    nextStep: function(component, event, helper) {

        // Move to the next step. Note that this will allow you to go past the number
        // of steps you have so that they can be all marked complete.
        var currentStep = component.get('v.currentStepNumber');
        currentStep++;
        component.set('v.currentStepNumber', currentStep);
    },
    prevStep: function(component, event, helper) {

        // Move to the previous step if we are not already at 1
        var currentStep = component.get('v.currentStepNumber');
        if(currentStep > 1) {
            currentStep--;
        }
        component.set('v.currentStepNumber', currentStep);
    },
    handleNotifyParent: function(component, event, helper) {

        // Check to see if we allow click navigation
        var allowClickNav = component.get('v.allowClickStepNavigation');

        if(allowClickNav) {

            // If we do, fire the event to notify of the click
            helper.setCurrentStepFromClick(component, event.getParam('data'));
        }
    }
})