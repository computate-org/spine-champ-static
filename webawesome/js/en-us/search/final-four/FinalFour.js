
async function websocketFinalFour(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketFinalFour', function (error, message) {
      var json = JSON.parse(message['body']);
      var bracketId = json['id'];
      var solrIds = json['solrIds'];
      var empty = json['empty'];
      var numFound = parseInt(json['numFound']);
      var numPATCH = parseInt(json['numPATCH']);
      var percent = Math.floor( numPATCH / numFound * 100 ) + '%';
      var $box = document.createElement('div');
      $box.setAttribute('class', 'w3-quarter box-' + bracketId + ' ');
      $box.setAttribute('id', 'box-' + bracketId);
      $box.setAttribute('data-numPATCH', numPATCH);
      var $margin = document.createElement('div');
      $margin.setAttribute('class', 'w3-margin ');
      $margin.setAttribute('id', 'margin-' + bracketId);
      var $card = document.createElement('div');
      $card.setAttribute('class', 'w3-card w3-white ');
      $card.setAttribute('id', 'card-' + bracketId);
      var $header = document.createElement('div');
      $header.setAttribute('class', 'w3-container fa- ');
      $header.setAttribute('id', 'header-' + bracketId);
      var iTemplate = document.createElement('template');
      iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
      var $i = iTemplate.content;
      var $headerSpan = document.createElement('span');
      $headerSpan.setAttribute('class', '');
      $headerSpan.innerText = 'modify final four brackets in ' + json.timeRemaining;
      var $x = document.createElement('span');
      $x.setAttribute('class', 'w3-button w3-display-topright ');
      $x.setAttribute('onclick', 'document.querySelector("#card-' + bracketId + '");');
      $x.classList.add("display-none");
      $x.setAttribute('id', 'x-' + bracketId);
      var $body = document.createElement('div');
      $body.setAttribute('class', 'w3-container w3-padding ');
      $body.setAttribute('id', 'text-' + bracketId);
      var $bar = document.createElement('div');
      $bar.setAttribute('class', 'w3-light-gray ');
      $bar.setAttribute('id', 'bar-' + bracketId);
      var $progress = document.createElement('div');
      $progress.setAttribute('class', 'w3- ');
      $progress.setAttribute('style', 'height: 24px; width: ' + percent + '; ');
      $progress.setAttribute('id', 'progress-' + bracketId);
      $progress.innerText = numPATCH + '/' + numFound;
      $card.append($header);
      $header.append($i);
      $header.append($headerSpan);
      $header.append($x);
      $body.append($bar);
      $bar.append($progress);
      $card.append($body);
      $box.append($margin);
      $margin.append($card);
      if(numPATCH < numFound) {
        var $old_box = document.querySelector('.box-' + bracketId);
      } else {
        document.querySelector('.box-' + bracketId)?.remove();
      }
      if(bracketId) {
        if(success)
          success(json);
      }
    });
  }
}
async function websocketFinalFourInner(apiRequest) {
  var bracketId = apiRequest['id'];
  var classes = apiRequest['classes'];
  var vars = apiRequest['vars'];
  var empty = apiRequest['empty'];

  if(bracketId != null && vars.length > 0) {
    var queryParams = "?" + Array.from(document.querySelectorAll(".pageSearchVal")).filter(elem => elem.innerText.length > 0).map(elem => elem.innerText).join("&");
    var uri = location.pathname + queryParams;
    fetch(uri).then(response => {
      response.text().then(text => {
        var $response = new DOMParser().parseFromString(text, 'text/html');
        var inputPk = null;
        var inputCreated = null;
        var inputModified = null;
        var inputArchived = null;
        var inputEliteEight = null;
        var inputGuesserId = null;
        var inputYear = null;
        var inputGame1WinnerGuess = null;
        var inputGame1Winner = null;
        var inputGame1Loser = null;
        var inputGame2WinnerGuess = null;
        var inputGame2Winner = null;
        var inputGame2Loser = null;
        var inputChampionship = null;
        var inputClassCanonicalName = null;
        var inputClassSimpleName = null;
        var inputClassCanonicalNames = null;
        var inputSessionId = null;
        var inputUserKey = null;
        var inputSaves = null;
        var inputObjectTitle = null;
        var inputDisplayPage = null;
        var inputEditPage = null;
        var inputUserPage = null;
        var inputDownload = null;
        var inputObjectSuggest = null;
        var inputObjectText = null;
        var inputSolrId = null;
        var inputActualEliteEight = null;
        var inputActualFinalFour = null;
        var inputBracketId = null;
        var inputName = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.FinalFour_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.FinalFour_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.FinalFour_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.FinalFour_Page_archived');
        if(vars.includes('eliteEight'))
          inputEliteEight = $response.querySelector('.FinalFour_Page_eliteEight');
        if(vars.includes('guesserId'))
          inputGuesserId = $response.querySelector('.FinalFour_Page_guesserId');
        if(vars.includes('year'))
          inputYear = $response.querySelector('.FinalFour_Page_year');
        if(vars.includes('game1WinnerGuess'))
          inputGame1WinnerGuess = $response.querySelector('.FinalFour_Page_game1WinnerGuess');
        if(vars.includes('game1Winner'))
          inputGame1Winner = $response.querySelector('.FinalFour_Page_game1Winner');
        if(vars.includes('game1Loser'))
          inputGame1Loser = $response.querySelector('.FinalFour_Page_game1Loser');
        if(vars.includes('game2WinnerGuess'))
          inputGame2WinnerGuess = $response.querySelector('.FinalFour_Page_game2WinnerGuess');
        if(vars.includes('game2Winner'))
          inputGame2Winner = $response.querySelector('.FinalFour_Page_game2Winner');
        if(vars.includes('game2Loser'))
          inputGame2Loser = $response.querySelector('.FinalFour_Page_game2Loser');
        if(vars.includes('championship'))
          inputChampionship = $response.querySelector('.FinalFour_Page_championship');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.FinalFour_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.FinalFour_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.FinalFour_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.FinalFour_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.FinalFour_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.FinalFour_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.FinalFour_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.FinalFour_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.FinalFour_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.FinalFour_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.FinalFour_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.FinalFour_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.FinalFour_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.FinalFour_Page_solrId');
        if(vars.includes('actualEliteEight'))
          inputActualEliteEight = $response.querySelector('.FinalFour_Page_actualEliteEight');
        if(vars.includes('actualFinalFour'))
          inputActualFinalFour = $response.querySelector('.FinalFour_Page_actualFinalFour');
        if(vars.includes('bracketId'))
          inputBracketId = $response.querySelector('.FinalFour_Page_bracketId');
        if(vars.includes('name'))
          inputName = $response.querySelector('.FinalFour_Page_name');

        jsWebsocketFinalFour(bracketId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listFinalFour = JSON.parse($response.querySelector('.pageForm .listFinalFour')?.value);


        if(inputPk) {
          document.querySelectorAll('.FinalFour_Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.FinalFour_Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.FinalFour_Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.FinalFour_Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_archived'));
        }

        if(inputEliteEight) {
          document.querySelectorAll('.FinalFour_Page_eliteEight').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEliteEight.getAttribute('value');
            else
              item.textContent = inputEliteEight.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_eliteEight'));
        }

        if(inputGuesserId) {
          document.querySelectorAll('.FinalFour_Page_guesserId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGuesserId.getAttribute('value');
            else
              item.textContent = inputGuesserId.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_guesserId'));
        }

        if(inputYear) {
          document.querySelectorAll('.FinalFour_Page_year').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputYear.getAttribute('value');
            else
              item.textContent = inputYear.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_year'));
        }

        if(inputGame1WinnerGuess) {
          document.querySelectorAll('.FinalFour_Page_game1WinnerGuess').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGame1WinnerGuess.getAttribute('value');
            else
              item.textContent = inputGame1WinnerGuess.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_game1WinnerGuess'));
        }

        if(inputGame1Winner) {
          document.querySelectorAll('.FinalFour_Page_game1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGame1Winner.getAttribute('value');
            else
              item.textContent = inputGame1Winner.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_game1Winner'));
        }

        if(inputGame1Loser) {
          document.querySelectorAll('.FinalFour_Page_game1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGame1Loser.getAttribute('value');
            else
              item.textContent = inputGame1Loser.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_game1Loser'));
        }

        if(inputGame2WinnerGuess) {
          document.querySelectorAll('.FinalFour_Page_game2WinnerGuess').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGame2WinnerGuess.getAttribute('value');
            else
              item.textContent = inputGame2WinnerGuess.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_game2WinnerGuess'));
        }

        if(inputGame2Winner) {
          document.querySelectorAll('.FinalFour_Page_game2Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGame2Winner.getAttribute('value');
            else
              item.textContent = inputGame2Winner.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_game2Winner'));
        }

        if(inputGame2Loser) {
          document.querySelectorAll('.FinalFour_Page_game2Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGame2Loser.getAttribute('value');
            else
              item.textContent = inputGame2Loser.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_game2Loser'));
        }

        if(inputChampionship) {
          document.querySelectorAll('.FinalFour_Page_championship').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputChampionship.getAttribute('value');
            else
              item.textContent = inputChampionship.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_championship'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.FinalFour_Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.FinalFour_Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.FinalFour_Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.FinalFour_Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.FinalFour_Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.FinalFour_Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.FinalFour_Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.FinalFour_Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.FinalFour_Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.FinalFour_Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.FinalFour_Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.FinalFour_Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.FinalFour_Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.FinalFour_Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_solrId'));
        }

        if(inputActualEliteEight) {
          document.querySelectorAll('.FinalFour_Page_actualEliteEight').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputActualEliteEight.getAttribute('value');
            else
              item.textContent = inputActualEliteEight.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_actualEliteEight'));
        }

        if(inputActualFinalFour) {
          document.querySelectorAll('.FinalFour_Page_actualFinalFour').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputActualFinalFour.getAttribute('value');
            else
              item.textContent = inputActualFinalFour.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_actualFinalFour'));
        }

        if(inputBracketId) {
          document.querySelectorAll('.FinalFour_Page_bracketId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBracketId.getAttribute('value');
            else
              item.textContent = inputBracketId.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_bracketId'));
        }

        if(inputName) {
          document.querySelectorAll('.FinalFour_Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.FinalFour_Page_name'));
        }

          pageGraphFinalFour();
      });
    });
  }
}

function pageGraphFinalFour(apiRequest) {
  var r = document.querySelector('.pageForm .pageResponse')?.value;
  if(r) {
    var json = JSON.parse(r);
    if(json['facetCounts']) {
      var facetCounts = json.facetCounts;
      if(facetCounts['facetPivot'] && facetCounts['facetRanges']) {
        var numPivots = json.responseHeader.params['facet.pivot'].split(',').length;
        var range = facetCounts.facetRanges.ranges[Object.keys(facetCounts.facetRanges.ranges)[0]];
        var rangeName;
        var rangeVar;
        var rangeVarFq;
        var rangeCounts;
        var rangeVals;
        if(range) {
          rangeName = range.name;
          rangeVar = rangeName.substring(0, rangeName.indexOf('_'));
          rangeVarFq = window.varsFq[rangeVar];
          rangeCounts = range.counts;
          rangeVals = Object.keys(rangeCounts).map(key => key);
        }
        var pivot1Name = Object.keys(facetCounts.facetPivot.pivotMap)[0];
        var pivot1VarIndexed = pivot1Name;
        if(pivot1VarIndexed.includes(','))
          pivot1VarIndexed = pivot1VarIndexed.substring(0, pivot1VarIndexed.indexOf(','));
        var pivot1VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot1VarIndexed)[0];
        var pivot1VarFq = pivot1VarObj ? pivot1VarObj.var : 'classSimpleName';
        var pivot1Map = facetCounts.facetPivot.pivotMap[pivot1Name].pivotMap;
        var pivot1Vals = Object.keys(pivot1Map);
        var data = [];
        var layout = {};
        if(range) {
          layout['title'] = 'final four brackets';
          layout['xaxis'] = {
            title: rangeVarFq.displayName
          }
          if(pivot1Vals.length > 0 && pivot1Map[pivot1Vals[0]].pivotMap && Object.keys(pivot1Map[pivot1Vals[0]].pivotMap).length > 0) {
            var pivot2VarIndexed = pivot1Map[pivot1Vals[0]].pivotMap[Object.keys(pivot1Map[pivot1Vals[0]].pivotMap)[0]].field;
            var pivot2VarObj = Object.values(window.varsFq).filter(o => o.varIndexed === pivot2VarIndexed)[0];
            var pivot2VarFq = pivot2VarObj ? pivot2VarObj.var : 'classSimpleName';
            layout['yaxis'] = {
              title: pivot2VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              trace['x'] = Object.keys(pivot1Counts).map(key => key);
              if(pivot2Map) {
                var xs = [];
                var ys = [];
                var pivot2Vals = Object.keys(pivot2Map);
                pivot2Vals.forEach((pivot2Val) => {
                  var pivot2 = pivot2Map[pivot2Val];
                  var pivot2Counts = pivot2.ranges[rangeName].counts;
                  Object.entries(pivot2Counts).forEach(([key, count]) => {
                    xs.push(key);
                    ys.push(parseFloat(pivot2Val));
                  });
                });
                trace['y'] = ys;
                trace['x'] = xs;
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
                trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              }
              data.push(trace);
            });
          } else {
            layout['yaxis'] = {
              title: pivot1VarObj.displayName
            }
            pivot1Vals.forEach((pivot1Val) => {
              var pivot1 = pivot1Map[pivot1Val];
              var pivot1Counts = pivot1.ranges[rangeName].counts;
              var pivot2Map = pivot1.pivotMap;
              var trace = {};
              var facetField;
              trace['showlegend'] = true;
              trace['mode'] = 'lines+markers';
              trace['name'] = pivot1Val;
              if(window.varsRange[window.defaultRangeVar].classSimpleName == 'ZonedDateTime') {
                trace['x'] = Object.keys(pivot1Counts).map(key => moment.tz(key, Intl.DateTimeFormat().resolvedOptions().timeZone).format('YYYY-MM-DDTHH:mm:ss.SSSS'));
              } else {
                trace['x'] = Object.keys(pivot1Counts).map(key => key);
              }
              trace['y'] = Object.entries(pivot1Counts).map(([key, count]) => count);
              data.push(trace);
            });
          }
          Plotly.react('htmBodyGraphFinalFourPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqFinalFour_time').innerText = '';
  searchPage('FinalFour', function() {
    let speedRate = parseFloat(document.querySelector('#animateStatsSpeed')?.value) * 1000;
    let xStep = parseFloat(document.querySelector('#animateStatsStep')?.value);
    let xMin = parseFloat(document.querySelector('#animateStatsMin')?.value);
    let xMax = parseFloat(document.querySelector('#animateStatsMax')?.value);
    let x = xMin;

    let animateInterval = window.setInterval(() => {
      x = x + xStep;
      if (x > xMax || x < 0) {
        clearInterval(animateInterval);
      }
      document.querySelector('#fqFinalFour_time').value = x;
      document.querySelector('#fqFinalFour_time').onchange();
      searchPage('FinalFour');
    }, speedRate);
  });
}

// Search //

async function searchFinalFour($formFilters, success, error) {
  var filters = searchFinalFourFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchFinalFourVals(filters, target, success, error);
}

function searchFinalFourFilters($formFilters) {
  var filters = [];
  if($formFilters) {

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterEliteEight = $formFilters.querySelector('.valueEliteEight')?.value;
    if(filterEliteEight != null && filterEliteEight !== '')
      filters.push({ name: 'fq', value: 'eliteEight:' + filterEliteEight });

    var filterGuesserId = $formFilters.querySelector('.valueGuesserId')?.value;
    if(filterGuesserId != null && filterGuesserId !== '')
      filters.push({ name: 'fq', value: 'guesserId:' + filterGuesserId });

    var filterYear = $formFilters.querySelector('.valueYear')?.value;
    if(filterYear != null && filterYear !== '')
      filters.push({ name: 'fq', value: 'year:' + filterYear });

    var filterGame1WinnerGuess = $formFilters.querySelector('.valueGame1WinnerGuess')?.value;
    if(filterGame1WinnerGuess != null && filterGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'game1WinnerGuess:' + filterGame1WinnerGuess });

    var filterGame1Winner = $formFilters.querySelector('.valueGame1Winner')?.value;
    if(filterGame1Winner != null && filterGame1Winner !== '')
      filters.push({ name: 'fq', value: 'game1Winner:' + filterGame1Winner });

    var filterGame1Loser = $formFilters.querySelector('.valueGame1Loser')?.value;
    if(filterGame1Loser != null && filterGame1Loser !== '')
      filters.push({ name: 'fq', value: 'game1Loser:' + filterGame1Loser });

    var filterGame2WinnerGuess = $formFilters.querySelector('.valueGame2WinnerGuess')?.value;
    if(filterGame2WinnerGuess != null && filterGame2WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'game2WinnerGuess:' + filterGame2WinnerGuess });

    var filterGame2Winner = $formFilters.querySelector('.valueGame2Winner')?.value;
    if(filterGame2Winner != null && filterGame2Winner !== '')
      filters.push({ name: 'fq', value: 'game2Winner:' + filterGame2Winner });

    var filterGame2Loser = $formFilters.querySelector('.valueGame2Loser')?.value;
    if(filterGame2Loser != null && filterGame2Loser !== '')
      filters.push({ name: 'fq', value: 'game2Loser:' + filterGame2Loser });

    var filterChampionship = $formFilters.querySelector('.valueChampionship')?.value;
    if(filterChampionship != null && filterChampionship !== '')
      filters.push({ name: 'fq', value: 'championship:' + filterChampionship });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterBracketId = $formFilters.querySelector('.valueBracketId')?.value;
    if(filterBracketId != null && filterBracketId !== '')
      filters.push({ name: 'fq', value: 'bracketId:' + filterBracketId });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });
  }
  return filters;
}

function searchFinalFourVals(filters, target, success, error) {

  fetch(
    '/en-us/api/final-four?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function suggestFinalFourEliteEight(filters, $list, bracketId = null, eliteEight = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'bracketId';
        var val = o[inputVar];
        var checked = val == null ? false : (eliteEight != null && val === eliteEight.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_eliteEight_' + bracketId + '_finalFour_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueEliteEight ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchFinalFourVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EliteEight']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFinalFourEliteEight(filters, $list, bracketId, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchEliteEightVals === 'function') {
    searchEliteEightVals(filters, target, success, error);
  }
}

function suggestFinalFourGuesserId(filters, $list, bracketId = null, guesserId = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'guesserId';
        var val = o[inputVar];
        var checked = val == null ? false : (guesserId != null && val === guesserId.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_guesserId_' + bracketId + '_guesserId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueGuesserId ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchFinalFourVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'GuesserId']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFinalFourGuesserId(filters, $list, bracketId, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchGuesserVals === 'function') {
    searchGuesserVals(filters, target, success, error);
  }
}

function suggestFinalFourGame1Winner(filters, $list, bracketId = null, game1Winner = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'teamId';
        var val = o[inputVar];
        var checked = val == null ? false : (game1Winner != null && val === game1Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_game1Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueGame1Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchFinalFourVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'Game1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFinalFourGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchTeamVals === 'function') {
    searchTeamVals(filters, target, success, error);
  }
}

function suggestFinalFourGame1Loser(filters, $list, bracketId = null, game1Loser = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'teamId';
        var val = o[inputVar];
        var checked = val == null ? false : (game1Loser != null && val === game1Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_game1Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueGame1Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchFinalFourVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'Game1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFinalFourGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchTeamVals === 'function') {
    searchTeamVals(filters, target, success, error);
  }
}

function suggestFinalFourGame2Winner(filters, $list, bracketId = null, game2Winner = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'teamId';
        var val = o[inputVar];
        var checked = val == null ? false : (game2Winner != null && val === game2Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_game2Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueGame2Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchFinalFourVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'Game2Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFinalFourGame2Winner(filters, $list, bracketId, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchTeamVals === 'function') {
    searchTeamVals(filters, target, success, error);
  }
}

function suggestFinalFourGame2Loser(filters, $list, bracketId = null, game2Loser = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'teamId';
        var val = o[inputVar];
        var checked = val == null ? false : (game2Loser != null && val === game2Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_game2Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueGame2Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchFinalFourVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'Game2Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFinalFourGame2Loser(filters, $list, bracketId, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchTeamVals === 'function') {
    searchTeamVals(filters, target, success, error);
  }
}

function suggestFinalFourChampionship(filters, $list, bracketId = null, championship = null, relate=true, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var iTemplate = document.createElement('template');
        iTemplate.innerHTML = '<i class="fa-regular fa-buildings"></i>';
        var $i = iTemplate.content;
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $a = document.createElement('a');
        $a.setAttribute('target', '_blank');
        $a.setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        var inputVar = 'bracketId';
        var val = o[inputVar];
        var checked = val == null ? false : (championship != null && val === championship.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_championship_' + bracketId + '_finalFour_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueChampionship ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchFinalFourVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'Championship']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestFinalFourChampionship(filters, $list, bracketId, o[inputVar], relate, target);
                }
                , function(response, target) { addError(target); }
            );
          });
        } else {
          $input.addEventListener('change', function(event) {
            if(event.target.checked) {
              target.value = event.target.value;
            } else {
              target.value = null;
            }
          });
        }
        if(checked)
          $input.setAttribute('checked', 'checked');
        var $li = document.createElement('li');
        if(relate)
          $li.append($input);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  if (typeof searchChampionshipVals === 'function') {
    searchChampionshipVals(filters, target, success, error);
  }
}

function suggestFinalFourObjectSuggest($formFilters, $list, target) {
  success = function( data, textStatus, jQxhr ) {
    if($list) {
      $list.innerHTML = '';
      data['list'].forEach((o, i) => {
        var $i = document.querySelector('<i class="fa-regular fa-buildings"></i>');
        var $span = document.createElement('span');
        $span.setAttribute('class', '');
        $span.innerText = o['objectTitle'];
        var $li = document.createElement('li');
        var $a = document.createElement('a').setAttribute('href', o['editPage']);
        $a.append($i);
        $a.append($span);
        $li.append($a);
        $list.append($li);
      });
    }
  };
  error = function( jqXhr, target2 ) {};
  searchFinalFourVals($formFilters, target, success, error);
}

// GET //

async function getFinalFour(pk) {
  fetch(
    '/en-us/api/final-four/' + bracketId
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PATCH //

async function patchFinalFour($formFilters, $formValues, target, bracketId, success, error) {
  var filters = patchFinalFourFilters($formFilters);

  var vals = {};

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  var removePk = $formValues.querySelector('.removePk')?.value === 'true';
  var setPk = removePk ? null : $formValues.querySelector('.setPk')?.value;
  var addPk = $formValues.querySelector('.addPk')?.value;
  if(removePk || setPk != null && setPk !== '')
    vals['setPk'] = setPk;
  if(addPk != null && addPk !== '')
    vals['addPk'] = addPk;
  var removePk = $formValues.querySelector('.removePk')?.value;
  if(removePk != null && removePk !== '')
    vals['removePk'] = removePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value === 'true';
  var setCreated = removeCreated ? null : $formValues.querySelector('.setCreated')?.value;
  var addCreated = $formValues.querySelector('.addCreated')?.value;
  if(removeCreated || setCreated != null && setCreated !== '')
    vals['setCreated'] = setCreated;
  if(addCreated != null && addCreated !== '')
    vals['addCreated'] = addCreated;
  var removeCreated = $formValues.querySelector('.removeCreated')?.value;
  if(removeCreated != null && removeCreated !== '')
    vals['removeCreated'] = removeCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  var removeModified = $formValues.querySelector('.removeModified')?.value === 'true';
  var setModified = removeModified ? null : $formValues.querySelector('.setModified')?.value;
  var addModified = $formValues.querySelector('.addModified')?.value;
  if(removeModified || setModified != null && setModified !== '')
    vals['setModified'] = setModified;
  if(addModified != null && addModified !== '')
    vals['addModified'] = addModified;
  var removeModified = $formValues.querySelector('.removeModified')?.value;
  if(removeModified != null && removeModified !== '')
    vals['removeModified'] = removeModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  var removeArchived = $formValues.querySelector('.removeArchived')?.value === 'true';
  if(valueArchived != null)
    valueArchived = valueArchived === 'true';
  var valueArchivedSelectVal = $formValues.querySelector('select.setArchived')?.value;
  if(valueArchivedSelectVal != null)
    valueArchivedSelectVal = valueArchivedSelectVal === 'true';
  if(valueArchivedSelectVal != null && valueArchivedSelectVal !== '')
    valueArchived = valueArchivedSelectVal == 'true';
  var setArchived = removeArchived ? null : valueArchived;
  var addArchived = $formValues.querySelector('.addArchived')?.checked;
  if(removeArchived || setArchived != null && setArchived !== '')
    vals['setArchived'] = setArchived;
  if(addArchived != null && addArchived !== '')
    vals['addArchived'] = addArchived;
  var removeArchived = $formValues.querySelector('.removeArchived')?.checked;
  if(removeArchived != null && removeArchived !== '')
    vals['removeArchived'] = removeArchived;

  var valueEliteEight = (Array.from($formValues.querySelectorAll('.valueEliteEight')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEliteEight != null && valueEliteEight !== '')
    vals['setEliteEight'] = valueEliteEight;

  var valueGuesserId = (Array.from($formValues.querySelectorAll('.valueGuesserId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGuesserId != null && valueGuesserId !== '')
    vals['setGuesserId'] = valueGuesserId;

  var valueYear = $formValues.querySelector('.valueYear')?.value;
  var removeYear = $formValues.querySelector('.removeYear')?.value === 'true';
  var setYear = removeYear ? null : $formValues.querySelector('.setYear')?.value;
  var addYear = $formValues.querySelector('.addYear')?.value;
  if(removeYear || setYear != null && setYear !== '')
    vals['setYear'] = setYear;
  if(addYear != null && addYear !== '')
    vals['addYear'] = addYear;
  var removeYear = $formValues.querySelector('.removeYear')?.value;
  if(removeYear != null && removeYear !== '')
    vals['removeYear'] = removeYear;

  var valueGame1WinnerGuess = $formValues.querySelector('.valueGame1WinnerGuess')?.value;
  var removeGame1WinnerGuess = $formValues.querySelector('.removeGame1WinnerGuess')?.value === 'true';
  var setGame1WinnerGuess = removeGame1WinnerGuess ? null : $formValues.querySelector('.setGame1WinnerGuess')?.value;
  var addGame1WinnerGuess = $formValues.querySelector('.addGame1WinnerGuess')?.value;
  if(removeGame1WinnerGuess || setGame1WinnerGuess != null && setGame1WinnerGuess !== '')
    vals['setGame1WinnerGuess'] = setGame1WinnerGuess;
  if(addGame1WinnerGuess != null && addGame1WinnerGuess !== '')
    vals['addGame1WinnerGuess'] = addGame1WinnerGuess;
  var removeGame1WinnerGuess = $formValues.querySelector('.removeGame1WinnerGuess')?.value;
  if(removeGame1WinnerGuess != null && removeGame1WinnerGuess !== '')
    vals['removeGame1WinnerGuess'] = removeGame1WinnerGuess;

  var valueGame1Winner = (Array.from($formValues.querySelectorAll('.valueGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame1Winner != null && valueGame1Winner !== '')
    vals['setGame1Winner'] = valueGame1Winner;

  var valueGame1Loser = (Array.from($formValues.querySelectorAll('.valueGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame1Loser != null && valueGame1Loser !== '')
    vals['setGame1Loser'] = valueGame1Loser;

  var valueGame2WinnerGuess = $formValues.querySelector('.valueGame2WinnerGuess')?.value;
  var removeGame2WinnerGuess = $formValues.querySelector('.removeGame2WinnerGuess')?.value === 'true';
  var setGame2WinnerGuess = removeGame2WinnerGuess ? null : $formValues.querySelector('.setGame2WinnerGuess')?.value;
  var addGame2WinnerGuess = $formValues.querySelector('.addGame2WinnerGuess')?.value;
  if(removeGame2WinnerGuess || setGame2WinnerGuess != null && setGame2WinnerGuess !== '')
    vals['setGame2WinnerGuess'] = setGame2WinnerGuess;
  if(addGame2WinnerGuess != null && addGame2WinnerGuess !== '')
    vals['addGame2WinnerGuess'] = addGame2WinnerGuess;
  var removeGame2WinnerGuess = $formValues.querySelector('.removeGame2WinnerGuess')?.value;
  if(removeGame2WinnerGuess != null && removeGame2WinnerGuess !== '')
    vals['removeGame2WinnerGuess'] = removeGame2WinnerGuess;

  var valueGame2Winner = (Array.from($formValues.querySelectorAll('.valueGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame2Winner != null && valueGame2Winner !== '')
    vals['setGame2Winner'] = valueGame2Winner;

  var valueGame2Loser = (Array.from($formValues.querySelectorAll('.valueGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame2Loser != null && valueGame2Loser !== '')
    vals['setGame2Loser'] = valueGame2Loser;

  var valueChampionship = (Array.from($formValues.querySelectorAll('.valueChampionship')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueChampionship != null && valueChampionship !== '')
    vals['setChampionship'] = valueChampionship;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value === 'true';
  var setSessionId = removeSessionId ? null : $formValues.querySelector('.setSessionId')?.value;
  var addSessionId = $formValues.querySelector('.addSessionId')?.value;
  if(removeSessionId || setSessionId != null && setSessionId !== '')
    vals['setSessionId'] = setSessionId;
  if(addSessionId != null && addSessionId !== '')
    vals['addSessionId'] = addSessionId;
  var removeSessionId = $formValues.querySelector('.removeSessionId')?.value;
  if(removeSessionId != null && removeSessionId !== '')
    vals['removeSessionId'] = removeSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value === 'true';
  var setUserKey = removeUserKey ? null : $formValues.querySelector('.setUserKey')?.value;
  var addUserKey = $formValues.querySelector('.addUserKey')?.value;
  if(removeUserKey || setUserKey != null && setUserKey !== '')
    vals['setUserKey'] = setUserKey;
  if(addUserKey != null && addUserKey !== '')
    vals['addUserKey'] = addUserKey;
  var removeUserKey = $formValues.querySelector('.removeUserKey')?.value;
  if(removeUserKey != null && removeUserKey !== '')
    vals['removeUserKey'] = removeUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value === 'true';
  var setObjectTitle = removeObjectTitle ? null : $formValues.querySelector('.setObjectTitle')?.value;
  var addObjectTitle = $formValues.querySelector('.addObjectTitle')?.value;
  if(removeObjectTitle || setObjectTitle != null && setObjectTitle !== '')
    vals['setObjectTitle'] = setObjectTitle;
  if(addObjectTitle != null && addObjectTitle !== '')
    vals['addObjectTitle'] = addObjectTitle;
  var removeObjectTitle = $formValues.querySelector('.removeObjectTitle')?.value;
  if(removeObjectTitle != null && removeObjectTitle !== '')
    vals['removeObjectTitle'] = removeObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value === 'true';
  var setDisplayPage = removeDisplayPage ? null : $formValues.querySelector('.setDisplayPage')?.value;
  var addDisplayPage = $formValues.querySelector('.addDisplayPage')?.value;
  if(removeDisplayPage || setDisplayPage != null && setDisplayPage !== '')
    vals['setDisplayPage'] = setDisplayPage;
  if(addDisplayPage != null && addDisplayPage !== '')
    vals['addDisplayPage'] = addDisplayPage;
  var removeDisplayPage = $formValues.querySelector('.removeDisplayPage')?.value;
  if(removeDisplayPage != null && removeDisplayPage !== '')
    vals['removeDisplayPage'] = removeDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value === 'true';
  var setEditPage = removeEditPage ? null : $formValues.querySelector('.setEditPage')?.value;
  var addEditPage = $formValues.querySelector('.addEditPage')?.value;
  if(removeEditPage || setEditPage != null && setEditPage !== '')
    vals['setEditPage'] = setEditPage;
  if(addEditPage != null && addEditPage !== '')
    vals['addEditPage'] = addEditPage;
  var removeEditPage = $formValues.querySelector('.removeEditPage')?.value;
  if(removeEditPage != null && removeEditPage !== '')
    vals['removeEditPage'] = removeEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value === 'true';
  var setUserPage = removeUserPage ? null : $formValues.querySelector('.setUserPage')?.value;
  var addUserPage = $formValues.querySelector('.addUserPage')?.value;
  if(removeUserPage || setUserPage != null && setUserPage !== '')
    vals['setUserPage'] = setUserPage;
  if(addUserPage != null && addUserPage !== '')
    vals['addUserPage'] = addUserPage;
  var removeUserPage = $formValues.querySelector('.removeUserPage')?.value;
  if(removeUserPage != null && removeUserPage !== '')
    vals['removeUserPage'] = removeUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value === 'true';
  var setDownload = removeDownload ? null : $formValues.querySelector('.setDownload')?.value;
  var addDownload = $formValues.querySelector('.addDownload')?.value;
  if(removeDownload || setDownload != null && setDownload !== '')
    vals['setDownload'] = setDownload;
  if(addDownload != null && addDownload !== '')
    vals['addDownload'] = addDownload;
  var removeDownload = $formValues.querySelector('.removeDownload')?.value;
  if(removeDownload != null && removeDownload !== '')
    vals['removeDownload'] = removeDownload;

  var valueBracketId = $formValues.querySelector('.valueBracketId')?.value;
  var removeBracketId = $formValues.querySelector('.removeBracketId')?.value === 'true';
  var setBracketId = removeBracketId ? null : $formValues.querySelector('.setBracketId')?.value;
  var addBracketId = $formValues.querySelector('.addBracketId')?.value;
  if(removeBracketId || setBracketId != null && setBracketId !== '')
    vals['setBracketId'] = setBracketId;
  if(addBracketId != null && addBracketId !== '')
    vals['addBracketId'] = addBracketId;
  var removeBracketId = $formValues.querySelector('.removeBracketId')?.value;
  if(removeBracketId != null && removeBracketId !== '')
    vals['removeBracketId'] = removeBracketId;

  var valueName = $formValues.querySelector('.valueName')?.value;
  var removeName = $formValues.querySelector('.removeName')?.value === 'true';
  var setName = removeName ? null : $formValues.querySelector('.setName')?.value;
  var addName = $formValues.querySelector('.addName')?.value;
  if(removeName || setName != null && setName !== '')
    vals['setName'] = setName;
  if(addName != null && addName !== '')
    vals['addName'] = addName;
  var removeName = $formValues.querySelector('.removeName')?.value;
  if(removeName != null && removeName !== '')
    vals['removeName'] = removeName;

  patchFinalFourVals(bracketId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'bracketId:' + bracketId}], vals, target, success, error);
}

function patchFinalFourFilters($formFilters) {
  var filters = [];
  if($formFilters) {
    filters.push({ name: 'softCommit', value: 'true' });

    var filterPk = $formFilters.querySelector('.valuePk')?.value;
    if(filterPk != null && filterPk !== '')
      filters.push({ name: 'fq', value: 'pk:' + filterPk });

    var filterCreated = $formFilters.querySelector('.valueCreated')?.value;
    if(filterCreated != null && filterCreated !== '')
      filters.push({ name: 'fq', value: 'created:' + filterCreated });

    var filterModified = $formFilters.querySelector('.valueModified')?.value;
    if(filterModified != null && filterModified !== '')
      filters.push({ name: 'fq', value: 'modified:' + filterModified });

    var $filterArchivedCheckbox = $formFilters.querySelector('input.valueArchived[type = "checkbox"]');
    var $filterArchivedSelect = $formFilters.querySelector('select.valueArchived');
    var filterArchived = $filterArchivedSelect.length ? $filterArchivedSelect.value : $filterArchivedCheckbox.checked;
    var filterArchivedSelectVal = $formFilters.querySelector('select.filterArchived')?.value;
    var filterArchived = null;
    if(filterArchivedSelectVal !== '')
      filterArchived = filterArchivedSelectVal == 'true';
    if(filterArchived != null && filterArchived === true)
      filters.push({ name: 'fq', value: 'archived:' + filterArchived });

    var filterEliteEight = $formFilters.querySelector('.valueEliteEight')?.value;
    if(filterEliteEight != null && filterEliteEight !== '')
      filters.push({ name: 'fq', value: 'eliteEight:' + filterEliteEight });

    var filterGuesserId = $formFilters.querySelector('.valueGuesserId')?.value;
    if(filterGuesserId != null && filterGuesserId !== '')
      filters.push({ name: 'fq', value: 'guesserId:' + filterGuesserId });

    var filterYear = $formFilters.querySelector('.valueYear')?.value;
    if(filterYear != null && filterYear !== '')
      filters.push({ name: 'fq', value: 'year:' + filterYear });

    var filterGame1WinnerGuess = $formFilters.querySelector('.valueGame1WinnerGuess')?.value;
    if(filterGame1WinnerGuess != null && filterGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'game1WinnerGuess:' + filterGame1WinnerGuess });

    var filterGame1Winner = $formFilters.querySelector('.valueGame1Winner')?.value;
    if(filterGame1Winner != null && filterGame1Winner !== '')
      filters.push({ name: 'fq', value: 'game1Winner:' + filterGame1Winner });

    var filterGame1Loser = $formFilters.querySelector('.valueGame1Loser')?.value;
    if(filterGame1Loser != null && filterGame1Loser !== '')
      filters.push({ name: 'fq', value: 'game1Loser:' + filterGame1Loser });

    var filterGame2WinnerGuess = $formFilters.querySelector('.valueGame2WinnerGuess')?.value;
    if(filterGame2WinnerGuess != null && filterGame2WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'game2WinnerGuess:' + filterGame2WinnerGuess });

    var filterGame2Winner = $formFilters.querySelector('.valueGame2Winner')?.value;
    if(filterGame2Winner != null && filterGame2Winner !== '')
      filters.push({ name: 'fq', value: 'game2Winner:' + filterGame2Winner });

    var filterGame2Loser = $formFilters.querySelector('.valueGame2Loser')?.value;
    if(filterGame2Loser != null && filterGame2Loser !== '')
      filters.push({ name: 'fq', value: 'game2Loser:' + filterGame2Loser });

    var filterChampionship = $formFilters.querySelector('.valueChampionship')?.value;
    if(filterChampionship != null && filterChampionship !== '')
      filters.push({ name: 'fq', value: 'championship:' + filterChampionship });

    var filterClassCanonicalName = $formFilters.querySelector('.valueClassCanonicalName')?.value;
    if(filterClassCanonicalName != null && filterClassCanonicalName !== '')
      filters.push({ name: 'fq', value: 'classCanonicalName:' + filterClassCanonicalName });

    var filterClassSimpleName = $formFilters.querySelector('.valueClassSimpleName')?.value;
    if(filterClassSimpleName != null && filterClassSimpleName !== '')
      filters.push({ name: 'fq', value: 'classSimpleName:' + filterClassSimpleName });

    var filterClassCanonicalNames = $formFilters.querySelector('.valueClassCanonicalNames')?.value;
    if(filterClassCanonicalNames != null && filterClassCanonicalNames !== '')
      filters.push({ name: 'fq', value: 'classCanonicalNames:' + filterClassCanonicalNames });

    var filterSessionId = $formFilters.querySelector('.valueSessionId')?.value;
    if(filterSessionId != null && filterSessionId !== '')
      filters.push({ name: 'fq', value: 'sessionId:' + filterSessionId });

    var filterUserKey = $formFilters.querySelector('.valueUserKey')?.value;
    if(filterUserKey != null && filterUserKey !== '')
      filters.push({ name: 'fq', value: 'userKey:' + filterUserKey });

    var filterSaves = $formFilters.querySelector('.valueSaves')?.value;
    if(filterSaves != null && filterSaves !== '')
      filters.push({ name: 'fq', value: 'saves:' + filterSaves });

    var filterObjectTitle = $formFilters.querySelector('.valueObjectTitle')?.value;
    if(filterObjectTitle != null && filterObjectTitle !== '')
      filters.push({ name: 'fq', value: 'objectTitle:' + filterObjectTitle });

    var filterDisplayPage = $formFilters.querySelector('.valueDisplayPage')?.value;
    if(filterDisplayPage != null && filterDisplayPage !== '')
      filters.push({ name: 'fq', value: 'displayPage:' + filterDisplayPage });

    var filterEditPage = $formFilters.querySelector('.valueEditPage')?.value;
    if(filterEditPage != null && filterEditPage !== '')
      filters.push({ name: 'fq', value: 'editPage:' + filterEditPage });

    var filterUserPage = $formFilters.querySelector('.valueUserPage')?.value;
    if(filterUserPage != null && filterUserPage !== '')
      filters.push({ name: 'fq', value: 'userPage:' + filterUserPage });

    var filterDownload = $formFilters.querySelector('.valueDownload')?.value;
    if(filterDownload != null && filterDownload !== '')
      filters.push({ name: 'fq', value: 'download:' + filterDownload });

    var filterObjectSuggest = $formFilters.querySelector('.valueObjectSuggest')?.value;
    if(filterObjectSuggest != null && filterObjectSuggest !== '')
      filters.push({ name: 'q', value: 'objectSuggest:' + filterObjectSuggest });

    var filterObjectText = $formFilters.querySelector('.valueObjectText')?.value;
    if(filterObjectText != null && filterObjectText !== '')
      filters.push({ name: 'fq', value: 'objectText:' + filterObjectText });

    var filterSolrId = $formFilters.querySelector('.valueSolrId')?.value;
    if(filterSolrId != null && filterSolrId !== '')
      filters.push({ name: 'fq', value: 'solrId:' + filterSolrId });

    var filterBracketId = $formFilters.querySelector('.valueBracketId')?.value;
    if(filterBracketId != null && filterBracketId !== '')
      filters.push({ name: 'fq', value: 'bracketId:' + filterBracketId });

    var filterName = $formFilters.querySelector('.valueName')?.value;
    if(filterName != null && filterName !== '')
      filters.push({ name: 'fq', value: 'name:' + filterName });
  }
  return filters;
}

function patchFinalFourVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchFinalFourVals(filters, vals, target, success, error);
}

function patchFinalFourVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/final-four?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PATCH'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// POST //

async function postFinalFour($formValues, target, success, error) {
  var vals = {};
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  var valuePk = $formValues.querySelector('.valuePk')?.value;
  if(valuePk != null && valuePk !== '')
    vals['pk'] = valuePk;

  var valueCreated = $formValues.querySelector('.valueCreated')?.value;
  if(valueCreated != null && valueCreated !== '')
    vals['created'] = valueCreated;

  var valueModified = $formValues.querySelector('.valueModified')?.value;
  if(valueModified != null && valueModified !== '')
    vals['modified'] = valueModified;

  var valueArchived = $formValues.querySelector('.valueArchived')?.value;
  if(valueArchived != null && valueArchived !== '')
    vals['archived'] = valueArchived == 'true';

  var valueEliteEight = (Array.from($formValues.querySelectorAll('.valueEliteEight')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEliteEight != null && valueEliteEight !== '')
    vals['eliteEight'] = valueEliteEight;

  var valueGuesserId = (Array.from($formValues.querySelectorAll('.valueGuesserId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGuesserId != null && valueGuesserId !== '')
    vals['guesserId'] = valueGuesserId;

  var valueYear = $formValues.querySelector('.valueYear')?.value;
  if(valueYear != null && valueYear !== '')
    vals['year'] = valueYear;

  var valueGame1WinnerGuess = $formValues.querySelector('.valueGame1WinnerGuess')?.value;
  if(valueGame1WinnerGuess != null && valueGame1WinnerGuess !== '')
    vals['game1WinnerGuess'] = valueGame1WinnerGuess;

  var valueGame1Winner = (Array.from($formValues.querySelectorAll('.valueGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame1Winner != null && valueGame1Winner !== '')
    vals['game1Winner'] = valueGame1Winner;

  var valueGame1Loser = (Array.from($formValues.querySelectorAll('.valueGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame1Loser != null && valueGame1Loser !== '')
    vals['game1Loser'] = valueGame1Loser;

  var valueGame2WinnerGuess = $formValues.querySelector('.valueGame2WinnerGuess')?.value;
  if(valueGame2WinnerGuess != null && valueGame2WinnerGuess !== '')
    vals['game2WinnerGuess'] = valueGame2WinnerGuess;

  var valueGame2Winner = (Array.from($formValues.querySelectorAll('.valueGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame2Winner != null && valueGame2Winner !== '')
    vals['game2Winner'] = valueGame2Winner;

  var valueGame2Loser = (Array.from($formValues.querySelectorAll('.valueGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGame2Loser != null && valueGame2Loser !== '')
    vals['game2Loser'] = valueGame2Loser;

  var valueChampionship = (Array.from($formValues.querySelectorAll('.valueChampionship')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueChampionship != null && valueChampionship !== '')
    vals['championship'] = valueChampionship;

  var valueSessionId = $formValues.querySelector('.valueSessionId')?.value;
  if(valueSessionId != null && valueSessionId !== '')
    vals['sessionId'] = valueSessionId;

  var valueUserKey = $formValues.querySelector('.valueUserKey')?.value;
  if(valueUserKey != null && valueUserKey !== '')
    vals['userKey'] = valueUserKey;

  var valueObjectTitle = $formValues.querySelector('.valueObjectTitle')?.value;
  if(valueObjectTitle != null && valueObjectTitle !== '')
    vals['objectTitle'] = valueObjectTitle;

  var valueDisplayPage = $formValues.querySelector('.valueDisplayPage')?.value;
  if(valueDisplayPage != null && valueDisplayPage !== '')
    vals['displayPage'] = valueDisplayPage;

  var valueEditPage = $formValues.querySelector('.valueEditPage')?.value;
  if(valueEditPage != null && valueEditPage !== '')
    vals['editPage'] = valueEditPage;

  var valueUserPage = $formValues.querySelector('.valueUserPage')?.value;
  if(valueUserPage != null && valueUserPage !== '')
    vals['userPage'] = valueUserPage;

  var valueDownload = $formValues.querySelector('.valueDownload')?.value;
  if(valueDownload != null && valueDownload !== '')
    vals['download'] = valueDownload;

  var valueBracketId = $formValues.querySelector('.valueBracketId')?.value;
  if(valueBracketId != null && valueBracketId !== '')
    vals['bracketId'] = valueBracketId;

  var valueName = $formValues.querySelector('.valueName')?.value;
  if(valueName != null && valueName !== '')
    vals['name'] = valueName;

  fetch(
    '/en-us/api/final-four'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

function postFinalFourVals(vals, target, success, error) {
  fetch(
    '/en-us/api/final-four'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'POST'
      , body: JSON.stringify(vals)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETE //

async function deleteFinalFour(target, bracketId, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/final-four/' + encodeURIComponent(bracketId)
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// PUTImport //

async function putimportFinalFour($formValues, target, bracketId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportFinalFourVals(JSON.parse(json), target, success, error);
}

function putimportFinalFourVals(json, target, success, error) {
  fetch(
    '/en-us/api/final-four-import'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'PUT'
      , body: JSON.stringify(json)
    }).then(response => {
      if(response.ok) {
        response.json().then((json) => {
          success(json, target);
        })
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}

// DELETEFilter //

async function deletefilterFinalFour(target, success, error) {
  if(success == null) {
    success = function( data, textStatus, jQxhr ) {
      addGlow(target, jqXhr);
      var url = data['editPage'];
      if(url)
        window.location.href = url;
    };
  }
  if(error == null) {
    error = function( jqXhr, target2 ) {
      if(jqXhr.status === 400) {
        jqXhr.json().then((json) => {
          if(json?.error?.message === 'Inactive Token') {
            fetch('/refresh').then(refreshResponse => {
              if(refreshResponse.ok) {
                addErrorJson(target, jqXhr);
              } else {
                addErrorJson(target, jqXhr);
              }
            });
          } else {
            addError(target, jqXhr);
          }
        });
      } else {
        addError(target, jqXhr);
      }
    };
  }

  fetch(
    '/en-us/api/final-four'
    , {
      headers: {'Content-Type':'application/json; charset=utf-8'}
      , method: 'DELETE'
    }).then(response => {
      if(response.ok) {
        success(response, target);
      } else {
        error(response, target);
      }
    })
    .catch(response => error(response, target));
}
