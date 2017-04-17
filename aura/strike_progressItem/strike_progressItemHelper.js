({
    setProgressItemState: function(component) {

        // Get the current progress step number and the step number for this item.
        var currentStep = component.get('v.currentProgressStepNumber');
        var itemStep = component.get('v.stepNumber');

        // Compare the two to set the isActive and isComplete status variables.
        if(currentStep < itemStep) {
            component.set('v.isActive', false);
            component.set('v.isComplete', false);
        } else if(currentStep === itemStep) {
            component.set('v.isActive', true);
            component.set('v.isComplete', false);
        } else {
            component.set('v.isActive', false);
            component.set('v.isComplete', true);
        }
    },
    setProgressItemClass: function(component) {

        // Read the status from the component
        var isActive = component.get('v.isActive');
        var isComplete = component.get('v.isComplete');
        var hasError = component.get('v.hasError');

        // Initialize our icon name and label text
        var iconName;
        var labelText = component.get('v.alternativeText');

        // Check each state to set the class for the item and the icon/label
        var progressItemClass = 'slds-progress__item';
        if(isActive) {
            labelText += ' - Active';
            progressItemClass += ' slds-is-active';
            if(hasError) {
                iconName = 'utility:warning';
                labelText += ' - Error';
                progressItemClass += ' slds-has-error';
            }
        } else if(isComplete) {
            iconName = 'utility:success';
            labelText += ' - Completed';
            progressItemClass += ' slds-is-completed';
        }

        // Put the items back on the component
        component.set('v.progressItemClass', progressItemClass);
        component.set('v.iconName', iconName);
        component.set('v.labelText', labelText);
    }
})