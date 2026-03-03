
async function websocketSweetSixteen(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketSweetSixteen', function (error, message) {
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
      $headerSpan.innerText = 'modify sweet sixteen brackets in ' + json.timeRemaining;
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
async function websocketSweetSixteenInner(apiRequest) {
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
        var inputGuesserId = null;
        var inputYear = null;
        var inputSouthGame1Winner = null;
        var inputSouthGame1Loser = null;
        var inputSouthGame2Winner = null;
        var inputSouthGame2Loser = null;
        var inputWestGame1Winner = null;
        var inputWestGame1Loser = null;
        var inputWestGame2Winner = null;
        var inputWestGame2Loser = null;
        var inputEastGame1Winner = null;
        var inputEastGame1Loser = null;
        var inputEastGame2Winner = null;
        var inputEastGame2Loser = null;
        var inputMidwestGame1Winner = null;
        var inputMidwestGame1Loser = null;
        var inputMidwestGame2Winner = null;
        var inputMidwestGame2Loser = null;
        var inputEliteEight = null;
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
        var inputBracketId = null;
        var inputName = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.Page_archived');
        if(vars.includes('guesserId'))
          inputGuesserId = $response.querySelector('.Page_guesserId');
        if(vars.includes('year'))
          inputYear = $response.querySelector('.Page_year');
        if(vars.includes('southGame1Winner'))
          inputSouthGame1Winner = $response.querySelector('.Page_southGame1Winner');
        if(vars.includes('southGame1Loser'))
          inputSouthGame1Loser = $response.querySelector('.Page_southGame1Loser');
        if(vars.includes('southGame2Winner'))
          inputSouthGame2Winner = $response.querySelector('.Page_southGame2Winner');
        if(vars.includes('southGame2Loser'))
          inputSouthGame2Loser = $response.querySelector('.Page_southGame2Loser');
        if(vars.includes('westGame1Winner'))
          inputWestGame1Winner = $response.querySelector('.Page_westGame1Winner');
        if(vars.includes('westGame1Loser'))
          inputWestGame1Loser = $response.querySelector('.Page_westGame1Loser');
        if(vars.includes('westGame2Winner'))
          inputWestGame2Winner = $response.querySelector('.Page_westGame2Winner');
        if(vars.includes('westGame2Loser'))
          inputWestGame2Loser = $response.querySelector('.Page_westGame2Loser');
        if(vars.includes('eastGame1Winner'))
          inputEastGame1Winner = $response.querySelector('.Page_eastGame1Winner');
        if(vars.includes('eastGame1Loser'))
          inputEastGame1Loser = $response.querySelector('.Page_eastGame1Loser');
        if(vars.includes('eastGame2Winner'))
          inputEastGame2Winner = $response.querySelector('.Page_eastGame2Winner');
        if(vars.includes('eastGame2Loser'))
          inputEastGame2Loser = $response.querySelector('.Page_eastGame2Loser');
        if(vars.includes('midwestGame1Winner'))
          inputMidwestGame1Winner = $response.querySelector('.Page_midwestGame1Winner');
        if(vars.includes('midwestGame1Loser'))
          inputMidwestGame1Loser = $response.querySelector('.Page_midwestGame1Loser');
        if(vars.includes('midwestGame2Winner'))
          inputMidwestGame2Winner = $response.querySelector('.Page_midwestGame2Winner');
        if(vars.includes('midwestGame2Loser'))
          inputMidwestGame2Loser = $response.querySelector('.Page_midwestGame2Loser');
        if(vars.includes('eliteEight'))
          inputEliteEight = $response.querySelector('.Page_eliteEight');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.Page_solrId');
        if(vars.includes('bracketId'))
          inputBracketId = $response.querySelector('.Page_bracketId');
        if(vars.includes('name'))
          inputName = $response.querySelector('.Page_name');

        jsWebsocketSweetSixteen(bracketId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listSweetSixteen = JSON.parse($response.querySelector('.pageForm .listSweetSixteen')?.value);


        if(inputPk) {
          document.querySelectorAll('.Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.Page_archived'));
        }

        if(inputGuesserId) {
          document.querySelectorAll('.Page_guesserId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGuesserId.getAttribute('value');
            else
              item.textContent = inputGuesserId.textContent;
          });
          addGlow(document.querySelector('.Page_guesserId'));
        }

        if(inputYear) {
          document.querySelectorAll('.Page_year').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputYear.getAttribute('value');
            else
              item.textContent = inputYear.textContent;
          });
          addGlow(document.querySelector('.Page_year'));
        }

        if(inputSouthGame1Winner) {
          document.querySelectorAll('.Page_southGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSouthGame1Winner.getAttribute('value');
            else
              item.textContent = inputSouthGame1Winner.textContent;
          });
          addGlow(document.querySelector('.Page_southGame1Winner'));
        }

        if(inputSouthGame1Loser) {
          document.querySelectorAll('.Page_southGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSouthGame1Loser.getAttribute('value');
            else
              item.textContent = inputSouthGame1Loser.textContent;
          });
          addGlow(document.querySelector('.Page_southGame1Loser'));
        }

        if(inputSouthGame2Winner) {
          document.querySelectorAll('.Page_southGame2Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSouthGame2Winner.getAttribute('value');
            else
              item.textContent = inputSouthGame2Winner.textContent;
          });
          addGlow(document.querySelector('.Page_southGame2Winner'));
        }

        if(inputSouthGame2Loser) {
          document.querySelectorAll('.Page_southGame2Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSouthGame2Loser.getAttribute('value');
            else
              item.textContent = inputSouthGame2Loser.textContent;
          });
          addGlow(document.querySelector('.Page_southGame2Loser'));
        }

        if(inputWestGame1Winner) {
          document.querySelectorAll('.Page_westGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWestGame1Winner.getAttribute('value');
            else
              item.textContent = inputWestGame1Winner.textContent;
          });
          addGlow(document.querySelector('.Page_westGame1Winner'));
        }

        if(inputWestGame1Loser) {
          document.querySelectorAll('.Page_westGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWestGame1Loser.getAttribute('value');
            else
              item.textContent = inputWestGame1Loser.textContent;
          });
          addGlow(document.querySelector('.Page_westGame1Loser'));
        }

        if(inputWestGame2Winner) {
          document.querySelectorAll('.Page_westGame2Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWestGame2Winner.getAttribute('value');
            else
              item.textContent = inputWestGame2Winner.textContent;
          });
          addGlow(document.querySelector('.Page_westGame2Winner'));
        }

        if(inputWestGame2Loser) {
          document.querySelectorAll('.Page_westGame2Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWestGame2Loser.getAttribute('value');
            else
              item.textContent = inputWestGame2Loser.textContent;
          });
          addGlow(document.querySelector('.Page_westGame2Loser'));
        }

        if(inputEastGame1Winner) {
          document.querySelectorAll('.Page_eastGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEastGame1Winner.getAttribute('value');
            else
              item.textContent = inputEastGame1Winner.textContent;
          });
          addGlow(document.querySelector('.Page_eastGame1Winner'));
        }

        if(inputEastGame1Loser) {
          document.querySelectorAll('.Page_eastGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEastGame1Loser.getAttribute('value');
            else
              item.textContent = inputEastGame1Loser.textContent;
          });
          addGlow(document.querySelector('.Page_eastGame1Loser'));
        }

        if(inputEastGame2Winner) {
          document.querySelectorAll('.Page_eastGame2Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEastGame2Winner.getAttribute('value');
            else
              item.textContent = inputEastGame2Winner.textContent;
          });
          addGlow(document.querySelector('.Page_eastGame2Winner'));
        }

        if(inputEastGame2Loser) {
          document.querySelectorAll('.Page_eastGame2Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEastGame2Loser.getAttribute('value');
            else
              item.textContent = inputEastGame2Loser.textContent;
          });
          addGlow(document.querySelector('.Page_eastGame2Loser'));
        }

        if(inputMidwestGame1Winner) {
          document.querySelectorAll('.Page_midwestGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMidwestGame1Winner.getAttribute('value');
            else
              item.textContent = inputMidwestGame1Winner.textContent;
          });
          addGlow(document.querySelector('.Page_midwestGame1Winner'));
        }

        if(inputMidwestGame1Loser) {
          document.querySelectorAll('.Page_midwestGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMidwestGame1Loser.getAttribute('value');
            else
              item.textContent = inputMidwestGame1Loser.textContent;
          });
          addGlow(document.querySelector('.Page_midwestGame1Loser'));
        }

        if(inputMidwestGame2Winner) {
          document.querySelectorAll('.Page_midwestGame2Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMidwestGame2Winner.getAttribute('value');
            else
              item.textContent = inputMidwestGame2Winner.textContent;
          });
          addGlow(document.querySelector('.Page_midwestGame2Winner'));
        }

        if(inputMidwestGame2Loser) {
          document.querySelectorAll('.Page_midwestGame2Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMidwestGame2Loser.getAttribute('value');
            else
              item.textContent = inputMidwestGame2Loser.textContent;
          });
          addGlow(document.querySelector('.Page_midwestGame2Loser'));
        }

        if(inputEliteEight) {
          document.querySelectorAll('.Page_eliteEight').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEliteEight.getAttribute('value');
            else
              item.textContent = inputEliteEight.textContent;
          });
          addGlow(document.querySelector('.Page_eliteEight'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.Page_solrId'));
        }

        if(inputBracketId) {
          document.querySelectorAll('.Page_bracketId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBracketId.getAttribute('value');
            else
              item.textContent = inputBracketId.textContent;
          });
          addGlow(document.querySelector('.Page_bracketId'));
        }

        if(inputName) {
          document.querySelectorAll('.Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.Page_name'));
        }

          pageGraphSweetSixteen();
      });
    });
  }
}

function pageGraphSweetSixteen(apiRequest) {
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
          layout['title'] = 'sweet sixteen brackets';
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
          Plotly.react('htmBodyGraphSweetSixteenPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqSweetSixteen_time').innerText = '';
  searchPage('SweetSixteen', function() {
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
      document.querySelector('#fqSweetSixteen_time').value = x;
      document.querySelector('#fqSweetSixteen_time').onchange();
      searchPage('SweetSixteen');
    }, speedRate);
  });
}

// Search //

async function searchSweetSixteen($formFilters, success, error) {
  var filters = searchSweetSixteenFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchSweetSixteenVals(filters, target, success, error);
}

function searchSweetSixteenFilters($formFilters) {
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

    var filterGuesserId = $formFilters.querySelector('.valueGuesserId')?.value;
    if(filterGuesserId != null && filterGuesserId !== '')
      filters.push({ name: 'fq', value: 'guesserId:' + filterGuesserId });

    var filterYear = $formFilters.querySelector('.valueYear')?.value;
    if(filterYear != null && filterYear !== '')
      filters.push({ name: 'fq', value: 'year:' + filterYear });

    var filterSouthGame1Winner = $formFilters.querySelector('.valueSouthGame1Winner')?.value;
    if(filterSouthGame1Winner != null && filterSouthGame1Winner !== '')
      filters.push({ name: 'fq', value: 'southGame1Winner:' + filterSouthGame1Winner });

    var filterSouthGame1Loser = $formFilters.querySelector('.valueSouthGame1Loser')?.value;
    if(filterSouthGame1Loser != null && filterSouthGame1Loser !== '')
      filters.push({ name: 'fq', value: 'southGame1Loser:' + filterSouthGame1Loser });

    var filterSouthGame2Winner = $formFilters.querySelector('.valueSouthGame2Winner')?.value;
    if(filterSouthGame2Winner != null && filterSouthGame2Winner !== '')
      filters.push({ name: 'fq', value: 'southGame2Winner:' + filterSouthGame2Winner });

    var filterSouthGame2Loser = $formFilters.querySelector('.valueSouthGame2Loser')?.value;
    if(filterSouthGame2Loser != null && filterSouthGame2Loser !== '')
      filters.push({ name: 'fq', value: 'southGame2Loser:' + filterSouthGame2Loser });

    var filterWestGame1Winner = $formFilters.querySelector('.valueWestGame1Winner')?.value;
    if(filterWestGame1Winner != null && filterWestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'westGame1Winner:' + filterWestGame1Winner });

    var filterWestGame1Loser = $formFilters.querySelector('.valueWestGame1Loser')?.value;
    if(filterWestGame1Loser != null && filterWestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'westGame1Loser:' + filterWestGame1Loser });

    var filterWestGame2Winner = $formFilters.querySelector('.valueWestGame2Winner')?.value;
    if(filterWestGame2Winner != null && filterWestGame2Winner !== '')
      filters.push({ name: 'fq', value: 'westGame2Winner:' + filterWestGame2Winner });

    var filterWestGame2Loser = $formFilters.querySelector('.valueWestGame2Loser')?.value;
    if(filterWestGame2Loser != null && filterWestGame2Loser !== '')
      filters.push({ name: 'fq', value: 'westGame2Loser:' + filterWestGame2Loser });

    var filterEastGame1Winner = $formFilters.querySelector('.valueEastGame1Winner')?.value;
    if(filterEastGame1Winner != null && filterEastGame1Winner !== '')
      filters.push({ name: 'fq', value: 'eastGame1Winner:' + filterEastGame1Winner });

    var filterEastGame1Loser = $formFilters.querySelector('.valueEastGame1Loser')?.value;
    if(filterEastGame1Loser != null && filterEastGame1Loser !== '')
      filters.push({ name: 'fq', value: 'eastGame1Loser:' + filterEastGame1Loser });

    var filterEastGame2Winner = $formFilters.querySelector('.valueEastGame2Winner')?.value;
    if(filterEastGame2Winner != null && filterEastGame2Winner !== '')
      filters.push({ name: 'fq', value: 'eastGame2Winner:' + filterEastGame2Winner });

    var filterEastGame2Loser = $formFilters.querySelector('.valueEastGame2Loser')?.value;
    if(filterEastGame2Loser != null && filterEastGame2Loser !== '')
      filters.push({ name: 'fq', value: 'eastGame2Loser:' + filterEastGame2Loser });

    var filterMidwestGame1Winner = $formFilters.querySelector('.valueMidwestGame1Winner')?.value;
    if(filterMidwestGame1Winner != null && filterMidwestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Winner:' + filterMidwestGame1Winner });

    var filterMidwestGame1Loser = $formFilters.querySelector('.valueMidwestGame1Loser')?.value;
    if(filterMidwestGame1Loser != null && filterMidwestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Loser:' + filterMidwestGame1Loser });

    var filterMidwestGame2Winner = $formFilters.querySelector('.valueMidwestGame2Winner')?.value;
    if(filterMidwestGame2Winner != null && filterMidwestGame2Winner !== '')
      filters.push({ name: 'fq', value: 'midwestGame2Winner:' + filterMidwestGame2Winner });

    var filterMidwestGame2Loser = $formFilters.querySelector('.valueMidwestGame2Loser')?.value;
    if(filterMidwestGame2Loser != null && filterMidwestGame2Loser !== '')
      filters.push({ name: 'fq', value: 'midwestGame2Loser:' + filterMidwestGame2Loser });

    var filterEliteEight = $formFilters.querySelector('.valueEliteEight')?.value;
    if(filterEliteEight != null && filterEliteEight !== '')
      filters.push({ name: 'fq', value: 'eliteEight:' + filterEliteEight });

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

function searchSweetSixteenVals(filters, target, success, error) {

  fetch(
    '/en-us/api/sweet-sixteen?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestSweetSixteenGuesserId(filters, $list, bracketId = null, guesserId = null, relate=true, target) {
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
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'GuesserId']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenGuesserId(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenSouthGame1Winner(filters, $list, bracketId = null, southGame1Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (southGame1Winner != null && val === southGame1Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_southGame1Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueSouthGame1Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'SouthGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenSouthGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenSouthGame1Loser(filters, $list, bracketId = null, southGame1Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (southGame1Loser != null && val === southGame1Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_southGame1Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueSouthGame1Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'SouthGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenSouthGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenSouthGame2Winner(filters, $list, bracketId = null, southGame2Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (southGame2Winner != null && val === southGame2Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_southGame2Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueSouthGame2Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'SouthGame2Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenSouthGame2Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenSouthGame2Loser(filters, $list, bracketId = null, southGame2Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (southGame2Loser != null && val === southGame2Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_southGame2Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueSouthGame2Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'SouthGame2Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenSouthGame2Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenWestGame1Winner(filters, $list, bracketId = null, westGame1Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (westGame1Winner != null && val === westGame1Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_westGame1Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueWestGame1Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'WestGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenWestGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenWestGame1Loser(filters, $list, bracketId = null, westGame1Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (westGame1Loser != null && val === westGame1Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_westGame1Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueWestGame1Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'WestGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenWestGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenWestGame2Winner(filters, $list, bracketId = null, westGame2Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (westGame2Winner != null && val === westGame2Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_westGame2Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueWestGame2Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'WestGame2Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenWestGame2Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenWestGame2Loser(filters, $list, bracketId = null, westGame2Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (westGame2Loser != null && val === westGame2Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_westGame2Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueWestGame2Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'WestGame2Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenWestGame2Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenEastGame1Winner(filters, $list, bracketId = null, eastGame1Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (eastGame1Winner != null && val === eastGame1Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_eastGame1Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueEastGame1Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EastGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenEastGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenEastGame1Loser(filters, $list, bracketId = null, eastGame1Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (eastGame1Loser != null && val === eastGame1Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_eastGame1Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueEastGame1Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EastGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenEastGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenEastGame2Winner(filters, $list, bracketId = null, eastGame2Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (eastGame2Winner != null && val === eastGame2Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_eastGame2Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueEastGame2Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EastGame2Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenEastGame2Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenEastGame2Loser(filters, $list, bracketId = null, eastGame2Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (eastGame2Loser != null && val === eastGame2Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_eastGame2Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueEastGame2Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EastGame2Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenEastGame2Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenMidwestGame1Winner(filters, $list, bracketId = null, midwestGame1Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (midwestGame1Winner != null && val === midwestGame1Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_midwestGame1Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueMidwestGame1Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'MidwestGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenMidwestGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenObjectSuggest($formFilters, $list, target) {
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
  searchSweetSixteenVals($formFilters, target, success, error);
}

function suggestSweetSixteenMidwestGame1Loser(filters, $list, bracketId = null, midwestGame1Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (midwestGame1Loser != null && val === midwestGame1Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_midwestGame1Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueMidwestGame1Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'MidwestGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenMidwestGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenMidwestGame2Winner(filters, $list, bracketId = null, midwestGame2Winner = null, relate=true, target) {
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
        var checked = val == null ? false : (midwestGame2Winner != null && val === midwestGame2Winner.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_midwestGame2Winner_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueMidwestGame2Winner ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'MidwestGame2Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenMidwestGame2Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenMidwestGame2Loser(filters, $list, bracketId = null, midwestGame2Loser = null, relate=true, target) {
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
        var checked = val == null ? false : (midwestGame2Loser != null && val === midwestGame2Loser.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_midwestGame2Loser_' + bracketId + '_teamId_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueMidwestGame2Loser ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'MidwestGame2Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenMidwestGame2Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestSweetSixteenEliteEight(filters, $list, bracketId = null, eliteEight = null, relate=true, target) {
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
        $input.setAttribute('id', 'GET_eliteEight_' + bracketId + '_sweetSixteen_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueEliteEight ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchSweetSixteenVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EliteEight']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestSweetSixteenEliteEight(filters, $list, bracketId, o[inputVar], relate, target);
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

// GET //

async function getSweetSixteen(pk) {
  fetch(
    '/en-us/api/sweet-sixteen/' + bracketId
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

async function patchSweetSixteen($formFilters, $formValues, target, bracketId, success, error) {
  var filters = patchSweetSixteenFilters($formFilters);

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

  var valueSouthGame1Winner = (Array.from($formValues.querySelectorAll('.valueSouthGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Winner != null && valueSouthGame1Winner !== '')
    vals['setSouthGame1Winner'] = valueSouthGame1Winner;

  var valueSouthGame1Loser = (Array.from($formValues.querySelectorAll('.valueSouthGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Loser != null && valueSouthGame1Loser !== '')
    vals['setSouthGame1Loser'] = valueSouthGame1Loser;

  var valueSouthGame2Winner = (Array.from($formValues.querySelectorAll('.valueSouthGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame2Winner != null && valueSouthGame2Winner !== '')
    vals['setSouthGame2Winner'] = valueSouthGame2Winner;

  var valueSouthGame2Loser = (Array.from($formValues.querySelectorAll('.valueSouthGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame2Loser != null && valueSouthGame2Loser !== '')
    vals['setSouthGame2Loser'] = valueSouthGame2Loser;

  var valueWestGame1Winner = (Array.from($formValues.querySelectorAll('.valueWestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Winner != null && valueWestGame1Winner !== '')
    vals['setWestGame1Winner'] = valueWestGame1Winner;

  var valueWestGame1Loser = (Array.from($formValues.querySelectorAll('.valueWestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Loser != null && valueWestGame1Loser !== '')
    vals['setWestGame1Loser'] = valueWestGame1Loser;

  var valueWestGame2Winner = (Array.from($formValues.querySelectorAll('.valueWestGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame2Winner != null && valueWestGame2Winner !== '')
    vals['setWestGame2Winner'] = valueWestGame2Winner;

  var valueWestGame2Loser = (Array.from($formValues.querySelectorAll('.valueWestGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame2Loser != null && valueWestGame2Loser !== '')
    vals['setWestGame2Loser'] = valueWestGame2Loser;

  var valueEastGame1Winner = (Array.from($formValues.querySelectorAll('.valueEastGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Winner != null && valueEastGame1Winner !== '')
    vals['setEastGame1Winner'] = valueEastGame1Winner;

  var valueEastGame1Loser = (Array.from($formValues.querySelectorAll('.valueEastGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Loser != null && valueEastGame1Loser !== '')
    vals['setEastGame1Loser'] = valueEastGame1Loser;

  var valueEastGame2Winner = (Array.from($formValues.querySelectorAll('.valueEastGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame2Winner != null && valueEastGame2Winner !== '')
    vals['setEastGame2Winner'] = valueEastGame2Winner;

  var valueEastGame2Loser = (Array.from($formValues.querySelectorAll('.valueEastGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame2Loser != null && valueEastGame2Loser !== '')
    vals['setEastGame2Loser'] = valueEastGame2Loser;

  var valueMidwestGame1Winner = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Winner != null && valueMidwestGame1Winner !== '')
    vals['setMidwestGame1Winner'] = valueMidwestGame1Winner;

  var valueMidwestGame1Loser = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Loser != null && valueMidwestGame1Loser !== '')
    vals['setMidwestGame1Loser'] = valueMidwestGame1Loser;

  var valueMidwestGame2Winner = (Array.from($formValues.querySelectorAll('.valueMidwestGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame2Winner != null && valueMidwestGame2Winner !== '')
    vals['setMidwestGame2Winner'] = valueMidwestGame2Winner;

  var valueMidwestGame2Loser = (Array.from($formValues.querySelectorAll('.valueMidwestGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame2Loser != null && valueMidwestGame2Loser !== '')
    vals['setMidwestGame2Loser'] = valueMidwestGame2Loser;

  var valueEliteEight = (Array.from($formValues.querySelectorAll('.valueEliteEight')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEliteEight != null && valueEliteEight !== '')
    vals['setEliteEight'] = valueEliteEight;

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

  patchSweetSixteenVals(bracketId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'bracketId:' + bracketId}], vals, target, success, error);
}

function patchSweetSixteenFilters($formFilters) {
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

    var filterGuesserId = $formFilters.querySelector('.valueGuesserId')?.value;
    if(filterGuesserId != null && filterGuesserId !== '')
      filters.push({ name: 'fq', value: 'guesserId:' + filterGuesserId });

    var filterYear = $formFilters.querySelector('.valueYear')?.value;
    if(filterYear != null && filterYear !== '')
      filters.push({ name: 'fq', value: 'year:' + filterYear });

    var filterSouthGame1Winner = $formFilters.querySelector('.valueSouthGame1Winner')?.value;
    if(filterSouthGame1Winner != null && filterSouthGame1Winner !== '')
      filters.push({ name: 'fq', value: 'southGame1Winner:' + filterSouthGame1Winner });

    var filterSouthGame1Loser = $formFilters.querySelector('.valueSouthGame1Loser')?.value;
    if(filterSouthGame1Loser != null && filterSouthGame1Loser !== '')
      filters.push({ name: 'fq', value: 'southGame1Loser:' + filterSouthGame1Loser });

    var filterSouthGame2Winner = $formFilters.querySelector('.valueSouthGame2Winner')?.value;
    if(filterSouthGame2Winner != null && filterSouthGame2Winner !== '')
      filters.push({ name: 'fq', value: 'southGame2Winner:' + filterSouthGame2Winner });

    var filterSouthGame2Loser = $formFilters.querySelector('.valueSouthGame2Loser')?.value;
    if(filterSouthGame2Loser != null && filterSouthGame2Loser !== '')
      filters.push({ name: 'fq', value: 'southGame2Loser:' + filterSouthGame2Loser });

    var filterWestGame1Winner = $formFilters.querySelector('.valueWestGame1Winner')?.value;
    if(filterWestGame1Winner != null && filterWestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'westGame1Winner:' + filterWestGame1Winner });

    var filterWestGame1Loser = $formFilters.querySelector('.valueWestGame1Loser')?.value;
    if(filterWestGame1Loser != null && filterWestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'westGame1Loser:' + filterWestGame1Loser });

    var filterWestGame2Winner = $formFilters.querySelector('.valueWestGame2Winner')?.value;
    if(filterWestGame2Winner != null && filterWestGame2Winner !== '')
      filters.push({ name: 'fq', value: 'westGame2Winner:' + filterWestGame2Winner });

    var filterWestGame2Loser = $formFilters.querySelector('.valueWestGame2Loser')?.value;
    if(filterWestGame2Loser != null && filterWestGame2Loser !== '')
      filters.push({ name: 'fq', value: 'westGame2Loser:' + filterWestGame2Loser });

    var filterEastGame1Winner = $formFilters.querySelector('.valueEastGame1Winner')?.value;
    if(filterEastGame1Winner != null && filterEastGame1Winner !== '')
      filters.push({ name: 'fq', value: 'eastGame1Winner:' + filterEastGame1Winner });

    var filterEastGame1Loser = $formFilters.querySelector('.valueEastGame1Loser')?.value;
    if(filterEastGame1Loser != null && filterEastGame1Loser !== '')
      filters.push({ name: 'fq', value: 'eastGame1Loser:' + filterEastGame1Loser });

    var filterEastGame2Winner = $formFilters.querySelector('.valueEastGame2Winner')?.value;
    if(filterEastGame2Winner != null && filterEastGame2Winner !== '')
      filters.push({ name: 'fq', value: 'eastGame2Winner:' + filterEastGame2Winner });

    var filterEastGame2Loser = $formFilters.querySelector('.valueEastGame2Loser')?.value;
    if(filterEastGame2Loser != null && filterEastGame2Loser !== '')
      filters.push({ name: 'fq', value: 'eastGame2Loser:' + filterEastGame2Loser });

    var filterMidwestGame1Winner = $formFilters.querySelector('.valueMidwestGame1Winner')?.value;
    if(filterMidwestGame1Winner != null && filterMidwestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Winner:' + filterMidwestGame1Winner });

    var filterMidwestGame1Loser = $formFilters.querySelector('.valueMidwestGame1Loser')?.value;
    if(filterMidwestGame1Loser != null && filterMidwestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Loser:' + filterMidwestGame1Loser });

    var filterMidwestGame2Winner = $formFilters.querySelector('.valueMidwestGame2Winner')?.value;
    if(filterMidwestGame2Winner != null && filterMidwestGame2Winner !== '')
      filters.push({ name: 'fq', value: 'midwestGame2Winner:' + filterMidwestGame2Winner });

    var filterMidwestGame2Loser = $formFilters.querySelector('.valueMidwestGame2Loser')?.value;
    if(filterMidwestGame2Loser != null && filterMidwestGame2Loser !== '')
      filters.push({ name: 'fq', value: 'midwestGame2Loser:' + filterMidwestGame2Loser });

    var filterEliteEight = $formFilters.querySelector('.valueEliteEight')?.value;
    if(filterEliteEight != null && filterEliteEight !== '')
      filters.push({ name: 'fq', value: 'eliteEight:' + filterEliteEight });

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

function patchSweetSixteenVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchSweetSixteenVals(filters, vals, target, success, error);
}

function patchSweetSixteenVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/sweet-sixteen?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postSweetSixteen($formValues, target, success, error) {
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

  var valueGuesserId = (Array.from($formValues.querySelectorAll('.valueGuesserId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGuesserId != null && valueGuesserId !== '')
    vals['guesserId'] = valueGuesserId;

  var valueYear = $formValues.querySelector('.valueYear')?.value;
  if(valueYear != null && valueYear !== '')
    vals['year'] = valueYear;

  var valueSouthGame1Winner = (Array.from($formValues.querySelectorAll('.valueSouthGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Winner != null && valueSouthGame1Winner !== '')
    vals['southGame1Winner'] = valueSouthGame1Winner;

  var valueSouthGame1Loser = (Array.from($formValues.querySelectorAll('.valueSouthGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Loser != null && valueSouthGame1Loser !== '')
    vals['southGame1Loser'] = valueSouthGame1Loser;

  var valueSouthGame2Winner = (Array.from($formValues.querySelectorAll('.valueSouthGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame2Winner != null && valueSouthGame2Winner !== '')
    vals['southGame2Winner'] = valueSouthGame2Winner;

  var valueSouthGame2Loser = (Array.from($formValues.querySelectorAll('.valueSouthGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame2Loser != null && valueSouthGame2Loser !== '')
    vals['southGame2Loser'] = valueSouthGame2Loser;

  var valueWestGame1Winner = (Array.from($formValues.querySelectorAll('.valueWestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Winner != null && valueWestGame1Winner !== '')
    vals['westGame1Winner'] = valueWestGame1Winner;

  var valueWestGame1Loser = (Array.from($formValues.querySelectorAll('.valueWestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Loser != null && valueWestGame1Loser !== '')
    vals['westGame1Loser'] = valueWestGame1Loser;

  var valueWestGame2Winner = (Array.from($formValues.querySelectorAll('.valueWestGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame2Winner != null && valueWestGame2Winner !== '')
    vals['westGame2Winner'] = valueWestGame2Winner;

  var valueWestGame2Loser = (Array.from($formValues.querySelectorAll('.valueWestGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame2Loser != null && valueWestGame2Loser !== '')
    vals['westGame2Loser'] = valueWestGame2Loser;

  var valueEastGame1Winner = (Array.from($formValues.querySelectorAll('.valueEastGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Winner != null && valueEastGame1Winner !== '')
    vals['eastGame1Winner'] = valueEastGame1Winner;

  var valueEastGame1Loser = (Array.from($formValues.querySelectorAll('.valueEastGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Loser != null && valueEastGame1Loser !== '')
    vals['eastGame1Loser'] = valueEastGame1Loser;

  var valueEastGame2Winner = (Array.from($formValues.querySelectorAll('.valueEastGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame2Winner != null && valueEastGame2Winner !== '')
    vals['eastGame2Winner'] = valueEastGame2Winner;

  var valueEastGame2Loser = (Array.from($formValues.querySelectorAll('.valueEastGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame2Loser != null && valueEastGame2Loser !== '')
    vals['eastGame2Loser'] = valueEastGame2Loser;

  var valueMidwestGame1Winner = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Winner != null && valueMidwestGame1Winner !== '')
    vals['midwestGame1Winner'] = valueMidwestGame1Winner;

  var valueMidwestGame1Loser = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Loser != null && valueMidwestGame1Loser !== '')
    vals['midwestGame1Loser'] = valueMidwestGame1Loser;

  var valueMidwestGame2Winner = (Array.from($formValues.querySelectorAll('.valueMidwestGame2Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame2Winner != null && valueMidwestGame2Winner !== '')
    vals['midwestGame2Winner'] = valueMidwestGame2Winner;

  var valueMidwestGame2Loser = (Array.from($formValues.querySelectorAll('.valueMidwestGame2Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame2Loser != null && valueMidwestGame2Loser !== '')
    vals['midwestGame2Loser'] = valueMidwestGame2Loser;

  var valueEliteEight = (Array.from($formValues.querySelectorAll('.valueEliteEight')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEliteEight != null && valueEliteEight !== '')
    vals['eliteEight'] = valueEliteEight;

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
    '/en-us/api/sweet-sixteen'
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

function postSweetSixteenVals(vals, target, success, error) {
  fetch(
    '/en-us/api/sweet-sixteen'
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

async function deleteSweetSixteen(target, bracketId, success, error) {
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
    '/en-us/api/sweet-sixteen/' + encodeURIComponent(bracketId)
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

async function putimportSweetSixteen($formValues, target, bracketId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportSweetSixteenVals(JSON.parse(json), target, success, error);
}

function putimportSweetSixteenVals(json, target, success, error) {
  fetch(
    '/en-us/api/sweet-sixteen-import'
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

async function deletefilterSweetSixteen(target, success, error) {
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
    '/en-us/api/sweet-sixteen'
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
