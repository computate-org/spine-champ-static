Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeChampionship')?.addEventListener('change', (event) => {
    facetRangeChange('Championship', event.target.value);
  });

  document.querySelector('#pageSelectSortChampionship_pk')?.addEventListener('change', (event) => {
    sort('Championship', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'pk', true);
  });
  document.querySelector('#pageStatsChampionship_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'pk', false);
  });

  document.querySelector('#pageSelectSortChampionship_created')?.addEventListener('change', (event) => {
    sort('Championship', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'created', true);
  });
  document.querySelector('#pageStatsChampionship_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'created', false);
  });

  document.querySelector('#pageSelectSortChampionship_modified')?.addEventListener('change', (event) => {
    sort('Championship', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'modified', true);
  });
  document.querySelector('#pageStatsChampionship_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'modified', false);
  });

  document.querySelector('#pageSelectSortChampionship_archived')?.addEventListener('change', (event) => {
    sort('Championship', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'archived', true);
  });
  document.querySelector('#pageStatsChampionship_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'archived', false);
  });

  document.querySelector('#pageSelectSortChampionship_finalFour')?.addEventListener('change', (event) => {
    sort('Championship', 'finalFour', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_finalFour')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'finalFour', true);
  });
  document.querySelector('#pageStatsChampionship_finalFour')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'finalFour', false);
  });

  document.querySelector('#pageSelectSortChampionship_guesserId')?.addEventListener('change', (event) => {
    sort('Championship', 'guesserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_guesserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'guesserId', true);
  });
  document.querySelector('#pageStatsChampionship_guesserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'guesserId', false);
  });

  document.querySelector('#pageSelectSortChampionship_year')?.addEventListener('change', (event) => {
    sort('Championship', 'year', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_year')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'year', true);
  });
  document.querySelector('#pageStatsChampionship_year')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'year', false);
  });

  document.querySelector('#pageSelectSortChampionship_correctGuesses')?.addEventListener('change', (event) => {
    sort('Championship', 'correctGuesses', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_correctGuesses')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'correctGuesses', true);
  });
  document.querySelector('#pageStatsChampionship_correctGuesses')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'correctGuesses', false);
  });

  document.querySelector('#pageSelectSortChampionship_incorrectGuesses')?.addEventListener('change', (event) => {
    sort('Championship', 'incorrectGuesses', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_incorrectGuesses')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'incorrectGuesses', true);
  });
  document.querySelector('#pageStatsChampionship_incorrectGuesses')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'incorrectGuesses', false);
  });

  document.querySelector('#pageSelectSortChampionship_game1WinnerGuess')?.addEventListener('change', (event) => {
    sort('Championship', 'game1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_game1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'game1WinnerGuess', true);
  });
  document.querySelector('#pageStatsChampionship_game1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'game1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortChampionship_game1Winner')?.addEventListener('change', (event) => {
    sort('Championship', 'game1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_game1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'game1Winner', true);
  });
  document.querySelector('#pageStatsChampionship_game1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'game1Winner', false);
  });

  document.querySelector('#pageSelectSortChampionship_game1Loser')?.addEventListener('change', (event) => {
    sort('Championship', 'game1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_game1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'game1Loser', true);
  });
  document.querySelector('#pageStatsChampionship_game1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'game1Loser', false);
  });

  document.querySelector('#pageSelectSortChampionship_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Championship', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsChampionship_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortChampionship_classSimpleName')?.addEventListener('change', (event) => {
    sort('Championship', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsChampionship_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortChampionship_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Championship', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsChampionship_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortChampionship_sessionId')?.addEventListener('change', (event) => {
    sort('Championship', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'sessionId', true);
  });
  document.querySelector('#pageStatsChampionship_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortChampionship_userKey')?.addEventListener('change', (event) => {
    sort('Championship', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'userKey', true);
  });
  document.querySelector('#pageStatsChampionship_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'userKey', false);
  });

  document.querySelector('#pageSelectSortChampionship_saves')?.addEventListener('change', (event) => {
    sort('Championship', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'saves', true);
  });
  document.querySelector('#pageStatsChampionship_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'saves', false);
  });

  document.querySelector('#pageSelectSortChampionship_objectTitle')?.addEventListener('change', (event) => {
    sort('Championship', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'objectTitle', true);
  });
  document.querySelector('#pageStatsChampionship_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortChampionship_displayPage')?.addEventListener('change', (event) => {
    sort('Championship', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'displayPage', true);
  });
  document.querySelector('#pageStatsChampionship_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortChampionship_editPage')?.addEventListener('change', (event) => {
    sort('Championship', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'editPage', true);
  });
  document.querySelector('#pageStatsChampionship_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'editPage', false);
  });

  document.querySelector('#pageSelectSortChampionship_userPage')?.addEventListener('change', (event) => {
    sort('Championship', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'userPage', true);
  });
  document.querySelector('#pageStatsChampionship_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'userPage', false);
  });

  document.querySelector('#pageSelectSortChampionship_download')?.addEventListener('change', (event) => {
    sort('Championship', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'download', true);
  });
  document.querySelector('#pageStatsChampionship_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'download', false);
  });

  document.querySelector('#pageSelectSortChampionship_objectSuggest')?.addEventListener('change', (event) => {
    sort('Championship', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsChampionship_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortChampionship_objectText')?.addEventListener('change', (event) => {
    sort('Championship', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'objectText', true);
  });
  document.querySelector('#pageStatsChampionship_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'objectText', false);
  });

  document.querySelector('#pageSelectSortChampionship_solrId')?.addEventListener('change', (event) => {
    sort('Championship', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'solrId', true);
  });
  document.querySelector('#pageStatsChampionship_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'solrId', false);
  });

  document.querySelector('#pageSelectSortChampionship_bracketId')?.addEventListener('change', (event) => {
    sort('Championship', 'bracketId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_bracketId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'bracketId', true);
  });
  document.querySelector('#pageStatsChampionship_bracketId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'bracketId', false);
  });

  document.querySelector('#pageSelectSortChampionship_name')?.addEventListener('change', (event) => {
    sort('Championship', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsChampionship_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Championship', 'name', true);
  });
  document.querySelector('#pageStatsChampionship_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Championship', 'name', false);
  });
          document.querySelector('#fqChampionship_created')?.addEventListener('change', (event) => {
            fqChange('Championship', event.currentTarget, facetChangeChampionshipSuccess, facetChangeChampionshipError);
          });
          document.querySelector('#buttonFacetChampionship_created')?.addEventListener('click', (event) => {
            facetFieldChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotChampionship_created')?.addEventListener('change', (event) => {
            facetPivotChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapChampionship_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartChampionship_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndChampionship_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Championship', event.currentTarget);
          });
          document.querySelector('#fqChampionship_archived')?.addEventListener('change', (event) => {
            fqChange('Championship', event.currentTarget, facetChangeChampionshipSuccess, facetChangeChampionshipError);
          });
          document.querySelector('#buttonFacetChampionship_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotChampionship_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapChampionship_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartChampionship_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndChampionship_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Championship', event.currentTarget);
          });
          document.querySelector('#fqChampionship_displayPage')?.addEventListener('change', (event) => {
            fqChange('Championship', event.currentTarget, facetChangeChampionshipSuccess, facetChangeChampionshipError);
          });
          document.querySelector('#buttonFacetChampionship_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotChampionship_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapChampionship_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartChampionship_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndChampionship_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Championship', event.currentTarget);
          });
          document.querySelector('#fqChampionship_editPage')?.addEventListener('change', (event) => {
            fqChange('Championship', event.currentTarget, facetChangeChampionshipSuccess, facetChangeChampionshipError);
          });
          document.querySelector('#buttonFacetChampionship_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotChampionship_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapChampionship_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartChampionship_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndChampionship_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Championship', event.currentTarget);
          });
          document.querySelector('#fqChampionship_userPage')?.addEventListener('change', (event) => {
            fqChange('Championship', event.currentTarget, facetChangeChampionshipSuccess, facetChangeChampionshipError);
          });
          document.querySelector('#buttonFacetChampionship_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotChampionship_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapChampionship_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartChampionship_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndChampionship_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Championship', event.currentTarget);
          });
          document.querySelector('#fqChampionship_download')?.addEventListener('change', (event) => {
            fqChange('Championship', event.currentTarget, facetChangeChampionshipSuccess, facetChangeChampionshipError);
          });
          document.querySelector('#buttonFacetChampionship_download')?.addEventListener('click', (event) => {
            facetFieldChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotChampionship_download')?.addEventListener('change', (event) => {
            facetPivotChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapChampionship_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartChampionship_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Championship', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndChampionship_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Championship', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteChampionship')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var bracketId =  event.currentTarget.getAttribute('data-bracketId');
      deleteChampionship(
          event.currentTarget
          , bracketId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterChampionship')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterChampionship(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
