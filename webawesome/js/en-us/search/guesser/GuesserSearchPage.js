Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeGuesser')?.addEventListener('change', (event) => {
    facetRangeChange('Guesser', event.target.value);
  });

  document.querySelector('#pageSelectSortGuesser_pk')?.addEventListener('change', (event) => {
    sort('Guesser', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'pk', true);
  });
  document.querySelector('#pageStatsGuesser_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'pk', false);
  });

  document.querySelector('#pageSelectSortGuesser_created')?.addEventListener('change', (event) => {
    sort('Guesser', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'created', true);
  });
  document.querySelector('#pageStatsGuesser_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'created', false);
  });

  document.querySelector('#pageSelectSortGuesser_modified')?.addEventListener('change', (event) => {
    sort('Guesser', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'modified', true);
  });
  document.querySelector('#pageStatsGuesser_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'modified', false);
  });

  document.querySelector('#pageSelectSortGuesser_archived')?.addEventListener('change', (event) => {
    sort('Guesser', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'archived', true);
  });
  document.querySelector('#pageStatsGuesser_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'archived', false);
  });

  document.querySelector('#pageSelectSortGuesser_name')?.addEventListener('change', (event) => {
    sort('Guesser', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'name', true);
  });
  document.querySelector('#pageStatsGuesser_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'name', false);
  });

  document.querySelector('#pageSelectSortGuesser_description')?.addEventListener('change', (event) => {
    sort('Guesser', 'description', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_description')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'description', true);
  });
  document.querySelector('#pageStatsGuesser_description')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'description', false);
  });

  document.querySelector('#pageSelectSortGuesser_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Guesser', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsGuesser_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortGuesser_classSimpleName')?.addEventListener('change', (event) => {
    sort('Guesser', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsGuesser_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortGuesser_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Guesser', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsGuesser_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortGuesser_sessionId')?.addEventListener('change', (event) => {
    sort('Guesser', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'sessionId', true);
  });
  document.querySelector('#pageStatsGuesser_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortGuesser_userKey')?.addEventListener('change', (event) => {
    sort('Guesser', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'userKey', true);
  });
  document.querySelector('#pageStatsGuesser_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'userKey', false);
  });

  document.querySelector('#pageSelectSortGuesser_saves')?.addEventListener('change', (event) => {
    sort('Guesser', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'saves', true);
  });
  document.querySelector('#pageStatsGuesser_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'saves', false);
  });

  document.querySelector('#pageSelectSortGuesser_objectTitle')?.addEventListener('change', (event) => {
    sort('Guesser', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'objectTitle', true);
  });
  document.querySelector('#pageStatsGuesser_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortGuesser_displayPage')?.addEventListener('change', (event) => {
    sort('Guesser', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'displayPage', true);
  });
  document.querySelector('#pageStatsGuesser_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortGuesser_editPage')?.addEventListener('change', (event) => {
    sort('Guesser', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'editPage', true);
  });
  document.querySelector('#pageStatsGuesser_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'editPage', false);
  });

  document.querySelector('#pageSelectSortGuesser_userPage')?.addEventListener('change', (event) => {
    sort('Guesser', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'userPage', true);
  });
  document.querySelector('#pageStatsGuesser_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'userPage', false);
  });

  document.querySelector('#pageSelectSortGuesser_download')?.addEventListener('change', (event) => {
    sort('Guesser', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'download', true);
  });
  document.querySelector('#pageStatsGuesser_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'download', false);
  });

  document.querySelector('#pageSelectSortGuesser_objectSuggest')?.addEventListener('change', (event) => {
    sort('Guesser', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsGuesser_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortGuesser_objectText')?.addEventListener('change', (event) => {
    sort('Guesser', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'objectText', true);
  });
  document.querySelector('#pageStatsGuesser_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'objectText', false);
  });

  document.querySelector('#pageSelectSortGuesser_solrId')?.addEventListener('change', (event) => {
    sort('Guesser', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'solrId', true);
  });
  document.querySelector('#pageStatsGuesser_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'solrId', false);
  });

  document.querySelector('#pageSelectSortGuesser_guesserId')?.addEventListener('change', (event) => {
    sort('Guesser', 'guesserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsGuesser_guesserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Guesser', 'guesserId', true);
  });
  document.querySelector('#pageStatsGuesser_guesserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Guesser', 'guesserId', false);
  });
          document.querySelector('#fqGuesser_created')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_created')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_created')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
          document.querySelector('#fqGuesser_archived')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
          document.querySelector('#fqGuesser_name')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_name')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_name')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
          document.querySelector('#fqGuesser_description')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_description')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_description')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_description')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_description')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_description')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
          document.querySelector('#fqGuesser_displayPage')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
          document.querySelector('#fqGuesser_editPage')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
          document.querySelector('#fqGuesser_userPage')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
          document.querySelector('#fqGuesser_download')?.addEventListener('change', (event) => {
            fqChange('Guesser', event.currentTarget, facetChangeGuesserSuccess, facetChangeGuesserError);
          });
          document.querySelector('#buttonFacetGuesser_download')?.addEventListener('click', (event) => {
            facetFieldChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotGuesser_download')?.addEventListener('change', (event) => {
            facetPivotChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapGuesser_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartGuesser_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Guesser', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndGuesser_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Guesser', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteGuesser')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var guesserId =  event.currentTarget.getAttribute('data-guesserId');
      deleteGuesser(
          event.currentTarget
          , guesserId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterGuesser')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterGuesser(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
