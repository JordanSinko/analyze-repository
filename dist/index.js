var v=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports);var b=v(y=>{"use strict";Object.defineProperty(y,"__esModule",{value:!0});function V(e){return e==null?"":typeof e=="string"||e instanceof String?e:JSON.stringify(e)}y.toCommandValue=V});var E=v(p=>{"use strict";var I=p&&p.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(p,"__esModule",{value:!0});const R=I(require("os")),S=b();function O(e,t,n){const i=new F(e,t,n);process.stdout.write(i.toString()+R.EOL)}p.issueCommand=O;function L(e,t=""){O(e,{},t)}p.issue=L;const C="::";class F{constructor(e,t,n){e||(e="missing.command"),this.command=e,this.properties=t,this.message=n}toString(){let e=C+this.command;if(this.properties&&Object.keys(this.properties).length>0){e+=" ";let t=!0;for(const n in this.properties)if(this.properties.hasOwnProperty(n)){const i=this.properties[n];i&&(t?t=!1:e+=",",e+=`${n}=${H(i)}`)}}return e+=`${C}${B(this.message)}`,e}}function B(e){return S.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A")}function H(e){return S.toCommandValue(e).replace(/%/g,"%25").replace(/\r/g,"%0D").replace(/\n/g,"%0A").replace(/:/g,"%3A").replace(/,/g,"%2C")}});var P=v(_=>{"use strict";var T=_&&_.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(_,"__esModule",{value:!0});const j=T(require("fs")),W=T(require("os")),x=b();function J(e,t){const n=process.env[`GITHUB_${e}`];if(!n)throw new Error(`Unable to find environment variable for file command ${e}`);if(!j.existsSync(n))throw new Error(`Missing file at path: ${n}`);j.appendFileSync(n,`${x.toCommandValue(t)}${W.EOL}`,{encoding:"utf8"})}_.issueCommand=J});var U=v(r=>{"use strict";var z=r&&r.__awaiter||function(e,t,n,i){function f(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function h(s){try{u(i.next(s))}catch(c){o(c)}}function g(s){try{u(i.throw(s))}catch(c){o(c)}}function u(s){s.done?a(s.value):f(s.value).then(h,g)}u((i=i.apply(e,t||[])).next())})},$=r&&r.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};Object.defineProperty(r,"__esModule",{value:!0});const l=E(),M=P(),Y=b(),w=$(require("os")),K=$(require("path"));var N;(function(e){e[e.Success=0]="Success",e[e.Failure=1]="Failure"})(N=r.ExitCode||(r.ExitCode={}));function Q(e,t){const n=Y.toCommandValue(t);process.env[e]=n;const i=process.env.GITHUB_ENV||"";if(i){const f="_GitHubActionsFileCommandDelimeter_",a=`${e}<<${f}${w.EOL}${n}${w.EOL}${f}`;M.issueCommand("ENV",a)}else l.issueCommand("set-env",{name:e},n)}r.exportVariable=Q;function X(e){l.issueCommand("add-mask",{},e)}r.setSecret=X;function Z(e){const t=process.env.GITHUB_PATH||"";t?M.issueCommand("PATH",e):l.issueCommand("add-path",{},e),process.env.PATH=`${e}${K.delimiter}${process.env.PATH}`}r.addPath=Z;function k(e,t){const n=process.env[`INPUT_${e.replace(/ /g,"_").toUpperCase()}`]||"";if(t&&t.required&&!n)throw new Error(`Input required and not supplied: ${e}`);return n.trim()}r.getInput=k;function ee(e,t){l.issueCommand("set-output",{name:e},t)}r.setOutput=ee;function te(e){l.issue("echo",e?"on":"off")}r.setCommandEcho=te;function ne(e){process.exitCode=N.Failure,A(e)}r.setFailed=ne;function ie(){return process.env.RUNNER_DEBUG==="1"}r.isDebug=ie;function re(e){l.issueCommand("debug",{},e)}r.debug=re;function A(e){l.issue("error",e instanceof Error?e.toString():e)}r.error=A;function se(e){l.issue("warning",e instanceof Error?e.toString():e)}r.warning=se;function ae(e){process.stdout.write(e+w.EOL)}r.info=ae;function D(e){l.issue("group",e)}r.startGroup=D;function G(){l.issue("endgroup")}r.endGroup=G;function oe(e,t){return z(this,void 0,void 0,function*(){D(e);let n;try{n=yield t()}finally{G()}return n})}r.group=oe;function ue(e,t){l.issueCommand("save-state",{name:e},t)}r.saveState=ue;function ce(e){return process.env[`STATE_${e}`]||""}r.getState=ce});var q=v(d=>{"use strict";var le=d&&d.__awaiter||function(e,t,n,i){function f(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function h(s){try{u(i.next(s))}catch(c){o(c)}}function g(s){try{u(i.throw(s))}catch(c){o(c)}}function u(s){s.done?a(s.value):f(s.value).then(h,g)}u((i=i.apply(e,t||[])).next())})};Object.defineProperty(d,"__esModule",{value:!0});d.wait=void 0;function fe(e){return le(this,void 0,void 0,function*(){return new Promise(t=>{if(isNaN(e))throw new Error("milliseconds not a number");setTimeout(()=>t("done!"),e)})})}d.wait=fe});"use strict";var pe=exports&&exports.__createBinding||(Object.create?function(e,t,n,i){i===void 0&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){i===void 0&&(i=n),e[i]=t[n]}),de=exports&&exports.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),me=exports&&exports.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&pe(t,e,n);return de(t,e),t},he=exports&&exports.__awaiter||function(e,t,n,i){function f(a){return a instanceof n?a:new n(function(o){o(a)})}return new(n||(n=Promise))(function(a,o){function h(s){try{u(i.next(s))}catch(c){o(c)}}function g(s){try{u(i.throw(s))}catch(c){o(c)}}function u(s){s.done?a(s.value):f(s.value).then(h,g)}u((i=i.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0});const m=me(U()),ge=q();function ve(){return he(this,void 0,void 0,function*(){try{const e=m.getInput("milliseconds");m.debug(`Waiting ${e} milliseconds ...`),m.debug(new Date().toTimeString()),yield ge.wait(parseInt(e,10)),m.debug(new Date().toTimeString()),m.setOutput("time",new Date().toTimeString())}catch(e){m.setFailed(e.message)}})}ve();
//# sourceMappingURL=index.js.map