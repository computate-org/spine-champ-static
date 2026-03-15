Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

  document.querySelector('#pageFacetRangeTeam')?.addEventListener('change', (event) => {
    facetRangeChange('Team', event.target.value);
  });

  document.querySelector('#pageSelectSortTeam_pk')?.addEventListener('change', (event) => {
    sort('Team', 'pk', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_pk')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'pk', true);
  });
  document.querySelector('#pageStatsTeam_pk')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'pk', false);
  });

  document.querySelector('#pageSelectSortTeam_created')?.addEventListener('change', (event) => {
    sort('Team', 'created', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_created')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'created', true);
  });
  document.querySelector('#pageStatsTeam_created')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'created', false);
  });

  document.querySelector('#pageSelectSortTeam_modified')?.addEventListener('change', (event) => {
    sort('Team', 'modified', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_modified')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'modified', true);
  });
  document.querySelector('#pageStatsTeam_modified')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'modified', false);
  });

  document.querySelector('#pageSelectSortTeam_archived')?.addEventListener('change', (event) => {
    sort('Team', 'archived', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_archived')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'archived', true);
  });
  document.querySelector('#pageStatsTeam_archived')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'archived', false);
  });

  document.querySelector('#pageSelectSortTeam_region')?.addEventListener('change', (event) => {
    sort('Team', 'region', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_region')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'region', true);
  });
  document.querySelector('#pageStatsTeam_region')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'region', false);
  });

  document.querySelector('#pageSelectSortTeam_name')?.addEventListener('change', (event) => {
    sort('Team', 'name', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_name')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'name', true);
  });
  document.querySelector('#pageStatsTeam_name')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'name', false);
  });

  document.querySelector('#pageSelectSortTeam_abbreviation')?.addEventListener('change', (event) => {
    sort('Team', 'abbreviation', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_abbreviation')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'abbreviation', true);
  });
  document.querySelector('#pageStatsTeam_abbreviation')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'abbreviation', false);
  });

  document.querySelector('#pageSelectSortTeam_saves')?.addEventListener('change', (event) => {
    sort('Team', 'saves', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_saves')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'saves', true);
  });
  document.querySelector('#pageStatsTeam_saves')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'saves', false);
  });

  document.querySelector('#pageSelectSortTeam_objectTitle')?.addEventListener('change', (event) => {
    sort('Team', 'objectTitle', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_objectTitle')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'objectTitle', true);
  });
  document.querySelector('#pageStatsTeam_objectTitle')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'objectTitle', false);
  });

  document.querySelector('#pageSelectSortTeam_objectSuggest')?.addEventListener('change', (event) => {
    sort('Team', 'objectSuggest', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_objectSuggest')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'objectSuggest', true);
  });
  document.querySelector('#pageStatsTeam_objectSuggest')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'objectSuggest', false);
  });

  document.querySelector('#pageSelectSortTeam_solrId')?.addEventListener('change', (event) => {
    sort('Team', 'solrId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_solrId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'solrId', true);
  });
  document.querySelector('#pageStatsTeam_solrId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'solrId', false);
  });

  document.querySelector('#pageSelectSortTeam_classCanonicalName')?.addEventListener('change', (event) => {
    sort('Team', 'classCanonicalName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_classCanonicalName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'classCanonicalName', true);
  });
  document.querySelector('#pageStatsTeam_classCanonicalName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'classCanonicalName', false);
  });

  document.querySelector('#pageSelectSortTeam_classSimpleName')?.addEventListener('change', (event) => {
    sort('Team', 'classSimpleName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_classSimpleName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'classSimpleName', true);
  });
  document.querySelector('#pageStatsTeam_classSimpleName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'classSimpleName', false);
  });

  document.querySelector('#pageSelectSortTeam_classCanonicalNames')?.addEventListener('change', (event) => {
    sort('Team', 'classCanonicalNames', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_classCanonicalNames')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'classCanonicalNames', true);
  });
  document.querySelector('#pageStatsTeam_classCanonicalNames')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'classCanonicalNames', false);
  });

  document.querySelector('#pageSelectSortTeam_sessionId')?.addEventListener('change', (event) => {
    sort('Team', 'sessionId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_sessionId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'sessionId', true);
  });
  document.querySelector('#pageStatsTeam_sessionId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'sessionId', false);
  });

  document.querySelector('#pageSelectSortTeam_userKey')?.addEventListener('change', (event) => {
    sort('Team', 'userKey', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_userKey')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'userKey', true);
  });
  document.querySelector('#pageStatsTeam_userKey')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'userKey', false);
  });

  document.querySelector('#pageSelectSortTeam_displayPage')?.addEventListener('change', (event) => {
    sort('Team', 'displayPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_displayPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'displayPage', true);
  });
  document.querySelector('#pageStatsTeam_displayPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'displayPage', false);
  });

  document.querySelector('#pageSelectSortTeam_editPage')?.addEventListener('change', (event) => {
    sort('Team', 'editPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_editPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'editPage', true);
  });
  document.querySelector('#pageStatsTeam_editPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'editPage', false);
  });

  document.querySelector('#pageSelectSortTeam_userPage')?.addEventListener('change', (event) => {
    sort('Team', 'userPage', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_userPage')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'userPage', true);
  });
  document.querySelector('#pageStatsTeam_userPage')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'userPage', false);
  });

  document.querySelector('#pageSelectSortTeam_download')?.addEventListener('change', (event) => {
    sort('Team', 'download', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_download')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'download', true);
  });
  document.querySelector('#pageStatsTeam_download')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'download', false);
  });

  document.querySelector('#pageSelectSortTeam_objectText')?.addEventListener('change', (event) => {
    sort('Team', 'objectText', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_objectText')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'objectText', true);
  });
  document.querySelector('#pageStatsTeam_objectText')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'objectText', false);
  });

  document.querySelector('#pageSelectSortTeam_displayName')?.addEventListener('change', (event) => {
    sort('Team', 'displayName', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_displayName')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'displayName', true);
  });
  document.querySelector('#pageStatsTeam_displayName')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'displayName', false);
  });

  document.querySelector('#pageSelectSortTeam_teamId')?.addEventListener('change', (event) => {
    sort('Team', 'teamId', event.currentTarget.value);
  });

  document.querySelector('#pageStatsTeam_teamId')?.addEventListener('wa-show', (event) => {
    facetStatsChange('Team', 'teamId', true);
  });
  document.querySelector('#pageStatsTeam_teamId')?.addEventListener('wa-hide', (event) => {
    facetStatsChange('Team', 'teamId', false);
  });
          document.querySelector('#fqTeam_created')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_created')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_created')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_created')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_created')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_created')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_archived')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_archived')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_archived')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_archived')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_archived')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_archived')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_region')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_region')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_region')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_region')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_region')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_region')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_name')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_name')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_name')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_name')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_name')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_name')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_abbreviation')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_abbreviation')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_abbreviation')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_abbreviation')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_abbreviation')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_abbreviation')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_displayPage')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_displayPage')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_displayPage')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_displayPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_displayPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_displayPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_editPage')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_editPage')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_editPage')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_editPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_editPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_editPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_userPage')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_userPage')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_userPage')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_userPage')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_userPage')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_userPage')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_download')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_download')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_download')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_download')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_download')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_download')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
          document.querySelector('#fqTeam_teamId')?.addEventListener('change', (event) => {
            fqChange('Team', event.currentTarget, facetChangeTeamSuccess, facetChangeTeamError);
          });
          document.querySelector('#buttonFacetTeam_teamId')?.addEventListener('click', (event) => {
            facetFieldChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetPivotTeam_teamId')?.addEventListener('change', (event) => {
            facetPivotChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeGapTeam_teamId')?.addEventListener('change', (event) => {
            facetRangeGapChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeStartTeam_teamId')?.addEventListener('change', (event) => {
            facetRangeStartChange('Team', event.currentTarget);
          });
          document.querySelector('#pageFacetRangeEndTeam_teamId')?.addEventListener('change', (event) => {
            facetRangeEndChange('Team', event.currentTarget);
          });
});

  document.querySelector('#htmButton_deleteTeam')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      var teamId =  event.currentTarget.getAttribute('data-teamId');
      deleteTeam(
          event.currentTarget
          , teamId
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });

  document.querySelector('#htmButton_deletefilterTeam')?.addEventListener('click', (event) => {
    var confirmResponse = confirm('Are you sure you want to delete that?'); 
    if(confirmResponse) { 
      deletefilterTeam(
          event.currentTarget
          , function(response, target) { addGlow(target); }
          , function(response, target) { addError(target); }
          );
    }
  });
