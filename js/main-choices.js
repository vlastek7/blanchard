const element = document.querySelector('#gallary-filter');
    const choices = new Choices(element, {
      searchEnabled: false,
      shouldSort: false,
      position: 'bottom',
      // renderSelectedChoices: 'always',
      itemSelectText: ''
    });
