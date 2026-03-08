Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeSweetSixteen')?.addEventListener('change', (event) => {
    facetRangeChange('SweetSixteen', event.target.value);
  });

  document.querySelector('#pageSelectSortSweetSixteen_pk')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'pk', true);
  });
  document.querySelector('#pageStatsSweetSixteen_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'pk', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_created')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'created', true);
  });
  document.querySelector('#pageStatsSweetSixteen_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'created', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_modified')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'modified', true);
  });
  document.querySelector('#pageStatsSweetSixteen_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'modified', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_archived')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'archived', true);
  });
  document.querySelector('#pageStatsSweetSixteen_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'archived', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_guesserId')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'guesserId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_guesserId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'guesserId', true);
  });
  document.querySelector('#pageStatsSweetSixteen_guesserId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'guesserId', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_year')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'year', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_year')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'year', true);
  });
  document.querySelector('#pageStatsSweetSixteen_year')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'year', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_southGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'southGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_southGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'southGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_southGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'southGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_southGame1Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'southGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_southGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'southGame1Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_southGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'southGame1Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_southGame1Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'southGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_southGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'southGame1Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_southGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'southGame1Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_southGame2WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'southGame2WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_southGame2WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'southGame2WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_southGame2WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'southGame2WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_southGame2Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'southGame2Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_southGame2Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'southGame2Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_southGame2Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'southGame2Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_southGame2Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'southGame2Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_southGame2Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'southGame2Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_southGame2Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'southGame2Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_westGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'westGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_westGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'westGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_westGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'westGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_westGame1Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'westGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_westGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'westGame1Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_westGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'westGame1Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_westGame1Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'westGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_westGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'westGame1Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_westGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'westGame1Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_westGame2WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'westGame2WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_westGame2WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'westGame2WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_westGame2WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'westGame2WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_westGame2Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'westGame2Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_westGame2Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'westGame2Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_westGame2Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'westGame2Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_westGame2Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'westGame2Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_westGame2Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'westGame2Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_westGame2Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'westGame2Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_eastGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'eastGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_eastGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_eastGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_eastGame1Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'eastGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_eastGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame1Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_eastGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame1Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_eastGame1Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'eastGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_eastGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame1Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_eastGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame1Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_eastGame2WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'eastGame2WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_eastGame2WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame2WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_eastGame2WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame2WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_eastGame2Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'eastGame2Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_eastGame2Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame2Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_eastGame2Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame2Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_eastGame2Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'eastGame2Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_eastGame2Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame2Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_eastGame2Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'eastGame2Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_midwestGame1WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'midwestGame1WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_midwestGame1WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame1WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_midwestGame1WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame1WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_midwestGame1Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'midwestGame1Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_midwestGame1Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame1Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_midwestGame1Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame1Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_midwestGame1Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'midwestGame1Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_midwestGame1Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame1Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_midwestGame1Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame1Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_midwestGame2WinnerGuess')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'midwestGame2WinnerGuess', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_midwestGame2WinnerGuess')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame2WinnerGuess', true);
  });
  document.querySelector('#pageStatsSweetSixteen_midwestGame2WinnerGuess')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame2WinnerGuess', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_midwestGame2Winner')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'midwestGame2Winner', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_midwestGame2Winner')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame2Winner', true);
  });
  document.querySelector('#pageStatsSweetSixteen_midwestGame2Winner')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame2Winner', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_midwestGame2Loser')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'midwestGame2Loser', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_midwestGame2Loser')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame2Loser', true);
  });
  document.querySelector('#pageStatsSweetSixteen_midwestGame2Loser')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'midwestGame2Loser', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_eliteEight')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'eliteEight', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_eliteEight')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'eliteEight', true);
  });
  document.querySelector('#pageStatsSweetSixteen_eliteEight')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'eliteEight', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_classCanonicalName')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsSweetSixteen_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_classSimpleName')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsSweetSixteen_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsSweetSixteen_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_sessionId')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'sessionId', true);
  });
  document.querySelector('#pageStatsSweetSixteen_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_userKey')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'userKey', true);
  });
  document.querySelector('#pageStatsSweetSixteen_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'userKey', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_saves')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'saves', true);
  });
  document.querySelector('#pageStatsSweetSixteen_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'saves', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_objectTitle')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'objectTitle', true);
  });
  document.querySelector('#pageStatsSweetSixteen_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_displayPage')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'displayPage', true);
  });
  document.querySelector('#pageStatsSweetSixteen_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_editPage')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'editPage', true);
  });
  document.querySelector('#pageStatsSweetSixteen_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'editPage', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_userPage')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'userPage', true);
  });
  document.querySelector('#pageStatsSweetSixteen_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'userPage', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_download')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'download', true);
  });
  document.querySelector('#pageStatsSweetSixteen_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'download', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_objectSuggest')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsSweetSixteen_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_objectText')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'objectText', true);
  });
  document.querySelector('#pageStatsSweetSixteen_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'objectText', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_solrId')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'solrId', true);
  });
  document.querySelector('#pageStatsSweetSixteen_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'solrId', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_bracketId')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'bracketId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_bracketId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'bracketId', true);
  });
  document.querySelector('#pageStatsSweetSixteen_bracketId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'bracketId', false);
  });

  document.querySelector('#pageSelectSortSweetSixteen_name')?.addEventListener('change', (event) => {
    sort('SweetSixteen', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsSweetSixteen_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('SweetSixteen', 'name', true);
  });
  document.querySelector('#pageStatsSweetSixteen_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('SweetSixteen', 'name', false);
  });
          document.querySelector('#fqSweetSixteen_created')?.addEventListener('change', (event) => {
            fqChange('SweetSixteen', event.currentTarget, facetChangeSweetSixteenSuccess, facetChangeSweetSixteenError);
          });
          document.querySelector('#buttonFacetSweetSixteen_created')?.addEventListener('click', (event) => {
            facetFieldChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSweetSixteen_created')?.addEventListener('change', (event) => {
            facetPivotChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSweetSixteen_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSweetSixteen_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSweetSixteen_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#fqSweetSixteen_archived')?.addEventListener('change', (event) => {
            fqChange('SweetSixteen', event.currentTarget, facetChangeSweetSixteenSuccess, facetChangeSweetSixteenError);
          });
          document.querySelector('#buttonFacetSweetSixteen_archived')?.addEventListener('click', (event) => {
            facetFieldChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSweetSixteen_archived')?.addEventListener('change', (event) => {
            facetPivotChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSweetSixteen_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSweetSixteen_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSweetSixteen_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#fqSweetSixteen_displayPage')?.addEventListener('change', (event) => {
            fqChange('SweetSixteen', event.currentTarget, facetChangeSweetSixteenSuccess, facetChangeSweetSixteenError);
          });
          document.querySelector('#buttonFacetSweetSixteen_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSweetSixteen_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSweetSixteen_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSweetSixteen_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSweetSixteen_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#fqSweetSixteen_editPage')?.addEventListener('change', (event) => {
            fqChange('SweetSixteen', event.currentTarget, facetChangeSweetSixteenSuccess, facetChangeSweetSixteenError);
          });
          document.querySelector('#buttonFacetSweetSixteen_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSweetSixteen_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSweetSixteen_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSweetSixteen_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSweetSixteen_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#fqSweetSixteen_userPage')?.addEventListener('change', (event) => {
            fqChange('SweetSixteen', event.currentTarget, facetChangeSweetSixteenSuccess, facetChangeSweetSixteenError);
          });
          document.querySelector('#buttonFacetSweetSixteen_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSweetSixteen_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSweetSixteen_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSweetSixteen_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSweetSixteen_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#fqSweetSixteen_download')?.addEventListener('change', (event) => {
            fqChange('SweetSixteen', event.currentTarget, facetChangeSweetSixteenSuccess, facetChangeSweetSixteenError);
          });
          document.querySelector('#buttonFacetSweetSixteen_download')?.addEventListener('click', (event) => {
            facetFieldChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotSweetSixteen_download')?.addEventListener('change', (event) => {
            facetPivotChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapSweetSixteen_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartSweetSixteen_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('SweetSixteen', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndSweetSixteen_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('SweetSixteen', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteSweetSixteen')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var bracketId =  event.currentTarget.getAttribute('data-bracketId');
      deleteSweetSixteen(
          event.currentTarget
          , bracketId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterSweetSixteen')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterSweetSixteen(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
