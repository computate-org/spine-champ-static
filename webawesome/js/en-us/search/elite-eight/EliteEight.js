
async function websocketEliteEight(success) {
  window.eventBus.onopen = function () {

    window.eventBus.registerHandler('websocketEliteEight', function (error, message) {
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
      $headerSpan.innerText = 'modify elite eight brackets in ' + json.timeRemaining;
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
async function websocketEliteEightInner(apiRequest) {
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
        var inputSweetSixteen = null;
        var inputGuesserId = null;
        var inputYear = null;
        var inputSouthGame1WinnerGuess = null;
        var inputSouthGame1Winner = null;
        var inputSouthGame1Loser = null;
        var inputWestGame1WinnerGuess = null;
        var inputWestGame1Winner = null;
        var inputWestGame1Loser = null;
        var inputEastGame1WinnerGuess = null;
        var inputEastGame1Winner = null;
        var inputEastGame1Loser = null;
        var inputMidwestGame1WinnerGuess = null;
        var inputMidwestGame1Winner = null;
        var inputMidwestGame1Loser = null;
        var inputFinalFour = null;
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
        var inputActualSweetSixteen = null;
        var inputActualEliteEight = null;
        var inputBracketId = null;
        var inputName = null;

        if(vars.includes('pk'))
          inputPk = $response.querySelector('.EliteEight_Page_pk');
        if(vars.includes('created'))
          inputCreated = $response.querySelector('.EliteEight_Page_created');
        if(vars.includes('modified'))
          inputModified = $response.querySelector('.EliteEight_Page_modified');
        if(vars.includes('archived'))
          inputArchived = $response.querySelector('.EliteEight_Page_archived');
        if(vars.includes('sweetSixteen'))
          inputSweetSixteen = $response.querySelector('.EliteEight_Page_sweetSixteen');
        if(vars.includes('guesserId'))
          inputGuesserId = $response.querySelector('.EliteEight_Page_guesserId');
        if(vars.includes('year'))
          inputYear = $response.querySelector('.EliteEight_Page_year');
        if(vars.includes('southGame1WinnerGuess'))
          inputSouthGame1WinnerGuess = $response.querySelector('.EliteEight_Page_southGame1WinnerGuess');
        if(vars.includes('southGame1Winner'))
          inputSouthGame1Winner = $response.querySelector('.EliteEight_Page_southGame1Winner');
        if(vars.includes('southGame1Loser'))
          inputSouthGame1Loser = $response.querySelector('.EliteEight_Page_southGame1Loser');
        if(vars.includes('westGame1WinnerGuess'))
          inputWestGame1WinnerGuess = $response.querySelector('.EliteEight_Page_westGame1WinnerGuess');
        if(vars.includes('westGame1Winner'))
          inputWestGame1Winner = $response.querySelector('.EliteEight_Page_westGame1Winner');
        if(vars.includes('westGame1Loser'))
          inputWestGame1Loser = $response.querySelector('.EliteEight_Page_westGame1Loser');
        if(vars.includes('eastGame1WinnerGuess'))
          inputEastGame1WinnerGuess = $response.querySelector('.EliteEight_Page_eastGame1WinnerGuess');
        if(vars.includes('eastGame1Winner'))
          inputEastGame1Winner = $response.querySelector('.EliteEight_Page_eastGame1Winner');
        if(vars.includes('eastGame1Loser'))
          inputEastGame1Loser = $response.querySelector('.EliteEight_Page_eastGame1Loser');
        if(vars.includes('midwestGame1WinnerGuess'))
          inputMidwestGame1WinnerGuess = $response.querySelector('.EliteEight_Page_midwestGame1WinnerGuess');
        if(vars.includes('midwestGame1Winner'))
          inputMidwestGame1Winner = $response.querySelector('.EliteEight_Page_midwestGame1Winner');
        if(vars.includes('midwestGame1Loser'))
          inputMidwestGame1Loser = $response.querySelector('.EliteEight_Page_midwestGame1Loser');
        if(vars.includes('finalFour'))
          inputFinalFour = $response.querySelector('.EliteEight_Page_finalFour');
        if(vars.includes('classCanonicalName'))
          inputClassCanonicalName = $response.querySelector('.EliteEight_Page_classCanonicalName');
        if(vars.includes('classSimpleName'))
          inputClassSimpleName = $response.querySelector('.EliteEight_Page_classSimpleName');
        if(vars.includes('classCanonicalNames'))
          inputClassCanonicalNames = $response.querySelector('.EliteEight_Page_classCanonicalNames');
        if(vars.includes('sessionId'))
          inputSessionId = $response.querySelector('.EliteEight_Page_sessionId');
        if(vars.includes('userKey'))
          inputUserKey = $response.querySelector('.EliteEight_Page_userKey');
        if(vars.includes('saves'))
          inputSaves = $response.querySelector('.EliteEight_Page_saves');
        if(vars.includes('objectTitle'))
          inputObjectTitle = $response.querySelector('.EliteEight_Page_objectTitle');
        if(vars.includes('displayPage'))
          inputDisplayPage = $response.querySelector('.EliteEight_Page_displayPage');
        if(vars.includes('editPage'))
          inputEditPage = $response.querySelector('.EliteEight_Page_editPage');
        if(vars.includes('userPage'))
          inputUserPage = $response.querySelector('.EliteEight_Page_userPage');
        if(vars.includes('download'))
          inputDownload = $response.querySelector('.EliteEight_Page_download');
        if(vars.includes('objectSuggest'))
          inputObjectSuggest = $response.querySelector('.EliteEight_Page_objectSuggest');
        if(vars.includes('objectText'))
          inputObjectText = $response.querySelector('.EliteEight_Page_objectText');
        if(vars.includes('solrId'))
          inputSolrId = $response.querySelector('.EliteEight_Page_solrId');
        if(vars.includes('actualSweetSixteen'))
          inputActualSweetSixteen = $response.querySelector('.EliteEight_Page_actualSweetSixteen');
        if(vars.includes('actualEliteEight'))
          inputActualEliteEight = $response.querySelector('.EliteEight_Page_actualEliteEight');
        if(vars.includes('bracketId'))
          inputBracketId = $response.querySelector('.EliteEight_Page_bracketId');
        if(vars.includes('name'))
          inputName = $response.querySelector('.EliteEight_Page_name');

        jsWebsocketEliteEight(bracketId, vars, $response);
        window.result = JSON.parse($response.querySelector('.pageForm .result')?.value);
        window.listEliteEight = JSON.parse($response.querySelector('.pageForm .listEliteEight')?.value);


        if(inputPk) {
          document.querySelectorAll('.EliteEight_Page_pk').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputPk.getAttribute('value');
            else
              item.textContent = inputPk.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_pk'));
        }

        if(inputCreated) {
          document.querySelectorAll('.EliteEight_Page_created').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputCreated.getAttribute('value');
            else
              item.textContent = inputCreated.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_created'));
        }

        if(inputModified) {
          document.querySelectorAll('.EliteEight_Page_modified').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputModified.getAttribute('value');
            else
              item.textContent = inputModified.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_modified'));
        }

        if(inputArchived) {
          document.querySelectorAll('.EliteEight_Page_archived').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputArchived.getAttribute('value');
            else
              item.textContent = inputArchived.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_archived'));
        }

        if(inputSweetSixteen) {
          document.querySelectorAll('.EliteEight_Page_sweetSixteen').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSweetSixteen.getAttribute('value');
            else
              item.textContent = inputSweetSixteen.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_sweetSixteen'));
        }

        if(inputGuesserId) {
          document.querySelectorAll('.EliteEight_Page_guesserId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputGuesserId.getAttribute('value');
            else
              item.textContent = inputGuesserId.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_guesserId'));
        }

        if(inputYear) {
          document.querySelectorAll('.EliteEight_Page_year').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputYear.getAttribute('value');
            else
              item.textContent = inputYear.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_year'));
        }

        if(inputSouthGame1WinnerGuess) {
          document.querySelectorAll('.EliteEight_Page_southGame1WinnerGuess').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSouthGame1WinnerGuess.getAttribute('value');
            else
              item.textContent = inputSouthGame1WinnerGuess.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_southGame1WinnerGuess'));
        }

        if(inputSouthGame1Winner) {
          document.querySelectorAll('.EliteEight_Page_southGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSouthGame1Winner.getAttribute('value');
            else
              item.textContent = inputSouthGame1Winner.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_southGame1Winner'));
        }

        if(inputSouthGame1Loser) {
          document.querySelectorAll('.EliteEight_Page_southGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSouthGame1Loser.getAttribute('value');
            else
              item.textContent = inputSouthGame1Loser.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_southGame1Loser'));
        }

        if(inputWestGame1WinnerGuess) {
          document.querySelectorAll('.EliteEight_Page_westGame1WinnerGuess').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWestGame1WinnerGuess.getAttribute('value');
            else
              item.textContent = inputWestGame1WinnerGuess.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_westGame1WinnerGuess'));
        }

        if(inputWestGame1Winner) {
          document.querySelectorAll('.EliteEight_Page_westGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWestGame1Winner.getAttribute('value');
            else
              item.textContent = inputWestGame1Winner.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_westGame1Winner'));
        }

        if(inputWestGame1Loser) {
          document.querySelectorAll('.EliteEight_Page_westGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputWestGame1Loser.getAttribute('value');
            else
              item.textContent = inputWestGame1Loser.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_westGame1Loser'));
        }

        if(inputEastGame1WinnerGuess) {
          document.querySelectorAll('.EliteEight_Page_eastGame1WinnerGuess').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEastGame1WinnerGuess.getAttribute('value');
            else
              item.textContent = inputEastGame1WinnerGuess.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_eastGame1WinnerGuess'));
        }

        if(inputEastGame1Winner) {
          document.querySelectorAll('.EliteEight_Page_eastGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEastGame1Winner.getAttribute('value');
            else
              item.textContent = inputEastGame1Winner.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_eastGame1Winner'));
        }

        if(inputEastGame1Loser) {
          document.querySelectorAll('.EliteEight_Page_eastGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEastGame1Loser.getAttribute('value');
            else
              item.textContent = inputEastGame1Loser.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_eastGame1Loser'));
        }

        if(inputMidwestGame1WinnerGuess) {
          document.querySelectorAll('.EliteEight_Page_midwestGame1WinnerGuess').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMidwestGame1WinnerGuess.getAttribute('value');
            else
              item.textContent = inputMidwestGame1WinnerGuess.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_midwestGame1WinnerGuess'));
        }

        if(inputMidwestGame1Winner) {
          document.querySelectorAll('.EliteEight_Page_midwestGame1Winner').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMidwestGame1Winner.getAttribute('value');
            else
              item.textContent = inputMidwestGame1Winner.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_midwestGame1Winner'));
        }

        if(inputMidwestGame1Loser) {
          document.querySelectorAll('.EliteEight_Page_midwestGame1Loser').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputMidwestGame1Loser.getAttribute('value');
            else
              item.textContent = inputMidwestGame1Loser.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_midwestGame1Loser'));
        }

        if(inputFinalFour) {
          document.querySelectorAll('.EliteEight_Page_finalFour').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputFinalFour.getAttribute('value');
            else
              item.textContent = inputFinalFour.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_finalFour'));
        }

        if(inputClassCanonicalName) {
          document.querySelectorAll('.EliteEight_Page_classCanonicalName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalName.getAttribute('value');
            else
              item.textContent = inputClassCanonicalName.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_classCanonicalName'));
        }

        if(inputClassSimpleName) {
          document.querySelectorAll('.EliteEight_Page_classSimpleName').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassSimpleName.getAttribute('value');
            else
              item.textContent = inputClassSimpleName.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_classSimpleName'));
        }

        if(inputClassCanonicalNames) {
          document.querySelectorAll('.EliteEight_Page_classCanonicalNames').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputClassCanonicalNames.getAttribute('value');
            else
              item.textContent = inputClassCanonicalNames.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_classCanonicalNames'));
        }

        if(inputSessionId) {
          document.querySelectorAll('.EliteEight_Page_sessionId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSessionId.getAttribute('value');
            else
              item.textContent = inputSessionId.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_sessionId'));
        }

        if(inputUserKey) {
          document.querySelectorAll('.EliteEight_Page_userKey').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserKey.getAttribute('value');
            else
              item.textContent = inputUserKey.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_userKey'));
        }

        if(inputSaves) {
          document.querySelectorAll('.EliteEight_Page_saves').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSaves.getAttribute('value');
            else
              item.textContent = inputSaves.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_saves'));
        }

        if(inputObjectTitle) {
          document.querySelectorAll('.EliteEight_Page_objectTitle').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectTitle.getAttribute('value');
            else
              item.textContent = inputObjectTitle.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_objectTitle'));
        }

        if(inputDisplayPage) {
          document.querySelectorAll('.EliteEight_Page_displayPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDisplayPage.getAttribute('value');
            else
              item.textContent = inputDisplayPage.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_displayPage'));
        }

        if(inputEditPage) {
          document.querySelectorAll('.EliteEight_Page_editPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputEditPage.getAttribute('value');
            else
              item.textContent = inputEditPage.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_editPage'));
        }

        if(inputUserPage) {
          document.querySelectorAll('.EliteEight_Page_userPage').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputUserPage.getAttribute('value');
            else
              item.textContent = inputUserPage.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_userPage'));
        }

        if(inputDownload) {
          document.querySelectorAll('.EliteEight_Page_download').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputDownload.getAttribute('value');
            else
              item.textContent = inputDownload.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_download'));
        }

        if(inputObjectSuggest) {
          document.querySelectorAll('.EliteEight_Page_objectSuggest').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectSuggest.getAttribute('value');
            else
              item.textContent = inputObjectSuggest.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_objectSuggest'));
        }

        if(inputObjectText) {
          document.querySelectorAll('.EliteEight_Page_objectText').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputObjectText.getAttribute('value');
            else
              item.textContent = inputObjectText.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_objectText'));
        }

        if(inputSolrId) {
          document.querySelectorAll('.EliteEight_Page_solrId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputSolrId.getAttribute('value');
            else
              item.textContent = inputSolrId.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_solrId'));
        }

        if(inputActualSweetSixteen) {
          document.querySelectorAll('.EliteEight_Page_actualSweetSixteen').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputActualSweetSixteen.getAttribute('value');
            else
              item.textContent = inputActualSweetSixteen.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_actualSweetSixteen'));
        }

        if(inputActualEliteEight) {
          document.querySelectorAll('.EliteEight_Page_actualEliteEight').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputActualEliteEight.getAttribute('value');
            else
              item.textContent = inputActualEliteEight.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_actualEliteEight'));
        }

        if(inputBracketId) {
          document.querySelectorAll('.EliteEight_Page_bracketId').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputBracketId.getAttribute('value');
            else
              item.textContent = inputBracketId.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_bracketId'));
        }

        if(inputName) {
          document.querySelectorAll('.EliteEight_Page_name').forEach((item, index) => {
            if(typeof item.value !== 'undefined')
              item.value = inputName.getAttribute('value');
            else
              item.textContent = inputName.textContent;
          });
          addGlow(document.querySelector('.EliteEight_Page_name'));
        }

          pageGraphEliteEight();
      });
    });
  }
}

function pageGraphEliteEight(apiRequest) {
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
          layout['title'] = 'elite eight brackets';
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
          Plotly.react('htmBodyGraphEliteEightPage', data, layout);
        }
      }
    }
  }
}

function animateStats() {
  document.querySelector('#pageSearchVal-fqEliteEight_time').innerText = '';
  searchPage('EliteEight', function() {
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
      document.querySelector('#fqEliteEight_time').value = x;
      document.querySelector('#fqEliteEight_time').onchange();
      searchPage('EliteEight');
    }, speedRate);
  });
}

// Search //

async function searchEliteEight($formFilters, success, error) {
  var filters = searchEliteEightFilters($formFilters);
  if(success == null)
    success = function( data, textStatus, jQxhr ) {};
  if(error == null)
    error = function( jqXhr, target2 ) {};

  searchEliteEightVals(filters, target, success, error);
}

function searchEliteEightFilters($formFilters) {
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

    var filterSweetSixteen = $formFilters.querySelector('.valueSweetSixteen')?.value;
    if(filterSweetSixteen != null && filterSweetSixteen !== '')
      filters.push({ name: 'fq', value: 'sweetSixteen:' + filterSweetSixteen });

    var filterGuesserId = $formFilters.querySelector('.valueGuesserId')?.value;
    if(filterGuesserId != null && filterGuesserId !== '')
      filters.push({ name: 'fq', value: 'guesserId:' + filterGuesserId });

    var filterYear = $formFilters.querySelector('.valueYear')?.value;
    if(filterYear != null && filterYear !== '')
      filters.push({ name: 'fq', value: 'year:' + filterYear });

    var filterSouthGame1WinnerGuess = $formFilters.querySelector('.valueSouthGame1WinnerGuess')?.value;
    if(filterSouthGame1WinnerGuess != null && filterSouthGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'southGame1WinnerGuess:' + filterSouthGame1WinnerGuess });

    var filterSouthGame1Winner = $formFilters.querySelector('.valueSouthGame1Winner')?.value;
    if(filterSouthGame1Winner != null && filterSouthGame1Winner !== '')
      filters.push({ name: 'fq', value: 'southGame1Winner:' + filterSouthGame1Winner });

    var filterSouthGame1Loser = $formFilters.querySelector('.valueSouthGame1Loser')?.value;
    if(filterSouthGame1Loser != null && filterSouthGame1Loser !== '')
      filters.push({ name: 'fq', value: 'southGame1Loser:' + filterSouthGame1Loser });

    var filterWestGame1WinnerGuess = $formFilters.querySelector('.valueWestGame1WinnerGuess')?.value;
    if(filterWestGame1WinnerGuess != null && filterWestGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'westGame1WinnerGuess:' + filterWestGame1WinnerGuess });

    var filterWestGame1Winner = $formFilters.querySelector('.valueWestGame1Winner')?.value;
    if(filterWestGame1Winner != null && filterWestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'westGame1Winner:' + filterWestGame1Winner });

    var filterWestGame1Loser = $formFilters.querySelector('.valueWestGame1Loser')?.value;
    if(filterWestGame1Loser != null && filterWestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'westGame1Loser:' + filterWestGame1Loser });

    var filterEastGame1WinnerGuess = $formFilters.querySelector('.valueEastGame1WinnerGuess')?.value;
    if(filterEastGame1WinnerGuess != null && filterEastGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'eastGame1WinnerGuess:' + filterEastGame1WinnerGuess });

    var filterEastGame1Winner = $formFilters.querySelector('.valueEastGame1Winner')?.value;
    if(filterEastGame1Winner != null && filterEastGame1Winner !== '')
      filters.push({ name: 'fq', value: 'eastGame1Winner:' + filterEastGame1Winner });

    var filterEastGame1Loser = $formFilters.querySelector('.valueEastGame1Loser')?.value;
    if(filterEastGame1Loser != null && filterEastGame1Loser !== '')
      filters.push({ name: 'fq', value: 'eastGame1Loser:' + filterEastGame1Loser });

    var filterMidwestGame1WinnerGuess = $formFilters.querySelector('.valueMidwestGame1WinnerGuess')?.value;
    if(filterMidwestGame1WinnerGuess != null && filterMidwestGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'midwestGame1WinnerGuess:' + filterMidwestGame1WinnerGuess });

    var filterMidwestGame1Winner = $formFilters.querySelector('.valueMidwestGame1Winner')?.value;
    if(filterMidwestGame1Winner != null && filterMidwestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Winner:' + filterMidwestGame1Winner });

    var filterMidwestGame1Loser = $formFilters.querySelector('.valueMidwestGame1Loser')?.value;
    if(filterMidwestGame1Loser != null && filterMidwestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Loser:' + filterMidwestGame1Loser });

    var filterFinalFour = $formFilters.querySelector('.valueFinalFour')?.value;
    if(filterFinalFour != null && filterFinalFour !== '')
      filters.push({ name: 'fq', value: 'finalFour:' + filterFinalFour });

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

function searchEliteEightVals(filters, target, success, error) {

  fetch(
    '/en-us/api/elite-eight?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

function suggestEliteEightSweetSixteen(filters, $list, bracketId = null, sweetSixteen = null, relate=true, target) {
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
        var checked = val == null ? false : (sweetSixteen != null && val === sweetSixteen.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_sweetSixteen_' + bracketId + '_eliteEight_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueSweetSixteen ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'SweetSixteen']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightSweetSixteen(filters, $list, bracketId, o[inputVar], relate, target);
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
  if (typeof searchSweetSixteenVals === 'function') {
    searchSweetSixteenVals(filters, target, success, error);
  }
}

function suggestEliteEightGuesserId(filters, $list, bracketId = null, guesserId = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'GuesserId']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightGuesserId(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightSouthGame1Winner(filters, $list, bracketId = null, southGame1Winner = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'SouthGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightSouthGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightSouthGame1Loser(filters, $list, bracketId = null, southGame1Loser = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'SouthGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightSouthGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightWestGame1Winner(filters, $list, bracketId = null, westGame1Winner = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'WestGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightWestGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightWestGame1Loser(filters, $list, bracketId = null, westGame1Loser = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'WestGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightWestGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightEastGame1Winner(filters, $list, bracketId = null, eastGame1Winner = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EastGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightEastGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightObjectSuggest($formFilters, $list, target) {
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
  searchEliteEightVals($formFilters, target, success, error);
}

function suggestEliteEightEastGame1Loser(filters, $list, bracketId = null, eastGame1Loser = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'EastGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightEastGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightMidwestGame1Winner(filters, $list, bracketId = null, midwestGame1Winner = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'MidwestGame1Winner']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightMidwestGame1Winner(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightMidwestGame1Loser(filters, $list, bracketId = null, midwestGame1Loser = null, relate=true, target) {
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
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'MidwestGame1Loser']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightMidwestGame1Loser(filters, $list, bracketId, o[inputVar], relate, target);
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

function suggestEliteEightFinalFour(filters, $list, bracketId = null, finalFour = null, relate=true, target) {
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
        var checked = val == null ? false : (finalFour != null && val === finalFour.toString());
        var $input = document.createElement('wa-checkbox');
        $input.setAttribute('id', 'GET_finalFour_' + bracketId + '_eliteEight_' + o[inputVar]);
        $input.setAttribute('name', inputVar);
        $input.setAttribute('data-target', target.getAttribute('id'));
        $input.value = o[inputVar];
        $input.setAttribute('class', 'valueFinalFour ');
        if(bracketId != null) {
          $input.addEventListener('change', function(event) {
            document.getElementById(event.target.getAttribute('data-target')).value = o[inputVar];
            patchEliteEightVals([{ name: 'fq', value: 'bracketId:' + bracketId }], { [(event.target.checked ? 'set' : 'remove') + 'FinalFour']: o[inputVar] }
                , target
                , function(response, target) {
                  addGlow(target);
                  suggestEliteEightFinalFour(filters, $list, bracketId, o[inputVar], relate, target);
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
  if (typeof searchFinalFourVals === 'function') {
    searchFinalFourVals(filters, target, success, error);
  }
}

// GET //

async function getEliteEight(pk) {
  fetch(
    '/en-us/api/elite-eight/' + bracketId
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

async function patchEliteEight($formFilters, $formValues, target, bracketId, success, error) {
  var filters = patchEliteEightFilters($formFilters);

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

  var valueSweetSixteen = (Array.from($formValues.querySelectorAll('.valueSweetSixteen')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSweetSixteen != null && valueSweetSixteen !== '')
    vals['setSweetSixteen'] = valueSweetSixteen;

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

  var valueSouthGame1WinnerGuess = $formValues.querySelector('.valueSouthGame1WinnerGuess')?.value;
  var removeSouthGame1WinnerGuess = $formValues.querySelector('.removeSouthGame1WinnerGuess')?.value === 'true';
  var setSouthGame1WinnerGuess = removeSouthGame1WinnerGuess ? null : $formValues.querySelector('.setSouthGame1WinnerGuess')?.value;
  var addSouthGame1WinnerGuess = $formValues.querySelector('.addSouthGame1WinnerGuess')?.value;
  if(removeSouthGame1WinnerGuess || setSouthGame1WinnerGuess != null && setSouthGame1WinnerGuess !== '')
    vals['setSouthGame1WinnerGuess'] = setSouthGame1WinnerGuess;
  if(addSouthGame1WinnerGuess != null && addSouthGame1WinnerGuess !== '')
    vals['addSouthGame1WinnerGuess'] = addSouthGame1WinnerGuess;
  var removeSouthGame1WinnerGuess = $formValues.querySelector('.removeSouthGame1WinnerGuess')?.value;
  if(removeSouthGame1WinnerGuess != null && removeSouthGame1WinnerGuess !== '')
    vals['removeSouthGame1WinnerGuess'] = removeSouthGame1WinnerGuess;

  var valueSouthGame1Winner = (Array.from($formValues.querySelectorAll('.valueSouthGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Winner != null && valueSouthGame1Winner !== '')
    vals['setSouthGame1Winner'] = valueSouthGame1Winner;

  var valueSouthGame1Loser = (Array.from($formValues.querySelectorAll('.valueSouthGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Loser != null && valueSouthGame1Loser !== '')
    vals['setSouthGame1Loser'] = valueSouthGame1Loser;

  var valueWestGame1WinnerGuess = $formValues.querySelector('.valueWestGame1WinnerGuess')?.value;
  var removeWestGame1WinnerGuess = $formValues.querySelector('.removeWestGame1WinnerGuess')?.value === 'true';
  var setWestGame1WinnerGuess = removeWestGame1WinnerGuess ? null : $formValues.querySelector('.setWestGame1WinnerGuess')?.value;
  var addWestGame1WinnerGuess = $formValues.querySelector('.addWestGame1WinnerGuess')?.value;
  if(removeWestGame1WinnerGuess || setWestGame1WinnerGuess != null && setWestGame1WinnerGuess !== '')
    vals['setWestGame1WinnerGuess'] = setWestGame1WinnerGuess;
  if(addWestGame1WinnerGuess != null && addWestGame1WinnerGuess !== '')
    vals['addWestGame1WinnerGuess'] = addWestGame1WinnerGuess;
  var removeWestGame1WinnerGuess = $formValues.querySelector('.removeWestGame1WinnerGuess')?.value;
  if(removeWestGame1WinnerGuess != null && removeWestGame1WinnerGuess !== '')
    vals['removeWestGame1WinnerGuess'] = removeWestGame1WinnerGuess;

  var valueWestGame1Winner = (Array.from($formValues.querySelectorAll('.valueWestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Winner != null && valueWestGame1Winner !== '')
    vals['setWestGame1Winner'] = valueWestGame1Winner;

  var valueWestGame1Loser = (Array.from($formValues.querySelectorAll('.valueWestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Loser != null && valueWestGame1Loser !== '')
    vals['setWestGame1Loser'] = valueWestGame1Loser;

  var valueEastGame1WinnerGuess = $formValues.querySelector('.valueEastGame1WinnerGuess')?.value;
  var removeEastGame1WinnerGuess = $formValues.querySelector('.removeEastGame1WinnerGuess')?.value === 'true';
  var setEastGame1WinnerGuess = removeEastGame1WinnerGuess ? null : $formValues.querySelector('.setEastGame1WinnerGuess')?.value;
  var addEastGame1WinnerGuess = $formValues.querySelector('.addEastGame1WinnerGuess')?.value;
  if(removeEastGame1WinnerGuess || setEastGame1WinnerGuess != null && setEastGame1WinnerGuess !== '')
    vals['setEastGame1WinnerGuess'] = setEastGame1WinnerGuess;
  if(addEastGame1WinnerGuess != null && addEastGame1WinnerGuess !== '')
    vals['addEastGame1WinnerGuess'] = addEastGame1WinnerGuess;
  var removeEastGame1WinnerGuess = $formValues.querySelector('.removeEastGame1WinnerGuess')?.value;
  if(removeEastGame1WinnerGuess != null && removeEastGame1WinnerGuess !== '')
    vals['removeEastGame1WinnerGuess'] = removeEastGame1WinnerGuess;

  var valueEastGame1Winner = (Array.from($formValues.querySelectorAll('.valueEastGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Winner != null && valueEastGame1Winner !== '')
    vals['setEastGame1Winner'] = valueEastGame1Winner;

  var valueEastGame1Loser = (Array.from($formValues.querySelectorAll('.valueEastGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Loser != null && valueEastGame1Loser !== '')
    vals['setEastGame1Loser'] = valueEastGame1Loser;

  var valueMidwestGame1WinnerGuess = $formValues.querySelector('.valueMidwestGame1WinnerGuess')?.value;
  var removeMidwestGame1WinnerGuess = $formValues.querySelector('.removeMidwestGame1WinnerGuess')?.value === 'true';
  var setMidwestGame1WinnerGuess = removeMidwestGame1WinnerGuess ? null : $formValues.querySelector('.setMidwestGame1WinnerGuess')?.value;
  var addMidwestGame1WinnerGuess = $formValues.querySelector('.addMidwestGame1WinnerGuess')?.value;
  if(removeMidwestGame1WinnerGuess || setMidwestGame1WinnerGuess != null && setMidwestGame1WinnerGuess !== '')
    vals['setMidwestGame1WinnerGuess'] = setMidwestGame1WinnerGuess;
  if(addMidwestGame1WinnerGuess != null && addMidwestGame1WinnerGuess !== '')
    vals['addMidwestGame1WinnerGuess'] = addMidwestGame1WinnerGuess;
  var removeMidwestGame1WinnerGuess = $formValues.querySelector('.removeMidwestGame1WinnerGuess')?.value;
  if(removeMidwestGame1WinnerGuess != null && removeMidwestGame1WinnerGuess !== '')
    vals['removeMidwestGame1WinnerGuess'] = removeMidwestGame1WinnerGuess;

  var valueMidwestGame1Winner = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Winner != null && valueMidwestGame1Winner !== '')
    vals['setMidwestGame1Winner'] = valueMidwestGame1Winner;

  var valueMidwestGame1Loser = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Loser != null && valueMidwestGame1Loser !== '')
    vals['setMidwestGame1Loser'] = valueMidwestGame1Loser;

  var valueFinalFour = (Array.from($formValues.querySelectorAll('.valueFinalFour')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueFinalFour != null && valueFinalFour !== '')
    vals['setFinalFour'] = valueFinalFour;

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

  patchEliteEightVals(bracketId == null ? deparam(window.location.search ? window.location.search.substring(1) : window.location.search) : [{name:'fq', value:'bracketId:' + bracketId}], vals, target, success, error);
}

function patchEliteEightFilters($formFilters) {
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

    var filterSweetSixteen = $formFilters.querySelector('.valueSweetSixteen')?.value;
    if(filterSweetSixteen != null && filterSweetSixteen !== '')
      filters.push({ name: 'fq', value: 'sweetSixteen:' + filterSweetSixteen });

    var filterGuesserId = $formFilters.querySelector('.valueGuesserId')?.value;
    if(filterGuesserId != null && filterGuesserId !== '')
      filters.push({ name: 'fq', value: 'guesserId:' + filterGuesserId });

    var filterYear = $formFilters.querySelector('.valueYear')?.value;
    if(filterYear != null && filterYear !== '')
      filters.push({ name: 'fq', value: 'year:' + filterYear });

    var filterSouthGame1WinnerGuess = $formFilters.querySelector('.valueSouthGame1WinnerGuess')?.value;
    if(filterSouthGame1WinnerGuess != null && filterSouthGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'southGame1WinnerGuess:' + filterSouthGame1WinnerGuess });

    var filterSouthGame1Winner = $formFilters.querySelector('.valueSouthGame1Winner')?.value;
    if(filterSouthGame1Winner != null && filterSouthGame1Winner !== '')
      filters.push({ name: 'fq', value: 'southGame1Winner:' + filterSouthGame1Winner });

    var filterSouthGame1Loser = $formFilters.querySelector('.valueSouthGame1Loser')?.value;
    if(filterSouthGame1Loser != null && filterSouthGame1Loser !== '')
      filters.push({ name: 'fq', value: 'southGame1Loser:' + filterSouthGame1Loser });

    var filterWestGame1WinnerGuess = $formFilters.querySelector('.valueWestGame1WinnerGuess')?.value;
    if(filterWestGame1WinnerGuess != null && filterWestGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'westGame1WinnerGuess:' + filterWestGame1WinnerGuess });

    var filterWestGame1Winner = $formFilters.querySelector('.valueWestGame1Winner')?.value;
    if(filterWestGame1Winner != null && filterWestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'westGame1Winner:' + filterWestGame1Winner });

    var filterWestGame1Loser = $formFilters.querySelector('.valueWestGame1Loser')?.value;
    if(filterWestGame1Loser != null && filterWestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'westGame1Loser:' + filterWestGame1Loser });

    var filterEastGame1WinnerGuess = $formFilters.querySelector('.valueEastGame1WinnerGuess')?.value;
    if(filterEastGame1WinnerGuess != null && filterEastGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'eastGame1WinnerGuess:' + filterEastGame1WinnerGuess });

    var filterEastGame1Winner = $formFilters.querySelector('.valueEastGame1Winner')?.value;
    if(filterEastGame1Winner != null && filterEastGame1Winner !== '')
      filters.push({ name: 'fq', value: 'eastGame1Winner:' + filterEastGame1Winner });

    var filterEastGame1Loser = $formFilters.querySelector('.valueEastGame1Loser')?.value;
    if(filterEastGame1Loser != null && filterEastGame1Loser !== '')
      filters.push({ name: 'fq', value: 'eastGame1Loser:' + filterEastGame1Loser });

    var filterMidwestGame1WinnerGuess = $formFilters.querySelector('.valueMidwestGame1WinnerGuess')?.value;
    if(filterMidwestGame1WinnerGuess != null && filterMidwestGame1WinnerGuess !== '')
      filters.push({ name: 'fq', value: 'midwestGame1WinnerGuess:' + filterMidwestGame1WinnerGuess });

    var filterMidwestGame1Winner = $formFilters.querySelector('.valueMidwestGame1Winner')?.value;
    if(filterMidwestGame1Winner != null && filterMidwestGame1Winner !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Winner:' + filterMidwestGame1Winner });

    var filterMidwestGame1Loser = $formFilters.querySelector('.valueMidwestGame1Loser')?.value;
    if(filterMidwestGame1Loser != null && filterMidwestGame1Loser !== '')
      filters.push({ name: 'fq', value: 'midwestGame1Loser:' + filterMidwestGame1Loser });

    var filterFinalFour = $formFilters.querySelector('.valueFinalFour')?.value;
    if(filterFinalFour != null && filterFinalFour !== '')
      filters.push({ name: 'fq', value: 'finalFour:' + filterFinalFour });

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

function patchEliteEightVal(filters, v, val, target, success, error) {
  var vals = {};
  vals[v] = val;
  patchEliteEightVals(filters, vals, target, success, error);
}

function patchEliteEightVals(filters, vals, target, success, error) {
  fetch(
    '/en-us/api/elite-eight?' + filters.map(function(m) { return m.name + '=' + encodeURIComponent(m.value) }).join('&')
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

async function postEliteEight($formValues, target, success, error) {
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

  var valueSweetSixteen = (Array.from($formValues.querySelectorAll('.valueSweetSixteen')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSweetSixteen != null && valueSweetSixteen !== '')
    vals['sweetSixteen'] = valueSweetSixteen;

  var valueGuesserId = (Array.from($formValues.querySelectorAll('.valueGuesserId')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueGuesserId != null && valueGuesserId !== '')
    vals['guesserId'] = valueGuesserId;

  var valueYear = $formValues.querySelector('.valueYear')?.value;
  if(valueYear != null && valueYear !== '')
    vals['year'] = valueYear;

  var valueSouthGame1WinnerGuess = $formValues.querySelector('.valueSouthGame1WinnerGuess')?.value;
  if(valueSouthGame1WinnerGuess != null && valueSouthGame1WinnerGuess !== '')
    vals['southGame1WinnerGuess'] = valueSouthGame1WinnerGuess;

  var valueSouthGame1Winner = (Array.from($formValues.querySelectorAll('.valueSouthGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Winner != null && valueSouthGame1Winner !== '')
    vals['southGame1Winner'] = valueSouthGame1Winner;

  var valueSouthGame1Loser = (Array.from($formValues.querySelectorAll('.valueSouthGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueSouthGame1Loser != null && valueSouthGame1Loser !== '')
    vals['southGame1Loser'] = valueSouthGame1Loser;

  var valueWestGame1WinnerGuess = $formValues.querySelector('.valueWestGame1WinnerGuess')?.value;
  if(valueWestGame1WinnerGuess != null && valueWestGame1WinnerGuess !== '')
    vals['westGame1WinnerGuess'] = valueWestGame1WinnerGuess;

  var valueWestGame1Winner = (Array.from($formValues.querySelectorAll('.valueWestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Winner != null && valueWestGame1Winner !== '')
    vals['westGame1Winner'] = valueWestGame1Winner;

  var valueWestGame1Loser = (Array.from($formValues.querySelectorAll('.valueWestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueWestGame1Loser != null && valueWestGame1Loser !== '')
    vals['westGame1Loser'] = valueWestGame1Loser;

  var valueEastGame1WinnerGuess = $formValues.querySelector('.valueEastGame1WinnerGuess')?.value;
  if(valueEastGame1WinnerGuess != null && valueEastGame1WinnerGuess !== '')
    vals['eastGame1WinnerGuess'] = valueEastGame1WinnerGuess;

  var valueEastGame1Winner = (Array.from($formValues.querySelectorAll('.valueEastGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Winner != null && valueEastGame1Winner !== '')
    vals['eastGame1Winner'] = valueEastGame1Winner;

  var valueEastGame1Loser = (Array.from($formValues.querySelectorAll('.valueEastGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueEastGame1Loser != null && valueEastGame1Loser !== '')
    vals['eastGame1Loser'] = valueEastGame1Loser;

  var valueMidwestGame1WinnerGuess = $formValues.querySelector('.valueMidwestGame1WinnerGuess')?.value;
  if(valueMidwestGame1WinnerGuess != null && valueMidwestGame1WinnerGuess !== '')
    vals['midwestGame1WinnerGuess'] = valueMidwestGame1WinnerGuess;

  var valueMidwestGame1Winner = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Winner')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Winner != null && valueMidwestGame1Winner !== '')
    vals['midwestGame1Winner'] = valueMidwestGame1Winner;

  var valueMidwestGame1Loser = (Array.from($formValues.querySelectorAll('.valueMidwestGame1Loser')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueMidwestGame1Loser != null && valueMidwestGame1Loser !== '')
    vals['midwestGame1Loser'] = valueMidwestGame1Loser;

  var valueFinalFour = (Array.from($formValues.querySelectorAll('.valueFinalFour')).filter(e => e.checked == true).find(() => true) ?? null)?.value;
  if(valueFinalFour != null && valueFinalFour !== '')
    vals['finalFour'] = valueFinalFour;

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
    '/en-us/api/elite-eight'
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

function postEliteEightVals(vals, target, success, error) {
  fetch(
    '/en-us/api/elite-eight'
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

async function deleteEliteEight(target, bracketId, success, error) {
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
    '/en-us/api/elite-eight/' + encodeURIComponent(bracketId)
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

async function putimportEliteEight($formValues, target, bracketId, success, error) {
  var json = $formValues.querySelector('.PUTImport_searchList')?.value;
  if(json != null && json !== '')
    putimportEliteEightVals(JSON.parse(json), target, success, error);
}

function putimportEliteEightVals(json, target, success, error) {
  fetch(
    '/en-us/api/elite-eight-import'
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

async function deletefilterEliteEight(target, success, error) {
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
    '/en-us/api/elite-eight'
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
