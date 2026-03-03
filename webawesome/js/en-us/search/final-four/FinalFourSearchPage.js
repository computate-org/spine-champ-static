Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeFinalFour')?.addEventListener('change', (event) => {
    facetRangeChange('FinalFour', event.target.value);
  });

  document.querySelector('#pageSelectSortFinalFour_pk')?.addEventListener('change', (event) => {
    sort('FinalFour', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'pk', true);
  });
  document.querySelector('#pageStatsFinalFour_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'pk', false);
  });

  document.querySelector('#pageSelectSortFinalFour_created')?.addEventListener('change', (event) => {
    sort('FinalFour', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'created', true);
  });
  document.querySelector('#pageStatsFinalFour_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'created', false);
  });

  document.querySelector('#pageSelectSortFinalFour_modified')?.addEventListener('change', (event) => {
    sort('FinalFour', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'modified', true);
  });
  document.querySelector('#pageStatsFinalFour_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'modified', false);
  });

  document.querySelector('#pageSelectSortFinalFour_archived')?.addEventListener('change', (event) => {
    sort('FinalFour', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'archived', true);
  });
  document.querySelector('#pageStatsFinalFour_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'archived', false);
  });

  document.querySelector('#pageSelectSortFinalFour_guesserId')?.addEventListener('change', (event) => {
    sort('FinalFour', 'guesserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_guesserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'guesserId', true);
  });
  document.querySelector('#pageStatsFinalFour_guesserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'guesserId', false);
  });

  document.querySelector('#pageSelectSortFinalFour_year')?.addEventListener('change', (event) => {
    sort('FinalFour', 'year', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_year')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'year', true);
  });
  document.querySelector('#pageStatsFinalFour_year')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'year', false);
  });

  document.querySelector('#pageSelectSortFinalFour_game1Winner')?.addEventListener('change', (event) => {
    sort('FinalFour', 'game1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_game1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'game1Winner', true);
  });
  document.querySelector('#pageStatsFinalFour_game1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'game1Winner', false);
  });

  document.querySelector('#pageSelectSortFinalFour_game1Loser')?.addEventListener('change', (event) => {
    sort('FinalFour', 'game1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_game1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'game1Loser', true);
  });
  document.querySelector('#pageStatsFinalFour_game1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'game1Loser', false);
  });

  document.querySelector('#pageSelectSortFinalFour_game2Winner')?.addEventListener('change', (event) => {
    sort('FinalFour', 'game2Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_game2Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'game2Winner', true);
  });
  document.querySelector('#pageStatsFinalFour_game2Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'game2Winner', false);
  });

  document.querySelector('#pageSelectSortFinalFour_game2Loser')?.addEventListener('change', (event) => {
    sort('FinalFour', 'game2Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_game2Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'game2Loser', true);
  });
  document.querySelector('#pageStatsFinalFour_game2Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'game2Loser', false);
  });

  document.querySelector('#pageSelectSortFinalFour_eliteEight')?.addEventListener('change', (event) => {
    sort('FinalFour', 'eliteEight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_eliteEight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'eliteEight', true);
  });
  document.querySelector('#pageStatsFinalFour_eliteEight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'eliteEight', false);
  });

  document.querySelector('#pageSelectSortFinalFour_championship')?.addEventListener('change', (event) => {
    sort('FinalFour', 'championship', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_championship')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'championship', true);
  });
  document.querySelector('#pageStatsFinalFour_championship')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'championship', false);
  });

  document.querySelector('#pageSelectSortFinalFour_classCanonicalName')?.addEventListener('change', (event) => {
    sort('FinalFour', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsFinalFour_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortFinalFour_classSimpleName')?.addEventListener('change', (event) => {
    sort('FinalFour', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsFinalFour_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortFinalFour_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('FinalFour', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsFinalFour_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortFinalFour_sessionId')?.addEventListener('change', (event) => {
    sort('FinalFour', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'sessionId', true);
  });
  document.querySelector('#pageStatsFinalFour_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortFinalFour_userKey')?.addEventListener('change', (event) => {
    sort('FinalFour', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'userKey', true);
  });
  document.querySelector('#pageStatsFinalFour_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'userKey', false);
  });

  document.querySelector('#pageSelectSortFinalFour_saves')?.addEventListener('change', (event) => {
    sort('FinalFour', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'saves', true);
  });
  document.querySelector('#pageStatsFinalFour_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'saves', false);
  });

  document.querySelector('#pageSelectSortFinalFour_objectTitle')?.addEventListener('change', (event) => {
    sort('FinalFour', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'objectTitle', true);
  });
  document.querySelector('#pageStatsFinalFour_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortFinalFour_displayPage')?.addEventListener('change', (event) => {
    sort('FinalFour', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'displayPage', true);
  });
  document.querySelector('#pageStatsFinalFour_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortFinalFour_editPage')?.addEventListener('change', (event) => {
    sort('FinalFour', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'editPage', true);
  });
  document.querySelector('#pageStatsFinalFour_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'editPage', false);
  });

  document.querySelector('#pageSelectSortFinalFour_userPage')?.addEventListener('change', (event) => {
    sort('FinalFour', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'userPage', true);
  });
  document.querySelector('#pageStatsFinalFour_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'userPage', false);
  });

  document.querySelector('#pageSelectSortFinalFour_download')?.addEventListener('change', (event) => {
    sort('FinalFour', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'download', true);
  });
  document.querySelector('#pageStatsFinalFour_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'download', false);
  });

  document.querySelector('#pageSelectSortFinalFour_objectSuggest')?.addEventListener('change', (event) => {
    sort('FinalFour', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsFinalFour_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortFinalFour_objectText')?.addEventListener('change', (event) => {
    sort('FinalFour', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'objectText', true);
  });
  document.querySelector('#pageStatsFinalFour_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'objectText', false);
  });

  document.querySelector('#pageSelectSortFinalFour_solrId')?.addEventListener('change', (event) => {
    sort('FinalFour', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'solrId', true);
  });
  document.querySelector('#pageStatsFinalFour_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'solrId', false);
  });

  document.querySelector('#pageSelectSortFinalFour_bracketId')?.addEventListener('change', (event) => {
    sort('FinalFour', 'bracketId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_bracketId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'bracketId', true);
  });
  document.querySelector('#pageStatsFinalFour_bracketId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'bracketId', false);
  });

  document.querySelector('#pageSelectSortFinalFour_name')?.addEventListener('change', (event) => {
    sort('FinalFour', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsFinalFour_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('FinalFour', 'name', true);
  });
  document.querySelector('#pageStatsFinalFour_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('FinalFour', 'name', false);
  });
          document.querySelector('#fqFinalFour_created')?.addEventListener('change', (event) => {
            fqChange('FinalFour', event.currentTarget, facetChangeFinalFourSuccess, facetChangeFinalFourError);
          });
          document.querySelector('#buttonFacetFinalFour_created')?.addEventListener('click', (event) => {
            facetFieldChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFinalFour_created')?.addEventListener('change', (event) => {
            facetPivotChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFinalFour_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFinalFour_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFinalFour_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#fqFinalFour_archived')?.addEventListener('change', (event) => {
            fqChange('FinalFour', event.currentTarget, facetChangeFinalFourSuccess, facetChangeFinalFourError);
          });
          document.querySelector('#buttonFacetFinalFour_archived')?.addEventListener('click', (event) => {
            facetFieldChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFinalFour_archived')?.addEventListener('change', (event) => {
            facetPivotChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFinalFour_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFinalFour_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFinalFour_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#fqFinalFour_displayPage')?.addEventListener('change', (event) => {
            fqChange('FinalFour', event.currentTarget, facetChangeFinalFourSuccess, facetChangeFinalFourError);
          });
          document.querySelector('#buttonFacetFinalFour_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFinalFour_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFinalFour_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFinalFour_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFinalFour_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#fqFinalFour_editPage')?.addEventListener('change', (event) => {
            fqChange('FinalFour', event.currentTarget, facetChangeFinalFourSuccess, facetChangeFinalFourError);
          });
          document.querySelector('#buttonFacetFinalFour_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFinalFour_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFinalFour_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFinalFour_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFinalFour_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#fqFinalFour_userPage')?.addEventListener('change', (event) => {
            fqChange('FinalFour', event.currentTarget, facetChangeFinalFourSuccess, facetChangeFinalFourError);
          });
          document.querySelector('#buttonFacetFinalFour_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFinalFour_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFinalFour_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFinalFour_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFinalFour_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#fqFinalFour_download')?.addEventListener('change', (event) => {
            fqChange('FinalFour', event.currentTarget, facetChangeFinalFourSuccess, facetChangeFinalFourError);
          });
          document.querySelector('#buttonFacetFinalFour_download')?.addEventListener('click', (event) => {
            facetFieldChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotFinalFour_download')?.addEventListener('change', (event) => {
            facetPivotChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapFinalFour_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartFinalFour_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('FinalFour', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndFinalFour_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('FinalFour', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteFinalFour')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var bracketId =  event.currentTarget.getAttribute('data-bracketId');
      deleteFinalFour(
          event.currentTarget
          , bracketId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterFinalFour')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterFinalFour(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
