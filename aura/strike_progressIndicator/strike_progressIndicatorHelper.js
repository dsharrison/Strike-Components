({
    setProgressClass: function(component) {

        // Get the theme from the component
        var theme = component.get('v.theme');

        // Initialize our default progress class
        var progressClass = 'slds-progress';

        // If we have a user specified theme, check it
        if(theme) {
            theme = theme.toLowerCase();

            // Apply the shade theme
            if(theme === 'shade') {
                progressClass += ' slds-progress--shade';
            }
        }

        // Put the class back on the component
        component.set('v.progressClass', progressClass);
    },
    initProgressItemsFromBody: function(component) {

        // Get the body
        var body = component.get('v.body');

        // Initialize our item counter to 1.
        var progressItemStepNumber = 1;

        // Initialize our array of item components.
        var progressItems = [];

        // Iterate through each item in the body
        body.forEach(function(bodyComponent) {

            // If the item is a strike_progressItem, update the attributes on it
            // and push it into our array.
            if(bodyComponent.isInstanceOf('c:strike_progressItem')) {
                bodyComponent.set('v.stepNumber', progressItemStepNumber);
                progressItemStepNumber++;
                progressItems.push(bodyComponent);
            }
        });

        // Put our progress item components back in our array.
        component.set('v.progressItems', progressItems);

    },
    setCurrentProgressStepNumberOnItems: function(component) {

        // Get the current step number and items from the component
        var currentStepNumber = component.get('v.currentStepNumber');
        var progressItems = component.get('v.progressItems');

        // Update the current step number on each progress item
        progressItems.forEach(function(item) {
            item.set('v.currentProgressStepNumber', currentStepNumber);
        });
    },
    setProgressPercent: function(component) {

        // Get the current step and items from the component.
        var currentStepNumber = component.get('v.currentStepNumber');
        var progressItems = component.get('v.progressItems');

        // Calculate the percent.
        var progressPercent = currentStepNumber / progressItems.length;
        progressPercent = progressPercent.toFixed(2);
        if(progressPercent > 100) {
            progressPercent = 100;
        }

        // Put the percent back on the component.
        component.set('v.progressPercent', progressPercent);
    },
    setCurrentStepFromClick: function(component, data) {

        // Set the current step number to the step from the event data
        component.set('v.currentStepNumber', data.stepNumber)
    }
})