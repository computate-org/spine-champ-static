Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeEliteEight')?.addEventListener('change', (event) => {
    facetRangeChange('EliteEight', event.target.value);
  });

  document.querySelector('#pageSelectSortEliteEight_pk')?.addEventListener('change', (event) => {
    sort('EliteEight', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'pk', true);
  });
  document.querySelector('#pageStatsEliteEight_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'pk', false);
  });

  document.querySelector('#pageSelectSortEliteEight_created')?.addEventListener('change', (event) => {
    sort('EliteEight', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'created', true);
  });
  document.querySelector('#pageStatsEliteEight_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'created', false);
  });

  document.querySelector('#pageSelectSortEliteEight_modified')?.addEventListener('change', (event) => {
    sort('EliteEight', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'modified', true);
  });
  document.querySelector('#pageStatsEliteEight_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'modified', false);
  });

  document.querySelector('#pageSelectSortEliteEight_archived')?.addEventListener('change', (event) => {
    sort('EliteEight', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'archived', true);
  });
  document.querySelector('#pageStatsEliteEight_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'archived', false);
  });

  document.querySelector('#pageSelectSortEliteEight_sweetSixteen')?.addEventListener('change', (event) => {
    sort('EliteEight', 'sweetSixteen', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_sweetSixteen')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'sweetSixteen', true);
  });
  document.querySelector('#pageStatsEliteEight_sweetSixteen')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'sweetSixteen', false);
  });

  document.querySelector('#pageSelectSortEliteEight_guesserId')?.addEventListener('change', (event) => {
    sort('EliteEight', 'guesserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_guesserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'guesserId', true);
  });
  document.querySelector('#pageStatsEliteEight_guesserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'guesserId', false);
  });

  document.querySelector('#pageSelectSortEliteEight_year')?.addEventListener('change', (event) => {
    sort('EliteEight', 'year', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_year')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'year', true);
  });
  document.querySelector('#pageStatsEliteEight_year')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'year', false);
  });

  document.querySelector('#pageSelectSortEliteEight_correctGuesses')?.addEventListener('change', (event) => {
    sort('EliteEight', 'correctGuesses', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_correctGuesses')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'correctGuesses', true);
  });
  document.querySelector('#pageStatsEliteEight_correctGuesses')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'correctGuesses', false);
  });

  document.querySelector('#pageSelectSortEliteEight_incorrectGuesses')?.addEventListener('change', (event) => {
    sort('EliteEight', 'incorrectGuesses', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_incorrectGuesses')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'incorrectGuesses', true);
  });
  document.querySelector('#pageStatsEliteEight_incorrectGuesses')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'incorrectGuesses', false);
  });

  document.querySelector('#pageSelectSortEliteEight_southGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('EliteEight', 'southGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_southGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'southGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsEliteEight_southGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'southGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortEliteEight_southGame1Winner')?.addEventListener('change', (event) => {
    sort('EliteEight', 'southGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_southGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'southGame1Winner', true);
  });
  document.querySelector('#pageStatsEliteEight_southGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'southGame1Winner', false);
  });

  document.querySelector('#pageSelectSortEliteEight_southGame1Loser')?.addEventListener('change', (event) => {
    sort('EliteEight', 'southGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_southGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'southGame1Loser', true);
  });
  document.querySelector('#pageStatsEliteEight_southGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'southGame1Loser', false);
  });

  document.querySelector('#pageSelectSortEliteEight_westGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('EliteEight', 'westGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_westGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'westGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsEliteEight_westGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'westGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortEliteEight_westGame1Winner')?.addEventListener('change', (event) => {
    sort('EliteEight', 'westGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_westGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'westGame1Winner', true);
  });
  document.querySelector('#pageStatsEliteEight_westGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'westGame1Winner', false);
  });

  document.querySelector('#pageSelectSortEliteEight_westGame1Loser')?.addEventListener('change', (event) => {
    sort('EliteEight', 'westGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_westGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'westGame1Loser', true);
  });
  document.querySelector('#pageStatsEliteEight_westGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'westGame1Loser', false);
  });

  document.querySelector('#pageSelectSortEliteEight_eastGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('EliteEight', 'eastGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_eastGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'eastGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsEliteEight_eastGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'eastGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortEliteEight_eastGame1Winner')?.addEventListener('change', (event) => {
    sort('EliteEight', 'eastGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_eastGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'eastGame1Winner', true);
  });
  document.querySelector('#pageStatsEliteEight_eastGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'eastGame1Winner', false);
  });

  document.querySelector('#pageSelectSortEliteEight_eastGame1Loser')?.addEventListener('change', (event) => {
    sort('EliteEight', 'eastGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_eastGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'eastGame1Loser', true);
  });
  document.querySelector('#pageStatsEliteEight_eastGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'eastGame1Loser', false);
  });

  document.querySelector('#pageSelectSortEliteEight_midwestGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('EliteEight', 'midwestGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_midwestGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'midwestGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsEliteEight_midwestGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'midwestGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortEliteEight_midwestGame1Winner')?.addEventListener('change', (event) => {
    sort('EliteEight', 'midwestGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_midwestGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'midwestGame1Winner', true);
  });
  document.querySelector('#pageStatsEliteEight_midwestGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'midwestGame1Winner', false);
  });

  document.querySelector('#pageSelectSortEliteEight_midwestGame1Loser')?.addEventListener('change', (event) => {
    sort('EliteEight', 'midwestGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_midwestGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'midwestGame1Loser', true);
  });
  document.querySelector('#pageStatsEliteEight_midwestGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'midwestGame1Loser', false);
  });

  document.querySelector('#pageSelectSortEliteEight_finalFour')?.addEventListener('change', (event) => {
    sort('EliteEight', 'finalFour', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_finalFour')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'finalFour', true);
  });
  document.querySelector('#pageStatsEliteEight_finalFour')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'finalFour', false);
  });

  document.querySelector('#pageSelectSortEliteEight_saves')?.addEventListener('change', (event) => {
    sort('EliteEight', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'saves', true);
  });
  document.querySelector('#pageStatsEliteEight_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'saves', false);
  });

  document.querySelector('#pageSelectSortEliteEight_objectTitle')?.addEventListener('change', (event) => {
    sort('EliteEight', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'objectTitle', true);
  });
  document.querySelector('#pageStatsEliteEight_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortEliteEight_objectSuggest')?.addEventListener('change', (event) => {
    sort('EliteEight', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsEliteEight_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortEliteEight_solrId')?.addEventListener('change', (event) => {
    sort('EliteEight', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'solrId', true);
  });
  document.querySelector('#pageStatsEliteEight_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'solrId', false);
  });

  document.querySelector('#pageSelectSortEliteEight_classCanonicalName')?.addEventListener('change', (event) => {
    sort('EliteEight', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsEliteEight_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortEliteEight_classSimpleName')?.addEventListener('change', (event) => {
    sort('EliteEight', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsEliteEight_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortEliteEight_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('EliteEight', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsEliteEight_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortEliteEight_sessionId')?.addEventListener('change', (event) => {
    sort('EliteEight', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'sessionId', true);
  });
  document.querySelector('#pageStatsEliteEight_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortEliteEight_userKey')?.addEventListener('change', (event) => {
    sort('EliteEight', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'userKey', true);
  });
  document.querySelector('#pageStatsEliteEight_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'userKey', false);
  });

  document.querySelector('#pageSelectSortEliteEight_displayPage')?.addEventListener('change', (event) => {
    sort('EliteEight', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'displayPage', true);
  });
  document.querySelector('#pageStatsEliteEight_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortEliteEight_editPage')?.addEventListener('change', (event) => {
    sort('EliteEight', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'editPage', true);
  });
  document.querySelector('#pageStatsEliteEight_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'editPage', false);
  });

  document.querySelector('#pageSelectSortEliteEight_userPage')?.addEventListener('change', (event) => {
    sort('EliteEight', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'userPage', true);
  });
  document.querySelector('#pageStatsEliteEight_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'userPage', false);
  });

  document.querySelector('#pageSelectSortEliteEight_download')?.addEventListener('change', (event) => {
    sort('EliteEight', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'download', true);
  });
  document.querySelector('#pageStatsEliteEight_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'download', false);
  });

  document.querySelector('#pageSelectSortEliteEight_objectText')?.addEventListener('change', (event) => {
    sort('EliteEight', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'objectText', true);
  });
  document.querySelector('#pageStatsEliteEight_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'objectText', false);
  });

  document.querySelector('#pageSelectSortEliteEight_bracketId')?.addEventListener('change', (event) => {
    sort('EliteEight', 'bracketId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_bracketId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'bracketId', true);
  });
  document.querySelector('#pageStatsEliteEight_bracketId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'bracketId', false);
  });

  document.querySelector('#pageSelectSortEliteEight_name')?.addEventListener('change', (event) => {
    sort('EliteEight', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsEliteEight_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('EliteEight', 'name', true);
  });
  document.querySelector('#pageStatsEliteEight_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('EliteEight', 'name', false);
  });
          document.querySelector('#fqEliteEight_created')?.addEventListener('change', (event) => {
            fqChange('EliteEight', event.currentTarget, facetChangeEliteEightSuccess, facetChangeEliteEightError);
          });
          document.querySelector('#buttonFacetEliteEight_created')?.addEventListener('click', (event) => {
            facetFieldChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotEliteEight_created')?.addEventListener('change', (event) => {
            facetPivotChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapEliteEight_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartEliteEight_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndEliteEight_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#fqEliteEight_archived')?.addEventListener('change', (event) => {
            fqChange('EliteEight', event.currentTarget, facetChangeEliteEightSuccess, facetChangeEliteEightError);
          });
          document.querySelector('#buttonFacetEliteEight_archived')?.addEventListener('click', (event) => {
            facetFieldChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotEliteEight_archived')?.addEventListener('change', (event) => {
            facetPivotChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapEliteEight_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartEliteEight_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndEliteEight_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#fqEliteEight_displayPage')?.addEventListener('change', (event) => {
            fqChange('EliteEight', event.currentTarget, facetChangeEliteEightSuccess, facetChangeEliteEightError);
          });
          document.querySelector('#buttonFacetEliteEight_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotEliteEight_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapEliteEight_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartEliteEight_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndEliteEight_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#fqEliteEight_editPage')?.addEventListener('change', (event) => {
            fqChange('EliteEight', event.currentTarget, facetChangeEliteEightSuccess, facetChangeEliteEightError);
          });
          document.querySelector('#buttonFacetEliteEight_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotEliteEight_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapEliteEight_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartEliteEight_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndEliteEight_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#fqEliteEight_userPage')?.addEventListener('change', (event) => {
            fqChange('EliteEight', event.currentTarget, facetChangeEliteEightSuccess, facetChangeEliteEightError);
          });
          document.querySelector('#buttonFacetEliteEight_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotEliteEight_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapEliteEight_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartEliteEight_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndEliteEight_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#fqEliteEight_download')?.addEventListener('change', (event) => {
            fqChange('EliteEight', event.currentTarget, facetChangeEliteEightSuccess, facetChangeEliteEightError);
          });
          document.querySelector('#buttonFacetEliteEight_download')?.addEventListener('click', (event) => {
            facetFieldChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotEliteEight_download')?.addEventListener('change', (event) => {
            facetPivotChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapEliteEight_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartEliteEight_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('EliteEight', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndEliteEight_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('EliteEight', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteEliteEight')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var bracketId =  event.currentTarget.getAttribute('data-bracketId');
      deleteEliteEight(
          event.currentTarget
          , bracketId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterEliteEight')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterEliteEight(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
