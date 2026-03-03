Promise.all([
    customElements.whenDefined('wa-button')
    , customElements.whenDefined('wa-input')
    , customElements.whenDefined('wa-select')
    , customElements.whenDefined('wa-radio')
    , customElements.whenDefined('wa-checkbox')
    , customElements.whenDefined('wa-dropdown')
    ]).then(() => {

          // PATCH created
          document.querySelector('#Guesser_Page_created')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.checkValidity();
            if(valid) {
              var timeZone = event.currentTarget.getAttribute('data-zone');
              var t1 = moment(event.currentTarget.value, "YYYY-MM-DDTHH:mm");
              var t2 = moment.tz(event.currentTarget.value, "YYYY-MM-DDTHH:mm", timeZone);
              var t3 = new Date(t1._d);
              t3.setTime(t1.toDate().getTime() + t2.toDate().getTime() - t1.toDate().getTime());
              var t = moment(t3);
              if(t) {
                var s = t.tz(timeZone).format('YYYY-MM-DDTHH:mm:ss.000') + '[' + timeZone + ']';
                patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                    , 'setCreated', s
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Guesser_Page_created')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_created')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_created');
            const valid = form.reportValidity();
          });

          // PATCH archived
          document.querySelector('#Guesser_Page_archived')?.addEventListener('click', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.checkValidity();
            if(valid) {
              var confirmResponse = confirm('Are you sure you want to archive that?'); 
              if(confirmResponse) { 
                patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                    , 'setArchived', !(event.currentTarget.getAttribute('data-val') === 'true')
                    , event.currentTarget
                    , function(response, target) { addGlow(target); }
                    , function(response, target) { addError(target); }
                    );
              }
            }
          });
          document.querySelector('#Guesser_Page_archived')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_archived')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_archived');
            const valid = form.reportValidity();
          });

          // PATCH name
          document.querySelector('#Guesser_Page_name')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setName', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_name')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_name')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_name');
            const valid = form.reportValidity();
          });

          // PATCH description
          document.querySelector('#Guesser_Page_description')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setDescription', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_description')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_description')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_description');
            const valid = form.reportValidity();
          });

          // PATCH sessionId
          document.querySelector('#Guesser_Page_sessionId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setSessionId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_sessionId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_sessionId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_sessionId');
            const valid = form.reportValidity();
          });

          // PATCH userKey
          document.querySelector('#Guesser_Page_userKey')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setUserKey', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_userKey')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_userKey')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userKey');
            const valid = form.reportValidity();
          });

          // PATCH objectTitle
          document.querySelector('#Guesser_Page_objectTitle')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setObjectTitle', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_objectTitle')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_objectTitle')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_objectTitle');
            const valid = form.reportValidity();
          });

          // PATCH displayPage
          document.querySelector('#Guesser_Page_displayPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setDisplayPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_displayPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_displayPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_displayPage');
            const valid = form.reportValidity();
          });

          // PATCH editPage
          document.querySelector('#Guesser_Page_editPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setEditPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_editPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_editPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_editPage');
            const valid = form.reportValidity();
          });

          // PATCH userPage
          document.querySelector('#Guesser_Page_userPage')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setUserPage', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_userPage')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_userPage')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_userPage');
            const valid = form.reportValidity();
          });

          // PATCH download
          document.querySelector('#Guesser_Page_download')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setDownload', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_download')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_download')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_download');
            const valid = form.reportValidity();
          });

          // PATCH guesserId
          document.querySelector('#Guesser_Page_guesserId')?.addEventListener('change', (event) => {
            const form = document.querySelector('#PageForm_guesserId');
            const valid = form.checkValidity();
            if(valid) {
              patchGuesserVal([{ name: 'softCommit', value: 'true' }, { name: 'fq', value: 'guesserId:' + event.currentTarget.getAttribute('data-guesserId') }]
                  , 'setGuesserId', event.currentTarget.value
                  , event.currentTarget
                , function(response, target) { addGlow(target); }
                  , function(response, target) { addError(target); }
                  );
            }
          });
          document.querySelector('#Guesser_Page_guesserId')?.addEventListener('focus', (event) => {
            removeGlow(event.currentTarget);
          });
          document.querySelector('#Guesser_Page_guesserId')?.addEventListener('blur', (event) => {
            const form = document.querySelector('#PageForm_guesserId');
            const valid = form.reportValidity();
          });
});
